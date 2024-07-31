"use client"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJs, faHtml5, faCss3Alt, faSass, faBootstrap, faReact, faGitAlt, faFigma, faSquareGithub } from '@fortawesome/free-brands-svg-icons';
import { MaterialIcon, NextjsIcon, TypescriptIcon } from './svgs';

export default function Tools() {
  return (
    <section id="tools">
        <h2>Öğrendiklerim</h2>
        <div className="card-container">
            <div className="card tooltip" data-tooltip="Git">
                <FontAwesomeIcon icon={faGitAlt} />
            </div>
            <div className="card tooltip" data-tooltip="Github">
                <FontAwesomeIcon icon={faSquareGithub} />
            </div>
            <div className="card tooltip" data-tooltip="Figma to Code">
                <FontAwesomeIcon icon={faFigma} />
            </div>
            <div className="card tooltip" data-tooltip="HTML5">
                <FontAwesomeIcon icon={faHtml5} />
            </div>
            <div className="card tooltip" data-tooltip="CSS">
                <FontAwesomeIcon icon={faCss3Alt} />
            </div>
            <div className="card tooltip" data-tooltip="SCSS">
                <FontAwesomeIcon icon={faSass} />
            </div>
            <div className="card tooltip" data-tooltip="Bootstrap">
                <FontAwesomeIcon icon={faBootstrap} />
            </div>
            <div className="card tooltip custom-svg" data-tooltip="MUI">
                <MaterialIcon />
            </div>
            <div className="card tooltip" data-tooltip="JavaScript">
                <FontAwesomeIcon icon={faJs} />
            </div>
            <div className="card tooltip custom-svg" data-tooltip="TypeScript">
                <TypescriptIcon />
            </div>
            <div className="card tooltip" data-tooltip="React">
                <FontAwesomeIcon icon={faReact} />
            </div>
            <div className="card tooltip custom-svg" data-tooltip="Next.js">
                <NextjsIcon />
            </div>
        </div>
    </section>
  )
}
