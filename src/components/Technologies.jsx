import './Technologies.css'

function Technologies() {
    const technologies = [
        {
            name: 'Ethereum',
            symbol: '⟠',
            description: 'The leading smart contract platform for DeFi, NFTs, and decentralized applications.',
            color: '#627eea',
            topics: ['Solidity', 'EVM', 'DeFi', 'NFTs']
        },
        {
            name: 'Solana',
            symbol: '◎',
            description: 'High-performance blockchain with fast transactions and low fees for scalable dApps.',
            color: '#9945ff',
            topics: ['Rust', 'Anchor', 'Speed']
        },
        {
            name: 'Polygon',
            symbol: '⬡',
            description: 'Ethereum scaling solution offering faster and cheaper transactions with full EVM compatibility.',
            color: '#8247e5',
            topics: ['L2', 'zkEVM', 'Scaling']
        },
        {
            name: 'Bitcoin',
            symbol: '₿',
            description: 'The original cryptocurrency and digital gold, pioneering decentralized money.',
            color: '#f7931a',
            topics: ['Lightning', 'Ordinals']
        },
        {
            name: 'Cosmos',
            symbol: '⚛',
            description: 'Internet of blockchains enabling seamless interoperability between different networks.',
            color: '#2e3148',
            topics: ['IBC', 'Tendermint']
        },
        {
            name: 'Polkadot',
            symbol: '●',
            description: 'Multi-chain protocol connecting specialized blockchains into a unified network.',
            color: '#e6007a',
            topics: ['Parachains', 'Substrate']
        }
    ]

    const skills = [
        { name: 'Smart Contracts', icon: '📝' },
        { name: 'DeFi Protocols', icon: '🏦' },
        { name: 'NFT Development', icon: '🎨' },
        { name: 'Web3.js / Ethers.js', icon: '⚡' },
        { name: 'Token Economics', icon: '💰' },
        { name: 'Security Auditing', icon: '🔒' },
        { name: 'Layer 2 Solutions', icon: '🔗' },
        { name: 'DAO Governance', icon: '🗳️' }
    ]

    return (
        <section id="technologies" className="technologies section">
            <div className="tech-bg-pattern"></div>
            <div className="container">
                <div className="tech-header">
                    <span className="section-badge">Technologies</span>
                    <h2 className="section-title">Blockchain Ecosystems We Explore</h2>
                    <p className="section-subtitle">
                        From Ethereum to Solana, we dive deep into multiple blockchain ecosystems,
                        learning together and building across chains.
                    </p>
                </div>

                <div className="tech-grid">
                    {technologies.map((tech, index) => (
                        <div key={index} className="tech-card glass-card">
                            <div
                                className="tech-symbol"
                                style={{ '--tech-color': tech.color }}
                            >
                                {tech.symbol}
                            </div>
                            <h3 className="tech-name">{tech.name}</h3>
                            <p className="tech-description">{tech.description}</p>
                            <div className="tech-topics">
                                {tech.topics.map((topic, i) => (
                                    <span key={i} className="tech-topic">{topic}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="skills-section">
                    <h3 className="skills-title">What We Learn & Build</h3>
                    <div className="skills-container">
                        {skills.map((skill, index) => (
                            <div key={index} className="skill-item">
                                <span className="skill-icon">{skill.icon}</span>
                                <span className="skill-name">{skill.name}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="tech-cta">
                    <div className="tech-cta-content glass-card">
                        <div className="tech-cta-text">
                            <h3>Want to Learn Web3 Development?</h3>
                            <p>Join our community and start your blockchain journey with hands-on guidance from experienced developers.</p>
                        </div>
                        <a href="#community" className="btn btn-primary">
                            Get Started
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                                <polyline points="12 5 19 12 12 19"></polyline>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Technologies
