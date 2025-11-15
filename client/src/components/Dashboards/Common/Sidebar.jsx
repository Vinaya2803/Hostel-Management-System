import { Link, useLocation, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

Sidebar.propTypes = {
  links: PropTypes.shape({
    text: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    for: PropTypes.string.isRequired,
    svg: PropTypes.element.isRequired,
  }).isRequired,
};

function Sidebar({ links }) {
  const navigate = useNavigate();
  let logout = () => {
    localStorage.removeItem("student");
    localStorage.removeItem("token");
    navigate("/");
  };
  const location = useLocation();

  return (
    <div>
      <div className="flex flex-col justify-between h-screen w-screen absolute md:static sm:w-64 bg-black text-white transition-transform duration-300 ease-in-out z-40 transform ">
        <div className="py-4 px-4 md:py-5 lg:py-4 gap-2 bg-blue-700 flex items-center text-2xl">
          <span className="md:hidden lg:inline">Dashboard</span>
        </div>
        <div className="flex flex-col space-y-1 text-2xl text-white">
          {links.map((link) => (
            <Link
              to={link.url}
              key={link.text}
              className={`py-2 px-4 flex items-center gap-2 ${
                location.pathname === link.url
                  ? "text-blue-500"
                  : "hover:text-blue-500"
              }`}
            >
              {link.svg}
              {link.text}
            </Link>
          ))}
        </div>
        <div className="p-4">
          <button
            onClick={logout}
            type="submit"
            className="w-full flex gap-2 justify-center text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
}

export { Sidebar };
