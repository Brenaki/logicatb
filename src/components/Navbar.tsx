'use client';
import Link from "next/link";
import Brand from "./Icons";
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { Button } from "./Button";

export function Navbar() {

  return (
    <nav className="flexCenter flex-col gap-y-4 p-4">
      <Link href="/" className="flexCenter gap-x-2">
        <Brand />
        <h1 className="text-3xl font-bold">LOLGIX</h1>
      </Link>
      <ul className="flexCenter gap-x-8 relative">
        <li>
          <DropdownMenu.Root>
            <DropdownMenu.Trigger>
              <Button text="Conteudos" icon="▼" />
            </DropdownMenu.Trigger>
            <DropdownMenu.Content>
              <DropdownMenu.Item>
                <Link href="/inference">Inferência</Link>
              </DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu.Root>
        </li>
        <li>
          <Link href="/desenvolvimento"><Button text="Desenvolvimento" /></Link>
        </li>
      </ul>
    </nav>
  );
}