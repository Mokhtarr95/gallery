import ImagesList from "./Components/ImagesList/ImagesList";
import Navbar from "./Components/Navbar/Navbar";
import Food from "./Components/Categories/Food";
import Wedding from "./Components/Categories/Wedding";
import Fashion from "./Components/Categories/Fashion";
import Portrait from "./Components/Categories/Portrait";
import Nature from "./Components/Categories/Nature";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={ImagesList} />
          <Route path="/food" component={Food} />
          <Route path="/wedding" component={Wedding} />
          <Route path="/fashion" component={Fashion} />
          <Route path="/portrait" component={Portrait} />
          <Route path="/nature" component={Nature} />

          <ImagesList />
        </Switch>
      </Router>
    </>
  );
}

export default App;
