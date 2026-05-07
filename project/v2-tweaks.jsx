const PortfolioTweaks = () => {
  const t = useTweaks(window.__TWEAKS__);

  React.useEffect(() => {
    if (t.accent) {
      document.documentElement.style.setProperty('--accent', t.accent);
      const hex = t.accent.replace('#','');
      const r = parseInt(hex.slice(0,2),16), g = parseInt(hex.slice(2,4),16), b = parseInt(hex.slice(4,6),16);
      document.documentElement.style.setProperty('--accent-rgb', `${r},${g},${b}`);
      const lum = (0.2126*r + 0.7152*g + 0.0722*b) / 255;
      document.documentElement.style.setProperty('--accent-fg', lum > 0.6 ? '#0a0a0a' : '#ffffff');
    }
    if (t.bg) document.documentElement.style.setProperty('--bg', t.bg);
  }, [t.accent, t.bg]);

  return (
    <TweaksPanel title="Tweaks">
      <TweakSection title="Accent">
        <TweakColor
          label="Accent color"
          value={t.accent}
          onChange={v => t.set('accent', v)}
          options={['#1f3aff', '#ff4d2e', '#0a0a0a', '#2f7a3f', '#a259ff']}
        />
      </TweakSection>
      <TweakSection title="Paper">
        <TweakColor
          label="Background"
          value={t.bg}
          onChange={v => t.set('bg', v)}
          options={['#f4f3ee', '#ffffff', '#f0e9d8', '#e8e6df']}
        />
      </TweakSection>
    </TweaksPanel>
  );
};

window.PortfolioTweaks = PortfolioTweaks;
