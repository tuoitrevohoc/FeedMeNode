import {AppModel} from "./AppModel";
/**
 * the interface for user data
 */
export interface User extends AppModel {

  /**
   * name of the user
   */
  name: string;

  /**
   * email of user
   */
  email: string;

  /**
   * avatar of user
   */
  avatar?: string;
}
