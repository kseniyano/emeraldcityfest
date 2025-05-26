

export default function Registration() {
  return (
    <>
    <div className="container-width pt-16 mb-24">
      <div className="flex flex-col items-end gap-2 mb-8"> 
            <h2 className="text-accent">Регистрация</h2>
            <h5 className="text-right">Для бронирования участия необходимо внести депозит в размере $100. Даже если вы ещё раздумываете над участием,
пожалуйста, зарегистрируйтесь заранее — это поможет нам лучше организовать площадку и учесть ваш интерес.</h5>
      </div>  
      <div className="flex gap-6">
        <div className="basis-6 grow-2">
          <div className="flex flex-col items-center mb-6 p-6 border border-primary-300 rounded-2xl">
            <p className="text-32 mb-8">Стоимость участия</p>
            <div className="flex gap-8 mb-8">
                <div className="flex flex-col items-center">
                  <h5>При оплате до 1 августа</h5>
                  <h3 className="font-bold text-emerald">$330 USD</h3>
                </div>
                <div className="flex flex-col items-center">
                  <h5>При оплате после 1 августа</h5>
                  <h3 className="font-bold text-emerald">$360 USD</h3>
                </div>
            </div>
            <p className="font-bold text-center">ВАЖНО! Указывайте сумму, которую получит адресат. Комиссия PayPal оплачивается отправителем.</p>
          </div>
          <div className="flex flex-col items-center mb-6 p-6 border border-primary-300 rounded-2xl">
            <p className="text-32 mb-8">Способы оплаты</p>
            <div className="flex gap-12 mb-8">
                <div className="flex flex-col items-center">
                  <h3 className="font-bold text-emerald">PayPal</h3>
                  <h4>@paypal</h4>
                </div>
                <div className="flex flex-col items-center">
                  <h3 className="font-bold text-emerald">Zelle</h3>
                  <h4>@zelle</h4>
                </div>
                <div className="flex flex-col items-center">
                  <h3 className="font-bold text-emerald">Venmo</h3>
                  <h4>@venmo</h4>
                </div>
            </div>
            <p className="font-bold text-center">В комментарии к переводу указывайте название команды</p>
          </div>
          <div className="grid grid-cols-2 gap-x-6">
            <a href="https://tinyurl.com/EmeraldCityFestTeams" target="_blank" rel="noopener noreferrer" className="btn">Регистрация команд</a>
            <a href="https://tinyurl.com/EmeraldCityFestLegion" target="_blank" rel="noopener noreferrer" className="btn">Регистрация легионеров</a>
          </div>
        </div>
        <div className="basis-0 grow-1 relative">
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