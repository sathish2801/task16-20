import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./App.css";

const App = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [showButton, setShowButton] = useState(false);

  // Update scroll position for progress bar
  const handleScroll = () => {
    const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPos = (window.scrollY / totalHeight) * 100;
    setScrollPosition(scrollPos);

    // Show 'Back to Top' button after 100px scroll
    if (window.scrollY > 50) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  // Scroll to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Handle scroll event
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Custom Select Dropdown
  const [selected, setSelected] = useState("Option 1");

  const options = ["Till Thor", "Mirroe Mount", "Ice Age"];

  const handleSelectChange = (event) => {
    setSelected(event.target.value);
  };

  // Slider settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
      {/* Parallax Background */}
      <div className="parallax-container">
        <h1>Mount Diving</h1>
      </div>

      {/* Progress Bar */}
      <div className="progress-container">
        <div className="progress-bar" style={{ width: `${scrollPosition}%` }}></div>
      </div>

      {/* Custom Select Dropdown */}
      <div className="dropdown-container">
        <h2>Choose Your Path</h2>
        <select className="custom-select" value={selected} onChange={handleSelectChange}>
          {options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
        <p>Selected: {selected}</p>
      </div>

      {/* Image Slider with Text */}
      <div className="slider-container">
        <h2>Strange Mount</h2>
        <Slider {...sliderSettings}>
          <div className="slider-item">
            <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/7d13a4ee-4f8d-493b-bb83-e058280168cd/d8siope-bbe2f9bf-8d64-4c1f-b91e-dc205db64952.png/v1/fill/w_1600,h_900,q_80,strp/cartoon_hills_by_jimbohutchings_d8siope-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9OTAwIiwicGF0aCI6IlwvZlwvN2QxM2E0ZWUtNGY4ZC00OTNiLWJiODMtZTA1ODI4MDE2OGNkXC9kOHNpb3BlLWJiZTJmOWJmLThkNjQtNGMxZi1iOTFlLWRjMjA1ZGI2NDk1Mi5wbmciLCJ3aWR0aCI6Ijw9MTYwMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.ZqXTd426f8zm324NAspnJ8yGFcwHiGOHLfFHqwn5PBs" alt="Slide 1" />
            <h3>Till Thor</h3>
          </div>
          <div className="slider-item">
            <img src="https://wallpapercave.com/wp/wp8346973.jpg" alt="Slide 2" />
            <h3>Mirror Mountine</h3>
          </div>
          <div className="slider-item">
            <img src="https://static.vecteezy.com/system/resources/previews/000/517/303/non_2x/cartoon-snow-landscape-sun-snow-fir-mountine-illustration-v-vector.jpg" alt="Slide 3" />
            <h3>Ice Age</h3>
          </div>
        </Slider>
      </div>

      {/* Back to Top Button */}
      {showButton && (
  <button onClick={scrollToTop} className={`back-to-top ${showButton ? 'show' : ''}`}>
    ↑ 
  </button>
)}
    </div>
  );
};

export default App;
