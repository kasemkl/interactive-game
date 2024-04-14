import React from "react";
import "../styles/aboutus.css";
const AboutUs = () => {
  return (
    <div>
      <div className="container">
        <div className="about-us">
          <div className="img">
            <img src={require(`../images/hallak.jpg`)} alt="" />
          </div>

          <div className="text">
            <h2 className="">Who Are We?</h2>
            <div className="">
              <h4>Mohammad (Your uncle):</h4>
              <p>
                Mohammad is a competitive programmer and skilled backend
                developer with a passion for solving complex problems and
                optimizing system performance. With years of experience in
                backend development, Mohammad brings a wealth of knowledge and
                expertise to the team.
              </p>
            </div>
            <div className="">
              <h4>Kasem:</h4>
              <p>
                Kasem is a web developer and competitive programmer who thrives
                on building elegant and efficient web solutions. With expertise
                in frontend technologies and a knack for problem-solving, Kasem
                creates intuitive user interfaces and robust web applications
                that delight users.
              </p>
            </div>
            <div className="">
              <h4>Bader:</h4>
              <p>
                Bader is a DevOps specialist and network engineer with a strong
                background in managing and optimizing infrastructure. With a
                keen eye for detail and a focus on automation, Bader ensures
                smooth deployment and operation of our projects, enabling
                seamless user experiences.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
