import React, { useState, useEffect, useCallback } from 'react';
import styles from './Hero.module.css';
import { FaWhatsapp } from "react-icons/fa";


// Import your images from assets
import image1 from '../../assets/hero/pharmacy-1.jpg';
import image2 from './../../assets/hero/pharmacy-2.jpg';
import image3 from './../../assets/hero/pharmacy-3.jpg';
import image4 from './../../assets/hero/pharmacy-4.jpg';
import image5 from './../../assets/hero/pharmacy-5.jpg';
import image6 from './../../assets/hero/pharmacy-6.jpg';
import image7 from './../../assets/hero/pharmacy-7.jpg';
import image8 from './../../assets/hero/pharmacy-8.jpg';

const images = [image1, image2, image3, image4, image5, image6, image7, image8];

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

    const handleNavClick = () => {
    console.log("CTA clicked!");
  };


  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  }, []);

  const goToSlide = useCallback((index: number) => {
    setCurrentSlide(index);
  }, []);

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(nextSlide, 4000);
      return () => clearInterval(interval);
    }
  }, [isHovered, nextSlide]);

  return (
    <section 
      className={styles.hero}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-label="Hero section with pharmacy services"
    >
      <div className={styles.carouselContainer}>
        {images.map((image, index) => (
          <div
            key={index}
            className={`${styles.slide} ${
              index === currentSlide ? styles.active : ''
            }`}
            aria-hidden={index !== currentSlide}
          >
            <img
              src={image}
              alt={`Pharmacy interior ${index + 1}`}
              className={styles.carouselImage}
              loading={index === 0 ? 'eager' : 'lazy'}
            />
            <div className={styles.overlay} />
          </div>
        ))}

        <div className={styles.content}>
          <h1 className={styles.title}>
            Caring for You, Every Step of the Way
          </h1>
          <p className={styles.subtitle}>
            From consultations to prescriptions, we’re here to keep you and your family healthy and thriving.
          </p>
          
           <div className={styles.ctaButton} aria-label="Learn more about our services">
                  <a
                    href="https://wa.me/254796787207?text=Hello%20Maplewood%20Pharmacy%2C%20I%27d%20like%20to%20make%20an%20inquiry."
                    className={styles.ctaButton}
                    aria-label="Consult Maplewood Pharmacy on WhatsApp"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={handleNavClick}
                    role="menuitem"
                  >
                    <FaWhatsapp className={styles.whatsappIcon} />
                    <span>Feeling Unwell?</span>
                    <span className={styles.ctaIcon}>Consult Us</span>
                  </a>
</div>

        


              
        </div>

        <button
          className={`${styles.navButton} ${styles.navButtonPrev}`}
          onClick={prevSlide}
          aria-label="Previous slide"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        <button
          className={`${styles.navButton} ${styles.navButtonNext}`}
          onClick={nextSlide}
          aria-label="Next slide"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        <div className={styles.indicators} role="tablist" aria-label="Carousel navigation">
          {images.map((_, index) => (
            <button
              key={index}
              className={`${styles.indicator} ${
                index === currentSlide ? styles.indicatorActive : ''
              }`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
              aria-selected={index === currentSlide}
              role="tab"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;