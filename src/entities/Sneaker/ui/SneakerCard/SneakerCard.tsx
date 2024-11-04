import { Card, CardContent, CardFooter, CardHeader } from "@/shared/ui/card";
import Plus from "@/shared/assets/plus.svg?react";
import AddPlus from "@/shared/assets/addplus.svg?react";
import { useState } from "react";
import { SneakerModel } from "../model/sneaker";

export const SneakerCard = ({ id, title, price, imageUrl }: SneakerModel) => {
  const [added, setAdded] = useState<boolean>(false);

  const addCartProduct = () => {
    setAdded(!added);
  };

  return (
    <div className="flex items-center justify-center">
      <Card className="bg-white rounded-xl w-[210px]">
        <CardHeader>
          <img width={130} height={110} src={imageUrl} alt={title} />
        </CardHeader>
        <CardContent>
          <p>{title}</p>
        </CardContent>
        <CardFooter>
          <div className="flex items-center justify-between w-full">
            <div>
              <p className="text-sm text-gray-500">Цена:</p>
              <strong>{price} руб.</strong>
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
