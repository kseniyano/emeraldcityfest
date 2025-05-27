import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function Info() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const el = document.querySelector(location.hash);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  }, [location]);


  return (
    <>
    <div className="container-width pt-16 mb-24">
      <div id="about" className="scroll-mt-28 flex flex-row gap-6 mb-24">
        <div className="flex basis-0 grow-1 place-center">
          <img
            src="/assets/raven_info.png"
            alt="EmeraldCityFest"
            title="..регистрируйся..."
            className="object-contain"
          />
        </div>
        <div className="flex flex-col basis-6 grow-2 gap-8">
          <div className="flex flex-col items-end gap-2"> 
            <h2 className="text-accent">О Фестивале</h2>
            <h5 className="text-right">Nevermore 5 — это международный фестиваль ЧГК, который в 2025 году снова соберёт команды из разных стран, чтобы сыграть вместе в один уикенд. В этом году одно из зеркал пройдёт в Сиэтле — и мы с удовольствием зовём вас присоединиться!</h5>
            <div className="flex gap-6">
              <p className="font-bold text-32"><img src="/assets/calendar.svg" alt="" className="w-18 h-18 inline" />13–14 сентября 2025</p>
              <p className="font-bold text-32"><img src="/assets/map-pin.svg" alt="" className="w-18 h-18 inline" />Сиэтл</p>
            </div>
          </div>
          <div>
            <h4 className="mb-3">Формат</h4>
            <div className="grid grid-cols-2 gap-x-6 p-6 border border-primary-300 rounded-2xl">
              <div className="flex flex-col gap-6">
                <div className="text-center">
                  <p className="font-bold text-primary-500">Главное</p>
                  <p className="text-32 text-emerald">Основная дисциплина</p>
                  <h5 className="font-bold">6 туров по 15 вопросов</h5>
                </div>
                <div className="text-center">
                  <p className="text-32 text-emerald">Эрудит-квартет</p>
                  <h5 className="font-bold">48 тем</h5>
                </div>
              </div>
              <div className="flex flex-col gap-6">
                <div className="text-center">
                  <p className="font-bold text-primary-500">+ Бонусы</p>
                  <p className="text-32 text-emerald">Кубок Ржевского</p>
                  <h5 className="font-bold">внезапно</h5>
                </div>
                <div className="text-center">
                  <p className="text-32 text-emerald">Музыкальный квиз</p>
                  <h5 className="font-bold">в баре</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-6">
            <div className="basis-0 grow-5">
              <h4 className="mb-3">Редакторская группа турнира</h4>
              <div className="grid grid-cols-2 gap-x-6 mb-3 p-6 border border-primary-300 rounded-2xl">
                <div>
                  <h5 className="font-bold">Алексей Бороненко</h5>
                  <p className="text-emerald mb-3">Москва</p>
                  <h5 className="font-bold">Юлия Дидбаридзе</h5>
                  <p className="text-emerald mb-3">Хайфа</p>
                  <h5 className="font-bold">Дария Жылкыбаева</h5>
                  <p className="text-emerald">Алматы</p>
                </div>
                <div>
                  <h5 className="font-bold">Артём Колесов</h5>
                  <p className="text-emerald mb-3">Москва</p>
                  <h5 className="font-bold">Темирлан Сафаргалиев</h5>
                  <p className="text-emerald mb-3">Астана</p>
                  <h5 className="font-bold">Дмитрий Стальнухин</h5>
                  <p className="text-emerald">Таллинн</p>
                </div>
              </div>
              <h4 className="mb-3">Редактор ЭК</h4>
              <div className="p-6 border border-primary-300 rounded-2xl">
                <h5 className="font-bold">Анвар Мухаметкалиев</h5>
                <p className="text-emerald">Алматы</p>
              </div>
            </div>
            <div className="basis-0 grow-3 flex flex-col">
              <h4 className="mb-3">География Nevermore 5</h4>
              <ul className="grow p-6 border border-primary-300 rounded-2xl">
                <li className="mb-2">🇷🇺 Россия — Санкт-Петербург</li>
                <li className="mb-2">🇧🇾 Беларусь — Минск</li>
                <li className="mb-2">🇰🇿 Казахстан — Алматы</li>
                <li className="mb-2">🇪🇸 Испания — Барселона</li>
                <li className="mb-2">🇱🇻 Латвия — Саулкрасти</li>
                <li className="mb-2">🇺🇸 США — Сиэтл</li>
              </ul>

            </div>
          </div>
        </div>  
      </div>
      <div id="schedule" className="scroll-mt-28 mb-24">
        <h2 className="text-accent text-center mb-8">Расписание</h2>
        <div className="grid grid-cols-2 gap-6">
          <div className="flex flex-col items-stretch">
            <div className="min-h-[72px] mb-8">
              <h3 className="text-center">Суббота, 13* сентября</h3>
              <p className="text-center font-bold text-emerald">*все совпадения случайны</p>
            </div>
            <div className="flex gap-6 mb-6">
              <h4 className="basis-0 grow-1 text-emerald text-right">10:00 - 11:00</h4>
              <h5 className="basis-0 grow-1 ">Регистрация команд и открытие фестиваля</h5>
            </div>
            <div className="flex gap-6 mb-6">
              <h4 className="basis-0 grow-1 text-emerald text-right">11:00 - 13:00</h4>
              <h5 className="basis-0 grow-1 ">Два тура ЧГК</h5>
            </div>
            <div className="flex gap-6 mb-6">
              <h4 className="basis-0 grow-1 text-emerald text-right">13:00 - 14:00</h4>
              <h5 className="basis-0 grow-1 ">Перерыв / Обед</h5>
            </div>
            <div className="flex gap-6 mb-6">
              <h4 className="basis-0 grow-1 text-emerald text-right">14:00 - 15:00</h4>
              <h5 className="basis-0 grow-1 ">Третий тур ЧГК</h5>
            </div>
            <div className="flex gap-6 mb-6">
              <h4 className="basis-0 grow-1 text-emerald text-right">15:00 - 18:00</h4>
              <h5 className="basis-0 grow-1 ">Эрудит-квартет</h5>
            </div>

          
          </div>
          <div className="flex flex-col items-stretch">
            <h3 className="text-center min-h-[70px] mb-8">Воскресенье, 14 сентября</h3>
            <div className="flex gap-6 mb-6">
              <h4 className="basis-0 grow-1 text-emerald text-right">10:00 - 11:00</h4>
              <h5 className="basis-0 grow-1 ">Три тура ЧГК</h5>
            </div>
            <div className="flex gap-6 mb-6">
              <h4 className="basis-0 grow-1 text-emerald text-right">11:00 - 13:00</h4>
              <h5 className="basis-0 grow-1 ">Работа АЖ</h5>
            </div>
            <div className="flex gap-6 mb-6">
              <h4 className="basis-0 grow-1 text-emerald text-right">13:00 - 14:00</h4>
              <h5 className="basis-0 grow-1 ">Финал Эрудит Квартета</h5>
            </div>

          
          </div>
        </div>
      </div>
    </div> 
    <div id="location" className="scroll-mt-28 bg-neutral-darker">
      <div className="container-width pt-16 mb-24">
        <div className="grid grid-cols-2 gap-6 pb-24">
          <div>
            <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2687.79899939997!2d-122.36691092376711!3d47.64947267119381!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5490155d3ab58973%3A0x1ac970a9724fc5a0!2sGwinn%20Commons!5e0!3m2!1sen!2sus!4v1748208850151!5m2!1sen!2sus" 
            width="100%" 
            height="100%" 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full"></iframe>
          </div>
          <div>
            <h2 className="text-accent text-right mb-6">Место Проведения Игр</h2>
            <div className="p-6 border border-primary-300 rounded-2xl">
              <h3>Seattle Pacific University</h3>
              <h5 className="font-bold mb-4">Gwinn Commons / Upper Gwinn Hall, 3 этаж</h5>
              <a href="https://maps.app.goo.gl/BJ8GfeNmMTycFMLD6" className="" target="_blank"><h4 className="mb-6 flex items-center text-emerald"><img src="/assets/map-pin.svg" alt="" className="w-8 h-8 inline" />3310 6th Ave W, Seattle, WA 98119</h4></a>
              <h4>Зал для Эрудит-квартета</h4>
              <h5 className="mb-4">Weter Hall #202</h5>
              <h4>Парковка</h4>
              <h5 className="">TBD</h5>
            </div>
          </div>
          
        </div>
      </div>
    </div>
     
    </>
  );
}