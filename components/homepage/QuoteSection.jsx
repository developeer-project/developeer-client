import styles from "../../styles/homepage-comps/quote.module.css";

import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";
import { Blockquote } from '@mantine/core';

const QuoteSection = () => {
    return (<Carousel>

      
      <Carousel.Item>
        <img style={{height:"300px",width:"100%"}}
          className="d-block w-100"
          src="https://play-lh.googleusercontent.com/kb_j5bOFTkKnBYgJn4YpSjwRUCkjJRWabKzDt-ZfKvKN9NDG5jYn_1O3Y3qZ7MGrOhs=s200"
          alt="First slide"
        />
        <Carousel.Caption>
        <Blockquote cite="– Forrest Gump">
          Life is like an npm install – you never know what you are going to get.
        </Blockquote>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img  style={{height:"300px",width:"100%"}}
          className="d-block w-100"
          src="https://play-lh.googleusercontent.com/kb_j5bOFTkKnBYgJn4YpSjwRUCkjJRWabKzDt-ZfKvKN9NDG5jYn_1O3Y3qZ7MGrOhs=s200"
          alt="Second slide"
        />
    
        <Carousel.Caption>
        <Blockquote cite="– Forrest Gump">
          Life is like an npm install – you never know what you are going to get.
        </Blockquote>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img  style={{height:"300px",width:"100%"}}
          className="d-block w-100"
          src="https://play-lh.googleusercontent.com/kb_j5bOFTkKnBYgJn4YpSjwRUCkjJRWabKzDt-ZfKvKN9NDG5jYn_1O3Y3qZ7MGrOhs=s200"
          alt="Third slide"
        />
    
        <Carousel.Caption>
        <Blockquote cite="– Forrest Gump">
          Life is like an npm install – you never know what you are going to get.
        </Blockquote>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
      );
};

export default QuoteSection;
