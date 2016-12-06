/**
 * Hello world service return a message from server
 */
export class HelloWorldService {

  /**
   * Return a message from server
   *
   * @return message from server
   */
  async getMessage(): Promise<string> {
    return "Hello World!";
  }
}