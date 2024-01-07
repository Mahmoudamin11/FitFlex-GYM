import NavBar from './components/NavBar';
import FirstScreen from './components/FirstScreen';
import Stats from './components/Stats';
import Features from './components/Features';
import RightChoice from './components/RightChoice';
import OnlineTraining from './components/OnlineTraining';
import ProfessionalTrainers from './components/ProfessionalTrainers';
import Feedback from './components/Feedback';
import Footer from './components/Footer';



const App = () => {
  return (
    <div>
      <NavBar />
      
      <FirstScreen />
      <Stats />
      <Features />
      <RightChoice />
      <OnlineTraining />
      <ProfessionalTrainers />
      <Feedback />
      <Footer />
    </div>
  )
}

export default App