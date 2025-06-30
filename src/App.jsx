import './App.css';
import BtnWhatsapp from './components/BtnWhatsapp';
import Navbar from './components/Navbar';
import PedirDatosSobreMi from './components/PedirDatosSobreMi';
import Snow from './components/Snow';
function App() {

  return (

    <div>
      <Navbar/>
      <Snow />
      <PedirDatosSobreMi/>
      <BtnWhatsapp />
    </div>
  );
}

export default App;


