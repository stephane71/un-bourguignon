"use client";

import { useEffect } from "react";
import { OFFRE_PATH } from "@/components/navigation";

/**
 * Avant le 19/11/2026, l'offre occupait l'accueil. Les liens déjà diffusés
 * (fiche Google, messages, QR codes) pointent vers /#deroule, /#cas, etc. :
 * le fragment ne parvient pas au serveur, on le renvoie donc ici vers la
 * même ancre de la page de l'offre.
 */
const ANCRES_OFFRE = new Set([
  "#pour-qui",
  "#benefices",
  "#sur-mesure",
  "#deroule",
  "#d-avance",
  "#cas",
  "#garanties",
  "#questions",
  "#contact",
  "#a-propos",
]);

export function AnciennesAncres() {
  useEffect(() => {
    const { hash } = window.location;
    if (ANCRES_OFFRE.has(hash)) {
      const cible = hash === "#a-propos" ? "#interlocuteur" : hash;
      window.location.replace(`${OFFRE_PATH}${cible}`);
    }
  }, []);
  return null;
}
