import React, { useContext, useState } from 'react';
import { FriendsContext } from '../../context/FriendContext';
import { FaPhone, FaComment, FaVideo, FaSortAmountDown } from 'react-icons/fa';

const Timeline = () => {

    const { storedCall, storText, friendVideoCall } = useContext(FriendsContext);

    // Filter State
    const [activeFilter, setActiveFilter] = useState('all');

    // Date format function
    const formatDate = (isoString) => {
        const date = new Date(isoString);
        return date.toLocaleString('en-BD', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
        });
    };

    // Sorting - Newest First
    const sortByNewest = (data) => {
        return [...data].sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
    };

    const sortedCalls = sortByNewest(storedCall);
    const sortedTexts = sortByNewest(storText);
    const sortedVideoCalls = sortByNewest(friendVideoCall);

    // Filter Logic
    const filteredData = () => {
        if (activeFilter === 'call') return sortedCalls;
        if (activeFilter === 'text') return sortedTexts;
        if (activeFilter === 'video') return sortedVideoCalls;
        return [...sortedCalls, ...sortedTexts, ...sortedVideoCalls]; 
    };

    const displayItems = filteredData();

    return (
        <div className="p-6 max-w-6xl mx-auto">
            <h1 className="text-4xl font-bold text-center mb-8 flex items-center justify-center gap-3">
                <FaSortAmountDown /> Activity Timeline
            </h1>

            {/* ==================== Dropdown Filter ==================== */}
            <div className="flex justify-center mb-10">
                <div className="relative w-full max-w-xs">
                    <select
                        value={activeFilter}
                        onChange={(e) => setActiveFilter(e.target.value)}
                        className="w-full px-5 py-4 bg-white border border-gray-300 rounded-2xl text-lg font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
                    >
                        <option value="all">All Activities ({sortedCalls.length + sortedTexts.length + sortedVideoCalls.length})</option>
                        <option value="call">📞 Calls ({sortedCalls.length})</option>
                        <option value="text">💬 Messages ({sortedTexts.length})</option>
                        <option value="video">🎥 Video Calls ({sortedVideoCalls.length})</option>
                    </select>
                </div>
            </div>

            {/* ==================== Display Items ==================== */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {displayItems.length > 0 ? (
                    displayItems.map((item, i) => {
                        const isCall = sortedCalls.some(call => call.timestamp === item.timestamp && call.id === item.id);
                        const isText = sortedTexts.some(text => text.timestamp === item.timestamp && text.id === item.id);
                        const isVideo = sortedVideoCalls.some(video => video.timestamp === item.timestamp && video.id === item.id);

                        return (
                            <div
                                key={i}
                                className="bg-white p-6 rounded-2xl shadow-lg border hover:shadow-2xl transition-all duration-300"
                            >
                                {isCall && <FaPhone className=" text-green-500 text-3xl mb-4" />}
                                {isText && <FaComment className="text-blue-500 text-3xl mb-4" />}
                                {isVideo && <FaVideo className="text-purple-500 text-3xl mb-4" />}

                                <h3 className="font-bold text-2xl">{item.name}</h3>
                                <p className="text-gray-600 mt-2 text-base">
                                    {formatDate(item.timestamp)}
                                </p>

                                <p className={` mt-4 inline-block px-4 py-1 rounded-full text-sm font-medium
                                    ${isCall ? 'bg-green-100 text-green-700' : 
                                      isText ? 'bg-blue-100 text-blue-700' : 
                                      'bg-purple-100 text-purple-700'}`}>
                                    {isCall && 'Voice Call'}
                                    {isText && 'Text Message'}
                                    {isVideo && 'Video Call'}
                                </p>
                            </div>
                        );
                    })
                ) : (
                    <p className="text-gray-500 italic col-span-full text-center py-20 text-xl">
                        No activities found
                    </p>
                )}
            </div>
        </div>
    );
};

export default Timeline;