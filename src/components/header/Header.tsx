"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MdMenu, MdOutlineOpenInNew } from "react-icons/md";

export const Header = () => {
  const currentPath = usePathname();

  return (
    <nav className="flex items-center gap-6 justify-start md:justify-center bg-primary py-4 px-6">
      <button className="sm:hidden">
        <MdMenu size={24} />
      </button>

      <ul className="flex gap-4 items-center">
        <li className="my-2">
          <Link href="/" className="border rounded-md py-2 px-3 font-bold">
            CODARSE
          </Link>
        </li>
        <li className="hidden sm:block">
          <Link
            href="/"
            data-active={currentPath === "/"}
            className="data-[active=true]:underline"
          >
            Página Inicial
          </Link>
        </li>
        <li className="hidden sm:block">
          <Link
            href="/cursos"
            data-active={currentPath === "/cursos"}
            className="data-[active=true]:underline"
          >
            Cursos
          </Link>
        </li>
        <li className="hidden sm:block">
          <Link
            href="https://blog.codarse.com"
            target="_blank"
            className="flex items-center gap-1"
          >
            Blog
            <MdOutlineOpenInNew />
          </Link>
        </li>
      </ul>

      <h1 className="sm:hidden">CodarSe - Página inicial</h1>
    </nav>
  );
};
