import { TopBar } from './TopBar';

const tags = [
  ['#SEO', '#WordPress'],
  ['#Analytics', '#GA4'],
  ['#PowerBI', '#Looker'],
  ['#KeywordResearch'],
  ['#TechnicalSEO'],
];

export const Hero = () => (
  <section id="hero" style={{ paddingBottom: 28 }}>
    <div className="container">
      <TopBar section="SEO & Analytics Portfolio" />

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 32, alignItems: 'stretch' }} className="hero-row">
        {/* Left — hashtags */}
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: 24, paddingBottom: 16 }}>
          <div style={{ alignSelf: 'flex-end', marginRight: 32 }}>
            <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
              <path d="M20 20 L100 100 M60 100 L100 100 L100 60" stroke="var(--ink)" strokeWidth="14" strokeLinecap="square" strokeLinejoin="miter" />
            </svg>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 10, alignItems: 'flex-end' }}>
            {tags.map((row, i) => (
              <div key={i} style={{
                display: 'flex', gap: 8,
                borderBottom: '1.5px solid var(--ink)',
                paddingBottom: 10,
                width: '100%',
                justifyContent: 'flex-end',
              }}>
                {row.map(t => <span key={t} className="hashtag">{t}</span>)}
              </div>
            ))}
          </div>
        </div>

        {/* Right — big cobalt square */}
        <div style={{
          background: 'var(--accent)',
          borderRadius: 22,
          aspectRatio: '1 / 1',
          position: 'relative',
          overflow: 'hidden',
          color: 'var(--accent-fg)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '32px',
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span className="mono" style={{ fontSize: 12, opacity: 0.85, letterSpacing: '0.06em' }}>
              ● LIVE · OPEN TO ROLES
            </span>
            <span className="mono" style={{ fontSize: 12, opacity: 0.85, letterSpacing: '0.06em' }}>
              CALI · CO · UTC−5
            </span>
          </div>

          <div style={{
            fontFamily: 'Archivo Black',
            fontSize: 'clamp(72px, 13vw, 200px)',
            lineHeight: 0.82,
            letterSpacing: '-0.04em',
            textTransform: 'uppercase',
            alignSelf: 'flex-end',
            textAlign: 'right',
          }}>
            <div>KATHE</div>
            <div>RIN</div>
            <div style={{ color: 'rgba(255,255,255,0.92)' }}>LASSO</div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
            <div className="display" style={{
              fontSize: 'clamp(40px, 7vw, 88px)',
              lineHeight: 1,
              fontFamily: 'Archivo Black',
            }}>2026</div>
            <div style={{ textAlign: 'right' }}>
              <div className="grotesk" style={{ fontSize: 13, fontWeight: 500, opacity: 0.85 }}>Portfolio</div>
              <div className="display" style={{ fontSize: 22, marginTop: 2 }}>v.05</div>
            </div>
          </div>
        </div>
      </div>

      <div style={{
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        gap: 12,
        paddingTop: 22,
        paddingBottom: 22,
        borderBottom: '1.5px solid var(--ink)',
        marginTop: 18,
      }}>
        <span className="grotesk" style={{ fontSize: 16, fontWeight: 500 }}>See More</span>
        <a href="#aboutme" style={{
          width: 32, height: 32, borderRadius: '50%',
          border: '1.5px solid var(--ink)',
          display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
          color: 'var(--ink)',
        }}>↓</a>
      </div>
    </div>

    <style>{`
      @media (max-width: 860px) {
        .hero-row { grid-template-columns: 1fr !important; }
      }
    `}</style>
  </section>
);
