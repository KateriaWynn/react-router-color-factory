import { NavLink } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import './navbar.scss';

export default function NavBar({ colors }) {
  return (
    <div className="navbar">
      <NavLink exact to="/colors">
        home
      </NavLink>
      {colors.map((color) => (
        <NavLink key={uuid()} exact to={`/colors/${color}`}>
          {color}
        </NavLink>
      ))}
    </div>
  );
}
