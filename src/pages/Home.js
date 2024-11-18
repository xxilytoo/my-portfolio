import React from 'react';
import Typical from 'react-typical';
import '../styles/Home.css';
import ProjectCarousel from '../components/ProjectCarousel';
import Skills from "../components/Skills";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";
import StarIcon from "@material-ui/icons/Star";
import GHlogo from '../images/github-icon.png';
import LNlogo from '../images/linkedin-icon.png'
import Xlogo from '../images/x-icon.png';
import proj1img from '../images/cattle-proj.png'
import songpop from '../images/songprediction.png'
import ccimg from '../images/cc-research.png'
import evamusic from '../images/EvaMusic.png'


const not_proj = [
  {
    title: 'Cattle Detection Pro',
    description: 'Streamlit-based application utilizing a fine-tuned YOLOv11 model for efficient cattle detection in aerial images and videos. Note: Streamlit might take a while to become up and running from asleep',
    tech: 'Technologies/Libraries Utilized: Python, Ultralytics, Roboflow, Streamlit, Sort, cv2.',
    link: 'https://cattledetectionpro.streamlit.app/',
    link2: 'https://github.com/xxilytoo/cattle_graze_model',
    image: proj1img
  },
  {
    title: 'EvaLaMusica',
    description: 'Full-stack web application that generates personalized playlists based on user input for mood and environment. The playlist is generated by a Convulutional Neural Network trained from scratch',
    tech: 'Technologies/Libraries Utilized: HTML, CSS, Bootstrap, RestAPI, Flask, PostgresSQL (Incoming), Python, Tensorflow, nltk, keras, sklearn, pandas, matplotlib ',
    link: 'https://docs.google.com/presentation/d/1prGpw3YBgJt6wWwnotR1zSXNGd7Ay-wqGUvHwHz0ZE8/edit?usp=sharing',
    link2: 'https://github.com/xxilytoo/IgniteAI-Song-Recommendation-Project',
    image:evamusic
  },
  {
    title: 'Song Popularity Predictor',
    description: 'Developed a K-Nearest Neighbor GridsearchCV model to predict song popularity based on song intros and pulled data from Spotify API',
    tech: 'Technologies/Libraries Utilized: Python, sklearn, matplotlib, pandas, numpy, spotipy',
    link: 'https://github.com/xxilytoo/Song-Prediction/tree/main',
    image: songpop
  },
  {
    title: 'Cloud Cost Reduction Research',
    description: 'Developed and implemented a groundbreaking Waterfall Algorithm using machine learning models on Microsoft Azure Virtual Machine data, projected to save $15 million across 66,721 virtual machines, with findings published in the Journal of Student Research.',
    tech: 'Technologies/Libraries Utilized: Java, Python, Orange',
    link: 'https://www.jsr.org/hs/index.php/path/article/view/3362',
    link2: 'https://github.com/xxilytoo/CloudComputingCostReduction',
    image: ccimg
  },
]

const Home = () => {
  return (
  <section id = "parent">
    <section id="home" className="home-section">
      <div className="home-content">
        <h1>
          <Typical
            steps={[
              'Hi, I\'m', 2000,   
              'Hi, I\'m Shawn!', 4000,   
              '', 1000   
            ]}
            loop={Infinity}
            wrapper="span"
          />
        </h1>
        <h2>Software Engineer specializing in Infrastructure & AI</h2>
        <p>Welcome to my portfolio.</p>
      </div>
        {/* About Me Section */}

      <section id="about-me" className="about-me-section">
          <h2>About Me</h2>
          <p>
          I'm currently a junior in the CS Honors program at Texas A&M University, with a strong passion for the intersection of AI, software, and infrastructure. 
          I’m driven by the challenge of building solutions that are not only efficient but also scalable, user-friendly, and impactful. 
          Over the years, I’ve gained experience in languages like Python, JavaScript, Java, and C++, and I thrive on tackling projects that push me to innovate and grow in this evolving field.
          </p>
          
          <p>
          Hobbies: Cooking & Exercising
          </p>
      </section>
    </section>
    <section id="skills">
        <Skills />
    </section>
    <section id="recent-exp" className="recent-experience">
      <h2>My Experiences</h2>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Aug 2024 - Present"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">Software Development Intern</h3>
          <h4 className="vertical-timeline-element-subtitle">Reinsurance Group of America || Remote</h4>
          <p>
            Backend engineering, Jenkins, Groovy, Python, Agile, Linux, CI/CD
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Aug 2024 - Present"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">Texas A&M TACO Student Researcher</h3>
          <h4 className="vertical-timeline-element-subtitle">College Station, TX</h4>
          <p>
            Research, Visual Language Models (VLMS), Benchmark Testing & Development
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Jun 2024 - Aug 2024"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">Software Engineer Intern</h3>
          <h4 className="vertical-timeline-element-subtitle">Reinsurnace Group of America || St. Louis, Missouri</h4>
          <p>
            Fullstack Development, React.js, MUI, AWS Lambda, Terraform, MongoDB, GraphQL, Ansible, Python, Node.js
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Aug 2023 - Sep 2024"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">Ignite Fellow & Discover Participant</h3>
          <h4 className="vertical-timeline-element-subtitle"> AI4ALL  || Remote</h4>
          <p>
            Artificial Intelligence, Machine Learning, Python, Tensorflow, sklearn, Matplotlib
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="Aug 2023 - May 2026"
          iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">Texas A&M University</h3>
          <h4 className="vertical-timeline-element-subtitle">B.S. Computer Science Honors</h4>
          <p>Relevant Courses: </p>
          <ul>
            <li>Data Structures (C++)</li>
            <li>Computer Organization (C & Assembly)</li>
            <li>Programming Languages (Java & Haskell) </li>
          </ul>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="May 2022 - Aug 2022"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">Lead Researcher</h3>
          <h4 className="vertical-timeline-element-subtitle">Texas State University || Remote</h4>
          <p>
            Research, Cloud Computing, Machine Learning, Java, Python, Orange
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
          icon={<StarIcon />}
        />
      </VerticalTimeline>
    </section>
    <section id = "ProjCar" className="proj-car">
      <h2>Notable Projects</h2>
      <a className="proj-link" href="./projects">View All Projects Here</a>
      <ProjectCarousel projects={not_proj} />
    </section>
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-socials">
            <a href="https://github.com/xxilytoo" className="social-link"><img src={GHlogo} alt="Github"/></a>
            <a href="https://www.linkedin.com/in/1cken/" className="social-link"><img src={LNlogo} alt="LinkedIn"/></a>
            <a href="https://x.com/xxilytoo_dev" className="social-link"><img src={Xlogo} alt="X"/></a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>Created with React JS ^_^</p>
        </div>
      </div>
    </footer>
  </section>
  );
};

export default Home;

