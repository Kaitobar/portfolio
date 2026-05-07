const Hero = () => {
  const [now, setNow] = React.useState(new Date());
  React.useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(t);
  }, []);

  const time = now.toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' });

  // Mini realistic SEO traffic chart
  const trafficData = [120, 132, 145, 138, 162, 178, 195, 188, 220, 245, 268, 290, 315, 308, 340, 372, 401, 388, 425, 460, 489, 510, 542, 575];

  // KPI tiles
  const kpis = [
    { label: 'Organic Sessions', value: 248, suffix: 'K', delta: '+34.2%', sub: 'vs last 90d', spark: [40,55,52,68,72,80,76,92,105,118,128,142,138] },
    { label: 'Avg. Position', value: 4.2, decimals: 1, delta: '−2.8 pos', sub: 'top 10 keywords', spark: [12,11,11,10,9,8,8,7,6,5,5,4.5,4.2], invert: true },
    { label: 'Conv. Rate', value: 3.8, decimals: 1, suffix: '%', delta: '+1.4 pts', sub: 'goal completions', spark: [1.8,2.0,2.1,2.4,2.6,2.8,3.0,3.1,3.3,3.5,3.6,3.7,3.8] },
  ];

  return (
    <section id="home" style={{ position: 'relative', paddingTop: 120, paddingBottom: 80 }}>
      <div className="container">
        {/* Top status bar */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: 48,
          flexWrap: 'wrap',
          gap: 12,
        }}>
          <div className="mono" style={{ fontSize: 11, color: 'var(--ink-3)', letterSpacing: '0.08em' }}>
            <LiveDot /> &nbsp;AVAILABLE FOR HIRE · CALI, COLOMBIA · UTC−5 · {time}
          </div>
          <div className="mono" style={{ fontSize: 11, color: 'var(--ink-3)', letterSpacing: '0.08em' }}>
            PORTFOLIO/V.2026.05 — KATHERIN LASSO TOBAR
          </div>
        </div>

        {/* Main hero */}
        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 48, alignItems: 'start' }} className="hero-grid">

          <div>
            <Reveal>
              <div className="mono" style={{
                fontSize: 11, letterSpacing: '0.12em', color: 'var(--ink-3)',
                marginBottom: 28, textTransform: 'uppercase'
              }}>
                — SEO Analyst &nbsp;×&nbsp; Digital Analyst &nbsp;×&nbsp; WordPress Specialist
              </div>
            </Reveal>

            <Reveal delay={100}>
              <h1 className="display" style={{
                fontSize: 'clamp(48px, 8vw, 104px)',
                fontWeight: 400,
                lineHeight: 0.95,
                margin: '0 0 28px 0',
                letterSpacing: '-0.03em',
              }}>
                I optimize<br/>
                with <em style={{ color: 'var(--accent)', fontStyle: 'italic', fontWeight: 300 }}>data</em>,<br/>
                not&nbsp;guesses.
              </h1>
            </Reveal>

            <Reveal delay={200}>
              <p style={{
                fontSize: 18, lineHeight: 1.55, color: 'var(--ink-2)',
                maxWidth: 540, margin: '0 0 36px 0', fontWeight: 300,
              }}>
                I'm Katherin — an SEO &amp; WordPress specialist who pairs marketing
                fluency with rigorous analytics. I rank pages, build dashboards, and
                turn organic traffic into measurable revenue.
              </p>
            </Reveal>

            <Reveal delay={300}>
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                <a href="#work" className="btn btn-primary">
                  See case studies <span>→</span>
                </a>
                <a href="#contact" className="btn">
                  Get in touch
                </a>
                <a href="#" className="btn" onClick={(e) => { e.preventDefault(); alert('CV download placeholder — drop your PDF in /assets and link it here'); }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 4v12m0 0l-4-4m4 4l4-4M4 20h16" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  Download CV
                </a>
              </div>
            </Reveal>

            <Reveal delay={400}>
              <div style={{ marginTop: 56, display: 'flex', gap: 32, flexWrap: 'wrap' }}>
                {[
                  { v: '3+', l: 'years in SEO' },
                  { v: '40+', l: 'pages ranked top-10' },
                  { v: '2', l: 'languages (ES/EN B2)' },
                ].map((s, i) => (
                  <div key={i}>
                    <div className="display" style={{ fontSize: 32, fontWeight: 500, lineHeight: 1 }}>{s.v}</div>
                    <div className="mono" style={{ fontSize: 10, color: 'var(--ink-3)', letterSpacing: '0.08em', textTransform: 'uppercase', marginTop: 6 }}>
                      {s.l}
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Right: Live mini-dashboard */}
          <Reveal delay={150}>
            <div className="hero-dashboard card" style={{
              padding: 0,
              background: 'var(--bg-card)',
              boxShadow: '0 30px 80px rgba(0,0,0,0.12), 0 0 0 1px rgba(var(--accent-rgb),0.06)',
            }}>
              {/* Window header */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                padding: '12px 16px',
                borderBottom: '1px solid var(--line)',
                background: 'rgba(0,0,0,0.2)',
              }}>
                <div style={{ display: 'flex', gap: 6 }}>
                  <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#3a3f3c' }} />
                  <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#3a3f3c' }} />
                  <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#3a3f3c' }} />
                </div>
                <div className="mono" style={{ fontSize: 10, color: 'var(--ink-3)', marginLeft: 8, letterSpacing: '0.08em' }}>
                  ANALYTICS · LIVE PREVIEW
                </div>
                <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 6 }}>
                  <LiveDot />
                  <span className="mono" style={{ fontSize: 10, color: 'var(--accent)' }}>SYNC</span>
                </div>
              </div>

              {/* Big sparkline */}
              <div style={{ padding: '24px 20px 8px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 12 }}>
                  <div>
                    <div className="mono" style={{ fontSize: 10, color: 'var(--ink-3)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                      Organic traffic — last 24 weeks
                    </div>
                    <div style={{ display: 'flex', alignItems: 'baseline', gap: 10, marginTop: 8 }}>
                      <span className="display" style={{ fontSize: 36, fontWeight: 500, lineHeight: 1 }}>
                        <Counter to={575} suffix="K" />
                      </span>
                      <span className="mono" style={{ fontSize: 11, color: 'var(--accent)', fontWeight: 600 }}>
                        ▲ 379%
                      </span>
                    </div>
                  </div>
                  <div className="mono" style={{ fontSize: 10, color: 'var(--ink-3)', textAlign: 'right' }}>
                    PEAK<br/><span style={{ color: 'var(--ink) ' }}>WK 24</span>
                  </div>
                </div>
                <div style={{ marginTop: 8 }}>
                  <Sparkline data={trafficData} width={360} height={80} />
                </div>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  marginTop: 6,
                }}>
                  <span className="mono" style={{ fontSize: 9, color: 'var(--ink-3)' }}>WK 1</span>
                  <span className="mono" style={{ fontSize: 9, color: 'var(--ink-3)' }}>WK 12</span>
                  <span className="mono" style={{ fontSize: 9, color: 'var(--ink-3)' }}>WK 24</span>
                </div>
              </div>

              {/* KPI tiles */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', borderTop: '1px solid var(--line)' }}>
                {kpis.map((k, i) => (
                  <div key={i} style={{
                    padding: '16px 14px',
                    borderRight: i < 2 ? '1px solid var(--line)' : 'none',
                  }}>
                    <div className="mono" style={{ fontSize: 9, color: 'var(--ink-3)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: 6 }}>
                      {k.label}
                    </div>
                    <div style={{ display: 'flex', alignItems: 'baseline', gap: 4 }}>
                      <span className="display" style={{ fontSize: 22, fontWeight: 500 }}>
                        <Counter to={k.value} decimals={k.decimals || 0} suffix={k.suffix || ''} />
                      </span>
                    </div>
                    <div className="mono" style={{ fontSize: 10, color: k.invert ? 'var(--accent)' : 'var(--accent)', marginTop: 4 }}>
                      {k.delta}
                    </div>
                    <div style={{ marginTop: 6 }}>
                      <Sparkline data={k.spark} width={100} height={20} fill={false} />
                    </div>
                  </div>
                ))}
              </div>

              {/* Footer ticker */}
              <div style={{
                padding: '10px 16px',
                borderTop: '1px solid var(--line)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                background: 'rgba(0,0,0,0.15)',
              }}>
                <span className="mono" style={{ fontSize: 9, color: 'var(--ink-3)', letterSpacing: '0.08em' }}>
                  GA4 · GSC · SEMRUSH · SCREAMING FROG
                </span>
                <span className="mono" style={{ fontSize: 9, color: 'var(--ink-3)' }}>
                  UPDATED {time}
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      <style>{`
        @media (max-width: 960px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .hero-dashboard { margin-top: 24px; }
        }
      `}</style>
    </section>
  );
};

window.Hero = Hero;
