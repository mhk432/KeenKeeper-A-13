import React, { use } from 'react';
import ExtraSection from '../extraSection/ExtraSection';
import FriendCard from '../ui/FriendCard';


const allFriendPromis = fetch('/friendsData.json').then(res => res.json())


const AllFriends = () => {

    const friends = use(allFriendPromis)
   

    return (
        <div>

             <ExtraSection allFriendPromis={allFriendPromis}></ExtraSection>
            <h1 className='text-3xl font-bold text-gray-800 mb-4'>All Friends</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 '>

                {
                    friends.map((friends) => {
                        return <FriendCard key={friends.id} friends={friends}></FriendCard>
                         
                    })}
            </div>
        </div>
    );
};

export default AllFriends;