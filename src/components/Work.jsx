import { SectionTabs } from './TopBar';

const cases = [
  { tag: 'SEO AUDIT', title: 'Full technical & on-page SEO audits', d: 'Crawl analysis, Core Web Vitals, indexation issues, schema markup, internal linking structure — with a clear action plan.', m: '↗', c: 'accent' },
  { tag: 'WORDPRESS', title: 'WordPress build, migration & optimization', d: 'Theme setup, Yoast configuration, speed optimization, CWV fixes, and plugin management for lean, fast sites.', m: '↗', c: 'ink' },
  { tag: 'KEYWORD RESEARCH', title: 'Keyword strategy & content planning', d: 'Search intent mapping, topic clusters, competitor gap analysis, and content briefs that drive qualified organic traffic.', m: '↗', c: 'accent' },
  { tag: 'REPORTS & DASHBOARDS', title: 'GA4, GSC, Power BI & Looker reporting', d: 'Custom dashboards that connect SEO performance to business results — built for clients who want clarity, not noise.', m: '↗', c: 'ink' },
];

export const Work = () => (
  <section id="work" style={{ paddingBottom: 12 }}>
    <div className="container">
      <SectionTabs active="Work" />

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 22 }}>
        <h2 className="display" style={{ fontSize: 'clamp(40px, 5vw, 64px)', margin: 0, lineHeight: 1 }}>
          Selected Case Studies
        </h2>
        <span className="grotesk" style={{ fontSize: 13, color: 'var(--ink-2)' }}>
          * representative metrics, anonymized
        </span>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 18 }} className="work-grid">
        {cases.map((c, i) => (
          <div key={i} style={{
            background: c.c === 'accent' ? 'var(--accent)' : 'var(--ink)',
            color: 'var(--paper)',
            borderRadius: 22,
            padding: 24,
            minHeight: 220,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            border: '1.5px solid var(--ink)',
            transition: 'transform 0.3s',
          }}
            onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-4px)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
          >
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
                <span className="mono" style={{
                  fontSize: 11, padding: '4px 10px',
                  background: 'rgba(255,255,255,0.15)',
                  border: '1px solid rgba(255,255,255,0.3)',
                  borderRadius: 999,
                  letterSpacing: '0.08em',
                }}>▸ {c.tag}</span>
                <span className="display" style={{ fontSize: 28, lineHeight: 1 }}>{c.m}</span>
              </div>
              <h3 className="display" style={{ fontSize: 28, lineHeight: 1.05, margin: '0 0 12px 0' }}>
                {c.title}
              </h3>
              <p className="grotesk" style={{ fontSize: 14, opacity: 0.85, margin: 0, lineHeight: 1.5 }}>
                {c.d}
              </p>
            </div>
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 18 }}>
              <span style={{
                width: 36, height: 36, borderRadius: '50%',
                border: '1.5px solid currentColor',
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
              }}>↗</span>
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
