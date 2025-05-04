import { Link } from "react-router-dom"
export default function Contact(){
    return(
     <>
       <section className="course-sec d-flex justify-content-center align-items-center">
            <div>Contact Us</div>
        </section>
        <section className="container contact-sec d-flex justify-content-between align-items-center flex-column">
           <div className="head-contact text-center">
            <p>Contact Us</p>
            <h3 className="fs-1">Have any query ?</h3>
            <hr />
            <p>if you have any request we will happy to response</p>
           </div>
           <div className="contact-structure d-flex justify-content-center gap-5 align-items-center ">
             <div className="info">
               <ul  >
                <li>
                  <div>Email Us</div>
                  <span>- Sales@machinfy.com</span>
                </li>
                <li>
                  <div>Call Us</div>
                  <span>+ 201093230372</span>
                </li>
                <li>
                  <div>address</div>
                  <span>- 30 haroun ST - Dokki - Giza</span>
                </li>
               </ul>
             </div>
             <form action="">
              <div className="inputs">
                 <div >
                  <input type="text" placeholder="Your Name" />     
                  <input type="email" placeholder="Email Address" />
                 </div>
                 <div>
                  <input type="text" placeholder="Your subject" />
                  <input type="text" placeholder="Phone" />
                 </div>
              </div>
              <div className="message">
                <textarea name="" id="" placeholder="leave your message"></textarea>
              </div>
                <button className="link-btn"> send</button>
             </form>
           </div>
        </section>
     </>
    )
} 