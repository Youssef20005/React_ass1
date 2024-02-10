import React from 'react'
import '../Contacts/contact.css'
export default function Contact() {
  return (
    <>
    <div className="contact">
        <div className="container">
            <div className="row text-center p-2">
                <h2 className='text-uppercase mt-5'>contact section</h2>
                <div className="line-star d-flex justify-content-center align-items-center">
                    <div className="start-line me-3">

                    </div>
                    <div className="star">
                        <i className="fas fa-star"></i>
                    </div>
                    <div className="start-line ms-3">

</div>
                </div>
            <form>
  <div className="mb-4 col-6 offset-3 text-start p-5 ">
  <label htmlFor="exampleFormControlInput1" className="form-label d-none ">User Name</label>
    <input type="text" className="form-control border-0 border-bottom m-3" id='exampleFormControlInput1' placeholder="userName" />
  
    <label htmlFor="exampleFormControlInput2" className="form-label d-none ">User Age</label>
    <input type="text" className="form-control border-0 border-bottom py-3  m-3" id='exampleFormControlInput2' placeholder="userAge" />

    <label htmlFor="exampleFormControlInput3" className="form-label d-none ">User Name</label>
    <input type="email" className="form-control border-0 border-bottom py-3  m-3" id='exampleFormControlInput3' placeholder="userEmail" />


    <label htmlFor="exampleFormControlInput4" className="form-label d-none ">User Password</label>
    <input type="password" className="form-control border-0 border-bottom py-3 m-3" id='exampleFormControlInput4' placeholder="userPassword" />
  <button className='btn btn-primary m-3'>Send Message</button>
  </div>
</form>

            </div>
        </div>
    </div>
    
    </>
  )
}
