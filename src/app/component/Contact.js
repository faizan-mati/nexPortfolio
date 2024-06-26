import { FaUser, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';
import { IoMdContact } from 'react-icons/io';

export default function Contact() {

  return (

    <div className="contactMain">
      <div className="container">
        <div className="row">
          <div className=" d-flex flex-column justify-content-center align-items-center">
            <h1 className="educationHeadingMain">Contact</h1>
          </div>
          <div className="col-lg-6">
            <h1 className="contactHeadingName">Get in Touch</h1>
            <p className="contactPara">{"I am always open to discussing new opportunities and projects, and I look forward to hearing from you. Don't hesitate to reach out if you have any inquiries or just want to say hello! Thank you for visiting my portfolio website, and I hope to connect with you soon!"}</p>
            <div className="icone">
              <div className="row">
                <div className="col-lg-1 col-md-1 col-sm-1 col-2">
                  <FaMapMarkerAlt className="contactIcon" />
                </div>
                <div className="col-lg-11 col-md-3 col-sm-5 col-10 align-items-center">
                  <h5 className="iconhead">Address</h5>
                  <p className="iconpara">Korangi, Karachi</p>
                </div>

                <div className="col-lg-1 col-md-1 col-sm-1 col-2">
                  <FaEnvelope className="contactIcon" /><br />
                </div>
                <div className="col-lg-11 col-md-3 col-sm-5 col-10 align-items-center">
                  <h5 className="iconhead">Email</h5>
                  <p className="iconpara"><a href="mailto:faizanmati@gmail.com" target="_blank">faizanmati@gmail.com</a></p>
                </div>

                <div className="col-lg-1 col-md-1 col-sm-1 col-2">
                  <IoMdContact className="contactIcon" /><br />
                </div>
                <div className="col-lg-11 col-md-3 col-sm-5 col-10 align-items-center">
                  <h5 className="iconhead">Phone</h5>
                  <p className="iconpara">+92 324 3354583</p>
                </div>

              </div>
            </div>

          </div>
          {/* <div className="col-lg-6 col-md-12 col-sm-12  d-flex align-items-center"> */}
            <form className="col-lg-6">
              <div className="row">
                <div className="col-lg-6 col-md-6">
                  <label className="styled-label">Name</label>
                  <input className="form-control" type="text" placeholder="Name" />
                </div>
                <div className="col-lg-6 col-md-6">
                  <label className="styled-label">Email</label>
                  <input className="form-control" type="text" placeholder="Email" />
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <label className="styled-label">Subject</label>
                  <input className="form-control" type="text" placeholder="Subject" />
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <label className="styled-label">Message</label>
                  <textarea className="form-control custom-textarea" placeholder="Message..." />
                </div>
                <div className="col-lg-12">
                  <button className="btn-custom2 mt-3">
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        {/* </div> */}
      </div>
    </div>

  )
}