import React, { useState, useEffect } from 'react';
import styles from './Navbar.module.css';


interface DropdownItem {
  label: string;
  href: string;
}

interface NavLink {
  label: string;
  href: string;
  dropdownItems?: DropdownItem[];
}



interface NavLink {
  label: string;
  href: string;
}

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks: NavLink[] = [
    { label: 'HOME', href: '/' },
    { label: 'OUR PRODUCTS', href: '/products/prescription' },

    { label: 'OUR SERVICES', href: '',   dropdownItems: [
      { label: "Over The Counter ", href: "/products/otc" },
      { label: "Prescription Medicine", href: '/products/prescription' },
      { label: "Supplements and Vitamins", href: "/products/supplements" },
      { label: "Medical Equipments", href: "/products/equipment" },
    ], },
    { label: 'CONTACT US', href: '/contact-us' },
    { label: 'ABOUT US', href: '/about-us' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
    const handleNavClick = () => {
      setIsMenuOpen(false);
    };


  return (
    <nav 
      className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className={styles.navbarContainer}>
        <div className={styles.logoContainer}>
          <a href="/" className={styles.logoLink} aria-label="Maplewood Pharmacy Home">
            <div className={styles.logo}>
              <div className={styles.logoIcon}>
                  <img src='/logo.png'></img>
              </div>
              <div className={styles.logoText}>
                <span className={styles.maplewood}>MAPLEWOOD</span>
                <span className={styles.pharmacy}>PHARMACY</span>
                <span className={styles.tagline}>Trusted Care. Modern Medicine. Compassionate Hearts</span>
              </div>
            </div>
          </a>
        </div>

        <button
          className={`${styles.hamburger} ${isMenuOpen ? styles.active : ''}`}
          onClick={toggleMenu}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMenuOpen}
          aria-controls="navbar-menu"
          type="button"
        >
          <span className={styles.hamburgerLine}></span>
          <span className={styles.hamburgerLine}></span>
          <span className={styles.hamburgerLine}></span>
        </button>

        <div 
          id="navbar-menu"
          className={`${styles.navMenu} ${isMenuOpen ? styles.open : ''}`}
          role="menu"
        >
          <ul className={styles.navList}>
            {navLinks.map((link) => (
              <li key={link.label} className={styles.navItem} role="none">
                <a
                  href={link.href}
                  className={styles.navLink}
                  onClick={handleNavClick}
                  role="menuitem"
                >
                  {link.label}
                </a>

                  {link.dropdownItems && (
                    <ul className={styles.dropdownMenu}>
                      {link.dropdownItems.map((item) => (
                        <li key={item.label} className={styles.dropdownItem}>
                          <a
                            href={item.href}
                            className={styles.dropdownLink}
                            onClick={handleNavClick}
                          >
                            {item.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}

              </li>
            ))}
          </ul>

          <a 
            href="/shop" 
            className={styles.enrollButton}
            onClick={handleNavClick}
            role="menuitem"
          >
            <span className={styles.enrollIcon}>▶</span>
            Shop Now
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;