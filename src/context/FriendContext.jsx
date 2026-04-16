import React, { createContext, useState } from 'react';
import { toast } from 'react-toastify';


export const FriendsContext = createContext();

const FriendProvider = ({ children }) => {

    const [storedCall, setStoredCall] = useState([]);
    const [storText, setorText] = useState([]);
    const [friendVideoCall, setFriendVideoCall] = useState([]);

    const handleCalling = (currentId) => {
        setStoredCall(prev => [...prev, currentId]);
        toast.success(`${currentId.name} is calling you!`);
        console.log(currentId, "currentId");
    };

    const handleText = (currentId) => {
        setorText(prev => [...prev, currentId]);
        toast.success(`${currentId.name} is texting you!`);
    };

    const handleVideoCall = (currentId) => {
        setFriendVideoCall(prev => [...prev, currentId]);
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