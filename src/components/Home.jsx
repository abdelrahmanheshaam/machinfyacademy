// importing icons from react/icons 
import { CgChevronRight , CgChevronLeft } from "react-icons/cg";
import { FaLaptopCode } from "react-icons/fa";
import { BsClipboardDataFill } from "react-icons/bs";
import { BsRobot } from "react-icons/bs";
import { MdDesignServices } from "react-icons/md";
import { MdOutlineSecurity } from "react-icons/md";
import { PiFileSqlBold } from "react-icons/pi";
import { MdModelTraining } from "react-icons/md";
import { FaChild } from "react-icons/fa";
import { RiServiceLine } from "react-icons/ri";
import { MdHighQuality } from "react-icons/md";
import { SiFuturelearn } from "react-icons/si";
import { BiHappyBeaming } from "react-icons/bi";
import { RiTeamFill } from "react-icons/ri";
import { HiComputerDesktop } from "react-icons/hi2";
import { BsProjector } from "react-icons/bs";
import { MdContactPhone } from "react-icons/md";
import { IoFootsteps } from "react-icons/io5";
import { FaRegCreditCard } from "react-icons/fa6";
// files importing 
import { NavLink,Link } from "react-router-dom"
import { Si365Datascience } from "react-icons/si";
import React, { useLayoutEffect, useState,useRef  } from 'react';
import gsap from 'gsap';
// importing the swipers 
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
export default function Home(){
  const main_logo= useRef(null);
  const boxOfText= useRef(null);
  const btn= useRef(null);
  const left_arrow= useRef(null);
  const right_arrow= useRef(null);
  const scroll_bar= useRef(null);
  useLayoutEffect(()=>{
    // start animation all text 
   
    // Animate main logo 
    gsap.fromTo(
      main_logo.current,
      {rotation: 360,y:-500},
      {rotation: 0,duration:1,y:0}
    )
    // Animation the btn in welcome section 
    gsap.fromTo(
      btn.current,
      {opacity:0, y:1600},
      {opacity:1,duration:1,y:0,ease:"bounce.out" }
    )
    // Animation the text in welcome section 
    gsap.fromTo(
      boxOfText.current,
      {opacity:0},
      {opacity:1,duration:4,ease:"bounce.out" }
    )
  })
  //arrow left and right for courses section 
     const scroll = (der)=>{
      if(scroll_bar.current){
        scroll_bar.current.scrollBy({
          left: der=== "left" ? -250:250,
          behavior:"smooth",
        })
      }
     }

    //partners 
    const parnters = [
      {partner: "/imgs/partners/mansor.jpg"},
      {partner: "/imgs/partners/qandeel.png"},
      {partner: "/imgs/partners/samsung.webp"},
      {partner: "/imgs/partners/qandeel.png"},
      {partner: "/imgs/partners/mansor.jpg"},
      {partner: "/imgs/partners/we.png"},
      {partner: "/imgs/partners/we.png"},
    ]
  // courses 
  const courses = [
    { name: "SoftWare Testing", icon: <FaLaptopCode />, path: "/courses/softwareTesting" },
    { name: "Data Science", icon: <Si365Datascience />, path: "/courses/dataScience" },
    { name: "Data Analysis", icon: <BsClipboardDataFill />, path: "/courses/dataAnalysis" },
    { name: "UI & UX", icon: <MdDesignServices />, path: "/courses/uiux" },
    { name: "AI For All", icon: <BsRobot />, path: "/courses/ai" },
    { name: "Cyber Security", icon: <MdOutlineSecurity />, path: "/courses/cybersecurity" },
    { name: "SQL Course", icon: <PiFileSqlBold />, path: "/courses/sql" },
    { name: "On Job Training", icon: <MdModelTraining />, path: "/courses/onJobTraning" },
    { name: "Programming for Kids", icon: <FaChild />, path: "/courses/programingForKids" }
  ];
  const customers = [
    {
      name: "Ahmed Sayed",
      img: "/imgs/cs.jpg",
       review: "أكثر حاجة فادتني هي Prompt Engineering. كنت فاهم أني بعملها صح وفاهم فيها، وكنت بطلع نتائج حلوة. بعد ما تعلمت في الدبلومة، ظهرت لي نتائج هائلة. كان ده بالنسبة لي شيء كويس جدًا. أيضًا، استخدام AI Agent في إتمام المهام بمجرد ما أنتهي من كباية القهوة كان له تأثير كبير.", // ممكن تحط أي تقييم أو تسيبها فاضية مؤقتًا
       course: "AI-Copilot"
      },
    {
      name: "Nabil Ameer",
       img: "/imgs/cs.jpg", 
      review: "أنا أول مرة أخد ISTQB. لو دخلت الامتحان بكرة، إن شاء الله هأخذ الشهادة. الكورس كان مغطي كل حاجة بالنسبالي، وبقيت عندي ثقة كبيرة في نفسي. التوتر راح تمامًا.", // ممكن تحط أي تقييم أو تسيبها فاضية مؤقتًا
      course: "Software Testing"
    },
    {
      name: "client 3",
     img: "/imgs/cs.jpg", 
      review: "حضرتكم غطيتوا في Prompting الحاجات الأساسية بشكل ممتاز، واستمتعت بيها جدًا. أكثر حاجة فادتني كانت AI Agent، لأني كنت ضعيف فيه جدًا، لكن اكتشفت قوة استخدامه. كما ذكرت، شعرت بنشوة الانتصار بعد ما عملت مشروعي الخاص", // ممكن تحط أي تقييم أو تسيبها فاضية مؤقتًا
      course: "AI-Copilot"
    },
    {
      name: "client 4",
        img: "/imgs/cs.jpg", 
      review: "المحتوى بشكل عام كان رائع. بدأنا من أول ما تعلمنا Probability و Statistics، وكيفية استخدام Math لبناء Machine Learning Models، زي اللي بنشوفها في السوق. وكان معنا مدربين Seniors، وكانوا بيشرحوا لنا خطوة بخطوة وبيساعدونا في أي شيء يعترض طريقنا. تقييمات Tasks كانت تتم بعد كل Session", // ممكن تحط أي تقييم أو تسيبها فاضية مؤقتًا
      course: "Data Science"
    },
    {
      name: "Ahmed Waheed",
       img: "/imgs/cs.jpg", 
      review: "المحتوى كان ممتاز وبدأ من البداية، لكن الجزء الخاص بـ Machine Learning دخل في تفاصيل أعمق، وكنت مبسوط جدًا منه. لما كنت بحتاج حاجة من Mentors، كنت بتواصل معاهم فورًا وكانوا بيساعدوني. ما حسيتش إني لوحدي من أول يوم لحد ما خلصت ", // ممكن تحط أي تقييم أو تسيبها فاضية مؤقتًا
      course: "Data Science"
    },
    {
      name: "Ramiz Ameer",
      img: "/imgs/cs.jpg", 
      review: "  أنا أخدت الكورس ده قبل كده في الجامعة، لكن للأسف كان كله نظري. كان مجرد مذاكرة لمحتوى ISTQB فقط. لكن الكورس هنا فرق معايا جدًا، خصوصًا في جزئي Test Cases و Test Scenarios. كمان جربت Automation لأول مرة وكان ليه تأثير كبير في تطوير مهاراتي. ", // ممكن تحط أي تقييم أو تسيبها فاضية مؤقتًا
      course: "Software Testing"
    },
    {
      name: "last client",
        img: "/imgs/cs.jpg", 
      review: "  بعد ما أخلص الكورس ده، هقعد أراجع فيه لمدة سنة قدام. قبل الكورس كنت عندي بعض الأساسيات البسيطة من YouTube عن Dashboards و Data Analysis، لكن الكورس ده أعطاني أساسيات قوية في المجال ", // ممكن تحط أي تقييم أو تسيبها فاضية مؤقتًا
      course: "Data Analysis"
    }
  ];
  
    return(
     <>
     {/* start welcom section  */}
       <section className="welcome-section w-100 d-flex justify-content-center align-items-center flex-column">
         <div className="main-logo">
             <img ref={main_logo} className='logo-center-effect' src="./imgs/logo.png" alt="" />
         </div>
         <div ref={boxOfText} className="text-holder">
          <h2 >Learn, Practice, Achieve goals</h2>
          <p >Invest in yourself for a rewarding future; it's vital and yields significant returns on investment throughout your life.</p>
         </div>
         <div>
          <button ref={btn}><Link to={"/courses"} className="text-decoration-none">Explore Courses</Link></button>
         </div>
       </section>
       {/* end welcome section  */}
       {/* start The trending courses and values */}
       <section className="p-section">
            <div className=" container p-5 ">
              <div className="courses-box text-center d-flex justify-content-center align-items-center flex-column">
                   <h2>Our Courses</h2>
                  <CgChevronLeft onClick={()=>scroll("left")}  ref={left_arrow} className="left-arrow" />
                  <div ref={scroll_bar} className="wrapper-courses d-flex justify-content-between align-items-center">
                      { courses.map((course,index)=>(
                        <div key={index} className="group-item d-flex justify-content-center align-items-center flex-column">
                           <Link className="links" to={course.path}>
                             <div className="course-icon">{course.icon}</div>
                             <h5>{course.name}</h5>
                           </Link>
                        </div>
                      ))}
                  </div>
                   <CgChevronRight onClick={()=>scroll("right")} ref={right_arrow} className="right-arrow" />
               </div>
            </div>
       {/* start section Our Values */}
            <section className="p-5 text-center">
            <div className="container ">
                 <h2 className="cr-header d-flex justify-content-center align-items-center">Our values</h2>
                <div className="another-element values row d-flex justify-content-center align-items-center p-5">
                  <div className="value col-4 col-sm-12">
                     <RiServiceLine  className="another-element value-icon"/>
                     <h5>After Sale</h5> 
                     <p>At Machinfy Academy,we are committed to providing top-quality after-sales service with a team of experienced professionals, advanced resources, and hands-on support to ensure you get the most out of our services and achieve lasting success.</p>
                  </div>
                  <div className="value col-4 col-sm-12">
                  <MdHighQuality className="value-icon" />
                  <h5>High Quality</h5> 
                  <p>At Machinfy Academy,we are committed to providing high-quality programming education with expert instructors, cutting-edge resources, and hands-on experience to ensure you master the skills needed for success.</p>
                  </div>
                  <div className=" value col-4 col-sm-12">
                    <SiFuturelearn className="value-icon"/>
                     <h5>Learning Environment</h5> 
                     <p>At Machinfy Academy, we offer a supportive and interactive learning environment with the latest tools and technologies, ensuring an engaging experience for all levels of programming students.</p>
                  </div>
                </div>
            </div>
            </section>
         </section>
       {/* endThe trending courses and values */}
       {/* start review section  */}
         <section className="review-section text-center">
          <div className="container">
            <h2 className="customer-hd">what our client say</h2>
            <section className="customer-review">
               <div className="wrapper-clients d-flex justify-content-flex-start align-items-center">
               <Swiper
                  modules={[Autoplay, Navigation, Pagination]}
                  spaceBetween={30}
                  slidesPerView={1}
                  autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true
                  }}
                  style={{ width: '600px', height: '350px', marginTop:"30px" }}
                  navigation
                  pagination={{ clickable: true }}
                  loop
                >
                  {customers.map((client, index) =>(
                    <SwiperSlide key={index}>
                       <div class="card">
                            <div class="card-header">
                              <img src={client.img} alt="User Photo" />
                              <div class="info">
                                <div class="name">{client.name}</div>
                                <div class="title">{client.course}</div>
                              </div>
                            </div>
                            <div class="card-feedback">
                              {client.review}
                            </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
               </div>
            </section>
          </div>
         </section>
       {/* end review section  */}
       {/* start the our journy to success  */}
         <section className="achevments-section">
            <div className="container">
               <h2 className="customer-hd ">our journey and success</h2> 
               <div className="achevments row  d-flex justify-content-center align-items-center mt-5 ">
                <div className="box-achev col-md-3 col-sm-12 text-center">
                  <div className="achev-icon"><BiHappyBeaming /></div>
                  <div className="achev-num">+4555</div>
                  <div className="achev-text">happy client</div>
                </div>
                <div className="box-achev  col-md-3   col-sm-12 text-center">
                  <div className="achev-icon ">
                  <RiTeamFill />
                  </div>
                  <div className="achev-num">+70</div>
                  <div className="achev-text">team members</div>
                </div>
                <div className="box-achev  col-md-3   col-sm-12 text-center">
                  <div className="achev-icon"><HiComputerDesktop />
                  </div>
                  <div className="achev-num">+1200</div>
                  <div className="achev-text">working Hours</div>
                </div>
                <div className="box-achev col-md-3   col-sm-12 text-center"> 
                  <div className="achev-icon"><BsProjector />
                  </div>
                  <div className="achev-num">+888</div>
                  <div className="achev-text">projects Done</div>
                </div>
               </div>
            </div>
         </section>
       {/* end the our journy to sucssec  */}
       {/* start professional development */}
        <section className="pr-section">
          <div className="container">
          <h2 className="cr-header d-flex justify-content-center align-items-center">Professional Development Journey</h2>
           <div className="journey-box d-flex justify-content-center text-center align-items-center flex-column">
             <div className="jr-stp-box d-flex align-items-center "> 
                <div className="jr-icon"><MdContactPhone /></div>
                <div>
                  <h3>leave your contact</h3>
                  <p>to help us to contact you</p>
                </div>
             </div>
             <div className="jr-stp-box d-flex  align-items-center ">
                <div className="jr-stp-content ">
                  <h3>choose your program</h3>
                  <p>First step in you career it's to choose us</p>
                </div >
                <div className="jr-icon"><IoFootsteps /></div>
             </div>
             <div className="jr-stp-box d-flex  align-items-center "> 
                <div className="jr-icon"><FaRegCreditCard /></div>
                <div>
                  <h3>Pay and Start</h3>
                  <p>to help us to contact you</p>
                </div>
             </div>
             <Link to={"/courses"} className="machinfy-btn text-decoration-none mt-5">More about Support</Link>
           </div>
          </div>
        </section>
       {/* end professional development */}
       {/* start partners*/}
        <section>
          <div className="conntaier">
          <h2 className="customer-hd ">Our Partners</h2> 
           <div className="partners-box d-flex justify-content-center gap-5  align-items-center flex-wrap">
                      {parnters.map((part,index)=>(
                            <div key={index} className="partner">
                              <img src={part.partner} alt="" />
                            </div>
  
                      ))}
           </div> 
          </div>
        </section>
         
       
     </>
    )
}
