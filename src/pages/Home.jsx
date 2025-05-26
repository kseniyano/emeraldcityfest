import React from "react";
import TopMenu from "../components/TopMenu";
import Parallax from  "../components/Parallax";


export default function Home() {
  return (
  <>
    <Parallax />
    <div className="container-width relative">
      <div className="flex flex-col h-screen items-end justify-between py-28">
        <TopMenu />
        <div className="flex flex-col items-end gap-4">
          <h1 className="text-emerald">Emerald City Fest</h1>
          
          <div className="flex flex-col items-end">
            <h1 className="text-8xl">Nevermore 5</h1>
            <h3 className="">13-14 Сентября 2025, Сиэтл</h3>
          </div>
        </div>
        <a href="/registration" target="_blank" rel="noopener noreferrer" className="btn">Регистрация</a>
      </div>
    </div>
    
  </>
  );
}