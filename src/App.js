
import './App.css';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Pricing from './components/Pricing/Pricing';
import Service from './components/Service/Service';

function App() {
  return (
    <div>
      <Header></Header>
      <Home></Home>
      <About></About>
      <Service></Service>
      <Pricing></Pricing>
      <Footer></Footer>
    </div>
  );
}

export default App;
