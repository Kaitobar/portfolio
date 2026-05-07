const Nav = () => {
  const [scrolled, setScrolled] = React.useState(false);
  const [active, setActive] = React.useState('home');

  React.useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const sections = ['home', 'about', 'skills', 'experience', 'work', 'dashboards', 'education', 'contact'];
      for (const id of sections) {
        const el = document.getElementById(id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= 120 && rect.bottom > 120) {
          setActive(id);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { id: 'about', label: '01 About' },
    { id: 'skills', label: '02 Skills' },
    { id: 'experience', label: '03 Experience' },
    { id: 'work', label: '04 Case Studies' },
    { id: 'dashboards', label: '05 Dashboards' },
    { id: 'education', label: '06 Education' },
    { id: 'contact', label: '07 Contact' },
  ];

  return (
    <nav style={{
      position: 'fixed',
      top: 16,
      left: 0,
      right: 0,
      zIndex: 50,
      display: 'flex',
      justifyContent: 'center',
      pointerEvents: 'none',
      transition: 'all 0.3s ease',
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: 4,
        padding: '8px 8px 8px 20px',
        borderRadius: 999,
        background: scrolled ? 'color-mix(in srgb, var(--bg) 85%, transparent)' : 'color-mix(in srgb, var(--bg-card) 70%, transparent)',
        backdropFilter: 'blur(20px) saturate(140%)',
        WebkitBackdropFilter: 'blur(20px) saturate(140%)',
        border: '1px solid var(--line-2)',
        pointerEvents: 'auto',
        boxShadow: scrolled ? '0 8px 30px rgba(0,0,0,0.4)' : 'none',
      }}>
        <a href="#home" className="mono" style={{
          fontSize: 12, fontWeight: 600,
          letterSpacing: '0.04em',
          marginRight: 14,
          color: 'var(--ink)',
          display: 'flex', alignItems: 'center', gap: 8,
        }}>
          <span style={{
            width: 22, height: 22, borderRadius: 6,
            background: 'var(--accent)',
            color: 'var(--accent-fg)',
            display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 11, fontWeight: 700,
          }}>KL</span>
          KATHERIN<span style={{ color: 'var(--ink-3)' }}>·LASSO</span>
        </a>

        <div className="nav-links" style={{ display: 'flex', gap: 2 }}>
          {links.map(l => (
            <a key={l.id} href={`#${l.id}`} className="mono" style={{
              padding: '8px 12px',
              fontSize: 11,
              letterSpacing: '0.04em',
              borderRadius: 999,
              color: active === l.id ? 'var(--accent)' : 'var(--ink-2)',
              background: active === l.id ? 'rgba(var(--accent-rgb),0.08)' : 'transparent',
              transition: 'all 0.2s ease',
            }}>
              {l.label}
            </a>
          ))}
        </div>

        <a href="#contact" className="btn btn-primary" style={{
          padding: '8px 16px',
          fontSize: 12,
          marginLeft: 8,
        }}>
          Hire me
          <span style={{ fontSize: 14 }}>→</span>
        </a>
      </div>

      <style>{`
        @media (max-width: 960px) {
          .nav-links { display: none !important; }
        }
      `}</style>
    </nav>
  );
};

window.Nav = Nav;
