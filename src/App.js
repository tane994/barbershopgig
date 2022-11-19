import './App.css';
import ComponentArea from './Subcomponents/ComponentArea';
import Navbar from './Subcomponents/Navbar';
import Footer from './Subcomponents/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <ComponentArea/>
      <Footer/>
    </div>
  );
}

export default App;
