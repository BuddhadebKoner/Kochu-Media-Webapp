import { bottombarLinks } from '@/constants';
import { INavLink } from '@/types';
import { NavLink, useLocation } from 'react-router-dom'

const Bottombar = () => {
  const { pathname } = useLocation();

  return (
    <section className="bottom-bar fixed">
      {bottombarLinks.map((link: INavLink) => {
        const isActive = pathname === link.route;
        return (
          <NavLink
            to={link.route}
            className={
              `${isActive && 'bg-primary-500 rounded-[10px]'} flex-center flex-col gap-1 p-2 transition-all duration-200`}
          >
            <img
              src={link.imgURL}
              alt={link.label}
              width={17}
              height={17}
              className={`group-hover:invert-white ${isActive ? 'invert-white' : ''}`}
            />
            <p className='tiny-medium text-light-2'>
              {link.label}
            </p>
          </NavLink>
        );
      })}
    </section>
  )
}

export default Bottombar