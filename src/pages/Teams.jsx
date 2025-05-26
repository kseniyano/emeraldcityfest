import LegionaryList from "../components/LegionaryList";
import TeamGrid from "../components/TeamGrid";

export default function Teams() {
  return (
  <>
        <div className="container-width pt-16 mb-24">
          <div className="flex flex-col items-end gap-2 mb-12"> 
            <h2 className="text-accent"> Команды</h2>
            <h5>Кто уже участвует</h5>
          </div>
          <div className="flex flex-row gap-6 w-full items-stretch">
            <div className="basis-6 grow-2">
              <h3 className="">Команды</h3>
              <p className="mb-6">В порядке подачи заявок</p>
              <TeamGrid />
            </div>
            <div className="basis-0 flex flex-col grow-1">
              <h3 className="">Легионеры</h3>
              <p className="mb-6">В порядке подачи заявок</p>
              <div className="p-6 border rounded-2xl border-primary-300 grow">
                <p className="mb-6 font-bold">Если у вас нет команды, но вам хочется поучаствовать - регистрируйтесь легионером, создавайте новые команды 
                  <br/>По вопросам контактов легионеров пишите в Telegram: <a href="https://t.me/kseniyano" target="_blank" rel="noopener noreferrer">@kseniyano</a>
                </p>
                <LegionaryList />
              </div>
            </div>
          </div>
        </div>
  </>
  );
}


