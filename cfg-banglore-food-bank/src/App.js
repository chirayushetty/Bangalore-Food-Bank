import './App.css';
import Header from './Components/Header'
import Footer from './Components/Footer'
import Campaign from './Components/Campaign'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NGOFeeding } from './Components/NGOFeeding';
import { BreakfastFeeding } from './Components/BreakfastFeeding'
import { FoodRelief } from './Components/FoodRelief'
import { FoodRescue } from './Components/FoodRescue'
import { PastAchievements } from './Components/PastAchievements'
import { Payment } from './Components/Payment'
import { Transaction } from './Components/Transaction'
import { Submit} from './Components/Submit'

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={

            <Campaign />

          } />
          <Route path="/NGOFeeding" element={

            <NGOFeeding />
          } />
          <Route path="/BreakfastFeeding" element={

            <BreakfastFeeding />
          } />
          <Route path="/FoodRelief" element={

            <FoodRelief />
          } />
          <Route path="/FoodRescue" element={

            <FoodRescue />
          } />

          <Route path="/PastAchievements" element={

            <PastAchievements />
          } />

          <Route path="/Payment" element={

            <Payment />
          } />

          <Route path="/Transaction" element={

          <Transaction />
          } />
          <Route path="/Submit" element={

          <Submit />
          } />
        </Routes>
        <Footer />
      </Router>

    </>
  );
}

export default App;
