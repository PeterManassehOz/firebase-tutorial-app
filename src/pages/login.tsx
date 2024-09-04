import { auth, provider } from '../config/firebase'
import { signInWithPopup } from 'firebase/auth'
import { useNavigate } from 'react-router-dom';

export const Login = () => {
  const navigate = useNavigate();

  const signInWithGoogle = async () => {
   const result = await signInWithPopup(auth, provider);
   console.log(result);
   navigate('/');
  };

  return (
    <div>
     <p>Sign In With Google To Continue</p>
     <button onClick={signInWithGoogle}>Sign In With Google</button>
    </div>
  )
}

/*
import { auth, provider } from '../config/firebase';
import { signInWithPopup } from 'firebase/auth';
//import React from 'react';

export const Login = () => {

  const signInWithGoogle = async () => {
    console.log('Sign-in process started'); // Debugging log
    try {
      const result = await signInWithPopup(auth, provider);
      console.log('Sign-in successful:', result); // Debugging log
      // Handle successful sign-in (e.g., redirect the user, save user info)
    } catch (error) {
      if (error instanceof Error) {
        if (error.message.includes('auth/popup-closed-by-user')) {
          console.warn('Popup closed by user'); // Specific warning
          alert('The sign-in popup was closed before completing the process. Please try again.');
        } else {
          console.error('Error during sign-in:', error.message); // General error
          alert('Failed to sign in with Google. Please try again.');
        }
      } else {
        console.error('Unknown error during sign-in:', error); // Unknown error
        alert('An unexpected error occurred. Please try again.');
      }
    }
    console.log('Sign-in process ended'); // Debugging log
  };

  return (
    <div>
      <p>Sign In With Google To Continue</p>
      <button onClick={signInWithGoogle}>Sign In With Google</button>
    </div>
  );
}
*/

