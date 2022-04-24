import styles from "../../styles/homepage-comps/quote.module.css";

import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";

const QuoteSection = () => {
    return (<Carousel>
      <Carousel.Item>
        <img style={{height:"300px",width:"100%"}}
          className="d-block w-100"
          src="https://play-lh.googleusercontent.com/kb_j5bOFTkKnBYgJn4YpSjwRUCkjJRWabKzDt-ZfKvKN9NDG5jYn_1O3Y3qZ7MGrOhs=s200"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img  style={{height:"300px",width:"100%"}}
          className="d-block w-100"
          src="https://play-lh.googleusercontent.com/kb_j5bOFTkKnBYgJn4YpSjwRUCkjJRWabKzDt-ZfKvKN9NDG5jYn_1O3Y3qZ7MGrOhs=s200"
          alt="Second slide"
        />
    
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img  style={{height:"300px",width:"100%"}}
          className="d-block w-100"
          src="https://play-lh.googleusercontent.com/kb_j5bOFTkKnBYgJn4YpSjwRUCkjJRWabKzDt-ZfKvKN9NDG5jYn_1O3Y3qZ7MGrOhs=s200"
          alt="Third slide"
        />
    
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
      );
};

export default QuoteSection;




