import { Outlet } from "react-router-dom";
import Navber from "../components/Navber";
import Footer from "../components/Footer";
import "../App.css";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import auth from "../firebase/firebase.config";
import { useDispatch } from "react-redux";
import { loginUser, setLoading } from "../Features/UserSlice";

const MainLayout = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      
        if (currentUser) {
            dispatch(loginUser({
                name: currentUser.displayName,
                email: currentUser.email,
                photo: currentUser.photoURL
            }));
            dispatch(setLoading(false));
        }
        else {
            console.log("User not signed in");
        }

    })
    return () => {
        return unsubscribe;
    }
}, [dispatch])

  return (
    <div>
      <Navber />
      <div className="min-h-screen">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};
export default MainLayout;
