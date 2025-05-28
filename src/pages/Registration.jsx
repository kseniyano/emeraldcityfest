

export default function Registration() {
  return (
    <>
    <div className="container-width pt-16 mb-24">
      <div className="flex flex-col items-end gap-2 mb-8"> 
            <h2 className="">Регистрация</h2>
            <h5 className="text-right">Для бронирования участия необходимо внести депозит в размере $100. Даже если вы ещё раздумываете над участием,
пожалуйста, зарегистрируйтесь заранее — это поможет нам лучше организовать площадку и учесть ваш интерес.</h5>
      </div>  
      <div className="flex gap-6">
        <div className="w-full lg:w-auto lg:basis-6 lg:grow-2">
          <div className="flex flex-col items-center mb-6 p-6 border border-primary-300 rounded-2xl">
            <p className="text-32 mb-8 text-center">Стоимость участия</p>
            <div className="flex flex-wrap justify-center sm:flex-nowrap gap-8 mb-8">
                <div className="flex flex-col items-center w-full sm:w-auto">
                  <h5 className="text-center">При оплате до 1 августа</h5>
                  <h3 className="font-bold text-emerald text-center">$330 USD</h3>
                </div>
                <div className="flex flex-col items-center w-full sm:w-auto">
                  <h5 className="text-center">При оплате после 1 августа</h5>
                  <h3 className="font-bold text-emerald text-center">$360 USD</h3>
                </div>
            </div>
            <p className="font-bold text-center">ВАЖНО! Указывайте сумму, которую получит адресат. Комиссия PayPal оплачивается отправителем.</p>
          </div>
          <div className="flex flex-col items-center mb-6 p-6 border border-primary-300 rounded-2xl">
            <p className="text-32 mb-8 text-center">Способы оплаты</p>
            <div className="flex flex-wrap justify-center sm:flex-nowrap gap-4 sm:gap-12 mb-8">
                <div className="flex flex-col items-center w-full sm:w-auto">
                  <h3 className="font-bold text-emerald text-center">PayPal</h3>
                  <h4 className="text-center">@paypal</h4>
                </div>
                <div className="flex flex-col items-center w-full sm:w-auto">
                  <h3 className="font-bold text-emerald text-center">Zelle</h3>
                  <h4 className="text-center">@zelle</h4>
                </div>
                <div className="flex flex-col items-center w-full sm:w-auto">
                  <h3 className="font-bold text-emerald text-center">Venmo</h3>
                  <h4 className="text-center">@venmo</h4>
                </div>
            </div>
            <p className="font-bold text-center">В комментарии к переводу указывайте название команды</p>
          </div>
          <div className="flex flex-wrap sm:flex-nowrap gap-6">
            <a href="https://tinyurl.com/EmeraldCityFestTeams" target="_blank" rel="noopener noreferrer" className="btn w-full sm:w-auto sm:grow">Регистрация команд</a>
            <a href="https://tinyurl.com/EmeraldCityFestLegion" target="_blank" rel="noopener noreferrer" className="btn w-full sm:w-auto sm:grow">Регистрация легионеров</a>
          </div>
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