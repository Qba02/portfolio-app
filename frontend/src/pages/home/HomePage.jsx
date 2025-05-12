import { Navbar } from "@components/index.js";
import {
  About,
  Comments,
  Contact,
  Hero,
  Offer,
  Projects,
} from "./components/index.js";

const HomePage = () => {
  return (
    <>
      <div>
        <Navbar />
        <Hero></Hero>
      </div>

      <div>
        <About />
        <Offer />
        <Projects />
        <Comments />
        <Contact />
      </div>
    </>
  );
};

export default HomePage;
