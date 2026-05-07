const CASE_STUDIES = [
  {
    id: 'cs1',
    industry: 'E-commerce',
    title: 'Fashion retailer — organic revenue tripled in 8 months',
    summary: 'Rebuilt site architecture, fixed indexation issues for 4.2K product pages, and shipped a long-tail content engine focused on commercial-intent queries.',
    period: '8 months',
    role: 'SEO Lead',
    metrics: [
      { label: 'Organic Sessions', from: '42K', to: '186K', delta: '+343%' },
      { label: 'Organic Revenue', from: '$28K', to: '$94K', delta: '+236%' },
      { label: 'Indexed Pages', from: '1.1K', to: '4.0K', delta: '+264%' },
      { label: 'Avg. Position', from: '24.3', to: '8.1', delta: '−16.2' },
    ],
    chart: [42, 48, 51, 58, 67, 79, 88, 102, 121, 138, 158, 172, 186],
    tags: ['Technical SEO', 'Content', 'Schema', 'Yoast'],
    color: 'var(--accent)',
  },
  {
    id: 'cs2',
    industry: 'B2B SaaS',
    title: 'Cluster strategy lifts demo signups +180%',
    summary: 'Built 6 topic clusters around buyer-journey keywords. Migrated blog to WordPress with optimized schema and internal linking. Coordinated with content team on briefs.',
    period: '6 months',
    role: 'SEO + Analytics',
    metrics: [
      { label: 'Top-10 Keywords', from: '38', to: '214', delta: '+463%' },
      { label: 'MQL from Organic', from: '24/mo', to: '67/mo', delta: '+179%' },
      { label: 'Backlinks (DR40+)', from: '12', to: '58', delta: '+383%' },
      { label: 'Bounce Rate', from: '68%', to: '41%', delta: '−27 pts' },
    ],
    chart: [12, 18, 28, 42, 55, 71, 89, 108, 132, 158, 178, 198, 214],
    tags: ['Content Clusters', 'WordPress', 'GA4', 'Internal Linking'],
    color: 'var(--accent-2)',
  },
  {
    id: 'cs3',
    industry: 'Local Services',
    title: 'Local SEO playbook for multi-location service brand',
    summary: 'Optimized 18 GBP listings, built city-landing pages with unique schema, and shipped review-acquisition automation. Tracked everything in a Looker dashboard.',
    period: '4 months',
    role: 'SEO Specialist',
    metrics: [
      { label: 'Local Pack Visibility', from: '11%', to: '64%', delta: '+53 pts' },
      { label: 'GBP Calls/mo', from: '142', to: '478', delta: '+237%' },
      { label: 'Direction Requests', from: '88', to: '312', delta: '+254%' },
      { label: '5-star Reviews', from: '124', to: '410', delta: '+231%' },
    ],
    chart: [11, 14, 19, 26, 32, 38, 44, 50, 55, 58, 61, 63, 64],
    tags: ['Local SEO', 'GBP', 'Schema', 'Looker'],
    color: '#f0a868',
  },
  {
    id: 'cs4',
    industry: 'Publishing',
    title: 'Editorial site recovers from Core Update with technical overhaul',
    summary: 'Diagnosed E-E-A-T gaps and Core Web Vitals issues using Screaming Frog + GSC. Rolled out author bios, schema, page-speed fixes, and content pruning across 1.8K articles.',
    period: '5 months',
    role: 'Technical SEO',
    metrics: [
      { label: 'Organic Traffic', from: '−42%', to: '+18%', delta: 'recovery' },
      { label: 'CWV Pass Rate', from: '23%', to: '91%', delta: '+68 pts' },
      { label: 'Indexed Articles', from: '1.8K', to: '1.2K', delta: '−33% (pruned)' },
      { label: 'Avg. CTR', from: '2.4%', to: '4.7%', delta: '+96%' },
    ],
    chart: [100, 92, 78, 65, 58, 62, 71, 82, 94, 105, 112, 116, 118],
    tags: ['Core Web Vitals', 'E-E-A-T', 'Screaming Frog', 'Pruning'],
    color: '#7de2c0',
  },
];

const FILTERS = ['All', 'E-commerce', 'B2B SaaS', 'Local Services', 'Publishing'];

const CaseStudies = () => {
  const [filter, setFilter] = React.useState('All');
  const [expanded, setExpanded] = React.useState(null);
  const visible = filter === 'All' ? CASE_STUDIES : CASE_STUDIES.filter(c => c.industry === filter);

  return (
    <section id="work" style={{ padding: '120px 0 80px' }}>
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 40, flexWrap: 'wrap', gap: 16 }}>
          <div>
            <Reveal>
              <div className="section-label">
                <span className="dot"></span> 04 / CASE STUDIES
              </div>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="display" style={{
                fontSize: 'clamp(32px, 4.4vw, 56px)',
                fontWeight: 400,
                lineHeight: 1.05,
                margin: 0,
                letterSpacing: '-0.02em',
                maxWidth: 800,
              }}>
                Selected work, with the <em style={{ color: 'var(--accent)', fontStyle: 'italic', fontWeight: 300 }}>numbers attached.</em>
              </h2>
            </Reveal>
            <Reveal delay={150}>
              <p className="mono" style={{ fontSize: 11, color: 'var(--ink-3)', letterSpacing: '0.06em', marginTop: 16 }}>
                * REPRESENTATIVE EXAMPLES — METRICS BASED ON REAL ENGAGEMENTS, ANONYMIZED.
              </p>
            </Reveal>
          </div>
          <Reveal delay={200}>
            <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
              {FILTERS.map(f => (
                <Tag key={f} active={filter === f} onClick={() => setFilter(f)}>{f}</Tag>
              ))}
            </div>
          </Reveal>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {visible.map((cs, i) => (
            <Reveal key={cs.id} delay={i * 80}>
              <div
                className="case-card"
                onClick={() => setExpanded(expanded === cs.id ? null : cs.id)}
                style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--line)',
                  borderRadius: 20,
                  padding: 0,
                  overflow: 'hidden',
                  cursor: 'pointer',
                  transition: 'all 0.4s cubic-bezier(0.2, 0.8, 0.2, 1)',
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--line-2)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--line)'; }}
              >
                <div style={{ padding: '28px 32px', display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 32, alignItems: 'center' }} className="case-row">
                  <div>
                    <div style={{ display: 'flex', gap: 10, alignItems: 'center', marginBottom: 14 }}>
                      <span className="mono" style={{
                        fontSize: 10, color: cs.color, letterSpacing: '0.12em',
                        padding: '3px 9px', borderRadius: 4,
                        background: 'rgba(var(--accent-rgb),0.08)',
                        border: `1px solid ${cs.color}33`,
                      }}>
                        ▸ {cs.industry.toUpperCase()}
                      </span>
                      <span className="mono" style={{ fontSize: 10, color: 'var(--ink-3)', letterSpacing: '0.06em' }}>
                        {cs.period} · {cs.role}
                      </span>
                    </div>
                    <h3 className="display" style={{ fontSize: 28, fontWeight: 500, margin: '0 0 12px 0', lineHeight: 1.1, letterSpacing: '-0.01em' }}>
                      {cs.title}
                    </h3>
                    <p style={{ fontSize: 14, color: 'var(--ink-2)', margin: '0 0 16px 0', lineHeight: 1.55, maxWidth: 540 }}>
                      {cs.summary}
                    </p>
                    <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                      {cs.tags.map(t => <Tag key={t}>{t}</Tag>)}
                    </div>
                  </div>

                  {/* Big chart */}
                  <div style={{
                    border: '1px solid var(--line)',
                    borderRadius: 12,
                    padding: 16,
                    background: 'rgba(0,0,0,0.2)',
                  }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 8 }}>
                      <span className="mono" style={{ fontSize: 9, color: 'var(--ink-3)', letterSpacing: '0.08em' }}>
                        ORGANIC TREND
                      </span>
                      <span className="mono" style={{ fontSize: 11, color: cs.color, fontWeight: 600 }}>
                        {cs.metrics[0].delta}
                      </span>
                    </div>
                    <Sparkline data={cs.chart} color={cs.color} width={300} height={70} />
                  </div>
                </div>

                {/* Metrics row */}
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(4, 1fr)',
                  borderTop: '1px solid var(--line)',
                }} className="case-metrics">
                  {cs.metrics.map((m, j) => (
                    <div key={j} style={{
                      padding: '20px 24px',
                      borderRight: j < 3 ? '1px solid var(--line)' : 'none',
                    }}>
                      <div className="mono" style={{ fontSize: 9, color: 'var(--ink-3)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 8 }}>
                        {m.label}
                      </div>
                      <div style={{ display: 'flex', alignItems: 'baseline', gap: 8 }}>
                        <span className="display" style={{ fontSize: 22, fontWeight: 500, color: cs.color }}>
                          {m.to}
                        </span>
                        <span className="mono" style={{ fontSize: 10, color: 'var(--ink-3)' }}>
                          from {m.from}
                        </span>
                      </div>
                      <div className="mono" style={{ fontSize: 10, color: cs.color, marginTop: 4, fontWeight: 600 }}>
                        {m.delta}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Expanded details */}
                <div style={{
                  maxHeight: expanded === cs.id ? 400 : 0,
                  overflow: 'hidden',
                  transition: 'max-height 0.6s cubic-bezier(0.2, 0.8, 0.2, 1)',
                  borderTop: expanded === cs.id ? '1px solid var(--line)' : 'none',
                }}>
                  <div style={{ padding: '24px 32px', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }} className="case-detail">
                    <div>
                      <div className="mono" style={{ fontSize: 10, color: 'var(--accent)', letterSpacing: '0.08em', marginBottom: 8 }}>▸ AUDIT</div>
                      <p style={{ fontSize: 13, color: 'var(--ink-2)', margin: 0, lineHeight: 1.55 }}>
                        Crawl, indexation, schema validation, CWV baseline, and competitive gap analysis.
                      </p>
                    </div>
                    <div>
                      <div className="mono" style={{ fontSize: 10, color: 'var(--accent)', letterSpacing: '0.08em', marginBottom: 8 }}>▸ EXECUTION</div>
                      <p style={{ fontSize: 13, color: 'var(--ink-2)', margin: 0, lineHeight: 1.55 }}>
                        On-page rewrites, technical fixes, content briefs, internal linking, dashboarding.
                      </p>
                    </div>
                    <div>
                      <div className="mono" style={{ fontSize: 10, color: 'var(--accent)', letterSpacing: '0.08em', marginBottom: 8 }}>▸ MEASUREMENT</div>
                      <p style={{ fontSize: 13, color: 'var(--ink-2)', margin: 0, lineHeight: 1.55 }}>
                        Weekly cohort tracking in GA4 + GSC, monthly C-level review with Looker.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Expand button */}
                <div style={{
                  borderTop: '1px solid var(--line)',
                  padding: '12px 32px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  background: 'rgba(0,0,0,0.15)',
                }}>
                  <span className="mono" style={{ fontSize: 10, color: 'var(--ink-3)', letterSpacing: '0.08em' }}>
                    CASE / {cs.id.toUpperCase()}
                  </span>
                  <span className="mono" style={{ fontSize: 11, color: 'var(--ink-2)', display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                    {expanded === cs.id ? 'Collapse' : 'See methodology'}
                    <span style={{ transform: expanded === cs.id ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.3s', display: 'inline-block' }}>↓</span>
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 960px) {
          .case-row { grid-template-columns: 1fr !important; }
          .case-metrics { grid-template-columns: repeat(2, 1fr) !important; }
          .case-metrics > div:nth-child(2) { border-right: none !important; }
          .case-detail { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
};

window.CaseStudies = CaseStudies;
