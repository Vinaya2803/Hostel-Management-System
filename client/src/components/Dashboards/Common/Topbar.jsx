import PropTypes from "prop-types";

Topbar.propTypes = {
  name: PropTypes.string,
  notifications: PropTypes.array,
};

function Topbar({ name, notifications }) {
  return (
    <div className="py-5 px-5 flex items-center justify-end text-white w-full bg-stone-950 shadow-lg absolute top-0 md:w-[83.3vw] md:ml-[16.7vw]">
      <div className="flex gap-3">
        <div className="relative group cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 hover:text-blue-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
            />
          </svg>
          <div className="absolute bg-neutral-800 -bottom-15 right-2 p-5 w-96 hidden group-hover:flex flex-col rounded-xl">
            <ul className="[&>*:nth-child(1)]:border-t-0">
              {notifications.map((noti) => (
                <li
                  key={noti}
                  className="py-5 px-5 flex justify-between items-center text-md border-t-[1px] border-neutral-500 transition-all hover:bg-neutral-900 hover:rounded-xl hover:scale-105 hover:shadow-xl hover:border-transparent"
                >
                  New account request from {noti}
                  <span className="group/edit relative flex">
                    <span className="text-md hidden absolute w-32 -left-12 top-7 bg-black text-center group-hover/edit:block rounded">
                      Mark as read.
                    </span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Topbar };
