import React from "react";
import Onboarding from "../Onboarding/Onboarding";
import {NavLink } from "react-router-dom";
import styled from "styled-components";


const StyledNav = styled.div`
      background-color: #13143D; 
      color: seashell;
      display: flex;
      justify-content: space-evenly
      a{
        text-decoration: none;
        padding: 3%;
        color: seashell;
        // background-color: red;
        
      }
      nav{
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 60%;  
      }
      div{
        display: flex;
        justify-content: space-evenly;
        align-items: center; 
        width: 50%;
        a{
           color: seashell;
           width: 30%;  
        }
      }
      h3{
          width: 100%;
          
      }
      .title{
          width: 30%;
       
      }
`



function NavBar (){


    return(
        <div>
            <StyledNav>
                <div className="title">
                <h3>Air BnB Predictive Pricing</h3>
                </div>
                <nav>
                    <NavLink to={"/"}>Home</NavLink>   
                    <Onboarding/>                                         
                </nav>



            </StyledNav>
      
        </div>
    )

}





export default NavBar; 