import React from 'react'
import { useState } from 'react';
import styles from "../../../styles/search-page/card.module.scss";

const Card=({ project })=>{
      
  return(
  <>
    <div className="container">
          <div className="card">
                <div className="imgBx">
                <img src="https://cdn.discordapp.com/attachments/951426015404654612/952147112060133426/D2_logo.png" alt="nike-air-shoe"/>
                {/* <img src="https://cdn.discordapp.com/attachments/951426015404654612/953703986203074580/Valley-Taurus-Mountains-Turkey.jpg" alt="nike-air-shoe"/> */}
                
                </div>

                <div className="contentBx">

                <h2>{project.title}</h2>
                <p>{project.description}</p>

                <div className="size">
                      <h3>Tech Stack:</h3>
                    <div className='grid-box1'>

                      {/* <span>Stack1</span>
                      <span>Stack1</span>
                      <span>Stack1</span>
                      <span>Stack1</span>         
                      <span>Stack1</span>         
                      <span>Stack1</span>          */}


                      {project.tech_stack.map((ts) =>(
                        <span>{ts}</span>

                      ))}
                    </div>
                    

                </div>

                <div className="color">

                      <h3>Color :</h3>
                      <span></span>
                      <span></span>
                      <span></span>
                </div>
                </div>

          </div>
    </div>


<style jsx>
    {
      `@import url('https://fonts.googleapis.com/css?family=Poppins:100,300,400,500,600,700,800, 800i, 900&display=swap');
      
      .container {
          position: relative;

          display: grid;
          grid-template-columns: 30% 30% 30%;
          align-items: center;
          justify-content: center;
          min-height: 30vh;

          padding: 3%;
          margin: 0;
          font-family: 'Poppins', sans-serif;
      }
      
      .container .card {
          position: relative;
          width: 250px;
          height: 350px;
          background: #232323;
          border-radius: 20px;
          overflow: hidden;
      }
      
      .container .card:before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: #1BBFE9;
          clip-path: circle(100px at 80% 20%);
          transition: 0.5s ease-in-out;
      }
      
      .container .card:hover:before {
          clip-path: circle(200px at 80% -20%);
      }
      
      .container .card:after {
          content: "<D/>";
          position: absolute;
          top: 30%;
          left: 0%;
          font-size: 6em;
          font-weight: 800;
          font-style: italic;
          color: rgba(255, 255, 255, 0.04);
      
      }
      
      .container .card .imgBx {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          z-index: 1000;
          width: 50%;
          height: 50%;
          transition: .5s;
      }
      
      .container .card:hover .imgBx {
          top: 0%;
          transform: translateY(-25%);
          opacity: 0;
          /* bug  */
      }
      
      .container .card .imgBx img {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%) rotate(20deg);
          width: 150px;
      }
      
      .container .card .contentBx {
          position: absolute;
          bottom: 0;
          width: 100%;
          height: 70px;
          text-align: center;
          transition: 1s;
          z-index: 90;
      }
      
      .container .card:hover .contentBx {
          height: 300px;
      }
      
      .container .card .contentBx h2 {
          position: relative;
          font-weight: 600;
          letter-spacing: 1px;
          color: #fff;
      }
      .container .card .contentBx p{
          position: relative;
          font-weight: 400;
          letter-spacing: 1px;
          color: #fff;
      }
      
      .container .card .contentBx .size,
      .container .card .contentBx .color {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 2px 5px;
          transition: .5s;
          opacity: 0;
          visibility: hidden;
      }
      
      .container .card:hover .contentBx .size {
          opacity: 1;
          visibility: visible;
          transition-delay: .5s;
      }
      
      .container .card:hover .contentBx .color {
          opacity: 1;
          visibility: visible;
          transition-delay: .6s;
      }
      
      .container .card .contentBx .size h3,
      .container .card .contentBx .color h3 {
          color: white;
          font-weight: 300;
          font-size: 14px;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-right: 5px;
          text-align: center;
      }

      .container .card .contentBx .size span {
          width: 50%;
          height: 26px;
          text-align: center;
          line-height: 16px;
          font-size: 14px;
          display: inline-block;
          color: red;
          margin: 0 5px;
          transition: .5s;
          color: red;
          border-radius: 4px;
          cursor: pointer;
      }
      
      
      .container .card .contentBx .color span {
          width: 20px;
          height: 20px;
          background: #ff0;
          border-radius: 50%;
          margin: 0 5px;
          cursor: pointer;
      }
      
      .container .card .contentBx .color span:nth-child(2) {
           background: #1BBFE9;
      }
      
      .container .card .contentBx .color span:nth-child(3) {
           background: #1B2FE9;
      }
      
      .container .card .contentBx .color span:nth-child(4) {
           background: #080481;
      }

      .grid-box1{
        display: grid;
        width: 100%;
        grid-template-columns: 30% 30% 30%;
        align-items: center;
        justify-content: center;
      }
      `
    }
</style>

  </>
  );
  }

export default Card