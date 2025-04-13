import {
  projectAd,
  projectDocument,
  projectMusic,
  projectPlot,
} from "../assets/index";
import { RiAdvertisementLine } from "react-icons/ri";
import { MdOutlineMusicVideo } from "react-icons/md";
import { PiFilmReel } from "react-icons/pi";
import { PiFilmStrip } from "react-icons/pi";
import { PiVideoConference } from "react-icons/pi";
import { IoIosPeople } from "react-icons/io";

const hero = {
  title: "Paweł Kanik",
  content: `Jestem filmowcem z pasji – odkąd pamiętam, tworzenie obrazów było moim sposobem na opowiadanie historii.`,
};

const aboutMe = {
  title: "O mnie",
  tagline: "Film to emocje, które zostają na długo",
  subtitle: "Jestem filmowcem z pasji",
  content: `odkąd pamiętam, tworzenie obrazów było moim sposobem na opowiadanie historii. 
    Pierwsze filmy montowałem jako dziecko, kiedy kolega pokazał mi podstawowy program do edycji, a ja złożyłem swój pierwszy wakacyjny film. 
    Jeszcze wcześniej, bawiąc się żołnierzykami, instynktownie tworzyłem poklatkowe animacje. 
    To były początki – dziś zajmuję się szeroko pojętą kreacją filmową, realizując reklamy, teledyski, dokumenty,
     filmy okolicznościowe oraz fabularne.`,
  subcontent: `Mój znak rozpoznawczy? Kreatywność, nieszablonowe podejście i odwaga w eksplorowaniu nowych form przekazu. 
  Nie boję się wyzwań – każda produkcja to dla mnie szansa na stworzenie czegoś wyjątkowego. 
    Moje logo, rzymski hełm legionisty, symbolizuje pasję, determinację i filmowe korzenie, 
    które kształtowały mnie od najmłodszych lat.`,
  quote: `„Niektóre filmy są kawałkiem życia, moje są kawałkiem ciasta.”`,
  quoteAuthor: `Alfred Hitchcock`,
};

const experience = {
  title: "Doświadczenie i Pasja",
  content: `Przez lata byłem harcerzem, a dziś jestem instruktorem ZHR w stopniu podharcmistrza. 
  Prowadziłem drużynę oraz sekcję filmową, której film "Chata" zdobył pierwsze miejsce w ogólnopolskim harcerskim festiwalu filmowym. 
  To nauczyło mnie nie tylko organizacji pracy, ale i podejścia do projektów z ideą oraz zaangażowaniem. 
  Dla mnie film to coś więcej niż obraz i dźwięk – to emocje, które zostają z widzem na długo.`,
  quote: `„Niektóre filmy są kawałkiem życia, moje są kawałkiem ciasta.” – Alfred Hitchcock.`,
};

const offer = {
  title: "Oferta",
  tagline: "Film skrojony na miarę Twojej wizji",
  description: `Każdy projekt wyceniam indywidualnie, uwzględniając jego zakres i specyfikę. 
  Przed realizacją dokładnie omawiam wizję z klientem, klarownie przedstawiam wycenę oraz planuję każdy etap produkcji.`,
  subtitle: "Oferuję:",
  points: [
    {
      title: "Reklamy i\u00A0filmy promocyjne",
      icon: RiAdvertisementLine,
    },
    {
      title: "Teledyski i\u00A0filmy artystyczne",
      icon: MdOutlineMusicVideo,
    },
    {
      title: "Dokumenty i\u00A0reportaże",
      icon: PiFilmReel,
    },
    {
      title: "Filmy okolicznościowe",
      subtitle: "(śluby, studniówki, eventy)",
      icon: IoIosPeople,
    },
    {
      title: "Montaż na zamówienie",
      icon: PiFilmStrip,
    },
    {
      title: "Konsultacje i\u00A0doradztwo",
      subtitle: "(w zakresie wideomarketingu)",
      icon: PiVideoConference,
    },
  ],
};

// const projects = [
//   {
//     title: "Nowoczesne Technologie – Filmy AI i Social Media",
//     content: `Przecieram szlaki w dziedzinie filmowej sztucznej inteligencji (AI) – stworzyłem m.in. teledysk do utworu "SpaceX"
//     rapera Anatoma, całkowicie wygenerowany przez AI, a także animowane bajki dla dzieci.
//     Dzięki doświadczeniu w wideomarketingu pomagam twórcom i markom budować skuteczną obecność w mediach społecznościowych.
//     Współpracowałem m.in. z Nesterem, Anatomem i 7KaPe7, wspierając ich kampanie oraz rozwój profili.`,
//   },
//   {
//     title: "Społeczna Misja i Współpraca z Fundacjami",
//     content: `Film ma siłę zmieniania rzeczywistości – dlatego współpracowałem z wieloma fundacjami, m.in. z Fundacją Pogranicze Bez Barier,
//     pionierem w aktywizacji osób z niepełnosprawnościami, szczególnie osób niewidomych.
//     Tworzyłem dla nich filmy promocyjne i dokumentalne, w tym poruszający dokument "Dlaczego niewidomi chodzą po górach", który do dziś inspiruje widzów.
//     Znam się na dostosowywaniu projektów dla osób z niepełnosprawnościami i dbam o to, by każdy film był dostępny i angażujący.`,
//   },
// ];

const projects = {
  title: "Projekty",
  tagline: "Kreatywność, unikalność, pasja",
  points: [
    {
      title: "Moje teledyski",
      url: "https://www.youtube.com/playlist?list=PLkfssrvUdpOBcs7FBt0SBLyMlKGpO-WKc",
      bgImg: projectMusic,
    },
    {
      title: "Moje dokumenty",
      url: "https://www.youtube.com/playlist?list=PLkfssrvUdpOAeTzPwp1PDMjgr-kWdqxBC",
      bgImg: projectDocument,
    },
    {
      title: "Moje filmy fabularne",
      url: "https://www.youtube.com/watch?v=Mhx2DDlrdwo",
      bgImg: projectPlot,
    },
    {
      title: "Moje reklamy",
      url: "https://www.youtube.com/playlist?list=PLkfssrvUdpOCEdBRUplg3MYM03TJfOqub",
      bgImg: projectAd,
    },
  ],
};

const contact = {
  title: "Kontakt",
  tagline: "Porozmawiajmy o Twojej wizji",
};

export { aboutMe, experience, offer, projects, hero, contact };
