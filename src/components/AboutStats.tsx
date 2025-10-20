import { useState } from 'react';
import { User, Pill, Package } from 'lucide-react';

// Since we can't use external CSS modules in this environment,
// I'll use inline styles with CSS-in-JS approach
// In your actual project, move these to AboutStats.module.css

const AboutStats = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const stats = [
    {
      id: 1,
      icon: User,
      title: 'Caring Experts',
      description: 'Pharmacists available to address your questions and concerns.',
      ariaLabel: 'Caring pharmacy experts available to help'
    },
    {
      id: 2,
      icon: Pill,
      title: 'Full Range of Medicines',
      description: 'Access to all necessary prescriptions from one easy to reach source.',
      ariaLabel: 'Complete range of prescription medications'
    },
    {
      id: 3,
      icon: Package,
      title: 'Fast Service',
      description: 'Ready to assist and deliver your prescriptions anywhere in JUJA.',
      ariaLabel: 'Fast prescription delivery service nationwide'
    }
  ];

  const styles = {
    container: {
      width: '100%',
      padding: '4rem 1.5rem',
      backgroundColor: '#f8f9fa',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
    },
    wrapper: {
      maxWidth: '1200px',
      margin: '0 auto'
    },
    header: {
      textAlign: 'center' as const,
      marginBottom: '3rem'
    },
    title: {
      fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
      fontWeight: 300,
      color: '#2c3e50',
      marginBottom: '1.5rem',
      letterSpacing: '0.5px',
      lineHeight: 1.3
    },
    description: {
      fontSize: 'clamp(0.95rem, 2vw, 1.05rem)',
      color: '#5a6c7d',
      lineHeight: 1.8,
      maxWidth: '900px',
      margin: '0 auto',
      fontWeight: 400
    },
    cardsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: '2rem',
      marginTop: '3rem'
    },
    card: {
      backgroundColor: '#ffffff',
      padding: '2.5rem 2rem',
      borderRadius: '8px',
      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
      transition: 'all 0.3s ease',
      cursor: 'pointer',
      position: 'relative' as const,
      overflow: 'hidden'
    },
    cardActive: {
      transform: 'translateY(-8px)',
      boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12)'
    },
    iconWrapper: {
      width: '64px',
      height: '64px',
      backgroundColor: '#34495e',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      margin: '0 auto 1.5rem',
      transition: 'all 0.3s ease'
    },
    iconWrapperActive: {
      backgroundColor: '#2c3e50',
      transform: 'scale(1.1)'
    },
    cardTitle: {
      fontSize: '1.25rem',
      fontWeight: 400,
      color: '#2c3e50',
      textAlign: 'center' as const,
      marginBottom: '1rem',
      letterSpacing: '0.3px'
    },
    cardDescription: {
      fontSize: '0.95rem',
      color: '#6c757d',
      textAlign: 'center' as const,
      lineHeight: 1.6
    }
  };

  const handleCardInteraction = (id: number, active: boolean) => {
    setActiveCard(active ? id : null);
  };

  return (
    <section 
      style={styles.container}
      aria-labelledby="pharmacy-experts-title"
    >
      <div style={styles.wrapper}>
        <header style={styles.header}>
          <h2 id="pharmacy-experts-title" style={styles.title}>
           Maplewood Pharmacy Experts
          </h2>
          <p style={styles.description}>
            At Maplewood Pharmacy, we’re more than just a pharmacy — we’re your trusted healthcare partner. Our mission is to provide accessible, affordable, and compassionate care to every individual who walks through our doors. From expert prescription services to personalized health advice, we combine modern medical knowledge with a human touch to help you live healthier every day.
            We take pride in serving our community with integrity, professionalism, and genuine care — because your well-being is our priority.
          </p>
        </header>

        <div style={styles.cardsGrid} role="list">
          {stats.map((stat) => {
            const Icon = stat.icon;
            const isActive = activeCard === stat.id;
            
            return (
              <article
                key={stat.id}
                style={{
                  ...styles.card,
                  ...(isActive ? styles.cardActive : {})
                }}
                onMouseEnter={() => handleCardInteraction(stat.id, true)}
                onMouseLeave={() => handleCardInteraction(stat.id, false)}
                onFocus={() => handleCardInteraction(stat.id, true)}
                onBlur={() => handleCardInteraction(stat.id, false)}
                tabIndex={0}
                role="listitem"
                aria-label={stat.ariaLabel}
              >
                <div 
                  style={{
                    ...styles.iconWrapper,
                    ...(isActive ? styles.iconWrapperActive : {})
                  }}
                  aria-hidden="true"
                >
                  <Icon 
                    size={32} 
                    color="#ffffff" 
                    strokeWidth={1.5}
                  />
                </div>
                <h3 style={styles.cardTitle}>{stat.title}</h3>
                <p style={styles.cardDescription}>{stat.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutStats;