import Banner from "../components/Banner";
import Navigation from "../components/Navigation";
import YouTubeSection from "../components/YouTubeSection";
import InstagramSection from "../components/InstagramSection";
import TourSection from "../components/TourSection";
import MerchSection from "../components/MerchSection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Banner de fondo */}
      <Banner />
      {/* Sección de YouTube */}
      <YouTubeSection />
      {/* Sección de Tour */}
      <TourSection />
      {/* Sección de Merchandise */}
      <MerchSection />
      {/* Sección de Instagram */}
      <InstagramSection />
      {/* Footer */}
      <Footer />
    </div>
  );
}
