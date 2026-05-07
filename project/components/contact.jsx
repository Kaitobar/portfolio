const Contact = () => {
  const [form, setForm] = React.useState({ name: '', email: '', company: '', role: '', message: '' });
  const [sent, setSent] = React.useState(false);
  const [focused, setFocused] = React.useState(null);

  const submit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setSent(true);
    setTimeout(() => {
      window.location.href = `mailto:lassokatherin@gmail.com?subject=Opportunity from ${encodeURIComponent(form.name)} (${encodeURIComponent(form.company || 'no company')})&body=${encodeURIComponent(form.message + '\n\nRole: ' + form.role + '\nFrom: ' + form.email)}`;
    }, 800);
  };

  const field = (name, label, type = 'text', span = 1, multiline = false) => {
    const isFocused = focused === name;
    const hasValue = form[name];
    return (
      <div style={{ gridColumn: `span ${span}`, position: 'relative' }}>
        <label className="mono" style={{
          fontSize: 10,
          letterSpacing: '0.1em',
          color: isFocused ? 'var(--accent)' : 'var(--ink-3)',
          textTransform: 'uppercase',
          display: 'block',
          marginBottom: 8,
          transition: 'color 0.2s',
        }}>
          {label} {(name === 'name' || name === 'email' || name === 'message') && <span style={{ color: 'var(--accent)' }}>*</span>}
        </label>
        {multiline ? (
          <textarea
            value={form[name]}
            onChange={e => setForm({ ...form, [name]: e.target.value })}
            onFocus={() => setFocused(name)}
            onBlur={() => setFocused(null)}
            rows={5}
            style={inputStyle(isFocused)}
          />
        ) : (
          <input
            type={type}
            value={form[name]}
            onChange={e => setForm({ ...form, [name]: e.target.value })}
            onFocus={() => setFocused(name)}
            onBlur={() => setFocused(null)}
            style={inputStyle(isFocused)}
          />
        )}
      </div>
    );
  };

  return (
    <section id="contact" style={{ padding: '120px 0 80px' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 64, alignItems: 'start' }} className="contact-grid">
          <Reveal>
            <div>
              <div className="section-label">
                <span className="dot"></span> 07 / CONTACT
              </div>
              <h2 className="display" style={{
                fontSize: 'clamp(40px, 6vw, 80px)',
                fontWeight: 400, lineHeight: 0.98, margin: '0 0 24px 0', letterSpacing: '-0.025em',
              }}>
                Have a site that<br/>
                deserves to <em style={{ color: 'var(--accent)', fontStyle: 'italic', fontWeight: 300 }}>rank?</em>
              </h2>
              <p style={{ fontSize: 17, color: 'var(--ink-2)', lineHeight: 1.6, fontWeight: 300, maxWidth: 480, marginBottom: 32 }}>
                I'm currently open to SEO &amp; WordPress Specialist roles — full-time,
                contract, or remote. Drop me a note and I'll respond within 24 hours.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {[
                  { label: 'Email', value: 'lassokatherin@gmail.com', href: 'mailto:lassokatherin@gmail.com' },
                  { label: 'LinkedIn', value: 'linkedin.com/in/katherin-lasso', href: '#' },
                  { label: 'GitHub', value: 'github.com/katherinlasso', href: '#' },
                  { label: 'Location', value: 'Cali, Colombia · UTC−5' },
                ].map(c => (
                  <a key={c.label} href={c.href || '#'} style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '16px 20px',
                    border: '1px solid var(--line)',
                    borderRadius: 12,
                    background: 'var(--bg-card)',
                    transition: 'all 0.2s',
                    textDecoration: 'none',
                  }}
                  onMouseEnter={e => { if (c.href) { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.transform = 'translateX(4px)'; } }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--line)'; e.currentTarget.style.transform = 'translateX(0)'; }}
                  >
                    <span className="mono" style={{ fontSize: 10, color: 'var(--ink-3)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                      {c.label}
                    </span>
                    <span style={{ fontSize: 14, color: 'var(--ink)' }}>
                      {c.value} {c.href && <span style={{ color: 'var(--accent)', marginLeft: 6 }}>→</span>}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <form onSubmit={submit} className="card" style={{ padding: 32 }}>
              <div className="mono" style={{ fontSize: 10, color: 'var(--ink-3)', letterSpacing: '0.12em', marginBottom: 24, display: 'flex', alignItems: 'center', gap: 8 }}>
                <LiveDot /> NEW MESSAGE
              </div>

              {sent ? (
                <div style={{ padding: 40, textAlign: 'center' }}>
                  <div style={{
                    width: 56, height: 56, borderRadius: '50%',
                    background: 'rgba(var(--accent-rgb),0.1)',
                    border: '1px solid var(--accent)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    margin: '0 auto 20px', color: 'var(--accent)', fontSize: 24,
                  }}>✓</div>
                  <div className="display" style={{ fontSize: 24, fontWeight: 500, marginBottom: 8 }}>Message ready</div>
                  <div style={{ fontSize: 14, color: 'var(--ink-2)' }}>Opening your email client…</div>
                </div>
              ) : (
                <>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                    {field('name', 'Your name', 'text', 1)}
                    {field('email', 'Email', 'email', 1)}
                    {field('company', 'Company', 'text', 1)}
                    {field('role', 'Role / position', 'text', 1)}
                    {field('message', 'What can I help with?', 'text', 2, true)}
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 24, gap: 12, flexWrap: 'wrap' }}>
                    <span className="mono" style={{ fontSize: 10, color: 'var(--ink-3)', letterSpacing: '0.06em' }}>
                      ↳ AVG. RESPONSE TIME · &lt;24h
                    </span>
                    <button type="submit" className="btn btn-primary">
                      Send message <span>→</span>
                    </button>
                  </div>
                </>
              )}
            </form>
          </Reveal>
        </div>
      </div>

      <style>{`
        @media (max-width: 960px) {
          .contact-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
        }
      `}</style>
    </section>
  );
};

const inputStyle = (focused) => ({
  width: '100%',
  background: 'var(--bg-elev)',
  border: `1px solid ${focused ? 'var(--accent)' : 'var(--line-2)'}`,
  borderRadius: 8,
  padding: '12px 14px',
  fontSize: 14,
  color: 'var(--ink)',
  fontFamily: 'inherit',
  outline: 'none',
  transition: 'border 0.2s',
  resize: 'vertical',
  boxShadow: focused ? '0 0 0 3px rgba(var(--accent-rgb),0.1)' : 'none',
});

window.Contact = Contact;
