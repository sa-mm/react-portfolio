var React = require('react')
var Slider = require('react-slick')
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'

const imgStyle = {
  width: '150px',
  height: '150px'
}

const ImgElement = (props) => {
  return (
    <img src={props.imgLink} role='presentation' style={imgStyle} />
  )
}

const SliderItem = (props) => {
  return (
    <div>
      <h6>{props.itemTitle}</h6>
      <a href={props.itemURL} target='_blank'>
        <ImgElement imgLink={props.imgLink} />
      </a>
    </div>
  )
}

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
    }
    var weatherSettings = {
      itemTitle: 'Local Weather App',
      itemURL: 'https://weather.mcmyler.com',
      imgLink: './images/weather.png'
    }
    var quoteSettings = {
      itemTitle: 'Random Quote Generator',
      itemURL: 'https://quote.mcmyler.com',
      imgLink: './images/quote.jpg'
    }
    var calcSettings = {
      itemTitle: 'Calculator',
      itemURL: 'https://calc.mcmyler.com',
      imgLink: './images/calc.png'
    }
    var wikipediaSettings = {
      itemTitle: 'Wikipedia Viewer',
      itemURL: 'https://wikipedia-viewer.mcmyler.com',
      imgLink: './images/wikipedia-viewer.png'
    }
    var timestampSettings = {
      itemTitle: 'Timestamp API',
      itemURL: 'https://timestamp-api.mcmyler.com',
      imgLink: './images/nodejs.svg'
    }
    var parserSettings = {
      itemTitle: 'Request Header Parser',
      itemURL: 'https://calm-brook-74748.herokuapp.com/api/whoami/',
      imgLink: './images/nodejs.svg'
    }

    var urlShortenerSettings = {
      itemTitle: 'URL Shortener Microservice',
      itemURL: 'https://url-shortener.mcmyler.com',
      imgLink: './images/nodejs.svg'
    }
    return (
      <Slider {...settings}>
        <div>
          <SliderItem {...weatherSettings} />
        </div>
        <div>
          <SliderItem {...quoteSettings} />
        </div>
        <div>
          <SliderItem {...calcSettings} />
        </div>
        <div>
          <SliderItem {...wikipediaSettings} />
        </div>
        <div>
          <SliderItem {...timestampSettings} />
          <p>It'll take a second after you click the link… (Heroku)</p>
        </div>
        <div>
          <SliderItem {...parserSettings} />
          <p>Wait for it… (Heroku)</p>
        </div>
        <div>
          <SliderItem {...urlShortenerSettings} />
          <p>Wait for it… (Heroku)</p>
        </div>
      </Slider>
    )
  }
})
