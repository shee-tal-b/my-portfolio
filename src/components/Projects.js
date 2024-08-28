import React from 'react';
import './Projects.css';

function ProjectCard({ title, description, link, imageSrc }) {
  return (
    <div className="project-card">
      <img src={imageSrc} alt={title} className="project-image" />
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={link} target="_blank" rel="noopener noreferrer">View Project</a>
    </div>
  );
}

function Projects() {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="projects-grid">
        <ProjectCard
          title="Women's Clothing Review"
          description="Aims on understanding and interpreting customer's review for 
          various women's clothing. This requires pre-processing the reviews 
          and then analyzing the sentiment of the product."
          link="https://github.com/yourusername/project1"
          imageSrc="https://jumanji.livspace-cdn.com/magazine/wp-content/uploads/2019/08/23233750/womens-wardrobes-lighting.jpg"

        />
        <ProjectCard
          title="Hotel Management System"
          description="Developed GUI-based application using Python and MySQL. 
          Implementations include managing rooms as well as customer information along  with booking rooms
            and generating bills accordingly. "
          link="https://github.com/yourusername/project2"
          imageSrc="https://images.ctfassets.net/q5m53pi41ft0/7cVMxJMuon4ki1b9RfIyat/74f5d6d3a8e57d5b196d110c0b09f3d8/CPI-Comfort-vestavena-recepce-z-boku-scaled.jpg"
        />
        
        <ProjectCard
          title="Building Distributed Key-Value Store with etcd "
          description="Python program allows users to interact with
           an etcd cluster. - Performs operations like get, put,
            delete, etc.  "
          link="https://github.com/yourusername/project2"
          imageSrc="https://gunesemrah.com/wp-content/uploads/2024/06/cq5dam.web_.1280.1280.png"
        />

        
        <ProjectCard
          title="Auction System "
          description="Developed a python-based app using socket concept, that 
        multiple devices connected to the same network participate in 
        the auction. Follows client- server architecture.  "
          imageSrc="https://c1india.com/wp-content/uploads/2020/05/Bidding-process.jpg"
        />

        <ProjectCard
          title="Comparitive Analysis of performance of various IR models"
          description="We analyze the performance of IR models like TF-IDF
          ,BM25 and LSI model in retrieving the relevant documents for a given query"
          imageSrc="https://img.freepik.com/vector-gratis/diminuto-gerente-recursos-humanos-busca-candidato-trabajo-entrevista-lupa-pantalla-computadora-ilustracion-vectorial-plana-carrera-empleo_74855-8619.jpg?size=626&ext=jpg"

        />

        <ProjectCard
          title="Deepfake detection localisation and manipulation (Ongoing) "
          description="Given a deepfake image, we build and train model to detect the facial regions
          that were deepfaked. We highlight the detected regions and label the parts of the face that were deepfaked."
          imageSrc="https://gijn.org/wp-content/uploads/2021/05/Deepfakes-771x514.jpg"
        />

      </div>
    </section>
  );
}

export default Projects;

