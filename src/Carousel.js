import Slider from 'react-slick'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
import React from 'react'
import projects from './projectsSettings'

export const Carousel = () => {
  const settings = {
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

  const imgStyle = {
    width: '150px',
    height: '150px'
  }

  const sliderItems = projects.map(({ itemTitle, itemURL, imgLink, description }, i) => {
    return (
      <div key={`project${i}`}>
        <h6>{itemTitle}</h6>
        <a href={itemURL} target='_blank' rel='noopener noreferrer'>
          <img src={imgLink} alt='presentation' style={imgStyle} />
        </a>
        <p className='project-description'>{description}</p>
      </div>
    )
  })

  return (
    <Slider {...settings}>
      {sliderItems}
    </Slider>
  )
}
