import React, { useEffect, useState } from "react";
import { Box, Text } from "@chakra-ui/react";

import DexSelectBtn from "../DexSelectBtn";
import PoolTable from "./PoolTable";
import DexTicker from "../DexTicker";

//API Key
const API_KEY = "ckey_9d55c9caa3d34ca78d2acc8d9ee";

function Pools() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    items;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getApi = async (e: {
    target: { elements: { chainId: { value: any }; dexName: { value: any } } };
    preventDefault: () => void;
  }) => {
    const chainId = e.target.elements.chainId.value;
    e.preventDefault();
    const dexName = e.target.elements.dexName.value;
    e.preventDefault();

    const response = await fetch(
      `https://api.covalenthq.com/v1/${chainId}/xy=k/${dexName}/pools/?quote-currency=USD&format=JSON&key=${API_KEY}`
    );
    const data = await response.json();
    setItems(data.data.items);
    console.log(items);
  };

  return (
    <>
      <DexTicker />
      <Box>
        <Text
          ml={10}
          right={2}
          letterSpacing={1}
          fontSize="xl"
          fontWeight="semibold"
          decoration="lightblue"
          textTransform="uppercase"
        >
          Pools Analytics
        </Text>
        <Text
          ml={10}
          right={2}
          color="gray.400"
          letterSpacing={1}
          fontSize="md"
          fontWeight="thin"
          decoration="lightblue"
          textTransform="uppercase"
        >
          Overview
        </Text>
      </Box>
      <DexSelectBtn getApi={getApi} />
      <PoolTable data={items} />
    </>
  );
}
export default Pools;

//Pools
//https://api.covalenthq.com/v1/1/xy=k/uniswap_v2/pools/?quote-currency=USD&format=JSON&key=ckey_9d55c9caa3d34ca78d2acc8d9ee

// supported DEXes
//https://api.covalenthq.com/v1/xy=k/supported_dexes/?quote-currency=USD&format=JSON&key=ckey_9d55c9caa3d34ca78d2acc8d9ee

//pools by address
//https://api.covalenthq.com/v1/1/xy=k/sushiswap/pools/address/0xD0355200111C2B21AAbC1a31552eCCDc5d4E905d/?quote-currency=USD&format=JSON&tickers=usdt&page-number=10&key=ckey_9d55c9caa3d34ca78d2acc8d9ee

//Summary overview

// health data
//https://api.covalenthq.com/v1/1/xy=k/uniswap_v2/health/?quote-currency=USD&format=JSON&key=ckey_9d55c9caa3d34ca78d2acc8d9ee

//ecosystem chart data
//https://api.covalenthq.com/v1/1/xy=k/uniswap_v2/ecosystem/?quote-currency=USD&format=JSON&key=ckey_9d55c9caa3d34ca78d2acc8d9ee

// supported DEXes
//https://api.covalenthq.com/v1/xy=k/supported_dexes/?quote-currency=USD&format=JSON&key=ckey_9d55c9caa3d34ca78d2acc8d9ee

//xy=k is a generalized Uniswap-like endpoints for exchanges on various chains.
