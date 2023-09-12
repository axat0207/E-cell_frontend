import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import About from "../components/pages/About";
import Alumni from "../components/pages/Alumni";
import Contact from "../components/pages/Contact";
import Initiative from "../components/pages/Initiative";
import Landing from "../components/pages/Landing";
import Partner from "../components/pages/Partner";
import PastEvents from "../components/pages/PastEvents";
import RecentEvents from "../components/pages/RecentEvents";
import UpcomingEvents from "../components/pages/UpcomingEvents";


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
