import React, { createContext, useState } from 'react';
import { toast } from 'react-toastify';


export const FriendsContext = createContext();

const FriendProvider = ({ children }) => {

    const [storedCall, setStoredCall] = useState([]);
    const [storText, setorText] = useState([]);
    const [friendVideoCall, setFriendVideoCall] = useState([]);

    const handleCalling = (currentId) => {
        const textData = {
            ...currentId,
            timestamp: new Date().toISOString(),
        };
        setStoredCall(prev => [...prev, textData]);
        toast.success(`${currentId.name} is calling you!`);
       
    };

    const handleText = (currentId) => {

        const textData = {
            ...currentId,
            timestamp: new Date().toISOString(),
        };
        setorText(prev => [...prev, textData]);
        toast.success(`${currentId.name} is texting you!`);
    };

    const handleVideoCall = (currentId) => {
        const videoCallData = {
            ...currentId,
            timestamp: new Date().toISOString(),
        };
        setFriendVideoCall(prev => [...prev, videoCallData]);
        toast.success(`${currentId.name} is video calling you!`);
    };

    const friendData = {
        handleCalling,
        storedCall,
        setStoredCall,

        handleText,
        storText,
        setorText,

        handleVideoCall,
        friendVideoCall,
        setFriendVideoCall
    };

    return (
        <FriendsContext.Provider value={friendData}>
            {children}
        </FriendsContext.Provider>
    );
};

export default FriendProvider;