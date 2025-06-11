//Components
import AddNewUser from "@/components/modal/AddNewUser";
import UsersTable from "@/components/table/UsersTable";

type Props = {};

function ManageUsers({}: Props) {
  return (
    <div className="space-y-2">
      {/* Title */}
      <div className="flex justify-between items-center">
        <h3 className="text-shadow-lg">User's List</h3>
        <AddNewUser />
      </div>

      {/* Table */}
      <UsersTable />
    </div>
  );
}

export default ManageUsers;
