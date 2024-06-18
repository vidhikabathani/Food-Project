import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <div className='bg-gray'>

            {/* BANNER SECTION  */}
            <section className='banner-bg'>
                <div className="banner-layout">
                    <div className="container">
                        <div id="banner_content">
                            <span className='Greate-vibe fs-1 f-primary'>Welcome</span>
                            <h1 className='fs-1 poppins fw-semibold'>PATO PLACE</h1>
                            <p className='fs-5' id='banner-extra'>A small river named Duden flows by their place and supplies it with the necessary regelialia.  ipsum dolor sit amet, consectetur adipisicing elit. Molestiae assumenda autem sequi labore consequatur quod, river named Duden recusandae place and supplies. </p>
                            <button className='btn btn-transparent'>LOOK MENU</button>
                        </div>
                    </div>
                </div>
            </section>

            {/* CONTACT SECTION  */}
            <section className='py-5 f-white'>
                <div className="container">
                    <div className="row justify-content-between">
                        <div id="contact" className='col-12 col-md-3 py-2 py-md-0'>
                            <h5 className='f-gray fw-bold'>000 (123) 456 7890</h5>
                            <p className='fs-6 f-gray'>A small river named Duden flows by their place and supplies.</p>
                        </div>
                        <div id="contact" className='col-12 col-md-3 py-2 py-md-0'>
                            <h5 className='f-gray fw-bold'>198 West 21th Street</h5>
                            <p className='fs-6 f-gray'>203 Fake St. Mountain View, San Francisco, California, USA</p>
                        </div>
                        <div id="contact" className='col-12 col-md-3 py-2 py-md-0'>
                            <h5 className='f-gray fw-bold'>Open Monday-Friday</h5>
                            <p className='fs-6 f-gray'>8:00am - 9:00pm</p>
                        </div>
                        <div id="contact" className='col-12 col-md-3 py-2 py-md-0'>
                            <p className='fs-6 f-gray'>The countries Vokalia and Consonantia, there live the blind texts.</p>
                            <Link to='/booktable'><button className='btn btn-black'>Book a Table</button></Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* ABOUT SECTION  */}
            <section className='f-white'>
                <div className="container">
                <div  className='row align-items-center'>
                    <div className="col-12 col-md-6 p-5 about-img">
                        <img src="https://preview.colorlib.com/theme/pato/images/our-story-01.jpg.webp" className='w-75 rounded' alt="" />
                    </div>
                    <div className="col-12 col-md-6">
                        <div>
                            <h1 className='Greate-vibe f-primary'>Italian Restaurant</h1>
                            <p className='f-gray fs-6'>On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word "and" and the Little Blind Text should turn around and return to its own, safe country. But nothing the copy said could convince her and so it didn’t take long until a few insidious Copy Writers ambushed her, made her drunk with Longe and Parole and dragged her into their agency, where they abused her for their.</p>
                        </div>
                    </div>
                </div>
                </div>
            </section>

            {/* BACKGROUND SECTION  */}
            <section className='dis-bg p-100'>
                <div className="container text-center">
                    <h2 className='Greate-vibe f-primary fs-1'>Discover</h2>
                    <span className='fs-1 f-white poppins fw-semibold'>PATO PLACE</span>
                </div>
            </section>
        </div>
    )
}

export default Home