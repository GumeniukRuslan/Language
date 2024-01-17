import { Route, Routes } from "react-router-dom";
import { lazy } from "react";
import English from "../pages/English";
import UserProfile from "../pages/UserProfile/UserProfile.jsx";
import { Toaster } from "react-hot-toast";

const Home = lazy(() => import('../pages/Home'))

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/#" element={<Home />}/>
        <Route path="/english" element={<English />}/>
        <Route path="/profile" element={<UserProfile />}/>
        <Route path="*" element={<Home/>}/>
      </Routes>
      <Toaster position="top-right" toastOptions={{duration: 2000}} />
    </>
      
  );
};
