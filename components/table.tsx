import { prisma } from "@/lib/prisma";
import {
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
  Table,
} from "./ui/table";

const tableContacts = async () => {
  const contatcts = await prisma.contatct.findMany({});
  return (
    <div>
      <Table className="rounded-xl">
        <TableHeader className="bg-muted">
          <TableRow>
            <TableHead>Nome</TableHead>
            <TableHead>Sobrenome</TableHead>
            <TableHead className="text-center">Telefone</TableHead>
            <TableHead className="text-center">email</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {contatcts.map((data) => (
            <TableRow key={data.id}>
              <TableCell>{data.name}</TableCell>
              <TableCell>{data.surname}</TableCell>
              <TableCell>{data.telephone}</TableCell>
              <TableCell>{data.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default tableContacts;
