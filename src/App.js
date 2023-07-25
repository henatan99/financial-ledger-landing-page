import './App.css';
import BlogPost from './components/BlogPost';
import BusinessCases from './components/BusinessCases';
import Header from './components/Header';
import ProfessionalTeam from './components/ProfessionalTeam';
import Solutions from './components/Solutions';

function App() {
  return (
    <div className="App">
      <Header />
      <Solutions />
      <BusinessCases />
      <BlogPost />
      <ProfessionalTeam />
    </div>
  );
}

export default App;
