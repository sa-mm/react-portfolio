var React = require('react');
var Slider = require('react-slick');
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

export var ProjectsSlider = React.createClass({
  render: function () {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1,
      responsive: [ 
          { breakpoint: 480, settings: { slidesToShow: 2, slidesToScroll: 2 } },
          { breakpoint: 768, settings: { slidesToShow: 3 } }, 
          { breakpoint: 1024, settings: { slidesToShow: 5 } }
        ]
    };
    return (
      <Slider {...settings}>
        <div>
            <h6>Local Weather App</h6>
            <a href="https://weather.mcmyler.com" target="_blank">
            <img src="./images/weather.png" role="presentation" />
            </a>
        </div>
        <div>
            <h6>Random Quote Generator</h6>
            <a href="https://quote.mcmyler.com" target="_blank">
            <img src="./images/quote.jpg" role="presentation" />
            </a>
        </div>
        <div>
          <h6>Calculator</h6>
          <a href="https://quote.mcmyler.com" target="_blank">
            <img src="./images/calc.png" role="presentation" />
            </a>
          
        </div>
        <div>
          <h6>Timestamp Api</h6>
          <p><a href="https://timestamp-api.mcmyler.com" target="_blank">
          link</a></p>
          <p>It'll take a second after you click the link… (Heroku)</p>
        </div>
        <div>
          <h6>Request Header Parser</h6>
          <p><a href="https://calm-brook-74748.herokuapp.com/api/whoami/" target="_blank">
          link</a></p>
          <p>Wait for it… (Heroku)</p>
        </div>
      </Slider>
    );
  }
});