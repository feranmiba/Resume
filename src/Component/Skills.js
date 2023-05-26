import React from 'react'
import { FaCss3, FaGithub,  FaHtml5, FaJs, FaLaptopCode, FaReact, FaSass} from 'react-icons/fa'

function Skills(props) {
  return (
    <section  className='skills' ref={props.skill}>
       <div>
        <h1>skills</h1>
        <div className='tech'>
        <h2>Tech Stack <FaLaptopCode /></h2>
            <p><button><b> <FaHtml5 /> HTML</b> Expert</button> <button><b> <FaCss3 /> CSS</b> Expert</button>
            <button><b> <FaJs />JavaScript</b> Expert</button>  <button><b>Tailwind css</b> Expert</button>
            <button><b> <FaReact />React js</b> Mid-level</button> <button><b> <FaSass />Sass </b> Mid-level</button> <button><b> <FaGithub /> Github</b> Expert</button>
            </p>
        </div>
            </div>
    </section>
  )
}

export default Skills