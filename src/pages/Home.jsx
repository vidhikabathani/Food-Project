import React from 'react'

function Home() {
    return (
        <div>

            {/* BANNER SECTION  */}
            <section className='banner-bg'>
                <div className="banner-layout">
                    <div className="container">
                        <div id="banner_content">
                            <span className='Greate-vibe fs-1 f-primary'>Welcome</span>
                            <h1 className='fs-1'>THE BEST COFFEE TESTING <br /> EXPERIENCE</h1>
                            <p className='fs-4'>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                            <button className='btn btn-p'>Order Now</button>
                            <button className='btn btn-transparent'>View Menu</button>
                        </div>
                    </div>
                </div>
            </section>

            {/* CONTACT SECTION  */}
            <section className='py-5 f-white'>
                <div className="container">
                    <div id="contact_content">
                        <div id="contact" className='col-2'>
                            <h5>000 (123) 456 7890</h5>
                            <p className='fs-6 f-gray'>A small river named Duden flows by their place and supplies.</p>
                        </div>
                        <div id="contact" className='col-2'>
                            <h5>198 West 21th Street</h5>
                            <p className='fs-6 f-gray'>203 Fake St. Mountain View, San Francisco, California, USA</p>
                        </div>
                        <div id="contact" className='col-2'>
                            <h5>Open Monday-Friday</h5>
                            <p className='fs-6 f-gray'>8:00am - 9:00pm</p>
                            <h5>Open Saturday-Sunday</h5>
                            <p className='fs-6 f-gray'>9:00am - 8:00pm</p>
                        </div>
                        <div id="contact" className='col-2'>
                            <p className='fs-6 f-gray'>The countries Vokalia and Consonantia, there live the blind texts.</p>
                            <button className='btn btn-p'>Book a Table</button>
                        </div>
                    </div>
                </div>
            </section>

            {/* ABOUT SECTION  */}
            <section className='f-white'>
                <div className="container">
                    vidhika
                </div>
            </section>
        </div>
    )
}

export default Home