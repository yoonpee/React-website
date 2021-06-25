import React, { useState } from "react";
import styled from "styled-components";
import { About } from "../style";
import Toggle from "./Toggle";
import { AnimateSharedLayout } from "framer-motion";
import {useScroll} from "./useScroll";
import {fade} from "../animate"
function FaqSection() {
  const [element, controls] = useScroll();
  const [toggle, setToggle] = useState(false);
  return (
    <Faq ref={element} variants={fade} initial="hidden" animate={controls}>
      <h2>
        Any Questions? <span>FAO</span>
      </h2>
      <AnimateSharedLayout>
        <Toggle title="How Do I Start?">
          <div className="answer">
            <p>Lorem ipsum dolor sit.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
              assumenda.
            </p>
          </div>
        </Toggle>
        <Toggle title="Daily schedule.">
          <div className="answer">
            <p>Lorem ipsum dolor sit.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
              assumenda.
            </p>
          </div>
        </Toggle>
        <Toggle title="Different payment">
          <div className="answer">
            <p>Lorem ipsum dolor sit.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
              assumenda.
            </p>
          </div>
        </Toggle>
      </AnimateSharedLayout>
    </Faq>
  );
}

const Faq = styled(About)`
  display: block;
  span {
    display: block;
  }
  h2 {
    font-weight: lighter;
  }
  .faq-Line {
    background: #cccccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }
  .question {
    padding: 3rem 0rem;
    cursor: pointer;
  }
  .answer {
    padding: 2rem 0rem;
    p {
      padding: 1rem 0rem;
    }
  }
`;

export default FaqSection;
