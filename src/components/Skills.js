import React from 'react';
import './Skills.css';
import { FaPython, FaJava, FaReact} from 'react-icons/fa';
import { SiTensorflow, SiNumpy, SiPandas, SiKeras, SiPlotly, SiMysql, SiMongodb, SiStreamlit} from 'react-icons/si';
import { BsGraphUp,BsGithub  } from 'react-icons/bs';

function Skills() {
  return (
    <section id="skills" className="skills">
      <h2>Skills</h2>
      <ul>
        <li><FaPython /> Python</li>
        <li><SiTensorflow /> TensorFlow</li>
        <li><SiNumpy /> NumPy</li>
        <li><SiPandas /> Pandas</li>
        <li><FaReact /> React.js</li>
        <li><SiKeras /> Keras</li>
        <li><BsGraphUp /> Matplotlib</li>
        <li><SiPlotly /> Plotly</li>
        <li><FaJava /> Java</li>
        <li><SiMysql /> MySQL</li>
        <li><SiMongodb /> MongoDB</li>
        <li><BsGithub /> Github</li>
        <li><SiStreamlit /> Streamlit</li> 
      </ul>
    </section>
  );
}

export default Skills;
