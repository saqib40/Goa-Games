import AboutUs from "./components/AboutUs";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Referral from "./components/Referral";
import Support from "./components/Support";
import TopGames from "./components/TopGames";

export default function App() {
  return (
    <div className="bg-white font-sans">
      <Header />
      <main>
        <Hero />
        <Support />
        <Referral />
        <TopGames />
        <AboutUs />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
