import { Button } from "@/shared/ui/button";

export const PageError = () => {
  const reloadPage = () => {
    location.reload();
  };

  return (
    <div className="flex flex-col justify-center items-center w-full h-[100vh]">
      <p>Произошла непредвиденная ошибка</p>
      <Button onClick={reloadPage}>Обновить страницу</Button>
    </div>
  );
};
