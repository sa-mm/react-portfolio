import Slider from 'react-slick'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
var React = require('react')

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

export class ProjectsSlider extends React.Component {
  render() {
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
    var pomodoroSettings = {
      itemTitle: 'Pomodoro Clock',
      itemURL: 'https://pomodoro.mcmyler.com',
      imgLink: './images/pomodoro.png'
    }
    var markdownPreviewerSettings = {
      itemTitle: 'Markdown Previewer',
      itemURL: 'https://markdown-previewer.mcmyler.com',
      imgLink: './images/react_logo.svg'
    }
    var drumMachineSettings = {
      itemTitle: 'Drum Machine',
      itemURL: 'https://drum-machine.mcmyler.com',
      imgLink: './images/react_logo.svg'
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
    var layoutIdeas = {
      itemTitle: 'Layout Ideas (Grid)',
      itemURL: 'https://layout-ideas.now.sh',
      imgLink: './images/css-grid-icon.png'
    }
    var d3Projects = {
      itemTitle: 'D3 Projects',
      itemURL: 'https://d3-projects.mcmyler.com',
      imgLink: './images/d3.svg'
    }
    return (
      <Slider {...settings}>
        <div>
          <SliderItem {...weatherSettings} />
        </div>
        <div>
          <SliderItem {...quoteSettings} />
          <p>Implemented with Bootstrap</p>
        </div>
        <div>
          <SliderItem {...calcSettings} />
          <p>Uses CSS flexbox</p>
        </div>
        <div>
          <SliderItem {...wikipediaSettings} />
        </div>
        <div>
          <SliderItem {...pomodoroSettings} />
          <p>Vanilla JS</p>
        </div>
        <div>
          <SliderItem {...markdownPreviewerSettings} />
          <p>React. Still a bit rough around the edges.</p>
        </div>
        <div>
          <SliderItem {...drumMachineSettings} />
          <p>React. Still a bit rough around the edges.</p>
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
        <div>
          <SliderItem {...layoutIdeas} />
          <p>Playing with the CSS Grid Spec.</p>
        </div>
        <div>
          <SliderItem {...d3Projects} />
        </div>
      </Slider>
    )
  }
}
