import React from "react";
import { Container } from "react-materialize";
import { Tabs, Row, Tab } from "react-materialize";

export default function Contact() {
  return (
    <Container className="ctu">
      <Row>
        <Tabs
          className="tab-demo z-depth-1"
          options={{
            swipeable: true,
          }}
          scope="tabs-34"
        >
          <Tab
            className="blue"
            options={{
              duration: 300,
              onShow: null,
              responsiveThreshold: Infinity,
              swipeable: false,
            }}
            title="Kimitsu no Yaiba"
          ></Tab>
          <Tab
            active
            className="red"
            options={{
              duration: 300,
              onShow: null,
              responsiveThreshold: Infinity,
              swipeable: false,
            }}
            title="The Boys ss4"
          ></Tab>
          <Tab
            className="green"
            options={{
              duration: 300,
              onShow: null,
              responsiveThreshold: Infinity,
              swipeable: false,
            }}
            title="Peaky Blinders ss6"
          ></Tab>
        </Tabs>
      </Row>
    </Container>
  );
}
