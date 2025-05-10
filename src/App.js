import './App.css';
import { Usuario } from './components/Usuario';

function App() {

  return (
    <div>
      <Usuario nombre="Tomas" edad={29} nacionalidad="Argentina"/>
    </div>
  );
}

export default App;
