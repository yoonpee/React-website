import React from 'react'
import styled from 'styled-components';
import {Link} from "react-router-dom";
import athlete from '../img/athlete-small.png'
import theracer from '../img/theracer-small.png'
import goodtimes from '../img/goodtimes-small.png'
import {motion} from "framer-motion";
import {pageAnimate,imgAnimate, fade, lineAnimate, frameAnimate } from "../animate";
import {useScroll} from '../components/useScroll';



function OurWork() {
    const [element, controls] = useScroll();
    const [element1, controls1] = useScroll();
    const [element2, controls2] = useScroll();
    return (
        <Work style={{ background: "#fff" }} exit="exit" variants={pageAnimate} initial="hidden" animate="show">
            <Frame1 variants={frameAnimate}></Frame1>
            <Frame2 variants={frameAnimate}></Frame2>
            <Frame3 variants={frameAnimate}></Frame3>
            <Frame4 variants={frameAnimate}></Frame4>
            <Movie ref={element} variants={fade} initial="hidden" animate={controls}>
                <motion.h2 variants={fade}>The Athlete</motion.h2>
                <motion.div variants={lineAnimate} className="line"></motion.div>
                <Link to="/work/the-athlete">
                  <Hidden> 
                     <motion.img variants={imgAnimate} src={athlete} alt="athlete" />
                  </Hidden>
                </Link>
            </Movie>
            <Movie ref={element1} variants={fade} initial="hidden" animate={controls1}>
                <h2>The theracer</h2>
                <div className="line"></div>
                <Link to="/work/the-racer">
                   <img src={theracer} alt="athlete" />
                </Link>
            </Movie>
            <Movie ref={element2} variants={fade} initial="hidden" animate={controls2}>
                <h2>The goodtimes</h2>
                <div className="line"></div>
                <Link to="/work/good-times">
                   <img src={goodtimes} alt="athlete" />
                </Link> 
            </Movie>
        </Work>
    )
}

const Work = styled(motion.div)`
  padding:5rem 10rem;
  
   
`;
const Movie = styled(motion.div)` 
 padding-bottom: 10rem;
 h2{padding:1rem 0;}
 .line{
     width:100%;
     height: 5px;
     background:#23d997;
     
 }
 img{
     width:100%;
     margin-top:1rem;
     height:70vh;
     object-fit: cover;
 }
`
const Hidden = styled.div`
   overflow:hidden;
`

const Frame1 = styled(motion.div)`
   position:fixed;
   left:0;
   top:10%;
   width:100%;
   height: 100vh;
   background:peachpuff;
`
const Frame2 = styled(Frame1)`
  background:peru;
`
const Frame3 = styled(Frame1)`
  background:lightblue;
`
const Frame4 = styled(Frame1)`
  background:lightcoral;
`
export default OurWork
