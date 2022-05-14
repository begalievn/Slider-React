import "./App.css";
import CarouselSlider from "./components/CarouselSlider";

function App() {
  return (
    <div className="App">
      <CarouselSlider>
        <img
          className="image"
          src="https://media.istockphoto.com/photos/exterior-view-of-modern-apartment-building-offering-luxury-rental-in-picture-id1322575582?b=1&k=20&m=1322575582&s=170667a&w=0&h=bGCtLpgCEorQuVdW2lbWguNZHcOGPePSwDibgbgyh0U="
          alt="buildings"
        />
        <img
          className="image"
          src="https://media.istockphoto.com/photos/door-to-office-picture-id178842131?b=1&k=20&m=178842131&s=170667a&w=0&h=45iCO1nO7rvQS8NITsFmh4XQ_nIJfZ3-MVyP82ythdg="
          alt="building"
        />

        <div className="image-container">
          <img
            className="image"
            src="https://media.istockphoto.com/photos/office-building-with-blue-windows-picture-id133906722?b=1&k=20&m=133906722&s=170667a&w=0&h=aHwRFIq-qKP7lkdfuHhQof0EVSr6KD5WOvotB5RXHwA="
            alt="building"
          />
          <p className="text">Some text </p>
        </div>
        <img
          className="image"
          src="https://media.istockphoto.com/photos/modern-white-office-entrance-door-picture-id1166218092?b=1&k=20&m=1166218092&s=170667a&w=0&h=ur-gKb50JRfBMahKo9AgZ5GtXY1H-lIZIq4WIr5WoHw="
          alt="building"
        />
        <img
          className="image"
          src="https://media.istockphoto.com/photos/modern-white-office-entrance-door-picture-id1166218092?b=1&k=20&m=1166218092&s=170667a&w=0&h=ur-gKb50JRfBMahKo9AgZ5GtXY1H-lIZIq4WIr5WoHw="
          alt="building"
        />
      </CarouselSlider>
    </div>
  );
}

export default App;
