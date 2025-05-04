import { FaLaptopCode } from "react-icons/fa";
import { Link } from "react-router-dom";
import '../style/index.css'
export default function footer() {
  return (
    <>
     <div className="footer">
       <div className="container">
       <div className="img-holder">
        <img src="./imgs/mfLogo.png" alt="" />
       </div>
       <div className="footer-content d-flex justify-content-evenly mt-5  align-items-center">
             <div className="contact">
                <h3 className="ms-4 mb-4 fs-2"> Contact Us</h3>
               <ul>
                  <li className="   mb-4  d-flex justify-content-start gap-2 align-items-center">
                    <div>
                      <FaLaptopCode />
                    </div>
                    <div>+ 012015015131</div>
                  </li>
                  <li className=" mb-4  d-flex justify-content-start gap-2 align-items-center">
                    <div>
                      <FaLaptopCode/>
                    </div>
                    <div>30 haroon eldoki,giza, mesaha,egypt</div>
                  </li>
                  <li className=" mb-4  d-flex justify-content-start gap-2 align-items-center">
                    <div>
                      <FaLaptopCode/>
                    </div>
                    <div>info@gmail.com</div>
                  </li>
               </ul>
             </div>
             <div className="our-courses">
              <h3 className="mb-4 ms-2 fs-2 ">Our Courses</h3>
                <ul >
                    <li>Machinfy Professional SQL Course</li>
                    <li>Machinfy Cybersecurity Diploma</li>
                    <li>Machinfy On Job Training</li>
                    <li>Machinfy Data Analysis using excel and power BI</li>
                    <li> AI For All</li>
                    <li>Machinfy UI UX Design Diploma</li>
               </ul>
            </div>
            <div className="get-touch">
             <h3 className="mb-4 fs-2">about us</h3>
             <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis amet quas ipsam minima facilis, hic eius cum est inventore! Quas perferendis quis accusamus facere amet!</p>
             <Link to={'/contact'} className="Link">Contact Us</Link>
           </div>
       </div>
       </div>
     </div>   
      
    </>
  )
}
