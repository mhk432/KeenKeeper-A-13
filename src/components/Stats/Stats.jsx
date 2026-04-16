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
                    '#22c55e',   // Green for Calls
                    '#3b82f6',   // Blue for Texts
                    '#a855f7',   // Purple for Video
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
        <div className="p-8 max-w-5xl mx-auto">
            <h1 className="text-4xl font-bold text-center mb-10">📊 Activity Statistics</h1>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

                {/* Pie Chart */}
                <div className="bg-white p-8 rounded-3xl shadow-xl">
                    <h2 className="text-2xl font-semibold text-center mb-6">Activity Distribution</h2>
                    <div className="h-[400px] flex items-center justify-center">
                        {totalActivities > 0 ? (
                            <Pie data={pieData} options={options} />
                        ) : (
                            <p className="text-gray-500 text-xl">No activities yet</p>
                        )}
                    </div>
                </div>

                {/* Summary Cards */}
                <div className="space-y-6">
                    <div className="bg-white p-6 rounded-3xl shadow-xl flex items-center gap-6">
                        <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center text-3xl">📞</div>
                        <div>
                            <p className="text-4xl font-bold text-green-600">{totalCalls}</p>
                            <p className="text-gray-600 text-lg">Voice Calls</p>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-3xl shadow-xl flex items-center gap-6">
                        <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-3xl">💬</div>
                        <div>
                            <p className="text-4xl font-bold text-blue-600">{totalTexts}</p>
                            <p className="text-gray-600 text-lg">Text Messages</p>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-3xl shadow-xl flex items-center gap-6">
                        <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center text-3xl">🎥</div>
                        <div>
                            <p className="text-4xl font-bold text-purple-600">{totalVideoCalls}</p>
                            <p className="text-gray-600 text-lg">Video Calls</p>
                        </div>
                    </div>

                    <div className="bg-gradient-to-r from-gray-800 to-black text-white p-8 rounded-3xl shadow-xl text-center">
                        <p className="text-5xl font-bold">{totalActivities}</p>
                        <p className="text-lg mt-2 opacity-80">Total Activities</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Stats;