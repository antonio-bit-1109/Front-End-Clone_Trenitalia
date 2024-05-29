import i18n from "i18next";
import languageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

//utlizzare il detector della lingua di i18next , indicare l'utilizzo di un app react

//inizializzare lingua default come italiano "it"
// in resources tutte le traduzioni.
i18n.use(languageDetector)
    .use(initReactI18next)
    .init({
        lng: "en",
        resources: {
            it: {
                translation: {
                    navUp1: "Siti del gruppo",
                    navUp2: "Whistleblowing-segnalazioni",
                    navUp3: "Trenitalia for Business",
                    navUp4: "Cerca Il biglietto",
                    navUp5: "Assistenza",
                    navUp6: "Area Riservata",
                    navDown1: "CHI SIAMO",
                    navDown2: "FRECCE",
                    navDown3: "INTERCITY E INTERNAZIONALI",
                    navDown4: "REGIONALE",
                    navDown5: "OFFERTE",
                    navDown6: "SERVIZI",
                    navDown7: "CARTAFRECCIA E X-GO",
                    navDown8: "INFORMAZIONI",
                    navDownDown1: "INFOTRAFFICO",
                    //
                    carous1: "Principali Soluzioni",
                    carous2: "Ricerca Avanzata",
                    carous3: "Andata e Ritorno",
                    carous4: "Acquisto Rapido",
                    carous5: "DA",
                    carous6: "A",
                    carous7: "Ultime Ricerche",
                    carous8: "Completa il tuo Viaggio",
                    carous9: "CERCA",
                },
            },
            en: {
                translation: {
                    navUp1: "group Sites",
                    navUp2: "Whistleblowing-reports",
                    navUp3: "Trenitalia for Business",
                    navUp4: "Look for the ticket",
                    navUp5: "Assistence",
                    navUp6: "Reserved Area",
                    navDown1: "WHO WE ARE",
                    navDown2: "ARROWS",
                    navDown3: "INTERCITY AND INTERNATIONAL",
                    navDown4: "REGIONAL",
                    navDown5: "OFFERS",
                    navDown6: "SERVICES",
                    navDown7: "CARTAFRECCIA AND X-GO",
                    navDown8: "INFORMATION",
                    navDownDown1: "INFO-TRAFFIC",
                    carous1: "Main Solutions",
                    carous2: "Advanced Search",
                    carous3: "Round Trip",
                    carous4: "Quick Purchase",
                    carous5: "FROM",
                    carous6: "TO",
                    carous7: "Latest Searches",
                    carous8: "Complete your Trip",
                    carous9: "SEARCH",
                },
            },
            esp: {
                translation: {
                    navUp1: "Sitios del grupo",
                    navUp2: "Denuncias de irregularidades",
                    navUp3: "Trenitalia para Negocios",
                    navUp4: "Buscar el billete",
                    navUp5: "Asistencia",
                    navUp6: "Área Reservada",
                    navDown1: "QUIENES SOMOS",
                    navDown2: "FLECHAS",
                    navDown3: "INTERCITY E INTERNACIONALES",
                    navDown4: "REGIONAL",
                    navDown5: "OFERTAS",
                    navDown6: "SERVICIOS",
                    navDown7: "CARTAFRECCIA Y X-GO",
                    navDown8: "INFORMACIÓN",
                    navDownDown1: "INFO-TRÁFICO",
                    carous1: "Soluciones Principales",
                    carous2: "Búsqueda Avanzada",
                    carous3: "Ida y Vuelta",
                    carous4: "Compra Rápida",
                    carous5: "DE",
                    carous6: "A",
                    carous7: "Últimas Búsquedas",
                    carous8: "Completa tu Viaje",
                    carous9: "BUSCAR",
                },
            },
        },
    });
