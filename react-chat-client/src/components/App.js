import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

import ChatPage from "./ChatPage";
import WelcomePage from "./WelcomePage";

const App = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={WelcomePage} />
      <Route path="/chat" component={ChatPage} />
      <Redirect to="/" />
    </Switch>
  </Router>
);

// class App extends React.Component {
//   render() {
//     const { classes } = this.props;

//     return (
//       <div className={classes.root}>
//         <ChatHeader />
//         <Sidebar chats={chats} />
//         <Chat messages={messages} />
//       </div>
//     );
//   }
// }

export default App;
