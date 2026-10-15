import { ArrowUpRight } from 'lucide-react'
import WhatsAppButton from './WhatsAppButton'
export default function ServiceCard({ service, compact = false }) {
  return (
    <article className={`service-card ${compact ? 'service-card-compact' : ''}`}>
      <div className="service-image-wrap"><img src={service.image} alt={`${service.name} inspiration`} loading="lazy" /><span className="image-number">{String(service.id).padStart(2, '0')}</span></div>
      <div className="service-card-content">
        <div className="service-title-row"><h3>{service.name}</h3><ArrowUpRight size={18} /></div>
        <p>{service.description}</p>
        <div className="service-card-bottom"><span className="price-note">Contact for pricing</span><WhatsAppButton message={`Hello She Beauty Parlour! I'd like to enquire about ${service.name}.`} className="text-button">Enquire <span>↗</span></WhatsAppButton></div>
      </div>
    </article>
  )
}
