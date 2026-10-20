// Datos de contacto (sección Contacto, botón flotante y pie de página).
export const CONTACT = {
  phone: '+56 9 3701 7893',
  whatsapp: '+56937017893',
  instagram: '', // ej.: 'cafeamati'
  website: '', // ej.: 'https://corporatecoffee.cl'
};

export const waLink = (text = '') =>
  `https://wa.me/${CONTACT.whatsapp.replace(/\D/g, '')}${text ? `?text=${encodeURIComponent(text)}` : ''}`;

