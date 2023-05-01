import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';

const App = () => {
  return (
    <ChakraProvider>
      <Router>
        <NavBar />
        <main>
          <Routes></Routes>
        </main>
      </Router>
    </ChakraProvider>
  );
};

export default App;
