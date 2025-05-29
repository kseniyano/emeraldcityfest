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
        <div className="hidden xl:flex basis-0 grow-1 place-center">
          <img
            src="/assets/raven_info.png"
            alt="EmeraldCityFest"
            title="..регистрируйся..."
            className="object-contain"
          />
        </div>
        <div className="flex flex-col w-full xl:w-auto xl:basis-6 xl:grow-2 gap-8">
          <div className="flex flex-col items-end gap-2"> 
            <h2 className="">О Фестивале</h2>
            <h5 className="text-right">Nevermore 5 — это международный фестиваль ЧГК, который в 2025 году снова соберёт команды из разных стран, чтобы сыграть вместе в один уикенд. В этом году одно из зеркал пройдёт в Сиэтле — и мы с удовольствием зовём вас присоединиться!</h5>
            <div className="flex flex-wrap justify-end sm:flex-nowrap gap-0 sm:gap-6">
              <p className="font-bold text-3xl sm:text-32 text-right"><img src="/assets/calendar.svg" alt="" className="w-14 h-14 sm:w-18 sm:h-18 inline" />13–14 сентября 2025</p>
              <p className="font-bold text-3xl sm:text-32 text-right"><img src="/assets/map-pin.svg" alt="" className="w-14 h-14 sm:w-18 sm:h-18 inline" />Сиэтл</p>
            </div>
          </div>
          <div>
            <h4 className="mb-3">Формат</h4>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 gap-x-6 p-6 border border-primary-300 rounded-2xl">
              <div className="flex flex-col gap-4">
                <div className="text-center">
                  <p className="font-bold text-primary-500">Главное</p>
                  <p className="text-3xl sm:text-2xl md:text-3xl lg:text-32 text-emerald">Основная дисциплина</p>
                  <h5 className="font-bold">6 туров по 15 вопросов</h5>
                </div>
                <div className="text-center">
                  <p className="text-3xl sm:text-2xl md:text-3xl lg:text-32 text-emerald">Эрудит-квартет</p>
                  <h5 className="font-bold">обязательно</h5>
                </div>
                <div className="text-center">
                  <p className="text-3xl sm:text-2xl md:text-3xl lg:text-32 text-emerald">Своя игра</p>
                  <h5 className="font-bold">но это не точно</h5>
                </div>
              </div>
              <div className="flex flex-col gap-6 justify-center">
                <div className="text-center">
                  <p className="font-bold text-primary-500">+ Бонусы</p>
                  <p className="text-3xl sm:text-2xl md:text-3xl lg:text-32 text-emerald">Кубок Ржевского</p>
                  <h5 className="font-bold">внезапно</h5>
                </div>
                <div className="text-center">
                  <p className="text-3xl sm:text-2xl md:text-3xl lg:text-32 text-emerald">Музыкальный квиз</p>
                  <h5 className="font-bold">в баре</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap sm:flex-nowrap gap-6">
            <div className="w-full sm:w-auto sm:basis-0 sm:grow-1 lg:grow-5">
              <h4 className="mb-3">Редакторская группа турнира</h4>
              <div className="flex flex-wrap lg:flex-nowrap gap-4 mb-3 p-6 border border-primary-300 rounded-2xl">
                <div className="grow">
                  <h5 className="font-bold">Алексей Бороненко</h5>
                  <p className="text-emerald mb-3">Москва</p>
                  <h5 className="font-bold">Юлия Дидбаридзе</h5>
                  <p className="text-emerald mb-3">Хайфа</p>
                  <h5 className="font-bold">Дария Жылкыбаева</h5>
                  <p className="text-emerald">Алматы</p>
                </div>
                <div className="grow">
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
            <div className="w-full sm:w-auto sm:basis-0 sm:grow-1 lg:grow-3 flex flex-col">
              <h4 className="mb-3">География Nevermore 5</h4>
              <div className=" flex flex-col flex-wrap justify-center items-center grow p-6 border border-primary-300 rounded-2xl">
                <h5 className="mb-4 w-full text-center font-bold">Россия <span className="text-emerald">Санкт-Петербург</span></h5>
                <h5 className="hidden mb-4 w-full text-center font-bold">Беларусь <span className="text-emerald">Минск</span></h5>
                <h5 className="hidden mb-4 w-full text-center font-bold">Казахстан <span className="text-emerald">Алматы</span></h5>
                <h5 className="mb-4 w-full text-center font-bold">Испания <span className="text-emerald">Барселона</span></h5>
                <h5 className="mb-4 w-full text-center font-bold">Латвия <span className="text-emerald">Саулкрасти</span></h5>
                <h5 className="w-full text-center font-bold">США <span className="text-emerald">Сиэтл</span></h5>
              </div>
            </div>
          </div>
        </div>  
      </div>
      <div id="schedule" className="scroll-mt-28 mb-24">
        <h2 className="text-center mb-8">Предварительное расписание</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-6">
          <div className="flex flex-col items-stretch">
            <div className="lg:min-h-[72px] mb-6 lg:mb-8">
              <h3 className="text-center lg:text-32 xl:text-[2.5rem]">
                <span className="hidden sm:inline">Суббота, 13* сентября</span>
                <span className="inline sm:hidden">Суббота,<br />13* сентября</span>
              </h3>
              <p className="text-center font-bold text-emerald">*все совпадения случайны</p>
            </div>
            <div className="flex gap-6 mb-4 sm:mb-6">
              <h5 className="basis-0 grow-2 text-emerald text-right sm:text-[1.5rem] font-bold">10:00 - 10:30</h5>
              <h5 className="basis-0 grow-3 ">Регистрация команд и открытие фестиваля</h5>
            </div>
            <div className="flex gap-6 mb-4 sm:mb-6">
              <h5 className="basis-0 grow-2 text-emerald text-right sm:text-[1.5rem] font-bold">10:30 - 12:45</h5>
              <h5 className="basis-0 grow-3 ">1-2 туры ЧГК</h5>
            </div>
            <div className="flex gap-6 mb-4 sm:mb-6">
              <h5 className="basis-0 grow-2 text-emerald text-right sm:text-[1.5rem] font-bold">12:45 - 13:00</h5>
              <h5 className="basis-0 grow-3 ">Подача апелляций</h5>
            </div>
            <div className="flex gap-6 mb-4 sm:mb-6">
              <h5 className="basis-0 grow-2 text-emerald text-right sm:text-[1.5rem] font-bold">13:00 - 14:00</h5>
              <h5 className="basis-0 grow-3 ">Перерыв / Обед</h5>
            </div>
            <div className="flex gap-6 mb-4 sm:mb-6">
              <h5 className="basis-0 grow-2 text-emerald text-right sm:text-[1.5rem] font-bold">14:00 - 15:00</h5>
              <h5 className="basis-0 grow-3 ">3-ий тур ЧГК</h5>
            </div>
            <div className="flex gap-6 mb-4 sm:mb-6">
              <h5 className="basis-0 grow-2 text-emerald text-right sm:text-[1.5rem] font-bold">15:30 - 17:30</h5>
              <h5 className="basis-0 grow-3 ">Четвертьфиналы и полуфиналы Эрудит-Квартета</h5>
            </div>
            <div className="flex gap-6 mb-4 sm:mb-6">
              <h5 className="basis-0 grow-2 text-emerald text-right sm:text-[1.5rem] font-bold">17:30 - 18:30</h5>
              <h5 className="basis-0 grow-3 ">Полуфиналы СИ (если будет)</h5>
            </div>
            <h5 className="text-center mb-4 text-primary-500">Переезд в бар</h5>
            <div className="flex gap-6 mb-4 sm:mb-6">
              <h5 className="basis-0 grow-2 text-emerald text-right sm:text-[1.5rem] font-bold">19:00 - 22:00</h5>
              <h5 className="basis-0 grow-3 ">Посиделки, Муз квиз, Ржевский</h5>
            </div>

          
          </div>
          <div className="flex flex-col items-stretch">
            <h3 className="text-center lg:text-32 xl:text-[2.5rem] lg:min-h-[72px] mb-6 lg:mb-8">
              <span className="hidden sm:inline">Воскресенье, 14 сентября</span>
              <span className="inline sm:hidden">Воскресенье,<br />14 сентября</span>
            </h3>
            <div className="flex gap-6 mb-4 sm:mb-6">
              <h5 className="basis-0 grow-2 text-emerald text-right sm:text-[1.5rem] font-bold">10:00 - 13:30</h5>
              <h5 className="basis-0 grow-3 ">4-6 туры ЧГК</h5>
            </div>
            <div className="flex gap-6 mb-4 sm:mb-6">
              <h5 className="basis-0 grow-2 text-emerald text-right sm:text-[1.5rem] font-bold">13:30 - 14:00</h5>
              <h5 className="basis-0 grow-3 ">Подача апелляций, перестрелка</h5>
            </div>
            <div className="flex gap-6 mb-4 sm:mb-6">
              <h5 className="basis-0 grow-2 text-emerald text-right sm:text-[1.5rem] font-bold">14:00 - 15:00</h5>
              <h5 className="basis-0 grow-3 ">Финал Эрудит-Квартета</h5>
            </div>
            <div className="flex gap-6 mb-4 sm:mb-6">
              <h5 className="basis-0 grow-2 text-emerald text-right sm:text-[1.5rem] font-bold">15:00 - 15:30</h5>
              <h5 className="basis-0 grow-3 ">Финал СИ (если будет)</h5>
            </div>
            <div className="flex gap-6 mb-4 sm:mb-6">
              <h5 className="basis-0 grow-2 text-emerald text-right sm:text-[1.5rem] font-bold">15:30 - 16:00</h5>
              <h5 className="basis-0 grow-3 ">Награждение, закрытие турнира</h5>
            </div>

          
          </div>
        </div>
      </div>
    </div> 
    <div id="location" className="scroll-mt-28 bg-neutral-darker">
      <div className="container-width pt-16 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pb-24">
          <div className="hidden lg:block">
            <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2687.79899939997!2d-122.36691092376711!3d47.64947267119381!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5490155d3ab58973%3A0x1ac970a9724fc5a0!2sGwinn%20Commons!5e0!3m2!1sen!2sus!4v1748208850151!5m2!1sen!2sus" 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full"></iframe>
          </div>
          <div>
            <h2 className="text-right mb-6">Место Проведения Игр</h2>
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
          <div className="block lg:hidden">
            <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2687.79899939997!2d-122.36691092376711!3d47.64947267119381!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5490155d3ab58973%3A0x1ac970a9724fc5a0!2sGwinn%20Commons!5e0!3m2!1sen!2sus!4v1748208850151!5m2!1sen!2sus" 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-[300px]"></iframe>
          </div>
          
        </div>
      </div>
    </div>
     
    </>
  );
}