import LoginCard from "@/components/LoginCard";
import { ModeToggle } from "@/components/ModeToggle";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="magicpattern bg-hero-light dark:bg-hero-dark">
        <div className="absolute right-0 p-6">
          <ModeToggle />
        </div>
        <div className="max-w-screen-lg mx-auto h-screen">
          <LoginCard />
        </div>
      </div>
    </>
  );
}
