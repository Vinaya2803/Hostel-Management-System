import { Outlet } from "react-router-dom";
import { Sidebar } from "../Common/Sidebar";
import { Topbar } from "../Common/Topbar";

export default function Index() {
  const dashboard = "student";
  const links = [
    {
      text: "Home",
      url: "/student-dashboard",
      for: dashboard,
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
          />
        </svg>
      ),
    },
    {
      text: "Mess Off",
      url: "/student-dashboard/mess",
      svg: (
        <svg
          className="h-7 w-7"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {" "}
          <path stroke="none" d="M0 0h24v24H0z" />{" "}
          <path d="M3 19l15 -15l3 3l-6 6l2 2a14 14 0 0 1 -14 4" />
        </svg>
      ),
    },
    {
      text: "Invoices",
      url: "/student-dashboard/invoices",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"
          />
        </svg>
      ),
    },
    {
      text: "Complaints",
      url: "/student-dashboard/complaints",
      svg: (
        <svg
          className="h-6 w-6"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {" "}
          <circle cx="12" cy="12" r="10" />{" "}
          <path d="M16 16s-1.5-2-4-2-4 2-4 2" />{" "}
          <line x1="9" y1="9" x2="9.01" y2="9" />{" "}
          <line x1="15" y1="9" x2="15.01" y2="9" />
        </svg>
      ),
    }
  ];

  const student = JSON.parse(localStorage.getItem("student"));

  return (
    <div className="flex">
      <Sidebar links={links} />
      <Topbar name={student.name} notifications={[]} />
      <div className="w-full bg-stone-900 h-screen">
        <Outlet />
      </div>
    </div>
  );
}
