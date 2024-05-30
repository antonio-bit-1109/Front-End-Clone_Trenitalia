import i18n from "i18next";
import languageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

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
                    off_e_serv1: "OFFERTE E SERVIZI",
                    off_servSlide0: "viaggi in 2 al prezzo di 1",
                    off_servSlide1: "sconti fino al 70% per i viaggi degli elettori",
                    off_servSlide2: "sconti fino all'80% sulle frecce",
                    off_servSlide3: "parti per la sardegna e la sicilia",
                    off_servSlide4: "portala tua bici gratis su intercity",
                    off_servSlide5: "viaggia senza limiti a partire da 29$",
                    off_servSlide6: "viaggia con i link del regionale",
                    off_servSlide7: "viaggia con intercity notte",
                    off_servSlide8: "sconto aggiuntivo del 10% per i nuovi clienti",
                    off_servSlide9: "scopri l'offerta American Express",
                    off_servSlide10: "non hai ancora l'app trenitalia?",
                    off_servSlide11: "insieme per la sostenibilità",
                    serv_disp1: "I SERVIZI A TUA DISPOSIZIONE",
                    inEvid1: "IN EVIDENZA",
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
                    off_e_serv1: "OFFERS AND SERVICES",
                    off_servSlide0: "travel 2 for the price of 1",
                    off_servSlide1: "discounts up to 70% for voters' travels",
                    off_servSlide2: "discounts up to 80% on arrows",
                    off_servSlide3: "depart for Sardinia and Sicily",
                    off_servSlide4: "bring your bike for free on intercity",
                    off_servSlide5: "travel without limits starting from $29",
                    off_servSlide6: "travel with the regional link",
                    off_servSlide7: "travel with intercity night",
                    off_servSlide8: "additional 10% discount for new customers",
                    off_servSlide9: "discover the American Express offer",
                    off_servSlide10: "don't you have the Trenitalia app yet?",
                    off_servSlide11: "together for sustainability",
                    serv_disp1: "SERVICES AT YOUR DISPOSAL",
                    inEvid1: "FEATURES",
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
                    off_e_serv1: "OFERTAS Y SERVICIOS",
                    off_servSlide0: "viaja 2 al precio de 1",
                    off_servSlide1: "descuentos de hasta el 70% para los viajes de los votantes",
                    off_servSlide2: "descuentos de hasta el 80% en flechas",
                    off_servSlide3: "parte para Cerdeña y Sicilia",
                    off_servSlide4: "lleva tu bicicleta gratis en intercity",
                    off_servSlide5: "viaja sin límites a partir de $29",
                    off_servSlide6: "viaja con el enlace regional",
                    off_servSlide7: "viaja con intercity noche",
                    off_servSlide8: "10% de descuento adicional para nuevos clientes",
                    off_servSlide9: "descubre la oferta de American Express",
                    off_servSlide10: "¿Todavía no tienes la aplicación Trenitalia?",
                    off_servSlide11: "juntos por la sostenibilidad",
                    serv_disp1: "SERVICIOS A TU DISPOSICIÓN",
                    inEvid1: "EN EVIDENCIA",
                },
            },
        },
    });
