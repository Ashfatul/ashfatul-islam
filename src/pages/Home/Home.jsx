import About from "../../components/About/About";
import Intro from "../../components/Intro/Intro";
import Projects from "../../components/Projects/Projects";
import Skills from "../../components/Skills/Skills";

export default function Home() {
   return (
      <>
         <Intro />
         <About />
         <Skills />
         <Projects title="Most Recent Projects" showmore={true} limit={3} />
      </>
   );
}
