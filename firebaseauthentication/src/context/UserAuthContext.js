// Context API / React satate Managament with Context API
import { createContext, useEffect, useState, useContext } from 'react';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
import { auth } from '../firebase';

const userAuthContext = createContext();

export function UserAuthContextProvider({ children }) {
  // take children as props whatever components we want to pass

  const [user, setUser] = useState('');
  // write a function for signUp

  function signUp(name, email, password) {
    return createUserWithEmailAndPassword(auth, name, email, password); // auth instance from firebase .js
  }
  // signIn function
  function signIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password); // auth instance from firebase .js
  }

  // Logout 
  function logOut(){
    return signOut(auth);
  }
  /* how furebase will notify us that a particular user has created or login for that we have onAuthstateChanged,
  we want its only run once*/
  useEffect(() => {
    /*effect*/ const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
      /* when component is not mounted, user is not created then we want to laisten this
        we use const unscribe*/
      console.log('Auth', currentuser);
      setUser(currentuser);
    });
    return unsubscribe(); // cleanup function
  }, []);
  
  return (
    <userAuthContext.Provider value={{ user, signUp, signIn, logOut }}>
      {children}
    </userAuthContext.Provider>
  );
}

// custom hook
export function useUserAuth() {
  return useContext(userAuthContext);
}
