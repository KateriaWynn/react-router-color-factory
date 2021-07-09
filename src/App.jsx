import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes/Routes';
import './app.scss';

export default function App({ colors }) {
  return (
    <div className="app">
      <div className="wrapper">
        <div className="left">
          <p className="logo">The Color Factory.</p>
        </div>
      </div>
      <div className="colors">
        <Router>
          <Routes colors={colors} />
        </Router>
      </div>
    </div>
  );
}

App.defaultProps = {
  colors: ['red', 'green', 'yellow', 'orange', 'purple'],
};
