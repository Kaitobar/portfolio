const SKILLS = {
  'SEO': [
    { name: 'On-page SEO', level: 95 },
    { name: 'Technical SEO', level: 88 },
    { name: 'Keyword Research', level: 95 },
    { name: 'Link Building', level: 78 },
    { name: 'Content Strategy', level: 85 },
  ],
  'Analytics': [
    { name: 'Google Analytics (GA4)', level: 92 },
    { name: 'Google Search Console', level: 95 },
    { name: 'Power BI', level: 85 },
    { name: 'Looker Studio', level: 88 },
    { name: 'SQL', level: 80 },
  ],
  'CMS & Dev': [
    { name: 'WordPress', level: 90 },
    { name: 'Yoast SEO', level: 95 },
    { name: 'HTML5 / CSS3', level: 80 },
    { name: 'JavaScript', level: 65 },
    { name: 'Git / GitHub', level: 72 },
  ],
  'Tools': [
    { name: 'SEMrush', level: 92 },
    { name: 'Screaming Frog', level: 90 },
    { name: 'Ubersuggest', level: 85 },
    { name: 'Python (data)', level: 68 },
    { name: 'Excel / Sheets', level: 92 },
  ],
};

const SkillBar = ({ name, level }) => {
  const [ref, vis] = useReveal();
  return (
    <div ref={ref} style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: 8, alignItems: 'center' }}>
      <div style={{ minWidth: 0 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 6 }}>
          <span style={{ fontSize: 13, color: 'var(--ink)' }}>{name}</span>
          <span className="mono" style={{ fontSize: 10, color: 'var(--ink-3)' }}>
            {vis ? level : 0}<span style={{ color: 'var(--ink-3)' }}>/100</span>
          </span>
        </div>
        <div style={{
          height: 4,
          background: 'var(--line)',
          borderRadius: 2,
          overflow: 'hidden',
          position: 'relative',
        }}>
          <div style={{
            height: '100%',
            width: vis ? `${level}%` : '0%',
            background: `linear-gradient(90deg, var(--accent), var(--accent-2))`,
            borderRadius: 2,
            transition: 'width 1.4s cubic-bezier(0.2, 0.8, 0.2, 1)',
            boxShadow: '0 0 12px rgba(var(--accent-rgb),0.4)',
          }} />
        </div>
      </div>
    </div>
  );
};

const Skills = () => {
  const [active, setActive] = React.useState('All');
  const cats = ['All', ...Object.keys(SKILLS)];
  const filtered = active === 'All' ? SKILLS : { [active]: SKILLS[active] };

  return (
    <section id="skills" style={{ padding: '80px 0', position: 'relative' }}>
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 40, flexWrap: 'wrap', gap: 16 }}>
          <div>
            <Reveal>
              <div className="section-label">
                <span className="dot"></span> 02 / SKILLS
              </div>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="display" style={{
                fontSize: 'clamp(32px, 4.4vw, 56px)',
                fontWeight: 400,
                lineHeight: 1.05,
                margin: 0,
                letterSpacing: '-0.02em',
                maxWidth: 700,
              }}>
                A toolkit built for <em style={{ color: 'var(--accent)', fontStyle: 'italic', fontWeight: 300 }}>moving numbers.</em>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={200}>
            <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
              {cats.map(c => (
                <Tag key={c} active={active === c} onClick={() => setActive(c)}>{c}</Tag>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal>
          <div className="skills-grid" style={{
            display: 'grid',
            gridTemplateColumns: `repeat(${Object.keys(filtered).length}, 1fr)`,
            gap: 1,
            background: 'var(--line)',
            border: '1px solid var(--line)',
            borderRadius: 16,
            overflow: 'hidden',
          }}>
            {Object.entries(filtered).map(([cat, skills]) => (
              <div key={cat} style={{
                padding: 28,
                background: 'var(--bg-card)',
              }}>
                <div className="mono" style={{
                  fontSize: 10,
                  color: 'var(--accent)',
                  letterSpacing: '0.12em',
                  marginBottom: 20,
                  textTransform: 'uppercase',
                }}>
                  ▸ {cat}
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                  {skills.map(s => <SkillBar key={s.name} {...s} />)}
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Tools strip */}
        <Reveal delay={200}>
          <div style={{
            marginTop: 32,
            padding: '20px 28px',
            border: '1px solid var(--line)',
            borderRadius: 12,
            background: 'var(--bg-card)',
            display: 'flex',
            alignItems: 'center',
            gap: 24,
            flexWrap: 'wrap',
          }}>
            <div className="mono" style={{ fontSize: 10, color: 'var(--ink-3)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
              Daily stack →
            </div>
            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', flex: 1 }}>
              {['GA4', 'Search Console', 'SEMrush', 'Screaming Frog', 'Yoast', 'WordPress', 'Power BI', 'Looker', 'SQL', 'Python', 'Git', 'Ubersuggest'].map(t => (
                <span key={t} className="mono" style={{
                  padding: '5px 10px',
                  fontSize: 11,
                  border: '1px solid var(--line-2)',
                  borderRadius: 6,
                  color: 'var(--ink-2)',
                }}>{t}</span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>

      <style>{`
        @media (max-width: 960px) {
          .skills-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
};

window.Skills = Skills;
