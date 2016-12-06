import * as React from "react";
import * as ReactDOM from "react-dom";
import {HelloWorldService} from "./services/HelloWorldService";

/**
 * The state
 */
interface HelloWorldComponentState {

  /**
   * message from server
   */
  message?: string;
}

/**
 * Hello World Component - demonstrate server call
 */
class HelloWorldComponent
  extends React.Component<{}, HelloWorldComponentState> {

  /**
   * the hello world service
   * @type {HelloWorldService}
   */
  service = new HelloWorldService();

  /**
   * initial state
   * @type {{message: string}}
   */
  state: HelloWorldComponentState = {
    message: "Loading..."
  };

  /**
   * invoke server call on component Will Mount
   */
  async componentWillMount() {
    try {

      const message = await this.service.getMessage();
      this.setState({message});

    } catch (error) {
      this.setState({message: `Error: ${error}`});
    }
  }

  /**
   * Render message from server
   * @return {any}
   */
  render() {
    return (
      <div>{this.state.message}</div>
    )
  }
}


ReactDOM.render(
  <HelloWorldComponent />,
  document.querySelector("#root"));