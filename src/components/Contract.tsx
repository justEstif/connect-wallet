"use client";

import { contract } from "@/data/contracts";
import { useContractRead } from "wagmi";

export default function Contract() {
  const { data, isError, error } = useContractRead({
    ...contract,
    functionName: "tokenPrice",
  });
  if (isError) {
    console.log(error);
  }
  console.log(data);

  return <div>Contract</div>;
}
