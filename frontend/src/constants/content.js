import { IoIosPeople } from "react-icons/io";
import { MdOutlineMusicVideo } from "react-icons/md";
import { PiFilmReel, PiFilmStrip, PiVideoConference } from "react-icons/pi";
import { RiAdvertisementLine } from "react-icons/ri";
import {
  projectAd,
  projectDocument,
  projectMusic,
  projectPlot,
} from "@assets/index";

const HERO = {
  title: "Paweł Kanik",
  content: `Jestem filmowcem z pasji – odkąd pamiętam, tworzenie obrazów było moim sposobem na opowiadanie historii.`,
};

const ABOUT_ME = {
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

const EXPERIENCE = {
  title: "Doświadczenie i Pasja",
  content: `Przez lata byłem harcerzem, a dziś jestem instruktorem ZHR w stopniu podharcmistrza. 
  Prowadziłem drużynę oraz sekcję filmową, której film "Chata" zdobył pierwsze miejsce w ogólnopolskim harcerskim festiwalu filmowym. 
  To nauczyło mnie nie tylko organizacji pracy, ale i podejścia do projektów z ideą oraz zaangażowaniem. 
  Dla mnie film to coś więcej niż obraz i dźwięk – to emocje, które zostają z widzem na długo.`,
  quote: `„Niektóre filmy są kawałkiem życia, moje są kawałkiem ciasta.” – Alfred Hitchcock.`,
};

const OFFER = {
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

const PROJECTS = {
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

const CONTACT = {
  title: "Kontakt",
  tagline: "Porozmawiajmy o Twojej wizji",
};

const COMMENTS = {
  title: "Komentarze",
  tagline: "Podziel się swoją opinią",
};

export { ABOUT_ME, COMMENTS, CONTACT, EXPERIENCE, HERO, OFFER, PROJECTS };
