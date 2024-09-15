import React from 'react'
import '../../Css_Folder/Footer.css'
import { NavLink } from 'react-router-dom';

const Fotter = () => {
  return (
    <>
      <div >
        <footer class="site-footer">
          <div class="container">
            <div class="row">
              <div class="col-sm-12 col-md-6" style={{ display: 'flex' }}>
                <div>

                </div>
                <div>
                  <h5 >
                    <img

                      src="/SRPMLOGO.png"
                      alt=""
                      height="30px"
                      style={{ borderRadius: '100%', marginRight:"8px" }}
                    />
                    SRPM</h5>

                  <p class="text-justify "  >SRPM wants that no one will be illiterate, everyone should know the rights of education. They should be able to earn for their livelihood. The government is doing a good job for them, so people should be aware of that.
                  SRPM wants that, no one will be illiterate, everyone should know the rights of education.
                  They should be able to earn for their livelihood.
                  </p>
                </div>
              </div>

              <div class="col-xs-6 col-md-3">


              </div>

              <div class="col-xs-6 col-md-3">
                <h6> Links</h6>
                <ul class="footer-links">
                  <li> <NavLink to='/about'>About Us</NavLink></li>
                  <li><NavLink to='/contact'>Contact Us</NavLink></li>
                  <li><NavLink to='/work'> Our Work</NavLink></li>
                  <li><NavLink to='/awareness'>Awareness</NavLink></li>
                  <li><NavLink to='/finishedwork'>Finished Work</NavLink></li>
                </ul>
              </div>
            </div>

          </div>
          <div class="container">
            <div class="row">

              <div class="col-md-8 col-sm-6 col-xs-12">
                <p class="copyright-text">Copyright &copy; 2024 All Rights Reserved by {''}
                  <NavLink to ='/'>  SRPM   </NavLink> 
                </p>
              </div>

              {/* <div class="col-md-4 col-sm-6 col-xs-12">
            <ul class="social-icons">
              <li><a class="facebook" href="#"><i class="fa fa-facebook"></i></a></li>
              <li><a class="twitter" href="#"><i class="fa fa-twitter"></i></a></li>
              <li><a class="dribbble" href="#"><i class="fa fa-dribbble"></i></a></li>
              <li><a class="linkedin" href="#"><i class="fa fa-linkedin"></i></a></li>   
            </ul>
          </div> */}
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}

export default Fotter;