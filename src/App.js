import './App.css';
import LandingPage from './Components/LandingPage';
import Section1 from './Components/Section1';
import Section2 from './Components/Section2';
import Section3 from './Components/Section3';
import Section4 from './Components/Section4';
import Section5 from './Components/Section5';
import Footer from './SmallerComponents/Footer';


function App() {
  return (
    <>
    <div className=''>
      <LandingPage/>
    </div>

    <div>
      <Section1/>
    </div>

    <div>
      <Section2/>
    </div>

    <div>
      <Section3/>
    </div>

    <div className='bg-[#F5FCFF]'>
      <Section4/>
    </div>

    <div>
      <Section5/>
    </div>

    <div className='bg-[#F5FCFF]'>
      <Footer/>
    </div>
    
    </>
  );
}

export default App;
