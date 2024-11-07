import { Card, CardContent, CardFooter, CardHeader } from "@/shared/ui/card";
import Plus from "@/shared/assets/plus.svg?react";
import AddPlus from "@/shared/assets/addplus.svg?react";
import { SneakerModel } from "../model/sneaker";
import { useCartStore } from "@/shared/lib/zustand/useCartStore";

export const SneakerCard = ({ id, title, price, imageUrl }: SneakerModel) => {
  const { addedItems, toggleItem } = useCartStore();
  const added = addedItems[id] || false;

  return (
    <Card className="bg-white rounded-xl flex flex-col justify-between">
      <CardHeader>
        <img width={130} height={110} src={imageUrl} alt={title} />
      </CardHeader>
      <CardContent>
        <p>{title}</p>
      </CardContent>
      <CardFooter className="flex items-end">
        <div className="flex items-center justify-between w-full">
          <div>
            <p className="text-sm text-gray-500">Цена:</p>
            <strong>{price} руб.</strong>
          </div>
          <div className="cursor-pointer" onClick={() => toggleItem(id)}>
            {added ? <AddPlus /> : <Plus />}
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};
