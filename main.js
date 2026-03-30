/* ─── VEIL · Brand CSS ───────────────────────────────────────────── */

:root {
  --veil-violet:       #7f44dd;
  --veil-violet-dim:   #4a2899;
  --veil-violet-glow:  rgba(127, 68, 221, 0.18);
  --veil-violet-soft:  rgba(127, 68, 221, 0.08);
  --veil-cream:        #f0ede8;
  --veil-black:        #0a0a0a;
  --veil-surface:      #0f0f0f;
  --veil-card:         #111111;
  --veil-border:       rgba(255,255,255,0.06);
  --veil-border-v:     rgba(127,68,221,0.25);
  --veil-muted:        #444;
  --veil-hint:         #2e2e2e;
  --font-display:      'Cormorant Garamond', Georgia, serif;
  --font-body:         'DM Sans', sans-serif;
  --ease-smooth:       cubic-bezier(0.16, 1, 0.3, 1);
}

*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

html { scroll-behavior: smooth; }

body {
  background: var(--veil-black);
  color: var(--veil-cream);
  font-family: var(--font-body);
  font-weight: 300;
  line-height: 1.6;
  min-height: 100vh;
  overflow-x: hidden;
  -webkit-font-smoothing: antialiased;
}

/* ─── BACKGROUND ─────────────────────────────────────────────────── */

.bg-layer {
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 0;
  overflow: hidden;
}

.bg-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.28;
}

.bg-orb--1 {
  width: 600px;
  height: 600px;
  background: var(--veil-violet-dim);
  top: -200px;
  right: -150px;
  animation: orb-drift-1 18s ease-in-out infinite alternate;
}

.bg-orb--2 {
  width: 400px;
  height: 400px;
  background: #1a0840;
  bottom: 10%;
  left: -100px;
  animation: orb-drift-2 22s ease-in-out infinite alternate;
}

.bg-grid {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(127,68,221,0.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(127,68,221,0.04) 1px, transparent 1px);
  background-size: 60px 60px;
}

@keyframes orb-drift-1 {
  from { transform: translate(0, 0) scale(1); }
  to   { transform: translate(-60px, 60px) scale(1.1); }
}
@keyframes orb-drift-2 {
  from { transform: translate(0, 0) scale(1); }
  to   { transform: translate(40px, -40px) scale(0.95); }
}

/* ─── NAV ────────────────────────────────────────────────────────── */

.nav {
  position: relative;
  z-index: 10;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 40px;
  border-bottom: 0.5px solid var(--veil-border);
  animation: fade-up 0.6s var(--ease-smooth) both;
}

.nav__logo {
  font-family: var(--font-display);
  font-size: 22px;
  font-weight: 400;
  letter-spacing: 8px;
  color: var(--veil-cream);
}

.nav__dot { color: var(--veil-violet); }

.nav__badge {
  font-size: 10px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: var(--veil-violet);
  border: 0.5px solid var(--veil-border-v);
  background: var(--veil-violet-soft);
  padding: 5px 14px;
  border-radius: 20px;
}

/* ─── HERO ───────────────────────────────────────────────────────── */

.hero {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 64px 24px 48px;
  gap: 0;
}

.hero__eyebrow {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 11px;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: var(--veil-muted);
  margin-bottom: 24px;
  animation: fade-up 0.6s 0.1s var(--ease-smooth) both;
}

.eyebrow-dot {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: var(--veil-violet);
  animation: pulse-dot 2s ease-in-out infinite;
}

@keyframes pulse-dot {
  0%,100% { opacity: 1; transform: scale(1); }
  50%      { opacity: 0.4; transform: scale(0.7); }
}

.hero__title {
  font-family: var(--font-display);
  font-size: clamp(38px, 7vw, 72px);
  font-weight: 300;
  line-height: 1.1;
  color: var(--veil-cream);
  margin-bottom: 20px;
  animation: fade-up 0.7s 0.15s var(--ease-smooth) both;
}

.hero__title em {
  font-style: italic;
  color: var(--veil-violet);
}

.hero__sub {
  font-size: 15px;
  font-weight: 300;
  color: var(--veil-muted);
  line-height: 1.8;
  margin-bottom: 48px;
  animation: fade-up 0.7s 0.2s var(--ease-smooth) both;
}

.hero__sub em {
  color: #666;
  font-style: normal;
}

/* ─── PHONE MOCKUP ───────────────────────────────────────────────── */

.phone-wrap {
  position: relative;
  margin-bottom: 52px;
  animation: fade-up 0.8s 0.3s var(--ease-smooth) both;
}

.phone {
  width: 220px;
  background: #0e0e0e;
  border-radius: 36px;
  border: 0.5px solid rgba(255,255,255,0.08);
  padding: 12px;
  position: relative;
}

.phone__notch {
  width: 60px;
  height: 6px;
  background: #1a1a1a;
  border-radius: 3px;
  margin: 0 auto 10px;
}

.phone__screen {
  background: #0a0a0a;
  border-radius: 26px;
  padding: 14px 12px 12px;
}

.phone-glow {
  position: absolute;
  inset: -20px;
  background: radial-gradient(ellipse at center, rgba(127,68,221,0.15) 0%, transparent 70%);
  pointer-events: none;
  z-index: -1;
}

/* Post card inside phone */
.post-card {
  background: #111;
  border-radius: 14px;
  border: 0.5px solid #1e1e1e;
  overflow: hidden;
  margin-bottom: 8px;
}

.post-card__header {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 10px 8px;
}

.post-card__avatar {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: #1e1030;
  border: 0.5px solid var(--veil-border-v);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 8px;
  color: #9f7fe8;
  font-weight: 500;
  flex-shrink: 0;
}

.post-card__meta { flex: 1; }
.post-card__user { font-size: 10px; color: #ccc; font-weight: 500; line-height: 1.2; }
.post-card__time { font-size: 8px; color: #444; }

.post-card__timer {
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 8px;
  color: #9f7fe8;
  border: 0.5px solid var(--veil-border-v);
  background: var(--veil-violet-soft);
  padding: 3px 8px;
  border-radius: 20px;
}

.timer-dot {
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: var(--veil-violet);
  animation: pulse-dot 1.5s ease-in-out infinite;
}

.post-card__img {
  width: 100%;
  height: 120px;
  background: #0e0e0e;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  cursor: pointer;
}

.post-card__noise {
  position: absolute;
  inset: 0;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E");
  background-size: 200px 200px;
  opacity: 0.6;
}

.post-card__shapes {
  position: absolute;
  inset: 0;
}

.shape {
  position: absolute;
  border-radius: 50%;
  filter: blur(20px);
}

.shape--1 {
  width: 80px; height: 80px;
  background: rgba(127,68,221,0.15);
  top: -10px; right: 20px;
}
.shape--2 {
  width: 60px; height: 60px;
  background: rgba(60,20,120,0.2);
  bottom: 10px; left: 10px;
}
.shape--3 {
  width: 40px; height: 40px;
  background: rgba(90,40,160,0.12);
  top: 40px; left: 50px;
}

.post-card__pct {
  position: relative;
  font-family: var(--font-display);
  font-size: 32px;
  font-weight: 300;
  color: rgba(127,68,221,0.5);
  z-index: 1;
  line-height: 1;
  transition: color 0.4s ease;
}

.post-card__label {
  position: relative;
  font-size: 8px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: rgba(127,68,221,0.3);
  z-index: 1;
  margin-top: 2px;
}

.post-card__reveal {
  padding: 8px 10px 4px;
}

.reveal-info {
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
}

.reveal-info__text { font-size: 8px; color: #333; letter-spacing: 1px; }
.reveal-info__num  { font-size: 8px; color: #555; }

.reveal-bar {
  height: 2px;
  background: #1e1e1e;
  border-radius: 2px;
  overflow: hidden;
}

.reveal-bar__fill {
  height: 100%;
  background: var(--veil-violet);
  border-radius: 2px;
  transition: width 0.6s var(--ease-smooth);
  box-shadow: 0 0 8px rgba(127,68,221,0.6);
}

.post-card__actions {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 10px 10px;
}

.action-btn {
  display: flex;
  align-items: center;
  gap: 4px;
  background: none;
  border: none;
  color: #444;
  font-size: 9px;
  font-family: var(--font-body);
  cursor: pointer;
  transition: color 0.2s;
  padding: 0;
}

.action-btn:hover { color: #888; }

.action-btn--active { color: var(--veil-violet); }
.action-btn--active svg { fill: var(--veil-violet); }
.action-btn--save { margin-left: auto; }

.screen-hint {
  text-align: center;
  font-size: 8px;
  letter-spacing: 1px;
  color: #2a2a2a;
  padding: 4px 0 2px;
}

/* ─── WAITLIST ───────────────────────────────────────────────────── */

.waitlist {
  width: 100%;
  max-width: 420px;
  margin-bottom: 24px;
  animation: fade-up 0.7s 0.4s var(--ease-smooth) both;
}

.waitlist__form {
  display: flex;
  border: 0.5px solid #2a2a2a;
  border-radius: 12px;
  overflow: hidden;
  background: #0f0f0f;
  transition: border-color 0.2s;
}

.waitlist__form:focus-within {
  border-color: var(--veil-border-v);
  box-shadow: 0 0 0 3px var(--veil-violet-glow);
}

.waitlist__input {
  flex: 1;
  background: transparent;
  border: none;
  outline: none;
  color: var(--veil-cream);
  font-size: 14px;
  font-family: var(--font-body);
  font-weight: 300;
  padding: 0 18px;
  height: 52px;
}

.waitlist__input::placeholder { color: #333; }

.waitlist__btn {
  display: flex;
  align-items: center;
  gap: 8px;
  background: var(--veil-violet);
  color: #fff;
  border: none;
  padding: 0 22px;
  font-size: 13px;
  font-family: var(--font-body);
  font-weight: 500;
  cursor: pointer;
  white-space: nowrap;
  transition: background 0.2s, transform 0.1s;
  letter-spacing: 0.3px;
}

.waitlist__btn:hover  { background: #9060f0; }
.waitlist__btn:active { transform: scale(0.98); }

.waitlist__success {
  display: none;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 16px;
  border: 0.5px solid var(--veil-border-v);
  border-radius: 12px;
  background: var(--veil-violet-soft);
  color: #9f7fe8;
  font-size: 13px;
}

.waitlist__success.visible { display: flex; }

/* ─── SOCIAL PROOF ───────────────────────────────────────────────── */

.social-proof {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 64px;
  animation: fade-up 0.7s 0.5s var(--ease-smooth) both;
}

.sp-avatars { display: flex; }

.sp-avatar {
  width: 26px;
  height: 26px;
  border-radius: 50%;
  border: 1.5px solid var(--veil-black);
  margin-left: -7px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 8px;
  color: #666;
  flex-shrink: 0;
}

.sp-avatar:first-child { margin-left: 0; }

.sp-avatar--more {
  background: #1a1a1a;
  border-color: #2a2a2a;
  color: #555;
}

.sp-text { font-size: 12px; color: #444; }
.sp-count { color: #777; font-weight: 500; }

/* ─── HOW IT WORKS ───────────────────────────────────────────────── */

.how {
  position: relative;
  z-index: 1;
  border-top: 0.5px solid var(--veil-border);
  padding: 64px 40px;
  max-width: 900px;
  margin: 0 auto;
  width: 100%;
}

.how__label {
  font-size: 10px;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: var(--veil-muted);
  text-align: center;
  margin-bottom: 48px;
}

.how__steps {
  display: flex;
  align-items: flex-start;
  gap: 0;
}

.how__step {
  flex: 1;
  padding: 0 32px;
  text-align: center;
}

.how__step-num {
  font-family: var(--font-display);
  font-size: 48px;
  font-weight: 300;
  color: #1e1e1e;
  line-height: 1;
  margin-bottom: 12px;
}

.how__step-title {
  font-size: 15px;
  font-weight: 500;
  color: var(--veil-cream);
  margin-bottom: 10px;
  letter-spacing: 0.5px;
}

.how__step-desc {
  font-size: 13px;
  color: var(--veil-muted);
  line-height: 1.7;
}

.how__divider {
  width: 0.5px;
  height: 80px;
  background: var(--veil-border);
  margin-top: 12px;
  flex-shrink: 0;
}

/* ─── MANIFESTO ──────────────────────────────────────────────────── */

.manifesto {
  position: relative;
  z-index: 1;
  border-top: 0.5px solid var(--veil-border);
  border-bottom: 0.5px solid var(--veil-border);
  padding: 64px 40px;
  text-align: center;
  overflow: hidden;
}

.manifesto::before {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse at center, rgba(127,68,221,0.06) 0%, transparent 70%);
  pointer-events: none;
}

.manifesto__inner { position: relative; }

.manifesto__text {
  font-family: var(--font-display);
  font-size: clamp(22px, 4vw, 40px);
  font-weight: 300;
  line-height: 1.5;
  color: #555;
}

.manifesto__text em {
  color: var(--veil-cream);
  font-style: italic;
}

/* ─── FOOTER ─────────────────────────────────────────────────────── */

.footer {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 16px;
  padding: 28px 40px;
}

.footer__logo {
  font-family: var(--font-display);
  font-size: 16px;
  letter-spacing: 5px;
  color: #333;
}

.footer__logo span { color: var(--veil-violet); }

.footer__links {
  display: flex;
  gap: 24px;
}

.footer__link {
  font-size: 11px;
  color: #333;
  text-decoration: none;
  letter-spacing: 0.5px;
  transition: color 0.2s;
}

.footer__link:hover { color: #666; }

.footer__copy {
  font-size: 11px;
  color: #222;
  letter-spacing: 0.5px;
}

/* ─── ANIMATIONS ─────────────────────────────────────────────────── */

@keyframes fade-up {
  from { opacity: 0; transform: translateY(16px); }
  to   { opacity: 1; transform: translateY(0); }
}

/* ─── RESPONSIVE ─────────────────────────────────────────────────── */

@media (max-width: 640px) {
  .nav  { padding: 20px 24px; }
  .hero { padding: 48px 20px 40px; }

  .how {
    padding: 48px 24px;
  }

  .how__steps {
    flex-direction: column;
    align-items: center;
    gap: 40px;
  }

  .how__divider {
    width: 0.5px;
    height: 40px;
  }

  .footer {
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 28px 24px;
    gap: 12px;
  }

  .manifesto { padding: 48px 24px; }
}
