'use client'
import React from 'react';
import Image from 'next/image';
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import myPic from '../image/myPic.png';

export default function HomeCom() {
  const downloadPdf = async () => {
    try {
      // Fetch the existing PDF from the public directory
      const existingPdfBytes = await fetch('/Resume.pdf').then(res => res.arrayBuffer());

      // Create a blob from the PDF bytes
      const blob = new Blob([existingPdfBytes], { type: 'application/pdf' });
      const url = window.URL.createObjectURL(blob);

      // Create a link element, set its href to the blob URL, and trigger a download
      const a = document.createElement('a');
      a.href = url;
      a.download = 'Faizan_Mati_CV.pdf';
      document.body.appendChild(a);
      a.click();
      a.remove();
    } catch (error) {
      console.error('Error downloading PDF:', error);
    }
  };

  return (
    <div className="container">
      <div className="row homeRow">
        <div className="col-lg-6 d-flex flex-column justify-content-center order-lg-1 order-2">
          <div className='homeMain'>
            <h1 className="homeHeading">Hi! I'm Faizan Mati</h1>
            <h1 className="homeHeading">"{Full/MERN Stack Developer"}</h1>
            <h5 className="homePara">{"Passionate beginner in full stack and MERN development, focused on crafting responsive web applications."}</h5>
            <br />
            <div className="homeBtn">
              <a href="https://www.linkedin.com/in/faizan-mati/" target="_blank" rel="noopener noreferrer">
                <button className="btn-custom">Hire Me</button>
              </a>

              <button className="btn-custom1" onClick={downloadPdf}>CV Download</button>

            </div>
            <br />
            <div className="homeBtn">
              <a href="https://www.facebook.com/profile.php?id=100079673637881" target="_blank" rel="noopener noreferrer">
                <FaFacebook className='homeIcon' />
              </a>
              <a href="https://www.instagram.com/faizan_mati/" target="_blank" rel="noopener noreferrer">
                <FaInstagram className='homeIcon' />
              </a>
              <a href="https://github.com/faizan-mati" target="_blank" rel="noopener noreferrer">
                <FaGithub className='homeIcon' />
              </a>
              <a href="https://www.linkedin.com/in/faizan-mati/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className='homeIcon' />
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-6 d-flex flex-column justify-content-end align-items-center order-lg-2 order-1">
          <Image src={myPic} alt='Faizan Mati' className='img-fluid' />
        </div>
      </div>
    </div>
  );
}
