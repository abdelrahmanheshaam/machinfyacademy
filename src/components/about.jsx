import React from "react";
import { Link } from "react-router-dom";
export default function About() {
  return (
    <div>
       <section className="about-sec d-flex justify-content-center align-items-center">
            <div>Who We Are ...?</div>
        </section>
        {/* breif about us  */}
        <section>
          <div className="container">
             <div className="MF-breif">
                   <h2>what is machinfy academy ?</h2>
                   <hr />
                    <article>
                      - Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, fugit similique? Dolorem reiciendis sapiente eveniet beatae accusamus veritatis officia mollitia quidem. Eveniet dicta, nostrum dolore, ullam non amet maiores voluptates excepturi tenetur corrupti saepe dolores dolorum facere sapiente molestiae mollitia. Vel eaque accusamus ducimus iure hic aut earum doloribus asperiores.
                      <br />
                      - Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, fugit similique? Dolorem reiciendis sapiente eveniet beatae accusamus veritatis officia mollitia quidem. Eveniet dicta, nostrum dolore, ullam non amet maiores voluptates excepturi tenetur corrupti saepe dolores dolorum facere sapiente molestiae mollitia. Vel eaque accusamus ducimus iure hic aut earum doloribus asperiores.
                    </article>
             </div>
          </div>
        </section>
        {/* mf provides  */}
        <section className="provides-section">
          <div className="container">
           <h2 className="cr-header">Machinfy Provides</h2>
            <div className="provides  mt-5 text-center d-flex justify-content-center align-items-center gap-5">
              <div className="provide">
                <div className="prov-head">
                  after sale
                </div>
                <div>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus sed officia vitae consequuntur autem quasi deleniti aliquid praesentium nobis labore!</p>
                </div>
              </div>
              {/* break */}
              <div className="provide">
                <div className="prov-head select">
                  select
                </div>
                <div>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus sed officia vitae consequuntur autem quasi deleniti aliquid praesentium nobis labore!</p>
                </div>
              </div>
              {/* break */}
              <div className="provide">
                <div className="prov-head">
                  road map
                </div>
                <div>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus sed officia vitae consequuntur autem quasi deleniti aliquid praesentium nobis labore!</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* start Goal  section */}
        <section className="goals-section">
          <div className="container">
            <h2 className="customer-hd">Our Mission</h2>
                <div className="goals-holder d-flex justify-content-center  text-center align-items-center flex-column">
                          <div className="goal d-flex justify-content-center text-center align-items-center gap-5"> 
                            <div className="goal-img"><img src="./imgs/cs.jpg" alt="" /></div>
                             <div>
                               <h3 className="text-start">vision</h3>
                               <hr />
                               <div className="text-start">
                                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus molestias eius excepturi iusto ab voluptates similique iste. Reiciendis nemo harum, ipsum animi quam molestias debitis distinctio aperiam, omnis, sunt laudantium.</p>
                               </div>
                             </div>
                          </div>
                          <div className="goal d-flex justify-content-center text-center align-items-center gap-5"> 
                             <div>
                               <h3 className="text-start">mission</h3>
                               <hr />
                               <div className="text-start">
                                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus molestias eius excepturi iusto ab voluptates similique iste. Reiciendis nemo harum, ipsum animi quam molestias debitis distinctio aperiam, omnis, sunt laudantium.</p>
                               </div>
                             </div>
                             <div className="goal-img"><img src="./imgs/cs.jpg" alt="" /></div>
                          </div>
                 </div>
          </div>
        </section>
          {/* start Accredited  section */}
        <section className="accredited-sec">
          <div className="container">
             <h2 className="customer-hd">Accredited By</h2>
             <div className="holder-accredited row">
                <div className="accredited col-3 col-sm-6">
                  <img src="/imgs/partners/logo-addison.webp" alt="" />
                </div>
                <div className="accredited col-3 col-sm-6">
                  <img src="/imgs/partners/logo-applauz.webp" alt="" />
                </div>
                <div className="accredited col-3 col-sm-6">
                  <img src="/imgs/partners/logo-california.webp" alt="" />
                </div>
                <div className="accredited col-3 col-sm-6">
                  <img src="/imgs/partners/logo-estato.webp" alt="" />
                </div>
             </div>
          </div>
        </section>
    </div>
  )
}
