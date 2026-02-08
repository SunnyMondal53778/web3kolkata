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
                    <div className="logo-icon">
                        <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="2" />
                            <circle cx="20" cy="8" r="3" fill="currentColor" />
                            <circle cx="32" cy="20" r="3" fill="currentColor" />
                            <circle cx="20" cy="32" r="3" fill="currentColor" />
                            <circle cx="8" cy="20" r="3" fill="currentColor" />
                            <line x1="20" y1="11" x2="29" y2="20" stroke="currentColor" strokeWidth="1.5" />
                            <line x1="29" y1="20" x2="20" y2="29" stroke="currentColor" strokeWidth="1.5" />
                            <line x1="20" y1="29" x2="11" y2="20" stroke="currentColor" strokeWidth="1.5" />
                            <line x1="11" y1="20" x2="20" y2="11" stroke="currentColor" strokeWidth="1.5" />
                        </svg>
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
