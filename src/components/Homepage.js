import React from 'react';
import BlockInfo from './BlockInfo';
import TransactionInfo from './TransactionInfo';
import { Alchemy, Network } from 'alchemy-sdk';
import { useEffect, useState } from 'react';

const settings = {
    apiKey: process.env.REACT_APP_ALCHEMY_API_KEY,
    network: Network.ETH_MAINNET,
};

const alchemy = new Alchemy(settings);

//   const [blockNumber, setBlockNumber] = useState();

//   useEffect(() => {
//     async function getBlockNumber() {
//       setBlockNumber(await alchemy.core.getBlockNumber());
//     }
//     console.log("ue")
//     getBlockNumber();
//   });

//   return <div className="App">Block Number: {blockNumber}</div>;

const HomePage = () => {



    return (
        <div className="bg-gray-900 min-h-screen">
            <nav className="bg-gray-700">
                <div className="container mx-auto py-4 px-8">
                    <h1 className="text-4xl font-bold text-white font-serif">Just Another Blockchain Explorer (JABE) </h1>
                </div>
            </nav>

            <div className="bg-gray-200 py-8">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-8">
                        <div className="bg-white rounded-lg p-4 inline-block">
                            <p className="text-xl text-gray-900 font-serif">Current Price of Ethereum: $4000</p>
                        </div>
                    </div>

                    <div className="flex flex-wrap -mx-4">
                        <div className="w-full sm:w-1/2 md:w-full lg:w-1/2 px-4 mb-4">
                            <div className="bg-white rounded-lg shadow-lg p-4 h-full">
                                <h2 className="text-2xl font-bold mb-4 text-gray-900">Block List</h2>
                                <div className="h-full overflow-y-auto">
                                    <BlockInfo />
                                    <BlockInfo />
                                    <BlockInfo />
                                    <BlockInfo />
                                    <BlockInfo />
                                    <BlockInfo />
                                    <BlockInfo />
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
