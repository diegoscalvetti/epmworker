export const languages = { en: 'English', es: 'Español' } as const;
export type Lang = keyof typeof languages;
export const langs = Object.keys(languages) as Lang[];
export const defaultLang: Lang = 'en';

export const htmlLang: Record<Lang, string> = { es: 'es-CL', en: 'en-GB' };

export const ui = {
  es: {
    'site.tagline': 'Monitoreo Electrónico del Desempeño en la construcción',
    'site.description':
      'Diego Calvetti investiga el Monitoreo Electrónico del Desempeño (EPM) y la Interacción Humano-Datos en la construcción. Proyectos y publicaciones.',
    'nav.home': 'Inicio',
    'nav.research': 'EPM y HDI',
    'nav.projects': 'Proyectos',
    'nav.publications': 'Publicaciones',
    'nav.about': 'Trayectoria',
    'nav.skip': 'Saltar al contenido',
    'nav.switch': 'Read in English',
    'home.kicker': 'Profesor Asistente · Escuela de Construcción Civil UC',
    'home.title': 'Datos que cuidan a quienes construyen',
    'home.lead':
      'Investigo cómo los sensores, los wearables y los datos pueden mejorar la productividad, la salud y la seguridad en faena, sin perder de vista que el centro de la obra son las personas.',
    'home.cta.projects': 'Ver proyectos',
    'home.cta.epm': '¿Qué es EPM?',
    'home.stats.journal': 'artículos en revistas',
    'home.stats.conference': 'ponencias en congresos',
    'home.stats.years': 'años en proyectos de ingeniería',
    'home.stats.citations': 'citas (Google Scholar)',
    'home.featuredProjects': 'Proyectos destacados',
    'home.featuredPubs': 'Publicaciones clave sobre EPM',
    'home.allProjects': 'Todos los proyectos',
    'home.allPubs': 'Todas las publicaciones',
    'home.chile.title': 'EPM para la construcción chilena',
    'home.chile.body':
      'CoLAB 5.0 y Trabajador 5.0 se desarrollan en la Escuela de Construcción Civil UC, en Santiago. Buscamos constructoras, mutualidades, gremios, trabajadores y estudiantes que quieran probar el EPM en obras chilenas de forma ética y útil.',
    'home.chile.cta': 'Conversemos',
    'projects.title': 'Proyectos',
    'projects.lead':
      'Proyectos de investigación, desarrollo e innovación, desde los primeros sistemas de localización en obra hasta los laboratorios vivos de Construcción 5.0.',
    'projects.role': 'Rol',
    'projects.funder': 'Financiamiento',
    'projects.partners': 'Socios',
    'projects.period': 'Periodo',
    'projects.link': 'Más información',
    'projects.back': 'Volver a proyectos',
    'projects.related': 'Publicaciones relacionadas',
    'projects.present': 'presente',
    'projects.news': 'Novedades',
    'projects.news.lead': 'Avances publicados en LinkedIn.',
    'projects.news.open': 'Ver en LinkedIn',
    'pubs.title': 'Publicaciones',
    'pubs.lead':
      'Artículos, ponencias y tesis. Los títulos se muestran en su idioma original. Los enlaces llevan al DOI o a la versión publicada.',
    'pubs.filter.all': 'Todas',
    'pubs.filter.type': 'Tipo',
    'pubs.filter.topic': 'Tema',
    'pubs.search': 'Buscar por título, autor o revista',
    'pubs.count': 'publicaciones',
    'pubs.none': 'Ninguna publicación coincide con el filtro.',
    'pubs.open': 'Ver publicación',
    'type.journal': 'Artículo en revista',
    'type.conference': 'Ponencia en congreso',
    'type.thesis': 'Tesis',
    'type.other': 'Otra publicación',
    'topic.epm': 'EPM',
    'topic.hdi': 'Interacción Humano-Datos',
    'topic.digital-twin': 'Gemelos Digitales',
    'topic.dpp': 'Pasaportes Digitales y circularidad',
    'topic.bim': 'BIM y datos abiertos',
    'topic.education': 'Educación',
    'topic.other': 'Otros',
    'about.title': 'De la obra a los datos',
    'about.education': 'Formación',
    'about.roles': 'Cargos actuales',
    'about.profiles': 'Perfiles académicos',
    'about.contact': 'Contacto',
    'about.contact.body':
      'Para colaboraciones, tesis o charlas sobre EPM y transformación digital de la construcción, escríbeme por LinkedIn.',
    'about.teaching': 'Docencia',
    'footer.rights': 'Todos los derechos reservados.',
    'footer.built': 'Sitio estático, sin cookies ni seguimiento.',
  },
  en: {
    'site.tagline': 'Electronic Performance Monitoring in construction',
    'site.description':
      'Diego Calvetti researches Electronic Performance Monitoring (EPM) and Human-Data Interaction in construction. Projects and publications.',
    'nav.home': 'Home',
    'nav.research': 'EPM & HDI',
    'nav.projects': 'Projects',
    'nav.publications': 'Publications',
    'nav.about': 'Background',
    'nav.skip': 'Skip to content',
    'nav.switch': 'Leer en español',
    'home.kicker': 'Assistant Professor · School of Civil Construction, UC Chile',
    'home.title': 'Data that looks after the people who build',
    'home.lead':
      'I research how sensors, wearables and data can improve productivity, health and safety on construction sites, while keeping people at the centre of the work.',
    'home.cta.projects': 'See projects',
    'home.cta.epm': 'What is EPM?',
    'home.stats.journal': 'journal articles',
    'home.stats.conference': 'conference papers',
    'home.stats.years': 'years in engineering projects',
    'home.stats.citations': 'citations (Google Scholar)',
    'home.featuredProjects': 'Featured projects',
    'home.featuredPubs': 'Key publications on EPM',
    'home.allProjects': 'All projects',
    'home.allPubs': 'All publications',
    'home.chile.title': 'EPM for Chilean construction',
    'home.chile.body':
      'CoLAB 5.0 and Worker 5.0 are based at the School of Civil Construction, UC, in Santiago. We are looking for contractors, safety organisations, industry bodies, workers and students who want to try EPM on Chilean sites in an ethical and useful way.',
    'home.chile.cta': 'Get in touch',
    'projects.title': 'Projects',
    'projects.lead':
      'Research, development and innovation projects, from early on-site location systems to the Construction 5.0 living labs.',
    'projects.role': 'Role',
    'projects.funder': 'Funding',
    'projects.partners': 'Partners',
    'projects.period': 'Period',
    'projects.link': 'More information',
    'projects.back': 'Back to projects',
    'projects.related': 'Related publications',
    'projects.present': 'present',
    'projects.news': 'News',
    'projects.news.lead': 'Updates shared on LinkedIn.',
    'projects.news.open': 'Read on LinkedIn',
    'pubs.title': 'Publications',
    'pubs.lead':
      'Articles, conference papers and theses. Titles appear in their original language. Links go to the DOI or the published version.',
    'pubs.filter.all': 'All',
    'pubs.filter.type': 'Type',
    'pubs.filter.topic': 'Topic',
    'pubs.search': 'Search by title, author or venue',
    'pubs.count': 'publications',
    'pubs.none': 'No publications match the filter.',
    'pubs.open': 'Open publication',
    'type.journal': 'Journal article',
    'type.conference': 'Conference paper',
    'type.thesis': 'Thesis',
    'type.other': 'Other publication',
    'topic.epm': 'EPM',
    'topic.hdi': 'Human-Data Interaction',
    'topic.digital-twin': 'Digital Twins',
    'topic.dpp': 'Digital Product Passports & circularity',
    'topic.bim': 'BIM & open data',
    'topic.education': 'Education',
    'topic.other': 'Other',
    'about.title': 'From the site to the data',
    'about.education': 'Education',
    'about.roles': 'Current roles',
    'about.profiles': 'Academic profiles',
    'about.contact': 'Contact',
    'about.contact.body':
      'For collaborations, theses or talks on EPM and the digital transformation of construction, message me on LinkedIn.',
    'about.teaching': 'Teaching',
    'footer.rights': 'All rights reserved.',
    'footer.built': 'Static site, no cookies or tracking.',
  },
} as const;

export type UIKey = keyof (typeof ui)['es'];

export function t(lang: Lang, key: UIKey): string {
  return ui[lang][key] ?? ui[defaultLang][key];
}

export function otherLang(lang: Lang): Lang {
  return lang === 'es' ? 'en' : 'es';
}

/** Build a path for a language, e.g. path('es', 'projects/') -> '/es/projects/' */
export function path(lang: Lang, rest = ''): string {
  return `/${lang}/${rest}`.replace(/\/+/g, '/');
}

export const profiles = {
  linkedin: 'https://www.linkedin.com/in/diegocalvettipmp/',
  orcid: 'https://orcid.org/0000-0001-9893-0377',
  scholar: 'https://scholar.google.com/citations?user=U7Fhb-QAAAAJ',
  researchgate: 'https://www.researchgate.net/profile/Diego-Calvetti',
  scopus: 'https://www.scopus.com/authid/detail.uri?authorId=57219401335',
  wos: 'https://www.webofscience.com/wos/author/record/HCI-1286-2022',
  mywork40: 'https://mywork40.com/',
};
