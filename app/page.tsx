import Header from "@/components/Header";
import HeroBento from "@/components/HeroBento";
import CommanderBudgetExplainer from "@/components/CommanderBudgetExplainer";
import MetagameGrid from "@/components/MetagameGrid";
import UpcomingTournaments from "@/components/UpcomingTournaments";
import TournamentResults from "@/components/TournamentResults";
import TournamentsSection from "@/components/TournamentsSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main id="contenido" className="flex-1">
        <HeroBento />
        <CommanderBudgetExplainer />
        <UpcomingTournaments />
        <MetagameGrid />
        <TournamentResults />
        <TournamentsSection />
      </main>
      <Footer />
    </>
  );
}
