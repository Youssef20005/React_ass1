import React from 'react'
import "../About/about.css"
export default function About() {
  return (
   <>
   <div className="about">
    <div className="container py-5">
      <div className="row text-center">
      <h2 className='text-uppercase mt-5'>about component</h2>
                <div className="line-star d-flex justify-content-center align-items-center">
                    <div className="start-line me-3">

                    </div>
                    <div className="star">
                        <i className="fas fa-star text-white"></i>
                    </div>
                    <div className="start-line ms-3">
                   

</div>

                </div>
                <div className="col-md-6 text-start">
                        <p className='text-white'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                      </div>
                      <div className="col-md-6 text-start">
                        <p className='text-white'> Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                      </div>
      </div>
    </div>
   </div>
   
   </>
  )
}
