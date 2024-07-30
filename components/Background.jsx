"use client"
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCookie,
  faClapperboard,
  faEarthOceania,
  faPanorama,
  faBookAtlas,
  faClipboardCheck,
  faSailboat,
  faBolt,
  faBatteryFull,
  faBookSkull,
  faCircleCheck,
  faCubes,
  faDatabase,
  faDiagramProject,
  faGhost
} from '@fortawesome/free-solid-svg-icons';
import {
  faGithub,
  faApple,
  faAndroid,
  faGitlab,
  faDocker,
  faGitkraken
} from '@fortawesome/free-brands-svg-icons';

const icons = [
  faCookie,
  faClapperboard,
  faEarthOceania,
  faPanorama,
  faBookAtlas,
  faClipboardCheck,
  faSailboat,
  faBolt,
  faBatteryFull,
  faBookSkull,
  faCircleCheck,
  faCubes,
  faDatabase,
  faDiagramProject,
  faGhost,
  faGithub,
  faApple,
  faAndroid,
  faGitlab,
  faDocker,
  faGitkraken
];

export default function Background() {
    const [rows, setRows] = useState([]);

    useEffect(() => {
      const body = document.body;
      const html = document.documentElement;
      const height = Math.max(
        body.scrollHeight,
        body.offsetHeight,
        html.clientHeight,
        html.scrollHeight,
        html.offsetHeight
      );
      const numRows = Math.ceil(height/40);
      setRows(new Array(numRows).fill(0));
    }, []);

  return (
    <section className="background">
      {rows.map((_, rowIndex) => (
        <div className="row" key={rowIndex}>
          {new Array(2).fill(0).map((_, colIndex) => (
            <div key={colIndex}>
              {icons.map((icon, iconIndex) => (
                <FontAwesomeIcon
                  key={iconIndex}
                  icon={icon}
                  className="backgroundIcon"
                />
              ))}
            </div>
          ))}
        </div>
      ))}
    </section>
  )
}
