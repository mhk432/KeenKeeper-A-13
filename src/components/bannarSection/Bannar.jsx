import React from 'react';
import { LuPlus } from 'react-icons/lu';

const Bannar = () => {
    return (
        <div className='mx-auto text-center space-y-5'>
            <h1 className='text-5xl font-bold mt-20'>Friends to keep close in your life</h1>
            <p>Your personal shelf of meaningful connections. Browse, tend,
                 and nurture the <br />
                relationships that matter most.</p>
                <button className='btn text-white bg-green-500 hover:bg-green-600'><LuPlus  />Add a Friend</button>
        </div>
    );
};

export default Bannar;