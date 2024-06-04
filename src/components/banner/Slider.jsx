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
    <div className="flex flex-wrap">
      {slides.map((slide) => (
        <div key={slide.id} className="section flex w-1/3"> 
          <img src={slide.image} alt={slide.title} className="w-1/3 h-48 object-cover" />
          <h2 className="text-center text-white text-2xl mt-4">{slide.title}</h2>
        </div>
      ))}
    </div>
  );
};