import React, {useState} from 'react';
import Navbar from "./components/Navbar/Navbar";
import Home from "./screens/Home/Home";
import GlobalStyle from './styles/globalStyles';
import { Switch, Route } from 'react-router-dom';
import { AppContainer } from "./styles/styles";

const App = () => {
  const [visible, setVisible] = useState(false);

    const toggleVisible = () => {
      const scrolled = document.documentElement.scrollTop;

      if (scrolled > 300){
        setVisible(true)
      }else{
        setVisible(false)
      }
    }
    window.addEventListener('scroll', toggleVisible)

  return (
    <AppContainer>
      <GlobalStyle />
      <Navbar />
      <Switch>
        <Route exact path='/'>
          <Home visible={visible} />
        </Route>
      </Switch>
    </AppContainer>
  );
}

export default App;
