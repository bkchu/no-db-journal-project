import React, { Component } from "react";
import { withRouter, Switch, Route } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Layout from "./Layout/Layout";
import Posts from "./Posts/Posts";
import Form from "./Form/Form";
import FullPost from "./FullPost/FullPost";
import NotFoundPage from "./NotFoundPage/NotFoundPage";

class App extends Component {
  render() {
    let { location } = this.props;
    const currentKey = location.pathname.split("/")[1] || "/";
    const timeout = { enter: 300, exit: 200 };

    return (
      <Layout>
        <TransitionGroup component="main" className="body">
          <CSSTransition
            key={currentKey}
            timeout={timeout}
            classNames="fade"
            appear
          >
            <section className="body__inner">
              <Switch location={location}>
                <Route path="/" exact component={Posts} />
                <Route path="/journal/(new|edit)" component={Form} />
                <Route path="/journal/:id" component={FullPost} />
                <Route component={NotFoundPage} />
              </Switch>
            </section>
          </CSSTransition>
        </TransitionGroup>
      </Layout>
    );
  }
}

export default withRouter(App);
