import Navbar from "./components/Navbar/Navbar";
import Home from "./screens/Home/Home";
import GlobalStyle from './styles/globalStyles';

const App = () => {
  return (
    <div className="App">
      <GlobalStyle />
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
