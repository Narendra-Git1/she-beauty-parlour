import { MessageCircle } from 'lucide-react'
import { businessInfo } from '../data/businessInfo'
import { FaWhatsapp } from 'react-icons/fa'

export function whatsappUrl(message = 'Hello She Beauty Parlour! I would like to enquire about your services.') {
  const number = (businessInfo.whatsappNumber || '').replace(/\D/g, '')
  if (!number) return null
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`
}

export default function WhatsAppButton({ message, children = 'Enquire on WhatsApp', className = '' }) {
  const url = whatsappUrl(message)
  return (
    <a
      className={`button button-whatsapp ${!url ? 'button-disabled' : ''} ${className}`}
      href={url || undefined}
      onClick={!url ? (event) => {
        event.preventDefault()
        window.alert('WhatsApp enquiries will be enabled after the owner adds the verified business number in src/data/businessInfo.js.')
      } : undefined}
      target={url ? '_blank' : undefined}
      rel={url ? 'noreferrer' : undefined}
      aria-disabled={!url}
      title={!url ? 'Business WhatsApp number not configured yet' : 'Enquire on WhatsApp'}
    >
      <FaWhatsapp size={34} />  {children}
    </a>
  )
}
