// import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import { useTransition, animated, config } from "react-spring";
import styled from "styled-components";

const slides = [
  { id: 0, url: "builds_group_pic_1.jpg" },
  { id: 1, url: "builds_group_pic_2.jpg" },
  { id: 2, url: "builds_group_pic_3.jpg" },
  { id: 3, url: "builds_group_pic_4.jpg" },
  { id: 4, url: "builds_group_pic_5.jpg" },
  { id: 5, url: "builds_group_pic_6.jpg" },
];

const AnimatedDiv = styled(animated.div)`
  position: absolute;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  will-change: opacity;
`;

const Container = styled.div`
  position: relative;
  height: 300px;
  overflow: hidden;
  border-radius: 20px;
  background: rgb(240, 240, 240);
`;

const SlideshowImages = () => {
  const [index, set] = useState(0);
  const transitions = useTransition(slides[index], (item) => item.id, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: config.molasses,
  });
  useEffect(
    () => void setInterval(() => set((state) => (state + 1) % 4), 8000),
    []
  );
  return transitions.map(({ item, props, key }) => (
    <AnimatedDiv
      key={key}
      style={{
        ...props,
        backgroundImage: `url(/assets/images/${item.url})`,
      }}
    />
  ));
};

const Slideshow = (props) => {
  return (
    <Container>
      <SlideshowImages />
    </Container>
  );
};

Slideshow.propTypes = {};

export default Slideshow;
