// icons 
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";
import { GrInstagram } from "react-icons/gr";
import { FaArrowLeft } from "react-icons/fa";
// file links 
import { Link, useParams } from "react-router-dom"
import { courses } from "./data/courses"
export default function CourseDetails() {
    const {id} = useParams();
    const course = courses.find((course)=>course.id === id);
    return (
        <>
         <section className="course-sec d-flex justify-content-center align-items-center">
            <div>{course.name}</div>
        </section>
        <section>
         <Link to={'/courses'} className="back-btn"><FaArrowLeft/> Back</Link>
            <div className="container course-holder gap-5 d-flex justify-content-center align-items-center">
               <div className="course-breif mt-5 ">
                   <h2 className="course-name">Machinfy <span>{course.name}</span> Diploma</h2>
                   <hr/>
                    <div className="course-details-img">
                        <img src={course.img} alt="" />
                    </div>
                     <article className=" desc">
                       <h3>Description</h3>
                       <hr/>
                       <p>- {course.desc}</p>
                     </article>
                     <div className="what-learn">
                        <h3>What you Will learn ?</h3>
                        <hr/>
                         <div className="list-diploma-content">
                           <ul className=" d-flex justify-content-center gap-2 flex-wrap align-items-center">
                             {
                                course.items.map((item,index)=>(
                                    <li key={index}>{item}</li>
                                ))
                             }
                           </ul>
                         </div>
                     </div>
               </div>
               <aside className="course-details align-self-start">
                  <div className="price-box">
                    <div>Price : <span>LE {course.price}</span></div>
                  <Link className="link" to>Buy This Course</Link>
                  </div>
                  {/* break */}
                  <div className="share d-flex justify-content-between align-items-center">
                     <div>share</div>
                     <div >
                       <ul className="social-links d-flex gap-3">
                        <li>
                          <Link to={'https://www.facebook.com'}>
                             <FaFacebook className="icon"/>
                          </Link>
                        </li>
                        <li>
                          <Link to={'https://www.youttube.com'}>
                            <FaYoutube className="icon" />
                          </Link>
                        </li>
                        <li>
                          <Link to={'https://www.tiktok.com'}>
                            <AiFillTikTok className="icon" />
                          </Link>
                        </li>
                        <li>
                          <Link to={'https://www.instagram.com'}>
                            <GrInstagram  className="icon"/>
                          </Link>
                        </li>
                       </ul>
                     </div>
                  </div>
                  {/* break  */}
                  <div className="course-includes">
                    <div>This course includes</div>
                    <hr/>
                    <div className="level-course">
                     - skill level : Beginner To advanced
                    </div>
                    <div className="duration">
                        - duration : <span>{course.duration}</span>
                    </div>
                    <div className="certificate">
                        - certificate : <span>yes</span>
                    </div>
                  </div>
               </aside>
            </div>
        </section>
        </>
    )
}