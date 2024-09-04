import { Link } from 'react-router-dom'
import { auth } from '../config/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';


/*
export const Navbar = () => {
   const [user] = useAuthState(auth);

  return (
    <div>
    <Link to='/'>Home</Link>
    <Link to='/login'>Login</Link>

  
      <div>{auth.currentUser?.displayName}</div>
      <img src={auth.currentUser?.photoURL  || ''} width='100px' height='100px'/>
    </div>
  )


}
*/

export const Navbar = () => {
  const [user] = useAuthState(auth);

  const signUserOut = async () => { 
    await signOut(auth);
  }

 return (
<div className='navbar'>
    <div className='links'>
      <Link className='home' to='/'>Home</Link>
      {!user ? (<Link className='login' to='/login'>Login</Link>) : <Link className='createpost' to='/createpost'>Create Post</Link>}
    </div>
    
    { user && 
      <>
      <div className='username'>{user?.displayName}</div>
      <img className='picture' src={user?.photoURL  || ''} width='40px' height='40px'/>
      <button className='logout' onClick={signUserOut}>Log Out</button>
      </>
    }
    
</div>
 )
}