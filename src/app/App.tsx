import { Navbar } from "@/widgets/Navbar";
import AppRouter from "./providers/router/ui/AppRouter";
import { useEffect } from "react";
import { useAuth } from "@/features/AuthByUsername/api/useAuth";
import { userStore } from "@/shared/lib/zustand/userStore";
import { USER_LOCALSTORAGE_KEY } from "@/shared/const/localstorage";
import { MoonLoader } from "react-spinners";

const token = localStorage.getItem(USER_LOCALSTORAGE_KEY);

const App = () => {
  const { setUser } = userStore();
  const { refetch, isPendingRefetch } = useAuth();

  useEffect(() => {
    const fetchUser = async () => {
      if (token) {
        try {
          const response = await refetch();
          if (response.data) {
            setUser(response.data);
          }
        } catch (error) {
          console.error("Ошибка при проверке авторизации:", error);
        }
      }
    };
    fetchUser();
  }, []);

  if (isPendingRefetch && token) {
    return (
      <div className="flex w-full justify-center items-center h-[100vh]">
        <MoonLoader color={"#36d7b7"} loading={true} size={70} />
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <AppRouter />
    </>
  );
};

export default App;
