import "./App.css";
import CarouselSlider from "./components/CarouselSlider";

function App() {
  return (
    <div className="App">
      <CarouselSlider>
        <div className="image-wrapper">
          <img
            className="image"
            src="https://media.istockphoto.com/photos/exterior-view-of-modern-apartment-building-offering-luxury-rental-in-picture-id1322575582?b=1&k=20&m=1322575582&s=170667a&w=0&h=bGCtLpgCEorQuVdW2lbWguNZHcOGPePSwDibgbgyh0U="
            alt="buildings"
          />
          <p className="paragraph">First Image</p>
        </div>

        <img
          className="image"
          src="https://media.istockphoto.com/photos/door-to-office-picture-id178842131?b=1&k=20&m=178842131&s=170667a&w=0&h=45iCO1nO7rvQS8NITsFmh4XQ_nIJfZ3-MVyP82ythdg="
          alt="building"
        />
        <img
          className="image"
          src="https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGJ1aWxkaW5nc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
          alt="building"
        />
        <img
          className="image"
          src="https://media.istockphoto.com/photos/green-building-picture-id1329757808?b=1&k=20&m=1329757808&s=170667a&w=0&h=lhgX-lhkYxeHMJ5yM8X4DjpkR863NC_DFRP3FdU95r8="
          alt="building"
        />
        <img
          className="image"
          src="https://images.unsplash.com/photo-1486175060817-5663aacc6655?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGJ1aWxkaW5nc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
          alt="building"
        />
        <img
          className="image"
          src="https://images.unsplash.com/photo-1486175060817-5663aacc6655?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGJ1aWxkaW5nc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
          alt="building"
        />
      </CarouselSlider>
    </div>
  );
}

export default App;
