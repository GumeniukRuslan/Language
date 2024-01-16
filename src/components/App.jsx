import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { lazy } from "react";
import { Toaster } from "react-hot-toast";

const Home = lazy(() => import('../pages/Home.jsx'))
const English = lazy(() => import('../pages/English.jsx'))
const UserProfile = lazy(() => import('../pages/UserProfile/UserProfile.jsx'))



export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/english" element={<English />}/>
        <Route path="/profile" element={<UserProfile />}/>
        <Route path="*" element={<Home/>}/>
      </Routes>
      <Toaster position="top-right" toastOptions={{duration: 2000}} />
    </Router>
  );
};
