import Image from "next/image";
import Link from "next/link";

export function Navbar() {
  return (
    <nav className="flexCenter gap-x-8 p-4">
      <Link href={"/"}>
        <Image alt="Logo" src={"/logo.png"} width={50} height={50} />
      </Link>
      <ul className="flexCenter gap-x-8">
        <li><Link href={"/"}>About</Link></li>
        <li><Link href={"/"}>Contact</Link></li>
      </ul>
    </nav>
  );
}