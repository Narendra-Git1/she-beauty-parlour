import { useState } from 'react'
import { Menu, X, Sparkles } from 'lucide-react'
import { businessInfo } from '../data/businessInfo'
const links = [
  ['Home', 'home'],
  ['Services', 'services'],
  ['Gallery', 'gallery'],
  ['About Us', 'about'],
  ['Contact', 'contact'],
]
export default function Navbar({ page, navigate }) {
  const [open, setOpen] = useState(false)
  const go = (key) => { navigate(key); setOpen(false) }
  return (
    <header className="site-header">
      <div className="announcement-bar"><Sparkles size={13} /> {businessInfo.announcement} <span>·</span> {businessInfo.openingDate}</div>
      <nav className="nav-shell container">
        <button className="brand" onClick={() => go('home')} aria-label="She Beauty Parlour home">
          <span className="brand-mark">S<span>♥</span></span>
          <span className="brand-copy"><strong>She Beauty</strong><small>PARLOUR</small></span>
        </button>
        <button className="mobile-menu" onClick={() => setOpen(!open)} aria-label={open ? 'Close menu' : 'Open menu'}>{open ? <X /> : <Menu />}</button>
        <div className={`nav-links ${open ? 'nav-links-open' : ''}`}>
          {links.map(([label, key]) => <button key={key} className={page === key ? 'nav-link active' : 'nav-link'} onClick={() => go(key)}>{label}</button>)}
          <button className="nav-cta" onClick={() => go('contact')}>Get in touch <span>↗</span></button>
        </div>
      </nav>
    </header>
  )
}
