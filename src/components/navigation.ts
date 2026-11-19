export interface NavLink {
  label: string;
  href: string;
}

export interface Navigation {
  links: NavLink[];
  cta: NavLink;
}

export const OFFRE_PATH = "/gestion-sur-mesure";

/** Accueil et pages annexes : le menu nomme les publics, pas les technologies. */
const NAV_ACCUEIL: Navigation = {
  links: [{ label: "Pour les entreprises", href: OFFRE_PATH }],
  cta: { label: "Premier échange", href: `${OFFRE_PATH}#contact` },
};

/** Page de l'offre : repères dans la page. */
const NAV_OFFRE: Navigation = {
  links: [
    { label: "Pour qui", href: `${OFFRE_PATH}#pour-qui` },
    { label: "Déroulé et prix", href: `${OFFRE_PATH}#deroule` },
    { label: "Interlocuteur", href: `${OFFRE_PATH}#interlocuteur` },
    { label: "Un cas réel", href: `${OFFRE_PATH}#cas` },
  ],
  cta: { label: "Premier échange", href: `${OFFRE_PATH}#contact` },
};

export function navigationFor(pathname: string | null): Navigation {
  return pathname?.startsWith(OFFRE_PATH) ? NAV_OFFRE : NAV_ACCUEIL;
}
