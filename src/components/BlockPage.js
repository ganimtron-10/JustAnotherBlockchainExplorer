import React from 'react';
import { useLocation } from 'react-router-dom';


const BlockPage = () => {
    const location = useLocation();
    const blockData = location.state?.data;

    console.log(blockData);

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
                    <h2 className="text-3xl font-bold mb-4 text-gray-900">Block #{blockData.number}</h2>
                    <div className="bg-white rounded-lg shadow-lg p-4">
                        <div className="flex items-center mb-4 w-full">
                            <div className="ml-4 w-1/3 flex-grow">
                                <p className="text-gray-900 font-bold">Block Number:</p>
                            </div>
                            <div className="ml-4 w-2/3 flex-grow">
                                <p className="text-gray-500"> {blockData.number}</p>
                            </div>
                        </div>

                        <div className="flex items-center mb-4 w-full">
                            <div className="ml-4 w-1/3 flex-grow">
                                <p className="text-gray-900 font-bold">Block Hash:</p>
                            </div>
                            <div className="ml-4 w-2/3 flex-grow">
                                <p className="text-gray-500"> {blockData.hash}</p>
                            </div>
                        </div>

                        <div className="flex items-center mb-4 w-full">
                            <div className="ml-4 w-1/3 flex-grow">
                                <p className="text-gray-900 font-bold">Previous Hash:</p>
                            </div>
                            <div className="ml-4 w-2/3 flex-grow">
                                <p className="text-gray-500"> {blockData.parentHash}</p>
                            </div>
                        </div>

                        <div className="flex items-center mb-4 w-full">
                            <div className="ml-4 w-1/3 flex-grow">
                                <p className="text-gray-900 font-bold">Block Timestamp:</p>
                            </div>
                            <div className="ml-4 w-2/3 flex-grow">
                                <p className="text-gray-500"> {blockData.timestamp}</p>
                            </div>
                        </div>

                        <div className="flex items-center mb-4 w-full">
                            <div className="ml-4 w-1/3 flex-grow">
                                <p className="text-gray-900 font-bold">Gas Limit:</p>
                            </div>
                            <div className="ml-4 w-2/3 flex-grow">
                                <p className="text-gray-500"> {parseInt(blockData.gasLimit._hex)} Wei</p>
                            </div>
                        </div>

                        <div className="flex items-center mb-4 w-full">
                            <div className="ml-4 w-1/3 flex-grow">
                                <p className="text-gray-900 font-bold">Gas Used:</p>
                            </div>
                            <div className="ml-4 w-2/3 flex-grow">
                                <p className="text-gray-500"> {parseInt(blockData.gasUsed._hex)} Wei</p>
                            </div>
                        </div>

                        <div className="flex items-center mb-4 w-full">
                            <div className="ml-4 w-1/3 flex-grow">
                                <p className="text-gray-900 font-bold">Base Fee per Gas:</p>
                            </div>
                            <div className="ml-4 w-2/3 flex-grow">
                                <p className="text-gray-500"> {parseInt(blockData.baseFeePerGas._hex)} Wei</p>
                            </div>
                        </div>

                        <div className="flex items-center mb-4 w-full">
                            <div className="ml-4 w-1/3 flex-grow">
                                <p className="text-gray-900 font-bold">Miner Address:</p>
                            </div>
                            <div className="ml-4 w-2/3 flex-grow">
                                <p className="text-gray-500"> {blockData.miner}</p>
                            </div>
                        </div>

                        <div className="flex items-center mb-4 w-full">
                            <div className="ml-4 w-1/3 flex-grow">
                                <p className="text-gray-900 font-bold">Difficulty:</p>
                            </div>
                            <div className="ml-4 w-2/3 flex-grow">
                                <p className="text-gray-500"> {blockData.difficulty}</p>
                            </div>
                        </div>

                        <div className="flex items-center mb-4 w-full">
                            <div className="ml-4 w-1/3 flex-grow">
                                <p className="text-gray-900 font-bold">Transaction Count:</p>
                            </div>
                            <div className="ml-4 w-2/3 flex-grow">
                                <p className="text-gray-500"> {blockData.transactions.length}</p>
                            </div>
                        </div>

                        <div className="flex items-center mb-4 w-full">
                            <div className="ml-4 w-1/3 flex-grow">
                                <p className="text-gray-900 font-bold">Transactions:</p>
                            </div>
                            <div className="ml-4 w-2/3 flex-grow">
                                {blockData.transactions.map((transaction) => <p className="text-gray-500"> {transaction}</p>)}
                            </div>
                        </div>

                    </div>

                </div>
            </div>


        </div>
    );
};

export default BlockPage;
