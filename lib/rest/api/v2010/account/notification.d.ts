/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../base/Page');
import V2010 = require('../../V2010');
import deserialize = require('../../../../base/deserialize');
import serialize = require('../../../../base/serialize');
import values = require('../../../../base/values');

/**
 * @constructor Twilio.Api.V2010.AccountContext.NotificationList
 * @description Initialize the NotificationList
 *
 * @param version - Version of the resource
 * @param accountSid - The unique sid that identifies this account
 */
declare function NotificationList(version: V2010, accountSid: string): NotificationListInstance;


declare class NotificationPage extends Page {
  /**
   * @constructor Twilio.Api.V2010.AccountContext.NotificationPage
   * @augments Page
   * @description Initialize the NotificationPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: Twilio.Api.V2010, response: object, solution: object);

  /**
   * Build an instance of NotificationInstance
   *
   * @function getInstance
   * @memberof Twilio.Api.V2010.AccountContext.NotificationPage
   * @instance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: object);
}


declare class NotificationInstance {
  /**
   * @constructor Twilio.Api.V2010.AccountContext.NotificationInstance
   * @description Initialize the NotificationContext
   *
   * @property accountSid - The unique sid that identifies this account
   * @property apiVersion - The version of the Twilio API in use
   * @property callSid - The string that uniquely identifies the call
   * @property dateCreated - The date this resource was created
   * @property dateUpdated - The date this resource was last updated
   * @property errorCode - A unique error code corresponding to the notification
   * @property log - An integer log level
   * @property messageDate - The date the notification was generated
   * @property messageText - The text of the notification.
   * @property moreInfo - A URL for more information about the error code
   * @property requestMethod - HTTP method used with the request url
   * @property requestUrl - URL of the resource that generated the notification
   * @property requestVariables - Twilio-generated HTTP variables sent to the server
   * @property responseBody - The HTTP body returned by your server.
   * @property responseHeaders - The HTTP headers returned by your server.
   * @property sid - A string that uniquely identifies this notification
   * @property uri - The URI for this resource
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param accountSid - The unique sid that identifies this account
   * @param sid - Fetch by unique notification Sid
   */
  constructor(version: Twilio.Api.V2010, payload: object, accountSid: sid, sid: sid);

  _proxy?: NotificationContext;
  /**
   * fetch a NotificationInstance
   *
   * @function fetch
   * @memberof Twilio.Api.V2010.AccountContext.NotificationInstance
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * remove a NotificationInstance
   *
   * @function remove
   * @memberof Twilio.Api.V2010.AccountContext.NotificationInstance
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: function);
  /**
   * Produce a plain JSON object version of the NotificationInstance for serialization.
   * Removes any circular references in the object.
   *
   * @function toJSON
   * @memberof Twilio.Api.V2010.AccountContext.NotificationInstance
   * @instance
   */
  toJSON();
}


declare class NotificationContext {
  /**
   * @constructor Twilio.Api.V2010.AccountContext.NotificationContext
   * @description Initialize the NotificationContext
   *
   * @param version - Version of the resource
   * @param accountSid - The account_sid
   * @param sid - Fetch by unique notification Sid
   */
  constructor(version: Twilio.Api.V2010, accountSid: sid, sid: sid);

  /**
   * fetch a NotificationInstance
   *
   * @function fetch
   * @memberof Twilio.Api.V2010.AccountContext.NotificationContext
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * remove a NotificationInstance
   *
   * @function remove
   * @memberof Twilio.Api.V2010.AccountContext.NotificationContext
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: function);
}

export { NotificationContext, NotificationInstance, NotificationList, NotificationPage }