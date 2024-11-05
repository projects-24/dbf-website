import React from 'react'
import { PiFacebookLogo, PiInstagramLogo } from 'react-icons/pi'

export default function Footer() {
  return (
    <div>
    <div class="section4  bg-s  padding-20">
      <div class="width-1000-max center">
        <div>
          <div class="row-flex gap central" style={{alignItems:'flex-start'}}>
            <div class="text-bold">Follow Us</div>
            <div></div> 
            <a href="https://web.facebook.com/dbfblocks">
              <div class="dark200 text-dark900 pointer hover-up  central width-40 height-40">
                <PiFacebookLogo className='h4'/>
              </div>
             </a>
           <a href="https://www.instagram.com/bilclinicallabs">
            <div class="dark200 text-dark900 pointer hover-up  central width-40 height-40">
             <PiInstagramLogo className='h4' />
            </div>
           </a>
        
          
          </div>
       
        </div>
        <div class="section2 text-center text-minified uppercase padding-top-40 padding-bottom-40"style={{borderTop:' 0.1rem solid #303030'}} >
          ©2024 DBF - All Rights Reserved | Privacy Policy | Terms of Service
        </div>
      </div>
    </div></div>
  )
}
