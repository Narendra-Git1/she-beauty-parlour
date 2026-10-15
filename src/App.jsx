import { useState } from 'react'
import { ArrowDown, ArrowRight, ArrowUpRight, Heart, Leaf, Sparkles, Star, MapPin, Clock, Instagram, Flower2, Scissors, Hand, Gem } from 'lucide-react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ServiceCard from './components/ServiceCard'
import WhatsAppButton from './components/WhatsAppButton'
import { businessInfo, galleryItems } from './data/businessInfo'

function SectionTitle({ eyebrow, title, description, centered = false }) {
  return <div className={`section-title ${centered ? 'text-center' : ''}`}><span className="eyebrow"><i />{eyebrow}</span><h2>{title}</h2>{description && <p>{description}</p>}</div>
}
function Home({ navigate }) {
  return <>
    <section className="hero">
      <div className="hero-orb orb-one" /><div className="hero-orb orb-two" />
      <div className="container hero-grid">
        <div className="hero-copy">
          <div className="hero-kicker"><span className="kicker-line" /> YOUR BEAUTY, OUR PRIORITY</div>
          <h1>Your beauty,<br/><em>our priority.</em></h1>
          <p className="hero-description">Discover beauty care, makeup, hair services, bridal packages, and fancy accessories at She Beauty Parlour & Fancy in Vinjamur.</p>
          <div className="hero-actions"><button className="button button-primary" onClick={() => navigate('services')}>Explore our services <ArrowRight size={17}/></button><WhatsAppButton message="Hello She Beauty Parlour! I'd like to enquire about your services." /></div>
          <div className="hero-note"><span className="note-icon"><Sparkles size={16}/></span><span><strong>Grand opening</strong><small>Opening celebration — Saturday</small></span></div>
        </div>
        <div className="hero-visual hero-poster-visual">
          <div className="hero-poster-frame"><img src={businessInfo.posterImage} alt="Official She Beauty Parlour and Fancy grand opening poster" /></div>
          <div className="hero-caption"><Sparkles size={15}/><span>Look good. Feel good. Be you.</span></div>
        </div>
      </div>
      <div className="hero-bottom container"><span>BEAUTY · BRIDAL · FANCY ITEMS</span><button onClick={() => navigate('services')}>Discover more <ArrowDown size={14}/></button><span>MADE FOR YOUR MOMENTS</span></div>
    </section>
    <section className="intro-section section-pad">
      <div className="container intro-grid">
        <div className="intro-art"><img src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=900&q=85" alt="Beauty portrait inspiration"/><div className="intro-art-label"><Flower2 size={19}/><span>YOUR MOMENT<br/>TO GLOW</span></div></div>
        <div className="intro-copy"><SectionTitle eyebrow="A LITTLE ABOUT US" title={<>Beauty that feels<br/><em>like you.</em></>} description="Welcome to She Beauty Parlour, a new space created for your beauty and self-care moments. Whether you're getting ready for a celebration or taking time for yourself, we're here to help you feel your best."/><div className="value-list"><div><span><Leaf size={18}/></span><p><strong>Your time, your way</strong><small>Your Beauty, Our Priority.</small></p></div><div><span><Heart size={18}/></span><p><strong>Made for special moments</strong><small>Beauty care, bridal looks and accessories.</small></p></div></div><button className="underlined-link" onClick={() => navigate('about')}>Get to know us <ArrowUpRight size={16}/></button></div>
      </div>
    </section>
    <section className="services-preview section-pad soft-section"><div className="container"><div className="section-heading-row"><SectionTitle eyebrow="OUR SERVICES" title={<>Your beauty ritual,<br/><em>your way.</em></>} description="Explore our beauty services and get in touch to ask about availability and pricing."/><button className="button button-outline" onClick={() => navigate('services')}>All services <ArrowRight size={16}/></button></div><div className="services-grid">{businessInfo.services.slice(0,3).map(s=><ServiceCard key={s.id} service={s} compact/>)}</div></div></section>
    <section className="gallery-teaser section-pad"><div className="container"><div className="section-heading-row"><SectionTitle eyebrow="THE BEAUTY EDIT" title={<>Inspiration for your<br/><em>next look.</em></>} description="See our grand-opening announcement and a few temporary beauty inspiration images. Sample images are not represented as work completed by the parlour."/><button className="underlined-link" onClick={() => navigate('gallery')}>View gallery <ArrowUpRight size={16}/></button></div><div className="gallery-strip">{galleryItems.slice(0,3).map((item,i)=><button className={`gallery-strip-item gallery-strip-${i+1}`} key={item.title} onClick={() => navigate('gallery')}><img src={item.image} alt={item.title} loading="lazy"/><span>{item.title}<ArrowUpRight size={15}/></span></button>)}</div></div></section>
    <section className="closing-cta"><div className="cta-decoration"><Flower2/><Sparkles/></div><div className="container cta-inner"><span className="eyebrow light-eyebrow"><i/> YOUR BEAUTY MOMENT AWAITS</span><h2>A little glow goes<br/><em>a long way.</em></h2><p>Have a service in mind? We'd love to hear from you.</p><WhatsAppButton message="Hello She Beauty Parlour! I'd like to enquire about your services."/><small>Message us to enquire about services, availability and pricing.</small></div></section>
  </>
}
function Services({ navigate }) {
  return <PageShell eyebrow="THE SERVICE MENU" title={<>Beauty, from everyday<br/><em>to extraordinary.</em></>} description="Explore beauty care, hair services, makeup, bridal packages, fancy items and skincare products. Prices are not displayed; please enquire directly."><div className="services-grid full-services-grid">{businessInfo.services.map(s=><ServiceCard key={s.id} service={s}/>)}</div><div className="service-note"><Sparkles size={18}/><p><strong>Need help choosing?</strong><br/>Enquire about a service and the team can share further details. Prices will be added when confirmed by the owner.</p><WhatsAppButton message="Hello She Beauty Parlour! I'd like to ask about your services."/></div></PageShell>
}
function Gallery({ navigate }) {
  return <PageShell eyebrow="THE BEAUTY EDIT" title={<>Looks to love,<br/><em>moments to remember.</em></>} description="Our official grand-opening poster and temporary beauty inspiration images. Sample images are not verified parlour work."><div className="gallery-grid">{galleryItems.map((item,i)=><article className={`gallery-card gallery-card-${i%3} ${item.official ? 'gallery-card-poster' : ''}`} key={item.title}><img src={item.image} alt={item.title} loading="lazy"/><div><span>{item.category}</span><h3>{item.title}</h3></div></article>)}</div><p className="disclaimer">Only the grand-opening poster is official. Other gallery photographs are temporary sample inspiration images and are not verified parlour work.</p></PageShell>
}
function About() {
  return <PageShell eyebrow="OUR STORY" title={<>A new space for<br/><em>your kind of beauty.</em></>} description="She Beauty Parlour & Fancy in Vinjamur welcomes enquiries about beauty services, bridal makeup, hair care, skincare and fancy accessories. Our promise is simple: Your Beauty, Our Priority."><div className="about-feature"><img src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1100&q=85" alt="Beauty products inspiration"/><div><Sparkles size={24}/><h3>Beauty is personal.</h3><p>We believe a beauty experience should feel welcoming and personal. From everyday grooming to special-occasion preparation, explore our service menu and contact us with your questions.</p><p className="disclaimer">Please contact the parlour directly for service availability and details.</p></div></div><div className="about-values"><div><Heart/><h3>Feel good</h3><p>Make time for yourself.</p></div><div><Flower2/><h3>Celebrate you</h3><p>Beauty for your special moments.</p></div><div><Sparkles/><h3>Your glow</h3><p>Your style, your way.</p></div></div></PageShell>
}
function Contact() {
  const hasAddress = Boolean(businessInfo.address && businessInfo.city)
  return <PageShell eyebrow="LET'S CONNECT" title={<>We'd love to<br/><em>hear from you.</em></>} description="Have a question about a service or want to enquire about an appointment? Reach out to the parlour."><div className="contact-grid"><div className="contact-panel"><div className="contact-icon"><MapPin/></div><h3>Visit us</h3><p>{businessInfo.address || 'Shop address to be added'}</p><p>{businessInfo.city || 'Location details coming soon'}</p>{hasAddress && <a className="underlined-link" href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${businessInfo.address}, ${businessInfo.city}`)}`} target="_blank" rel="noreferrer">Open in Maps <ArrowUpRight size={15}/></a>}</div><div className="map-panel"><div className="map-panel-heading"><MapPin size={18}/><div><h3>Find us in Vinjamur</h3><p>Landmark: Medplus Pharmacy, opposite street, Main Road, Vinjamur.</p></div></div><iframe title="Map near Medplus Pharmacy, Main Road, Vinjamur, Andhra Pradesh 524228" src="https://maps.google.com/maps?q=Medplus%20Pharmacy%2C%20Main%20Road%2C%20Vinjamur%2C%20Andhra%20Pradesh%20524228&t=&z=15&ie=UTF8&iwloc=&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen /></div><div className="contact-panel"><div className="contact-icon"><Heart/></div><h3>Call the parlour</h3><p><a href="tel:+916301427005">+91 6301427005</a></p><p><a href="tel:+918328499854">+91 8328499854</a></p><p className="contact-muted">Call for service enquiries and availability.</p></div><div className="contact-panel"><div className="contact-icon"><Clock/></div><h3>Opening hours</h3><p>{businessInfo.openingHours || 'Hours to be confirmed'}</p><p className="contact-muted">Please check with the parlour before visiting.</p></div><div className="contact-panel"><div className="contact-icon"><Heart/></div><h3>Enquire with us</h3><p>Ask about services, prices and appointment availability.</p><WhatsAppButton message="Hello She Beauty Parlour! I'd like to enquire about your services."/><p className="contact-muted">WhatsApp enquiries open to the primary number provided by the owner.</p></div><div className="contact-panel"><div className="contact-icon"><Instagram/></div><h3>Follow along</h3><p>{businessInfo.instagramUrl ? 'Find us on Instagram for updates.' : 'Instagram profile link to be added.'}</p>{businessInfo.instagramUrl && <a className="underlined-link" href={businessInfo.instagramUrl} target="_blank" rel="noreferrer">Visit Instagram <ArrowUpRight size={15}/></a>}</div></div></PageShell>
}
function PageShell({ eyebrow, title, description, children }) {
  return <main className="inner-page"><div className="inner-page-heading container"><span className="eyebrow"><i/>{eyebrow}</span><h1>{title}</h1><p>{description}</p><div className="heading-flourish"><span/><Sparkles size={16}/><span/></div></div><div className="container inner-page-content">{children}</div></main>
}
export default function App() {
  const [page, setPage] = useState('home')
  const navigate = (key) => { setPage(key); window.scrollTo({ top: 0, behavior: 'smooth' }) }
  return <div className="app-shell"><Navbar page={page} navigate={navigate}/>{page === 'home' && <Home navigate={navigate} />}{page === 'services' && <Services navigate={navigate} />}{page === 'gallery' && <Gallery navigate={navigate} />}{page === 'about' && <About/>}{page === 'contact' && <Contact/>}<Footer navigate={navigate}/><div className="floating-whatsapp-wrap"><WhatsAppButton className="floating-whatsapp" message="Hello She Beauty Parlour! I'd like to enquire about your services."><span className="floating-whatsapp-label">Chat with us</span></WhatsAppButton></div></div>
}
