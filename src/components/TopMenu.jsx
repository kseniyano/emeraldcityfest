import { Link } from 'react-router-dom';

export default function TopMenu() {
  return (
    <nav className="nav-links flex lg:gap-4 xl:gap-8">
      <a href="/info#about" className="menu-item">О Фестивале</a>
      <a href="/info#schedule" className="menu-item">Расписание</a>
      <a href="/info#location" className="menu-item">МПИ</a>
      <Link className="menu-item" to="/registration">Регистрация</Link>
      <Link className="menu-item" to="/teams">Команды</Link>
      <Link className="menu-item" to="/reglament">Регламент</Link>
    </nav>
  );
}
