import React from 'react';
import CountUp from 'react-countup';

const IncreasingNumber = () => {
    return (
        <div className="w-11/12 mx-auto px-6 py-12 bg-gray-50 rounded-lg my-24">
            <div className="flex justify-between items-center text-center">
                <div className="flex-1">
                    <h3 className="text-4xl font-bold text-gray-800">
                        <CountUp end={1548000} duration={14} separator="," />K+
                    </h3>
                    <p className="text-gray-600 mt-2">JOB FULFILLMENT</p>
                </div>
                <div className="flex-1">
                    <h3 className="text-4xl font-bold text-gray-800">
                        <CountUp end={25} duration={8} />+
                    </h3>
                    <p className="text-gray-600 mt-2">BRANCHES</p>
                </div>
                <div className="flex-1">
                    <h3 className="text-4xl font-bold text-gray-800">
                        <CountUp end={12} duration={8} />+
                    </h3>
                    <p className="text-gray-600 mt-2">YEARS EXPERIENCE</p>
                </div>
            </div>
        </div>
    );
};

export default IncreasingNumber;
