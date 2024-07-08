"use server";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import FormAuthLogin from "@/components/form-auth-login";
import FormAuthCreate from "@/components/form-auth-create";

const Auth = () => {
  return (
    <Tabs defaultValue="login" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="login">Login</TabsTrigger>
        <TabsTrigger value="create">Create account</TabsTrigger>
      </TabsList>
      <TabsContent value="login">
        <Card>
          <FormAuthLogin />
        </Card>
      </TabsContent>
      <TabsContent value="create">
        <Card>
          <FormAuthCreate />
        </Card>
      </TabsContent>
    </Tabs>
  );
};

export default Auth;
