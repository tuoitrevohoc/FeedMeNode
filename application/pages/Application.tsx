import * as React from "react";
import {HelloWorldService} from "../services/HelloWorldService";

/**
 * State of Application Component
 */
interface ApplicationState {
  message?: string;
}

/**
 * The application component
 */
export class Application
  extends React.Component<{}, ApplicationState> {

  /**
   * hello world service
   */
  service = new HelloWorldService();

  /**
   * initial state
   */
  state = {
    message: "hello"
  };

  /**
   * component will mount
   */
  async loadData() {
    try {
      const message = await this.service.getMessage();
      this.setState({message});
    } catch (error) {
      this.setState({message: error});
    }
  }

  /**
   * render the message
   */
  render() {
    return (
      <div>
        <h1>Application</h1>
        <div>{this.state.message}</div>
      </div>
    );
  }
}