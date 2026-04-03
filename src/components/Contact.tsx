import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href="mailto:realshreyanshsingh@gmail.com" data-cursor="disable">
                realshreyanshsingh@gmail.com
              </a>
            </p>
            <h4>Phone</h4>
            <p>+91 88277 41992</p>
            <h4>Education</h4>
            <p>B.Tech CS — JUET Guna (CGPA 9.2)</p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://github.com/mabwfas"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Github <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com/in/shreyanshsingh"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              LinkedIn <MdArrowOutward />
            </a>
            <a
              href="https://www.youtube.com/@DigitalMarketingHeroes"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              YouTube (2.6M) <MdArrowOutward />
            </a>
            <a
              href="https://x.com/shreyansh_singh"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Twitter <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Shreyansh Singh</span>
            </h2>
            <h5>
              <MdCopyright /> 2026 Shreyansh Singh. All rights reserved.
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
