import React from 'react';
import { useLocation } from 'react-router-dom';


const TransactionPage = () => {
    const location = useLocation();
    const TransactionData = location.state?.data;
    // console.log(TransactionData);

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
                    <h2 className="text-3xl font-bold mb-4 text-gray-900">Transaction #{TransactionData.transactionIndex}</h2>
                    <div className="bg-white rounded-lg shadow-lg p-4">
                        <div className="flex items-center mb-4 w-full">
                            <div className="ml-4 w-1/3 flex-grow">
                                <p className="text-gray-900 font-bold">Transaction Number:</p>
                            </div>
                            <div className="ml-4 w-2/3 flex-grow">
                                <p className="text-gray-500"> {TransactionData.transactionIndex}</p>
                            </div>
                        </div>

                        <div className="flex items-center mb-4 w-full">
                            <div className="ml-4 w-1/3 flex-grow">
                                <p className="text-gray-900 font-bold">From:</p>
                            </div>
                            <div className="ml-4 w-2/3 flex-grow">
                                <p className="text-gray-500"> {TransactionData.from}</p>
                            </div>
                        </div>

                        <div className="flex items-center mb-4 w-full">
                            <div className="ml-4 w-1/3 flex-grow">
                                <p className="text-gray-900 font-bold">To:</p>
                            </div>
                            <div className="ml-4 w-2/3 flex-grow">
                                <p className="text-gray-500"> {TransactionData.to}</p>
                            </div>
                        </div>

                        <div className="flex items-center mb-4 w-full">
                            <div className="ml-4 w-1/3 flex-grow">
                                <p className="text-gray-900 font-bold">Transaction Hash:</p>
                            </div>
                            <div className="ml-4 w-2/3 flex-grow">
                                <p className="text-gray-500"> {TransactionData.transactionHash}</p>
                            </div>
                        </div>

                        <div className="flex items-center mb-4 w-full">
                            <div className="ml-4 w-1/3 flex-grow">
                                <p className="text-gray-900 font-bold">Block Hash:</p>
                            </div>
                            <div className="ml-4 w-2/3 flex-grow">
                                <p className="text-gray-500"> {TransactionData.blockHash}</p>
                            </div>
                        </div>

                        <div className="flex items-center mb-4 w-full">
                            <div className="ml-4 w-1/3 flex-grow">
                                <p className="text-gray-900 font-bold">Block Number:</p>
                            </div>
                            <div className="ml-4 w-2/3 flex-grow">
                                <p className="text-gray-500"> {TransactionData.blockNumber}</p>
                            </div>
                        </div>

                        <div className="flex items-center mb-4 w-full">
                            <div className="ml-4 w-1/3 flex-grow">
                                <p className="text-gray-900 font-bold">Gas Used:</p>
                            </div>
                            <div className="ml-4 w-2/3 flex-grow">
                                <p className="text-gray-500"> {parseInt(TransactionData.gasUsed._hex)} Wei</p>
                            </div>
                        </div>

                        <div className="flex items-center mb-4 w-full">
                            <div className="ml-4 w-1/3 flex-grow">
                                <p className="text-gray-900 font-bold">Cumulative Gas Used:</p>
                            </div>
                            <div className="ml-4 w-2/3 flex-grow">
                                <p className="text-gray-500"> {parseInt(TransactionData.cumulativeGasUsed._hex)} Wei</p>
                            </div>
                        </div>

                        <div className="flex items-center mb-4 w-full">
                            <div className="ml-4 w-1/3 flex-grow">
                                <p className="text-gray-900 font-bold">Effective Gas Price:</p>
                            </div>
                            <div className="ml-4 w-2/3 flex-grow">
                                <p className="text-gray-500"> {parseInt(TransactionData.effectiveGasPrice._hex)} Wei</p>
                            </div>
                        </div>

                        <div className="flex items-center mb-4 w-full">
                            <div className="ml-4 w-1/3 flex-grow">
                                <p className="text-gray-900 font-bold">Logs:</p>
                            </div>
                            <div className="ml-4 w-2/3 flex-grow overflow-auto">
                                <p className="text-gray-500"> {JSON.stringify(TransactionData.logs).replaceAll("[", " [\n").replaceAll("]", "\n]\n").replaceAll("{", "{\n").replaceAll("}", "\n{\n").replaceAll(",", "\n")}</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>


        </div >
    );
};

export default TransactionPage;


