// Mini interactive dashboard demo — proves analytics chops live on the page
const Dashboard = () => {
  const [range, setRange] = React.useState('30d');
  const [metric, setMetric] = React.useState('sessions');

  const datasets = {
    '7d':  { sessions: [820, 945, 1102, 988, 1245, 1380, 1420], revenue: [4200, 5100, 6300, 5800, 7100, 8400, 8800], conversions: [12, 18, 22, 19, 28, 34, 36] },
    '30d': { sessions: [620, 680, 712, 745, 802, 858, 902, 940, 988, 1024, 1102, 1156, 1220, 1245, 1310, 1380, 1422, 1488, 1540, 1602, 1668, 1715, 1780, 1822, 1875, 1932, 1988, 2042, 2105, 2168], revenue: [], conversions: [] },
    '90d': { sessions: [400, 420, 460, 490, 520, 545, 580, 620, 660, 700, 745, 790, 840, 895, 950, 1010, 1060, 1115, 1170, 1230, 1280, 1340, 1400, 1465, 1525, 1590, 1655, 1720, 1790, 1860, 1925, 1995, 2060, 2125, 2195, 2260], revenue: [], conversions: [] },
  };

  // Compute revenue/conversions from sessions for non-7d ranges
  ['30d', '90d'].forEach(r => {
    if (datasets[r].revenue.length === 0) {
      datasets[r].revenue = datasets[r].sessions.map(s => Math.round(s * (4.5 + Math.random() * 1.5)));
      datasets[r].conversions = datasets[r].sessions.map(s => Math.round(s * 0.018));
    }
  });

  const data = datasets[range][metric];
  const total = data.reduce((a, b) => a + b, 0);
  const max = Math.max(...data);
  const min = Math.min(...data);
  const avg = total / data.length;

  const metricConfig = {
    sessions: { label: 'Sessions', prefix: '', suffix: '', color: 'var(--accent)' },
    revenue: { label: 'Revenue', prefix: '$', suffix: '', color: 'var(--accent-2)' },
    conversions: { label: 'Conversions', prefix: '', suffix: '', color: '#f0a868' },
  };
  const cfg = metricConfig[metric];

  // Top queries
  const topQueries = [
    { q: 'wordpress seo plugin', clicks: 1842, impressions: 28400, ctr: 6.5, pos: 3.2 },
    { q: 'how to optimize core web vitals', clicks: 1224, impressions: 19800, ctr: 6.2, pos: 4.1 },
    { q: 'schema markup ecommerce', clicks: 988, impressions: 21200, ctr: 4.7, pos: 5.8 },
    { q: 'yoast vs rankmath 2026', clicks: 745, impressions: 12600, ctr: 5.9, pos: 4.4 },
    { q: 'local seo checklist', clicks: 612, impressions: 18400, ctr: 3.3, pos: 7.2 },
    { q: 'gsc index coverage report', clicks: 488, impressions: 9200, ctr: 5.3, pos: 5.1 },
  ];

  // Build chart
  const chartW = 720;
  const chartH = 200;
  const stepX = chartW / (data.length - 1);
  const range01 = (max - min) || 1;
  const points = data.map((d, i) => [i * stepX, chartH - ((d - min) / range01) * (chartH - 20) - 10]);
  const path = points.map((p, i) => (i === 0 ? `M ${p[0]} ${p[1]}` : `L ${p[0]} ${p[1]}`)).join(' ');
  const area = path + ` L ${chartW} ${chartH} L 0 ${chartH} Z`;

  return (
    <section id="dashboards" style={{ padding: '80px 0' }}>
      <div className="container">
        <Reveal>
          <div className="section-label">
            <span className="dot"></span> 05 / DASHBOARDS
          </div>
        </Reveal>
        <Reveal delay={100}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 32, flexWrap: 'wrap', gap: 16 }}>
            <h2 className="display" style={{
              fontSize: 'clamp(32px, 4.4vw, 56px)',
              fontWeight: 400, lineHeight: 1.05, margin: 0, letterSpacing: '-0.02em', maxWidth: 700,
            }}>
              Try the dashboard, <em style={{ color: 'var(--accent)', fontStyle: 'italic', fontWeight: 300 }}>not just the screenshot.</em>
            </h2>
            <p style={{ maxWidth: 320, fontSize: 14, color: 'var(--ink-2)', margin: 0 }}>
              A working demo of the kind of reporting I ship — interactive, fast, and built to answer real questions.
            </p>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
            {/* Header */}
            <div style={{
              padding: '16px 24px',
              borderBottom: '1px solid var(--line)',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: 12,
              background: 'rgba(0,0,0,0.2)',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <LiveDot />
                <span className="mono" style={{ fontSize: 11, color: 'var(--ink-2)', letterSpacing: '0.06em' }}>
                  ORGANIC PERFORMANCE · DEMO PROPERTY
                </span>
              </div>
              <div style={{ display: 'flex', gap: 8 }}>
                {['7d', '30d', '90d'].map(r => (
                  <button key={r} onClick={() => setRange(r)} className="mono" style={{
                    padding: '6px 12px', fontSize: 11, borderRadius: 6,
                    border: `1px solid ${range === r ? 'var(--accent)' : 'var(--line-2)'}`,
                    background: range === r ? 'rgba(var(--accent-rgb),0.1)' : 'transparent',
                    color: range === r ? 'var(--accent)' : 'var(--ink-2)',
                    letterSpacing: '0.04em',
                  }}>{r.toUpperCase()}</button>
                ))}
              </div>
            </div>

            {/* KPI summary */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', borderBottom: '1px solid var(--line)' }} className="dash-kpis">
              {['sessions', 'revenue', 'conversions'].map((m, i) => {
                const c = metricConfig[m];
                const d = datasets[range][m];
                const t = d.reduce((a, b) => a + b, 0);
                const isActive = metric === m;
                return (
                  <button key={m} onClick={() => setMetric(m)} style={{
                    padding: '20px 24px',
                    background: isActive ? 'rgba(var(--accent-rgb),0.04)' : 'transparent',
                    border: 'none',
                    borderRight: i < 2 ? '1px solid var(--line)' : 'none',
                    borderBottom: isActive ? `2px solid ${c.color}` : '2px solid transparent',
                    textAlign: 'left',
                    color: 'var(--ink)',
                    transition: 'all 0.2s ease',
                  }}>
                    <div className="mono" style={{ fontSize: 10, color: 'var(--ink-3)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 8 }}>
                      {c.label}
                    </div>
                    <div className="display" style={{ fontSize: 32, fontWeight: 500, color: isActive ? c.color : 'var(--ink)', lineHeight: 1 }}>
                      {c.prefix}{t.toLocaleString()}{c.suffix}
                    </div>
                    <div className="mono" style={{ fontSize: 10, color: 'var(--accent)', marginTop: 6 }}>
                      ▲ {(((d[d.length-1] - d[0]) / d[0]) * 100).toFixed(1)}%
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Big chart */}
            <div style={{ padding: '32px 24px', borderBottom: '1px solid var(--line)' }}>
              <svg viewBox={`0 0 ${chartW} ${chartH}`} preserveAspectRatio="none" style={{ width: '100%', height: 200, display: 'block' }}>
                <defs>
                  <linearGradient id="dash-grad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor={cfg.color} stopOpacity="0.3" />
                    <stop offset="100%" stopColor={cfg.color} stopOpacity="0" />
                  </linearGradient>
                </defs>
                {/* Grid lines */}
                {[0, 0.25, 0.5, 0.75, 1].map(p => (
                  <line key={p} x1="0" y1={p * chartH} x2={chartW} y2={p * chartH} stroke="var(--line)" strokeWidth="0.5" strokeDasharray="2 4" />
                ))}
                <path d={area} fill="url(#dash-grad)" />
                <path d={path} fill="none" stroke={cfg.color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                {points.map((p, i) => (
                  i % Math.ceil(points.length / 8) === 0 && (
                    <circle key={i} cx={p[0]} cy={p[1]} r="3" fill={cfg.color} />
                  )
                ))}
              </svg>
            </div>

            {/* Bottom: top queries table */}
            <div style={{ padding: 24 }}>
              <div className="mono" style={{ fontSize: 10, color: 'var(--ink-3)', letterSpacing: '0.12em', marginBottom: 14 }}>
                ▸ TOP QUERIES — SEARCH CONSOLE
              </div>
              <div style={{ overflow: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13, minWidth: 600 }}>
                  <thead>
                    <tr>
                      {['Query', 'Clicks', 'Impressions', 'CTR', 'Avg. Pos'].map(h => (
                        <th key={h} className="mono" style={{
                          textAlign: h === 'Query' ? 'left' : 'right',
                          padding: '10px 8px',
                          fontSize: 10,
                          color: 'var(--ink-3)',
                          letterSpacing: '0.08em',
                          fontWeight: 400,
                          borderBottom: '1px solid var(--line)',
                        }}>{h.toUpperCase()}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {topQueries.map((q, i) => (
                      <tr key={q.q} style={{ borderBottom: '1px solid var(--line)' }}>
                        <td style={{ padding: '14px 8px', color: 'var(--ink)' }}>{q.q}</td>
                        <td className="mono" style={{ padding: '14px 8px', textAlign: 'right' }}>{q.clicks.toLocaleString()}</td>
                        <td className="mono" style={{ padding: '14px 8px', textAlign: 'right', color: 'var(--ink-2)' }}>{q.impressions.toLocaleString()}</td>
                        <td className="mono" style={{ padding: '14px 8px', textAlign: 'right', color: 'var(--accent)' }}>{q.ctr}%</td>
                        <td className="mono" style={{ padding: '14px 8px', textAlign: 'right' }}>{q.pos}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      <style>{`
        @media (max-width: 720px) {
          .dash-kpis { grid-template-columns: 1fr !important; }
          .dash-kpis > button { border-right: none !important; border-bottom: 1px solid var(--line) !important; }
        }
      `}</style>
    </section>
  );
};

window.Dashboard = Dashboard;
