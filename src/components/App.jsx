import { Route, Routes } from "react-router-dom";
import { lazy } from "react";
import English from "../pages/English";

const Home = lazy(() => import('../pages/Home'))

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/english" element={<English />}/>
        <Route path="*" element={<Home/>}/>
      </Routes>
    </>
      
  );
};
