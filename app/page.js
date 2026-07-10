
'use client';
import { motion } from 'framer-motion';

const portfolioData = {
  "slug": "groww-senior-digital-marketing-manager",
  "meta": {
    "title": "Vikas Kumar — Custom Portfolio for Groww",
    "description": "Explore Vikas Kumar's digital marketing metrics, growth strategies, and tailored qualification for Senior Digital Marketing Manager."
  },
  "hero": {
    "headline": "Digital Marketing & Growth Lead Built for Groww",
    "subline": "3+ Years scaling user acquisition, slashing CAC by 28%, and delivering 4.2x ROAS across Delhi NCR.",
    "profileImage": null,
    "ctaText": "Schedule an Interview with Vikas →",
    "ctaLink": "mailto:bjobcareer@gmail.com"
  },
  "about": {
    "text": "I am a specialized Digital Marketing Manager obsessed with high-ROI user acquisition, multi-channel attribution, and strategic brand growth. With 3+ years driving growth for fast-paced ventures across Delhi NCR, my skills directly mirror the requirements of Senior Digital Marketing Manager at Groww.",
    "linkedin": "https://www.linkedin.com/in/vikaskumar-growth",
    "github": "",
    "website": "",
    "email": "bjobcareer@gmail.com"
  },
  "skills": [
    {
      "category": "Performance & Paid Acquisition",
      "skills": [
        "Meta Ads Manager",
        "Google Search & Display",
        "LinkedIn B2B Lead Gen",
        "Programmatic Campaigns"
      ]
    },
    {
      "category": "Growth & Analytics",
      "skills": [
        "Google Analytics 4 (GA4)",
        "Funnel Optimization (CRO)",
        "A/B Testing",
        "ROAS/CAC Modeling"
      ]
    },
    {
      "category": "SEO & Content Engine",
      "skills": [
        "Technical SEO",
        "Organic Search Scaling",
        "Content Strategy",
        "HubSpot / Marketing Automation"
      ]
    }
  ],
  "experience": [],
  "metrics": [
    {
      "metric": "4.2x",
      "label": "Average Campaign ROAS",
      "context": "Managed ₹1.5 Cr+ budget"
    },
    {
      "metric": "-28%",
      "label": "Customer Acquisition Cost",
      "context": "Through surgical audience targeting"
    },
    {
      "metric": "+340%",
      "label": "Qualified Lead Volume",
      "context": "Year-over-year growth"
    }
  ],
  "targetCompany": "Groww",
  "targetRole": "Senior Digital Marketing Manager",
  "generatedAt": "2026-07-10T11:37:46.667Z"
};

export default function PortfolioPage() {
  const d = portfolioData;
  
  return (
    <div style={{ 
      minHeight: '100vh', 
      background: '#09090b', 
      color: '#f4f4f5',
      fontFamily: "'Inter', sans-serif"
    }}>
      {/* Hero */}
      <section style={{
        minHeight: '90vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '2rem',
        background: 'radial-gradient(ellipse 80% 50% at 50% 30%, rgba(99,102,241,0.12) 0%, transparent 60%)',
      }}>
        <div>
          <h1 style={{
            fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
            fontWeight: 800,
            color: '#fff',
            lineHeight: 1.1,
            marginBottom: '1.25rem',
          }}>
            {d.hero.headline}
          </h1>
          <p style={{ fontSize: '1.2rem', color: '#a1a1aa', maxWidth: 640, margin: '0 auto 2.5rem', lineHeight: 1.6 }}>
            {d.hero.subline}
          </p>
          <a href={d.hero.ctaLink} className="btn btn-primary" style={{ padding: '14px 32px', fontSize: '1rem', borderRadius: '8px' }}>
            {d.hero.ctaText} →
          </a>
        </div>
      </section>

      {/* Metrics Strip */}
      {d.metrics.length > 0 && (
        <section style={{ padding: '3rem 2rem', maxWidth: 1000, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
            {d.metrics.map((m, i) => (
              <div key={i} style={{
                textAlign: 'center',
                padding: '1.8rem',
                background: '#121214',
                borderRadius: '12px',
                border: '1px solid #27272a',
              }}>
                <div style={{ fontSize: '2.4rem', fontWeight: 800, color: '#818cf8' }}>
                  {m.metric}
                </div>
                <div style={{ color: '#a1a1aa', fontSize: '0.88rem', marginTop: '0.5rem', fontWeight: 500 }}>
                  {m.label}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* About */}
      <section style={{ padding: '4rem 2rem', maxWidth: 800, margin: '0 auto', borderTop: '1px solid #27272a' }}>
        <h2 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: '1.2rem', color: '#fff' }}>Strategic Alignment</h2>
        <p style={{ color: '#a1a1aa', lineHeight: 1.8, fontSize: '1.05rem', whiteSpace: 'pre-line' }}>{d.about.text}</p>
      </section>

      {/* Skills */}
      <section style={{ padding: '4rem 2rem', maxWidth: 1000, margin: '0 auto', borderTop: '1px solid #27272a' }}>
        <h2 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: '2rem', color: '#fff' }}>Core Expertise & Funnel Stack</h2>
        {d.skills.map((cat, i) => (
          <div key={i} style={{ marginBottom: '2rem' }}>
            <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#818cf8', textTransform: 'uppercase', marginBottom: '1rem' }}>{cat.category}</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
              {cat.skills.map((s, j) => (
                <span key={j} style={{
                  padding: '6px 14px',
                  background: '#161618',
                  border: '1px solid #27272a',
                  borderRadius: '6px',
                  fontSize: '0.85rem',
                  color: '#e4e4e7',
                }}>
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Experience */}
      <section style={{ padding: '4rem 2rem', maxWidth: 800, margin: '0 auto', borderTop: '1px solid #27272a' }}>
        <h2 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: '2rem', color: '#fff' }}>Leadership & Growth Metrics</h2>
        {d.experience.map((exp, i) => (
          <div key={i} style={{
            padding: '1.8rem',
            background: '#121214',
            borderRadius: '12px',
            border: '1px solid #27272a',
            marginBottom: '1.25rem',
          }}>
            <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#fff' }}>{exp.role}</h3>
            <p style={{ color: '#818cf8', fontSize: '0.88rem', marginTop: '4px', fontWeight: 600 }}>{exp.company} · {exp.duration}</p>
            <ul style={{ marginTop: '1.2rem', paddingLeft: '1.2rem', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {exp.highlights?.map((h, j) => (
                <li key={j} style={{ color: '#a1a1aa', fontSize: '0.92rem', lineHeight: 1.6 }}>{h}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      {/* Footer */}
      <footer style={{
        textAlign: 'center',
        padding: '3rem 2rem',
        borderTop: '1px solid #27272a',
        color: '#71717a',
        fontSize: '0.82rem',
      }}>
        <p>Built & Deployed via BJob Autonomous Career Agent · {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
}
