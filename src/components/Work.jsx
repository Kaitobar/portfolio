import { useState, useEffect } from 'react';
import { SectionTabs } from './TopBar';

const cases = [
  {
    tag: 'SEO AUDIT',
    title: 'Full technical & on-page SEO audits',
    summary: 'Crawl analysis, Core Web Vitals, schema markup, indexation & internal linking. Delivered with a prioritized action plan.',
    detail: 'A full SEO audit covers everything affecting how search engines find, crawl, and rank your site. I use tools like SEMrush and Screaming Frog to analyze technical health (site speed, mobile, crawl errors), on-page signals (titles, headings, content gaps), schema markup implementation, and indexing issues. You get a clear roadmap so you know exactly what to fix first and why.',
    images: ['https://i.ibb.co/rGbgMkDS/Captura-de-pantalla-2026-05-06-233448.png'],
    accent: 'var(--accent)',
    fg: 'var(--accent-fg)',
    icon: '🔍',
  },
  {
    tag: 'WORDPRESS',
    title: 'WordPress build, migration & optimization',
    summary: 'Theme setup, Yoast configuration, speed optimization, CWV fixes, and plugin management for lean, fast sites.',
    detail: 'From new builds to migrations and existing-site overhauls — I handle WordPress end to end. That means choosing the right stack, configuring Yoast for maximum SEO impact, optimizing for Core Web Vitals, and keeping everything running cleanly without plugin bloat.',
    images: ['https://i.ibb.co/849Kkpzv/Captura-de-pantalla-2026-05-06-235444.png'],
    accent: 'var(--ink)',
    fg: 'var(--paper)',
    icon: '⚡',
  },
  {
    tag: 'KEYWORD RESEARCH',
    title: 'Keyword strategy & content planning',
    summary: 'Search intent mapping, topic clusters, competitor gap analysis, and content briefs that drive qualified organic traffic.',
    detail: 'Keyword research is more than a list of terms — it\'s understanding what your audience is actually looking for and building a content architecture around that. I map search intent, identify quick wins vs long-term plays, and deliver content briefs your team can execute without guesswork.',
    images: ['https://i.ibb.co/MxYBqWjC/Captura-de-pantalla-2026-05-06-235831.png'],
    accent: 'var(--accent)',
    fg: 'var(--accent-fg)',
    icon: '📊',
  },
  {
    tag: 'REPORTS & DASHBOARDS',
    title: 'GA4, GSC, Power BI & Looker reporting',
    summary: 'Custom dashboards that connect SEO performance to business results. Built for clients who want clarity, not noise.',
    detail: 'I build reporting systems that make it easy to see what\'s working and what needs attention, without wading through raw data. Whether it\'s a GA4 exploration, a GSC performance dashboard, or a full Power BI or Looker Studio report, I connect the data sources and design for decision-making, not just metrics.',
    images: ['https://i.ibb.co/bxw2prb/Captura-de-pantalla-2026-05-07-000000.png'],
    accent: 'var(--ink)',
    fg: 'var(--paper)',
    icon: '📈',
  },
];

export const Work = () => {
  const [open, setOpen] = useState(null);

  useEffect(() => {
    if (open !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const active = open !== null ? cases[open] : null;

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
              onClick={() => setOpen(i)}
              style={{
                background: c.accent,
                color: c.fg,
                borderRadius: 22,
                padding: 0,
                minHeight: 260,
                display: 'flex',
                flexDirection: 'column',
                border: '1.5px solid var(--ink)',
                cursor: 'pointer',
                overflow: 'hidden',
                transition: 'transform 0.25s, box-shadow 0.25s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,0,0,0.15)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              {/* Image area */}
              <div style={{
                flex: 1,
                minHeight: 160,
                background: c.images[0]
                  ? `url(${c.images[0]}) center/cover no-repeat`
                  : 'rgba(255,255,255,0.08)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 56,
                borderBottom: '1.5px solid rgba(255,255,255,0.12)',
              }}>
                {!c.images[0] && c.icon}
              </div>

              {/* Bottom info */}
              <div style={{ padding: '18px 22px 20px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
                  <span className="mono" style={{
                    fontSize: 10, padding: '4px 10px',
                    background: 'rgba(255,255,255,0.15)',
                    border: '1px solid rgba(255,255,255,0.25)',
                    borderRadius: 999,
                    letterSpacing: '0.08em',
                  }}>▸ {c.tag}</span>
                  <span style={{
                    width: 30, height: 30, borderRadius: '50%',
                    border: '1.5px solid currentColor',
                    display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 14, opacity: 0.8,
                  }}>↗</span>
                </div>
                <h3 className="display" style={{ fontSize: 20, lineHeight: 1.15, margin: '0 0 6px 0' }}>
                  {c.title}
                </h3>
                <p className="grotesk" style={{ fontSize: 13, opacity: 0.8, margin: 0, lineHeight: 1.5 }}>
                  {c.summary}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal overlay */}
      {active && (
        <div
          onClick={() => setOpen(null)}
          style={{
            position: 'fixed', inset: 0,
            background: 'rgba(10,10,10,0.7)',
            backdropFilter: 'blur(6px)',
            WebkitBackdropFilter: 'blur(6px)',
            zIndex: 1000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px',
            animation: 'fadeIn 0.2s ease',
          }}
        >
          <div
            onClick={e => e.stopPropagation()}
            style={{
              background: active.accent,
              color: active.fg,
              borderRadius: 28,
              border: '1.5px solid var(--ink)',
              width: '100%',
              maxWidth: 780,
              maxHeight: '88vh',
              overflowY: 'auto',
              animation: 'scaleIn 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
            }}
          >
            {/* Modal header */}
            <div style={{
              display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              padding: '24px 28px 0',
            }}>
              <span className="mono" style={{
                fontSize: 11, padding: '5px 12px',
                background: 'rgba(255,255,255,0.15)',
                border: '1px solid rgba(255,255,255,0.25)',
                borderRadius: 999,
                letterSpacing: '0.08em',
              }}>▸ {active.tag}</span>
              <button
                onClick={() => setOpen(null)}
                style={{
                  width: 36, height: 36, borderRadius: '50%',
                  border: '1.5px solid currentColor',
                  background: 'transparent',
                  color: 'inherit',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 18, cursor: 'pointer',
                  opacity: 0.8,
                }}>✕</button>
            </div>

            {/* Title */}
            <div style={{ padding: '20px 28px 24px' }}>
              <h2 className="display" style={{
                fontSize: 'clamp(28px, 4vw, 44px)',
                lineHeight: 1.05, margin: '0 0 16px 0',
              }}>
                {active.title}
              </h2>
              <p className="grotesk" style={{
                fontSize: 16, opacity: 0.88, margin: 0, lineHeight: 1.65, maxWidth: 600,
              }}>
                {active.detail}
              </p>
            </div>

            {/* Images grid */}
            {active.images.length > 0 && (
              <div style={{
                display: 'grid',
                gridTemplateColumns: active.images.length === 1 ? '1fr' : 'repeat(2, 1fr)',
                gap: 3,
                margin: '0 3px',
              }}>
                {active.images.map((src, idx) => (
                  <img key={idx} src={src} alt="" style={{
                    width: '100%', aspectRatio: '16/9',
                    objectFit: 'cover',
                    borderRadius: idx === 0 ? '0' : '0',
                  }} />
                ))}
              </div>
            )}

            {/* Placeholder image area when no images */}
            {active.images.length === 0 && (
              <div style={{
                margin: '0 28px',
                borderRadius: 16,
                border: '1.5px dashed rgba(255,255,255,0.3)',
                padding: '32px 24px',
                textAlign: 'center',
                opacity: 0.5,
              }}>
                <div style={{ fontSize: 36, marginBottom: 8 }}>🖼</div>
                <div className="mono" style={{ fontSize: 11, letterSpacing: '0.08em' }}>
                  YOUR IMAGES GO HERE
                </div>
              </div>
            )}

            {/* CTA */}
            <div style={{ padding: '24px 28px 28px', display: 'flex', gap: 12, alignItems: 'center' }}>
              <a href="#contact" onClick={() => setOpen(null)} style={{
                padding: '12px 24px',
                borderRadius: 999,
                border: '1.5px solid currentColor',
                fontSize: 14, fontWeight: 600,
                fontFamily: 'Space Grotesk, sans-serif',
              }}>Let's work together →</a>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 720px) {
          .work-grid { grid-template-columns: 1fr !important; }
        }
        @keyframes fadeIn { from { opacity: 0 } to { opacity: 1 } }
        @keyframes scaleIn { from { opacity: 0; transform: scale(0.92) } to { opacity: 1; transform: scale(1) } }
      `}</style>
    </section>
  );
};
