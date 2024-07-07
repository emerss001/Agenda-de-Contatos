"use client";

import { ContactCreate } from "@/app/_actions/create-contact";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

const formSchema = z.object({
  name: z
    .string({
      required_error: "O campo nome é obrigatório",
    })
    .min(3, { message: "O nome deve ter pelo menos 3 caracteres" }),
  surname: z
    .string({
      required_error: "O campo sobrenome é obrigatório",
    })
    .min(3, { message: "O sobrenome deve ter pelo menos 3 caracteres" }),
  telephone: z.coerce.string({
    required_error: "O campo telefone é obrigatório.",
  }),
  email: z
    .string({
      required_error: "O campo email é obrigatório",
    })
    .email({ message: "Endereço de email inválido" }),
});

const FormContact = () => {
  const router = useRouter();
  const [IsSubmitLoading, setIsSubmitLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const formSubmit = async (values: z.infer<typeof formSchema>) => {
    if (!values) return;

    try {
      setIsSubmitLoading(true);
      await ContactCreate(values);

      toast.success("Contato criado com sucesso!", {
        description: "Você pode ferificar na tela de contatos.",
        action: {
          label: "Contatos",
          onClick: () => router.push("/"),
        },
      });
    } catch (error) {
      console.log(error);
    } finally {
      setIsSubmitLoading(false);
    }
  };

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(formSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nome</FormLabel>
                <FormControl>
                  <Input type="text" placeholder="Emerson" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="surname"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Sobrenome</FormLabel>
                <FormControl>
                  <Input type="text" placeholder="Neves Santos" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="exemplo@gmail.com"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="telephone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Telefone</FormLabel>
                <FormControl>
                  <Input type="tel" placeholder="77 999999999" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" disabled={IsSubmitLoading}>
            {IsSubmitLoading && (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            )}
            Salvar
          </Button>
        </form>
      </Form>
    </>
  );
};

export default FormContact;
