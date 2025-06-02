import LegionaryList from "../components/LegionaryList";
import TeamGrid from "../components/TeamGrid";
import SIList from "../components/SIList";

export default function Teams() {
  return (
  <>
        <div className="container-width pt-16 mb-24">
          <div className="flex flex-col items-end gap-2 mb-8"> 
            <h2 className=""> Команды</h2>
            <h5>Кто уже участвует</h5>
          </div>
          <div className="flex flex-wrap lg:flex-nowrap gap-6 w-full items-stretch">
            <div className="w-full lg:w-auto lg:basis-6 lg:grow-2">
              <h3 className="">Команды</h3>
              <p className="mb-6">В порядке подачи заявок</p>
              <TeamGrid />
            </div>
            <div className="w-full lg:w-auto lg:basis-0 flex flex-col grow-1">
              <h3 className="">Легионеры</h3>
              <p className="mb-6">В порядке подачи заявок</p>
              <div className="p-6 border rounded-2xl border-primary-300 grow">
                <p className="mb-6 font-bold">Если у вас нет команды, но вам хочется поучаствовать - регистрируйтесь легионером, создавайте новые команды 
                  <br/>По вопросам контактов легионеров пишите в Telegram: <a href="https://t.me/kseniyano" target="_blank" rel="noopener noreferrer">@kseniyano</a>
                </p>
                <LegionaryList />
              </div>

              <h3 className="mt-6">Своя игра</h3>
              <p className="mb-6">Игроки, зарегистрировавшиеся на Свою Игру<br />В порядке подачи заявок</p>
              <div className="p-6 border rounded-2xl border-primary-300 grow">
                <SIList />
              </div>
            </div>
          </div>
        </div>
  </>
  );
}


