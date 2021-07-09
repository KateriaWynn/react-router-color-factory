import { useParams } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import './color-details.scss';

export default function ColorDetails({ allColors }) {
  let { color } = useParams();

  // if color not found, redirect
  // if (allColors.indexOf(color) === -1) {
  //   <Redirect to="/colors" />;
  // }

  /* Function to check if a str contains at least a number and one char or 
  contains numbers only */
  function containsNumAndChar(color) {
    return color.match(/([0-9].*[a-z])|([a-z].*[0-9])|([0-9])/g);
  }

  return (
    <div
      style={{
        backgroundColor: containsNumAndChar(color) ? '#' + color : color,
      }}
      className="color-details"
    >
      <h1 className="color-name">{color !== 'new' ? color : null}</h1>
    </div>
  );
}
