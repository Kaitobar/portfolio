const About = () => {
  return (
    <section id="about" style={{ padding: '120px 0 80px', position: 'relative' }}>
      <div className="container">
        <Reveal>
          <div className="section-label">
            <span className="dot"></span> 01 / ABOUT
          </div>
        </Reveal>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: 64, alignItems: 'start' }} className="about-grid">

          {/* Photo placeholder + meta */}
          <Reveal>
            <div>
              <div style={{
                aspectRatio: '4/5',
                borderRadius: 16,
                background: 'linear-gradient(135deg, #1a1f1d, #0f1311)',
                border: '1px solid var(--line)',
                position: 'relative',
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                {/* Stripes placeholder */}
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  backgroundImage: 'repeating-linear-gradient(135deg, transparent 0, transparent 14px, rgba(var(--accent-rgb),0.04) 14px, rgba(var(--accent-rgb),0.04) 15px)',
                }} />
                <div style={{ position: 'relative', textAlign: 'center', padding: 24 }}>
                  <div className="display" style={{
                    fontSize: 96, fontWeight: 300, color: 'var(--accent)',
                    lineHeight: 1, letterSpacing: '-0.04em',
                  }}>
                    KL
                  </div>
                  <div className="mono" style={{ fontSize: 10, color: 'var(--ink-3)', letterSpacing: '0.12em', marginTop: 16 }}>
                    [PHOTO PLACEHOLDER]<br/>
                    DROP IMG IN /assets
                  </div>
                </div>
                <div style={{
                  position: 'absolute', top: 12, left: 12,
                  display: 'flex', gap: 6,
                }}>
                  <span className="mono" style={{ fontSize: 9, padding: '3px 8px', borderRadius: 4, background: 'rgba(var(--accent-rgb),0.15)', color: 'var(--accent)', letterSpacing: '0.08em' }}>
                    ● ON
                  </span>
                </div>
                <div style={{
                  position: 'absolute', bottom: 12, right: 12,
                }}>
                  <span className="mono" style={{ fontSize: 9, color: 'var(--ink-3)', letterSpacing: '0.08em' }}>
                    KAT_2026.JPG
                  </span>
                </div>
              </div>

              {/* Quick facts */}
              <div style={{ marginTop: 20, display: 'grid', gap: 0, border: '1px solid var(--line)', borderRadius: 12, overflow: 'hidden' }}>
                {[
                  ['Location', 'Cali, Colombia'],
                  ['Timezone', 'UTC −5'],
                  ['Languages', 'Spanish · English B2'],
                  ['Open to', 'Remote · Hybrid · Relocation'],
                  ['Tools', '12+ daily'],
                ].map(([k, v], i, arr) => (
                  <div key={k} style={{
                    display: 'flex', justifyContent: 'space-between',
                    padding: '10px 14px',
                    borderBottom: i < arr.length - 1 ? '1px solid var(--line)' : 'none',
                  }}>
                    <span className="mono" style={{ fontSize: 11, color: 'var(--ink-3)', letterSpacing: '0.04em', textTransform: 'uppercase' }}>{k}</span>
                    <span className="mono" style={{ fontSize: 11, color: 'var(--ink)' }}>{v}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Text */}
          <Reveal delay={150}>
            <div>
              <h2 className="display" style={{
                fontSize: 'clamp(32px, 4.4vw, 56px)',
                fontWeight: 400,
                lineHeight: 1.05,
                margin: '0 0 28px 0',
                letterSpacing: '-0.02em',
              }}>
                Marketer's intuition.<br/>
                <em style={{ color: 'var(--accent)', fontStyle: 'italic', fontWeight: 300 }}>Analyst's discipline.</em>
              </h2>

              <div style={{ fontSize: 17, lineHeight: 1.65, color: 'var(--ink-2)', fontWeight: 300, display: 'flex', flexDirection: 'column', gap: 18, maxWidth: 620 }}>
                <p style={{ margin: 0 }}>
                  Most SEO people optimize and hope. Most analysts report and wait. I do
                  both — and that's the difference. I'll write the brief, ship the on-page
                  fixes, then build the dashboard that proves it worked.
                </p>
                <p style={{ margin: 0 }}>
                  At <strong style={{ color: 'var(--ink)', fontWeight: 500 }}>Contáctica</strong> (Puerto Rico),
                  I've spent 3+ years running keyword research, technical audits, and
                  content strategy alongside automated reporting in Power BI, Python and
                  SQL. The combo means I'm comfortable in the Search Console
                  trenches and in a stakeholder dashboard review.
                </p>
                <p style={{ margin: 0 }}>
                  I work autonomously, communicate clearly, and ship organized. If the
                  number doesn't move, I'll tell you why — and what we change next.
                </p>
              </div>

              {/* Pillars */}
              <div style={{
                marginTop: 40,
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: 12,
              }} className="pillars">
                {[
                  { n: '01', t: 'Rank', d: 'Keyword research, on-page, technical SEO, content briefs.' },
                  { n: '02', t: 'Measure', d: 'GA4, GSC, Looker, Power BI dashboards & reporting.' },
                  { n: '03', t: 'Iterate', d: 'A/B tests, SQL/Python pipelines, weekly opt cycles.' },
                ].map(p => (
                  <div key={p.n} style={{
                    padding: 18,
                    border: '1px solid var(--line)',
                    borderRadius: 12,
                    background: 'var(--bg-card)',
                    transition: 'all 0.3s ease',
                    cursor: 'default',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = 'var(--accent)';
                    e.currentTarget.style.transform = 'translateY(-3px)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = 'var(--line)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                  >
                    <div className="mono" style={{ fontSize: 10, color: 'var(--ink-3)', letterSpacing: '0.08em', marginBottom: 10 }}>
                      / {p.n}
                    </div>
                    <div className="display" style={{ fontSize: 22, fontWeight: 500, marginBottom: 6 }}>{p.t}</div>
                    <div style={{ fontSize: 13, color: 'var(--ink-2)', lineHeight: 1.45 }}>{p.d}</div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      <style>{`
        @media (max-width: 960px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
          .pillars { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
};

window.About = About;
