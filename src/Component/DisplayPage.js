  import React from 'react'
  import { useState } from 'react';
  import { getAuth, signOut, } from 'firebase/auth'
    import LoginPage from './Home'
  const DisplayPage = ({email, password}) => {
    const auth = getAuth()
    const [isSignedOut, setIsSignedOut] = useState(false);

async function handleSignOut(){
  try{
    await signOut(auth)
        alert("SignOut Successfully")
    setIsSignedOut(true)
     }
    catch(e){
      alert(e)
    }
}
if (isSignedOut) {
    // If signed out, render the login page
    return <LoginPage />
  }
    return (
      <>
    <div>
      <p>Email: {email}</p>
      <p>uID : {password}</p>
      <button onClick={handleSignOut}>Sign Out</button>
    </div>
    <div>
      {/* <Blog></Blog> */}
    </div>
</>
    )
  }
  
  export default DisplayPage
  