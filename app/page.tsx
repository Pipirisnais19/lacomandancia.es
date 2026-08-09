import Header from "@/components/Header";
import HeroBento from "@/components/HeroBento";
import MetagameGrid from "@/components/MetagameGrid";
import TournamentResults from "@/components/TournamentResults";
import TournamentsSection from "@/components/TournamentsSection";
import ValidatorSection from "@/components/ValidatorSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <HeroBento />
        <MetagameGrid />
        <TournamentResults />
        <TournamentsSection />
        <ValidatorSection />
      </main>
      <Footer />
    </>
  );
}
