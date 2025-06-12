function Profile() {
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
              username
            </h2>
            <div className="w-[50px] mt-1 border-b-4 border-indigo-500 rounded-xl"></div>
          </div>

          <div className="space-y-5 tracking-wider">
            <h4>
              <span className="text-indigo-500 uppercase">user: </span>
              username
            </h4>
            <h4>
              <span className="text-indigo-500 uppercase">name: </span>
              name
            </h4>
            <h4>
              <span className="text-indigo-500 uppercase">role: </span>
              role
            </h4>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Profile;
