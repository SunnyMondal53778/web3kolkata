import './Events.css'

function Events() {
    const upcomingEvents = [
        {
            id: 1,
            title: 'Web3 Monthly Meetup #21',
            date: 'Feb 15, 2026',
            time: '6:00 PM IST',
            location: 'Salt Lake Tech Hub, Kolkata',
            type: 'Meetup',
            topics: ['DeFi', 'Smart Contracts'],
            description: 'Join us for our monthly community gathering featuring talks on DeFi protocols and smart contract security.',
            isFeature: true
        },
        {
            id: 2,
            title: 'Solana Developer Workshop',
            date: 'Feb 22, 2026',
            time: '10:00 AM IST',
            location: 'IIM Calcutta Innovation Park',
            type: 'Workshop',
            topics: ['Solana', 'Rust'],
            description: 'Hands-on workshop on building applications on Solana using Rust and Anchor framework.'
        },
        {
            id: 3,
            title: 'ETH Kolkata Hackathon 2026',
            date: 'Mar 8-10, 2026',
            time: '48 Hours',
            location: 'JIS University Campus',
            type: 'Hackathon',
            topics: ['Ethereum', 'L2s', 'DApps'],
            description: 'Build innovative dApps, compete for prizes, and connect with leading Web3 projects.'
        },
        {
            id: 4,
            title: 'Zero Knowledge Proofs 101',
            date: 'Mar 20, 2026',
            time: '5:00 PM IST',
            location: 'Virtual Event',
            type: 'Webinar',
            topics: ['ZK Proofs', 'Privacy'],
            description: 'Introduction to zero-knowledge cryptography and its applications in blockchain.'
        }
    ]

    const pastHighlights = [
        { title: 'ETH India 2025 Watch Party', attendees: 120 },
        { title: 'NFT Art Gallery Launch', attendees: 85 },
        { title: 'DeFi Deep Dive Series', attendees: 150 },
        { title: 'Blockchain Career Fair', attendees: 200 }
    ]

    const getEventTypeClass = (type) => {
        const classes = {
            'Meetup': 'type-meetup',
            'Workshop': 'type-workshop',
            'Hackathon': 'type-hackathon',
            'Webinar': 'type-webinar'
        }
        return classes[type] || ''
    }

    return (
        <section id="events" className="events section">
            <div className="container">
                <div className="events-header">
                    <span className="section-badge">Events</span>
                    <h2 className="section-title">Upcoming Events & Meetups</h2>
                    <p className="section-subtitle">
                        Join us at our regular meetups, workshops, and hackathons.
                        Everyone from beginners to experts is welcome!
                    </p>
                </div>

                <div className="events-grid">
                    {upcomingEvents.map((event) => (
                        <div
                            key={event.id}
                            className={`event-card glass-card ${event.isFeature ? 'featured' : ''}`}
                        >
                            <div className="event-header">
                                <span className={`event-type ${getEventTypeClass(event.type)}`}>
                                    {event.type}
                                </span>
                                <div className="event-date">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                                        <line x1="16" y1="2" x2="16" y2="6"></line>
                                        <line x1="8" y1="2" x2="8" y2="6"></line>
                                        <line x1="3" y1="10" x2="21" y2="10"></line>
                                    </svg>
                                    {event.date}
                                </div>
                            </div>

                            <h3 className="event-title">{event.title}</h3>
                            <p className="event-description">{event.description}</p>

                            <div className="event-meta">
                                <div className="event-location">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                        <circle cx="12" cy="10" r="3"></circle>
                                    </svg>
                                    {event.location}
                                </div>
                                <div className="event-time">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <circle cx="12" cy="12" r="10"></circle>
                                        <polyline points="12 6 12 12 16 14"></polyline>
                                    </svg>
                                    {event.time}
                                </div>
                            </div>

                            <div className="event-topics">
                                {event.topics.map((topic, index) => (
                                    <span key={index} className="topic-tag">{topic}</span>
                                ))}
                            </div>

                            <a href="#" className="event-cta">
                                Register Now
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                    <polyline points="12 5 19 12 12 19"></polyline>
                                </svg>
                            </a>
                        </div>
                    ))}
                </div>

                <div className="past-events">
                    <h3 className="past-events-title">Past Event Highlights</h3>
                    <div className="past-events-grid">
                        {pastHighlights.map((event, index) => (
                            <div key={index} className="past-event-item">
                                <span className="past-event-name">{event.title}</span>
                                <span className="past-event-attendees">{event.attendees}+ attended</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Events
