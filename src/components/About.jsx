import './About.css'

function About() {
    const values = [
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
            ),
            title: 'Open Community',
            description: 'Everyone is welcome - from curious beginners to seasoned blockchain developers.'
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
            ),
            title: 'Knowledge Sharing',
            description: 'Learn from experts and share your knowledge through talks, workshops, and discussions.'
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="2" y1="12" x2="22" y2="12"></line>
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                </svg>
            ),
            title: 'Global Connections',
            description: 'Connect with the worldwide Web3 ecosystem while building locally in Kolkata.'
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
            ),
            title: 'Hands-on Learning',
            description: 'Build real projects, participate in hackathons, and gain practical blockchain experience.'
        }
    ]

    return (
        <section id="about" className="about section">
            <div className="about-bg-element"></div>
            <div className="container">
                <div className="about-header">
                    <span className="section-badge">About Us</span>
                    <h2 className="section-title">
                        Building Web3 Together
                    </h2>
                    <p className="section-subtitle">
                        We're a passionate community united by the vision of a decentralized future.
                        Based in the City of Joy, we bring together minds from all backgrounds to
                        explore, learn, and build on blockchain technology.
                    </p>
                </div>

                <div className="about-content">
                    <div className="about-visual">
                        <div className="about-image-container">
                            <div className="about-image-frame">
                                <div className="blockchain-visual">
                                    <div className="block block-1">
                                        <div className="block-inner">
                                            <span className="block-hash">#001</span>
                                            <div className="block-data"></div>
                                        </div>
                                    </div>
                                    <div className="block-connector"></div>
                                    <div className="block block-2">
                                        <div className="block-inner">
                                            <span className="block-hash">#002</span>
                                            <div className="block-data"></div>
                                        </div>
                                    </div>
                                    <div className="block-connector"></div>
                                    <div className="block block-3">
                                        <div className="block-inner">
                                            <span className="block-hash">#003</span>
                                            <div className="block-data"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="floating-icons">
                                    <div className="floating-icon icon-1">⟠</div>
                                    <div className="floating-icon icon-2">◎</div>
                                    <div className="floating-icon icon-3">₿</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="about-info">
                        <h3 className="about-info-title">Our Mission</h3>
                        <p className="about-info-text">
                            Web3 Kolkata aims to democratize blockchain education and foster innovation
                            in Eastern India. We believe that the decentralized revolution should be
                            accessible to everyone, regardless of their background or experience level.
                        </p>
                        <p className="about-info-text">
                            Through monthly meetups, workshops, hackathons, and collaborative projects,
                            we're nurturing the next generation of blockchain developers, researchers,
                            and entrepreneurs.
                        </p>

                        <div className="about-highlights">
                            <div className="highlight-item">
                                <span className="highlight-icon">🎯</span>
                                <span className="highlight-text">Monthly community meetups</span>
                            </div>
                            <div className="highlight-item">
                                <span className="highlight-icon">💡</span>
                                <span className="highlight-text">Hands-on workshops & bootcamps</span>
                            </div>
                            <div className="highlight-item">
                                <span className="highlight-icon">🏆</span>
                                <span className="highlight-text">Hackathons with real prizes</span>
                            </div>
                            <div className="highlight-item">
                                <span className="highlight-icon">🤝</span>
                                <span className="highlight-text">Networking opportunities</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="about-values">
                    <h3 className="values-title">What We Stand For</h3>
                    <div className="values-grid">
                        {values.map((value, index) => (
                            <div key={index} className="value-card glass-card">
                                <div className="value-icon">{value.icon}</div>
                                <h4 className="value-title">{value.title}</h4>
                                <p className="value-description">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
