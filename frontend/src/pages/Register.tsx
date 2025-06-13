import { useState } from "react";
import { Link } from "react-router";
import { useForm } from "react-hook-form";
//Components
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Eye, EyeOff } from "lucide-react";
import { toast } from "sonner"
import { cn } from "@/lib/utils";
//Functions
import { register } from "@/functions/auth";

type RegisterFormValues = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const form = useForm<RegisterFormValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const password = form.watch("password");

  const onSubmit = (data: RegisterFormValues) => {
    if (data.password !== data.confirmPassword) {
      form.setError("confirmPassword", {
        type: "validate",
        message: "Password does not match.",
      });
      return;
    }

    register(data)
      .then((res) => {
        toast.success(res.data.message)
      })
      .catch((err) => {
        console.log("register fail!", err);
        toast.error("Register Fail!!")
      });
    form.reset()
  };

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>
          <h2 className="uppercase text-center text-shadow-lg">Register</h2>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="name"
              rules={{ required: "Please enter your name." }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>name</FormLabel>
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
              name="confirmPassword"
              rules={{
                required: "Please confirm your password.",
                validate: (value) =>
                  value === password || "Password does not match.",
              }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirm password</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input
                        type={showConfirmPassword ? "text" : "password"}
                        className="text-sm pr-10"
                        placeholder="Confirm password"
                        {...field}
                      />
                      <button
                        type="button"
                        onClick={() => setShowConfirmPassword((prev) => !prev)}
                        className={cn(
                          "absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-black"
                        )}
                      >
                        {showConfirmPassword ? (
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

            <div className="space-y-2">
              <Button type="submit" className="w-full btn-indigo">
                Submit
              </Button>
              <Button variant="ghost" className="w-full text-slate-500" asChild>
                <Link to="/login">Login</Link>
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}

export default Register;
