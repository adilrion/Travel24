import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
  sendPasswordResetEmail,
  // RecaptchaVerifier,
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeFirebase from "../Firebase/Firebase.init";

// initialize firebase app
initializeFirebase();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [login, setLogin] = useState(true);
  const [authError, setAuthError] = useState("");
  const [admin, setAdmin] = useState(false);

  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  // ...............user Registration...................//
  const registerUser = (
    email,
    password,
    firstName,
    lastName,
    number,
    gender,
    history
  ) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setAuthError("");
        const newUser = { email, displayName: firstName };
        setUser(newUser);
        // save user to the database
        saveUser(email, firstName, lastName, number, password, gender, "POST");
        // send name to firebase after creation
        updateProfile(auth.currentUser, {
          displayName: firstName,
        })
          .then(() => {})
          .catch((error) => {});
        history("/phoneAuthentication");
      })
      .catch((error) => {
        setAuthError(error.message);
        //
      })
      .finally(() => {
        setIsLoading(false);
        setLogin(true);
      });
  };

  // ..................End......................//

  // ...................User Sing in with google........................//
  const signInWithGoogle = (history) => {
    setIsLoading(true);
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        setUser(user);
        saveUserWithGoogleSingin(
          user.email,
          user.displayName,
          user.photoURL,
          "PUT"
        );
        setAuthError("");
        history("/");
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => setIsLoading(false));
  };
  // .......................End......................//

  // .....................observer user state...................................//
  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        /*  getIdToken(user).then((idToken) => {
          setToken(idToken);
        }); */
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribed;
  }, [auth]);
  //.....................End..............................//

  useEffect(() => {
    fetch(`https://obscure-atoll-04975.herokuapp.com/users/${user.email}`)
      .then((res) => res.json())
      .then((data) => setAdmin(data.admin));
  }, [user.email]);

  //.......................User Login..............................    ...//

  const loginUser = (email, password, history) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setAuthError("");
        history("/");
      })
      .catch((error) => {
        setAuthError(error.message);
      })

      .finally(() => setIsLoading(false));
  };

  // ....................End..........................//

  const forgetPassword = (email, history) => {
    const auth = getAuth();
    sendPasswordResetEmail(auth, email)
      .then(() => {
        window.alert("password successfully rest. Check Your Email");
        history("/login");
      })
      .catch((error) => {
        /*  const errorCode = error.code;
        const errorMessage = error.message; */
        // ..
      });
  };

  //........................User Log out.................................//
  const logout = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        setAuthError(error.message);
      })
      .finally(() => setIsLoading(false));
  };
  //.......................End.........................//

  //......................Save User Registration info to Mongodb.......................//
  const saveUser = (
    email,
    firstName,
    lastName,
    number,
    password,
    gender,
    method
  ) => {
    const user = {
      email,
      firstName: firstName + " " + lastName,
      number,
      password,
      gender,
      photoURL: "",
    };
    fetch("https://obscure-atoll-04975.herokuapp.com/users", {
      method: method,
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    }).then();
  };
  //......................End........................//

  //.......................Save google logged in user info to data base......................//
  const saveUserWithGoogleSingin = (email, displayName, photoURL, method) => {
    const user = {
      email,
      firstName: displayName,
      photoURL,
      number: "",
      gender: "",
      password: "",
    };
    fetch("https://obscure-atoll-04975.herokuapp.com/users", {
      method: method,
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    }).then();
  };
  //..........................End.............................//
  return {
    user,
    admin,
    isLoading,
    authError,
    registerUser,
    loginUser,
    signInWithGoogle,
    logout,
    forgetPassword,
    login,
    // token,
  };
};

export default useFirebase;
