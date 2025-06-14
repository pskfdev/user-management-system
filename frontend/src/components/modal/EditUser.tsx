import { useEffect } from "react";
import { useForm } from "react-hook-form";
import type { Dispatch, SetStateAction } from "react";
//Components
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { SquarePen } from "lucide-react";
import { toast } from "sonner";
//Functions
import { readUsers, updateUser } from "@/functions/user";

type Props = {
  userId: number;
  setUpdate: Dispatch<SetStateAction<boolean>>;
};
type FormValues = {
  name: string;
  roleId: number;
};

function EditUser({ userId, setUpdate }: Props) {
  const token: string = localStorage.token;

  const form = useForm<FormValues>({
    defaultValues: {
      name: "",
      roleId: 2,
    },
  });

  const onSubmit = (data: FormValues) => {
    updateUser(token, data, userId)
      .then((res) => {
        setUpdate((prev: boolean) => !prev);
        toast.success(res.data.message);
      })
      .catch((err) => {
        console.log("Edit user fail!", err);
        toast.error("Edit user Fail!!");
      });
    form.reset();
  };

  useEffect(() => {
    readUsers(token, userId).then((res) => {
      form.reset({
        name: res.data.name,
        roleId: res.data.role?.id,
      });
    });
  }, []);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <SquarePen className="text-orange-400 mx-auto cursor-pointer" />
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-center uppercase">Edit user</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="name"
              rules={{ required: "Please enter your name." }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      className="text-sm"
                      placeholder="name"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="roleId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Role</FormLabel>
                  <Select
                    onValueChange={(value) => field.onChange(Number(value))}
                    defaultValue={String(field.value)}
                  >
                    <FormControl className="w-full">
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select a role" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="1">Admin</SelectItem>
                      <SelectItem value="2">User</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="btn-indigo w-full">
              Submit
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}

export default EditUser;
