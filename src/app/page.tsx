import Contract from "@/components/Contract";
import { Table } from "@/components/Table";
import { Pool, columns } from "@/components/TableColumns";
import { getJsonData } from "@/utils/json";

export default async function Home() {
  const data: Pool[] = await getJsonData();
  return (
    <main className="flex-1 p-5">
      <Table columns={columns} data={data} />
    </main>
  );
}
