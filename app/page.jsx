'use client'
import { useState } from "react";
import { PRODUCTS } from "./data/products";
import { _TEAM } from "./data/team";


export default function Home() {
  const [show_tony, setshow_tony] = useState(false)
   return (
   <main>
   <div class="navtop dark300">
    <div class="text-bold">
      020 373 6363
    </div>
    <div class="hline"></div>
    <div >
      <a href="mailto:info@dbfconcreteblocks.com"  class="text-white">info@dbfconcreteblocks.com</a>
    </div>
  </div>
  <div class="nav_bar card">
     <a href="#home"> <img src="/images/logo.jpg" class="height-40" alt="" /></a>
  <div class="hide-small">
    <div class="row-flex gap">
      <a href="#home" class="nav_link text-dark400  text-minified">Home</a>
      <a href="#services" class="nav_link text-dark400  text-minified">Services</a>
      <a href="#about" class="nav_link text-dark400  text-minified">About</a>
      <a href="#our_team" class="nav_link text-dark400  text-minified">Our Team</a>
    </div>
  </div>
    <div>
     <div class="row-flex gap">
      <a href="#why_us" class="nav_link text-dark400  text-small text-bold important">WHY DBF?</a>
      <a href="#contact" class="nav_link text-dark400  text-small text-bold important" >
      <div class="iconic">  <i class="ph ph-phone"></i> CALL US</div>
      </a>
     </div>
    </div>
  </div>

  <div id="home"></div>
  <div class="home row ">
    <div class="col sm-12 md-6 lg-6 padding">
      <video src="/assets/video/main.mp4" loop data-aos="fade-right" class="fit hide-small" muted autoplay></video>
      <video src="/assets/video/main.mp4"  class="fit show-small" controls  ></video>
    </div>
    <div class="col sm-12 md-6 lg-6 padding-20" data-aos="fade-left">
      <div class="h1 text-p text-bold">Enhance Your Construction Projects with High-Quality Concrete Blocks! </div>
      <div class="margin-top-30">
        <div class="article">
          Introducing our state-of-the-art concrete block factory, your one-stop solution for all your construction needs. 
        </div>
      </div>
      <div class="margin-top-20">
        <div class="article">
          Danko Block Factory (DBF BLOCKS) was established (2022) based on our absolute dedication to honest business practices, quality products and friendly customer services.  
        </div>
      </div>
      <div class="margin-top-30" >
        <div class="row-flex gap">
          <a href="#contact">
          <button class="bg-p raised button">Contact us</button>
          </a>
          <a href="#services">
          <button class="bg-s raised button">Our Products</button>
          </a>
        </div>
      </div>
    </div>
    </div>


    <div id="services"></div>
  <div class="wrapper dark800 text-dark central" data-aos="fade-up">
  <div class="contain"> 
    
    <div class="header" data-aos="fade-down">
      <h2 class="h2 text-bold text-dark-300 text-center important">
        What we Offer
      </h2>
      <div class="section"></div>
      <div class="article">
        DBF concrete products are made from the finest and quality materials from genuine sources. These include -river sand, cement, quarry dust, 10mm coarse aggregates and clean water from our own mechanized borehole. 
      </div>
    </div>
    <div  class="row">
      {
        PRODUCTS.map((doc , i) => (
          <div key={i} className="col sm-12 md-12 lg-6 padding margin-top-30">
             <div data-aos="">
        <div class='product-image hover-up pointer'>
            <img src={doc.image} alt={doc.name} class='fit' />
        </div>
        <div class="margin-top-20">
            <div class='h6 uppercase text-bold important text-dark'>{doc.name}</div>
        </div>
        <div class="margin-top-10 article text-dark300">
       {doc.description}
        </div>
       </div>
          </div>
        ))
      }
    </div>
    
    
    </div>
    </div>


    <div id="about"></div>
  <div class="wrapper">
    <div class="contain center" >
      <div class="margin-bottom-40" data-aos="fade-up">
        <img src="/images/us.jpg" class="fit" alt="" />
      </div>
      <div id="why_us"></div>
      <h2 class="text-s text-bold important">History Of DBF Blocks</h2>
      <div class="margin-top-30 margin-bottom-50 article">
        <p>The <span class="active">building industry</span> continues to grow in <span class="active">Ghana</span> and manufactured <span class="active">blocks/bricks</span> play a key role in this sector. There are several methods of moulding blocks for this industry; some of them very labour intensive but less quality of blocks among other shortcomings. In cities and other urban areas, many developers now rely heavily on block manufacturers to complete their building projects. In the upper west region, the labour-intensive form of block-making is still the norm.</p>
  
  <p><span class="active">Danku Block Factory</span> (<span class="active">DBF BLOCKS</span>) was established to provide not only quality blocks but also specializes in the manufacturing of high throughput <span class="active">building concrete</span>, <span class="active">solid blocks</span>, <span class="active">hollow blocks</span>, <span class="active">deco blocks</span> and <span class="active">pavement blocks</span> for individuals, builders associations, housing developers, government agencies, and construction workers.</p>
  
  <p><span class="active">DBF</span> is a subsidiary of <span class="active">Bil Group of companies</span> founded by <span class="active">Dr Tony Basingnaa</span>, an astute business leader of ethical standards.</p>
  
  <p><span class="active">DBF</span> is strategically located at <span class="active">Danko</span>, a suburb of <span class="active">Wa, Upper West region</span> - in a vast land to provide enough space for blocks, other materials and easy vehicular movement.</p>
  
  <p>Demand for cement blocks has risen tremendously due to the increase in demand for them in the <span class="active">housing and construction industry</span>, government and multi-national contractors for building purposes.</p>
  
  <p>Modern construction requires quality cement concrete blocks (<span class="active">Hollow & Solid</span>) and well-design pavement blocks to enhance the beauty and durability of such structures; <span class="active">commercial office complexes</span>, <span class="active">residential accommodation</span>, and <span class="active">industrial building constructions</span>.</p>
  
  <p><span class="active">DBF</span> will set a reputation for being able to deliver <span class="active">cost-effective</span> and <span class="active">innovative solutions</span> to meet a variety of requirements. We recognize the constantly evolving nature of the industry. To this end, we set a <span class="active">Research and Development (R&D)</span> department to continuously focus on <span class="active">quality</span> and <span class="active">innovation</span> to update the latest trend in the industry so that we can give the best quality blocks to our clienteles.</p>
  
  <p><span class="active">DBF</span> has acquired a reliable and durable automated <span class="active">block making equipment</span> for the successful operation of the business. The quality of any product depends on skillful and competent human resource. <span class="active">DBF BLOCKS</span> has employed well trained and skilled professionals to ensure we produce <span class="active">concrete blocks</span> with the highest quality that dries quickly for commercial production.</p>
  
  <p><span class="active">Wa</span>, the <span class="active">Upper West regional capital</span> is a fast-growing municipality and requires new residential accommodations, offices and other structures. <span class="active">DBF BLOCKS</span> will manufacture excellent quality products such as <span class="active">Solid Blocks</span>, <span class="active">Hollow Blocks</span>, <span class="active">Paver Blocks</span> and <span class="active">Deco blocks</span> etc of different sizes to meet the needs of our customers in every field.</p>
  
  <p>Production is fully automated and well organized. <span class="active">DBF BLOCKS</span> provides superior quality product, timely delivery with competitive price. In all products we will make use of high-grade raw material, our products promise to have <span class="active">high compressive strength</span>, more resistance to weather, super <span class="active">thermal insulation</span>, a fine finish, and a secure structure.</p>
      </div>

      <div >
        <div class="row  text-center central" style={{alignItems:'flex-start'}}>
          <div class="col sm-12 lg-4 md-4 padding">
            <div data-aos="fade-right" class="border padding">
              <i class="ph ph-sketch-logo text-jumbo text-p"></i>
              <div class="section"></div>
              <h6 class="text-bold uppercase">Trust</h6>
              <p class="article text-minified">
                DBF Trust is dedicated to delivering high-quality, innovative, and cost-effective block manufacturing solutions to meet the diverse needs of the construction industry.
              </p>
            </div>
          </div>
          <div class="col sm-12 lg-4 md-4 padding">
            <div data-aos="fade-up" class="border padding">
              <i class="ph ph-diamonds-four  text-jumbo text-p"></i>
              <div class="section"></div>
              <h6 class="text-bold uppercase">Integrity</h6>
              <p class="article text-minified">
                At DBF Trust, integrity forms the foundation of everything we do. We believe in conducting business with honesty, transparency, and respect for all our stakeholders.
              </p>
            </div>
          </div>
          <div class="col sm-12 lg-4 md-4 padding">
            <div data-aos="fade-left" class="border padding">
              <i class="ph ph-user-check  text-jumbo text-p"></i>
              <div class="section"></div>
              <h6 class="text-bold uppercase">Competency</h6>
              <p class="article text-minified">
                Competence is at the core of DBF Trust&apos;s success. Our team comprises highly skilled professionals who are experts in block manufacturing and construction solutions. 
              </p>
            </div>
          </div>
        </div>
      </div>
  
      
      </div>
  </div>


  <div class="wrapper dark800 text-dark">
  <div class="contain">
    <div id="our_team"></div>
    <div  data-aos="fade-up">
        <div class="header" data-aos="fade-down">
          <h2 class="h2 text-bold text-dark-300 text-center important">
            Meet Our Team
          </h2>
          <div class="section"></div>
          <div>
            Introducing the talented team driving <span class="active"> DBF.</span>
          </div>
        </div>
        <div class="width-900-max center">
          <div class="section4 padding">
            <div data-aos="fade-up">
              <img src="/assets/images/team/ceo.jpg" class="width-300 section" alt="" />
              <div class="text-bold h2 uppercase">Dr Tony Basignaa</div>
              <div class="text-bold h6 uppercase text-p">Chief Executive Officer</div>
            </div>
            <div class="section2"></div>
            <p class="article">
              <p><span class="active">Dr. Basingnaa</span> is a <span class="active">Transformational</span>/<span class="active">Servant leader</span> with a flair for executing projects across a wide range of business and management disciplines. Leading the <span class="active">Bil Group</span> (Diagnostic services, Sanitation, Manufacturing, & food industry), <span class="active">Tony</span> has made a positive impact among individuals and society. As a <span class="active">servant leader</span> of the team, Tony is responsible for setting and communicating the <span class="active">mission</span>, <span class="active">vision</span>, and <span class="active">goals</span> of each enterprise, including the long-term strategic direction of the group.</p>
            </p>
            {
              show_tony &&
              <div className="article">
              <p>Offering a solid background in technical and business qualifications, including an <span class="active">MBA</span>, and with good communication and interpersonal skills, <span class="active">Tony</span> is an <span class="active">“ALL-ROUNDER”</span>.</p>
<p>A member of the <span class="active">Rotary club of WA</span>, philanthropic activities, including supporting the less privileged in society, are dear to <span class="active">Tony</span>.</p>
<p>Constantly striving to acquire knowledge and skills, <span class="active">Tony</span> possesses, in addition to a <span class="active">Diploma</span> and <span class="active">Bachelor’s degree</span>, three <span class="active">Master’s degrees</span>—MSc-Microbiology (UG, Legon), MPH-CUC/UG-Legon, MBA-ABS/KNUST, and a <span class="active">Doctorate degree</span> in Medical Laboratory Science-UDS-Tamale.</p>
            </div>
            }
            <div class="section">
              <button onClick={() => setshow_tony(!show_tony)} class="button dark400">{show_tony ? "Read Less" : "Read More"}</button>
            </div>
          </div>
            <div class="row">
              {
                _TEAM.map((doc , i) => (
                  <div key={i} className="col sm-6 md-6 lg-6 padding margin-top-30">
                      <div>
                          <img src={doc.profile} alt={doc.name} class='width-300' />
                      </div>
                      <div class="team-member-info">
                          <div class='h6 text-bold uppercase'>{doc.name}</div>
                          <div class='text-dark400'>{doc.position}</div>
                      </div>
                      </div>
                ))
              }
            </div>
        </div>
        </div>
    </div>
  </div>


  <div class="wrapper">
  <div class="contain">
    <div id="contact"></div>
    <div data-aos="fade-up">
      <div>
        <div class="header" data-aos="fade-down">
          <h2 class="h2 text-bold text-dark-300 text-center important">
            Place your Order
          </h2>
          <div class="section"></div>
          <div class="article">
            Contact us today to discuss your construction needs and explore how our concrete blocks can enhance the success of your projects. Together, let&apos;s build a solid foundation for a brighter future.
          </div>
        </div>
        <div class="section4">
          <div class="row" style={{alignItems:'flex-start'}}>
            <div class="col sm-12 md-6 lg-6 padding" data-aos="fade-up">
           <div class="section padding border">
            <h6 class="text-bold important margin-bottom-10 text-minified uppercase">Digital Address:</h6>
            <h5>XW-0277-5539, Beans Street</h5>
           </div>
           <div class="section padding border">
            <h6 class="text-bold important margin-bottom-10 text-minified uppercase">Email:</h6>
            <h5>info@dbfconcreteblocks.com</h5>
           </div>
           <div class="section padding border">
            <h6 class="text-bold important margin-bottom-10 text-minified uppercase">Location:</h6>
            <div>DBF PLACE, DANKU </div>
            P. O.BOX 147, Wa, UWR
           </div>
            </div>
            <div class="col sm-12 md-6 lg-6 padding">
              <h4>For Quick Delivery, Contact Hotline</h4>
              <section />
              <div class="border padding" data-aos="fade-up">
                <h2 class="h2  text-p" >
                  0201669966
                </h2>
                <h2 class=" h2  text-p" >
                  0203736363
                </h2>
                <h2 class=" h2 text-p">
                  0249200292
                </h2>
              </div>
           
            </div>
         
        
          </div>
        </div>
        </div>
  
        </div>
  </div>
</div>

<div class="section4  bg-s  padding-20">
  <div class="width-1000-max center">
    <div>
      <div class="row-flex gap central" style={{alignItems:'flex-start'}}>
        <div class="text-bold">Follow Us</div>
        <div></div> 
        <a href="https://web.facebook.com/dbfblocks">
          <div class="dark200 text-dark900 pointer hover-up  central width-40 height-40">
            <i class="ph ph-facebook-logo h4"></i>
          </div>
         </a>
       <a href="https://www.instagram.com/bilclinicallabs">
        <div class="dark200 text-dark900 pointer hover-up  central width-40 height-40">
          <i class="ph ph-instagram-logo h4"></i>
        </div>
       </a>
    
      
      </div>
   
    </div>
    <div class="section2 text-center text-minified uppercase padding-top-40 padding-bottom-40"style={{borderTop:' 0.1rem solid #303030'}} >
      ©2024 DBF - All Rights Reserved | Privacy Policy | Terms of Service
    </div>
  </div>
</div>

   </main>
  );
}
