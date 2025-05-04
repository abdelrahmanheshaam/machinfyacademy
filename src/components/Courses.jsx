import { Link } from "react-router-dom"
import { courses } from "./data/courses"
export default function Courses() {
  return (
    <div> 
        <section className="course-sec d-flex justify-content-center align-items-center">
            <div>Courses</div>
        </section>
          <section>
            <div className="container">
               <div className="our-courses-box row">
                  {
                    courses.map((course,index)=>(
                      <div key={index} className="course-card col-sm-3 col-12">
                        <div className="course-img">
                          <img src={course.img} alt="" />
                        </div>
                        <div className="course-info">
                          <h3>{course.name}</h3>
                          <p>Diploma {course.name}</p>
                          <h5> Price : <span>{course.price} LE</span></h5>
                          <Link key={course.id} to={`/courses/${course.id}`} className="link-course">More Details</Link>
                        </div>
                      </div>
                    ))
                  }
               </div>
            </div>
          </section>
        
        
    </div>
  )
}
