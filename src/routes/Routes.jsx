import { Route, Switch, Redirect, useHistory } from 'react-router-dom';
import { useState } from 'react';
import ColorList from '../components/color-list/ColorList';
import ColorDetails from '../components/color-details/ColorDetails';
import NewColorForm from '../components/new-color-form/NewColorForm';

export default function Routes({ colors }) {
  const [allColors, updateColors] = useState(colors);
  const history = useHistory();

  // if color not found, redirect
  // if (allColors.indexOf(color) === -1) {
  //   <Redirect to="/colors" />;
  // }

  allColors.forEach((color) => {
    if (allColors.indexOf(color) === -1) {
      history.push('/colors');
    }
  });

  function handleAddColor(newColor) {
    updateColors((prevColors) => [...prevColors, newColor]);
  }

  return (
    <Switch>
      <Route exact path="/colors">
        <ColorList allColors={allColors} />
      </Route>
      <Route exact path="/colors/new">
        <NewColorForm addColor={handleAddColor} />
      </Route>
      <Route exact path="/colors/:color">
        <ColorDetails allColors={allColors} />
      </Route>
      <Redirect to="/colors" />
    </Switch>
  );
}
