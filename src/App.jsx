import { useState } from 'react'
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Heart,
  Leaf,
  Sparkles,
  Star,
  MapPin,
  Clock,
  Instagram,
  Flower2,
  Scissors,
  Hand,
  Gem,
} from 'lucide-react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ServiceCard from './components/ServiceCard'
import WhatsAppButton from './components/WhatsAppButton'
import { businessInfo, galleryItems } from './data/businessInfo'

function SectionTitle({ eyebrow, title, description, centered = false }) {
  return (
    <div className={`section-title ${centered ? 'text-center' : ''}`}>
      <span className="eyebrow">
        <i />
        {eyebrow}
      </span>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  )
}

function Home({ navigate }) {
  const benefits = [
    {
      icon: <Heart size={23} />,
      title: 'Personal Beauty Care',
      description:
        'Explore beauty and self-care services suited to your everyday needs.',
    },
    {
      icon: <Sparkles size={23} />,
      title: 'Special Occasion Looks',
      description:
        'Enquire about bridal makeup and beauty preparation for special moments.',
    },
    {
      icon: <Scissors size={23} />,
      title: 'Beauty & Hair Services',
      description:
        'Discover hair services, grooming, and other options in our service menu.',
    },
    {
      icon: <Gem size={23} />,
      title: 'Beauty & Fancy Collections',
      description:
        'Ask us about fancy accessories and beauty products available at the parlour.',
    },
  ]

  const fancyCategories = [
    {
      icon: <Gem size={29} />,
      title: 'Fancy Accessories',
      description:
        'Enquire about fancy items and accessories for your style and special occasions.',
    },
    {
      icon: <Flower2 size={29} />,
      title: 'Beauty Products',
      description:
        'Contact us to ask about beauty and skincare products available at the parlour.',
    },
    {
      icon: <Sparkles size={29} />,
      title: 'Your Special Look',
      description:
        'Find out about available beauty services and accessories for your next occasion.',
    },
  ]

  return (
    <>
      {/* Existing Hero Section */}
      <section className="hero">
        <div className="hero-orb orb-one" />
        <div className="hero-orb orb-two" />

        <div className="container hero-grid">
          <div className="hero-copy">
            <div className="hero-kicker">
              <span className="kicker-line" />
              YOUR BEAUTY, OUR PRIORITY
            </div>

            <h1>
              Your beauty,
              <br />
              <em>our priority.</em>
            </h1>

            <p className="hero-description">
              Discover beauty care, makeup, hair services, bridal packages,
              and fancy accessories at She Beauty Parlour & Fancy in Vinjamur.
            </p>

            <div className="hero-actions">
              <button
                className="button button-primary"
                onClick={() => navigate('services')}
              >
                Explore our services <ArrowRight size={17} />
              </button>

              <WhatsAppButton message="Hello She Beauty Parlour! I'd like to enquire about your services." />
            </div>

            <div className="hero-note">
              <span className="note-icon">
                <Sparkles size={16} />
              </span>
              <span>
                <strong>Grand opening</strong>
                <small>Opening celebration — Saturday</small>
              </span>
            </div>
          </div>

          <div className="hero-visual hero-poster-visual">
            <div className="hero-poster-frame">
              <img
                src={businessInfo.posterImage}
                alt="Official She Beauty Parlour and Fancy grand opening poster"
              />
            </div>

            <div className="hero-caption">
              <Sparkles size={15} />
              <span>Look good. Feel good. Be you.</span>
            </div>
          </div>
        </div>

        <div className="hero-bottom container">
          <span>BEAUTY · BRIDAL · FANCY ITEMS</span>
          <button onClick={() => navigate('services')}>
            Discover more <ArrowDown size={14} />
          </button>
          <span>MADE FOR YOUR MOMENTS</span>
        </div>
      </section>

      {/* Existing About Section */}
      <section className="intro-section section-pad">
        <div className="container intro-grid">
          <div className="intro-art">
            <img
              src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=900&q=85"
              alt="Beauty portrait inspiration"
            />

            <div className="intro-art-label">
              <Flower2 size={19} />
              <span>
                YOUR MOMENT
                <br />
                TO GLOW
              </span>
            </div>
          </div>

          <div className="intro-copy">
            <SectionTitle
              eyebrow="A LITTLE ABOUT US"
              title={
                <>
                  Beauty that feels
                  <br />
                  <em>like you.</em>
                </>
              }
              description="Welcome to She Beauty Parlour, a new space created for your beauty and self-care moments. Whether you're getting ready for a celebration or taking time for yourself, we're here to help you feel your best."
            />

            <div className="value-list">
              <div>
                <span>
                  <Leaf size={18} />
                </span>
                <p>
                  <strong>Your time, your way</strong>
                  <small>Your Beauty, Our Priority.</small>
                </p>
              </div>

              <div>
                <span>
                  <Heart size={18} />
                </span>
                <p>
                  <strong>Made for special moments</strong>
                  <small>Beauty care, bridal looks and accessories.</small>
                </p>
              </div>
            </div>

            <button
              className="underlined-link"
              onClick={() => navigate('about')}
            >
              Get to know us <ArrowUpRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* Existing Services Section */}
      <section className="services-preview section-pad soft-section">
        <div className="container">
          <div className="section-heading-row">
            <SectionTitle
              eyebrow="OUR SERVICES"
              title={
                <>
                  Your beauty ritual,
                  <br />
                  <em>your way.</em>
                </>
              }
              description="Explore our beauty services and get in touch to ask about availability and pricing."
            />

            <button
              className="button button-outline"
              onClick={() => navigate('services')}
            >
              All services <ArrowRight size={16} />
            </button>
          </div>

          <div className="services-grid">
            {businessInfo.services.slice(0, 3).map((service) => (
              <ServiceCard
                key={service.id}
                service={service}
                compact
              />
            ))}
          </div>
        </div>
      </section>

      {/* Existing Gallery Section */}
      <section className="gallery-teaser section-pad">
        <div className="container">
          <div className="section-heading-row">
            <SectionTitle
              eyebrow="THE BEAUTY EDIT"
              title={
                <>
                  Inspiration for your
                  <br />
                  <em>next look.</em>
                </>
              }
              description="Explore beauty inspiration images for your next look. These sample images are for inspiration only and are not represented as work completed by the parlour."
            />

            <button
              className="underlined-link"
              onClick={() => navigate('gallery')}
            >
              View gallery <ArrowUpRight size={16} />
            </button>
          </div>

          <div className="gallery-strip">
            {galleryItems
              .filter((item) => !item.official)
              .filter(
                (item, index, items) =>
                  items.findIndex((candidate) => candidate.image === item.image) === index
              )
              .slice(0, 3)
              .map((item, index) => (
              <button
                className={`gallery-strip-item gallery-strip-${index + 1}`}
                key={item.title}
                onClick={() => navigate('gallery')}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                />
                <span>
                  {item.title}
                  <ArrowUpRight size={15} />
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* NEW SECTION 1: Why Choose Us */}
      <section className="bg-[#fff9f4] px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <span className="mb-3 inline-flex items-center justify-center gap-2 text-xs font-semibold tracking-[0.2em] text-[#a77a4b]">
              <span className="h-px w-7 bg-[#bd9146]" />
              THE SHE BEAUTY EXPERIENCE
              <span className="h-px w-7 bg-[#bd9146]" />
            </span>

            <h2 className="mt-4 font-serif text-3xl leading-tight text-[#4d1728] sm:text-4xl lg:text-5xl">
              A little more care,
              <br />
              <span className="italic text-[#8b1e3b]">
                a little more you.
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-[#806b70] sm:text-base">
              Discover the beauty services and collections available at
              She Beauty Parlour & Fancy, with options for everyday care
              and special occasions.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit, index) => (
              <article
                key={benefit.title}
                className="group rounded-2xl border border-[#ead4d7] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#bd9146] hover:shadow-xl hover:shadow-[#70142d]/[0.07] sm:p-7"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full border border-[#e8cbd1] bg-[#f7e2e5] text-[#70142d] transition-all duration-300 group-hover:border-[#bd9146] group-hover:bg-[#70142d] group-hover:text-white">
                  {benefit.icon}
                </div>

                <span className="text-xs font-semibold tracking-widest text-[#bd9146]">
                  0{index + 1}
                </span>

                <h3 className="mt-3 font-serif text-xl text-[#4d1728] sm:text-2xl">
                  {benefit.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-[#806b70]">
                  {benefit.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* NEW SECTION 2: Bridal Beauty */}
      <section className="overflow-hidden bg-[#f7e2e5] px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="relative mx-auto w-full max-w-xl">
            <div className="absolute -bottom-3 -right-3 h-full w-full rounded-t-[12rem] border border-[#bd9146] sm:-bottom-4 sm:-right-4" />

            <div className="relative overflow-hidden rounded-t-[12rem] border-[7px] border-[#fff9f4] bg-[#ead4d7] shadow-xl shadow-[#70142d]/10 sm:border-[10px]">
              <img
                src="https://images.unsplash.com/photo-1594465919760-441fe5908ab0?auto=format&fit=crop&w=1000&q=85"
                alt="Bridal beauty inspiration"
                loading="lazy"
                className="aspect-[4/5] w-full object-cover"
              />
            </div>

            <div className="absolute bottom-5 left-0 flex items-center gap-3 rounded-r-xl border border-[#ead4d7] bg-[#fff9f4] px-4 py-3 shadow-lg sm:bottom-8 sm:px-5 sm:py-4">
              <Sparkles size={21} className="text-[#a77a4b]" />
              <div>
                <p className="font-serif text-base text-[#70142d] sm:text-lg">
                  Your special day
                </p>
                <p className="mt-1 text-xs text-[#806b70]">
                  Beauty for special moments
                </p>
              </div>
            </div>
          </div>

          <div className="pt-4 lg:py-8">
            <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-[#8b1e3b]">
              <span className="h-px w-7 bg-[#bd9146]" />
              BRIDAL BEAUTY
            </span>

            <h2 className="mt-5 font-serif text-4xl leading-tight text-[#4d1728] sm:text-5xl lg:text-6xl">
              For the moments
              <br />
              <span className="italic text-[#8b1e3b]">
                you will remember.
              </span>
            </h2>

            <p className="mt-6 max-w-xl text-sm leading-8 text-[#806b70] sm:text-base">
              Preparing for a wedding or a special celebration? Explore
              bridal makeup and special-occasion beauty services at
              She Beauty Parlour & Fancy.
            </p>

            <div className="mt-7 space-y-4">
              {[
                'Enquire about bridal makeup',
                'Ask about special-occasion beauty services',
                'Discuss availability before your event',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#70142d] text-white">
                    <Heart size={13} />
                  </span>
                  <p className="text-sm leading-6 text-[#654550] sm:text-base">
                    {item}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-9 flex flex-wrap gap-3">
              <button
                onClick={() => navigate('services')}
                className="group inline-flex items-center justify-center gap-2 rounded-full border border-[#70142d] bg-[#70142d] px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#8b1e3b] hover:shadow-lg hover:shadow-[#70142d]/20"
              >
                Explore services
                <ArrowRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>

              <WhatsAppButton message="Hello She Beauty Parlour! I'd like to enquire about bridal makeup and special-occasion services." />
            </div>

            <p className="mt-4 text-xs leading-6 text-[#806b70]">
              Contact the parlour to confirm services, availability and pricing.
            </p>
          </div>
        </div>
      </section>

      {/* NEW SECTION 3: Fancy Collections */}
      <section className="bg-[#fff9f4] px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col gap-5 sm:mb-12 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-[#a77a4b]">
                <span className="h-px w-7 bg-[#bd9146]" />
                BEAUTY & FANCY
              </span>

              <h2 className="mt-4 font-serif text-3xl leading-tight text-[#4d1728] sm:text-4xl lg:text-5xl">
                Little things that
                <br />
                <span className="italic text-[#8b1e3b]">
                  make you shine.
                </span>
              </h2>

              <p className="mt-4 max-w-xl text-sm leading-7 text-[#806b70] sm:text-base">
                Alongside beauty services, discover our fancy collections
                and beauty product offerings. Contact us to ask what is
                currently available.
              </p>
            </div>

            <button
              onClick={() => navigate('contact')}
              className="group inline-flex w-fit items-center justify-center gap-2 rounded-full border border-[#bd9146] px-5 py-3 text-sm font-semibold text-[#70142d] transition-all duration-300 hover:bg-[#70142d] hover:text-white"
            >
              Ask about collections
              <ArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </button>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {fancyCategories.map((category, index) => (
              <article
                key={category.title}
                className="group relative flex min-h-[270px] flex-col overflow-hidden rounded-2xl border border-[#ead4d7] bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#bd9146] hover:shadow-xl hover:shadow-[#70142d]/[0.07] sm:p-8"
              >
                <span className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-[#f7e2e5] transition-transform duration-500 group-hover:scale-125" />

                <div className="relative flex h-14 w-14 items-center justify-center rounded-full border border-[#e8cbd1] bg-[#fff9f4] text-[#8b1e3b] transition-all duration-300 group-hover:border-[#70142d] group-hover:bg-[#70142d] group-hover:text-white">
                  {category.icon}
                </div>

                <span className="relative mt-6 text-xs font-semibold tracking-[0.15em] text-[#bd9146]">
                  COLLECTION 0{index + 1}
                </span>

                <h3 className="relative mt-2 font-serif text-2xl text-[#4d1728]">
                  {category.title}
                </h3>

                <p className="relative mt-3 flex-1 text-sm leading-7 text-[#806b70]">
                  {category.description}
                </p>

                <button
                  onClick={() => navigate('contact')}
                  className="group/link mt-6 inline-flex w-fit items-center gap-2 text-sm font-semibold text-[#70142d] transition-colors hover:text-[#a77a4b]"
                >
                  Enquire now
                  <ArrowRight
                    size={16}
                    className="transition-transform duration-300 group-hover/link:translate-x-1"
                  />
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* NEW SECTION 4: Visit Our Parlour */}
      <section className="bg-[#f7e2e5] px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid overflow-hidden rounded-2xl border border-[#ead4d7] bg-[#fff9f4] shadow-xl shadow-[#70142d]/[0.06] lg:grid-cols-[1.05fr_0.95fr]">
            <div className="p-6 sm:p-10 lg:p-12">
              <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-[#a77a4b]">
                <span className="h-px w-7 bg-[#bd9146]" />
                COME SAY HELLO
              </span>

              <h2 className="mt-5 font-serif text-4xl leading-tight text-[#4d1728] sm:text-5xl">
                Visit our
                <br />
                <span className="italic text-[#8b1e3b]">
                  parlour.
                </span>
              </h2>

              <p className="mt-5 max-w-lg text-sm leading-7 text-[#806b70] sm:text-base">
                We'd love to hear from you. Contact She Beauty Parlour
                & Fancy to ask about services, opening hours and availability.
              </p>

              <div className="mt-8 space-y-6">
                <div className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#f7e2e5] text-[#70142d]">
                    <MapPin size={21} />
                  </span>

                  <div>
                    <h3 className="font-serif text-lg text-[#4d1728]">
                      Our location
                    </h3>
                    <p className="mt-1 text-sm leading-6 text-[#806b70]">
                      {businessInfo.address || 'Please contact us for the shop address.'}
                    </p>
                    <p className="text-sm leading-6 text-[#806b70]">
                      {businessInfo.city || 'Vinjamur, Andhra Pradesh'}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#f7e2e5] text-[#70142d]">
                    <Clock size={21} />
                  </span>

                  <div>
                    <h3 className="font-serif text-lg text-[#4d1728]">
                      Opening hours
                    </h3>
                    <p className="mt-1 text-sm leading-6 text-[#806b70]">
                      {businessInfo.openingHours || 'Please contact us to confirm opening hours.'}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#f7e2e5] text-[#70142d]">
                    <Heart size={21} />
                  </span>

                  <div>
                    <h3 className="font-serif text-lg text-[#4d1728]">
                      Call us
                    </h3>
                    <a
                      href="tel:+916301427005"
                      className="mt-1 block text-sm text-[#70142d] transition-colors hover:text-[#a77a4b]"
                    >
                      +91 6301427005
                    </a>
                    <a
                      href="tel:+918328499854"
                      className="mt-1 block text-sm text-[#70142d] transition-colors hover:text-[#a77a4b]"
                    >
                      +91 8328499854
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-9 flex flex-wrap gap-3">
                <a
                  href="tel:+916301427005"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-[#70142d] bg-[#70142d] px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#8b1e3b] hover:shadow-lg"
                >
                  Call the parlour
                  <ArrowUpRight size={17} />
                </a>

                <button
                  onClick={() => navigate('contact')}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-[#bd9146] bg-transparent px-6 py-3.5 text-sm font-semibold text-[#70142d] transition-all duration-300 hover:bg-[#f7e2e5]"
                >
                  Contact us
                  <ArrowRight size={17} />
                </button>
              </div>
            </div>

            <div className="flex min-h-[300px] flex-col justify-center border-t border-[#ead4d7] bg-[#f7e2e5] p-6 sm:p-10 lg:border-l lg:border-t-0 lg:p-12">
              <div className="mx-auto w-full max-w-md text-center">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-[#bd9146] bg-[#fff9f4] text-[#70142d]">
                  <Flower2 size={35} />
                </div>

                <h3 className="mt-6 font-serif text-3xl text-[#4d1728] sm:text-4xl">
                  Your beauty,
                  <br />
                  <span className="italic text-[#8b1e3b]">
                    our priority.
                  </span>
                </h3>

                <p className="mx-auto mt-4 max-w-sm text-sm leading-7 text-[#806b70]">
                  Have a question about a service or collection? Send us
                  a message and enquire directly with the parlour.
                </p>

                <div className="mt-7">
                  <WhatsAppButton message="Hello She Beauty Parlour! I'd like to enquire about your services, collections and availability." />
                </div>

                {businessInfo.address && businessInfo.city && (
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                      `${businessInfo.address}, ${businessInfo.city}`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#70142d] transition-colors hover:text-[#a77a4b]"
                  >
                    Find us on Google Maps
                    <ArrowUpRight size={16} />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Existing Closing CTA */}
      <section className="closing-cta">
        <div className="cta-decoration">
          <Flower2 />
          <Sparkles />
        </div>

        <div className="container cta-inner">
          <span className="eyebrow light-eyebrow">
            <i />
            YOUR BEAUTY MOMENT AWAITS
          </span>

          <h2>
            A little glow goes
            <br />
            <em>a long way.</em>
          </h2>

          <p>Have a service in mind? We'd love to hear from you.</p>

          <WhatsAppButton message="Hello She Beauty Parlour! I'd like to enquire about your services." />

          <small>
            Message us to enquire about services, availability and pricing.
          </small>
        </div>
      </section>
    </>
  )
}

function Services({ navigate }) {
  return (
    <PageShell
      eyebrow="THE SERVICE MENU"
      title={
        <>
          Beauty, from everyday
          <br />
          <em>to extraordinary.</em>
        </>
      }
      description="Explore beauty care, hair services, makeup, bridal packages, fancy items and skincare products. Prices are not displayed; please enquire directly."
    >
      <div className="services-grid full-services-grid">
        {businessInfo.services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>

      <div className="service-note">
        <Sparkles size={18} />
        <p>
          <strong>Need help choosing?</strong>
          <br />
          Enquire about a service and the team can share further details.
          Prices will be added when confirmed by the owner.
        </p>
        <WhatsAppButton message="Hello She Beauty Parlour! I'd like to ask about your services." />
      </div>
    </PageShell>
  )
}

function Gallery({ navigate }) {
  return (
    <PageShell
      eyebrow="THE BEAUTY EDIT"
      title={
        <>
          Looks to love,
          <br />
          <em>moments to remember.</em>
        </>
      }
      description="Our official grand-opening poster and temporary beauty inspiration images. Sample images are not verified parlour work."
    >
      <div className="gallery-grid">
        {galleryItems.map((item, index) => (
          <article
            className={`gallery-card gallery-card-${index % 3} ${
              item.official ? 'gallery-card-poster' : ''
            }`}
            key={item.title}
          >
            <img src={item.image} alt={item.title} loading="lazy" />
            <div>
              <span>{item.category}</span>
              <h3>{item.title}</h3>
            </div>
          </article>
        ))}
      </div>

      <p className="disclaimer">
        Only the grand-opening poster is official. Other gallery photographs
        are temporary sample inspiration images and are not verified parlour work.
      </p>
    </PageShell>
  )
}

function About() {
  return (
    <PageShell
      eyebrow="OUR STORY"
      title={
        <>
          A new space for
          <br />
          <em>your kind of beauty.</em>
        </>
      }
      description="She Beauty Parlour & Fancy in Vinjamur welcomes enquiries about beauty services, bridal makeup, hair care, skincare and fancy accessories. Our promise is simple: Your Beauty, Our Priority."
    >
      <div className="about-feature">
        <img
          src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1100&q=85"
          alt="Beauty products inspiration"
        />

        <div>
          <Sparkles size={24} />
          <h3>Beauty is personal.</h3>
          <p>
            We believe a beauty experience should feel welcoming and personal.
            From everyday grooming to special-occasion preparation, explore
            our service menu and contact us with your questions.
          </p>
          <p className="disclaimer">
            Please contact the parlour directly for service availability and details.
          </p>
        </div>
      </div>

      <div className="about-values">
        <div>
          <Heart />
          <h3>Feel good</h3>
          <p>Make time for yourself.</p>
        </div>
        <div>
          <Flower2 />
          <h3>Celebrate you</h3>
          <p>Beauty for your special moments.</p>
        </div>
        <div>
          <Sparkles />
          <h3>Your glow</h3>
          <p>Your style, your way.</p>
        </div>
      </div>
    </PageShell>
  )
}

function Contact() {
  const hasAddress = Boolean(businessInfo.address && businessInfo.city)

  return (
    <PageShell
      eyebrow="LET'S CONNECT"
      title={
        <>
          We'd love to
          <br />
          <em>hear from you.</em>
        </>
      }
      description="Have a question about a service or want to enquire about an appointment? Reach out to the parlour."
    >
      <div className="contact-grid">
        <div className="contact-panel">
          <div className="contact-icon">
            <MapPin />
          </div>
          <h3>Visit us</h3>
          <p>{businessInfo.address || 'Shop address to be added'}</p>
          <p>{businessInfo.city || 'Location details coming soon'}</p>

          {hasAddress && (
            <a
              className="underlined-link"
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                `${businessInfo.address}, ${businessInfo.city}`
              )}`}
              target="_blank"
              rel="noreferrer"
            >
              Open in Maps <ArrowUpRight size={15} />
            </a>
          )}
        </div>

        <div className="map-panel">
          <div className="map-panel-heading">
            <MapPin size={18} />
            <div>
              <h3>Find us in Vinjamur</h3>
              <p>Landmark: Medplus Pharmacy, opposite street, Main Road, Vinjamur.</p>
            </div>
          </div>

          <iframe
            title="Map near Medplus Pharmacy, Main Road, Vinjamur, Andhra Pradesh 524228"
            src="https://maps.google.com/maps?q=Medplus%20Pharmacy%2C%20Main%20Road%2C%20Vinjamur%2C%20Andhra%20Pradesh%20524228&t=&z=15&ie=UTF8&iwloc=&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>

        <div className="contact-panel">
          <div className="contact-icon">
            <Heart />
          </div>
          <h3>Call the parlour</h3>
          <p>
            <a href="tel:+916301427005">+91 6301427005</a>
          </p>
          <p>
            <a href="tel:+918328499854">+91 8328499854</a>
          </p>
          <p className="contact-muted">
            Call for service enquiries and availability.
          </p>
        </div>

        <div className="contact-panel">
          <div className="contact-icon">
            <Clock />
          </div>
          <h3>Opening hours</h3>
          <p>{businessInfo.openingHours || 'Hours to be confirmed'}</p>
          <p className="contact-muted">
            Please check with the parlour before visiting.
          </p>
        </div>

        <div className="contact-panel">
          <div className="contact-icon">
            <Heart />
          </div>
          <h3>Enquire with us</h3>
          <p>Ask about services, prices and appointment availability.</p>
          <WhatsAppButton message="Hello She Beauty Parlour! I'd like to enquire about your services." />
          <p className="contact-muted">
            WhatsApp enquiries open to the primary number provided by the owner.
          </p>
        </div>

        <div className="contact-panel">
          <div className="contact-icon">
            <Instagram />
          </div>
          <h3>Follow along</h3>
          <p>
            {businessInfo.instagramUrl
              ? 'Find us on Instagram for updates.'
              : 'Instagram profile link to be added.'}
          </p>

          {businessInfo.instagramUrl && (
            <a
              className="underlined-link"
              href={businessInfo.instagramUrl}
              target="_blank"
              rel="noreferrer"
            >
              Visit Instagram <ArrowUpRight size={15} />
            </a>
          )}
        </div>
      </div>
    </PageShell>
  )
}

function PageShell({ eyebrow, title, description, children }) {
  return (
    <main className="inner-page">
      <div className="inner-page-heading container">
        <span className="eyebrow">
          <i />
          {eyebrow}
        </span>

        <h1>{title}</h1>
        <p>{description}</p>

        <div className="heading-flourish">
          <span />
          <Sparkles size={16} />
          <span />
        </div>
      </div>

      <div className="container inner-page-content">{children}</div>
    </main>
  )
}

export default function App() {
  const [page, setPage] = useState('home')

  const navigate = (key) => {
    setPage(key)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="app-shell">
      <Navbar page={page} navigate={navigate} />

      {page === 'home' && <Home navigate={navigate} />}
      {page === 'services' && <Services navigate={navigate} />}
      {page === 'gallery' && <Gallery navigate={navigate} />}
      {page === 'about' && <About />}
      {page === 'contact' && <Contact />}

      <Footer navigate={navigate} />

      <div className="floating-whatsapp-wrap">
        <WhatsAppButton
          className="floating-whatsapp"
          message="Hello She Beauty Parlour! I'd like to enquire about your services."
        >
          <span className="floating-whatsapp-label">Chat with us</span>
        </WhatsAppButton>
      </div>
    </div>
  )
}
