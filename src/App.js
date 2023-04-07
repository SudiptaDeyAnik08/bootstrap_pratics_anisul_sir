import logo from './logo.svg';
import './App.css';
import Products from './components/Products.js';
import EventHandeler from './components/EventHandeler/EventHandeler.js'


function App() {
  return (
    <div className="App">
      <Products></Products>
      <EventHandeler></EventHandeler>
    </div>
  );
}

export default App;
