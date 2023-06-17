import { useState, useEffect } from "react";

export const symbolName: { [symbol: string]: string } = {
  btc: "bitcoin",
  eth: "ethereum",
  xrp: "ripple",
  ltc: "litecoin",
  bch: "bitcoin cash",
  ada: "cardano",
  dot: "polkadot",
  link: "chainlink",
  xlm: "stellar",
  doge: "dogecoin",
};

const useTokenPrice = (symbol: string) => {
  const [usdPrice, setUSDPrice] = useState(null);

  useEffect(() => {
    const fetchUSDPrice = async () => {
      const cryptoName = symbolName[symbol] || "";
      const apiUrl = `https://api.coingecko.com/api/v3/simple/price?ids=${cryptoName}&vs_currencies=usd`;

      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        // Extract the USD price from the API response
        const price = data[cryptoName]["usd"];
        setUSDPrice(price);
      } catch (error) {
        console.log("Error:", error);
        setUSDPrice(null);
      }
    };

    fetchUSDPrice();
  }, [symbol]);

  return usdPrice;
};

export default useTokenPrice;
