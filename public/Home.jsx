import React from 'react'
import classes from '../Components/Post.module.css';
import { FaSearch,FaArrowRight} from "react-icons/fa";
import Slider from '../Components/Slider/Slider';
import {Container} from 'react-bootstrap'
function Home() {
  return (
    <>
    <Container>
    <div className={classes.Home}>
      <div className={classes.search}>
     <input type="search" placeholder="What are you looking for?">  
      </input>
      <div className={classes.icon}>
      <FaSearch/>
      </div>
      
      </div>
      <div className={classes.silderhome}>
     <Slider/>
     </div>
     <div className={classes.internship}>
       <h2>Internships</h2>
       <div className={classes.view}>
       <p className={classes.para}>Apply to 10,000+ internship for free</p>
       <li className={classes.all}>View all internship<span><FaArrowRight/></span></li>
       </div>
       
     </div>
     <div className={classes.location}>
     <h4>Popular cities</h4>
     {/* {icon.map((icon, index) => ( */}
     <div className={classes.cities}>
       
       <a href="">
         <div className={classes.cityname}>
           <img src="work_from_home.svg" prop="img" alt="img"/>
           <p>Work from home</p>
         </div>
       </a>
       <a href="">
         <div className={classes.cityname}>
           <img src="delhi_ncr.svg" prop="img" alt="img"/>
           <p>Delhi/NCR</p>
         </div>
       </a>
       <a href="">
         <div className={classes.cityname}>
           <img src="Bangalore.svg" prop="img" alt="img"/>
           <p>Bangalore</p>
         </div>
       </a>
       <a href="">
         <div className={classes.cityname}>
           <img src="mumbai.svg" prop="img" alt="img"/>
           <p>Mumbai</p>
         </div>
       </a>
       <a href="">
         <div className={classes.cityname}>
           <img src="hyderabad.svg" prop="img" alt="img"/>
           <p>Hyderabad</p>
         </div>
       </a>
       <a href="">
         <div className={classes.cityname}>
           <img src="chennai.svg" prop="img" alt="img"/>
           <p>Chennai</p>
         </div>
       </a>
       <a href="">
         <div className={classes.cityname}>
           <img src="kolkata.svg" prop="img" alt="img"/>
           <p>KolKata</p>
         </div>
       </a>
       <a href="">
         <div className={classes.cityname}>
           <img src="international.svg" prop="img" alt="img"/>
           <p>International</p>
         </div>
       </a>
     </div>
   
     </div><br/>
     <div className={classes.location}>
     <h4>Popular categories</h4>
     <div className={classes.cities}>
       <a href="">
         <div className={classes.cityname}>
           <img src="part_time.svg" prop="img" alt="img"/>
           <p>Part-Time</p>
         </div>
       </a>
       <a href="">
         <div className={classes.cityname}>
           <img src="engineering.svg" prop="img" alt="img"/>
           <p>Engineering</p>
         </div>
       </a>
       <a href="">
         <div className={classes.cityname}>
           <img src="ngo.svg" prop="img" alt="img"/>
           <p>NGO</p>
         </div>
       </a>
       <a href="">
         <div className={classes.cityname}>
           <img src="mba.svg" prop="img" alt="img"/>
           <p>MBA</p>
         </div>
       </a>
       <a href="">
         <div className={classes.cityname}>
           <img src="design.svg" prop="img" alt="img"/>
           <p>Design</p>
         </div>
       </a>
       <a href="">
         <div className={classes.cityname}>
           <img src="science.svg" prop="img" alt="img"/>
           <p>Science</p>
         </div>
       </a>
       <a href="">
         <div className={classes.cityname}>
           <img src="media.svg" prop="img" alt="img"/>
           <p>Media</p>
         </div>
       </a>
       <a href="">
         <div className={classes.cityname}>
           <img src="humanities.svg" prop="img" alt="img"/>
           <p>Humanities</p>
         </div>
       </a>
     </div>
     
     </div>
     <div className={classes.internship}>
       <h2>Internshala Training</h2>
       <div className={classes.view}>
       <p className={classes.para}>Learn new-age skills on the go</p>
       <li className={classes.all}>View all internship<span><FaArrowRight/></span></li>
       </div>
     </div>
    
     <div className={classes.cities}>
       <a href="">
         <div className={classes.cityname}>
           <img src="programming_with_python.svg" prop="img" alt="img"/>
           <p>Programming with python</p>
         </div>
       </a>
       <a href="">
         <div className={classes.cityname}>
           <img src="digital_marketing.svg" prop="img" alt="img"/>
           <p>Digital marketing</p>
         </div>
       </a>
       <a href="">
         <div className={classes.cityname}>
           <img src="web_development.svg" prop="img" alt="img"/>
           <p>Web development</p>
         </div>
       </a>
       <a href="">
         <div className={classes.cityname}>
           <img src="machine_learning.svg" prop="img" alt="img"/>
           <p>Machine Learning</p>
         </div>
       </a>
       <a href="">
         <div className={classes.cityname}>
           <img src="advanced_excel.svg" prop="img" alt="img"/>
           <p>Advanced Excel</p>
         </div>
       </a>
       <a href="">
         <div className={classes.cityname}>
           <img src="ethical_hacking.svg" prop="img" alt="img"/>
           <p>Ethical Hacking</p>
         </div>
       </a>
       <a href="">
         <div className={classes.cityname}>
           <img src="autocad.svg" prop="img" alt="img"/>
           <p>AutoCAD</p>
         </div>
       </a>
       <a href="">
         <div className={classes.cityname}>
           <img src="creative_writing.svg" prop="img" alt="img"/>
           <p>Creative Writing</p>
         </div>
       </a>
     </div><br/>
     <br/>
     <div className={classes.internship}>
       <h2 className={classes.fresher}>Fresher Jobs<span>New</span></h2>
       <div className={classes.view}>
       <p className={classes.para}>Premium fresher jobs on your fingertips</p>
       <li className={classes.all}>View all jobs<span><FaArrowRight/></span></li>
       </div>
     </div>
     <div className={classes.frsherjob}>
       <a href="">
         <div className={classes.cityname}>
           <img src="ctc.svg" prop="img" alt="img"/>
           <p>Minimum CTC of 3 LPA</p>
         </div>
       </a>
       <a href="">
         <div className={classes.cityname}>
           <img src="dream.svg" prop="img" alt="img"/>
           <p>Dream Companies</p>
         </div>
       </a>
       <a href="">
         <div className={classes.cityname}>
           <img src="verified.svg" prop="img" alt="img"/>
           <p>100% verified jobs</p>
         </div>
       </a>
       </div>
  
        </div>
        </Container>
    </>
  )
}

export default Home;
