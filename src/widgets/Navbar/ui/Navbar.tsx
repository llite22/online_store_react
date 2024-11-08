import { getRouteMain, getRouteProfile } from "@/shared/const/router";
import { useCartStore } from "@/shared/lib/zustand/useCartStore";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  const { totalPrice } = useCartStore();
  return (
    <header className="flex justify-between border-b border-slate-200 px-10 py-8">
      <NavLink to={getRouteMain()}>
        <div className="flex items-center">
          <img width="40" src="/logo.png" alt="Logo" />
          <div>
            <h2 className="text-xl font-bold uppercase">Online store React</h2>
            <p className="text-slate-500">The best online store</p>
          </div>
        </div>
      </NavLink>
      <ul className="flex items-center gap-10">
        <li className="flex items-center gap-3 cursor-pointer text-gray-500 hover:text-black">
          <img src="/cart.svg" alt="Cart" />
          <b>{totalPrice} ₽</b>
        </li>
        {/* <a href="#">
          <li className="flex items-center gap-3 cursor-pointer text-gray-500 hover:text-black">
            <img src="/heart.svg" alt="Heart" />
            <span>Закладки</span>
          </li>
        </a> */}
        <NavLink to={getRouteProfile()}>
          <li className="flex items-center gap-3 cursor-pointer text-gray-500 hover:text-black">
            <img src="/profile.svg" alt="Profile" />
            <span>Профиль</span>
          </li>
        </NavLink>
      </ul>
    </header>
  );
};
