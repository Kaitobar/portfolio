import { useState } from 'react';

const inputStyle = {
  padding: '12px 14px',
  border: '1.5px solid var(--line)',
  borderRadius: 10,
  fontSize: 14,
  fontFamily: 'inherit',
  outline: 'none',
  background: 'var(--bg)',
};

export const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const submit = (e) => {
    e.preventDefault();
    window.location.href = `mailto:lassokatherin@gmail.com?subject=From ${encodeURIComponent(form.name)}&body=${encodeURIComponent(form.message + '\n\nFrom: ' + form.email)}`;
  };

  return (
    <section id="contact" style={{ padding: '40px 0' }}>
      <div className="container">
        <div style={{
          background: 'var(--ink)',
          color: 'var(--paper)',
          borderRadius: 28,
          padding: 'clamp(32px, 5vw, 64px)',
          display: 'grid',
          gridTemplateColumns: '1.4fr 1fr',
          gap: 32,
          alignItems: 'center',
        }} className="contact-row">
          <div>
            <div className="mono" style={{ fontSize: 11, opacity: 0.7, letterSpacing: '0.12em', marginBottom: 16 }}>
              ● OPEN TO ROLES — SEO & WORDPRESS SPECIALIST
            </div>
            <h2 className="display" style={{
              fontSize: 'clamp(48px, 7vw, 96px)',
              lineHeight: 0.92,
              margin: '0 0 24px 0',
              letterSpacing: '-0.03em',
            }}>
              Let's make<br />numbers <em style={{ color: 'var(--accent)', fontStyle: 'normal' }}>move.</em>
            </h2>
            <p className="grotesk" style={{ fontSize: 17, opacity: 0.8, lineHeight: 1.5, maxWidth: 480, margin: 0 }}>
              Drop me a note. I respond within 24 hours and I show up ready to figure things out.
            </p>
          </div>

          <form onSubmit={submit} style={{
            background: 'var(--paper)',
            color: 'var(--ink)',
            borderRadius: 18,
            padding: 24,
            display: 'flex',
            flexDirection: 'column',
            gap: 12,
          }}>
            <input placeholder="Your name" value={form.name}
              onChange={e => setForm({ ...form, name: e.target.value })} style={inputStyle} />
            <input placeholder="Email" type="email" value={form.email}
              onChange={e => setForm({ ...form, email: e.target.value })} style={inputStyle} />
            <textarea placeholder="What can I help with?" rows={4} value={form.message}
              onChange={e => setForm({ ...form, message: e.target.value })}
              style={{ ...inputStyle, resize: 'vertical' }} />
            <button type="submit" style={{
              padding: '14px 20px',
              borderRadius: 999,
              border: 'none',
              background: 'var(--accent)',
              color: 'var(--accent-fg)',
              fontWeight: 600,
              fontSize: 14,
              fontFamily: 'inherit',
              display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8,
              cursor: 'pointer',
            }}>Send message →</button>
          </form>
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .contact-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
};
