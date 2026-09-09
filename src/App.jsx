
import { 
  Navbar, 
  Hero ,
  About,
  Skills,
  Experience,
  Projects,
  Services,
  Contact,
  Footer,
  PageLoader,
  CustomCursor
} from './components'
import useTheme from "./hooks/useTheme";

function App() {
  
  const [theme, setTheme] = useTheme();

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--text)]">

      <CustomCursor />

      <PageLoader />
      
      <Navbar
        theme={theme}
        setTheme={setTheme}
      />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />        
        <Services />
        <Contact />
      </main>

       <Footer />
    </div>
  );
}

export default App