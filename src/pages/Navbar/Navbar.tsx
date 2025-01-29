import { NavLink } from 'react-router';
import './Navbar.css';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Tanstack', href: '/tanstack' },
  { label: 'Zustand', href: '/zustand' },
  { label: 'RTK', href: '/rtk' },
];

const Navbar = (): JSX.Element => {
  return (
    <nav className="Navbar">
      {navItems.map((navItem) => (
        <NavLink to={navItem.href}>{navItem.label}</NavLink>
      ))}
    </nav>
  );
};

export default Navbar;
