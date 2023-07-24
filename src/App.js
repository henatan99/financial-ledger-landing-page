import './App.css';
import BlogPost from './components/BlogPost';
import BusinessCases from './components/BusinessCases';
import Header from './components/Header';
import Solutions from './components/Solutions';

function App() {
  return (
    <div className="App">
      <Header />
      <Solutions />
      <BusinessCases />
      <BlogPost />
    </div>
  );
}

export default App;
