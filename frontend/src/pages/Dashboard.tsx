import { useState, useEffect } from "react";
//Components
import { BookUser, ShieldUser, SquareUserRound } from "lucide-react";
//Functions
import { listUsers } from "@/functions/user";
import type { ResUser } from "@/functions/types";

function Dashboard() {
  const [data, setData] = useState<ResUser[]>([]);
  const [admin, setAdmin] = useState<ResUser[]>([]);
  const [member, setMember] = useState<ResUser[]>([]);
  const token: string = localStorage.token;

  const fetchUser = () => {
    listUsers(token)
      .then((res) => {
        setData(res.data);
        setMember(res.data.filter((u: ResUser) => u.role.name == "User"));
        setAdmin(res.data.filter((u: ResUser) => u.role.name == "Admin"));
      })
      .catch((err) => {
        console.log("Fetch user fail!", err);
      });
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div className="space-y-2">
      {/* Title */}
      <div className="flex justify-between items-center">
        <h3 className="text-shadow-lg">Dashboard</h3>
      </div>

      {/* Data Card */}
      <section className="w-full px-5 space-y-5 my-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <div className="bg-gradient-to-r from-orange-200 to-pink-200 rounded-lg p-5 flex justify-between text-slate-600 shadow-lg shadow-orange-200/60">
            <div>
              <h3>All Users</h3>
              <h2 className="text-2xl my-5">
                {data ? `${data.length} users` : `0 user`}
              </h2>
            </div>
            <BookUser />
          </div>
          <div className="bg-gradient-to-r from-cyan-200 to-blue-200 rounded-lg p-5 flex justify-between text-slate-600 shadow-lg shadow-cyan-200/60">
            <div>
              <h3>Members</h3>
              <h2 className="text-2xl my-5">
                {member ? `${member.length} users` : `0 user`}
              </h2>
            </div>
            <SquareUserRound />
          </div>
          <div className="bg-gradient-to-r from-teal-200 to-emerald-200 rounded-lg p-5 flex justify-between text-slate-600 shadow-lg shadow-teal-200/60">
            <div>
              <h3>Admin</h3>
              <h2 className="text-2xl my-5">
                {admin ? `${admin.length} users` : `0 user`}
              </h2>
            </div>
            <ShieldUser />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Dashboard;
