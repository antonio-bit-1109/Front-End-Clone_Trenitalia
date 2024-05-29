import i18n from "i18next";
import languageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

//utlizzare il detector della lingua di i18next , indicare l'utilizzo di un app react

//inizializzare lingua default come italiano "it"
// in resources tutte le traduzioni.
i18n.use(languageDetector)
    .use(initReactI18next)
    .init({
        debug: true,
        lng: "it",
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
                    biglietto: "Cerca Biglietto",
                    navDownDown1: "INFOTRAFFICO",
                    carousForm1: "Principali Soluzioni",
                    carousForm2: "Ricerca Avanzata",
                    carousForm3: "Andata e Ritorno",
                    carousForm4: "Acquisto Rapido",
                    carousForm5: "DA",
                    carousForm6: "A",
                    carousForm7: "Ultime Ricerche",
                    carousForm8: "Completa il tuo Viaggio",
                    carousForm9: "CERCA",
                    carousFormSm1: " Principali Soluzioni",
                    carousFormSm2: "Ultime Ricerche",
                    carousFormSm3: "DA",
                    carousFormSm4: "A",
                    carousFormSm5: " Andata e Ritorno",
                    carousFormSm6: "CERCA",
                    carousFormSm7: " Ricerca Avanzata",
                    carousFormSm8: "Acquisto Rapido",
                    carousFormSm9: "Completa il tuo Viaggio",
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
                    biglietto: "Search for a Ticket",
                    navDownDown1: "INFO-TRAFFIC",
                    carousForm1: "Main Solutions",
                    carousForm2: "Advanced Search",
                    carousForm3: "Round Trip",
                    carousForm4: "Quick Purchase",
                    carousForm5: "FROM",
                    carousForm6: "TO",
                    carousForm7: "Latest Searches",
                    carousForm8: "Complete your Trip",
                    carousForm9: "SEARCH",
                    carousFormSm1: " Main Solutions",
                    carousFormSm2: "Latest Searches",
                    carousFormSm3: "FROM",
                    carousFormSm4: "TO",
                    carousFormSm5: " Round Trip",
                    carousFormSm6: "SEARCH",
                    carousFormSm7: " Advanced Search",
                    carousFormSm8: "Quick Purchase",
                    carousFormSm9: "Complete your Trip",
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
                    biglietto: "Buscar un Boleto",
                    navDownDown1: "INFO-TRÁFICO",
                    carousForm1: "Soluciones Principales",
                    carousForm2: "Búsqueda Avanzada",
                    carousForm3: "Ida y Vuelta",
                    carousForm4: "Compra Rápida",
                    carousForm5: "DE",
                    carousForm6: "A",
                    carousForm7: "Últimas Búsquedas",
                    carousForm8: "Completa tu Viaje",
                    carousForm9: "BUSCAR",
                    carousFormSm1: " Soluciones Principales",
                    carousFormSm2: "Últimas Búsquedas",
                    carousFormSm3: "DE",
                    carousFormSm4: "A",
                    carousFormSm5: " Ida y Vuelta",
                    carousFormSm6: "BUSCAR",
                    carousFormSm7: " Búsqueda Avanzada",
                    carousFormSm8: "Compra Rápida",
                    carousFormSm9: "Completa tu Viaje",
                },
            },
        },
    });
