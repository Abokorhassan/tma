import React, { Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Layout from "./components/layouts";
import routes from "./routes";

function withLayout(WrappedComponent) {
  // ...and returns another component...
  return class extends React.Component {
    render() {
      return (
        <Layout>
          <WrappedComponent></WrappedComponent>
        </Layout>
      );
    }
  };
}

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading... </div>}>
        <Switch>
          {routes.map((route, idx) => {
            console.log("-----", idx, ": ", route);
            return (
              <Route
                path={route.path}
                exact
                component={withLayout(route.component)}
                // access={route.access}
                key={idx}
              />
            );
          })}
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
