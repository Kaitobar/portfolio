const PortfolioTweaks = () => {
  const t = useTweaks(window.__TWEAKS__);

  React.useEffect(() => {
    document.documentElement.setAttribute('data-theme', t.theme || 'light');
  }, [t.theme]);

  React.useEffect(() => {
    if (t.accent) {
      document.documentElement.style.setProperty('--accent', t.accent);
      // derive rgb
      const hex = t.accent.replace('#','');
      const r = parseInt(hex.slice(0,2),16), g = parseInt(hex.slice(2,4),16), b = parseInt(hex.slice(4,6),16);
      document.documentElement.style.setProperty('--accent-rgb', `${r},${g},${b}`);
      // pick fg by luminance
      const lum = (0.2126*r + 0.7152*g + 0.0722*b) / 255;
      document.documentElement.style.setProperty('--accent-fg', lum > 0.55 ? '#0b0d0c' : '#ffffff');
    }
  }, [t.accent]);

  return (
    <TweaksPanel title="Tweaks">
      <TweakSection title="Theme">
        <TweakRadio
          label="Mode"
          value={t.theme || 'light'}
          onChange={v => t.set('theme', v)}
          options={[{ value: 'light', label: 'Light' }, { value: 'dark', label: 'Dark' }]}
        />
      </TweakSection>
      <TweakSection title="Brand">
        <TweakColor
          label="Accent color"
          value={t.accent}
          onChange={v => t.set('accent', v)}
          options={['#2f7a3f', '#1f6b6b', '#c87a3c', '#5b4fff', '#b9ff66']}
        />
      </TweakSection>
    </TweaksPanel>
  );
};

window.PortfolioTweaks = PortfolioTweaks;
