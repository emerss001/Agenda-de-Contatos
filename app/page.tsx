import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import Table from "@/components/table";
import { AlertCircle } from "lucide-react";

export default async function Home() {
  return (
    <div className="justify-center grid space-y-3">
      <div className="items-center space-y-3 justify-center grid">
        <h1 className="text-5xl">Agenda</h1>
        <h3>Seus contatos estão abaixo</h3>
      </div>

      <Table />
    </div>
  );
}
