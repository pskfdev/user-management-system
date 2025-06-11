//Components
import UsersTable from "@/components/table/UsersTable";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

type Props = {};

function ManageUsers() {
  return (
    <div className="space-y-2">
      {/* Title */}
      <div className="flex justify-between items-center">
        <h3 className="">User's List</h3>
        <Button className="btn-indigo">
          <Plus /> Add new user
        </Button>
      </div>

      {/* Table */}
      <UsersTable />
    </div>
  );
}

export default ManageUsers;
