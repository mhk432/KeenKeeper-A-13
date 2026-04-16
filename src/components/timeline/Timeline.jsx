import React, { useContext } from 'react';
import {  FriendsContext } from '../../context/FriendContext';  // ← এটা FriendContext হবে (FriendsContext না)
import { FaPhone, FaComment, FaVideo, FaPhoneAlt } from 'react-icons/fa'; // icons

const Timeline = () => {

    const { 
        storedCall, 
        storText, 
        friendVideoCall 
    } = useContext(FriendsContext);

    return (
        <div className="timeline-container p-6">
            <h1 className="text-3xl font-bold mb-8 text-center">Activity Timeline</h1>

            {/* ==================== Call Section ==================== */}
            <div className="mb-10">
                <div className="flex items-center gap-3 mb-4">
                    <FaPhoneAlt className="text-red-500 text-2xl" />
                    <h2 className="text-2xl font-semibold">Calls ({storedCall.length})</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {storedCall.length > 0 ? (
                        storedCall.map((friend, index) => (
                            <div key={index} className="bg-white p-4 rounded-xl shadow-md flex items-center gap-4 border border-green-200">
                                <FaPhone className="text-green-500 text-xl" />
                                <div>
                                    <p className="font-semibold">{friend.name}</p>
                                    <p className="text-sm text-gray-500">Voice Call</p>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="text-gray-500 italic">No calls yet</p>
                    )}
                </div>
            </div>

            {/* ==================== Text Section ==================== */}
            <div className="mb-10">
                <div className="flex items-center gap-3 mb-4">
                    <FaComment className="text-blue-500 text-2xl" />
                    <h2 className="text-2xl font-semibold">Messages ({storText.length})</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {storText.length > 0 ? (
                        storText.map((friend, index) => (
                            <div key={index} className="bg-white p-4 rounded-xl shadow-md flex items-center gap-4 border border-blue-200">
                                <FaComment className="text-blue-500 text-xl" />
                                <div>
                                    <p className="font-semibold">{friend.name}</p>
                                    <p className="text-sm text-gray-500">Text Message</p>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="text-gray-500 italic">No messages yet</p>
                    )}
                </div>
            </div>

            {/* ==================== Video Call Section ==================== */}
            <div className="mb-10">
                <div className="flex items-center gap-3 mb-4">
                    <FaVideo className="text-purple-500 text-2xl" />
                    <h2 className="text-2xl font-semibold">Video Calls ({friendVideoCall.length})</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {friendVideoCall.length > 0 ? (
                        friendVideoCall.map((friend, index) => (
                            <div key={index} className="bg-white p-4 rounded-xl shadow-md flex items-center gap-4 border border-purple-200">
                                <FaVideo className="text-purple-500 text-xl" />
                                <div>
                                    <p className="font-semibold">{friend.name}</p>
                                    <p className="text-sm text-gray-500">Video Call</p>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="text-gray-500 italic">No video calls yet</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Timeline;