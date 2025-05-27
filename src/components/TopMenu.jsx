import { Link } from 'react-router-dom';

export default function TopMenu() {
  return (
    <nav className="nav-links flex lg:gap-4 xl:gap-8">
      <Link to="/info#about" className="menu-item">О Фестивале</Link>
      <Link to="/info#schedule" className="menu-item">Расписание</Link>
      <Link to="/info#location" className="menu-item">МПИ</Link>
      <Link className="menu-item" to="/registration">Регистрация</Link>
      <Link className="menu-item" to="/teams">Команды</Link>
      <Link className="menu-item" to="/reglament">Регламент</Link>
    </nav>
  );
}
