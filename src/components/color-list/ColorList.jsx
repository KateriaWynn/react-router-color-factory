import { Link } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import './color-list.scss';

export default function ColorList({ allColors }) {
  console.log(allColors);
  return (
    <div className="color-list">
      <h1>Available Colors</h1>
      {allColors.map((color) => (
        <div key={uuid()} className="color">
          <div className="color-name">
            <Link exact to={`/colors/${color}`}>
              {color}
            </Link>
          </div>
        </div>
      ))}

      <Link className="create-color" exact to="/colors/new">
        Create a color
      </Link>
    </div>
  );
}
