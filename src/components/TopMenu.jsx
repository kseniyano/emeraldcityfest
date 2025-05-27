import { Link } from 'react-router-dom';

export default function TopMenu({ vertical = false, onLinkClick }) {
  const common = "menu-item";
  const layout = vertical ? "flex flex-col gap-4 items-end" : "flex lg:gap-4 xl:gap-8";

  return (
    <nav className={`nav-links ${layout}`}>
      <Link to="/info#about" className={common} onClick={onLinkClick}>О Фестивале</Link>
      <Link to="/info#schedule" className={common} onClick={onLinkClick}>Расписание</Link>
      <Link to="/info#location" className={common} onClick={onLinkClick}>МПИ</Link>
      <Link to="/registration" className={common} onClick={onLinkClick}>Регистрация</Link>
      <Link to="/teams" className={common} onClick={onLinkClick}>Команды</Link>
      <Link to="/reglament" className={common} onClick={onLinkClick}>Регламент</Link>
    </nav>
  );
}
