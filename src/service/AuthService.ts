import firebase from "firebase/compat/app";
import "firebase/auth";

export const AuthService = {
  LoginWithGoogle: async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    try {
      const userCredential = await firebase.auth().signInWithPopup(provider);
      console.log(userCredential);
      return {
        user: userCredential.user,
      };
    } catch (e: any) {
      return {
        error: e.message,
      };
    }
  },
  logout: async () => {
    await firebase.auth().signOut();
  },
};
