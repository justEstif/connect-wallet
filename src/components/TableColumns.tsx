"use client";

import { ColumnDef } from "@tanstack/react-table";
import { useBalance } from "wagmi";
import useTokenPrice from "@/hooks/useTokenPrice";

export type Pool = {
  symbol: string;
  chainId: number;
  address: `0x${string}`;
  description: string;
};

export const Balance = ({ address }: { address: `0x${string}` }) => {
  const { data } = useBalance({ address });
  return (
    <div>
      {data?.formatted} {data?.symbol}
    </div>
  );
};

const TokenPrice = ({ address }: { address: `0x${string}` }) => {
  const { data } = useBalance({ address });
  const symbol = data?.symbol || "";
  const usdPrice = useTokenPrice(symbol.toLowerCase());
  return <div>${usdPrice}</div>;
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
    accessorKey: "symbol",
    header: "Symbol",
  },
  {
    accessorKey: "tokenPrice",
    header: "Token Price",
    cell: ({ row }) => {
      const address: `0x${string}` = row.getValue("address");
      return (
        <>
          <TokenPrice address={address} />
        </>
      );
    },
  },
  {
    accessorKey: "balance",
    header: "Balance",
    cell: ({ row }) => {
      const address: `0x${string}` = row.getValue("address");
      return (
        <>
          <Balance address={address} />
        </>
      );
    },
  },
];
