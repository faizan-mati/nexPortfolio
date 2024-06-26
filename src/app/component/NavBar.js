'use client';
import { useEffect } from 'react';
import Image from 'next/image';
import toggle from '../image/toggle.png';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function NavBar() {
    useEffect(() => {
        import('bootstrap/dist/js/bootstrap.bundle.min.js')
            .then(() => {
                console.log('Bootstrap JS loaded');
            })
            .catch(err => {
                console.error('Failed to load Bootstrap JS:', err);
            });
    }, []);

    return (
        <nav className="navbar navbar-expand-lg NavBar">
            <div className='container'>
                <a className="brand" href="">PORTFOLIO</a>


                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight" aria-expanded="false" aria-label="Toggle navigation">
                    <Image
                        src={toggle}
                        alt="Toggle"
                        height={35}
                        width={40}
                    />
                </button>
                <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                    <div className="offcanvas-header">
                        <h5 id="offcanvasRightLabel" style={{color:"#FCD34D", fontSize:"30px",fontWeight:"blod"}}>PORTFOLIO</h5>
                        <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>

                    <div className="offcanvas-body justify-content-end align-items-end d-lg-flex">
                        <ul className="navbar-nav mx-auto mx-lg-0">
                            <li className="nav-item active">
                                <a className="nav-link" href="#home">Home</a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link" href="#about">About</a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link" href="#education">Education</a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link" href="#skill">Skill</a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link" href="#project">Project</a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link" href="#contact">Contact</a>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>
        </nav>

    );
}
