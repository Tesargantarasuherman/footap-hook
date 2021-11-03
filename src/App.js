import Carousel from './components/Carousel/Carousel';
import Navbar from './components/Navbar/Navbar';
import Card from './components/Card/Card';
import FormCari from './components/FormCari/FormCari';

function App() {
  return (
    <div className="container">
      <Navbar />
      <Carousel />
      <FormCari />
      <Card />
    </div>
  );
}

export default App;
