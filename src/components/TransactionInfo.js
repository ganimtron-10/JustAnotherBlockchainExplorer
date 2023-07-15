import React from 'react';
import { GrTransaction } from 'react-icons/gr';
import { useHistory } from 'react-router-dom';

const TransactionInfo = ({ transaction }) => {

    const history = useHistory();

    const handleClick = () => {
        const data = transaction;
        history.push({
            pathname: '/transaction',
            state: { data },
        });
    };

    return (
        <button onClick={handleClick}>
            <div className="flex items-center mb-4 w-full">
                <div className="w-10 h-10 bg-gray-400 rounded-full flex items-center justify-center">
                    <GrTransaction className="text-white text-xl" />
                </div>
                <div className="ml-4 flex-grow">
                    <p className="text-gray-900 font-bold">Transaction #{transaction.transactionIndex}</p>
                    {/* <p className="text-gray-500">12 seconds ago</p> */}
                </div>
                <div className="ml-4 flex-grow">
                    <p className="text-gray-900 font-bold">From: {transaction.from.substring(0, 15) + '...'}</p>
                    <p className="text-gray-500">To: {transaction.to.substring(0, 15) + '...'}</p>
                </div>
                <div className="ml-4">
                    <div className="rounded-full bg-gray-300 text-gray-900 px-2 py-1 text-sm">
                        {(parseInt(transaction.effectiveGasPrice._hex) / (10 ** 8)).toFixed(2)} gWei
                    </div>
                </div>
            </div>
        </button>
    );
};

export default TransactionInfo;
