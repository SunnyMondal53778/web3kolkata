import { useEffect, useRef } from 'react'
import './Hero.css'

function Hero() {
    const canvasRef = useRef(null)

    useEffect(() => {
        const canvas = canvasRef.current
        const ctx = canvas.getContext('2d')
        let animationFrameId
        let nodes = []

        const resizeCanvas = () => {
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
        }

        const createNodes = () => {
            nodes = []
            const nodeCount = Math.floor((canvas.width * canvas.height) / 15000)
            for (let i = 0; i < nodeCount; i++) {
                nodes.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    vx: (Math.random() - 0.5) * 0.5,
                    vy: (Math.random() - 0.5) * 0.5,
                    radius: Math.random() * 2 + 1
                })
            }
        }

        const drawNodes = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height)

            // Draw connections
            ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)'
            ctx.lineWidth = 1

            for (let i = 0; i < nodes.length; i++) {
                for (let j = i + 1; j < nodes.length; j++) {
                    const dx = nodes[i].x - nodes[j].x
                    const dy = nodes[i].y - nodes[j].y
                    const distance = Math.sqrt(dx * dx + dy * dy)

                    if (distance < 150) {
                        ctx.beginPath()
                        ctx.moveTo(nodes[i].x, nodes[i].y)
                        ctx.lineTo(nodes[j].x, nodes[j].y)
                        ctx.stroke()
                    }
                }
            }

            // Draw and update nodes
            nodes.forEach(node => {
                ctx.beginPath()
                ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2)
                ctx.fillStyle = 'rgba(255, 255, 255, 0.3)'
                ctx.fill()

                // Update position
                node.x += node.vx
                node.y += node.vy

                // Bounce off edges
                if (node.x < 0 || node.x > canvas.width) node.vx *= -1
                if (node.y < 0 || node.y > canvas.height) node.vy *= -1
            })

            animationFrameId = requestAnimationFrame(drawNodes)
        }

        resizeCanvas()
        createNodes()
        drawNodes()

        window.addEventListener('resize', () => {
            resizeCanvas()
            createNodes()
        })

        return () => {
            cancelAnimationFrame(animationFrameId)
            window.removeEventListener('resize', resizeCanvas)
        }
    }, [])

    return (
        <section className="hero">
            <canvas ref={canvasRef} className="hero-canvas"></canvas>
            <div className="hero-gradient"></div>
            <div className="hero-grid"></div>

            <div className="container hero-content">
                <div className="hero-badge">
                    <span className="pulse-dot"></span>
                    Open Community
                </div>

                <h1 className="hero-title">
                    <span className="hero-title-line">Web3</span>
                    <span className="hero-title-line gradient-text">Kolkata</span>
                </h1>

                <p className="hero-description">
                    An open community of <strong>developers</strong>, <strong>students</strong>, and
                    <strong> working professionals</strong> building the decentralized future.
                    Join us for monthly meetups, hackathons, and workshops on blockchain,
                    Ethereum, Solana, and more.
                </p>

                <div className="hero-actions">
                    <a href="#community" className="btn btn-primary">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                            <circle cx="9" cy="7" r="4"></circle>
                            <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                        </svg>
                        Join Community
                    </a>
                    <a href="#events" className="btn btn-secondary">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                            <line x1="16" y1="2" x2="16" y2="6"></line>
                            <line x1="8" y1="2" x2="8" y2="6"></line>
                            <line x1="3" y1="10" x2="21" y2="10"></line>
                        </svg>
                        View Events
                    </a>
                </div>

                <div className="hero-stats">
                    <div className="stat-item">
                        <span className="stat-value">500+</span>
                        <span className="stat-label">Community Members</span>
                    </div>
                    <div className="stat-divider"></div>
                    <div className="stat-item">
                        <span className="stat-value">20+</span>
                        <span className="stat-label">Events Hosted</span>
                    </div>
                    <div className="stat-divider"></div>
                    <div className="stat-item">
                        <span className="stat-value">10+</span>
                        <span className="stat-label">Partner Organizations</span>
                    </div>
                </div>
            </div>

            <div className="hero-scroll-indicator">
                <span>Scroll to explore</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="12" y1="5" x2="12" y2="19"></line>
                    <polyline points="19 12 12 19 5 12"></polyline>
                </svg>
            </div>
        </section>
    )
}

export default Hero
