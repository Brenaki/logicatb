'use client';
import Link from "next/link";
import Brand from "./Icons";
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { Button } from "./Button";
import { conteudos } from "@/constants";

export function Navbar() {

  return (
    <nav className="flexCenter flex-col gap-y-4 p-4 mb-20">
      <Link href="/" className="flexCenter gap-x-2">
        <Brand />
        <h1 className="text-3xl font-bold text-">LOLGIX</h1>
      </Link>
      <ul className="flexCenter gap-x-8 relative">
        <li>
          <DropdownMenu.Root>
            <DropdownMenu.Trigger>
              Conteudos ▼
            </DropdownMenu.Trigger>
            <DropdownMenu.Content className="p-2 rounded-md shadow-xl">
              <DropdownMenu.Item className="p-1"><Link href={conteudos[0].href}>{conteudos[0].title}</Link></DropdownMenu.Item>
              <DropdownMenu.Item className="p-1"><Link href={conteudos[1].href}>{conteudos[1].title}</Link></DropdownMenu.Item>
              <DropdownMenu.Item className="p-1"><Link href={conteudos[2].href}>{conteudos[2].title}</Link></DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu.Root>
        </li>
        <li>
          <Link href="/developers"><Button text="Desenvolvimento" /></Link>
        </li>
      </ul>
    </nav>
  );
}