import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/shared/ui/form";
import { MoonLoader } from "react-spinners";
import { Input } from "@/shared/ui/input";
import { Button } from "@/shared/ui/button";
import { useAuth } from "../api/useAuth";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Логин должен содержать не менее 2 символов",
  }),
  password: z
    .string()
    .min(2, { message: "Пароль должен содержать не менее 2 символов" }),
});

const LoginForm = () => {
  const { mutate, isPending, isError } = useAuth();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  if (isPending) {
    return (
      <div className="flex w-full justify-center items-center h-[100vh]">
        <MoonLoader color={"#36d7b7"} loading={true} size={70} />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex justify-center items-center h-[100vh]">Error</div>
    );
  }

  const onSubmit = (data: z.infer<typeof formSchema>) => mutate(data);

  return (
    <div className="flex justify-center items-center w-full h-[80vh]">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="border-4 border-double rounded-lg border-orange-500 p-16"
        >
          <div className="min-w-[300px] space-y-8">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Логин</FormLabel>
                  <FormControl>
                    <Input
                      autoFocus
                      className="border-4 border-double rounded-lg border-orange-500"
                      placeholder="Логин"
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
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Пароль</FormLabel>
                  <FormControl>
                    <Input
                      className="border-4 border-double rounded-lg border-orange-500"
                      placeholder="Пароль"
                      type="password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              className="w-full border-4 border-double rounded-lg border-orange-500 bg-orange-800 text-white"
              type="submit"
            >
              Войти
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default LoginForm;
