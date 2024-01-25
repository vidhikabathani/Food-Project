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
                <div id="about_content">
                    <div className="col-5 about-img">
                        <img src="https://preview.colorlib.com/theme/coffeeblend/images/about.jpg.webp" alt="" />
                    </div>
                    <div className="col-5">
                        <div className="about-overlay">
                            <h1 className='Greate-vibe f-primary'>Discover</h1>
                            <h2>OUR STORY</h2>
                            <p className='f-gray fs-6'>On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word "and" and the Little Blind Text should turn around and return to its own, safe country. But nothing the copy said could convince her and so it didn’t take long until a few insidious Copy Writers ambushed her, made her drunk with Longe and Parole and dragged her into their agency, where they abused her for their.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* SERVICES SECTION  */}
            <section className='p-100 bg-p'>
                <div className="container">

                </div>
            </section>

            {/* MENU SECTION  */}
            <section className='p-100'>
                <div className="container">
                    <div id="menu_content">
                        <div className="col-6 align-end">
                            <h1 className='f-primary Greate-vibe'>Discover</h1>
                            <h2 className='f-white'>OUR MENU</h2>
                            <p className='f-gray'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                            <button className='btn-transparent'>View Full Menu</button>
                        </div>
                        <div className="col-6"></div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home