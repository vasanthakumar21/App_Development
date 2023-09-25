import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

import Footer from '../footer/Footer';
import Navbar1 from '../navbar/Navbar1';
function Project1() {
  return (
    <div>
    <Navbar1/>
    <div className="projects">
    
      <section className="team">
        <div className="center">
          <h2>Project & Team Members</h2>
        </div>
        <h4 className="role">Frontend Devlopers</h4>
        <div className="team-content">
          <div className="box">
            <img src="https://images.squarespace-cdn.com/content/v1/5b7e685d8ab722146afd7529/1564600902218-403CMIW9V4G2UC13A25W/PP_01.jpg" alt="Steph Jobs" />
            <h3>Steph Jobs</h3>
            <h6>10 years of Experience </h6>
            <h5>React devloper</h5>
            <div className="icons">
              <Link to="#"><i className="ri-twitter-fill"></i></Link>
              <Link to="#"><i className="ri-facebook-box-fill"></i></Link>
              <Link to="#"><i className="ri-instagram-fill"></i></Link>
            </div>
          </div>

          <div className="box">
            <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&w=1000&q=80" alt="Steph Jobs" />
            <h3>Maria</h3>
            <h6>5 Years of Experience</h6>
            <h5>Js Devloper</h5>
            <div className="icons">
              <Link to="#"><i className="ri-twitter-fill"></i></Link>
              <Link to="#"><i className="ri-facebook-box-fill"></i></Link>
              <Link to="#"><i className="ri-instagram-fill"></i></Link>
            </div>
          </div>

          <div className="box">
            <img src="https://static.photocdn.pt/images/articles/2019/08/07/images/articles/2019/07/31/best_linkedin_photos.jpg" alt="Steph Jobs" />
            <h3>Rithun</h3>
            <h6>3 Years of Experience</h6>
            <h5>Anugular</h5>
            <div className="icons">
              <Link to="#"><i className="ri-twitter-fill"></i></Link>
              <Link to="#"><i className="ri-facebook-box-fill"></i></Link>
              <Link to="#"><i className="ri-instagram-fill"></i></Link>
            </div>
          </div>

          <div className="box">
            <img src="data:image/jpeg;base64,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" alt="Steph Jobs" />
            <h3>Meghna</h3>
            <h6>6 years of Experience</h6>
            <h5>UI & UX Designer</h5>
            <div className="icons">
              <Link to="#"><i className="ri-twitter-fill"></i></Link>
              <Link to="#"><i className="ri-facebook-box-fill"></i></Link>
              <Link to="#"><i className="ri-instagram-fill"></i></Link>
            </div>
          </div>
        </div>
        <br/>
        <h4 className="role">Backend-Designers</h4>
        <div className="team-content">
          <div className="box">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPPOxFuSqifEohINQUKxjrd7WgadvWiaiI_Q&usqp=CAU" alt="Steph Jobs" />
            <h3>Mr.John</h3>
            <h6>5 years of Experience </h6>
            <h5>Spring Tool Suite</h5>
            <div className="icons">
              <Link to="#"><i className="ri-twitter-fill"></i></Link>
              <Link to="#"><i className="ri-facebook-box-fill"></i></Link>
              <Link to="#"><i className="ri-instagram-fill"></i></Link>
            </div>
          </div>

          <div className="box">
            <img src="data:image/jpeg;base64,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" alt="Steph Jobs"/>
            <h3>Harkey</h3>
            <h6>7 Years of Experience</h6>
            <h5>Django</h5>
            <div className="icons">
              <Link to="#"><i className="ri-twitter-fill"></i></Link>
              <Link to="#"><i className="ri-facebook-box-fill"></i></Link>
              <Link to="#"><i className="ri-instagram-fill"></i></Link>
            </div>
          </div>

          <div className="box">
            <img src="data:image/jpeg;base64,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" alt="Steph Jobs"/>
            <h3>Jefrin</h3>
            <h6>8 Years of Experience</h6>
            <h5>Firebase</h5>
            <div className="icons">
              <Link to="#"><i className="ri-twitter-fill"></i></Link>
              <Link to="#"><i className="ri-facebook-box-fill"></i></Link>
              <Link to="#"><i className="ri-instagram-fill"></i></Link>
            </div>
          </div>

          <div className="box">
            <img src="data:image/jpeg;base64,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" alt="Steph Jobs" />
            <h3>kajol</h3>
            <h6>3 Years of Experience</h6>
            <h5>.Net Core</h5>
            <div className="icons">
              <Link to="#"><i className="ri-twitter-fill"></i></Link>
              <Link to="#"><i className="ri-facebook-box-fill"></i></Link>
              <Link to="#"><i className="ri-instagram-fill"></i></Link>
            </div>
          </div>
          
        </div>
        <div className='hori'></div>
        <h4 className="role">Database Manager</h4>
        <div className="team-content">
          <div className="box">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPVJDMGYW0SfsjQ_CEXSREOPLDSzuVX8_POA&usqp=CAU" alt="Steph Jobs" />
            <h3>Mr.Tom</h3>
            <h6>5 years of Experience </h6>
            <h5>MongoDB</h5>
            <div className="icons">
              <Link to="#"><i className="ri-twitter-fill"></i></Link>
              <Link to="#"><i className="ri-facebook-box-fill"></i></Link>
              <Link to="#"><i className="ri-instagram-fill"></i></Link>
            </div>
          </div>

          <div className="box">
            <img src="https://www.corporatephotographylondon.com/wp-content/uploads/2019/11/HKstrategies-797-1024x683.jpg" alt="Steph Jobs"/>
            <h3>Harkey</h3>
            <h6>7 Years of Experience</h6>
            <h5>My sql</h5>
            <div className="icons">
              <Link to="#"><i className="ri-twitter-fill"></i></Link>
              <Link to="#"><i className="ri-facebook-box-fill"></i></Link>
              <Link to="#"><i className="ri-instagram-fill"></i></Link>
            </div>
          </div>

          <div className="box">
            <img src="https://media.istockphoto.com/id/1338134319/photo/portrait-of-young-indian-businesswoman-or-school-teacher-pose-indoors.jpg?s=612x612&w=0&k=20&c=Dw1nKFtnU_Bfm2I3OPQxBmSKe9NtSzux6bHqa9lVZ7A=" alt="Steph Jobs"/>
            <h3>Jefrin</h3>
            <h6>8 Years of Experience</h6>
            <h5>Oracle Database</h5>
            <div className="icons">
              <Link to="#"><i className="ri-twitter-fill"></i></Link>
              <Link to="#"><i className="ri-facebook-box-fill"></i></Link>
              <Link to="#"><i className="ri-instagram-fill"></i></Link>
            </div>
          </div>

          <div className="box">
            <img src="https://www.corporatephotographylondon.com/wp-content/uploads/2019/11/HKstrategies-1713-1024x683.jpg" alt="Steph Jobs" />
            <h3>kajol</h3>
            <h6>3 Years of Experience</h6>
            <h5>My sql</h5>
            <div className="icons">
              <Link to="#"><i className="ri-twitter-fill"></i></Link>
              <Link to="#"><i className="ri-facebook-box-fill"></i></Link>
              <Link to="#"><i className="ri-instagram-fill"></i></Link>
            </div>
          </div>
          
        </div>
      </section>
    </div>
    <Footer/>
    </div>
  );
}

export default Project1;
