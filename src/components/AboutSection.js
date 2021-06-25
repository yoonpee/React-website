import React from "react";
import home1 from "../img/home1.png";
import {About, Description, Image, Hide} from '../style';
import { motion } from 'framer-motion';
import { aboutContent, imgAnimate, fade } from '../animate';
import Wave from './Wave';

function AboutSection() {

  return (
    <About>
      <Description>
        
        <motion.div>
          <Hide>
            <motion.h2 variants={aboutContent}>We work to make</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={aboutContent}>
              your <span>dreams</span> come
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={aboutContent}>true.</motion.h2>
          </Hide>
        </motion.div>
        <motion.p variants={fade}>
          Contact us for any photography or videography ideas that you have. We
          have professionals with amazing skills
        </motion.p>
        <motion.button variants={fade}>Contact Us</motion.button>
      </Description>
      <Image >
        <motion.img variants={imgAnimate} src={home1} alt="guy in a camera" />
      </Image>
      <Wave />
    </About>
  );
}



export default AboutSection;
