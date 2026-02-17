import { theme } from "./theme";

export const GlobalStyles = () => (
  <style>{`
    @import url('https://api.fontshare.com/v2/css?f[]=clash-display@400,500,600,700&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&display=swap');

    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    html { scroll-behavior: smooth; }
    body {
      background: ${theme.bg};
      color: ${theme.text};
      font-family: 'DM Sans', sans-serif;
      font-weight: 300;
      line-height: 1.7;
      overflow-x: hidden;
    }
    ::selection { background: ${theme.accent}; color: #000; }
    ::-webkit-scrollbar { width: 4px; }
    ::-webkit-scrollbar-track { background: ${theme.bg}; }
    ::-webkit-scrollbar-thumb { background: ${theme.accent}; border-radius: 2px; }

    @keyframes fadeUp {
      from { opacity: 0; transform: translateY(30px); }
      to   { opacity: 1; transform: translateY(0); }
    }
    @keyframes fadeIn {
      from { opacity: 0; }
      to   { opacity: 1; }
    }
    @keyframes pulse {
      0%, 100% { transform: scale(1); opacity: 1; }
      50%       { transform: scale(1.08); opacity: 0.7; }
    }
    @keyframes blink {
      0%, 100% { opacity: 1; }
      50%       { opacity: 0; }
    }
    @keyframes float {
      0%, 100% { transform: translateY(0px) rotate(0deg); }
      33%       { transform: translateY(-12px) rotate(1deg); }
      66%       { transform: translateY(-6px) rotate(-1deg); }
    }
    @keyframes spin {
      from { transform: rotate(0deg); }
      to   { transform: rotate(360deg); }
    }
    @keyframes spinReverse {
      from { transform: rotate(360deg); }
      to   { transform: rotate(0deg); }
    }
    @keyframes slideInLeft {
      from { opacity: 0; transform: translateX(-50px); }
      to   { opacity: 1; transform: translateX(0); }
    }
    @keyframes slideInRight {
      from { opacity: 0; transform: translateX(50px); }
      to   { opacity: 1; transform: translateX(0); }
    }
    @keyframes slideInUp {
      from { opacity: 0; transform: translateY(50px); }
      to   { opacity: 1; transform: translateY(0); }
    }
    @keyframes shimmer {
      0%   { background-position: -200% center; }
      100% { background-position: 200% center; }
    }
    @keyframes gradientShift {
      0%   { background-position: 0% 50%; }
      50%  { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }
    @keyframes borderGlow {
      0%, 100% { box-shadow: 0 0 20px rgba(0,229,160,0.2); }
      50%       { box-shadow: 0 0 40px rgba(0,229,160,0.5); }
    }
    @keyframes countUp {
      from { opacity: 0; transform: translateY(10px); }
      to   { opacity: 1; transform: translateY(0); }
    }

    .page-enter { animation: fadeIn 0.5s ease both; }
    .card-hover {
      transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
      cursor: default;
    }
    .card-hover:hover {
      transform: translateY(-8px);
      box-shadow: 0 24px 60px rgba(0,229,160,0.12);
      border-color: ${theme.accent} !important;
    }
    .nav-link-hover {
      transition: color 0.2s ease;
    }
    .nav-link-hover:hover { color: ${theme.accent} !important; }
    .btn-primary {
      background: ${theme.accent};
      color: #000;
      border: none;
      border-radius: 6px;
      padding: 14px 32px;
      cursor: pointer;
      font-family: 'ClashDisplay-Variable', 'Clash Display', sans-serif;
      font-weight: 600;
      font-size: 14px;
      transition: all 0.25s ease;
      display: inline-flex;
      align-items: center;
      gap: 8px;
      letter-spacing: 0.01em;
    }
    .btn-primary:hover {
      box-shadow: 0 0 32px ${theme.accentGlow};
      transform: translateY(-3px);
    }
    .btn-outline {
      background: transparent;
      color: ${theme.text};
      border: 1px solid ${theme.border};
      border-radius: 6px;
      padding: 14px 32px;
      cursor: pointer;
      font-family: 'ClashDisplay-Variable', 'Clash Display', sans-serif;
      font-weight: 500;
      font-size: 14px;
      transition: all 0.25s ease;
      letter-spacing: 0.01em;
    }
    .btn-outline:hover {
      border-color: ${theme.accent};
      color: ${theme.accent};
    }
    .section-animate {
      opacity: 0;
      transform: translateY(40px);
      transition: opacity 0.8s ease, transform 0.8s ease;
    }
    .section-animate.visible {
      opacity: 1;
      transform: translateY(0);
    }
    input, textarea {
      width: 100%;
      background: ${theme.surface};
      border: 1px solid ${theme.border};
      border-radius: 8px;
      padding: 13px 16px;
      color: ${theme.text};
      font-size: 14px;
      font-family: 'DM Sans', sans-serif;
      outline: none;
      transition: border-color 0.2s;
    }
    input:focus, textarea:focus {
      border-color: ${theme.accent};
    }
    input::placeholder, textarea::placeholder {
      color: ${theme.muted};
    }
    @media (max-width: 900px) {
      .hide-mobile { display: none !important; }
      .two-col { grid-template-columns: 1fr !important; }
      .three-col { grid-template-columns: 1fr !important; }
    }
    @media (max-width: 600px) {
      .four-col { grid-template-columns: 1fr 1fr !important; }
    }
  `}</style>
);
