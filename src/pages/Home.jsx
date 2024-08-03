import React from 'react'
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image';

function Home() {
    const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
    return (
        <div className='bg-gray'>

            {/* BANNER SECTION  */}
            <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item id='banner'>
                    <Image src="https://preview.colorlib.com/theme/vegefoods/images/bg_2.jpg.webp"/>
                    <div className='overlay'></div>
                    <Carousel.Caption>
                    <div className="container">
                        <div id="banner_content">
                            <h1 className='fs-1 poppins fw-semibold'>We serve Fresh Vegestables & Fruits</h1>
                            <p className='f-12' id='banner-extra'>WE DELIVER ORGANIC VEGETABLES & FRUITS </p>
                            <button className='btn rounded-pill btn-transparent'>VIEW DETAILS</button>
                        </div>
                    </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item id='banner'>
                    <Image src="https://preview.colorlib.com/theme/vegefoods/images/bg_1.jpg" rounded />
                    <div className='overlay'></div>
                    <Carousel.Caption>
                    <div className="container">
                        <div id="banner_content">
                            <h1 className='fs-1 poppins fw-semibold'>100% Fresh & Organic Foods</h1>
                            <p className='f-12' id='banner-extra'>WE DELIVER ORGANIC VEGETABLES & FRUITS </p>
                            <button className='btn rounded-pill btn-transparent'>VIEW DETAILS</button>
                        </div>
                    </div>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

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
                            <h5 className='f-gray fw-bold'>Open Every Day</h5>
                            <p className='fs-6 f-gray'>09:30 AM – 11:00 PM</p>
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
                    <div className='row align-items-center'>
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

            {/* SERVICES SECTION  */}
            <section className='p-100'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 col-12 overflow-hidden">
                            <img src="https://preview.colorlib.com/theme/pato/images/intro-01.jpg.webp" className='rounded hover-img' alt="" />
                            <div className='pt-4'>
                                <span className='fs-5 letter-s hover-text'>ROMANTIC RESTAURANT</span>
                                <p className='f-gray-light'>Phasellus enime velit eros lorem enim, luctus ut velit eget, con-vallis egestas eros.</p>
                                <span className='f-6 f-gray-light hover-text'>LEARN MORE</span>
                            </div>
                        </div>
                        <div className="col-md-4 col-12">
                            <img src="https://preview.colorlib.com/theme/pato/images/intro-02.jpg.webp" className='rounded hover-img' alt="" />
                            <div className='pt-4'>
                                <span className='fs-5 letter-s hover-text'>DELICIOUS FOOD</span>
                                <p className='f-gray-light'>Phasellus enime velit eros lorem enim, luctus ut velit eget, con-vallis egestas eros.</p>
                                <span className='f-6 f-gray-lig
                                ht hover-text'>LEARN MORE</span>
                            </div>
                        </div>
                        <div className="col-md-4 col-12">
                            <img src="https://preview.colorlib.com/theme/pato/images/intro-04.jpg.webp" className='rounded hover-img' alt="" />
                            <div className='pt-4'>
                                <span className='fs-5 letter-s hover-text'>RED WINES YOU LOVE</span>
                                <p className='f-gray-light'>Phasellus enime velit eros lorem enim, luctus ut velit eget, con-vallis egestas eros.</p>
                                <span className='f-6 f-gray-light hover-text'>LEARN MORE</span>
                            </div>
                        </div>  
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Home