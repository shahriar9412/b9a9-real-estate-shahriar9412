import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';

const Profile = () => {
    const { user } = useContext(AuthContext);
    return (
        <div className='text-center m-10'>
           <h1 className='text-2xl text-purple-950'>{user.displayName}</h1>
           <h1>{user.email}</h1>
           <img src={user.photoURL} alt="" />
        </div>
    );
};

export default Profile;