"use client";

import useTokenPrice from "@/hooks/useTokenPrice";
import { useBalance } from "wagmi";
import { Pool } from "./TableColumns";

export default function SummaryCard({
  address,
  data,
}: {
  address: `0x${string}`;
  data: Pool[];
}) {
  const pool = data.filter((pool) => pool.address === address);
  const { data: balanceData } = useBalance({ address });
  const symbol = balanceData?.symbol || "";
  const usdPrice = useTokenPrice(symbol.toLowerCase());
  const balance = `${balanceData?.formatted} ${balanceData?.symbol}`;

  return (
    <div>
      <div className="hero bg-base-100">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Account Summary</h1>
            <p className="xs">{address}</p>
            {pool && pool.length && (
              <p className="py-6">{pool[0].description}</p>
            )}

            <div className="stats shadow">
              <div className="stat">
                <div className="stat-title">{symbol} Price</div>
                <div className="stat-value text-secondary">${usdPrice}</div>
              </div>

              <div className="stat">
                <div className="stat-title">Chain</div>
                <div className="stat-value text-secondary">
                  {pool[0].chainId}
                </div>
              </div>

              <div className="stat">
                <div className="stat-title">Account Balance</div>
                <div className="stat-value text-secondary">{balance}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
