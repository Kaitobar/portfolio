import { useState, useEffect } from 'react';
import { SectionTabs } from './TopBar';
import { Counter, Sparkline } from './primitives';

const series = {
  '7D':  [180, 195, 210, 198, 232, 248, 260],
  '30D': [120, 135, 142, 158, 165, 178, 192, 205, 218, 232, 245, 268, 282, 295, 310, 325, 340, 358, 372, 385, 400, 418, 432, 448, 460, 478, 495, 510, 528, 545],
  '24W': [120, 132, 145, 138, 162, 178, 195, 188, 220, 245, 268, 290, 315, 308, 340, 372, 401, 388, 425, 460, 489, 510, 542, 575],
};

const queries = [
  { q: 'wordpress speed optimization', clk: 4820, ctr: 8.4, pos: 3.2 },
  { q: 'ecommerce seo checklist 2024',  clk: 3915, ctr: 6.9, pos: 4.1 },
  { q: 'core web vitals fix',          clk: 2840, ctr: 7.2, pos: 5.0 },
  { q: 'schema markup product',         clk: 2210, ctr: 5.8, pos: 6.4 },
  { q: 'looker studio seo template',    clk: 1985, ctr: 9.1, pos: 2.8 },
];

const kpis = [
  { label: 'Organic Sessions', value: 248, suffix: 'K', delta: '+34.2%', spark: [40,55,52,68,72,80,76,92,105,118,128,142,138] },
  { label: 'Avg. Position',   value: 4.2, decimals: 1, delta: '−2.8 pos', spark: [12,11,11,10,9,8,8,7,6,5,5,4.5,4.2] },
  { label: 'Conv. Rate',      value: 3.8, decimals: 1, suffix: '%', delta: '+1.4 pts', spark: [1.8,2.0,2.1,2.4,2.6,2.8,3.0,3.1,3.3,3.5,3.6,3.7,3.8] },
];

export const DashboardLive = () => {
  const [now, setNow] = useState(new Date());
  const [range, setRange] = useState('24W');
  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(t);
  }, []);
  const time = now.toLocaleTimeString('en-US', { hour12: false });
  const data = series[range];

  return (
    <section id="dashboard" style={{ padding: '48px 0 24px' }}>
      <div className="container">
        <SectionTabs active="Dashboard" tabs={['About me', 'Resume', 'Work', 'Dashboard']} />

        {/* Header row */}
        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 24, marginBottom: 22, alignItems: 'stretch' }} className="dash-head">
          <div style={{
            background: 'var(--paper)',
            border: '1px solid rgba(0,0,0,0.08)',
            borderRadius: 22,
            padding: '32px 32px 28px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            minHeight: 240,
          }}>
            <div>
              <div className="mono" style={{ fontSize: 11, color: 'var(--ink-3)', letterSpacing: '0.12em', marginBottom: 14 }}>
                §05 · ANALYTICS LAB
              </div>
              <h2 className="display" style={{ fontSize: 'clamp(44px, 5.4vw, 72px)', margin: 0, lineHeight: 0.95 }}>
                Analytics,<br />Live.
              </h2>
            </div>
            <p className="grotesk" style={{ fontSize: 15, color: 'var(--ink-2)', margin: '20px 0 0', maxWidth: 460, lineHeight: 1.55 }}>
              A working preview of the kind of reporting I ship: interactive,
              not just screenshots. Switch the range and watch it update.
            </p>
          </div>

          <div style={{
            background: 'var(--accent)',
            color: 'var(--accent-fg)',
            borderRadius: 22,
            padding: 28,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            position: 'relative',
            overflow: 'hidden',
            minHeight: 240,
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <span style={{
                width: 8, height: 8, borderRadius: '50%',
                background: 'var(--accent-fg)',
                animation: 'pulse 1.6s infinite',
              }} />
              <span className="mono" style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.08em' }}>
                LIVE · {time}
              </span>
            </div>
            <div>
              <div className="display" style={{ fontSize: 'clamp(56px, 7vw, 96px)', lineHeight: 0.9, marginBottom: 8 }}>
                <Counter to={575} suffix="K" />
              </div>
              <div className="grotesk" style={{ fontSize: 14, opacity: 0.85, marginBottom: 4 }}>Total organic sessions</div>
              <div className="mono" style={{ fontSize: 13, fontWeight: 700 }}>▲ 379% YoY</div>
            </div>
          </div>
        </div>

        {/* Main chart card */}
        <div style={{
          background: 'var(--paper)',
          border: '1px solid rgba(0,0,0,0.08)',
          borderRadius: 22,
          padding: 28,
          marginBottom: 18,
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 18, flexWrap: 'wrap', gap: 12 }}>
            <div>
              <div className="mono" style={{ fontSize: 10, color: 'var(--ink-3)', letterSpacing: '0.1em', marginBottom: 6 }}>
                ORGANIC TRAFFIC TREND
              </div>
              <div className="display" style={{ fontSize: 28, lineHeight: 1 }}>
                {range === '7D' ? 'Last 7 days' : range === '30D' ? 'Last 30 days' : 'Last 24 weeks'}
              </div>
            </div>
            <div style={{ display: 'flex', gap: 6, padding: 4, background: 'var(--bg)', borderRadius: 999, border: '1px solid rgba(0,0,0,0.08)' }}>
              {['7D', '30D', '24W'].map(r => (
                <button key={r} onClick={() => setRange(r)} className="mono" style={{
                  border: 'none',
                  background: range === r ? 'var(--ink)' : 'transparent',
                  color: range === r ? 'var(--paper)' : 'var(--ink-2)',
                  padding: '6px 14px',
                  fontSize: 11,
                  fontWeight: 600,
                  letterSpacing: '0.08em',
                  borderRadius: 999,
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                }}>{r}</button>
              ))}
            </div>
          </div>
          <Sparkline key={range} data={data} width={1200} height={140} color="var(--accent)" />
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 8 }}>
            <span className="mono" style={{ fontSize: 10, color: 'var(--ink-3)' }}>START</span>
            <span className="mono" style={{ fontSize: 10, color: 'var(--ink-3)' }}>NOW</span>
          </div>
        </div>

        {/* KPI tiles */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 14, marginBottom: 18 }} className="kpi-row">
          {kpis.map((k, i) => (
            <div key={i} style={{
              background: 'var(--paper)',
              border: '1px solid rgba(0,0,0,0.08)',
              borderRadius: 22,
              padding: 24,
            }}>
              <div className="mono" style={{ fontSize: 10, color: 'var(--ink-3)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 12 }}>
                {k.label}
              </div>
              <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 14 }}>
                <span className="display" style={{ fontSize: 38, lineHeight: 1 }}>
                  <Counter to={k.value} decimals={k.decimals || 0} suffix={k.suffix || ''} />
                </span>
                <span className="mono" style={{ fontSize: 11, color: 'var(--accent)', fontWeight: 700, background: 'rgba(var(--accent-rgb),0.12)', padding: '3px 8px', borderRadius: 999 }}>
                  {k.delta}
                </span>
              </div>
              <Sparkline data={k.spark} width={260} height={36} fill={false} color="var(--accent)" />
            </div>
          ))}
        </div>

      </div>

      <style>{`
        @media (max-width: 860px) {
          .dash-head { grid-template-columns: 1fr !important; }
          .kpi-row { grid-template-columns: 1fr !important; }
          .query-head, .query-row { grid-template-columns: 1.6fr 0.8fr 0.6fr 0.6fr !important; font-size: 12px !important; }
        }
      `}</style>
    </section>
  );
};
