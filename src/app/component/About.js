import Image from 'next/image';
import myPic from '../image/myPic.png';

export default function About() {
  return (
    <div className="AboutMain">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 d-flex flex-column justify-content-end align-items-center" style={{ zIndex: "10" }}>
            <Image src={myPic} alt='Faizan Mati' className='img-fluid' />
          </div>
          <div className="col-lg-8 d-flex flex-column justify-content-end">
            <h1 className="aboutHeading">ABOUT</h1>
            <div className="aboutMy">
              <h5 className="aboutPara">{"Im a passionate beginner in full stack and MERN stack development, with a strong foundation in HTML, CSS, and JavaScript. Currently focusing on MongoDB, Express.js, React.js, and Node.js, I aim to craft responsive web applications. Dedicated to continuous improvement, I embrace challenges that enhance my skills. Eager to collaborate on innovative projects, I value teamwork and open communication for project success. Committed to lifelong learning through online courses and coding bootcamps, I stay updated with industry trends. My goal is to contribute to impactful solutions in technology, mastering front-end design and back-end logic alike."}</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
