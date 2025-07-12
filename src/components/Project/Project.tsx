import { Container } from "./styles";
import githubIcon from "../../assets/github.svg";
// import DownloadApp from '../../assets/download.webp'
import externalLink from "../../assets/external-link.svg";
import ScrollAnimation from "react-animate-on-scroll";

export function Project() {
  return (
    <Container id="project">
      <h2>My Projects</h2>
      <div className="projects">
        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                {/* <a
                  href="https://play.google.com/store/apps/details?id=com.carvonixllc.carvonixUserApp&hl=en"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={githubIcon} alt="GitHub" />
                </a> */}
                <a
                  href="https://ai-chatbot-t8fn.onrender.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Carvonix Mobile app</h3>
              <p>
                CARVONIX is the ultimate automotive enthusiast social platform,
                designed to fuel your passion and connect you with car lovers
                from all around the globe. Whether you're a gearhead, a builder,
                or just someone who appreciates great rides, this platform is
                your new home.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Typescript</li>
                <li>Firebase</li>
                <li>Redux-Toolkit</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {" "}
                <title>Folder</title>{" "}
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>{" "}
              </svg>
              <div className="project-links">
                {/* <a
                  href="https://github.com/CodeVinayak/Serverless-Voting-Application"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={githubIcon} alt="Visit site" />
                </a> */}
                <a
                  href="https://play.google.com/store/apps/details?id=io.chattersocial.app&hl=en"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Chatter Social</h3>
              <p>
                {" "}
                Group-first social network for real-time conversations, viral
                moments, and community-powered content. Chatter is a group-first
                social platform built for community-powered connection. Designed
                to move at the speed of conversation, Chatter helps you find
                your people, build community, and monetize what you
                build—whether you’re starting a movement, hosting a watch party.{" "}
              </p>
            </div>
            <footer>
              {" "}
              <ul className="tech-list">
                {" "}
                <li>Typescript</li> <li>Stripe Payment</li> <li>Firebase</li>{" "}
              </ul>{" "}
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b "
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <title>Folder</title>{" "}
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>{" "}
              </svg>
              <div className="project-links">
                {/* <a
                  href="https://github.com/CodeVinayak/AI-Chatbot-Assistant"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={githubIcon} alt="Visit site" />{" "}
                </a> */}
                <a
                  href="https://play.google.com/store/apps/details?id=com.isqroll&hl=en"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>iSQROLL</h3>
              <p>
                iSQROLL, a marketplace designed for Kiwi's, by Kiwis. A
                community platform that provides a safe buying and selling
                environment with easy communication between traders. We believe
                businesses and individual buyers and sellers are important
                contributors to the economic health of New Zealand, and that
                buying and selling should be accessible with minimal cost.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Typescript</li>
                <li>Firebase</li>
                <li>Redux-Toolkit</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b "
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                {/* <a
                  href="https://github.com/CodeVinayak/MediBook-Medical-Appointment-Scheduler-with-Health-History"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={githubIcon} alt="Visit site" />
                </a> */}
                <a
                  href="https://play.google.com/store/apps/details?id=com.mish&hl=en"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Mish - Carpooling</h3>
              <p>
                Mish is Aotearoa New Zealand’s latest community-based travel
                network enabling Kiwis nationwide to share rides across our
                beautiful country. Mish leverages technology to fill empty seats
                on the road, connecting members looking to carpool, and making
                travel more affordable, sociable and convenient. Mish's
                environmentally and human-friendly mobility network will reduce
                CO2 emissions and enables countless human connections every
                year.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Typescript</li>
                <li>Firebase</li>
                <li>Redux-Toolkit</li>
                <li>Stripe Payments</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <title>Code</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                {/* <a
                  href="https://github.com/CodeVinayak/Real-Time-Hand-Gesture-Driven-3D-Object-Manipulation"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={githubIcon} alt="Visit site" />
                </a> */}
                <a
                  href="https://play.google.com/store/apps/details?id=com.safesignz&hl=en_US"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>SafeSigNZ</h3>
              <p>
                Safety starts with understanding how developers collect and
                share your data. Data privacy and security practices may vary
                based on your use, region, and age. The developer provided this
                information and may update it over time.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Typescript</li>
                <li>Firebase</li>
                <li>Redux-Toolkit</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                {/* <a
                  href="https://github.com/CodeVinayak/Jupyter-Notebook/tree/main/Credit%20Risk%20Analysis"
                  target="\_blank"
                  rel="noreferrer"
                >
                  <img src={githubIcon} alt="Visit site" />
                </a> */}
                <a
                  href="https://play.google.com/store/apps/details?id=com.vagahauniue&hl=en"
                  target="\_blank"
                  rel="noreferrer"
                >
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Ponataki</h3>
              <p>
                The language of Niue is an integral part to the preservation and
                promotion of its culture and identity. Our desire is to be part
                of all efforts to help carry the Niue language onto the next
                generation. The Ponataki app is created to support these efforts
                with simple lessons on mobile devices, online and on-demand.
                This is a place where you can learn, interact and follow basic
                examples of 'everyday' words and sentence structures to help
                improve your interaction with other users of the Niue language.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Typescript</li>
                <li>Firebase</li>
                <li>Redux-Toolkit</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b "
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a
                  href="https://play.google.com/store/apps/details?id=com.locum_bridge&hl=en"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>LocumBridge</h3>
              <p>
                Locumbridge: Your All-in-One Healthcare Staffing Solution
                Welcome to Locumbridge, the ultimate app designed to
                revolutionise the way healthcare professionals and practices
                connect and collaborate. Whether you're a locum seeking the
                perfect work opportunity or a healthcare practice in need of
                staffing.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>React Native </li>
                <li>Typescript</li>
                <li>Firebase</li>
                <li>Redux-Toolkit</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b "
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a
                  href="https://play.google.com/store/apps/details?id=com.outsourcenz.saloof&hl=ens"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Saloof</h3>
              <p>
                Saloof is a pioneering B2B e-commerce platform designed to
                facilitate seamless interactions between wholesale suppliers and
                retail buyers. The platform enables wholesalers, distributors,
                and manufacturers to create accounts and list their products,
                providing a streamlined digital marketplace for businesses in
                Saudi Arabia and beyond..
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>React Native </li>
                <li>Typescript</li>
                <li>Firebase</li>
                <li>Redux-Toolkit</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b "
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a
                  href="https://play.google.com/store/apps/details?id=com.outsourcenz.safetycheck&hl=en"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>SafetyCheck</h3>
              <p>
                At SafetyCheck, we believe that an excellent health and safety
                system should be accessible to everyone in the construction
                industry. Our mission is to simplify workplace safety while
                providing the most cost-effective system on the market—ever.
                SafetyCheck is specifically built for small and medium
                businesses in the construction industry, offering a faster,
                easier, and more effective way to manage safety compliance—at a
                fraction of the cost of other safety management systems.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>React Native </li>
                <li>Typescript</li>
                <li>Firebase</li>
                <li>Redux-Toolkit</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        {/* <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
                <a href="https://mitulindustries.com/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Mitul Industries - Manufacturing Industries Site</h3>
              <p>
              This manufacturing industry website shows off products and helps the business get more customers and information online. Making products is important but making money from them is the goal. This site can help the business make more profit.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Wordpress</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation> */}

        {/* 
        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
                <a href="https://mayatmaj.com/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Mayatmaj - Film Production Site</h3>
              <p>
                This agency website promotes post production, virtual production, and video marketing services. It shows previous client work and reviews to get more business. If you need help with production, this website can give you information and connect you with the right people.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Wordpress</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation> */}

        {/* <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
                <a href="https://www.smartcornersproperties.com/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>SmartCorners - Real Estate Properties Site</h3>
              <p>
              This real estate site displays land properties and helps buyers and sellers. Buyers can see lots of pictures, videos, and details about properties before visiting in person. It makes it easier for buyers to find what they want and helps sellers get more attention.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Wordpress</li>               
              </ul>
            </footer>
          </div>
        </ScrollAnimation> */}

        {/* <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
                <a href="https://madewithluv.in/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>MadeWithLuv - HomeDecor Site</h3>
              <p>
                This website sells home decor products and helps people decorate their homes. It is easy to find what you need, whether it's furniture or decorations. The site is useful for people who want to make their homes look nice and need some help.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Wordpress</li>
                <li>Woocommerce</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation> */}
      </div>
    </Container>
  );
}
