import React, { useEffect } from 'react'
import { auth } from '../utils/firebase'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { addUser, removeUser } from '../utils/userSlice'
import { useDispatch, useSelector } from 'react-redux'
import { LOGO } from '../utils/constants'

const Header = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector(store => store.user);

    const handleSignOut = () =>{
        signOut(auth).then(() => {})
        .catch((error) => {
            navigate("/error");
        });
    }


    // To add user or remove user from store on signin/signup and signout
    useEffect(() =>{
        const unsubscribe = onAuthStateChanged(auth, (user) =>{
            if(user){
                const {uid,email,displayName,photoURL} = user;
                dispatch(addUser({uid: uid, email: email, displayName: displayName, photoURL: photoURL}));
                navigate("/browse");
            }
            else{
                dispatch(removeUser());
                navigate("/");
            }
        });

        // Unsubscribe when component unmounts (cleanup function)
        return () => unsubscribe();
    },[]);


  return (
    <div className='absolute w-screen px-8 pt-2 bg-gradient-to-b from-black z-10 flex justify-between'>
        <img className='w-44'
        src={LOGO}>
        </img>
        
        {user && <div className='flex px-2'>
            <img className='w-13 h-14 p-2'
            src={user?.photoURL}></img>

            <button onClick={handleSignOut} className='font-bold text-white pb-5'>(Sign Out)</button>
        </div>}
        
    </div>
  )
}

export default Header