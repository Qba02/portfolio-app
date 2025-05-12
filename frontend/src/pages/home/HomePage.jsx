import { Navbar, Footer } from "@components/index";
import {
  About,
  Comments,
  Contact,
  Hero,
  HomeMenu,
  Offer,
  Projects,
} from "./components/index";

const HomePage = () => {
  return (
    <>
      <div>
        <Navbar>
          <HomeMenu />
        </Navbar>
        <Hero></Hero>
      </div>

      <div>
        <About />
        <Offer />
        <Projects />
        <Comments />
        <Contact />
      </div>

      <Footer></Footer>
    </>
  );
};

export default HomePage;
