
import { useState } from 'react'
import { Menu, X, Sparkles, ArrowUpRight } from 'lucide-react'
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

  const go = (key) => {
    navigate(key)
    setOpen(false)
  }

  return (
    <header className="site-header">
      <div className="announcement-bar">
        <Sparkles size={14} />
        <span>{businessInfo.announcement}</span>
        {businessInfo.openingDate && (
          <>
            <span>·</span>
            <span>{businessInfo.openingDate}</span>
          </>
        )}
      </div>

      <nav className="nav-shell container">
        <button
          type="button"
          className="brand"
          onClick={() => go('home')}
          aria-label="She Beauty Parlour home"
        >
          <span className="brand-mark">
            S<span>♥</span>
          </span>

          <span className="brand-copy">
            <strong className="text-xl font-bold tracking-wide sm:text-2xl">
              She Beauty
            </strong>
            <small className="text-[10px] font-semibold tracking-[0.2em] sm:text-xs">
              PARLOUR & FANCY
            </small>
          </span>
        </button>

        <button
          type="button"
          className="mobile-menu"
          onClick={() => setOpen((previous) => !previous)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="main-navigation"
        >
          {open ? <X size={25} /> : <Menu size={25} />}
        </button>

        <div
          id="main-navigation"
          className={`nav-links ${open ? 'nav-links-open' : ''}`}
        >
          {links.map(([label, key]) => (
            <button
              type="button"
              key={key}
              aria-current={page === key ? 'page' : undefined}
              className={`nav-link text-base font-semibold transition-colors duration-200 hover:text-[#8b2947] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b88648] lg:text-[17px] ${
                page === key ? 'active' : ''
              }`}
              onClick={() => go(key)}
            >
              {label}
            </button>
          ))}

          <button
            type="button"
            onClick={() => go('contact')}
            className="nav-cta group inline-flex items-center justify-center gap-2 rounded-full border border-[#681329] bg-[#681329] px-6 py-3.5 text-base font-bold text-white shadow-sm transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-[#b88648] hover:bg-[#8b2947] hover:shadow-lg hover:shadow-[#681329]/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b88648] focus-visible:ring-offset-2 active:translate-y-0 sm:px-7"
          >
            Get in Touch
            <ArrowUpRight
              size={19}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </button>
        </div>
      </nav>
    </header>
  )
}
