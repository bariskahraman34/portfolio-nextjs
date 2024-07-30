import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile, faUserLarge, faLinesLeaning, faCode } from '@fortawesome/free-solid-svg-icons';

export default function AsideMenu() {
  return (
    <aside>
      <nav className="navigation">
        <ul>
          <li>
            <a href="/files/barisKahramanResume.pdf" target="_blank" className="tooltip" data-tooltip="CV Görüntüle">
              <FontAwesomeIcon icon={faFile} />
            </a>
          </li>
          <li>
            <a className="tooltip" href="#header" data-tooltip="Hakkımda">
              <FontAwesomeIcon icon={faUserLarge} />
            </a>
          </li>
          <li>
            <a className="tooltip" href="#tools" data-tooltip="Öğrendiklerim">
              <FontAwesomeIcon icon={faLinesLeaning} />
            </a>
          </li>
          <li>
            <a className="tooltip" href="#projects" data-tooltip="Projelerim">
              <FontAwesomeIcon icon={faCode} />
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  )
}