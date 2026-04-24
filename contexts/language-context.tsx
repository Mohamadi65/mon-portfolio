"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

type Language = "fr" | "en"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations = {
  fr: {
    // Navigation
    "nav.home": "ACCUEIL",
    "nav.about": "À PROPOS",
    "nav.interventions": "INTERVENTIONS",
    "nav.act": "AGIR",
    "nav.management": "ESPACE GESTION",
    "nav.publicSite": "Site Public",
    "nav.logout": "DÉCONNEXION",
    "nav.persons": "PERSONNES",
    "nav.families": "FAMILLES",
    "nav.schools": "ÉCOLES",
    "nav.villages": "VILLAGES",
    "nav.jobs": "MÉTIERS",
    "nav.schoolYears": "RENTRÉES",
    "nav.materials": "MATÉRIELS",
    "nav.donations": "DONS",
    "nav.users": "UTILISATEURS",

    // Dashboard
    "dashboard.overview": "Tableau de bord",
    "dashboard.persons": "Personnes",
    "dashboard.families": "Familles",
    "dashboard.schools": "Écoles",
    "dashboard.villages": "Villages",
    "dashboard.jobs": "Métiers",
    "dashboard.schoolYears": "Rentrées scolaires",
    "dashboard.materials": "Matériels",
    "dashboard.donations": "Dons",
    "dashboard.users": "Utilisateurs",

    // Persons page
    "persons.title": "Gestion des Personnes",
    "persons.subtitle": "Registre des personnes de la communauté",
    "persons.registry": "Registre des Personnes",
    "persons.newPerson": "Nouvelle Personne",
    "persons.searchPlaceholder": "Rechercher par nom, prénom ou profession...",
    "persons.lastUpdate": "Dernière mise à jour aujourd'hui",
    "persons.withMicroCredit": "avec micro-crédit",
    "persons.familyHeads": "chefs de famille",
    "persons.allGenders": "Tous les genres",
    "persons.men": "Hommes",
    "persons.women": "Femmes",
    "persons.identity": "Identité",
    "persons.gender": "Genre",
    "persons.age": "Âge",
    "persons.situation": "Situation",
    "persons.profession": "Profession",
    "persons.village": "Village",
    "persons.school": "École",
    "persons.actions": "Actions",
    "persons.filters": "Filtres",
    "persons.count": "personne(s)",

    // Gender
    "gender.male": "Homme",
    "gender.female": "Femme",

    // Situation
    "situation.etudiant": "Étudiant",
    "situation.travailleur": "Travailleur",
    "situation.sansemploi": "Sans emploi",
    "situation.retraite": "Retraité",

    // Home page
    "home.title": "ALPHABÉTISATION AU BURKINA FASO",
    "home.subtitle": "Système de gestion communautaire - Burkina Faso",
    "home.hero.text1":
      "L'alphabétisation, menée dans les écoles de Sapaga et les villages de brousses environnants, est la pierre angulaire pour sauver les enfants et ainsi mieux préparer leur avenir.",
    "home.hero.text2":
      "Les Baobabs de Sapaga travaillent étroitement avec des organisations communautaires sur place pour évaluer les besoins réels au jour le jour et ainsi attribuer les dons avec succès.",
    "home.hero.cta1": "Découvrir nos actions",
    "home.hero.cta2": "Faire un don",
    "home.stats.people": "Personnes accompagnées",
    "home.stats.since": "depuis 2007",

    // Mission section
    "home.mission.title": "NOTRE MISSION",
    "home.mission.text1":
      "Notre mission est d'intervenir aussi bien au niveau de la scolarisation, de la santé, de l'alimentation que de l'aide au développement économique.",
    "home.mission.text2":
      "Nous travaillons étroitement avec les organisations communautaires sur place pour évaluer les besoins réels au jour le jour et ainsi attribuer les dons avec succès.",
    "home.mission.text3":
      "L'association accompagne les populations rurales dans leur développement en centralisant les données sur les populations, l'éducation et les ressources disponibles.",

    // Burkina section
    "home.burkina.title": "Le BURKINA FASO",
    "home.burkina.text1":
      "Le territoire du Burkina Faso est divisé en 13 régions et subdivisé en 45 provinces, 350 départements, 359 communes de plein exercice dirigées par des maires élus et 8 000 villages environ.",
    "home.burkina.text2":
      "La langue officielle est le français. De nombreuses langues nationales sont parlées dont les plus courantes sont le mooré, le dioula, gulmancéma et le fulfuldé.",
    "home.burkina.text3":
      "Depuis son indépendance en août 1960, le Burkina Faso a connu plusieurs régimes politiques : État de droit et État d'exception.",

    // Interventions
    "home.interventions.title": "NOS INTERVENTIONS",
    "home.interventions.subtitle":
      "Découvrez les différents domaines d'action de notre association pour accompagner les communautés rurales du Burkina Faso.",
    "home.interventions.education.title": "ÉDUCATION",
    "home.interventions.education.text":
      "Construction d'écoles, formation des enseignants et fourniture de matériel scolaire pour favoriser l'alphabétisation.",
    "home.interventions.health.title": "SANTÉ",
    "home.interventions.health.text":
      "Amélioration de l'accès aux soins de santé primaires et sensibilisation aux pratiques d'hygiène.",
    "home.interventions.development.title": "DÉVELOPPEMENT",
    "home.interventions.development.text":
      "Soutien aux activités génératrices de revenus et accompagnement des projets communautaires.",
    "home.interventions.infrastructure.title": "INFRASTRUCTURE",
    "home.interventions.infrastructure.text":
      "Construction de puits, amélioration des voies d'accès et équipement des villages en matériel de base.",

    // Act section
    "home.act.title": "AGIR AVEC NOUS",
    "home.act.subtitle":
      "Rejoignez notre mission pour lutter contre l'illettrisme et accompagner le développement des communautés rurales au Burkina Faso.",
    "home.act.donate": "Faire un don",
    "home.act.volunteer": "Devenir bénévole",

    // Footer
    "footer.description":
      "Association dédiée à la lutte contre l'illettrisme et au développement des communautés rurales au Burkina Faso depuis 2007.",
    "footer.contact": "Contact",
    "footer.links": "Liens Utiles",
    "footer.projects": "Nos projets",
    "footer.reports": "Rapports d'activité",
    "footer.transparency": "Transparence financière",
    "footer.management": "Espace de gestion",
    "footer.rights": "Tous droits réservés. | Association loi 1901",

    // Common
    "common.loading": "Chargement...",
    "common.search": "Rechercher...",
    "common.filter": "Filtrer",
    "common.export": "Exporter",
    "common.add": "Ajouter",
    "common.edit": "Modifier",
    "common.delete": "Supprimer",
    "common.save": "Enregistrer",
    "common.cancel": "Annuler",
    "common.close": "Fermer",
    "common.menu": "Menu",
  },
  en: {
    // Navigation
    "nav.home": "HOME",
    "nav.about": "ABOUT",
    "nav.interventions": "INTERVENTIONS",
    "nav.act": "ACT",
    "nav.management": "MANAGEMENT SPACE",
    "nav.publicSite": "Public Site",
    "nav.logout": "LOGOUT",
    "nav.persons": "PERSONS",
    "nav.families": "FAMILIES",
    "nav.schools": "SCHOOLS",
    "nav.villages": "VILLAGES",
    "nav.jobs": "JOBS",
    "nav.schoolYears": "SCHOOL YEARS",
    "nav.materials": "MATERIALS",
    "nav.donations": "DONATIONS",
    "nav.users": "USERS",

    // Dashboard
    "dashboard.overview": "Dashboard",
    "dashboard.persons": "Persons",
    "dashboard.families": "Families",
    "dashboard.schools": "Schools",
    "dashboard.villages": "Villages",
    "dashboard.jobs": "Jobs",
    "dashboard.schoolYears": "School Years",
    "dashboard.materials": "Materials",
    "dashboard.donations": "Donations",
    "dashboard.users": "Users",

    // Persons page
    "persons.title": "Person Management",
    "persons.subtitle": "Community persons registry",
    "persons.registry": "Persons Registry",
    "persons.newPerson": "New Person",
    "persons.searchPlaceholder": "Search by name, surname or profession...",
    "persons.lastUpdate": "Last updated today",
    "persons.withMicroCredit": "with micro-credit",
    "persons.familyHeads": "family heads",
    "persons.allGenders": "All genders",
    "persons.men": "Men",
    "persons.women": "Women",
    "persons.identity": "Identity",
    "persons.gender": "Gender",
    "persons.age": "Age",
    "persons.situation": "Situation",
    "persons.profession": "Profession",
    "persons.village": "Village",
    "persons.school": "School",
    "persons.actions": "Actions",
    "persons.filters": "Filters",
    "persons.count": "person(s)",

    // Gender
    "gender.male": "Male",
    "gender.female": "Female",

    // Situation
    "situation.etudiant": "Student",
    "situation.travailleur": "Worker",
    "situation.sansemploi": "Unemployed",
    "situation.retraite": "Retired",

    // Home page
    "home.title": "LITERACY IN BURKINA FASO",
    "home.subtitle": "Community management system - Burkina Faso",
    "home.hero.text1":
      "Literacy, carried out in Sapaga schools and surrounding bush villages, is the cornerstone for saving children and thus better preparing their future.",
    "home.hero.text2":
      "The Baobabs of Sapaga work closely with local community organizations to assess real needs on a daily basis and thus successfully allocate donations.",
    "home.hero.cta1": "Discover our actions",
    "home.hero.cta2": "Make a donation",
    "home.stats.people": "People supported",
    "home.stats.since": "since 2007",

    // Mission section
    "home.mission.title": "OUR MISSION",
    "home.mission.text1":
      "Our mission is to intervene in education, health, nutrition and economic development assistance.",
    "home.mission.text2":
      "We work closely with local community organizations to assess real needs on a daily basis and thus successfully allocate donations.",
    "home.mission.text3":
      "The association supports rural populations in their development by centralizing data on populations, education and available resources.",

    // Burkina section
    "home.burkina.title": "BURKINA FASO",
    "home.burkina.text1":
      "The territory of Burkina Faso is divided into 13 regions and subdivided into 45 provinces, 350 departments, 359 full-fledged municipalities led by elected mayors and approximately 8,000 villages.",
    "home.burkina.text2":
      "The official language is French. Many national languages are spoken, the most common being Mooré, Dioula, Gulmancéma and Fulfuldé.",
    "home.burkina.text3":
      "Since its independence in August 1960, Burkina Faso has experienced several political regimes: rule of law and state of exception.",

    // Interventions
    "home.interventions.title": "OUR INTERVENTIONS",
    "home.interventions.subtitle":
      "Discover the different areas of action of our association to support rural communities in Burkina Faso.",
    "home.interventions.education.title": "EDUCATION",
    "home.interventions.education.text":
      "School construction, teacher training and provision of school materials to promote literacy.",
    "home.interventions.health.title": "HEALTH",
    "home.interventions.health.text":
      "Improving access to primary health care and raising awareness of hygiene practices.",
    "home.interventions.development.title": "DEVELOPMENT",
    "home.interventions.development.text":
      "Support for income-generating activities and support for community projects.",
    "home.interventions.infrastructure.title": "INFRASTRUCTURE",
    "home.interventions.infrastructure.text":
      "Well construction, improvement of access roads and equipping villages with basic equipment.",

    // Act section
    "home.act.title": "ACT WITH US",
    "home.act.subtitle":
      "Join our mission to fight illiteracy and support the development of rural communities in Burkina Faso.",
    "home.act.donate": "Make a donation",
    "home.act.volunteer": "Become a volunteer",

    // Footer
    "footer.description":
      "Association dedicated to fighting illiteracy and developing rural communities in Burkina Faso since 2007.",
    "footer.contact": "Contact",
    "footer.links": "Useful Links",
    "footer.projects": "Our projects",
    "footer.reports": "Activity reports",
    "footer.transparency": "Financial transparency",
    "footer.management": "Management space",
    "footer.rights": "All rights reserved. | Association law 1901",

    // Common
    "common.loading": "Loading...",
    "common.search": "Search...",
    "common.filter": "Filter",
    "common.export": "Export",
    "common.add": "Add",
    "common.edit": "Edit",
    "common.delete": "Delete",
    "common.save": "Save",
    "common.cancel": "Cancel",
    "common.close": "Close",
    "common.menu": "Menu",
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("fr")

  useEffect(() => {
    const savedLanguage = localStorage.getItem("sapaga-language") as Language
    if (savedLanguage && (savedLanguage === "fr" || savedLanguage === "en")) {
      setLanguage(savedLanguage)
    }
  }, [])

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang)
    localStorage.setItem("sapaga-language", lang)
  }

  const t = (key: string): string => {
    return translations[language][key as keyof (typeof translations)[typeof language]] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
