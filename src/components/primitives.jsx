import { useRef, useState, useEffect, useMemo } from 'react';

export const useReveal = (options = {}) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        setVisible(true);
        obs.disconnect();
      }
    }, { threshold: 0.15, ...options });
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
};

export const Reveal = ({ children, delay = 0, as: Tag = 'div', className = '', style = {}, ...props }) => {
  const [ref, vis] = useReveal();
  return (
    <Tag
      ref={ref}
      className={`${className} reveal${vis ? ' in' : ''}`}
      style={{ ...style, transitionDelay: delay + 'ms' }}
      {...props}
    >
      {children}
    </Tag>
  );
};

const useCountUp = (end, duration = 1800, start = 0, trigger = true) => {
  const [val, setVal] = useState(start);
  useEffect(() => {
    if (!trigger) return;
    let raf;
    const t0 = performance.now();
    const tick = (now) => {
      const t = Math.min(1, (now - t0) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setVal(start + (end - start) * eased);
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [end, duration, start, trigger]);
  return val;
};

export const Counter = ({ to, duration = 1800, prefix = '', suffix = '', decimals = 0, format = true }) => {
  const [ref, vis] = useReveal();
  const v = useCountUp(to, duration, 0, vis);
  const formatted = format
    ? v.toFixed(decimals).replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    : v.toFixed(decimals);
  return <span ref={ref}>{prefix}{formatted}{suffix}</span>;
};

export const Sparkline = ({ data, color = 'var(--accent)', width = 120, height = 32, fill = true, animated = true }) => {
  const [ref, vis] = useReveal();
  const max = Math.max(...data);
  const min = Math.min(...data);
  const range = max - min || 1;
  const stepX = width / (data.length - 1);
  const points = data.map((d, i) => [i * stepX, height - ((d - min) / range) * (height - 4) - 2]);
  const path = points.map((p, i) => (i === 0 ? `M ${p[0]} ${p[1]}` : `L ${p[0]} ${p[1]}`)).join(' ');
  const areaPath = path + ` L ${width} ${height} L 0 ${height} Z`;
  const length = useMemo(() => {
    let l = 0;
    for (let i = 1; i < points.length; i++) {
      const dx = points[i][0] - points[i - 1][0];
      const dy = points[i][1] - points[i - 1][1];
      l += Math.sqrt(dx * dx + dy * dy);
    }
    return l;
  }, [data]);

  const gradId = `spark-grad-${color.replace(/[^a-z0-9]/gi, '')}`;

  return (
    <svg ref={ref} width={width} height={height} viewBox={`0 0 ${width} ${height}`} style={{ overflow: 'visible' }}>
      <defs>
        <linearGradient id={gradId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.3" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
      {fill && <path d={areaPath} fill={`url(#${gradId})`} opacity={vis ? 1 : 0} style={{ transition: 'opacity 1s ease 0.4s' }} />}
      <path
        d={path}
        fill="none"
        stroke={color}
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray={animated ? length : undefined}
        strokeDashoffset={animated && !vis ? length : 0}
        style={{ transition: 'stroke-dashoffset 1.4s cubic-bezier(0.2, 0.8, 0.2, 1)' }}
      />
      {vis && (
        <circle cx={points[points.length - 1][0]} cy={points[points.length - 1][1]} r="3" fill={color}>
          <animate attributeName="r" values="3;5;3" dur="2s" repeatCount="indefinite" />
        </circle>
      )}
    </svg>
  );
};

export const LiveDot = ({ color = 'var(--accent)' }) => (
  <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
    <span style={{
      width: 6, height: 6, borderRadius: '50%',
      background: color, boxShadow: `0 0 10px ${color}`,
      animation: 'pulse 1.6s ease-in-out infinite',
    }} />
  </span>
);
