"use client";

import { Label } from "@radix-ui/react-label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import {
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "./ui/card";
import { Form, FormControl, FormField, FormItem, FormMessage } from "./ui/form";
import formSchemaZod from "@/app/auth/form-schema/form-schema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { UserCreate } from "@/app/_actions/create-user";

const FormAuthCreate = () => {
  const formSchema = formSchemaZod;
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const formSubmit = async (values: z.infer<typeof formSchema>) => {
    if (!values) return;

    try {
      await UserCreate(values);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(formSubmit)}>
        <CardHeader>
          <CardTitle>Create an account</CardTitle>
          <CardDescription>Enter a password and a valid email.</CardDescription>
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
                      type="email"
                      placeholder="exemplae@gmail.com"
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
                    <Label htmlFor="new">Password</Label>
                    <Input
                      id="passord"
                      type="password"
                      placeholder="********"
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
          <Button type="submit">Create account</Button>
          <Button variant="destructive">Cancel</Button>
        </CardFooter>
      </form>
    </Form>
  );
};

export default FormAuthCreate;
