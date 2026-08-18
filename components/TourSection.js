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
    { date: "22.AGO", year: 2026, location: "ATLACOMULCO, MX - MCCARTHY'S" },
    { date: "27.AGO", year: 2026, location: "QUITO, EC - TICKETS AVAILABLE SOON" },
    { date: "28.AGO", year: 2026, location: "AMBATO, EC - TICKETS AVAILABLE SOON" },
    { date: "29.AGO", year: 2026, location: "IBARRA, EC - TICKETS AVAILABLE SOON" },
    { date: "03.SEP", year: 2026, location: "CUENCA, EC - TICKETS AVAILABLE SOON" },
    { date: "04.SEP", year: 2026, location: "GUAYAQUIL, EC - TICKETS AVAILABLE SOON" },
    { date: "05.SEP", year: 2026, location: "MANTA, EC - TICKETS AVAILABLE SOON" },
    { date: "10.SEP", year: 2026, location: "BUCARAMANGA, COL - PLAZOLETA CÍVICA" },
    { date: "12.SEP", year: 2026, location: "CDMX, MX - VANS WARPED TOUR" },
    { date: "13.SEP", year: 2026, location: "CDMX, MX - VANS WARPED TOUR" },
    { date: "01.OCT", year: 2026, location: "HUANCAYO, PE - TEATRO FÉNIX" },
    { date: "02.OCT", year: 2026, location: "AREQUIPA, PE - TEATRO FÉNIX" },
    { date: "03.OCT", year: 2026, location: "LIMA, PE - CC FESTIVA" },
    { date: "24.OCT", year: 2026, location: "MONTERREY, MX - CAFÉ IGUANA" },
    { date: "14.NOV", year: 2026, location: "ORLANDO, USA - VANS WARPED TOUR" },
    { date: "15.NOV", year: 2026, location: "ORLANDO, USA - VANS WARPED TOUR" },

  ];

  // Links para cada fecha del tour
  const tourLinks = {
    "26.SEP": "#",
    "20.FEB":
      "https://eventos.taquillaplus.com.mx/eventperformances.asp?evt=636",
    "21.FEB":
      "https://eventos.taquillaplus.com.mx/eventperformances.asp?evt=616",
    "22.FEB": "https://boleticka.com/puntoVenta/#/preview/136",
    "28.FEB": "https://www.eticket.mx/masinformacion.aspx?idevento=34254",
    "15.MAR": "https://www.vivelatino.com.mx/boletos",
    "28.MAR": "https://www.tecatepalnorte.com/boletos",
    "11.ABR":
      "https://www.ticketnowmexico.com/evento/presentacion/allison-en-c4-concert-house/918",
    "26.ABR": "https://www.feriasanmarcos.com/eventos/foro-del-lago/",
    "01.MAY": "https://www.superboletos.com/landing-evento/2PwXQC9H2Moo5wUENjVDVg",
    "16.MAY": "https://www.facebook.com/DireccionMunicipalDeCulturaDeLaPaz",
    "13.JUN": "https://cascaritafutfest13.boletia.com/",
    "25.JUL": "https://vanswarpedtourlongbeach.frontgatetickets.com/?_ga=2.145257203.697278282.1753991570-1396607449.1746815214&fbp=fb.1.1771895433734.213437776649056110&ttp=01KJ6K58TRKYNN4KBRYFP23HST_.tt.1&external_id=5tXuFzt7rIxQxMis&_gl=1*197lp5n*_gcl_au*NzA3MTIxNDU2LjE3NzE4OTU0MzI.*_ga*MTg1MjI1NDk4Ni4xNzcyNzQxMTg0*_ga_9Y39919PMG*czE3NzI3NDExODQkbzEkZzAkdDE3NzI3NDExODQkajYwJGwwJGgxOTMwNzIyNjU1",
    "01.AGO": "https://www.mitaquilla.com.co/allison-bogota/",
    "22.AGO": "https://www.facebook.com/profile.php?id=61550956457949",
    "27.AGO": "https://www.ticketstar365.com/ticket2/index.php?modulo=evento&con=1882",
    "28.AGO": "https://www.ticketstar365.com/ticket2/index.php?modulo=evento&con=1883",
    "29.AGO": "https://www.ticketstar365.com/ticket2/index.php?modulo=evento&con=1884",
    "03.SEP": "https://www.ticketstar365.com/ticket2/index.php?modulo=evento&con=1881",
    "04.SEP": "https://www.ticketstar365.com/ticket2/index.php?modulo=evento&con=1886",
    "05.SEP": "https://www.ticketstar365.com/ticket2/index.php?modulo=evento&con=1885",
    "10.SEP": "https://imct.gov.co/feria-bonita/",
    "12.SEP": "https://www.vanswarpedtourmexico.com/?_gl=1*w8pkv*_gcl_au*NzA3MTIxNDU2LjE3NzE4OTU0MzI.",
    "13.SEP": "https://www.vanswarpedtourmexico.com/?_gl=1*w8pkv*_gcl_au*NzA3MTIxNDU2LjE3NzE4OTU0MzI.",
    "01.OCT": "https://www.joinnus.com/events/concerts/huancayo-allison-en-huancayo-euforia-tour-77135",
    "02.OCT": "https://www.joinnus.com/events/concerts/arequipa-allison-en-arequipa-euforia-tour-76340?fbclid=IwY2xjawSBkDNleHRuA2FlbQIxMABicmlkETFhZXNVSnMwM0g0b2lqUjhkc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHiduvG2EHDxvIqgnPhNSoZbDusrLoupidhp1laLO2B4QSnbr-YVT82Ltl4nn_aem_JwkqCL_DPMMKrBYTjjINQw",
    "03.OCT": "https://www.passline.com/eventos/allison-en-lima-euforia-tour",
    "24.OCT": "https://www.ticketmaster.com.mx/allison-monterrey-24-10-2026/event/3D006490ECB5C22A",
    "14.NOV": "https://vanswarpedtourorlando.frontgatetickets.com/?fbp=fb.1.1771895433734.213437776649056110&ttp=01KJ6K58TRKYNN4KBRYFP23HST_.tt.1&external_id=5tXuFzt7rIxQxMis&_gl=1*60zap4*_gcl_au*NzA3MTIxNDU2LjE3NzE4OTU0MzI.*_ga*MTI0NDYyMzQxOS4xNzcyNzQxMTgy*_ga_9Y39919PMG*czE3NzI3NDExODEkbzEkZzAkdDE3NzI3NDExODEkajYwJGwwJGgxNzA0OTEyMTAw",
    "15.NOV": "https://vanswarpedtourorlando.frontgatetickets.com/?fbp=fb.1.1771895433734.213437776649056110&ttp=01KJ6K58TRKYNN4KBRYFP23HST_.tt.1&external_id=5tXuFzt7rIxQxMis&_gl=1*60zap4*_gcl_au*NzA3MTIxNDU2LjE3NzE4OTU0MzI.*_ga*MTI0NDYyMzQxOS4xNzcyNzQxMTgy*_ga_9Y39919PMG*czE3NzI3NDExODEkbzEkZzAkdDE3NzI3NDExODEkajYwJGwwJGgxNzA0OTEyMTAw",
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
