import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
        setIsMobileMenuOpen(false)
    }

    return (
        <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">
                    <div className="logo-img-wrapper">
                        <img
                            src="/logo.jpg"
                            alt="Web3 Kolkata"
                            className="logo-img"
                        />
                    </div>
                    <span className="logo-text">Web3 Kolkata</span>
                </Link>

                <div className={`navbar-links ${isMobileMenuOpen ? 'active' : ''}`}>
                    <button onClick={() => scrollToSection('about')} className="nav-link">About</button>
                    <button onClick={() => scrollToSection('events')} className="nav-link">Events</button>
                    <button onClick={() => scrollToSection('technologies')} className="nav-link">Technologies</button>
                    <button onClick={() => scrollToSection('community')} className="nav-link">Community</button>
                    <a
                        href="https://discord.gg/web3kolkata"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary nav-cta"
                    >
                        Join Us
                    </a>
                </div>

                <button
                    className={`mobile-menu-btn ${isMobileMenuOpen ? 'active' : ''}`}
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </nav>
    )
}

export default Navbar
