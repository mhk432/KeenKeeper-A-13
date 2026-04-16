import React, { use } from 'react';

const ExtraSection = ({ allFriendPromis }) => {
    const friends =use(allFriendPromis);

    
    return (
        <div>
           <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-10 w-full">
  
  {/* Card 1 - Total Friends */}
  <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl 
  transition-all duration-300 p-6 border border-gray-100">
    <div className="flex items-center justify-between">
      <div>
        <h3 className="text-4xl font-bold text-gray-800 mt-2">{friends.length}</h3>
        <p className="text-gray-500 text-sm font-medium">Total Friends</p>
      </div>
      <div className="w-14 h-14 bg-blue-100 text-blue-600 
      rounded-2xl flex items-center justify-center text-3xl">
        👥
      </div>
    </div>
  </div>

  {/* Card 2 - Overdue */}
  <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-red-100">
    <div className="flex items-center justify-between">
      <div>
        <h3 className="text-4xl font-bold text-red-600 mt-2">{friends.
        filter(f => f.status === 'overdue').length}</h3>
        <p className="text-gray-500 text-sm font-medium">OnTrack</p>
      </div>
      <div className="w-14 h-14 bg-red-100 text-red-600 rounded-2xl flex items-center justify-center text-3xl">
        ⏰
      </div>
    </div>
  </div>

  {/* Card 3 - Almost Due */}
  <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-yellow-100">
  <div className="flex items-center justify-between">
    <div>
      <h3 className="text-4xl font-bold text-yellow-600 mt-1">{friends.filter(f => f.status === 'almost due').length}</h3>
      <p className="text-gray-500 text-sm font-medium">Need Attention</p>
    </div>
    <div className="w-14 h-14 bg-yellow-100 text-yellow-600 rounded-2xl flex items-center justify-center text-4xl shadow-inner">
      ⚠️
    </div>
  </div>
</div>

  {/* Card 4 - On Track */}
  <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-green-100">
    <div className="">
  <div className="flex items-center justify-between">
    <div>
      <h3 className="text-4xl font-bold text-green-600 mt-2">{friends.filter(f => f.status === 'on-track').length}</h3>
      <p className="text-gray-500 text-sm font-medium">Interactions This Month</p>
    </div>
    <div className="w-14 h-14 bg-green-100 text-green-600 rounded-2xl flex items-center justify-center text-3xl">
      📊 
    </div>
  </div>
</div>
  </div>

</div>
        </div>
    );
};

export default ExtraSection;