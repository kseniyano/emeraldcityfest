import React from "react";
import TopMenu from "../components/TopMenu";
import Parallax from  "../components/Parallax";
import NavBar from "../components/NavBar";


export default function Home() {
  return (
  <>
    <Parallax />
    <NavBar />
    <div className="container-width relative">
      <div className="flex flex-col h-screen-minus-navbar items-end justify-between pb-24">
        <div className="h-0 w-0"></div>
        <div className="flex flex-col items-end gap-4">
          <h1 className="text-emerald text-center sm:text-right">Emerald City Fest</h1>
          <div className="flex flex-col items-center w-full sm:w-auto sm:items-end mb-6">
            <h1 className="subtitle-home text-center sm:text-right" >Nevermore 5</h1>
            <h3 className="text-center sm:text-right home-h3">13-14 Сентября 2025, Сиэтл</h3>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row w-full sm:w-auto gap-4">
          <a href="/info" target="" rel="noopener noreferrer" className="btn px-12 w-full sm:w-auto">О Фестивале</a>
          <a href="/registration" target="_blank" rel="noopener noreferrer" className="btn px-12 w-full sm:w-auto">Регистрация</a>
        </div>
      </div>
    </div>
    
  </>
  );
}