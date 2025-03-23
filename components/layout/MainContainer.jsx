

"use client"


import {
  Home,
  AddPhotoAlternateOutlined,
  GroupOutlined,
  BookmarksOutlined,
  FavoriteBorder,
} from "@mui/icons-material";




import TopBar from "./TopBar";
import { pageTitles } from "@constants";// ДИНАМИЧЕСКИЕ СТРАНИЦЫ БЕЗ ИСПОЛЬЗОВАНИЯ .map()
import { usePathname } from "next/navigation";


//* to (root)/layout.js ==> в основнойlayout.js
const MainContainer = ({ children }) => {
  // Get the current url path
  const currentPath = usePathname();

  // ШАГ 1
  // ДИНАМИЧЕСКИЕ СТРАНИЦЫ БЕЗ ИСПОЛЬЗОВАНИЯ .map()
  // URL
  const regex = /^\/([^\/]+)/;
  const firstPath = currentPath.match(regex)
    ? currentPath.match(regex)[0]
    : currentPath;

  // ШАГ 2
  // Get title of current path
  // ДИНАМИЧЕСКИЕ СТРАНИЦЫ БЕЗ ИСПОЛЬЗОВАНИЯ .map()
  // САМИ СТРАНИЦЫ
  const title = pageTitles.find((page) => page.url === firstPath)?.title || "";

  return (
    <section className="flex flex-col flex-1 max-w-3xl 2xl:max-w-5xl px-4 md:px-10 lg:px-4 xl:px-20">
      <TopBar />
      <div className="mt-6 mb-20">
        <h1 className="mb-5 text-heading2-bold max-sm:text-heading3-bold text-light-1">
          {title}
        </h1>
        <div className="h-screen overflow-y-scroll custom-scrollbar">
          {children}
        </div>
      </div>
    </section>
  );
};

export default MainContainer;
