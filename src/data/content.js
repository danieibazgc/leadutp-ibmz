/**
 * Centralized content data for the IBM Z Career Connection landing page.
 * Separates content from presentation for maintainability.
 */

export const NAV_LINKS = [
  { label: 'Event', href: '#event' },
  { label: 'Agenda', href: '#agenda' },
  { label: 'Speakers', href: '#speakers' },
  { label: 'Requirements', href: '#requirements' },
];

export const EVENT_DETAILS = {
  badge: '[ EVENTO GRATUITO ]',
  title: 'IBM Z Career Connection | UTP',
  description:
    'Descubre cómo los servidores empresariales más potentes del mundo impulsan el 70% de las transacciones globales. Únete a nosotros en una experiencia inmersiva diseñada para conectar tu talento con las tecnologías del futuro.',
  date: {
    label: 'Fecha',
    line1: 'Martes 16 de junio 2026',
    line2: '4:00 PM (Hora Exacta)',
  },
  location: {
    label: 'Lugar',
    line1: 'Auditorio UTP Torre Arequipa',
    line2: 'Presencial',
  },
};

export const BENEFITS = [
  {
    icon: 'workspace_premium',
    title: 'Constancia UTP',
    description:
      'Obtén reconocimiento oficial de tu participación por parte de la universidad.',
  },
  {
    icon: 'verified',
    title: 'Certificaciones IBM',
    description:
      'Acceso a rutas de aprendizaje gratuitas para obtener credenciales digitales de IBM Z.',
  },
  {
    icon: 'group',
    title: 'Networking',
    description:
      'Conecta con expertos de la industria, profesionales de IBM y compañeros entusiastas.',
  },
  {
    icon: 'meeting_room',
    title: 'Ingreso Gratuito',
    description:
      'Evento 100% presencial y gratuito para la comunidad académica seleccionada.',
  },
];

export const AGENDA_ITEMS = [
  {
    time: '4:00 PM',
    title: 'Intro & Bienvenida',
    description:
      'Presentación del evento, autoridades UTP y equipo LEAD.',
  },
  {
    time: '4:45 PM',
    title: 'Panel de Expertos',
    description:
      'El futuro del Enterprise Computing y oportunidades laborales.',
  },
  {
    time: '5:15 PM',
    title: 'IBM Z Xplore',
    description:
      'Demostración en vivo de la plataforma de aprendizaje.',
  },
  {
    time: '5:30 PM',
    title: 'Kahoot & Cierre',
    description:
      'Juego interactivo con premios exclusivos de IBM y despedida.',
  },
];

export const SPEAKER = {
  name: 'Maria Fernanda Martinez',
  role: 'IBM Z Client Skills Leader',
  badge: '[ VIAJA ESPECIALMENTE A LIMA ]',
  sectionTitle: 'Liderazgo y Visión Latam',
  bio: [
    'Maria Fernanda es la líder principal de habilidades y ecosistema educativo para IBM Z en Latinoamérica y España. Su misión es cerrar la brecha de talento tecnológico conectando a la próxima generación de profesionales con las infraestructuras que sostienen la economía global.',
    'Con más de una década de experiencia en el sector corporativo, ha diseñado programas que han impactado a miles de estudiantes, facilitando su inserción en corporaciones top del sector bancario, retail y gubernamental.',
  ],
  photo: '/images/speaker-photo.png',
  linkedin: 'https://www.linkedin.com/in/mar1p1nk/',
};

export const TARGET_AUDIENCE = [
  {
    icon: 'school',
    title: 'Alumnos de Últimos Ciclos',
    description:
      'Estudiantes a partir del 8vo ciclo de carreras de Ingeniería de Sistemas, Software, Ciencias de la Computación o afines.',
  },
  {
    icon: 'history_edu',
    title: 'Egresados Recientes',
    description:
      'Profesionales junior buscando especialización y oportunidades en infraestructuras críticas empresariales.',
  },
];

export const REQUIREMENTS = [
  {
    label: 'IDENTIFICACIÓN',
    description:
      'DNI Físico o Carnet Universitario vigente al momento del ingreso. Sin este documento no se permitirá el acceso a la torre.',
  },
  {
    label: 'RESTRICCIÓN DE EDAD',
    description:
      'Evento exclusivo para mayores de edad. No se permite el ingreso a menores bajo ninguna circunstancia.',
  },
  {
    label: 'PUNTUALIDAD',
    description:
      'El registro inicia 4:00 PM. Las puertas del auditorio se cerrarán exactamente a las 4:30 PM por respeto a los ponentes.',
  },
];

export const FOOTER_LINKS = [
  { label: 'Política de Privacidad', href: '#', id: 'privacy' },
  { label: 'Términos de Servicio', href: '#', id: 'terms' },
  { label: 'IBM Z Explore', href: 'https://www.ibm.com/es-es/products/z/resources/zxplore' },
  { label: 'LEAD UTP', href: 'https://www.instagram.com/lead_utp' },
];

export const PRIVACY_POLICY = {
  title: 'Política de Privacidad',
  introduction: 'En IBM Z Career Connection | UTP, nos comprometemos a proteger tus datos personales. Al registrarte y participar en este evento, aceptas el tratamiento de tus datos de la siguiente manera:',
  sections: [
    {
      title: '1. Recopilación de Datos',
      description: 'Recopilamos información básica de registro como tu nombre completo, correo electrónico, carrera, ciclo de estudios y documento de identidad (DNI o Carnet Universitario).'
    },
    {
      title: '2. Propósito del Tratamiento',
      description: 'Tus datos serán utilizados exclusivamente para gestionar tu acceso al evento presencial en el Auditorio UTP Torre Arequipa, verificar el cumplimiento de los requisitos de asistencia (mayoría de edad y perfil estudiantil/egresado), emitir tu constancia de participación y comunicarte actualizaciones relacionadas con el evento.'
    },
    {
      title: '3. Compartición de Información',
      description: 'No venderemos ni compartiremos tus datos con terceros ajenos a los organizadores (LEAD UTP e IBM Z Skills Team), salvo lo estrictamente necesario para la seguridad y control de ingreso de la Universidad Tecnológica del Perú (UTP).'
    },
    {
      title: '4. Tus Derechos (ARCO)',
      description: 'Puedes solicitar la rectificación, cancelación u oposición al uso de tus datos de registro enviando una solicitud a los canales de comunicación oficiales de LEAD UTP.'
    }
  ],
  footer: 'Última actualización: Junio 2026.'
};

export const TERMS_OF_SERVICE = {
  title: 'Términos de Servicio',
  introduction: 'Al registrarte y asistir al evento presencial IBM Z Career Connection | UTP, aceptas cumplir con los siguientes términos y condiciones:',
  sections: [
    {
      title: '1. Requisitos de Ingreso',
      description: 'Es obligatorio presentar tu DNI físico o Carnet Universitario vigente al momento del ingreso. El evento es de acceso exclusivo para mayores de edad (18+ años). Sin excepción, no se permitirá el ingreso a menores de edad.'
    },
    {
      title: '2. Puntualidad Estricta',
      description: 'El registro inicia a las 4:00 PM. Por respeto a los ponentes y a la agenda establecida, las puertas del auditorio se cerrarán exactamente a las 4:30 PM. No se permitirá el ingreso bajo ninguna circunstancia una vez cerradas las puertas.'
    },
    {
      title: '3. Código de Conducta',
      description: 'Se requiere mantener un comportamiento respetuoso, profesional e inclusivo. Los organizadores se reservan el derecho de admisión y permanencia ante cualquier conducta que resulte inapropiada o altere el desarrollo del evento.'
    },
    {
      title: '4. Propiedad Intelectual e Imagen',
      description: 'Durante el evento se tomarán fotografías y grabaciones de video para fines promocionales, institucionales y de difusión de LEAD UTP e IBM Z en medios digitales. Al asistir, consientes el uso de tu imagen en estos materiales.'
    },
    {
      title: '5. Deslinde de Responsabilidad',
      description: 'Los organizadores y la institución educativa no se hacen responsables de pérdidas, daños o robos de pertenencias personales dentro del auditorio o en los accesos de la universidad.'
    }
  ],
  footer: 'Última actualización: Junio 2026.'
};

export const IMAGES = {
  ibmZLogo: '/images/ibm-z-logo.png',
  leadUtpLogo: '/images/lead-utp-logo.png',
  ibmBob: '/images/ibm-bob-character.png',
  speakerPhoto: '/images/speaker-photo.png',
  bgTexture: '/images/bg-texture.png',
};
