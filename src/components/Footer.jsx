
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
    { name: 'Instagram', url: businessInfo.instagramUrl, Icon: Instagram },
    { name: 'Facebook', url: businessInfo.facebookUrl, Icon: Facebook },
    { name: 'YouTube', url: businessInfo.youtubeUrl, Icon: Youtube },
  ]

  const exploreLinks = [
    ['Home', 'home'],
    ['Services', 'services'],
    ['Gallery', 'gallery'],
    ['About Us', 'about'],
    ['Contact Us', 'contact'],
  ]

  const phoneNumbers = (businessInfo.phone || '')
    .split('/')
    .map((phone) => phone.trim())
    .filter(Boolean)

  const address = [businessInfo.address, businessInfo.city]
    .filter(Boolean)
    .join(', ')

  const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`

  return (
    <footer className="bg-[#fffaf7] text-[#65535a]">
      {/* Main footer */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-7 px-5 py-7 sm:px-8 md:grid-cols-2 md:gap-8 lg:grid-cols-3 lg:px-10 lg:py-8">

        {/* Brand */}
        <div className="min-w-0">
          <div className="mb-3 flex items-center gap-2 text-lg font-semibold text-[#78152f]">
            <Sparkles size={20} className="shrink-0 text-[#bd9255]" />
            <span>She Beauty Parlour &amp; Fancy</span>
          </div>

          <p className="mb-4 max-w-sm text-sm leading-6 text-[#806c72]">
            Discover beauty, elegance, and confidence with our beauty
            services and carefully selected fancy collections.
          </p>

          <div className="max-w-[250px] [&_a]:!px-4 [&_a]:!py-3 [&_button]:!px-4 [&_button]:!py-3">
            <WhatsAppButton
              message="Hello She Beauty Parlour! I'd like to enquire about your services."
            />
          </div>
        </div>

        {/* Navigation */}
        <div className="min-w-0">
          <h4 className="mb-3 font-semibold text-[#78152f]">
            Explore
          </h4>

          <nav className="flex flex-col items-start gap-1.5">
            {exploreLinks.map(([name, key]) => (
              <button
                type="button"
                key={key}
                onClick={() => navigate(key)}
                className="text-left text-sm leading-5 transition-colors duration-200 hover:text-[#a52a4a]"
              >
                {name}
              </button>
            ))}
          </nav>
        </div>

        {/* Contact and social links */}
        <div className="min-w-0">
          <h4 className="mb-3 font-semibold text-[#78152f]">
            Get in Touch
          </h4>

          <div className="space-y-3 text-sm leading-5">
            {phoneNumbers.length > 0 ? (
              phoneNumbers.map((phone) => {
                const dialNumber = phone.replace(/[^\d+]/g, '')

                return (
                  <p key={phone} className="flex items-start gap-3">
                    <Phone
                      size={16}
                      className="mt-0.5 shrink-0 text-[#bd9255]"
                    />
                    <a
                      href={`tel:${dialNumber}`}
                      className="break-words transition-colors hover:text-[#a52a4a] hover:underline"
                      aria-label={`Call ${phone}`}
                    >
                      {phone}
                    </a>
                  </p>
                )
              })
            ) : (
              <p className="flex items-start gap-3">
                <Phone size={16} className="mt-0.5 shrink-0 text-[#bd9255]" />
                <span>Phone number to be added</span>
              </p>
            )}

            {address && (
              <p className="flex items-start gap-3">
                <MapPin
                  size={16}
                  className="mt-0.5 shrink-0 text-[#bd9255]"
                />
                <a
                  href={mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="break-words transition-colors hover:text-[#a52a4a] hover:underline"
                  aria-label="Open this address in Google Maps"
                >
                  {address}
                </a>
              </p>
            )}

            <p className="pl-7 text-[#806c72]">
              Open daily · {businessInfo.openingHours}
            </p>
          </div>

          {/* Social media */}
          <h4 className="mb-3 mt-5 font-semibold text-[#78152f]">
            Follow Our Journey
          </h4>

          <div
            className="flex flex-wrap gap-2.5"
            aria-label="Social media links"
          >
            {socialLinks.map(({ name, url, Icon }) =>
              url ? (
                <a
                  key={name}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit our ${name} profile`}
                  title={name}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[#ead6ce] bg-white text-[#78152f] transition-all duration-200 hover:border-[#bd9255] hover:bg-[#f8e8e8] hover:text-[#a52a4a]"
                >
                  <Icon size={18} />
                </a>
              ) : (
                <span
                  key={name}
                  title={`${name} profile coming soon`}
                  aria-label={`${name} profile coming soon`}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[#ead6ce] bg-white text-[#9c858b] opacity-70"
                >
                  <Icon size={18} />
                </span>
              )
            )}
          </div>

          <p className="mt-3 text-xs leading-5 text-[#8e7a80]">
            Follow us for beauty inspiration and updates.
          </p>
        </div>
      </div>

      {/* Compact brand quote */}
      <div className="border-t border-[#ead6d7] bg-[#f9eae8] px-4 py-3 text-center">
        <div className="flex items-center justify-center gap-2">
          <Quote
            size={16}
            aria-hidden="true"
            className="shrink-0 text-[#bd9255]"
          />
          <p className="font-serif text-base italic text-[#78152f] sm:text-lg">
            “Look Good. Feel Good. Be You.”
          </p>
        </div>

        <p className="mt-1 text-xs text-[#8e727b]">
          Your Beauty, Our Priority
        </p>
      </div>

      {/* Centered copyright */}
      <div className="bg-[#681329] px-5 py-4 text-center text-xs text-white/80 sm:text-sm">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-2">
          <p>
            © {new Date().getFullYear()} She Beauty Parlour &amp; Fancy.
            All rights reserved.
          </p>

          <p className="flex flex-wrap items-center justify-center gap-2">
            Made with
            <Heart
              size={14}
              className="shrink-0 fill-[#e8c17d] text-[#e8c17d]"
            />
            for your beauty
          </p>
        </div>
      </div>
    </footer>
  )
}
