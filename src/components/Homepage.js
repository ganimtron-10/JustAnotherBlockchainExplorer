import React, { useEffect, useState } from 'react';
import BlockInfo from './BlockInfo';
import TransactionInfo from './TransactionInfo';
import { Alchemy, Network } from 'alchemy-sdk';
import { list } from 'postcss';

const settings = {
    apiKey: process.env.REACT_APP_ALCHEMY_API_KEY,

    network: Network.ETH_MAINNET,
};

const alchemy = new Alchemy(settings);

const HomePage = () => {
    const [ethPrice, setEthPrice] = useState(0);
    const [blockList, setBlockList] = useState([]);


    useEffect(() => {
        fetchEthPrice();
        fetchBlocks();
    }, []);

    function fetchEthPrice() {
        fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&ids=ethereum')
            .then((response) => response.json())
            .then((data) => {
                const price = data[0]?.current_price || 0;
                setEthPrice(price);
            })
            .catch((error) => {
                console.error('Error fetching Ethereum price:', error);
            });
    }

    async function fetchBlocks() {
        let latestBlock = await alchemy.core.getBlockNumber();
        let list = [];
        for (let i = 0; i < 7; i++) {
            list.push(await alchemy.core.getBlock(latestBlock - i));

        }
        setBlockList(list);
        // console.log(list)
    }



    return (
        <div className="bg-gray-900 min-h-screen">
            <nav className="bg-gray-700">
                <div className="container mx-auto py-4 px-8">
                    <h1 className="text-4xl font-bold text-white font-serif">
                        Just Another Blockchain Explorer (JABE)
                    </h1>
                </div>
            </nav>

            <div className="bg-gray-200 py-8">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-8">
                        <div className="bg-white rounded-lg p-4 inline-block">
                            <p className="text-xl text-gray-900 font-serif">
                                Current Price of Ethereum: ₹{ethPrice} INR
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-wrap -mx-4">
                        <div className="w-full sm:w-1/2 md:w-full lg:w-1/2 px-4 mb-4">
                            <div className="bg-white rounded-lg shadow-lg p-4 h-full">
                                <h2 className="text-2xl font-bold mb-4 text-gray-900">Block List</h2>
                                <div className="h-full overflow-y-auto">
                                    {blockList.map((block, i) => <BlockInfo block={block} key={i} />)}
                                </div>
                            </div>
                        </div>

                        <div className="w-full sm:w-1/2 md:w-full lg:w-1/2 px-4 mb-4">
                            <div className="bg-white rounded-lg shadow-lg p-4 h-full">
                                <h2 className="text-2xl font-bold mb-4 text-gray-900">Transaction List</h2>
                                <div className="h-full overflow-y-auto">
                                    <TransactionInfo />
                                    <TransactionInfo />
                                    <TransactionInfo />
                                    <TransactionInfo />
                                    <TransactionInfo />
                                    <TransactionInfo />
                                    <TransactionInfo />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
