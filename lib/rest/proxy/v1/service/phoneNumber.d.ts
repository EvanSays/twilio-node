/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../base/Page');
import Response = require('../../../../http/response');
import V1 = require('../../V1');
import { ListEachOptions, ListOptions, PageOptions } from '../../../../interfaces';
import { SerializableClass } from '../../../../interfaces';

/**
 * @description Initialize the PhoneNumberList
 * PLEASE NOTE that this class contains beta products that are subject to change. Use them with caution.
 *
 * @param version - Version of the resource
 * @param serviceSid - Service Sid.
 */
declare function PhoneNumberList(version: V1, serviceSid: string): PhoneNumberListInstance;

interface PhoneNumberResource {
  account_sid: string;
  capabilities: string;
  date_created: Date;
  date_updated: Date;
  friendly_name: string;
  iso_country: string;
  phone_number: string;
  service_sid: string;
  sid: string;
  url: string;
}

interface PhoneNumberPayload extends PhoneNumberResource, Page.TwilioResponsePayload {
}

interface PhoneNumberSolution {
  serviceSid?: string;
}

interface PhoneNumberListInstance {
  /**
   * @param sid - sid of instance
   */
  PhoneNumberListInstance(sid: string);
  /**
   * create a PhoneNumberInstance
   *
   * @function create
   * @memberof Twilio.Proxy.V1.ServiceContext.PhoneNumberList
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle processed record
   */
  create(opts?: object, callback?: function);
  /**
   * Streams PhoneNumberInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function each
   * @memberof Twilio.Proxy.V1.ServiceContext.PhoneNumberList
   * @instance
   *
   * @param opts - ...
   * @param callback - Function to process each record
   */
  each(opts?: object, callback?: Function);
  /**
   * Constructs a phone_number
   *
   * @function get
   * @memberof Twilio.Proxy.V1.ServiceContext.PhoneNumberList
   * @instance
   *
   * @param sid - A string that uniquely identifies this Phone Number.
   */
  get(sid: string);
  /**
   * Retrieve a single target page of PhoneNumberInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function getPage
   * @memberof Twilio.Proxy.V1.ServiceContext.PhoneNumberList
   * @instance
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: function);
  /**
   * @description Lists PhoneNumberInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function list
   * @memberof Twilio.Proxy.V1.ServiceContext.PhoneNumberList
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle list of records
   */
  list(opts?: object, callback?: function);
  /**
   * Retrieve a single page of PhoneNumberInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function page
   * @memberof Twilio.Proxy.V1.ServiceContext.PhoneNumberList
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle list of records
   */
  page(opts?: object, callback?: function);
}


declare class PhoneNumberPage extends Page {
  /**
   * @constructor Twilio.Proxy.V1.ServiceContext.PhoneNumberPage
   * @augments Page
   * @description Initialize the PhoneNumberPage
   * PLEASE NOTE that this class contains beta products that are subject to change. Use them with caution.
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: Twilio.Proxy.V1, response: Response<string>, solution: object);

  /**
   * Build an instance of PhoneNumberInstance
   *
   * @function getInstance
   * @memberof Twilio.Proxy.V1.ServiceContext.PhoneNumberPage
   * @instance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: object);
}


declare class PhoneNumberInstance {
  /**
   * @constructor Twilio.Proxy.V1.ServiceContext.PhoneNumberInstance
   * @description Initialize the PhoneNumberContext
   * PLEASE NOTE that this class contains beta products that are subject to change. Use them with caution.
   *
   * @property sid - A string that uniquely identifies this Phone Number.
   * @property accountSid - Account Sid.
   * @property serviceSid - Service Sid.
   * @property dateCreated - The date this Phone Number was added to the service
   * @property dateUpdated - The date this Phone Number was updated
   * @property phoneNumber - The phone number.
   * @property friendlyName - A human-readable description of this resource.
   * @property isoCountry - ISO Country Code,
   * @property capabilities - A list of capabilities.
   * @property url - The URL of this resource.
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param serviceSid - Service Sid.
   * @param sid - A string that uniquely identifies this Phone Number.
   */
  constructor(version: Twilio.Proxy.V1, payload: object, serviceSid: sid, sid: sid);

  _proxy?: PhoneNumberContext;
  /**
   * fetch a PhoneNumberInstance
   *
   * @function fetch
   * @memberof Twilio.Proxy.V1.ServiceContext.PhoneNumberInstance
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * remove a PhoneNumberInstance
   *
   * @function remove
   * @memberof Twilio.Proxy.V1.ServiceContext.PhoneNumberInstance
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: function);
  /**
   * Produce a plain JSON object version of the PhoneNumberInstance for serialization.
   * Removes any circular references in the object.
   *
   * @function toJSON
   * @memberof Twilio.Proxy.V1.ServiceContext.PhoneNumberInstance
   * @instance
   */
  toJSON();
}


declare class PhoneNumberContext {
  /**
   * @constructor Twilio.Proxy.V1.ServiceContext.PhoneNumberContext
   * @description Initialize the PhoneNumberContext
   * PLEASE NOTE that this class contains beta products that are subject to change. Use them with caution.
   *
   * @param version - Version of the resource
   * @param serviceSid - Service Sid.
   * @param sid - A string that uniquely identifies this Phone Number.
   */
  constructor(version: Twilio.Proxy.V1, serviceSid: sid, sid: sid);

  /**
   * fetch a PhoneNumberInstance
   *
   * @function fetch
   * @memberof Twilio.Proxy.V1.ServiceContext.PhoneNumberContext
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * remove a PhoneNumberInstance
   *
   * @function remove
   * @memberof Twilio.Proxy.V1.ServiceContext.PhoneNumberContext
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: function);
}

export { PhoneNumberContext, PhoneNumberInstance, PhoneNumberList, PhoneNumberListInstance, PhoneNumberPage, PhoneNumberPayload, PhoneNumberResource, PhoneNumberSolution }
