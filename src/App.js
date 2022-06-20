import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';

function App() {
  return (
    <div>
        <Header></Header>
            {/* <h2>Cart System Using React & Local Storage</h2> */}
        <Shop></Shop>
    </div>
  );
}

export default App;
