import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Alumni from "./pages/Alumni";
import Contact from "./pages/Contact";
import Initiative from "./pages/Initiative";
import Landing from "./pages/Landing";
import Partner from "./pages/Partner";
import PastEvents from "./pages/PastEvents";
import RecentEvents from "./pages/RecentEvents";
import UpcomingEvents from "./pages/UpcomingEvents";


export default function Home() {
  return (
    <div>
      <Landing/>
      <About/>
      <Initiative/>
      <RecentEvents/>
      <UpcomingEvents/>
      <PastEvents/>
      <Alumni/>
      <Partner/>
      <Contact/>
      <Footer/>
    </div>
  )
}
