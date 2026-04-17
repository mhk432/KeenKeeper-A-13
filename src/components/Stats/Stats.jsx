import React, { useContext } from 'react';
import { FriendsContext } from '../../context/FriendContext';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const Stats = () => {

    const { storedCall, storText, friendVideoCall } = useContext(FriendsContext);

    const totalCalls = storedCall.length;
    const totalTexts = storText.length;
    const totalVideoCalls = friendVideoCall.length;
    const totalActivities = totalCalls + totalTexts + totalVideoCalls;

    // Pie Chart Data
    const pieData = {
        labels: ['Voice Calls', 'Text Messages', 'Video Calls'],
        datasets: [
            {
                label: 'Activities',
                data: [totalCalls, totalTexts, totalVideoCalls],
                backgroundColor: [
                    '#22c55e',   
                    '#3b82f6',   
                    '#a855f7',   
                ],
                borderColor: '#ffffff',
                borderWidth: 3,
                hoverOffset: 20,
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'bottom',
                labels: {
                    font: { size: 16 },
                    padding: 25,
                    usePointStyle: true,
                },
            },
            tooltip: {
                backgroundColor: 'rgba(0,0,0,0.8)',
                padding: 12,
                titleFont: { size: 16 },
                bodyFont: { size: 15 },
            },
        },
    };

    return (
        <div className="p-8  ">
            <h1 className="text-4xl font-bold text-center mb-10">📊 Activity Statistics</h1>

            <div className=" gap-10">

                {/* Pie Chart */}
                <div className="bg-white p-8 rounded-3xl shadow-xl  
                 flex justify-center ">
       
            <div className="h-[400px] flex items-center justify-center">
                        {totalActivities > 0 ? (
                            <Pie data={pieData} options={options} />
                        ) : (
                            <p className="text-gray-500 text-xl">No activities yet</p>
                        )}
                    </div>
                </div>

                
            </div>
        </div>
    );
};

export default Stats;