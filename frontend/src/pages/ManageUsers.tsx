import { useState, useEffect } from "react";
//Components
import AddNewUser from "@/components/modal/AddNewUser";
import UsersTable from "@/components/table/UsersTable";
//Functions
import { listUsers } from "@/functions/user";
import type { ResUser } from "@/functions/types";

function ManageUsers() {
  const [data, setData] = useState<ResUser []>([]);
  const [update, setUpdate] = useState<boolean>(false);
  const token: string = localStorage.token;

  const fetchUser = () => {
    listUsers(token)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log("Fetch user fail!", err);
      });
  };
  

  useEffect(() => {
    fetchUser();
  }, [update]);

  return (
    <div className="space-y-2">
      {/* Title */}
      <div className="flex justify-between items-center">
        <h3 className="text-shadow-lg">User's List</h3>
        <AddNewUser setUpdate={setUpdate} />
      </div>

      {/* Table */}
      <UsersTable data={data} />
    </div>
  );
}

export default ManageUsers;
