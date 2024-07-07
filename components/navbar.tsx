import { LogIn } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <div className="w-full h-20 bg-[#f5f5f5] justify-between flex items-center">
        <Link href="/">
          <div className="px-4">
            <h1 className="text-3xl">Agenda</h1>
          </div>
        </Link>
        <div>
          <Link href="/auth">
            <Button variant="ghost" className="gap-2 text-lg">
              Log in
              <LogIn />
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
