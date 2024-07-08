"use client";

import { Label } from "@radix-ui/react-label";
import { Input } from "@/components/ui/input";
import { Button } from "./ui/button";
import {
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Form, FormControl, FormField, FormItem, FormMessage } from "./ui/form";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import formSchemaZod from "@/app/auth/form-schema/form-schema";

const FormAuthLogin = () => {
  const formSchema = formSchemaZod;
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const formSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(formSubmit)}>
        <CardHeader>
          <CardTitle>Access your account</CardTitle>
          <CardDescription>
            To log in, enter your registered email and password.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className="space-y-1">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      placeholder="exemple@gmail.com"
                      type="email"
                      {...field}
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className="space-y-1">
                    <Label htmlFor="password">Password</Label>
                    <Input
                      id="password"
                      placeholder="********"
                      type="password"
                      {...field}
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </CardContent>
        <CardFooter className="gap-4">
          <Button type="submit">Login</Button>
          <Link href="/">
            <Button variant="destructive">Cancel</Button>
          </Link>
        </CardFooter>
      </form>
    </Form>
  );
};

export default FormAuthLogin;
