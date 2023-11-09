import React from "react";
import { auth, provider } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { signInWithPopup } from "firebase/auth";

const Home = () => {
  const [user] = useAuthState(auth);

  return (
    <div>
      {user ? (
        <>
          <UserInfo />
          <SignOutButton />
        </>
      ) : (
        <SignInButton />
      )}
    </div>
  );
};

export default Home;

//グーグルボタンでサインイン
function SignInButton() {
  const signInWithGoogle = () => {
    //firebaseを使ってっグーグルでサインインする
    signInWithPopup(auth, provider);
  };

  return (
    <button onClick={signInWithGoogle}>
      <p>Google Signin</p>
    </button>
  );
}

//グーグルボタンでサインアウト
function SignOutButton() {
  return (
    <button onClick={() => auth.signOut()}>
      <p>Google Signout</p>
    </button>
  );
}

function UserInfo() {
  return (
    <div className="userInfo">
      <img src={auth.currentUser?.photoURL} alt="icon" />
      <p>{auth.currentUser?.displayName}</p>
    </div>
  );
}
