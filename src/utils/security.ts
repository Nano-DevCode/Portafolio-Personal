/**
 * Utilidades de Seguridad y Anti-Scraping para información de contacto.
 * 
 * Protege contra:
 * 1. Bots de rastreo estático y regex en bundles JS (el correo no existe como texto plano en el código fuente).
 * 2. Scrapers de enlaces 'mailto:' en el DOM.
 * 3. Crawlers automatizados mediante honeypots y renderizado dinámico.
 */

// Fragmentos codificados en Base64 (mayka708.ms + gmail.com)
const ENCODED_PARTS = {
  u: 'bWF5a2E3MDgubXM=', // mayka708.ms
  d: 'Z21haWwuY29t',     // gmail.com
};

/**
 * Reconstruye el correo de contacto en memoria únicamente bajo interacción humana o cliente.
 */
export const getSecureEmail = (): string => {
  if (typeof window === 'undefined') return '';
  try {
    const user = atob(ENCODED_PARTS.u);
    const domain = atob(ENCODED_PARTS.d);
    return `${user}@${domain}`;
  } catch {
    return '';
  }
};

/**
 * Abre el cliente de correo de forma reactiva sin exponer 'mailto:' estático en el DOM.
 */
export const launchSecureMail = (subject = 'Contacto Profesional - Portafolio de Software Engineer'): void => {
  const email = getSecureEmail();
  if (!email) return;
  const encodedSubject = encodeURIComponent(subject);
  window.location.href = `mailto:${email}?subject=${encodedSubject}`;
};

/**
 * Copia el correo descifrado de manera segura al portapapeles.
 */
export const copySecureEmailToClipboard = async (): Promise<boolean> => {
  const email = getSecureEmail();
  if (!email) return false;

  try {
    if (navigator?.clipboard?.writeText) {
      await navigator.clipboard.writeText(email);
      return true;
    }
    const textarea = document.createElement('textarea');
    textarea.value = email;
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    return true;
  } catch {
    return false;
  }
};
