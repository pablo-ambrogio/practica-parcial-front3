import Form from './components/Form/Form';
import './App.css';
import Card from './components/Card/Card';
import DentistContextProvider from './context/DentistContext';

function App() {
  return (
    <DentistContextProvider>
      <div className="App">
        <Form />
        <Card />
      </div>
    </DentistContextProvider>
  );
}

export default App;
