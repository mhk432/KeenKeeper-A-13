// import React, { use } from 'react';
import { useLoaderData, useParams } from 'react-router';

// const allFriendPromis = fetch('/friendsData.json').then(res => res.json())

const FriendDetails = () => {
    const friendId = useParams();
    const friend =useLoaderData();
    console.log(friend,'friend');
   
//     const friends = use(allFriendPromis)

//    console.log(friends,'friends');
        console.log(friendId,'friemnd');
    return (
        <div>
            <h1>Friend Details</h1>
        </div>
    );
};

export default FriendDetails;