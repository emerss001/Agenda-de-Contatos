"use client";

import { LogOut } from "lucide-react";
import { Button } from "./ui/button";
import { signOut } from "next-auth/react";

const Logout = () => {
  const logout = async () => {
    await signOut();
  };

  return (
    <Button variant="ghost" className="gap-2 text-lg" onClick={logout}>
      LogOut
      <LogOut />
    </Button>
  );
};

export default Logout;
