import './App.css';
import Header from './components/Header'
import Console from './components/Console'

const App = () => {

  return (
    <div className="App">
      <Header/>
      <div className='lower-section'>
        <Console/>
      </div>
    </div>
  );
}

export default App;
