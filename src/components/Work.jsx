import { useState } from 'react';
import { SectionTabs } from './TopBar';

const cases = [
  {
    tag: 'SEO AUDIT',
    title: 'Full technical & on-page SEO audits',
    d: 'Crawl analysis, Core Web Vitals, indexation issues, schema markup, internal linking structure — with a clear action plan.',
    img: null,
    accent: 'var(--accent)',
    fg: 'var(--accent-fg)',
  },
  {
    tag: 'WORDPRESS',
    title: 'WordPress build, migration & optimization',
    d: 'Theme setup, Yoast configuration, speed optimization, CWV fixes, and plugin management for lean, fast sites.',
    img: null,
    accent: 'var(--ink)',
    fg: 'var(--paper)',
  },
  {
    tag: 'KEYWORD RESEARCH',
    title: 'Keyword strategy & content planning',
    d: 'Search intent mapping, topic clusters, competitor gap analysis, and content briefs that drive qualified organic traffic.',
    img: null,
    accent: 'var(--accent)',
    fg: 'var(--accent-fg)',
  },
  {
    tag: 'REPORTS & DASHBOARDS',
    title: 'GA4, GSC, Power BI & Looker reporting',
    d: 'Custom dashboards that connect SEO performance to business results — built for clients who want clarity, not noise.',
    img: null,
    accent: 'var(--ink)',
    fg: 'var(--paper)',
  },
];

const tagIcons = {
  'SEO AUDIT': '🔍',
  'WORDPRESS': '⚡',
  'KEYWORD RESEARCH': '📊',
  'REPORTS & DASHBOARDS': '📈',
};

export const Work = () => {
  const [flipped, setFlipped] = useState(null);

  return (
    <section id="work" style={{ paddingBottom: 12 }}>
      <div className="container">
        <SectionTabs active="Work" />

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 22 }}>
          <h2 className="display" style={{ fontSize: 'clamp(40px, 5vw, 64px)', margin: 0, lineHeight: 1 }}>
            What I Do
          </h2>
          <span className="grotesk" style={{ fontSize: 13, color: 'var(--ink-2)' }}>
            click a card to learn more
          </span>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 18 }} className="work-grid">
          {cases.map((c, i) => (
            <div
              key={i}
              onClick={() => setFlipped(flipped === i ? null : i)}
              style={{ perspective: '1200px', cursor: 'pointer', minHeight: 280 }}
            >
              <div style={{
                position: 'relative',
                width: '100%',
                height: '100%',
                minHeight: 280,
                transformStyle: 'preserve-3d',
                transition: 'transform 0.65s cubic-bezier(0.4, 0.2, 0.2, 1)',
                transform: flipped === i ? 'rotateY(180deg)' : 'rotateY(0deg)',
              }}>

                {/* FRONT — image */}
                <div style={{
                  position: 'absolute', inset: 0,
                  backfaceVisibility: 'hidden',
                  WebkitBackfaceVisibility: 'hidden',
                  borderRadius: 22,
                  overflow: 'hidden',
                  border: '1.5px solid var(--ink)',
                }}>
                  {c.img ? (
                    <img src={c.img} alt={c.tag} style={{
                      width: '100%', height: '100%',
                      objectFit: 'cover',
                      display: 'block',
                    }} />
                  ) : (
                    /* Placeholder until you add a real image */
                    <div style={{
                      width: '100%', height: '100%',
                      background: c.accent,
                      display: 'flex', flexDirection: 'column',
                      alignItems: 'center', justifyContent: 'center',
                      gap: 16,
                      color: c.fg,
                    }}>
                      <span style={{ fontSize: 64 }}>{tagIcons[c.tag]}</span>
                      <span className="mono" style={{ fontSize: 12, letterSpacing: '0.12em', opacity: 0.8 }}>
                        ADD IMAGE
                      </span>
                    </div>
                  )}

                  {/* Tag overlay */}
                  <div style={{
                    position: 'absolute', inset: 0,
                    background: 'linear-gradient(180deg, rgba(0,0,0,0.0) 50%, rgba(0,0,0,0.72) 100%)',
                  }} />
                  <div style={{
                    position: 'absolute', bottom: 20, left: 20, right: 20,
                    display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end',
                  }}>
                    <span className="mono" style={{
                      fontSize: 11, padding: '5px 12px',
                      background: 'rgba(255,255,255,0.15)',
                      border: '1px solid rgba(255,255,255,0.35)',
                      borderRadius: 999,
                      letterSpacing: '0.08em',
                      color: '#fff',
                    }}>▸ {c.tag}</span>
                    <span style={{
                      width: 34, height: 34, borderRadius: '50%',
                      border: '1.5px solid rgba(255,255,255,0.6)',
                      display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                      color: '#fff', fontSize: 16,
                    }}>↗</span>
                  </div>
                </div>

                {/* BACK — info */}
                <div style={{
                  position: 'absolute', inset: 0,
                  backfaceVisibility: 'hidden',
                  WebkitBackfaceVisibility: 'hidden',
                  transform: 'rotateY(180deg)',
                  background: c.accent,
                  color: c.fg,
                  borderRadius: 22,
                  padding: 28,
                  border: '1.5px solid var(--ink)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}>
                  <div>
                    <span className="mono" style={{
                      fontSize: 11, padding: '4px 10px',
                      background: 'rgba(255,255,255,0.15)',
                      border: '1px solid rgba(255,255,255,0.3)',
                      borderRadius: 999,
                      letterSpacing: '0.08em',
                      display: 'inline-block',
                      marginBottom: 18,
                    }}>▸ {c.tag}</span>
                    <h3 className="display" style={{ fontSize: 26, lineHeight: 1.1, margin: '0 0 14px 0' }}>
                      {c.title}
                    </h3>
                    <p className="grotesk" style={{ fontSize: 14, opacity: 0.88, margin: 0, lineHeight: 1.6 }}>
                      {c.d}
                    </p>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 20 }}>
                    <a href="#contact" style={{
                      padding: '10px 20px',
                      borderRadius: 999,
                      border: '1.5px solid currentColor',
                      fontSize: 13, fontWeight: 600,
                      fontFamily: 'Space Grotesk, sans-serif',
                      opacity: 0.9,
                    }}>Let's work →</a>
                    <span style={{ fontSize: 12, opacity: 0.6, fontFamily: 'JetBrains Mono, monospace' }}>
                      click to flip back
                    </span>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 720px) {
          .work-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
};
