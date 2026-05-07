const TopBar = ({ section = 'Portfolio' }) => {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '20px 0 28px',
      borderBottom: '1.5px solid var(--ink)',
      marginBottom: 28,
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
        <span style={{
          width: 32, height: 32, borderRadius: '50%',
          background: 'var(--ink)',
          display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
          color: 'var(--paper)', fontWeight: 700, fontSize: 13,
          fontFamily: 'Archivo Black',
        }}>K</span>
        <span className="grotesk" style={{ fontSize: 18, fontWeight: 600 }}>
          Katherin L. T.
        </span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
        <span className="grotesk" style={{ fontSize: 16, fontWeight: 500 }}>
          {section}
        </span>
        <span style={{
          width: 32, height: 32, borderRadius: '50%',
          border: '1.5px solid var(--ink)',
          display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="7" />
            <path d="m20 20-3-3" strokeLinecap="round" />
          </svg>
        </span>
      </div>
    </div>
  );
};

const SectionTabs = ({ active = 'About me', tabs = ['About me', 'Resume', 'Work'] }) => {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderTop: '1.5px solid var(--ink)',
      borderBottom: '1.5px solid var(--ink)',
      padding: '14px 0',
      margin: '40px 0 28px',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 28 }}>
        <span style={{
          width: 28, height: 28, borderRadius: '50%',
          background: 'var(--ink)',
          display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
          color: 'var(--paper)', fontWeight: 700, fontSize: 11,
          fontFamily: 'Archivo Black',
        }}>K</span>
        {tabs.map(t => (
          <a key={t} href={'#' + t.toLowerCase().replace(/ /g,'')} className="grotesk" style={{
            fontSize: 16,
            fontWeight: active === t ? 600 : 400,
            borderBottom: active === t ? '2px solid var(--ink)' : '2px solid transparent',
            paddingBottom: 4,
            color: 'var(--ink)',
          }}>{t}</a>
        ))}
      </div>
      <div style={{ display: 'flex', gap: 10 }}>
        {[
          <svg key="u" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0" strokeLinecap="round"/></svg>,
          <svg key="d" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/></svg>,
          <svg key="e" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 1 1 3 3L7 19l-4 1 1-4z"/></svg>,
        ].map((ic, i) => (
          <span key={i} style={{
            width: 28, height: 28, borderRadius: '50%',
            border: '1.5px solid var(--ink)',
            background: i === 1 ? 'var(--ink)' : 'transparent',
            color: i === 1 ? 'var(--paper)' : 'var(--ink)',
            display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
          }}>{ic}</span>
        ))}
      </div>
    </div>
  );
};

window.TopBar = TopBar;
window.SectionTabs = SectionTabs;
