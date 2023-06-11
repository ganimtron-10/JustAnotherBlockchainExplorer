// import React from 'react';

// const TransactionInfo = () => {
//     const hash = '0x4f2f82ab9d9a57ebf3ff27dc5f55e5f7e1b3d1434cdd54a5fbdadee1a1234'; // Example hash
//     const truncatedHash = hash.substring(0, 15) + '...'; // Truncate hash to desired length

//     return (
//         <div className="bg-white rounded shadow-md p-4">
//             <h3 className="text-xl font-bold mb-2">Transaction #5678</h3>
//             <p className="text-gray-600">From: 0xabcde12345</p>
//             <p className="text-gray-600">To: 0xfedcba54321</p>
//             <p className="text-gray-600 overflow-hidden overflow-ellipsis">{truncatedHash}</p>
//         </div>
//     );
// };

// export default TransactionInfo;

import React from 'react';
import { GrTransaction } from 'react-icons/gr';

const TransactionInfo = () => {
    return (

        <div className="flex items-center mb-4 w-full">
            <div className="w-10 h-10 bg-gray-400 rounded-full flex items-center justify-center">
                <GrTransaction className="text-white text-xl" />
            </div>
            <div className="ml-4 flex-grow">
                <p className="text-gray-900 font-bold">Transaction #5678</p>
                <p className="text-gray-500">12 seconds ago</p>
            </div>
            <div className="ml-4 flex-grow">
                <p className="text-gray-900 font-bold">From: 0xabcde12345</p>
                <p className="text-gray-500">To: 0xfedcba54321</p>
            </div>
            <div className="ml-4">
                <div className="rounded-full bg-gray-300 text-gray-900 px-2 py-1 text-sm">
                    0.123 ETH
                </div>
            </div>
        </div>


    );
};

export default TransactionInfo;
