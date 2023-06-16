import { useContractReads } from "wagmi";
import { useWagmiContract } from "./useContract";

export const useWagmi = () => {
  const wagmiContract = useWagmiContract();

  const { data, isSuccess, refetch } = useContractReads({
    contracts: [
      {
        ...wagmiContract,
        functionName: "tokenPrice",
      },
    ],
  });
  if (isSuccess) console.log(data);

  return {
    data: data?.[0],
    refetch,
  };
};
