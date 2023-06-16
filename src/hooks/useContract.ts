import { useNetwork } from "wagmi";
import { goerli, mainnet } from "wagmi/chains";

import { PoolLogicAbi } from "@/data/abi/pool-logic";
import { useMemo } from "react";

export const useWagmiContract = () => {
  const address = useWagmiContractAddress();
  return useMemo(
    () => ({
      address: address! as `0x${string}`,
      abi: PoolLogicAbi,
    }),
    [address]
  );
};

export const useWagmiContractAddress = () => {
  const { chain = mainnet } = useNetwork();

  return useMemo(
    () =>
      ({
        [mainnet.id]: "0xecb504d39723b0be0e3a9aa33d646642d1051ee1",
        [goerli.id]: "0xecb504d39723b0be0e3a9aa33d646642d1051ee1",
      }[chain.id]),
    [chain]
  );
};
