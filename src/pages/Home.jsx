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
        <div className="flex flex-col items-end w-full sm:w-auto gap-4">
          <div className="flex flex-col xl:flex-row flex-wrap w-full sm:w-auto sm:max-w-1/2 gap-4">
            <a href="/info" target="" rel="noopener noreferrer" className="btn px-8 py-4 w-full sm:w-auto min-w-[230px]">О Фестивале</a>
            <a href="https://docs.google.com/spreadsheets/d/1Y0y5i8RQjVBUpvx-WqdT784VjqSg6ZCFq5XMYdGoDWU/edit?usp=sharing" target="_blank" rel="noopener noreferrer" className="btn px-8 py-4 w-full sm:w-auto min-w-[230px]">Таблица ОД</a>
          </div>
          <div className="flex flex-col xl:flex-row flex-wrap w-full sm:w-auto sm:max-w-1/2 gap-4">
            <a href="https://docs.google.com/spreadsheets/d/1Zla3SZtXbtE9RDaQlKtt3vklxsO6fPujoHIYBQNcXnk/edit?usp=sharing" target="_blank" rel="noopener noreferrer" className="btn px-8 py-4 w-full sm:w-auto min-w-[230px]">Таблица ЭК</a>
            <a href="https://docs.google.com/spreadsheets/d/1sixKz9b7HoPtEihFNPh5bWGGDjREVlz-C_I_MenoL9w/edit?usp=sharing" target="_blank" rel="noopener noreferrer" className="btn px-8 py-4 w-full sm:w-auto min-w-[230px]">Таблица СИ</a>
          </div>
          <div className="flex flex-col xl:flex-row flex-wrap w-full sm:w-auto sm:max-w-1/2 gap-4">
            <a href="https://forms.gle/sXXiXAijkQuFBR9Q6" target="_blank" rel="noopener noreferrer" className="btn px-8 py-4 w-full sm:w-auto min-w-[230px]">Спорные. ИЖ</a>
            <a href="https://forms.gle/WmB3wsGHncuNEmBi6" target="_blank" rel="noopener noreferrer" className="btn px-8 py-4 w-full sm:w-auto min-w-[230px]">Апелляции. АЖ</a>
            <a href="/registration" target="_blank" rel="noopener noreferrer" className="btn px-8 w-full sm:w-auto hidden">Регистрация</a>
          </div>
        </div>
      </div>
    </div>
    
  </>
  );
}