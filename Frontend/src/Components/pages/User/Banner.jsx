import React from 'react'
import { Container } from 'react-bootstrap'
import Carousel from 'react-bootstrap/Carousel';

function Banner(){
    return (
        <>
        <Container className='mb-4 mt-4'>
        <Carousel>
      <Carousel.Item>
        <img className='w-100 d-block' 
        src="https://cdn.thewirecutter.com/wp-content/media/2024/07/laptopstopicpage-2048px-3685-2x1-1.jpg?width=2048&quality=75&crop=2:1&auto=webp" alt="slide1" 
        height='500px'
        style={{
            objectFit:'cover',
            borderRadius:'20px'
        }}
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
       <img className='w-100 d-block'
       src="https://cdn.thewirecutter.com/wp-content/media/2025/04/BEST-TABLETS-2048px-2x1-1.jpg?width=2048&quality=75&crop=2:1&auto=webp" alt="slide2"
       height='500px'
        style={{
            objectFit:'cover',
            borderRadius:'20px' 
        }}
            />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className='w-100 d-block'
        src="https://m-cdn.phonearena.com/images/article/64576-wide-two_1200/The-Best-Phones-My-top-picks-tried-and-tested.jpg" alt="slide3" 
        height='500px'
        style={{
            objectFit:'cover',
            borderRadius:'20px' 
        }}
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </Container>
        </>
    )
}
export default Banner