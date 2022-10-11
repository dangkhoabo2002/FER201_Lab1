import React from "react";
import {
  Button,
  Container,
  Slide, Slider, Caption
} from "react-materialize";

export default function Contact() {
  return (
    <Container className="ctu">
      <Slider
        fullscreen={false}
        options={{
          duration: 500,
          height: 451,
          indicators: true,
          interval: 6000,
        }}
      >
        <Slide
          image={<img alt="" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Center_of_the_Milky_Way_Galaxy_IV_%E2%80%93_Composite.jpg/2560px-Center_of_the_Milky_Way_Galaxy_IV_%E2%80%93_Composite.jpg"/>}
        >
          <Caption placement="center">
            <h3>Kow Cinema</h3>
            <h5 className="light grey-text text-lighten-3">
              Conquer the Star!
            </h5>
          </Caption>
        </Slide>
        <Slide
          image={<img alt="" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7_6hALShiKtGaAIoGwLHaXCGAhIRwn-SAGQ&usqp=CAU" />}
        >
          <Caption placement="left">
            <h3>New films Released!</h3>
            <h5 className="light grey-text text-lighten-3">
              Sticky Ticket
            </h5>
          </Caption>
        </Slide>
        <Slide
          image={<img alt="" src="https://img.freepik.com/premium-photo/two-happy-young-couples-buying-popcorn-by-cashier-counter-cinema-while-going-watch-movie-together_274679-7075.jpg?w=2000" />}
        >
          <Caption placement="right">
            <h3>Must-go spot</h3>
            <h5 className="light grey-text text-lighten-3">
              You are a member of our family!
            </h5>
          </Caption>
        </Slide>
        <Slide
          image={<img alt="" src="https://img.etimg.com/thumb/msid-75751473,width-1200,height-900,imgsize-908106,overlay-etpanache/photo.jpg" />}
        >
          <Caption placement="center">
            <h3>Sneaky Combos!</h3>
            <h5 className="light grey-text text-lighten-3">
              A lot of advantage to new member...
            </h5>
          </Caption>
        </Slide>
      </Slider>
    </Container>
  );
}
