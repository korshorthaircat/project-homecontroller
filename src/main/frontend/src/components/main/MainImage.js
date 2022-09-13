import Carousel from 'react-bootstrap/Carousel';


function MainImage() {
  return (
    <div className="mainCarousel">
        
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.maatila.co.kr/design/maatila/phps/main/main_img_04.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          {/* <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.maatila.co.kr/design/maatila/phps/main/main_img_02.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          {/* <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.maatila.co.kr/design/maatila/phps/main/main_img_03.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          {/* <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p> */}
        </Carousel.Caption>
      </Carousel.Item>
      
    </Carousel>
    
    </div>
  );
}

export default MainImage;