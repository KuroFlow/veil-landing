/* ─── VEIL · main.js ─────────────────────────────────────────────── */

// ─── CONFIG ──────────────────────────────────────────────────────────
// Replace these with your Supabase project details
const SUPABASE_URL = 'YOUR_SUPABASE_URL';
const SUPABASE_ANON_KEY = 'YOUR_SUPABASE_ANON_KEY';

// ─── STATE ───────────────────────────────────────────────────────────
let revealPct    = 23;
let likeCount    = 847;
let cmtCount     = 231;
let shareCount   = 194;
let saveCount    = 88;
let waitlistCount = 1243;

// ─── REVEAL INTERACTION ──────────────────────────────────────────────
function addEngagement(weight) {
  revealPct = Math.min(100, revealPct + weight);

  // Update percentage display
  document.getElementById('postPct').textContent    = revealPct + '%';
  document.getElementById('revealNum').textContent  = revealPct + ' / 100';
  document.getElementById('revealBar').style.width  = revealPct + '%';

  // Update violet intensity as reveal increases
  const intensity = revealPct / 100;
  document.getElementById('postPct').style.color =
    `rgba(127, 68, 221, ${0.3 + intensity * 0.7})`;

  // Update counts based on which button
  likeCount  += weight >= 3 ? 1 : 0;
  cmtCount   += weight === 1 ? 1 : 0;
  shareCount += weight === 2 ? 1 : 0;
  saveCount  += weight === 2 && Math.random() > 0.5 ? 1 : 0;

  document.getElementById('likeCount').textContent  = formatNum(likeCount);
  document.getElementById('cmtCount').textContent   = formatNum(cmtCount);
  document.getElementById('shareCount').textContent = formatNum(shareCount);
  document.getElementById('saveCount').textContent  = formatNum(saveCount);

  // If fully revealed, celebrate
  if (revealPct >= 100) {
    document.getElementById('postPct').textContent   = '✓';
    document.getElementById('postPct').style.color   = '#7f44dd';
    document.getElementById('postPct').style.fontSize = '28px';
    document.querySelector('.post-card__label').textContent = 'fully revealed';
    document.querySelector('.post-card__img').style.background = '#120830';
  }
}

// ─── WAITLIST FORM ───────────────────────────────────────────────────
async function handleSubmit(e) {
  e.preventDefault();

  const email   = document.getElementById('emailInput').value.trim();
  const btn     = document.querySelector('.waitlist__btn');
  const btnText = document.getElementById('btnText');

  if (!email) return;

  // Loading state
  btnText.textContent = 'Joining...';
  btn.disabled = true;

  try {
    await submitToWaitlist(email);
    showSuccess();
    waitlistCount++;
    document.getElementById('spCount').textContent = formatNum(waitlistCount);
  } catch (err) {
    console.error('Waitlist error:', err);
    // Still show success UX — log the error, don't punish the user
    showSuccess();
  }
}

async function submitToWaitlist(email) {
  // ── Option A: Supabase direct ──────────────────────────────────────
  // Uncomment when you have your Supabase project set up:
  //
  // const res = await fetch(`${SUPABASE_URL}/rest/v1/waitlist`, {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json',
  //     'apikey': SUPABASE_ANON_KEY,
  //     'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
  //     'Prefer': 'return=minimal'
  //   },
  //   body: JSON.stringify({
  //     email,
  //     source: document.referrer || 'direct',
  //     created_at: new Date().toISOString()
  //   })
  // });
  // if (!res.ok) throw new Error('Supabase error');

  // ── Option B: Placeholder (works offline / before Supabase setup) ──
  console.log('Waitlist signup:', email);
  await new Promise(r => setTimeout(r, 600)); // simulate network
}

function showSuccess() {
  document.getElementById('waitlistForm').style.display    = 'none';
  document.getElementById('waitlistSuccess').classList.add('visible');
}

// ─── UTILS ───────────────────────────────────────────────────────────
function formatNum(n) {
  if (n >= 1000) return (n / 1000).toFixed(1).replace(/\.0$/, '') + 'k';
  return n.toString();
}

// ─── NAV SCROLL EFFECT ───────────────────────────────────────────────
window.addEventListener('scroll', () => {
  const nav = document.getElementById('nav');
  if (window.scrollY > 40) {
    nav.style.background    = 'rgba(10,10,10,0.85)';
    nav.style.backdropFilter = 'blur(12px)';
    nav.style.webkitBackdropFilter = 'blur(12px)';
  } else {
    nav.style.background    = 'transparent';
    nav.style.backdropFilter = 'none';
  }
}, { passive: true });

// ─── SCROLL REVEAL ───────────────────────────────────────────────────
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity   = '1';
      entry.target.style.transform = 'translateY(0)';
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.how__step, .manifesto__text').forEach(el => {
  el.style.opacity   = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.7s ease, transform 0.7s ease';
  observer.observe(el);
});
