
import './App.css';

import ListaDeMedos from './components/ListaDeMedos';

function App() {
  return (
    <div className="App">
      <ListaDeMedos titulo = '6 Meses'/>
      <ListaDeMedos titulo = '1 Ano'/>
      <ListaDeMedos titulo = '2 Anos'/>
    </div>
  );
}

export default App;
