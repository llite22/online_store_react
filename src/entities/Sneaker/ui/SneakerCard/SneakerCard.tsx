import AddPlus from "@/shared/assets/addplus.svg?react";
import Plus from "@/shared/assets/plus.svg?react";
import { useCartStore } from "@/shared/lib/zustand/useCartStore";
import { Card, CardContent, CardFooter, CardHeader } from "@/shared/ui/card";
import { SneakerModel } from "../model/types/sneaker";

export const SneakerCard = (props: SneakerModel) => {
  const { items, toggleItem } = useCartStore();
  const added = items[props.id] || false;

  return (
    <Card className="bg-white rounded-xl flex flex-col justify-between">
      <CardHeader>
        <img width={130} height={110} src={props.imageUrl} alt={props.title} />
      </CardHeader>
      <CardContent>
        <p>{props.title}</p>
      </CardContent>
      <CardFooter>
        <div className="flex items-center justify-between w-full">
          <div>
            <p className="text-sm text-gray-500">Цена:</p>
            <strong>{props.price} руб.</strong>
          </div>
          <div
            className="cursor-pointer"
            onClick={() => toggleItem(props)}
          >
            {added ? <AddPlus /> : <Plus />}
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};
