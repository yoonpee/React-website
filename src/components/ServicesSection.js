import React from 'react'
import clock from '../img/clock.svg';
import dia from '../img/diaphragm.svg';
import money from '../img/money.svg';
import teamwork from '../img/teamwork.svg';
import home2 from '../img/home2.png';
import {About,Description,Image} from "../style";
import styled from 'styled-components';
import {useScroll} from './useScroll'
import {fade} from "../animate"

function ServicesSection() {
    const [element, controls] = useScroll();
    return (
        <Services variants={fade} animate={controls} initial="hidden" ref={element}>
            <Description>
                <h2> High 
                     <span> quality </span>  services
                </h2>
                <Cards>
                    <Card>
                        <div className="icon">
                             <img src={clock} alt="clock"/>
                             <h3>Efficient</h3>
                        </div>
                        <p>Lorem ipsum dolor sit.</p>
                    </Card>
                    <Card>
                        <div className="icon">
                             <img src={teamwork} alt="teamwork"/>
                             <h3>Teamwork</h3>
                        </div>
                        <p>Lorem ipsum dolor sit.</p>
                    </Card>
                    <Card>
                        <div className="icon">
                             <img src={dia} alt="dia"/>
                             <h3>Diaphragm</h3>
                        </div>
                        <p>Lorem ipsum dolor sit.</p>
                    </Card>
                    <Card>
                        <div className="icon">
                             <img src={money} alt="money"/>
                             <h3>Money</h3>
                        </div>
                        <p>Lorem ipsum dolor sit.</p>
                    </Card>
                </Cards>
            </Description>
            <Image>
                <img src={home2} alt=""/>
            </Image>
        </Services>
    )
}

const Services = styled(About) `
   h2{
       display:flex;
       padding-bottom:5rem;
       font-size:4rem;
       
   }
   
   p{
       width:70%;
       padding: 2rem 0rem 4rem 0rem;
   }
`
const Cards = styled.div`
   display:flex;
   flex-wrap:wrap;
   justify-content: space-around;
`
const Card = styled.div`
   
  .icon{
      display:flex;
      align-items: center;
      h3{
          margin-left:1rem;
          background:#fff;
          color:#000;
          padding:1rem;
      }
  }
`

export default ServicesSection
 
