import { Card, CardContent, CardFooter, CardHeader } from "@/shared/ui/card";
import Plus from "@/shared/assets/plus.svg?react";
import AddPlus from "@/shared/assets/addplus.svg?react";
import { useState } from "react";

export const SneakerCard = () => {
  const [added, setAdded] = useState<boolean>(false);

  const addCartProduct = () => {
    setAdded(!added);
  };

  return (
    <div className="flex items-center justify-center">
      <Card className="bg-white rounded-xl w-[210px]">
        <CardHeader>
          <img width={130} height={110} src="sneakers-1.jpg" alt="" />
        </CardHeader>
        <CardContent>
          <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
        </CardContent>
        <CardFooter>
          <div className="flex items-center justify-between w-full">
            <div>
              <p className="text-sm text-gray-500">Цена:</p>
              <strong>12 999 руб.</strong>
            </div>
            <div className="cursor-pointer" onClick={addCartProduct}>
              {added ? <AddPlus /> : <Plus />}
            </div>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};
