import React from 'react';
import { BsFillBoxFill } from 'react-icons/bs';

const BlockInfo = ({ block }) => {
    return (
        <div className="flex items-center mb-4 w-full">
            <div className="w-10 h-10 bg-gray-400 rounded-full flex items-center justify-center">
                <BsFillBoxFill className="text-white text-xl" />
            </div>
            <div className="ml-4 flex-grow">
                <p className="text-gray-900 font-bold">Block Number: {block.number}</p>
                <p className="text-gray-500">{block.transactions.length} Transaction</p>
            </div>
            <div className="ml-4 flex-grow">
                <p className="text-gray-900 font-bold">Block Hash: {block.hash.substring(0, 15) + '...'}</p>
                <p className="text-gray-500">Timestamp: {block.timestamp}</p>
            </div>
            <div className="ml-4">
                <div className="rounded-full bg-gray-300 text-gray-900 px-2 py-1 text-sm">
                    {(parseInt(block.gasUsed._hex) / (10 ** 8)).toFixed(2)} gWei
                </div>
            </div>
        </div>
    );
};

export default BlockInfo;

