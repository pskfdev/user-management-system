import { useState } from "react";
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
import { Eye, EyeOff, Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
//Functions
import { createUser } from "@/functions/user";

type Props = {
  setUpdate: Dispatch<SetStateAction<boolean>>;
};
type FormValues = {
  name: string;
  email: string;
  password: string;
  roleId: number;
};

function AddNewUser({ setUpdate }: Props) {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const token: string = localStorage.token;

  const form = useForm<FormValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      roleId: 2,
    },
  });

  const onSubmit = (data: FormValues) => {

    createUser(token, data)
      .then((res) => {
        setUpdate((prev:boolean) => !prev)
        toast.success(res.data.message);
      })
      .catch((err) => {
        console.log("Create user fail!", err);
        toast.error("Create user Fail!!");
      });
    form.reset();
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="btn-indigo">
          <Plus /> Add new user
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-center uppercase">
            Add new user
          </DialogTitle>
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
              name="email"
              rules={{
                required: "Please enter your email.",
                pattern: {
                  value: /^[^@]+@[^@]+\.[^@]+$/,
                  message: "Incorrect email format.",
                },
              }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      className="text-sm"
                      placeholder="email@example.com"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              rules={{ required: "Please enter your password." }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input
                        type={showPassword ? "text" : "password"}
                        className="text-sm pr-10"
                        placeholder="Password"
                        {...field}
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword((prev) => !prev)}
                        className={cn(
                          "absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-black"
                        )}
                      >
                        {showPassword ? (
                          <EyeOff size={18} />
                        ) : (
                          <Eye size={18} />
                        )}
                      </button>
                    </div>
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

export default AddNewUser;
