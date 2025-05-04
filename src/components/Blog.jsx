import { FaLaptopCode } from "react-icons/fa";
import { Link } from "react-router-dom";
import { blogs } from "./data/blogs";
export default function Blog() {
  return (
    <div>
        <section className="welcome-sec d-flex justify-content-center align-items-center">
            <div>Blogs</div>
        </section>
        <section className="blogs-section">
           <div className="container flex-wrap gap-5 blogs-container d-flex justify-content-center align-items-center ">
             <article className="d-flex  justify-content-center align-items-center flex-column">
               { blogs.map((blog,index)=>
                (
                  <Link key={index} className="blog-box">
                    <div className="blog">
                      <div className="blog-img">
                        <img src={blog.img} alt="" />
                      </div>
                      <div className="blog-content">
                        <p>{blog.date}</p>
                        <h3>{blog.name}</h3>
                        <Link key={blog.id} to={`/blog/${blog.id}`} className="text-decoration-none link-blog">more details</Link>
                      </div>
                  </div>
                  </Link>
                )               
              )
               }
             </article>
              <aside className="aside h-100 d-flex gap-3 align-self-start flex-column" >
                 <div className="search">
                    <div>search</div>
                    <hr />
                    <div className="search-bar">
                       <input type="text" placeholder="search" />
                       <FaLaptopCode className="icon-search"/>
                    </div>
                 </div>
                 {/* break  */}
                 <div className="latest">
                    <div>latest posts</div>
                    <hr />
                    <div className="latest-post gap-4 d-flex justify-content-center align-items-center">
                         <div>
                          <img src={blogs[0].img} alt="" />
                         </div>
                         <div >
                           <p>{blogs[0].date}</p>
                           <p>Lorem ipsum dolor sit amet</p>
                         </div>
                    </div>
                    <hr/>
                    <div className="latest-post gap-5 d-flex justify-content-center align-items-center">
                         <div>
                          <img src={blogs[1].img} alt="" />
                         </div>
                         <div>
                           <p>{blogs[1].date}</p>
                           <p>Lorem ipsum dolor sit amet</p>
                         </div>
                    </div>
                 </div>
                 {/* break  */}
                 <div className="categories">
                    <div>categories</div>
                    <hr />
                    <ul>
                      <li>Data Science</li>
                      <li>Data Analysis</li>
                      <li>Machin Learning</li>
                      <li>Power BI</li>
                    </ul>
                 </div>
                 {/* break  */}
                 <div className="tags">
                 <div>tags</div>
                 <hr />
                  <ul className=" d-flex  flex-wrap justify-content-start align-items-start">
                    <li>AI</li>
                    <li>Power BI</li>
                    <li>testing</li>
                    <li>analysis</li>
                    <li>data sciece</li>
                    <li>machin Learning</li>
                  </ul>
                 </div>
              </aside>
           </div>
        </section>
         
    </div>
  )
}
