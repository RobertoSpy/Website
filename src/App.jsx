import { BrowserRouter } from "react-router-dom";

import { About, Contact, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'> 
          <Navbar />  
          <Hero /> 
        <About />   
        <Tech />
        <Works/>
        <Feedbacks /> 
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas/>  
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App;