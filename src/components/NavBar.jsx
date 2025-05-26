import TopMenu from './TopMenu';
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <div className="sticky top-0 z-50 bg-neutral-light border-b border-solid border-b-primary-300">
      <div className='container-width py-6 flex items-center justify-between'>
        <Link className="" to="/"><div className="logo-text">Emerald City Fest</div></Link>
        <TopMenu />
      </div>
    </div>
  );
}
