import { useState, useMemo } from "react";
import type { Dispatch, SetStateAction } from "react";
//Components
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Trash2 } from "lucide-react";
import type { ResUser } from "@/functions/types";
import EditUser from "../modal/EditUser";
import { toast } from "sonner";
//Functions
import { deleteUser } from "@/functions/user";

type Props = {
  data: ResUser[];
  setUpdate: Dispatch<SetStateAction<boolean>>;
  admin: boolean;
};

const ITEMS_PER_PAGE = 10;

function UsersTable({ data, setUpdate, admin }: Props) {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const token: string = localStorage.token;

  const filteredData = useMemo(() => {
    return data.filter((user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm, data]);

  const totalPages = Math.ceil(filteredData.length / ITEMS_PER_PAGE);

  const paginatedData = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredData.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredData, currentPage]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1); // reset กลับหน้าแรกทุกครั้งที่ค้นหา
  };

  const handleNext = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  const handlePrevious = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleRemove = (id: number) => {
    if (window.confirm("Are you sure delete!")) {
      deleteUser(token, id)
        .then((res) => {
          setUpdate((prev: boolean) => !prev);
          toast.success(res.data.message);
        })
        .catch((err) => {
          console.log("Remove user Fail!", err);
          toast.error("Remove user Fail!");
        });
    }
  };

  return (
    <div className="w-full px-5 space-y-5 my-5">
      {/* Input search */}
      <div className="flex justify-center items-center">
        <Input
          placeholder="Search by name"
          type="search"
          className="max-w-3xl"
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>

      {/* Table */}
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Role</TableHead>
            {admin && (
              <TableHead className="text-center w-[100px]">Actions</TableHead>
            )}
          </TableRow>
        </TableHeader>
        <TableBody>
          {paginatedData.length ? (
            paginatedData.map((user) => (
              <TableRow key={user.id}>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>
                  <span
                    className={`w-fit py-1 px-2 rounded-lg border ${
                      user.role.name === "Admin"
                        ? "border-blue-400 bg-blue-100 text-blue-800"
                        : "border-amber-400 bg-amber-100 text-amber-800"
                    }`}
                  >
                    {user.role.name}
                  </span>
                </TableCell>
                {admin && (
                  <TableCell className="flex items-center space-x-2">
                    <EditUser userId={user.id} setUpdate={setUpdate} />
                    <Trash2
                      className="text-red-500 mx-auto cursor-pointer"
                      onClick={() => handleRemove(user.id)}
                    />
                  </TableCell>
                )}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={4} className="h-24 text-center">
                No results found.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>

      {/* Pagination */}
      <div className="flex justify-between items-center py-4">
        <p className="text-sm text-muted-foreground">
          Page {currentPage} of {totalPages || 1}
        </p>
        <div className="flex space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={handlePrevious}
            disabled={currentPage === 1}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={handleNext}
            disabled={currentPage === totalPages || totalPages === 0}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}

export default UsersTable;
