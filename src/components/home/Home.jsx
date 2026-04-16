import React from 'react';
import Bannar from '../bannarSection/Bannar';

import Friend from '../friend/Friend';
import AllFriends from './AllFriends';
import ExtraSection from '../extraSection/ExtraSection';

const Home = () => {
    return (
        <div>
           <Bannar></Bannar>
          
          <AllFriends></AllFriends>

        </div>
    );
};

export default Home;