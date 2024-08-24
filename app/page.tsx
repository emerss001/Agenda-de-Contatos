import Table from "@/components/table";
import { getServerSession } from "next-auth";
import { authOptions } from "./_lib/auth";

export default async function Home() {
  const data = await getServerSession();
  console.log(data);
  return (
    <div className="justify-center grid space-y-3">
      <div className="items-center space-y-3 justify-center grid">
        <h1 className="text-5xl">Agenda</h1>
        <h3>Seus contatos estão abaixo</h3>
      </div>
      <p>{data?.user.email}</p>

      <Table />
    </div>
  );
}
