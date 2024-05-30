import LandingPage from '../../assets/Landing_Page_Trends.png';
import CoffeeMenu from '../../assets/CoffeeMenu.png';
import WebUIUX from '../../assets/WebUIUX.png';

export const Slider = () => {
  const slides = [
    { id: 1, image: LandingPage, title: 'Slide 1' },
    { id: 2, image: CoffeeMenu, title: 'Slide 2' },
    { id: 3, image: WebUIUX, title: 'Slide 3' },
  ];

  return (
    <div className="flex flex-row overflow-x-auto"> {/* Main container with horizontal scrolling */}
      {slides.map((slide) => (
        <div key={slide.id} className="flex-shrink-0 w-1/3"> {/* Prevent shrinking, add margin-right */}
          <img 
          src={slide.image} 
          alt={slide.title} 
          className="w-5 h-5 object-cover" /> {/* Fixed width and height, maintain aspect ratio */}
          <h2 className="text-center text-white text-2xl mt-4">{slide.title}</h2>
        </div>
      ))}
    </div>
  );
};