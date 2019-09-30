import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Purchase from "./pages/Purchase";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/cart" component={Cart} />
      <Routes path="/purchase" component={Purchase} />
    </Switch>
  );
}
