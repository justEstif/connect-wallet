import { Connect } from "@/components/Connect";
import { Table } from "@/components/Table";
import { Pool, columns } from "@/components/TableColumns";

export default function Home() {
  const data: Pool[] = [
    {
      address: "0x1ec50880101022c11530a069690f5446d1464592",
      chainId: 10,
      symbol: "",
      description:
        "This USD yield aggregator vault aims to farm Optimism's most lucrative and safe supported stablecoin pool. It will switch farming pools when higher stablecoin yield opportunities arise for long-term performance.",
    },
    {
      chainId: 10,
      symbol: "USDmny",
      address: "0x49bf093277bf4dde49c48c6aa55a3bda3eedef68",
      description:
        "This vault earns yield on crypto assets while hedging against to be market neutral, making interest on USD while uninfluenced by crypto price volatility.",
    },
    {
      chainId: 10,
      symbol: "USDy",
      address: "0x1ec50880101022c11530a069690f5446d1464592",
      description:
        "This USD yield aggregator vault aims to farm Optimism's most lucrative and safe supported stablecoin pool. It will switch farming pools when higher stablecoin yield opportunities arise for long-term performance.",
    },
  ];
  return (
    <main className="flex flex-col justify-between items-center p-24 min-h-screen">
      <Connect />
      <Table columns={columns} data={data} />
    </main>
  );
}
