import { Button } from "@/components/Button";
import Image from "next/image";

export default function Home() {
  return (
    <section className="2xl:max-container relative flexCenter min-h-screen">
      <div className="flexCenter flex-col">
        <h1>Hello World</h1>
        <Button text="Clique aqui" />
      </div>
    </section>
  );
}
