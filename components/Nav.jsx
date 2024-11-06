import React from 'react'

export default function Nav() {
  return (
    <div> <div class="navtop dark100">
    <div >
      Call or WhatsApp: <span className="text-bold">0201669966</span>
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
</div>
  )
}
