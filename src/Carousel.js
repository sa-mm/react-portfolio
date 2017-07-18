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
    <img src={props.imgLink} alt='presentation' style={imgStyle} />
  )
}

const SliderItem = (props) => {
  return (
    <div>
      <h6>{props.itemTitle}</h6>
      <a href={props.itemURL} target='_blank' rel='noopener noreferrer'>
        <ImgElement imgLink={props.imgLink} />
      </a>
      <p className='project-description'>{props.description}</p>
    </div>
  )
}

export class ProjectsSlider extends React.Component {
  render () {
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
      imgLink: './images/weather.png',
      description: 'Shows the weather for your location'
    }
    var quoteSettings = {
      itemTitle: 'Random Quote Generator',
      itemURL: 'https://quote.mcmyler.com',
      imgLink: './images/quote.jpg',
      description: 'Implemented with Bootstrap'
    }
    var calcSettings = {
      itemTitle: 'Calculator',
      itemURL: 'https://calc.mcmyler.com',
      imgLink: './images/calc.png',
      description: 'Uses CSS flexbox'
    }
    var wikipediaSettings = {
      itemTitle: 'Wikipedia Viewer',
      itemURL: 'https://wikipedia-viewer.mcmyler.com',
      imgLink: './images/wikipedia-viewer.png'
    }
    var pomodoroSettings = {
      itemTitle: 'Pomodoro Clock',
      itemURL: 'https://pomodoro.mcmyler.com',
      imgLink: './images/pomodoro.png',
      description: 'Vanilla JS'
    }
    var markdownPreviewerSettings = {
      itemTitle: 'Markdown Previewer',
      itemURL: 'https://markdown-previewer.mcmyler.com',
      imgLink: './images/react_logo.svg',
      description: 'React. Still a bit rough around the edges.'
    }
    var drumMachineSettings = {
      itemTitle: 'Drum Machine',
      itemURL: 'https://drum-machine.mcmyler.com',
      imgLink: './images/react_logo.svg',
      description: 'React. Still a bit rough around the edges.'
    }
    var timestampSettings = {
      itemTitle: 'Timestamp API',
      itemURL: 'https://timestamp-api.mcmyler.com',
      imgLink: './images/nodejs.svg',
      description: 'It\'ll take a second after you click the link… (Heroku)'
    }
    var parserSettings = {
      itemTitle: 'Request Header Parser',
      itemURL: 'https://calm-brook-74748.herokuapp.com/api/whoami/',
      imgLink: './images/nodejs.svg',
      description: 'Wait for it… (Heroku)'
    }
    var urlShortenerSettings = {
      itemTitle: 'URL Shortener Microservice',
      itemURL: 'https://url-shortener.mcmyler.com',
      imgLink: './images/nodejs.svg',
      description: 'Wait for it… (Heroku)'
    }
    var layoutIdeas = {
      itemTitle: 'Layout Ideas (Grid)',
      itemURL: 'https://layout-ideas.now.sh',
      imgLink: './images/css-grid-icon.png',
      description: 'Playing with the CSS Grid Spec'
    }
    var d3Projects = {
      itemTitle: 'D3 Projects',
      itemURL: 'https://d3-projects.mcmyler.com',
      imgLink: './images/d3.svg'
    }

    const projects = [
      weatherSettings,
      quoteSettings,
      calcSettings,
      wikipediaSettings,
      pomodoroSettings,
      markdownPreviewerSettings,
      drumMachineSettings,
      timestampSettings,
      parserSettings,
      urlShortenerSettings,
      layoutIdeas,
      d3Projects
    ]

    const sliderItems = projects.map(project => {
      return (
        <div>
          <SliderItem {...project} />
        </div>
      )
    })

    return (
      <Slider {...settings}>
        {sliderItems}
      </Slider>
    )
  }
}
