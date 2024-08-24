import { LogIn } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import { getServerSession } from "next-auth";
import Logout from "./logout";

const Navbar = async () => {
  const data = await getServerSession();

  return (
    <>
      <div className="w-full h-20 bg-[#f5f5f5] justify-between flex items-center">
        <Link href="/">
          <div className="px-4">
            <h1 className="text-3xl">Agenda</h1>
          </div>
        </Link>
        <div>
          <p>{data?.user.name}</p>
        </div>

        {data ? (
          <Logout />
        ) : (
          <Link href="/auth">
            <Button variant="ghost" className="gap-2 text-lg">
              Log in
              <LogIn />
            </Button>
          </Link>
        )}
      </div>
    </>
  );
};

export default Navbar;
