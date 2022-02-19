// import { Link, Switch, Route, useParams } from "react-router-dom";
// import styles from "./RouterSample.css";

// export default function RouterSample() {
//   // const history = useHistory();
//   const params = useParams();

//   return (
//     <div className={styles.wrapper}>
//       <nav className={styles.navWrapper}>
//         <Link to="/">Home</Link>
//         <Link to="/portfolio/1">portfolio/1</Link>
//         <Link to="/portfolio/2/John">portfolio/2/john</Link>
//       </nav>

//       <Switch>
//         <Route path="/" exact component={Home} />
//         <Route path="/portfolio/:id" exact component={Portfolio} />
//         <Route path="/portfolio/:id/:name" exact component={Portfolio} />
//       </Switch>
//     </div>
//   );
// }

// const Home = () => {
//   const params = useParams();

//   return (
//     <div className={styles.page}>
//       Home Page
//       <div>
//         <pre>params: {JSON.stringify(params)}</pre>
//       </div>
//     </div>
//   );
// };
// const Portfolio = () => {
//   const params = useParams();
//   return (
//     <div className={styles.page}>
//       Portfolio Page
//       <div>
//         <pre>params: {JSON.stringify(params)}</pre>
//       </div>
//     </div>
//   );
// };

import React from "react";
import { Route, Switch } from "react-router";
import { Link } from "react-router-dom";

export const Simple = () => {
  return (
    <Switch>
      <Route path="/lorem">lorem</Route>
      <Route path="/ipsum">ipsum</Route>
      <Route path="/dolor">dolor</Route>
      <Route path="/">
        <h1>Home</h1>
        <ul>
          <li>
            <Link to="/lorem">lorem</Link>
          </li>
          <li>
            <Link to="/ipsum">ipsum</Link>
          </li>
          <li>
            <Link to="/dolor">dolor</Link>
          </li>
        </ul>
      </Route>
    </Switch>
  );
};

export default Simple;
