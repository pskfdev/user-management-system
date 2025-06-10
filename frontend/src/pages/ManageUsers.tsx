//Components
import UsersTable from "@/components/table/UsersTable";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"


type Props = {};

function ManageUsers() {
  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <h3 className="">User's List</h3>
        <Button>Add new user</Button>
      </div>

      {/* Table */}
      <div className="px-5">
        <UsersTable />
      </div>
    </div>
  );
}

export default ManageUsers;
