import { FaArrowLeft } from "react-icons/fa";
import { Link, useParams } from "react-router-dom"
import { blogs } from "./data/blogs";
export default function blogDetails() {
    const {id} = useParams();
    const Blog = blogs.find((blog)=>blog.id === id);
    return (
        <>
         <section className="course-sec d-flex justify-content-center align-items-center">
            <div>{Blog.name} Blog</div>
            
        </section>
        <section>
         <Link to={'/blog'} className="back-btn"><FaArrowLeft/> Back</Link>
          <section >
               <h2 className="cr-header">{Blog.name}</h2>
               <div className="blog-img m-auto">
                  <img src={Blog.img} alt="" />
               </div>
          </section>
         <section>
            <div className="container">
            <section className="intro ">
             <h3 className="title-sec">intro</h3>
             <div>
                <p>{Blog.intro}</p>
             </div>
          </section>
          <hr />
          <section className="descriotion ">
             <h3 className="title-sec">descriotion</h3>
             <div>
                <p>{Blog.desc}</p>
             </div>
          </section>
           <hr />
          <section className="subj">
             <h3 className="title-sec">subject</h3>
             <div>
                <p>{Blog.subj}</p>
             </div>
          </section>
            </div>
         </section>
        </section>
        </>
    )
}