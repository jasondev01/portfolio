import Logo from '../../assets/favicon.png'
import { useState, useEffect } from 'react'
import 'aos/dist/aos.css'
import { BsInstagram, BsLinkedin, BsTwitter, BsGithub } from 'react-icons/bs'

const Nav = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);

        if (!isMenuOpen) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
         if (!isMenuOpen) {
            document.body.classList.remove('no-scroll');
        } else {
            document.body.classList.add('no-scroll');
        }
    }

    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [isNavbarVisible, setIsNavbarVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.scrollY;
            if (currentScrollPos > prevScrollPos) {
                setIsNavbarVisible(true);
            } else if ( currentScrollPos === 0 ) {
                setIsNavbarVisible(false);
            }
            setPrevScrollPos(currentScrollPos);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [prevScrollPos]);

    const [activeHeadNav, setActiveHeadNav] = useState('')

    const handleNavItemClick = (e, navItem) => {
        e.preventDefault();
        const sectionElement = document.getElementById(navItem);
        if (sectionElement) {
            sectionElement.scrollIntoView();
        }
        setIsMenuOpen(false);
        document.body.classList.remove('no-scroll');
        setActiveHeadNav(navItem);
    };

    return (
        <nav className={`navbar ${isNavbarVisible ? 'sticky' : ''}`}>
            <div className={`header__nav-menu-overlay ${isMenuOpen ? 'show' : ''}`} onClick={closeMenu} onTouchStart={closeMenu}></div>
            <div className="header__nav-content">
                <div className="nav__logo" data-aos='zoom-in'>
                    <a href="#header" onClick={(e) => handleNavItemClick(e, 'header')}>
                        <img src={Logo} alt="logo" width={100} />
                    </a>
                </div>
                <ul className={`header__nav-menu ${isMenuOpen ? 'show' : ''}`}>
                    <li className='header__nav-item'
                        data-aos='zoom-in' 
                        data-aos-delay='100'>
                        <a href="#header" 
                        onClick={(e) => handleNavItemClick(e, 'header')} 
                        className={activeHeadNav === 'header' ? 'active' : ''}>
                            Home
                        </a> 
                    </li>
                    <li className='header__nav-item'
                        data-aos='zoom-in' 
                        data-aos-delay='200'>
                        <a href="#about" 
                        onClick={(e) => handleNavItemClick(e, 'about')} 
                        className={activeHeadNav === 'about' ? 'active' : ''}>
                            About
                        </a> 
                    </li>
                    <li className='header__nav-item'
                        data-aos='zoom-in' 
                        data-aos-delay='300'>
                        <a href="#projects" 
                        onClick={(e) => handleNavItemClick(e, 'projects')} 
                        className={activeHeadNav === 'projects' ? 'active' : ''}>
                            Projects
                        </a> 
                    </li>
                    <li className='header__nav-item'
                        data-aos='zoom-in' 
                        data-aos-delay='400'>
                        <a href="#contact" 
                        onClick={(e) => handleNavItemClick(e, 'contact')} 
                        className={activeHeadNav === 'contact' ? 'active' : ''}>
                            Contact
                        </a> 
                    </li>
                    <li className='header__nav-item'>
                        <div className='header__nav-social'>
                            <a href="https://www.instagram.com/jsnflix/" target='_blank' rel="noreferrer">
                                <BsInstagram />
                            </a>
                        </div>
                        <div className='header__nav-social'>
                            <a href="https://www.linkedin.com/in/webflex/" target='_blank' rel="noreferrer">
                                <BsLinkedin />
                            </a>
                        </div>
                        <div className='header__nav-social'>
                            <a href="https://twitter.com/jsnflix" target='_blank' rel="noreferrer">
                                <BsTwitter />
                            </a>
                        </div>
                        <div className='header__nav-social'>
                            <a href="https://github.com/jasondev01" target='_blank' rel="noreferrer">
                                <BsGithub />
                            </a>
                        </div>
                    </li>
                    <li className='header__nav-item'>
                        <small>
                            &copy; Built & Designed by Jason Ruben
                        </small>
                    </li>
                </ul>

                <div className={`hamburger ${isMenuOpen ? 'show' : ''}`} onClick={toggleMenu}>
                    <span className='bar'></span>
                    <span className='bar'></span>
                    <span className='bar'></span>
                </div>
            </div>
        </nav>
    )
}

export default Nav
