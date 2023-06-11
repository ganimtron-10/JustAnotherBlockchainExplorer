import React from 'react';
import { BsFillBoxFill } from 'react-icons/bs';

const BlockInfo = () => {
    return (
        <div className="flex items-center mb-4 w-full">
            <div className="w-10 h-10 bg-gray-400 rounded-full flex items-center justify-center">
                <BsFillBoxFill className="text-white text-xl" />
            </div>
            <div className="ml-4 flex-grow">
                <p className="text-gray-900 font-bold">Block Number: 12345</p>
                <p className="text-gray-500">123 Transaction</p>
            </div>
            <div className="ml-4 flex-grow">
                <p className="text-gray-900 font-bold">Block Hash: 0x1234567890abcdef...</p>
                <p className="text-gray-500">Timestamp: May 20, 2023 10:30 AM</p>
            </div>
            <div className="ml-4">
                <div className="rounded-full bg-gray-300 text-gray-900 px-2 py-1 text-sm">
                    0.123 ETH
                </div>
            </div>
        </div>
    );
};

export default BlockInfo;




// import React from 'react';
// import { BsFillBoxFill } from 'react-icons/bs';

// const BlockInfo = () => {
//     return (
//         <div className="flex items-center mb-4 w-full">

//             <div className="w-10 h-10 bg-gray-400 rounded-full flex items-center justify-center">
//                 <BsFillBoxFill className="text-white text-xl" />
//             </div>
//             <div className="ml-4 flex-grow">
//                 <p className="text-gray-900 font-bold">Block Number: 12345</p>
//                 <p className="text-gray-500">123 Transaction</p>
//             </div>
//             <div className="ml-4 flex-grow">
//                 <p className="text-gray-900 font-bold">Block Hash: 0x1234567890abcdef...</p>
//                 <p className="text-gray-500">Timestamp: May 20, 2023 10:30 AM</p>
//             </div>
//             <div className="ml-4">
//                 <div className="rounded-full bg-gray-300 text-gray-900 px-2 py-1 text-sm element hover:cursor-pointer">
//                     <div class="hidden tooltip absolute bg-gray-800 text-white p-2 text-sm rounded">
//                         Fee Reward
//                     </div>
//                     0.123 ETH
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default BlockInfo;
