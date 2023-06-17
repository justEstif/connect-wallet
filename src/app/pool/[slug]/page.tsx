import SummaryCard from "@/components/SummaryCard";
import { Pool } from "@/components/TableColumns";
import { getJsonData } from "@/utils/json";

export default async function Page({ params }: { params: { slug: string } }) {
  const address = params.slug as `0x${string}`;
  const data: Pool[] = await getJsonData();

  return (
    <div>
      <SummaryCard address={address} data={data} />
    </div>
  );
}
