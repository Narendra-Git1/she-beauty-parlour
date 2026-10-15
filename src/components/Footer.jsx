
import {
  Instagram,
  MapPin,
  Phone,
  Sparkles,
  Facebook,
  Youtube,
  Heart,
  Quote,
} from 'lucide-react'

import { businessInfo } from '../data/businessInfo'
import WhatsAppButton from './WhatsAppButton'

export default function Footer({ navigate }) {
  const socialLinks = [
    {
      name: 'Instagram',
      url: businessInfo.instagramUrl,
      Icon: Instagram,
    },
    {
      name: 'Facebook',
      url: businessInfo.facebookUrl,
      Icon: Facebook,
    },
    {
      name: 'YouTube',
      url: businessInfo.youtubeUrl,
      Icon: Youtube,
    },
  ]

  const exploreLinks = [
    ['Home', 'home'],
    ['Services', 'services'],
    ['Gallery', 'gallery'],
    ['About Us', 'about'],
    ['Contact Us', 'contact'],
  ]

  return (
    <footer className="footer">
      <div className="container footer-main">
        {/* Brand */}
        <div className="footer-brand">
          <div className="footer-logo">
            <Sparkles size={20} />
            <span>She Beauty Parlour &amp; Fancy</span>
          </div>

          <p>
            Your Beauty, Our Priority. Look good, feel good, be you.
          </p>

          <WhatsAppButton
            message="Hello She Beauty Parlour! I'd like to enquire about your services."
          />
        </div>

        {/* Navigation */}
        <div className="footer-explore">
          <h4>Explore</h4>

          {exploreLinks.map(([name, key]) => (
            <button
              className="footer-link"
              key={key}
              onClick={() => navigate(key)}
            >
              {name}
            </button>
          ))}
        </div>

        {/* Contact information */}
        <div className="footer-contact">
          <h4>Get in Touch</h4>

          <p>
            <Phone size={16} />
            <span>
              {businessInfo.phone || 'Phone number to be added'}
            </span>
          </p>

          <p>
            <MapPin size={16} />
            <span>
              {businessInfo.address}, {businessInfo.city}
            </span>
          </p>

          <p className="footer-hours">
            Open daily · {businessInfo.openingHours}
          </p>

          {/* Social media */}
          <h4 className="social-heading">Follow Our Journey</h4>

          <div className="social-icons" aria-label="Social media links">
            {socialLinks.map(({ name, url, Icon }) =>
              url ? (
                <a
                  key={name}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit our ${name} profile`}
                  title={name}
                >
                  <Icon size={19} />
                </a>
              ) : (
                <span
                  key={name}
                  className="social-disabled"
                  title={`${name} profile coming soon`}
                  aria-label={`${name} profile coming soon`}
                >
                  <Icon size={19} />
                </span>
              )
            )}
          </div>

          <small className="social-note">
            Follow us for beauty inspiration and updates.
          </small>
        </div>
      </div>

     
      <div className="footer-quote">
        <Quote size={22} aria-hidden="true" />
        <p>“Look Good. Feel Good. Be You.”</p>
        <span>Your Beauty, Our Priority</span>
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <span>
            © {new Date().getFullYear()} She Beauty Parlour &amp; Fancy.
            All rights reserved.
          </span>

          <span className="footer-made-with">
            Made with <Heart size={14} /> for your beauty
          </span>
        </div>
      </div>
    </footer>
  )
}
