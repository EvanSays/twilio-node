/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../base/Page');
import V2010 = require('../../V2010');
import deserialize = require('../../../../base/deserialize');
import values = require('../../../../base/values');

/**
 * @constructor Twilio.Api.V2010.AccountContext.KeyList
 * @description Initialize the KeyList
 *
 * @param version - Version of the resource
 * @param accountSid - A 34 character string that uniquely identifies this resource.
 */
declare function KeyList(version: V2010, accountSid: string): KeyListInstance;

/**
 * Options to pass to update
 *
 * @property friendlyName - A descriptive string for this resource, chosen by your application, up to 64 characters long.
 */
export interface UpdateOptions {
  friendlyName?: string;
}

/**
 * Options to pass to update
 *
 * @property friendlyName - A descriptive string for this resource, chosen by your application, up to 64 characters long.
 */
export interface UpdateOptions {
  friendlyName?: string;
}


declare class KeyPage extends Page {
  /**
   * @constructor Twilio.Api.V2010.AccountContext.KeyPage
   * @augments Page
   * @description Initialize the KeyPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: Twilio.Api.V2010, response: object, solution: object);

  /**
   * Build an instance of KeyInstance
   *
   * @function getInstance
   * @memberof Twilio.Api.V2010.AccountContext.KeyPage
   * @instance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: object);
}


declare class KeyInstance {
  /**
   * @constructor Twilio.Api.V2010.AccountContext.KeyInstance
   * @description Initialize the KeyContext
   *
   * @property sid - A 34 character string that uniquely identifies this API Key.
   * @property friendlyName - A descriptive string for this resource, chosen by your application, up to 64 characters long.
   * @property dateCreated - The date-time this API Key was created, given as a RFC 2822 Timestamp.
   * @property dateUpdated - The date-time this API Key was most recently updated, given as a  RFC 2822 Timestamp.
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param accountSid - A 34 character string that uniquely identifies this resource.
   * @param sid - The sid
   */
  constructor(version: Twilio.Api.V2010, payload: object, accountSid: sid, sid: sid);

  _proxy?: KeyContext;
  /**
   * fetch a KeyInstance
   *
   * @function fetch
   * @memberof Twilio.Api.V2010.AccountContext.KeyInstance
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * remove a KeyInstance
   *
   * @function remove
   * @memberof Twilio.Api.V2010.AccountContext.KeyInstance
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: function);
  /**
   * Produce a plain JSON object version of the KeyInstance for serialization.
   * Removes any circular references in the object.
   *
   * @function toJSON
   * @memberof Twilio.Api.V2010.AccountContext.KeyInstance
   * @instance
   */
  toJSON();
  /**
   * update a KeyInstance
   *
   * @function update
   * @memberof Twilio.Api.V2010.AccountContext.KeyInstance
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle processed record
   */
  update(opts?: object, callback?: function);
}


declare class KeyContext {
  /**
   * @constructor Twilio.Api.V2010.AccountContext.KeyContext
   * @description Initialize the KeyContext
   *
   * @param version - Version of the resource
   * @param accountSid - The account_sid
   * @param sid - The sid
   */
  constructor(version: Twilio.Api.V2010, accountSid: sid, sid: sid);

  /**
   * fetch a KeyInstance
   *
   * @function fetch
   * @memberof Twilio.Api.V2010.AccountContext.KeyContext
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * remove a KeyInstance
   *
   * @function remove
   * @memberof Twilio.Api.V2010.AccountContext.KeyContext
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: function);
  /**
   * update a KeyInstance
   *
   * @function update
   * @memberof Twilio.Api.V2010.AccountContext.KeyContext
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle processed record
   */
  update(opts?: object, callback?: function);
}

export { KeyContext, KeyInstance, KeyList, KeyPage }