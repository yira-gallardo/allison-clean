"use client";

import React from "react";
import { motion } from "framer-motion";

export default function TourSection() {
  // Cargar fuente de Google Fonts
  React.useEffect(() => {
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Anton:wght@400&family=Bebas+Neue:wght@400&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);

  // Función para determinar si una fecha ya pasó
  const isDatePassed = (dateString, eventYear) => {
    const currentDate = new Date();

    // Parsear la fecha del formato "26.SEP"
    const [day, month] = dateString.split(".");
    const monthMap = {
      ENE: 0,
      JAN: 0,
      FEB: 1,
      MAR: 2,
      APR: 3,
      ABR: 3,
      MAY: 4,
      JUN: 5,
      JUL: 6,
      AUG: 7,
      SEP: 8,
      OCT: 9,
      NOV: 10,
      DIC: 11,
    };

    const eventMonth = monthMap[month];
    const eventDate = new Date(eventYear, eventMonth, parseInt(day));

    // Si el evento ya pasó
    if (eventDate < currentDate) {
      return true;
    }

    return false;
  };

  const tourDates = [
    { date: "10.SEP", year: 2026, location: "BUCARAMANGA, COL - PLAZOLETA CÍVICA" },
    { date: "12.SEP", year: 2026, location: "CDMX, MX - VANS WARPED TOUR" },
    { date: "15.SEP", year: 2026, location: "HOUSTON, USA - THE BRONZE PEACOCK AT HOUSE OF BLUES" },
    { date: "17.SEP", year: 2026, location: "CORPUS CHRISTI, USA - HOUSE OF ROCK" },
    { date: "19.SEP", year: 2026, location: "DALLAS, USA - PUZZLES DEEP ELLUM" },
    { date: "20.SEP", year: 2026, location: "SAN ANTONIO, USA - THE PAPER TIGER" },
    { date: "22.SEP", year: 2026, location: "EL PASO, USA - LOWBROW PALACE" },
    { date: "23.SEP", year: 2026, location: "SAN DIEGO, USA - BRICK BY BRICK" },
    { date: "24.SEP", year: 2026, location: "PHOENIX, USA - THE ROSETTA ROOM" },
    { date: "25.SEP", year: 2026, location: "LAS VEGAS, USA - SWAN DIVE" },
    { date: "26.SEP", year: 2026, location: "FRESNO, USA - TOWER THEATRRE LOUNGE" },
    { date: "27.SEP", year: 2026, location: "SANTA ANA, USA - CONSTELLATION ROOM (SOLD OUT!)" },
    { date: "28.SEP", year: 2026, location: "SANTA ANA, USA - CONSTELLATION ROOM" },
    { date: "01.OCT", year: 2026, location: "HUANCAYO, PE - CAFÉ SHOW ANTONELLAS" },
    { date: "02.OCT", year: 2026, location: "AREQUIPA, PE - CLANDESTINO DISCO" },
    { date: "03.OCT", year: 2026, location: "LIMA, PE - CC FESTIVA" },
    { date: "09.OCT", year: 2026, location: "PUEBLA, MX - AUDITORIO AREMA" },
    { date: "24.OCT", year: 2026, location: "MONTERREY, MX - CAFÉ IGUANA" },
    { date: "14.NOV", year: 2026, location: "ORLANDO, USA - VANS WARPED TOUR" },
    { date: "15.NOV", year: 2026, location: "PACHUCA, MEX - PACHUCA ROCK FEST" },
    { date: "20.NOV", year: 2026, location: "SANTA TECLA, SV - SALÓN ADALBERTO GUIROLA" },
    { date: "21.NOV", year: 2026, location: "GUATEMALA, GT - PARQUE DE LA INDUSTRIA" },
    { date: "28.NOV", year: 2026, location: "MÉRIDA, MX - HAPPY FEST, EMO FOREVER" },
 
  ];

  // Links para cada fecha del tour
  const tourLinks = {
    "26.SEP": "#",
    "10.SEP": "https://imct.gov.co/feria-bonita/",
    "12.SEP": "https://www.vanswarpedtourmexico.com/?_gl=1*w8pkv*_gcl_au*NzA3MTIxNDU2LjE3NzE4OTU0MzI.",
    "15.SEP": "https://www.ticketmaster.com/event/3A0064729BC87FD9",
    "17.SEP": "https://www.etix.com/ticket/p/39765848/allison-eforia-usa-tour-corpus-christi-house-of-rock",    
    "19.SEP": "https://wl.eventim.us/event/allison/685462?afflky=PuzzlesDeepEllum",
    "20.SEP": "https://www.eventim.us/event/tickets/684751",
    "22.SEP": "https://wl.eventim.us/event/allison/684995?afflky=LowbrowPalace",
    "23.SEP": "https://dice.fm/partner/tickets/event/l876np-allison-euforia-usa-tour-23rd-sep-soda-bar-san-diego-tickets?dice_id=10057748&dice_channel=web&dice_tags=organic&dice_campaign=allison26soda&dice_feature=mio_marketing&_branch_match_id=1618374109638010322&utm_source=web&utm_campaign=allison26soda&utm_medium=mio_marketing&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXz8nMy9ZLyUxO1UvL1U%2FMyckszs8zMivOT0m0rytKTUstKsrMS49PKsovL04tsnVNSU8FAKKDJcc6AAAA",
    "24.SEP": "https://wl.eventim.us/event/allison/685448?afflky=13thFloorEntertainment",
    "25.SEP": "https://www.etix.com/ticket/p/82300857/allison-euforia-usa-tour-las-vegas-swan-dive",
    "26.SEP": "https://towertheatre.ticketsauce.com/e/allison-euforia-usa-tour/tickets",
    "27.SEP": "https://www.ticketmaster.com/event/09006506E6B3F996",
    "28.SEP": "https://www.ticketmaster.com/allison-euforia-usa-tour-santa-ana-california-09-28-2026/event/0900650DDAD0CEC6", 
    "01.OCT": "https://www.joinnus.com/events/concerts/huancayo-allison-en-huancayo-euforia-tour-77135",
    "02.OCT": "https://www.joinnus.com/events/concerts/arequipa-allison-en-arequipa-euforia-tour-76340?fbclid=IwY2xjawSBkDNleHRuA2FlbQIxMABicmlkETFhZXNVSnMwM0g0b2lqUjhkc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHiduvG2EHDxvIqgnPhNSoZbDusrLoupidhp1laLO2B4QSnbr-YVT82Ltl4nn_aem_JwkqCL_DPMMKrBYTjjINQw",
    "03.OCT": "https://www.passline.com/eventos/allison-en-lima-euforia-tour",
    "09.OCT": "https://checkout.arema.mx/81992",
    "24.OCT": "https://www.ticketmaster.com.mx/allison-monterrey-24-10-2026/event/3D006490ECB5C22A",
    "14.NOV": "https://vanswarpedtourorlando.frontgatetickets.com/?fbp=fb.1.1771895433734.213437776649056110&ttp=01KJ6K58TRKYNN4KBRYFP23HST_.tt.1&external_id=5tXuFzt7rIxQxMis&_gl=1*60zap4*_gcl_au*NzA3MTIxNDU2LjE3NzE4OTU0MzI.*_ga*MTI0NDYyMzQxOS4xNzcyNzQxMTgy*_ga_9Y39919PMG*czE3NzI3NDExODEkbzEkZzAkdDE3NzI3NDExODEkajYwJGwwJGgxNzA0OTEyMTAw",
    "15.NOV": "https://pachuca-rock-fest-2026.boletia.com/",
    "20.NOV": "https://www.digiticket.online/events/allison-en-guatemala",
    "21.NOV": "https://www.digiticket.online/events/allison-en-el-salvador",
    "28.NOV": "https://tusboletos.mx/evento/happy-fest-emo-forever-merida",
  };

  // Filtrar solo las fechas futuras y excluir fechas específicas
  const sortedTourDates = React.useMemo(() => {
    const hiddenDates = ["05.DIC", "06.DIC"]; // Fechas ocultas al público
    const futureDates = tourDates.filter(
      (show) =>
        !isDatePassed(show.date, show.year) && !hiddenDates.includes(show.date)
    );
    return futureDates;
  }, []);

  return (
    <motion.section
      className="py-8 md:py-16 px-4 md:px-6 relative min-h-screen"
      style={{
        backgroundImage: "url('/img/textura.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.1 }}
    >
      {/* Overlay para mantener la legibilidad del texto */}
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="max-w-4xl mx-auto relative z-10">
        {/* Título */}
        <motion.div
          className="text-center mb-8 md:mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, amount: 0.1 }}
        >
          <h2
            className="text-3xl md:text-5xl lg:text-6xl font-black text-[#A0BEC0] mb-4 tracking-wider uppercase"
            style={{
              fontFamily: "Anton, sans-serif",
              textShadow: "2px 2px 4px rgba(0,0,0,0.8)",
              letterSpacing: "0.1em",
              fontWeight: "400",
            }}
          >
            TOUR DATES
          </h2>
        </motion.div>

        {/* Tabla de fechas */}
        <motion.div
          className="bg-black/40 rounded-lg overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true, amount: 0.05 }}
        >
          <div className="divide-y divide-white/20">
            {sortedTourDates.map((show, index) => (
              <motion.div
                key={index}
                className="flex flex-col md:flex-row items-start md:items-center justify-between p-4 md:p-6 hover:bg-white/5 transition-colors duration-300 space-y-3 md:space-y-0"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.5,
                  delay: Math.min(index * 0.05, 0.5),
                }}
                viewport={{ once: true, amount: 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                {/* Fecha */}
                <div className="flex-shrink-0 w-full md:w-auto md:flex-1">
                  <span
                    className={`font-black text-base md:text-lg uppercase tracking-wide block ${
                      isDatePassed(show.date, show.year)
                        ? "text-gray-500 line-through opacity-60"
                        : "text-[#A0BEC0]"
                    }`}
                    style={{
                      fontFamily: "Anton, sans-serif",
                      fontWeight: "400",
                    }}
                  >
                    {show.date}
                  </span>
                </div>

                {/* Ubicación */}
                <div className="flex-grow w-full md:flex-2 md:text-center">
                  <span
                    className={`font-black text-sm md:text-lg uppercase tracking-wide block ${
                      isDatePassed(show.date, show.year)
                        ? "text-gray-500 line-through opacity-60"
                        : "text-[#A0BEC0]"
                    }`}
                    style={{
                      fontFamily: "Anton, sans-serif",
                      fontWeight: "400",
                    }}
                  >
                    {show.location}
                  </span>
                </div>

                {/* Botón de tickets */}
                <div className="flex-shrink-0 w-full md:w-auto md:flex-1 md:text-right">
                  {isDatePassed(show.date, show.year) ? (
                    <span
                      className="w-full md:w-auto border border-gray-500 text-gray-500 font-black py-2 px-4 md:px-6 rounded uppercase tracking-wide text-sm md:text-base inline-block text-center cursor-not-allowed opacity-60"
                      style={{
                        fontFamily: "Anton, sans-serif",
                        fontWeight: "400",
                      }}
                    >
                      PASADO
                    </span>
                  ) : (
                    <a
                      href={tourLinks[show.date]}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full md:w-auto border border-white text-white font-black py-2 px-4 md:px-6 rounded hover:bg-white hover:text-black transition-colors duration-300 uppercase tracking-wide text-sm md:text-base inline-block text-center"
                      style={{
                        fontFamily: "Anton, sans-serif",
                        fontWeight: "400",
                      }}
                    >
                      TICKETS
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
