/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../../base/Page');
import V1 = require('../../../V1');
import deserialize = require('../../../../../base/deserialize');
import serialize = require('../../../../../base/serialize');
import values = require('../../../../../base/values');

/**
 * @constructor Twilio.Notify.V1.ServiceContext.UserContext.UserBindingList
 * @description Initialize the UserBindingList
 * PLEASE NOTE that this class contains beta products that are subject to change. Use them with caution.
 *
 * @param version - Version of the resource
 * @param serviceSid - The service_sid
 * @param identity - The identity
 */
declare function UserBindingList(version: V1, serviceSid: string, identity: string): UserBindingListInstance;


declare class UserBindingPage extends Page {
  /**
   * @constructor Twilio.Notify.V1.ServiceContext.UserContext.UserBindingPage
   * @augments Page
   * @description Initialize the UserBindingPage
   * PLEASE NOTE that this class contains beta products that are subject to change. Use them with caution.
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: Twilio.Notify.V1, response: object, solution: object);

  /**
   * Build an instance of UserBindingInstance
   *
   * @function getInstance
   * @memberof Twilio.Notify.V1.ServiceContext.UserContext.UserBindingPage
   * @instance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: object);
}


declare class UserBindingInstance {
  /**
   * @constructor Twilio.Notify.V1.ServiceContext.UserContext.UserBindingInstance
   * @description Initialize the UserBindingContext
   * PLEASE NOTE that this class contains beta products that are subject to change. Use them with caution.
   *
   * @property sid - The sid
   * @property accountSid - The account_sid
   * @property serviceSid - The service_sid
   * @property credentialSid - The credential_sid
   * @property dateCreated - The date_created
   * @property dateUpdated - The date_updated
   * @property notificationProtocolVersion - The notification_protocol_version
   * @property endpoint - The endpoint
   * @property identity - The identity
   * @property bindingType - The binding_type
   * @property address - The address
   * @property tags - The tags
   * @property url - The url
   * @property links - The links
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param serviceSid - The service_sid
   * @param identity - The identity
   * @param sid - The sid
   */
  constructor(version: Twilio.Notify.V1, payload: object, serviceSid: sid, identity: string, sid: sid);

  _proxy?: UserBindingContext;
  /**
   * fetch a UserBindingInstance
   *
   * @function fetch
   * @memberof Twilio.Notify.V1.ServiceContext.UserContext.UserBindingInstance
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * remove a UserBindingInstance
   *
   * @function remove
   * @memberof Twilio.Notify.V1.ServiceContext.UserContext.UserBindingInstance
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: function);
  /**
   * Produce a plain JSON object version of the UserBindingInstance for serialization.
   * Removes any circular references in the object.
   *
   * @function toJSON
   * @memberof Twilio.Notify.V1.ServiceContext.UserContext.UserBindingInstance
   * @instance
   */
  toJSON();
}


declare class UserBindingContext {
  /**
   * @constructor Twilio.Notify.V1.ServiceContext.UserContext.UserBindingContext
   * @description Initialize the UserBindingContext
   * PLEASE NOTE that this class contains beta products that are subject to change. Use them with caution.
   *
   * @param version - Version of the resource
   * @param serviceSid - The service_sid
   * @param identity - The identity
   * @param sid - The sid
   */
  constructor(version: Twilio.Notify.V1, serviceSid: sid, identity: sid_like, sid: sid);

  /**
   * fetch a UserBindingInstance
   *
   * @function fetch
   * @memberof Twilio.Notify.V1.ServiceContext.UserContext.UserBindingContext
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * remove a UserBindingInstance
   *
   * @function remove
   * @memberof Twilio.Notify.V1.ServiceContext.UserContext.UserBindingContext
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: function);
}

export { UserBindingContext, UserBindingInstance, UserBindingList, UserBindingPage }