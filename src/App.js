
import { useLocation, useRoutes } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";

import logo from './logo.svg';
import './App.css';
import { routes } from 'src/routes';

function App() {

  const elements = useRoutes(routes);

  return (
    <ReduxProvider>
      {elements}
    </ReduxProvider>
  );
}

export default App;
