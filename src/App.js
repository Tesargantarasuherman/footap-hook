import Carousel from './components/Carousel/Carousel';
import Navbar from './components/Navbar/Navbar';
import Card from './components/Card/Card';
import FormCari from './components/FormCari/FormCari';
import NavbarBottom from './components/NavbarBottom/NavbarBottom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import BookingPage from './pages/BookingPage';
import HomePage from './pages/HomePage';

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/booking">
            <BookingPage />
          </Route>
        </Switch>
        <NavbarBottom />
      </div>
    </Router>
  );
}

export default App;
