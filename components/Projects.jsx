"use client"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';

export default function Projects({projects, images, technologies}) {
  return (
    <>
        <section id='projects'>
            <h2>Projelerim</h2>
            <div className="card-container">
                {projects?.map((project) => (
                    <div key={project.id} className="card">
                        <a className='project-link' href={project.demo_URL} target="_blank" >
                            {images?.map((img,index) => (
                                project.id == img.project_id && <Image key={index} width={500} height={200} src={img.image_url} alt=""/>))}
                            
                            <div className="card-heading">
                                <h3 className="project-name">{project.project_name}</h3>
                                <span className="color-green">{project.year}</span>
                            </div>
                            <div className="languages">
                                <ul className="languages-list">
                                {technologies?.map((tech, index) => (
                                    tech.project_id == project.id ? <li key={index}>{tech.technology}</li> : ""
                                ))}
                                </ul>
                            </div>
                        </a>
                        <p className="description">
                            {project.description}
                        </p>
                        <a className="github-link" target='_blank' href={project.source_code_url}>Github Repository 
                            <FontAwesomeIcon icon={faChevronRight} />
                        </a>
                    </div>
                ))}
            </div>
        </section>
    </>
  )
}