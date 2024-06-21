'use client';
import Link from "next/link";
import Brand from "./Icons";
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { Button } from "./Button";
import { conteudos } from "@/constants";

export function Navbar() {

  return (
    <nav className="flexCenter flex-col gap-y-4 mb-28">
      <div className="min-w-full bg-gray-40 p-4">
        <Link href="/" className="flexCenter gap-x-2">
          <Brand />
          <h1 className="text-3xl font-bold text-gray-100">LOLGIX</h1>
        </Link>
      </div>
      <ul className="flexCenter gap-x-8 relative">
        <li>
          <DropdownMenu.Root>
            <DropdownMenu.Trigger>
              Conteúdos ▼
            </DropdownMenu.Trigger>
            <DropdownMenu.Content className="p-2 rounded-md shadow-xl">
              <DropdownMenu.Item className="p-2 hover:bg-gray-10"><Link href={conteudos[0].href}>{conteudos[0].title}</Link></DropdownMenu.Item>
              <DropdownMenu.Item className="p-2 hover:bg-gray-10"><Link href={conteudos[1].href}>{conteudos[1].title}</Link></DropdownMenu.Item>
              <DropdownMenu.Item className="p-2 hover:bg-gray-10"><Link href={conteudos[2].href}>{conteudos[2].title}</Link></DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu.Root>
        </li>
        <li>
          <Link href="/developers"><Button text="Sobre" /></Link>
        </li>
      </ul>
    </nav>
  );
}