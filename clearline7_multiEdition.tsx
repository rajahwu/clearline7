import React, { useState } from 'react';
import { ChevronRight, Check } from 'lucide-react';

// Edition configuration with unified structure & distinct palettes
const editions = {
  federal: {
    name: 'Federal Flow Clerk Basic',
    slug: 'federal-flow',
    tagline: 'Formal, compliant, serif‑first for government‑grade clarity.',
    palette: {
      primary: '#1B3A6B',
      secondary: '#2E5090',
      accent: '#4A7BA7',
      success: '#2D5016',
      bg: '#FFFFFF',
      card: '#F5F7FA',
      text: '#0A0E27',
      muted: '#5A6B7D',
      border: '#D4DCE6',
    },
    hero: 'Formal Government Documents',
    description: 'Trusted by federal agencies and legal teams.',
    features: ['Serif-first typography', 'Compliance-ready spacing', 'Multi-level clearance marks'],
    icon: '📋',
  },
  clerical: {
    name: 'Clerical Pro',
    slug: 'clerical-pro',
    tagline: 'Modern office polish with crisp sans and restrained accents.',
    palette: {
      primary: '#2F5597',
      secondary: '#385D8A',
      accent: '#64748B',
      success: '#16A34A',
      bg: '#FFFFFF',
      card: '#F8FAFC',
      text: '#0F172A',
      muted: '#64748B',
      border: '#E2E8F0',
    },
    hero: 'Professional Office Docs',
    description: 'Clean, contemporary style for corporate teams.',
    features: ['Modern sans-serif', 'Subtle color accents', 'Quick style sets'],
    icon: '💼',
  },
  tech: {
    name: 'Tech Code',
    slug: 'tech-code',
    tagline: 'Developer‑friendly with monospaced code styles and syntax palette.',
    palette: {
      primary: '#0F172A',
      secondary: '#1E293B',
      accent: '#06B6D4',
      success: '#10B981',
      bg: '#FFFFFF',
      card: '#F1F5F9',
      text: '#0F172A',
      muted: '#64748B',
      border: '#CBD5E1',
    },
    hero: 'Developer & Tech Docs',
    description: 'Code blocks, syntax highlighting, and technical clarity.',
    features: ['Monospaced code blocks', 'Syntax palette', 'Callout styles for APIs'],
    icon: '💻',
  },
  wiki: {
    name: 'Wiki Guidelines',
    slug: 'wiki-guidelines',
    tagline: 'Collaborative readability, accessible colors, and TOC emphasis.',
    palette: {
      primary: '#4F7328',
      secondary: '#5F9B2E',
      accent: '#84CC16',
      success: '#22C55E',
      bg: '#FFFFFF',
      card: '#F7FEE7',
      text: '#1B1F0B',
      muted: '#6B7280',
      border: '#D4D4D8',
    },
    hero: 'Collaborative Knowledge Docs',
    description: 'Inclusive design for team wikis and documentation.',
    features: ['Accessible color palette', 'TOC emphasis', 'Collaborative formatting'],
    icon: '📚',
  },
};

// Edition-specific landing page
function EditionPage({ editionKey, onBackClick }) {
  const edition = editions[editionKey];
  const [formData, setFormData] = useState({ name: '', email: '', role: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: '', email: '', role: '' });
  };

  return (
    <div style={{ background: edition.palette.bg, color: edition.palette.text, minHeight: '100vh' }}>
      {/* Header */}
      <header style={{ borderBottom: `1px solid ${edition.palette.border}`, background: edition.palette.bg, position: 'sticky', top: 0, zIndex: 10 }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '18px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <button onClick={onBackClick} style={{ display: 'flex', alignItems: 'center', gap: '10px', color: edition.palette.text, fontWeight: 700, background: 'none', border: 'none', cursor: 'pointer', fontSize: '16px' }}>
            <span style={{ width: '28px', height: '28px', borderRadius: '8px', background: edition.palette.primary }} />
            Clearline 7
          </button>
          <nav style={{ display: 'flex', gap: '24px' }}>
            <a href="#features" style={{ color: edition.palette.muted, textDecoration: 'none', fontSize: '14px' }}>Features</a>
            <a href="#pricing" style={{ color: edition.palette.muted, textDecoration: 'none', fontSize: '14px' }}>Pricing</a>
            <button onClick={onBackClick} style={{ color: edition.palette.muted, background: 'none', border: 'none', fontSize: '14px', cursor: 'pointer' }}>All Editions</button>
          </nav>
        </div>
      </header>

      <main style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 20px' }}>
        {/* Hero */}
        <section style={{ padding: '64px 0 40px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '24px', alignItems: 'center' }}>
            <div>
              <div style={{ fontSize: '48px', marginBottom: '12px' }}>{edition.icon}</div>
              <h1 style={{ fontSize: '44px', lineHeight: 1.1, margin: '0 0 14px', color: edition.palette.primary }}>
                {edition.hero}
              </h1>
              <p style={{ color: edition.palette.muted, marginBottom: '14px', fontSize: '18px' }}>
                {edition.tagline}
              </p>
              <div style={{ display: 'flex', gap: '12px', marginTop: '24px', flexWrap: 'wrap' }}>
                <button
                  onClick={() => document.getElementById('form')?.scrollIntoView({ behavior: 'smooth' })}
                  style={{
                    padding: '12px 24px',
                    borderRadius: '10px',
                    border: 'none',
                    background: edition.palette.primary,
                    color: '#fff',
                    fontWeight: 600,
                    cursor: 'pointer',
                  }}
                >
                  Get {edition.name}
                </button>
                <button onClick={onBackClick} style={{
                  padding: '12px 24px',
                  borderRadius: '10px',
                  border: `1px solid ${edition.palette.border}`,
                  background: edition.palette.card,
                  color: edition.palette.text,
                  fontWeight: 600,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                }}>
                  Other Editions <ChevronRight size={18} />
                </button>
              </div>
            </div>
            <div style={{
              background: edition.palette.card,
              border: `2px solid ${edition.palette.primary}`,
              borderRadius: '12px',
              padding: '20px',
              minHeight: '280px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '14px',
              color: edition.palette.muted,
            }}>
              {edition.name} Preview
            </div>
          </div>
        </section>

        {/* Features */}
        <section id="features" style={{ padding: '50px 0' }}>
          <h2 style={{ fontSize: '32px', marginBottom: '24px', color: edition.palette.primary }}>
            Built for {edition.name.split(' ')[0]}
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '18px' }}>
            {edition.features.map((feat, i) => (
              <div
                key={i}
                style={{
                  background: edition.palette.card,
                  border: `1px solid ${edition.palette.border}`,
                  borderRadius: '12px',
                  padding: '20px',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <Check size={20} style={{ color: edition.palette.success, marginTop: '2px', flexShrink: 0 }} />
                  <p style={{ margin: 0, color: edition.palette.muted }}>{feat}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" style={{ padding: '50px 0' }}>
          <h2 style={{ fontSize: '32px', marginBottom: '24px', color: edition.palette.primary }}>
            Simple Pricing
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px' }}>
            <div style={{
              background: edition.palette.card,
              border: `1px solid ${edition.palette.border}`,
              borderRadius: '12px',
              padding: '24px',
            }}>
              <h3 style={{ color: edition.palette.primary }}>Starter</h3>
              <div style={{ fontSize: '36px', fontWeight: 700, color: edition.palette.primary, margin: '12px 0' }}>
                $39
              </div>
              <p style={{ color: edition.palette.muted, marginBottom: '18px' }}>
                {edition.name} Quick Style Set
              </p>
              <button style={{
                width: '100%',
                padding: '12px',
                borderRadius: '10px',
                border: `1px solid ${edition.palette.primary}`,
                background: edition.palette.primary,
                color: '#fff',
                fontWeight: 600,
                cursor: 'pointer',
              }}>
                Get Started
              </button>
            </div>
            <div style={{
              background: edition.palette.card,
              border: `2px solid ${edition.palette.primary}`,
              borderRadius: '12px',
              padding: '24px',
            }}>
              <h3 style={{ color: edition.palette.primary }}>Pro Bundle</h3>
              <div style={{ fontSize: '36px', fontWeight: 700, color: edition.palette.primary, margin: '12px 0' }}>
                $149
              </div>
              <p style={{ color: edition.palette.muted, marginBottom: '18px' }}>
                All 4 editions + Notion library
              </p>
              <button style={{
                width: '100%',
                padding: '12px',
                borderRadius: '10px',
                border: 'none',
                background: edition.palette.primary,
                color: '#fff',
                fontWeight: 600,
                cursor: 'pointer',
              }}>
                Get Pro Bundle
              </button>
            </div>
          </div>
        </section>

        {/* Form */}
        <section id="form" style={{ padding: '50px 0' }}>
          <h2 style={{ fontSize: '32px', marginBottom: '24px', color: edition.palette.primary }}>
            Try {edition.name}
          </h2>
          <div style={{
            maxWidth: '500px',
            background: edition.palette.card,
            border: `1px solid ${edition.palette.border}`,
            borderRadius: '12px',
            padding: '24px',
          }}>
            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: '16px' }}>
                <label style={{ display: 'block', fontWeight: 600, marginBottom: '6px', color: edition.palette.text }}>
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '10px 12px',
                    borderRadius: '8px',
                    border: `1px solid ${edition.palette.border}`,
                    fontSize: '14px',
                    boxSizing: 'border-box',
                  }}
                />
              </div>
              <div style={{ marginBottom: '16px' }}>
                <label style={{ display: 'block', fontWeight: 600, marginBottom: '6px', color: edition.palette.text }}>
                  Work Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '10px 12px',
                    borderRadius: '8px',
                    border: `1px solid ${edition.palette.border}`,
                    fontSize: '14px',
                    boxSizing: 'border-box',
                  }}
                />
              </div>
              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', fontWeight: 600, marginBottom: '6px', color: edition.palette.text }}>
                  Role
                </label>
                <select
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '10px 12px',
                    borderRadius: '8px',
                    border: `1px solid ${edition.palette.border}`,
                    fontSize: '14px',
                    boxSizing: 'border-box',
                  }}
                >
                  <option value="">Select your role</option>
                  <option>Admin / Ops</option>
                  <option>Paralegal / Clerk</option>
                  <option>Technical Writer</option>
                  <option>Engineer / Dev</option>
                </select>
              </div>
              <button
                type="submit"
                style={{
                  width: '100%',
                  padding: '12px',
                  borderRadius: '10px',
                  border: 'none',
                  background: edition.palette.primary,
                  color: '#fff',
                  fontWeight: 600,
                  cursor: 'pointer',
                  fontSize: '16px',
                }}
              >
                Send me the template
              </button>
              {submitted && (
                <p style={{ marginTop: '12px', color: edition.palette.success, fontWeight: 600 }}>
                  ✓ Check your email for the download link!
                </p>
              )}
            </form>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer style={{ borderTop: `1px solid ${edition.palette.border}`, padding: '30px 0', marginTop: '40px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 20px', textAlign: 'center', color: edition.palette.muted }}>
          <p>© 2025 Clearline 7. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

// Hub page showing all editions
function HubPage({ onEditionClick }) {
  return (
    <div style={{ background: '#FFFFFF', color: '#0a0a0a', minHeight: '100vh' }}>
      {/* Header */}
      <header style={{ borderBottom: '1px solid #e5e7eb', background: '#fff', position: 'sticky', top: 0, zIndex: 10 }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '18px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontWeight: 700, fontSize: '18px' }}>
            <span style={{ width: '28px', height: '28px', borderRadius: '8px', background: '#2F5597' }} />
            Clearline 7
          </div>
          <nav style={{ display: 'flex', gap: '24px' }}>
            <a href="#editions" style={{ color: '#555', textDecoration: 'none', fontSize: '14px' }}>Editions</a>
            <a href="#features" style={{ color: '#555', textDecoration: 'none', fontSize: '14px' }}>Features</a>
          </nav>
        </div>
      </header>

      <main style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 20px' }}>
        {/* Hero */}
        <section style={{ padding: '64px 0 40px', textAlign: 'center' }}>
          <h1 style={{ fontSize: '48px', lineHeight: 1.1, margin: '0 0 14px', color: '#0a0a0a' }}>
            One System. Four Distinct Editions.
          </h1>
          <p style={{ color: '#555', fontSize: '18px', maxWidth: '600px', margin: '0 auto 32px' }}>
            Unified style framework with tailored palettes and typography for government, corporate, technical, and collaborative teams.
          </p>
        </section>

        {/* Editions Grid */}
        <section id="editions" style={{ padding: '50px 0' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px' }}>
            {Object.entries(editions).map(([key, ed]) => (
              <button
                key={key}
                onClick={() => onEditionClick(key)}
                style={{
                  background: ed.palette.card,
                  border: `2px solid ${ed.palette.primary}`,
                  borderRadius: '12px',
                  padding: '32px',
                  textDecoration: 'none',
                  color: 'inherit',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  textAlign: 'left',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 12px 24px rgba(0,0,0,0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div style={{ fontSize: '40px', marginBottom: '12px' }}>{ed.icon}</div>
                <h2 style={{ fontSize: '24px', margin: '0 0 8px', color: ed.palette.primary }}>
                  {ed.name}
                </h2>
                <p style={{ color: ed.palette.muted, marginBottom: '16px', lineHeight: 1.5 }}>
                  {ed.tagline}
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: ed.palette.primary, fontWeight: 600 }}>
                  Explore <ChevronRight size={18} />
                </div>
              </button>
            ))}
          </div>
        </section>

        {/* Unified features */}
        <section id="features" style={{ padding: '50px 0' }}>
          <h2 style={{ fontSize: '32px', marginBottom: '32px', textAlign: 'center', color: '#0a0a0a' }}>
            Unified, Yet Distinct
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
            <div style={{ background: '#f9fafb', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '24px' }}>
              <h3 style={{ fontSize: '18px', marginBottom: '12px', color: '#0a0a0a' }}>Shared Architecture</h3>
              <p style={{ color: '#555', margin: 0 }}>All editions use the same style system and template structure for consistency across your org.</p>
            </div>
            <div style={{ background: '#f9fafb', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '24px' }}>
              <h3 style={{ fontSize: '18px', marginBottom: '12px', color: '#0a0a0a' }}>Tailored Palettes</h3>
              <p style={{ color: '#555', margin: 0 }}>Each edition features a distinct color palette and typography designed for its audience.</p>
            </div>
            <div style={{ background: '#f9fafb', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '24px' }}>
              <h3 style={{ fontSize: '18px', marginBottom: '12px', color: '#0a0a0a' }}>One-Click Switching</h3>
              <p style={{ color: '#555', margin: 0 }}>Quick Style Sets let teams adopt the right edition for their workflow instantly.</p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer style={{ borderTop: '1px solid #e5e7eb', padding: '30px 0', marginTop: '60px', background: '#f9fafb' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 20px', textAlign: 'center', color: '#555' }}>
          <p>© 2025 Clearline 7. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

// Main app with state-based navigation
export default function App() {
  const [currentEdition, setCurrentEdition] = useState(null);

  if (currentEdition) {
    return <EditionPage editionKey={currentEdition} onBackClick={() => setCurrentEdition(null)} />;
  }

  return <HubPage onEditionClick={setCurrentEdition} />;
}