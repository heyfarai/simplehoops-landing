/* Shuuk theme toggle
 * Pattern: data-theme attribute on <html>, persisted to localStorage.
 * Default: light. Mirrors next-themes / shadcn convention; equivalent to
 * Tailwind's `darkMode: ['class', '[data-theme="dark"]']`.
 *
 * Pages opt out by setting <html data-theme-lock>.
 */
(function () {
  var STORAGE_KEY = 'shuuk-theme';
  var root = document.documentElement;

  if (root.hasAttribute('data-theme-lock')) return;

  function getStored() {
    try { return localStorage.getItem(STORAGE_KEY); } catch (e) { return null; }
  }
  function setStored(v) {
    try { localStorage.setItem(STORAGE_KEY, v); } catch (e) {}
  }

  function apply(theme) {
    root.setAttribute('data-theme', theme);
    var btn = document.getElementById('theme-toggle');
    if (btn) {
      btn.setAttribute('aria-label', theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme');
      btn.setAttribute('aria-pressed', theme === 'dark' ? 'true' : 'false');
      btn.querySelector('.theme-toggle-icon').textContent = theme === 'dark' ? '☀' : '☾';
    }
  }

  // 1. Resolve initial theme: stored value, else default 'light' (per spec).
  var initial = getStored() === 'dark' ? 'dark' : 'light';
  apply(initial);

  // 2. Inject toggle UI
  function injectButton() {
    if (document.getElementById('theme-toggle')) return;
    var style = document.createElement('style');
    style.textContent = [
      '#theme-toggle{',
      '  position:fixed;bottom:18px;right:18px;z-index:1500;',
      '  width:44px;height:44px;border-radius:9999px;border:1px solid currentColor;',
      '  background:var(--bg-filled,#fff);color:var(--text-primary,#000);',
      '  cursor:pointer;display:inline-flex;align-items:center;justify-content:center;',
      '  font-family:inherit;font-size:18px;line-height:1;',
      '  box-shadow:0 4px 14px rgba(0,0,0,0.18);',
      '  transition:transform .15s ease,background .15s ease,color .15s ease;',
      '}',
      '#theme-toggle:hover{transform:translateY(-2px);}',
      '#theme-toggle:focus-visible{outline:2px solid var(--brand-pink,#EE028B);outline-offset:2px;}',
      '@media (max-width:600px){#theme-toggle{width:40px;height:40px;bottom:14px;right:14px;font-size:16px;}}',
    ].join('\n');
    document.head.appendChild(style);

    var btn = document.createElement('button');
    btn.id = 'theme-toggle';
    btn.type = 'button';
    btn.innerHTML = '<span class="theme-toggle-icon" aria-hidden="true">☾</span>';
    btn.addEventListener('click', function () {
      var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      apply(next);
      setStored(next);
    });
    document.body.appendChild(btn);
    apply(root.getAttribute('data-theme') || 'light');
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', injectButton);
  } else {
    injectButton();
  }
})();
