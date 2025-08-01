import React, { useEffect, useRef } from "react";

export default function Registration() {
  const linkRef = useRef(null);

  useEffect(() => {
    const email = "kss.kovaleva@gmail.com";
    if (linkRef.current) {
      linkRef.current.textContent = email;
    }
  }, []);

  return (
    <>
    <div className="container-width pt-16 mb-24">
      <div className="flex flex-col items-end gap-2 mb-8"> 
            <h2 className="">Регистрация</h2>
      </div>  
      <div className="flex gap-6">
        <div className="w-full lg:w-auto lg:basis-6 lg:grow-2">
          <h5 className="mb-6">
              <span className="font-bold">Важно: Зал рассчитан на 18 команд, осталось одно место.</span>
              <br/>По всем вопросам пишите в Telegram: <a href="https://t.me/kseniyano" target="_blank" rel="noopener noreferrer">@kseniyano</a>
          </h5>
          <div className="flex flex-col items-center mb-6 p-6 border border-primary-300 rounded-2xl">
            <p className="text-32 mb-8 text-center">Стоимость участия</p>
            <div className="flex flex-wrap justify-center sm:flex-nowrap gap-8 mb-8">
                <div className="flex flex-col items-center w-full sm:w-auto">
                  <h5 className="text-center">При оплате до 10 августа</h5>
                  <h3 className="font-bold text-emerald text-center">$330 USD</h3>
                </div>
                <div className="flex flex-col items-center w-full sm:w-auto">
                  <h5 className="text-center">При оплате после 10 августа</h5>
                  <h3 className="font-bold text-emerald text-center">$360 USD</h3>
                </div>
            </div>
            
          </div>
          <div className="flex flex-col items-center mb-6 p-6 border border-primary-300 rounded-2xl">
            <p className="text-32 mb-8 text-center">Способы оплаты</p>
            <h4 className="hidden text-emerald text-center mb-4">Информация об оплате появится в ближайшее время</h4>
            <div className="flex flex-wrap justify-center sm:flex-nowrap gap-4 sm:gap-12 mb-8">
                <div className="flex flex-col items-center w-full sm:w-auto">
                  <h3 className="font-bold text-emerald text-center">PayPal</h3>
                  <a href="https://www.paypal.me/kseniyano" target="_blank"><h4 className="text-center">Оплатить</h4></a>
                </div>
                <div className="flex flex-col items-center w-full sm:w-auto">
                  <h3 className="font-bold text-emerald text-center">Venmo</h3>
                  <a href="https://www.venmo.com/u/kseniyano" target="_blank"><h4 className="text-center">Оплатить</h4></a>
                </div>
                <div className="flex flex-col items-center w-full sm:w-auto">
                  <h3 className="font-bold text-emerald text-center">Zelle</h3>
                  <h4 className="text-center obfuscated" ref={linkRef}>[email protected]</h4>
                </div>
            </div>
            <p className="font-bold text-center">В комментарии к переводу указывайте название команды</p>
            <p className="font-bold text-center">ВАЖНО: при отправке в валюте, отличной от USD, указывайте сумму, которую должен получить адресат. Комиссию оплачивает отправитель.</p>
          </div>
          <div className="flex flex-wrap gap-6 mb-6">
            <div className="flex flex-wrap sm:flex-nowrap gap-6 grow">
              <a href="https://tinyurl.com/EmeraldCityFestTeams" target="_blank" rel="noopener noreferrer" className="btn w-full sm:w-auto sm:grow text-xl">Регистрация команд</a>
              <a href="https://tinyurl.com/EmeraldCityFestLegion" target="_blank" rel="noopener noreferrer" className="btn w-full sm:w-auto sm:grow text-xl">Регистрация легионеров</a>
            </div>
            <a href="https://tinyurl.com/EmeraldCityFestSI" target="_blank" rel="noopener noreferrer" className="btn w-full sm:w-auto sm:grow text-xl">Регистрация на Свою Игру</a>
            
          </div>
          {/* <h4 className="w-full text-center">*Регистрация на Свою Игру будет открыта позже</h4> */}
        </div>

        <div className="hidden lg:block lg:basis-0 lg:grow-1 relative ">
           <img
            src="/assets/owl.png"
            title="..плоти взнос.."
            className="absolute bottom-0 right-0"
          />
        </div>
      </div>

    </div>  
    </>
  );
}