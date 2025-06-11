import { BookUser, ShieldUser, SquareUserRound } from "lucide-react";

type Props = {};

function Dashboard({}: Props) {
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
              <h2 className="text-2xl my-5">12 users</h2>
            </div>
            <BookUser />
          </div>
          <div className="bg-gradient-to-r from-cyan-200 to-blue-200 rounded-lg p-5 flex justify-between text-slate-600 shadow-lg shadow-cyan-200/60">
            <div>
              <h3>Members</h3>
              <h2 className="text-2xl my-5">10 users</h2>
            </div>
            <SquareUserRound />
          </div>
          <div className="bg-gradient-to-r from-teal-200 to-emerald-200 rounded-lg p-5 flex justify-between text-slate-600 shadow-lg shadow-teal-200/60">
            <div>
              <h3>Admin</h3>
              <h2 className="text-2xl my-5">2 users</h2>
            </div>
            <ShieldUser />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Dashboard;
