import React from 'react'
import { FaCss3, FaGithub,  FaHtml5,  FaJs,  FaReact, } from 'react-icons/fa'


function Projects(props) {
  return (
    <section className='skill'  ref={props.project}>
    <section >
        <div>
         <h1>Projects</h1>
            <h2>Respitories</h2>
            </div>
        <div>
        <div>
       <div className='rep'>
        <span className='shop'>
            <b>Shopify</b>
            <p className='link'>
            <a href="https://amiolashopifyclone.netlify.app/">amiolashopifycloneapp.netlify.com</a>
            </p>
            <p><FaReact /> React, <FaJs />Javascript, Tailwind</p>
        </span>
        <span className='shop'>
            <b>E-commerce</b>
            <p>
            <a href="https://feranmiba.github.io/e-commerce-page/">ecommerceapp.github.io</a>
            </p>
            <p><FaHtml5 /> HTML, <FaCss3 /> Css, <FaJs /> Javascript</p>
        </span>
        <span className='shop'>
            <b>Web Dictionary</b>
            <p>
            <a href="https://amiolademiladewebdictionaryapp.netlify.app/">amiolademiladewebdictionary.netlify.app</a>
            </p>
            <p><FaReact /> React, <FaJs />Javascript, <FaCss3 /> Css</p>
        </span>
        <span className='shop'>
            <b>Rock, Paper Scissor game</b>
            <p>
            <a href="https://feranmiba.github.io/scrabble-game/">scrabblegame.github.io</a>
            </p>
            <p><FaHtml5 />  HTML, <FaCss3 /> Css, <FaJs /> Javascript</p>
        </span>
        
        <span className='shop'>
            <b> Age Calculator app</b>
            <p>
            <a href="https://agecalculatorappamiolademilade.netlify.app/">agecalculatorappamiolademilade.netlify.app</a>
            </p>
            <p><FaReact /> React, <FaJs />Javascript, <FaCss3 /> Css</p>
        </span>
        <span className='shop'>
            <b>Rock, Paper Scissor game</b>
            <p>
            <a href="https://feranmiba.github.io/Rock-Paper-Scissors/">Rock-Paper-Scissors</a>
            </p>
            <p><FaHtml5 />  HTML, <FaCss3 /> Css, <FaJs /> Javascript</p>
        </span>
        <span className='shop'>
            <b>Web Countries</b>
            <p>
            <a href="https://amiolarestcountriesapp.netlify.app/">amiolademiladerestcountriesapp.netlify.app</a>
            </p>
            <p><FaReact /> React, <FaJs />Javascript, <FaCss3 /> Css</p>
        </span>
       
       
        <span>
            <p>Check out my code on my Github</p>
            <a href="https://github.com/feranmiba">Github <FaGithub /> </a>
        </span>
       </div>
        </div>
        </div>
    </section>
    </section>
  )
}

export default Projects