const Footer = () => {
  return (
    <footer style={{ padding: '60px 0 32px', borderTop: '1px solid var(--line)' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 32, marginBottom: 60 }} className="footer-grid">
          <div>
            <div className="display" style={{ fontSize: 32, fontWeight: 500, marginBottom: 8 }}>
              Katherin Lasso
            </div>
            <div className="mono" style={{ fontSize: 11, color: 'var(--ink-3)', letterSpacing: '0.08em' }}>
              SEO ANALYST · WORDPRESS · DIGITAL ANALYTICS
            </div>
          </div>
          <div>
            <div className="mono" style={{ fontSize: 10, color: 'var(--ink-3)', letterSpacing: '0.12em', marginBottom: 12 }}>NAVIGATE</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              {['About', 'Skills', 'Experience', 'Case Studies'].map(l => (
                <a key={l} href={`#${l.toLowerCase().replace(' ', '')}`} style={{ fontSize: 13, color: 'var(--ink-2)' }}>{l}</a>
              ))}
            </div>
          </div>
          <div>
            <div className="mono" style={{ fontSize: 10, color: 'var(--ink-3)', letterSpacing: '0.12em', marginBottom: 12 }}>CONNECT</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              <a href="mailto:lassokatherin@gmail.com" style={{ fontSize: 13, color: 'var(--ink-2)' }}>Email</a>
              <a href="#" style={{ fontSize: 13, color: 'var(--ink-2)' }}>LinkedIn</a>
              <a href="#" style={{ fontSize: 13, color: 'var(--ink-2)' }}>GitHub</a>
            </div>
          </div>
          <div>
            <div className="mono" style={{ fontSize: 10, color: 'var(--ink-3)', letterSpacing: '0.12em', marginBottom: 12 }}>STATUS</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, color: 'var(--accent)' }}>
              <LiveDot /> Open to roles
            </div>
            <div className="mono" style={{ fontSize: 11, color: 'var(--ink-3)', marginTop: 6 }}>
              UTC−5 · CALI, CO
            </div>
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '1px solid var(--line)', paddingTop: 20, flexWrap: 'wrap', gap: 8 }}>
          <span className="mono" style={{ fontSize: 10, color: 'var(--ink-3)', letterSpacing: '0.08em' }}>
            © 2026 KATHERIN LASSO TOBAR. ALL RIGHTS RESERVED.
          </span>
          <span className="mono" style={{ fontSize: 10, color: 'var(--ink-3)', letterSpacing: '0.08em' }}>
            v.2026.05 · BUILT WITH INTENT
          </span>
        </div>
      </div>

      <style>{`
        @media (max-width: 720px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </footer>
  );
};

window.Footer = Footer;
