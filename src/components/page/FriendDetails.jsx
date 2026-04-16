import { useLoaderData } from 'react-router';


const FriendDetails = () => {
    // const friendId = useParams();
    const friend =useLoaderData();
    console.log(friend,'friend');
   

        // console.log(friendId,'friemnd');
    return (
        <div>
            <h1>Friend Details</h1>
        </div>
    );
};

export default FriendDetails;