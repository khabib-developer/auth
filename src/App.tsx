import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Loader from './components/Loader';
import { SnackbarError, SnackbarInfo, SnackbarSuccess, SnackbarWarning } from './components/snackBar';
import { Pages } from './routes';


function App() {
  return (
    <Router>
      <Loader />
      <SnackbarError />
      <SnackbarInfo />
      <SnackbarWarning />
      <SnackbarSuccess />
      <Pages /> 
    </Router>
  );
}

export default App;
