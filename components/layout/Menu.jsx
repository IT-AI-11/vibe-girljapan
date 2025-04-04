


"use client";





import { sidebarLinks } from "@constants";
import Link from "next/link";
import { usePathname } from "next/navigation";


//* to LeftSideBar.jsx component
const Menu = () => {

  const pathname = usePathname();

  return (

     // кнопки навигации подкрашиваются при нажатии
    <div className="flex flex-col gap-2">
      {sidebarLinks.map((link) => {
        const isActive = pathname === link.route;

        return (

          // кнопки навигации подкрашиваются при нажатии
          <Link
            key={link.label}
            href={link.route}
            className={`flex gap-4 justify-start rounded-lg py-2 px-4 ${
              isActive && "bg-purple-1"
            }`}
          >
            {link.icon} <p className="text-light-1">{link.label}</p>
          </Link>


        );
      })}
    </div>
  );
};

export default Menu;
