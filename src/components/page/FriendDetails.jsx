import { useLoaderData, useParams } from 'react-router';
import vector from '../../assets/Vector (3).png'
import vector4 from '../../assets/Vector (4).png'
import vector5 from '../../assets/Vector (5).png'
import { useContext } from 'react';

import {  FriendsContext } from '../../context/FriendContext';

const FriendDetails = () => {
    const friendId = useParams();
    const friend = useLoaderData();
    
      const {handleCalling, handleText, handleVideoCall} =useContext(FriendsContext)
   
   

    const expectedFriend = friend.find(friend => friend.id == friendId.Id);
   

    const { name, picture, email, days_since_contact, status, tags, bio, goal, next_due_date } = expectedFriend;

             
    return (
        <div className='bg-gray-100 min-h-screen p-6 md:p-10 my-5 rounded-2xl'>
            <h1 className='font-bold text-4xl'>Friend Details</h1>

           <div className="  my-20 p-6 md:p-10 rounded-2xl">

  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:min-h-[700px] 
  lg:min-h-0">

    {/* ==================== LEFT SIDE - Profile ==================== */}
    <div className="lg:col-span-5 xl:col-span-4 flex flex-col">
      <div className="bg-white shadow-xl rounded-2xl p-6 md:p-8 text-center flex-1 flex flex-col">
         <div className=''>
           <img
          className="w-52 h-52 rounded-full mx-auto border-4 border-white shadow-md"
          src={picture}
          alt={name}
        />

        <h1 className="text-3xl font-bold mt-5">{name}</h1>

        {/* Status */}
        <div>

        <div className={`inline-flex items-center gap-1.5 
                  px-4 py-1.5 rounded-full text-sm font-medium mt-4
      ${status === 'overdue' ? 'bg-red-400 text-white' : ''}
      ${status === 'almost due' ? 'bg-amber-400 text-white' : ''}
      ${status === 'on-track' ? 'bg-green-800 text-white' : ''}
    `}>
      {status === 'overdue' && ' Overdue'}
      {status === 'almost due' && ' Almost Due'}
      {status === 'on-track' && ' On Track'}
    </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap justify-center gap-2 my-6">
          {tags.map((tag) => (
            <div key={tag} className="badge badge-outline bg-green-100 text-green-700 px-4 py-1 font-medium">
              {tag}
            </div>
          ))}
        </div>

        <p className="text-gray-600 leading-relaxed flex-1">{bio}</p>
        <p className="text-gray-600 mt-3">
          <span className="font-medium">Email:</span> {email}
        </p>
         </div>
       

        {/* Action Buttons - Bottom */}
        <div className="mt-auto pt-8 space-y-3">
          <button className="w-full bg-white shadow-md hover:shadow-lg border border-gray-200 hover:border-gray-300 py-4 rounded-2xl flex items-center justify-center gap-3 text-lg font-semibold transition-all">
            <img src={vector} alt="" className="w-5" />
            Snooze 2 weeks
          </button>

          <button className="w-full bg-white shadow-md hover:shadow-lg border border-gray-200 hover:border-gray-300 py-4 rounded-2xl flex items-center justify-center gap-3 text-lg font-semibold transition-all">
            <img src={vector4} alt="" className="w-5" />
            Archive
          </button>

          <button className="w-full bg-white shadow-md hover:shadow-lg border border-red-200 hover:border-red-300 py-4 rounded-2xl flex items-center justify-center gap-3 text-lg font-semibold text-red-600 transition-all">
            <img src={vector5} alt="" className="w-5" />
            Delete
          </button>
        </div>

      </div>
    </div>

    {/* ==================== RIGHT SIDE - Stats & Actions ==================== */}
    <div className="lg:col-span-7  xl:col-span-8 flex flex-col">
      <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 flex-1 flex flex-col space-y-6">

        {/* Stats Cards */}
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-gradient-to-br from-blue-500 to-indigo-600 text-white rounded-2xl p-5 text-center">
            <p className="text-sm opacity-80">Days Since Contact</p>
            <p className="text-4xl font-bold mt-2">{days_since_contact}</p>
            <p className="text-xs mt-1">days</p>
          </div>

          <div className="bg-gradient-to-br from-purple-500 to-pink-600 text-white rounded-2xl p-5 text-center">
            <p className="text-sm opacity-80">Goal</p>
            <p className="text-4xl font-bold mt-2">{goal}</p>
            <p className="text-xs mt-1">days</p>
          </div>

          <div className="bg-gradient-to-br from-emerald-500 to-teal-600 text-white rounded-2xl p-5 text-center">
            <p className="text-sm opacity-80">Next Due</p>
            <p className="text-3xl font-bold mt-2">{next_due_date}</p>
            <p className="text-xs mt-1">2026</p>
          </div>
        </div>

        {/* Relationship Goal */}
        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6">
          <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
            <div>
              <p className="text-gray-500 text-sm">Current Goal</p>
              <p className="text-2xl font-semibold text-gray-800 mt-1">
                Contact every <span className="text-indigo-600 border bg-purple-100 border-emerald-400 p-3 rounded-2xl ">{goal}</span> days
              </p>
            </div>
            <button
              
              className="bg-white border border-gray-300 hover:bg-gray-100 
              px-6 py-3 rounded-xl text-xl font-medium flex items-center gap-2 whitespace-nowrap"
            >
              ✏️ Edit Goal
            </button>
          </div>
        </div>

        {/* Quick Check-In */}
        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6
         flex-1 flex flex-col">
          <p className="text-xl mb-5">Quick Check-In</p>
          
          <div className="grid grid-cols-3 gap-4 mt-auto">
            <button onClick={() => handleCalling(expectedFriend)} className="flex flex-col
             items-center gap-3 bg-white hover:bg-green-50 border
              border-green-200 hover:border-green-400 rounded-2xl
               py-8 transition-all hover:scale-105 text-2xl">
              📞 <span className="font-medium text-green-700">Call</span>
            </button>

            <button onClick={() =>handleText(expectedFriend)} className=" 
            text-2xl flex flex-col items-center gap-3 
            bg-white hover:bg-blue-50 border
             border-blue-200 hover:border-blue-400 
             rounded-2xl py-8 transition-all hover:scale-105">
              💬 <span className="font-medium text-blue-700">Text</span>
            </button>

            <button onClick={() => handleVideoCall(expectedFriend)} className="text-2xl flex flex-col items-center gap-3 bg-white hover:bg-purple-50 border border-purple-200 hover:border-purple-400 rounded-2xl py-8 transition-all hover:scale-105">
              📹 <span className="font-medium text-purple-700">Video</span>
            </button>
          </div>
        </div>

      </div>
    </div>

  </div>
</div>
        </div>
    );
};

export default FriendDetails;