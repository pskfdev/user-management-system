import { useState, useEffect } from "react";
//Functions
import { readProfile } from "@/functions/user";
import type { ResProfile } from "@/functions/types";

function Profile() {
  const [data, setData] = useState<ResProfile>();
  const token: string = localStorage.token;

  const fetchUser = () => {
    readProfile(token)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log("register fail!", err);
      });
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <main className="space-y-2 flex flex-col items-center">
      {/* Title */}
      <div className="w-full">
        <h3 className="text-shadow-lg tracking-wider">Profile</h3>
      </div>

      {/* Card Profile */}
      <section className="w-full max-w-3xl p-10 mt-10 rounded-xl text-slate-600 shadow-lg shadow-cyan-100/80 bg-gradient-to-r from-cyan-50 to-blue-100">
        <div className="mx-auto text-center space-y-10">
          <div className="flex flex-col items-center">
            <h2 className="text-center uppercase flex items-center tracking-wider">
              {data?.name}
            </h2>
            <div className="w-[50px] mt-1 border-b-4 border-indigo-500 rounded-xl"></div>
          </div>

          <div className="space-y-5 tracking-wider text-start mx-auto w-fit">
            <h4>
              <span className="text-indigo-500 uppercase">name: </span>
              {data?.name}
            </h4>
            <h4>
              <span className="text-indigo-500 uppercase">role: </span>
              {data?.role}
            </h4>
            <h4>
              <span className="text-indigo-500 uppercase">email: </span>
              {data?.email}
            </h4>
            <h4>
              <span className="text-indigo-500 uppercase">permissions: </span>
              {data?.permissions.join(" ")}
            </h4>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Profile;
