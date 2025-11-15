import { ShortCard } from "./ShortCard";
import { useEffect, useState } from "react";

function Home() {
  const admin = JSON.parse(localStorage.getItem("admin"));
  const hostel = JSON.parse(localStorage.getItem("hostel"));

  const getRequests = async () => {
    const hostel = JSON.parse(localStorage.getItem("hostel"));
    console.log(hostel);
    const res = await fetch("http://localhost:3000/api/messoff/list", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ hostel: hostel._id }),
    });
    const data = await res.json();
    if (data.success) {
      data.list.map((req) => {
        req.id = req._id;
        req.from = new Date(req.leaving_date).toDateString().slice(4, 10);
        req.to = new Date(req.return_date).toDateString().slice(4, 10);
        req._id = req.student._id;
        req.student.name = req.student.name;
        req.student.room_no = req.student.room_no;
        req.status = req.status;
        req.title = `${req.student.name} [ Room: ${req.student.room_no}]`,
        req.desc = `${req.from} to ${req.to}`
      });
      setMessReqs(data.list);
    }
  };

  useEffect(()=> {
    getRequests();
  }, [])

  const [messReqs, setMessReqs] = useState([]);
  console.log(messReqs)

  return (
    <div className="w-full h-screen flex flex-col gap-3 items-center justify-center max-h-screen overflow-x-hidden overflow-y-auto pt-[400px] sm:pt-96 md:pt-96 lg:pt-80 xl:pt-20">
      <h1 className="text-white font-bold text-5xl text-center">
        Welcome <span className="text-blue-500">{admin.name || "admin"}!</span>
      </h1>
      <h1 className="text-white text-xl">Admin, {hostel.name || "hostel"}</h1>
      <div className="flex w-full gap-5 sm:px-20 pt-5 flex-wrap items-center justify-center">
        <ShortCard title="Total Students" number={200} />
        <ShortCard title="Total Complaints" number={50} />
      </div>
    </div>
  );
}

export default Home;
