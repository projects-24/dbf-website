'use client'
import { useEffect, useState } from "react";
import { PRODUCTS } from "./data/products";
import { _TEAM } from "./data/team";
import Aos from 'aos'
import Animation from "funuicss/ui/aos/AOS" 
import Div from 'funuicss/ui/div/Div'
import Text from 'funuicss/ui/text/Text'
import Grid from 'funuicss/ui/grid/Grid'
import Col from 'funuicss/ui/grid/Col'
import Container from 'funuicss/ui/container/Container'
import Section from 'funuicss/ui/specials/Section'
import Button from 'funuicss/ui/button/Button'
import Input from 'funuicss/ui/input/Input'
import RowFlex from 'funuicss/ui/specials/RowFlex'
import List from 'funuicss/ui/list/List'
import ListItem from 'funuicss/ui/list/Item'
import {FunGet} from 'funuicss/js/Fun'
import Alert from 'funuicss/ui/alert/Alert'
import dynamic from "next/dynamic";
import Nav from "@/components/Nav";
import {PiDiamondsFour, PiSketchLogo, PiUserCheck} from 'react-icons/pi'
import Footer from "@/components/Footer";
import TextUi from "@/ui/Text";
// const { _SENDMAIL } = dynamic(()=>import("./functions/mail") ,{ssr:false})

export default function Home() {
  const [show_tony, setshow_tony] = useState(false)
  const [success, setsuccess] = useState(false)
  const [error, seterror] = useState(false)
  const [errMessage, seterrMessage] = useState('')

  useEffect(() => {
    setTimeout(() => {
      seterror(false)
      setsuccess(false)
    }, 4000);
  
    return () => {
      clearTimeout()
    }
  }, [error , success])
  

  const SendMessage = () => {
    let firstName , lastName, email, message
    firstName = FunGet.val('#firstName').value
    lastName = FunGet.val('#lastName').value
    email = FunGet.val('#email').value
    message = FunGet.val('#message').value
    
    if(firstName && lastName && email && message) {
      // _SENDMAIL(firstName , lastName, email, message)
      // .then(res => console.log(res))
      // .catch(err => {
      //   seterrMessage('An error occurred while sending your message.')
      //   console.log(err)
      //   seterror(true)
      // })
  }else{
     seterrMessage('Please all fields must be entered!')
     seterror(true)
  
  }

}
useEffect(() => {
  Aos.init()  
  }, [])

   return (
   <main>
    {
    success && <Alert fixed='top-right' message="Your message has been submitted successfully." standard type="success" card />
    }
    {
    error && <Alert message={errMessage} standard type="danger" fixed='top-right' card/>
    }
  <Nav />
  <div id="home"></div>
  
<ul className="slideshow">
	<li><span></span></li>
  <li><span>2</span></li>
	<li><span></span></li>
	<li><span></span></li>
	<li><span></span></li>
</ul>
  <div className="home">

    <div className="width-700-max fit center">
    <div className="padding-20" data-aos="fade-left">
      <TextUi
      text="Boost Your Projects with Quality Concrete Blocks!"
      block 
      lineHeight="100%"
      size='big'
      funcss="text-p"
      />
      <div className="text-dark600">
      <div className="margin-top-30">
        <div className="article h5">
          Introducing our state-of-the-art concrete block factory, your one-stop solution for all your construction needs. 
        </div>
      </div>
      <div className="margin-top-20">
        <div className="article h5">
          Danko Block Factory (DBF BLOCKS) was established (2022) based on our absolute dedication to honest business practices, quality products and friendly customer services.  
        </div>
      </div>
      </div>
      <div className="margin-top-30" >
        <div className="row-flex gap">
          <a href="#contact">
          <button className="bg-p raised button">Contact us</button>
          </a>
          <a href="#services">
          <button className="bg-s raised button">Our Products</button>
          </a>
        </div>
      </div>
    </div>
    </div>
  
    </div>


    <div id="services"></div>
  <div className="wrapper dark800 text-dark central" data-aos="fade-up">
  <div className="contain"> 
    
    <div className="header" data-aos="fade-down">
      <h2 className="h2 text-bold text-dark-300 text-center important">
        What we Offer
      </h2>
      <div className="section"></div>
      <div className="article">
        DBF concrete products are made from the finest and quality materials from genuine sources. These include -river sand, cement, quarry dust, 10mm coarse aggregates and clean water from our own mechanized borehole. 
      </div>
    </div>
    <div  className="row">
      {
        PRODUCTS.map((doc , i) => (
          <div key={i} className="col sm-12 md-12 lg-6 padding margin-top-30">
             <Animation>
        <div className='product-image hover-up pointer'>
            <img src={doc.image} alt={doc.name} className='fit' />
        </div>
        <div className="margin-top-20">
            <div className='h6 uppercase text-bold important text-dark'>{doc.name}</div>
        </div>
        <div className="margin-top-10 article text-dark300">
       {doc.description}
        </div>
       </Animation>
          </div>
        ))
      }
    </div>
    
    
    </div>
    </div>


    <div id="about"></div>
  <div className="wrapper ">
    <div className="contain center" >
      <div className="margin-bottom-40" data-aos="fade-up">
        <img src="/images/pics/team.jpg" className="fit darken-4" alt="" />
      </div>
      <div id="why_us"></div>
      <h2 className="text-s text-bold important">History Of DBF Blocks</h2>
      <div className="margin-top-30 margin-bottom-50 article">
        <p>The <span className="active">building industry</span> continues to grow in <span className="active">Ghana</span> and manufactured <span className="active">blocks/bricks</span> play a key role in this sector. There are several methods of moulding blocks for this industry; some of them very labour intensive but less quality of blocks among other shortcomings. In cities and other urban areas, many developers now rely heavily on block manufacturers to complete their building projects. In the upper west region, the labour-intensive form of block-making is still the norm.</p>
  
  <p><span className="active">Danku Block Factory</span> (<span className="active">DBF BLOCKS</span>) was established to provide not only quality blocks but also specializes in the manufacturing of high throughput <span className="active">building concrete</span>, <span className="active">solid blocks</span>, <span className="active">hollow blocks</span>, <span className="active">deco blocks</span> and <span className="active">pavement blocks</span> for individuals, builders associations, housing developers, government agencies, and construction workers.</p>
  
  <p><span className="active">DBF</span> is a subsidiary of <span className="active">Bil Group of companies</span> founded by <span className="active">Dr Tony Basingnaa</span>, an astute business leader of ethical standards.</p>
  
  <p><span className="active">DBF</span> is strategically located at <span className="active">Danko</span>, a suburb of <span className="active">Wa, Upper West region</span> - in a vast land to provide enough space for blocks, other materials and easy vehicular movement.</p>
  
  <p>Demand for cement blocks has risen tremendously due to the increase in demand for them in the <span className="active">housing and construction industry</span>, government and multi-national contractors for building purposes.</p>
  
  <p>Modern construction requires quality cement concrete blocks (<span className="active">Hollow & Solid</span>) and well-design pavement blocks to enhance the beauty and durability of such structures; <span className="active">commercial office complexes</span>, <span className="active">residential accommodation</span>, and <span className="active">industrial building constructions</span>.</p>
  
  <p><span className="active">DBF</span> will set a reputation for being able to deliver <span className="active">cost-effective</span> and <span className="active">innovative solutions</span> to meet a variety of requirements. We recognize the constantly evolving nature of the industry. To this end, we set a <span className="active">Research and Development (R&D)</span> department to continuously focus on <span className="active">quality</span> and <span className="active">innovation</span> to update the latest trend in the industry so that we can give the best quality blocks to our clienteles.</p>
  
  <p><span className="active">DBF</span> has acquired a reliable and durable automated <span className="active">block making equipment</span> for the successful operation of the business. The quality of any product depends on skillful and competent human resource. <span className="active">DBF BLOCKS</span> has employed well trained and skilled professionals to ensure we produce <span className="active">concrete blocks</span> with the highest quality that dries quickly for commercial production.</p>
  
  <p><span className="active">Wa</span>, the <span className="active">Upper West regional capital</span> is a fast-growing municipality and requires new residential accommodations, offices and other structures. <span className="active">DBF BLOCKS</span> will manufacture excellent quality products such as <span className="active">Solid Blocks</span>, <span className="active">Hollow Blocks</span>, <span className="active">Paver Blocks</span> and <span className="active">Deco blocks</span> etc of different sizes to meet the needs of our customers in every field.</p>
  
  <p>Production is fully automated and well organized. <span className="active">DBF BLOCKS</span> provides superior quality product, timely delivery with competitive price. In all products we will make use of high-grade raw material, our products promise to have <span className="active">high compressive strength</span>, more resistance to weather, super <span className="active">thermal insulation</span>, a fine finish, and a secure structure.</p>
      </div>

      <div >
        <div className="row  text-center central" style={{alignItems:'flex-start'}}>
          <div className="col sm-12 lg-4 md-4 padding">
            <div data-aos="fade-right" className="border padding">
              <PiSketchLogo size={'5rem'} className="text-p" />
              <div className="section"></div>
              <h6 className="text-bold uppercase">Trust</h6>
              <p className="article text-minified">
                DBF Trust is dedicated to delivering high-quality, innovative, and cost-effective block manufacturing solutions to meet the diverse needs of the construction industry.
              </p>
            </div>
          </div>
          <div className="col sm-12 lg-4 md-4 padding">
            <div data-aos="fade-up" className="border padding">
              <PiDiamondsFour size={'5rem'} className="text-p" />
              <div className="section"></div>
              <h6 className="text-bold uppercase">Integrity</h6>
              <p className="article text-minified">
                At DBF Trust, integrity forms the foundation of everything we do. We believe in conducting business with honesty, transparency, and respect for all our stakeholders.
              </p>
            </div>
          </div>
          <div className="col sm-12 lg-4 md-4 padding">
            <div data-aos="fade-left" className="border padding">
              <i className="ph ph-user-check  text-jumbo text-p"></i>
              <PiUserCheck size={'5rem'} className="text-p" />
              <div className="section"></div>
              <h6 className="text-bold uppercase">Competency</h6>
              <p className="article text-minified">
                Competence is at the core of DBF Trust&apos;s success. Our team comprises highly skilled professionals who are experts in block manufacturing and construction solutions. 
              </p>
            </div>
          </div>
        </div>
      </div>
  
      <div  className="row central margin-top-60">
      <div className="col sm-12 md-12 lg-7 padding-30 margin-top-30">
      <Animation>
    <TextUi
    text="High-Quality Cement Blocks for Modern Construction"
    heading="h2"
    bold
    color='dark'
    />
    <TextUi
    text="Enhance the beauty and durability of commercial, residential, and industrial structures with our premium hollow and solid concrete blocks and expertly designed pavement solutions."
    color='dark200'
    article
    />

    
       </Animation>
          </div>
      <div className="col sm-12 md-12 lg-5 padding margin-top-30">
      <Animation>
        <img src="/images/pics/7.jpg" className="fit" alt="" />
       </Animation>
          </div>

          <div className="col sm-12 md-12 lg-5 padding margin-top-30">
      <Animation>
        <img src="/images/pics/6.jpg" className="fit" alt="" />
       </Animation>
          </div>
      <div className="col sm-12 md-12 lg-7 padding-30 margin-top-30">
      <Animation>
    <TextUi
    text="Quality Concrete Production with Advanced Automation"
    heading="h2"
    bold
    color='dark'
    />
    <TextUi
    text="Equipped with state-of-the-art automated machinery and skilled professionals, DBF produces high-quality, fast-drying concrete blocks for reliable commercial use."
    color='dark200'
    article
    />

    
       </Animation>
          </div>
   
      <div className="col sm-12 md-12 lg-7 padding-30 margin-top-30">
      <Animation>
    <TextUi
    text="Cost-Effective Solutions"
    heading="h2"
    bold
    color='dark'
    />
    <TextUi
    text="DBF combines advanced technology with efficient production methods to offer durable, high-quality concrete blocks at competitive prices. By investing in state-of-the-art equipment and a skilled workforce, we ensure that our blocks are not only robust and consistent but also affordable"
    color='dark200'
    article
    />

    
       </Animation>
          </div>
      <div className="col sm-12 md-12 lg-5 padding margin-top-30">
      <Animation>
        <img src="/images/pics/5.jpg" className="fit" alt="" />
       </Animation>
          </div>
    </div>
      </div>
  </div>


 <Animation>
 <div className="wrapper dark800 text-dark">
  <div className="contain">
    <div id="our_team"></div>
    <div  data-aos="fade-up">
        <div className="header" data-aos="fade-down">
          <h2 className="h2 text-bold text-dark-300 text-center important">
            Meet Our Team
          </h2>
          <div className="section"></div>
          <div>
            Introducing the talented team driving <span className="active"> DBF.</span>
          </div>
        </div>
        <div className="width-900-max center">
          <div className="section4 padding">
            <div data-aos="fade-up">
              <img src="/images/team/ceo.jpg" className="width-300 section" alt="" />
              <div className="text-bold h2 uppercase">Dr Tony Basignaa</div>
              <div className="text-bold h6 uppercase text-p">Chief Executive Officer</div>
            </div>
            <div className="section2"></div>
            <p className="article">
              <p><span className="active">Dr. Basingnaa</span> is a <span className="active">Transformational</span>/<span className="active">Servant leader</span> with a flair for executing projects across a wide range of business and management disciplines. Leading the <span className="active">Bil Group</span> (Diagnostic services, Sanitation, Manufacturing, & food industry), <span className="active">Tony</span> has made a positive impact among individuals and society. As a <span className="active">servant leader</span> of the team, Tony is responsible for setting and communicating the <span className="active">mission</span>, <span className="active">vision</span>, and <span className="active">goals</span> of each enterprise, including the long-term strategic direction of the group.</p>
            </p>
            {
              show_tony &&
              <div className="article">
              <p>Offering a solid background in technical and business qualifications, including an <span className="active">MBA</span>, and with good communication and interpersonal skills, <span className="active">Tony</span> is an <span className="active">“ALL-ROUNDER”</span>.</p>
<p>A member of the <span className="active">Rotary club of WA</span>, philanthropic activities, including supporting the less privileged in society, are dear to <span className="active">Tony</span>.</p>
<p>Constantly striving to acquire knowledge and skills, <span className="active">Tony</span> possesses, in addition to a <span className="active">Diploma</span> and <span className="active">Bachelor’s degree</span>, three <span className="active">Master’s degrees</span>—MSc-Microbiology (UG, Legon), MPH-CUC/UG-Legon, MBA-ABS/KNUST, and a <span className="active">Doctorate degree</span> in Medical Laboratory Science-UDS-Tamale.</p>
            </div>
            }
            <div className="section">
              <button onClick={() => setshow_tony(!show_tony)} className="button dark400">{show_tony ? "Read Less" : "Read More"}</button>
            </div>
          </div>
            <div className="row">
              {
                _TEAM.map((doc , i) => (
                  <div key={i} className="col sm-6 md-6 lg-6 padding margin-top-30">
                      <Animation>
                      <div>
                          <img src={doc.profile} alt={doc.name} className='width-300' />
                      </div>
                      <div className="team-member-info">
                          <div className='h6 text-bold uppercase'>{doc.name}</div>
                          <div className='text-dark400'>{doc.position}</div>
                      </div>
                      </Animation>
                      </div>
                ))
              }
            </div>
        </div>
        </div>
    </div>
  </div>
 </Animation>


  <div className="wrapper">
  <div className="contain">
    <div id="contact"></div>
    <div data-aos="fade-up">
      <div>
        <div className="header" data-aos="fade-down">
          <h2 className="h2 text-bold text-dark-300 text-center important">
            Place your Order
          </h2>
          <div className="section"></div>
          <div className="article">
            Contact us today to discuss your construction needs and explore how our concrete blocks can enhance the success of your projects. Together, let&apos;s build a solid foundation for a brighter future.
          </div>
        </div>
        <div className="section4">
          <div className="row" style={{alignItems:'flex-start'}}>
            <div className="col sm-12 md-6 lg-6 padding" data-aos="fade-up">
           <div className="section padding border">
            <h6 className="text-bold important margin-bottom-10 text-minified uppercase">Digital Address:</h6>
            <h5>XW-0277-5539, Beans Street</h5>
           </div>
        
           <div className="section padding border">
            <h6 className="text-bold important margin-bottom-10 text-minified uppercase">Location:</h6>
            <div>DBF PLACE, DANKU </div>
            P. O.BOX 147, Wa, UWR
           </div>
            </div>
            <div className="col sm-12 md-6 lg-6 padding">
              <h4>For Quick Delivery, Contact Hotline</h4>
              <section />
              <div className="border padding" data-aos="fade-up">
                <h2 className="h2  text-p" >
                  0201669966
                </h2>
               
              </div>
              <div className="section padding border">
            <h6 className="text-bold important margin-bottom-10 text-minified uppercase">Email:</h6>
            <h5>info@dbfconcreteblocks.com</h5>
           </div>
           
            </div>
         
        
          </div>
        </div>
        </div>
  
        </div>


       <Animation>
       <Div margin="5rem 0" >
    <Grid>
        <Col sm={12} md={5} lg={5} funcss="padding">
        <Text
        text="Order / Send a message"
        heading='h2'
        block
        />
        <Section />
        <Text
        text="Your information is kept private and not shared anywhere else."
        block
        color="dark400"
        />
        <Section />
        <List gap={0.3}>
            <ListItem funcss='text-bold'>Your can:</ListItem>
            <ListItem funcss='text-dark300'>1. Request for assistance</ListItem>
            <ListItem funcss='text-dark300'>2. Place an order</ListItem>
            <ListItem funcss='text-dark300'>3. Talk to customer service</ListItem>
            <ListItem funcss='text-dark300'>4. Place a complain</ListItem>
            </List>

        </Col>
        <Col sm={12} md={7} lg={7} funcss="padding">
    <Animation>
    <Section gap={1}>
      <RowFlex gap={2}>
        <Col >
        <Text text="First Name" block bold size="small" color="p" funcss="margin-bottom-10" />
        <Input id='firstName' fullWidth bordered />
        </Col>
        <Col  > 
        <Text text="Last Name" block bold size="small" color="p" funcss="margin-bottom-10" />
        <Input id='lastName' fullWidth bordered />
        </Col>
      </RowFlex>
      </Section>
      <Section gap={1}>
        <Text text="Email" block bold size="small" color="p" funcss="margin-bottom-10" />
        <Input id='email' type="email" fullWidth bordered />
      </Section>
      <Section gap={1}>
        <Text text="Message" block bold size="small" color="p" funcss="margin-bottom-10" />
        <Input id='message' multiline rows={3} fullWidth bordered />
      </Section>
      <Section gap={1}>
       <Button
       text="Submit"
       raised 
       bg="bg-p"
       onClick = {() => SendMessage()}
       />
      </Section>
    </Animation>
        </Col>
    </Grid>
</Div>
       </Animation>
  </div>
</div>

<Footer />

   </main>
  );
}

