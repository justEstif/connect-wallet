"use client";

import { ColumnDef } from "@tanstack/react-table";
import { useBalance } from "wagmi";

export type Pool = {
  symbol: string;
  chainId: number;
  address: `0x${string}`;
  description: string;
};

export const Balance = ({ address }: { address: `0x${string}` }) => {
  const { data } = useBalance({ address });
  return (
    <div className="font-medium text-right">
      {data?.formatted} {data?.symbol}
    </div>
  );
};

export const columns: ColumnDef<Pool>[] = [
  {
    accessorKey: "address",
    header: "Address",
  },
  {
    accessorKey: "chainId",
    header: "Chain ID",
  },
  {
    accessorKey: "tokenPrice",
    header: "Token Price",
  },
  {
    accessorKey: "balance",
    header: "Balance",
    cell: ({ row }) => {
      const address: `0x${string}` = row.original.address;
      return (
        <>
          <Balance address={address} />
        </>
      );
    },
  },
];
