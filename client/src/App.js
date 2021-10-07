import logo from "./logo.svg";
import {Link , Switch, Route} from 'react-router-dom'
import "./App.css";
import ListPosts from "./Posts/ListPosts";
import Graph from "./Posts/Graph";

function App() {
  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <a href="/posts" className="navbar-brand">
          bezKoder
        </a>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/posts"} className="nav-link">
              posts
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/add"} className="nav-link">
              Add
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/chart"} className="nav-link">
              ChartJS
            </Link>
          </li>
        </div>
      </nav>

      <div className="container mt-3">
        <Switch>
          <Route exact path={["/", "/posts"]} component={ListPosts} />
          <Route exact path="/chart" component={Graph} />
          {/* <Route exact path="/add" component={AddPost} /> */}
          {/* <Route path="/posts/:id" component={AddPost} /> */}
        </Switch>
      </div>
    </div>
  );
}

export default App;
