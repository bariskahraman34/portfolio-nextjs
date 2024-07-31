import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandSparkles, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function Header() {
  return (
    <section id="header">
        <header>
            <h1>Merhaba, Ben Barış <span><FontAwesomeIcon icon={faHandSparkles} /></span></h1>
            <h1 className="color-green">FrontEnd Developer</h1>
            <ul className="links-list">
                <li className="link">
                    <a href="https://github.com/bariskahraman34" target='_blank'>
                        <span><FontAwesomeIcon icon={faGithub} /></span>
                        Github
                    </a>
                </li>
                <li className="link">
                    <a href="https://www.linkedin.com/in/bariskahraman34/" target='_blank'>
                        <span><FontAwesomeIcon icon={faLinkedin} /></span>
                        Linkedin
                    </a>
                </li>
                <li className="link">
                    <a href="mailto:boriskahra34@gmail.com" target='_blank'>
                        <span><FontAwesomeIcon icon={faEnvelope} /></span>
                        Email
                    </a>
                </li>
            </ul>
            <div className="description">
            <p>
              Merhaba, ben Barış Kahraman, frontend developer olarak yazılım dünyasına adım attım. Kullanıcı dostu ve etkileyici web arayüzleri oluşturma konusunda deneyimliyim. HTML, CSS, JavaScript ve modern framework&#39;ler React, Next.js konusundaki bilgimle, projelerimi estetik ve işlevsellik açısından en üst düzeye çıkarmayı hedefliyorum.
            </p>
            <p>
              Teknolojiye olan ilgim ve öğrenme tutkum sayesinde, sürekli olarak yeni beceriler edinmekte ve güncel gelişmeleri takip etmekteyim. Ekip çalışmasına yatkın, iletişim becerileri güçlü ve problem çözme yeteneklerine sahibim. Hedefim, her zaman daha iyisini yapmak ve kendimi sürekli geliştirmektir.
            </p>
            </div>
        </header>
    </section>
  )
}