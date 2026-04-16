import React from 'react';
import { Link } from 'react-router';

const FriendCard = ({friends}) => {
    return (
        <Link to={`/friendDetails/${friends.id}`} className="card bg-base-100 lg:w-full shadow-2xl mb-5
                         border  border-b-4 
                        border-red-500  hover:bg-purple-50 
                        rounded-2xl" key={friends.id}>
                            <figure className=" px-10 pt-10">
                                <img
                                    src={friends.picture}

                                    alt={friends.name}
                                    className="rounded-full w-[220px] h-[200px]" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title text-2xl font-bold">{friends.name}</h2>
                    <p className='font-semibold'>{friends.days_since_contact}d ago</p>
                    <div className='sm:space-y-2 lg:flex 
       gap-2'>
                {friends.tags.map((tag) => {
                  return <div key={tag} className="bg-green-100 text-green-400 
          font-bold flex  badge badge-outline">{tag}</div>;
                })}
              </div>
               


                  <div className={`inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-sm font-medium mt-4
      ${friends.status === 'overdue' ? 'bg-red-400 text-white' : ''}
      ${friends.status === 'almost due' ? 'bg-amber-400 text-white' : ''}
      ${friends.status === 'on-track' ? 'bg-green-800 text-white' : ''}
    `}>
      {friends.status === 'overdue' && '🔴 Overdue'}
      {friends.status === 'almost due' && '⚠️ Almost Due'}
      {friends.status === 'on-track' && '✅ On Track'}
    </div>
                  


                                
                            </div>
                        </Link>
    );
};

export default FriendCard;