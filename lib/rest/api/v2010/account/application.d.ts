/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../base/Page');
import Response = require('../../../../http/response');
import V2010 = require('../../V2010');
import serialize = require('../../../../base/serialize');
import { ListEachOptions, ListOptions, PageOptions } from '../../../../interfaces';
import { SerializableClass } from '../../../../interfaces';

/**
 * @description Initialize the ApplicationList
 *
 * @param version - Version of the resource
 * @param accountSid - A string that uniquely identifies this resource
 */
declare function ApplicationList(version: V2010, accountSid: string): ApplicationListInstance;

interface ApplicationResource {
  account_sid: string;
  api_version: string;
  date_created: Date;
  date_updated: Date;
  friendly_name: string;
  message_status_callback: string;
  sid: string;
  sms_fallback_method: string;
  sms_fallback_url: string;
  sms_method: string;
  sms_status_callback: string;
  sms_url: string;
  status_callback: string;
  status_callback_method: string;
  uri: string;
  voice_caller_id_lookup: boolean;
  voice_fallback_method: string;
  voice_fallback_url: string;
  voice_method: string;
  voice_url: string;
}

interface ApplicationPayload extends ApplicationResource, Page.TwilioResponsePayload {
}

interface ApplicationSolution {
  accountSid?: string;
}

interface ApplicationListInstance {
  /**
   * @param sid - sid of instance
   */
  ApplicationListInstance(sid: string);
  /**
   * create a ApplicationInstance
   *
   * @function create
   * @memberof Twilio.Api.V2010.AccountContext.ApplicationList
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle processed record
   */
  create(opts: object, callback?: function);
  /**
   * Streams ApplicationInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function each
   * @memberof Twilio.Api.V2010.AccountContext.ApplicationList
   * @instance
   *
   * @param opts - ...
   * @param callback - Function to process each record
   */
  each(opts?: object, callback?: Function);
  /**
   * Constructs a application
   *
   * @function get
   * @memberof Twilio.Api.V2010.AccountContext.ApplicationList
   * @instance
   *
   * @param sid - Fetch by unique Application Sid
   */
  get(sid: string);
  /**
   * Retrieve a single target page of ApplicationInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function getPage
   * @memberof Twilio.Api.V2010.AccountContext.ApplicationList
   * @instance
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: function);
  /**
   * @description Lists ApplicationInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function list
   * @memberof Twilio.Api.V2010.AccountContext.ApplicationList
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle list of records
   */
  list(opts?: object, callback?: function);
  /**
   * Retrieve a single page of ApplicationInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function page
   * @memberof Twilio.Api.V2010.AccountContext.ApplicationList
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle list of records
   */
  page(opts?: object, callback?: function);
}

/**
 * Options to pass to update
 *
 * @property friendlyName - Human readable description of this resource
 * @property apiVersion - The API version to use
 * @property voiceUrl - URL Twilio will make requests to when relieving a call
 * @property voiceMethod - HTTP method to use with the URL
 * @property voiceFallbackUrl - Fallback URL
 * @property voiceFallbackMethod - HTTP method to use with the fallback url
 * @property statusCallback - URL to hit with status updates
 * @property statusCallbackMethod - HTTP method to use with the status callback
 * @property voiceCallerIdLookup - True or False
 * @property smsUrl - URL Twilio will request when receiving an SMS
 * @property smsMethod - HTTP method to use with sms_url
 * @property smsFallbackUrl - Fallback URL if there's an error parsing TwiML
 * @property smsFallbackMethod - HTTP method to use with sms_fallback_method
 * @property smsStatusCallback - URL Twilio with request with status updates
 * @property messageStatusCallback - URL to make requests to with status updates
 */
export interface UpdateOptions {
  apiVersion?: string;
  friendlyName?: string;
  messageStatusCallback?: string;
  smsFallbackMethod?: string;
  smsFallbackUrl?: string;
  smsMethod?: string;
  smsStatusCallback?: string;
  smsUrl?: string;
  statusCallback?: string;
  statusCallbackMethod?: string;
  voiceCallerIdLookup?: boolean;
  voiceFallbackMethod?: string;
  voiceFallbackUrl?: string;
  voiceMethod?: string;
  voiceUrl?: string;
}

/**
 * Options to pass to update
 *
 * @property friendlyName - Human readable description of this resource
 * @property apiVersion - The API version to use
 * @property voiceUrl - URL Twilio will make requests to when relieving a call
 * @property voiceMethod - HTTP method to use with the URL
 * @property voiceFallbackUrl - Fallback URL
 * @property voiceFallbackMethod - HTTP method to use with the fallback url
 * @property statusCallback - URL to hit with status updates
 * @property statusCallbackMethod - HTTP method to use with the status callback
 * @property voiceCallerIdLookup - True or False
 * @property smsUrl - URL Twilio will request when receiving an SMS
 * @property smsMethod - HTTP method to use with sms_url
 * @property smsFallbackUrl - Fallback URL if there's an error parsing TwiML
 * @property smsFallbackMethod - HTTP method to use with sms_fallback_method
 * @property smsStatusCallback - URL Twilio with request with status updates
 * @property messageStatusCallback - URL to make requests to with status updates
 */
export interface UpdateOptions {
  apiVersion?: string;
  friendlyName?: string;
  messageStatusCallback?: string;
  smsFallbackMethod?: string;
  smsFallbackUrl?: string;
  smsMethod?: string;
  smsStatusCallback?: string;
  smsUrl?: string;
  statusCallback?: string;
  statusCallbackMethod?: string;
  voiceCallerIdLookup?: boolean;
  voiceFallbackMethod?: string;
  voiceFallbackUrl?: string;
  voiceMethod?: string;
  voiceUrl?: string;
}


declare class ApplicationPage extends Page {
  /**
   * @constructor Twilio.Api.V2010.AccountContext.ApplicationPage
   * @augments Page
   * @description Initialize the ApplicationPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: Twilio.Api.V2010, response: Response<string>, solution: object);

  /**
   * Build an instance of ApplicationInstance
   *
   * @function getInstance
   * @memberof Twilio.Api.V2010.AccountContext.ApplicationPage
   * @instance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: object);
}


declare class ApplicationInstance {
  /**
   * @constructor Twilio.Api.V2010.AccountContext.ApplicationInstance
   * @description Initialize the ApplicationContext
   *
   * @property accountSid - A string that uniquely identifies this resource
   * @property apiVersion - The API version to use
   * @property dateCreated - Date this resource was created
   * @property dateUpdated - Date this resource was last updated
   * @property friendlyName - Human readable description of this resource
   * @property messageStatusCallback - URL to make requests to with status updates
   * @property sid - A string that uniquely identifies this resource
   * @property smsFallbackMethod - HTTP method to use with sms_fallback_method
   * @property smsFallbackUrl - Fallback URL if there's an error parsing TwiML
   * @property smsMethod - HTTP method to use with sms_url
   * @property smsStatusCallback - URL Twilio with request with status updates
   * @property smsUrl - URL Twilio will request when receiving an SMS
   * @property statusCallback - URL to hit with status updates
   * @property statusCallbackMethod - HTTP method to use with the status callback
   * @property uri - URI for this resource
   * @property voiceCallerIdLookup - True or False
   * @property voiceFallbackMethod - HTTP method to use with the fallback url
   * @property voiceFallbackUrl - Fallback URL
   * @property voiceMethod - HTTP method to use with the URL
   * @property voiceUrl - URL Twilio will make requests to when relieving a call
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param accountSid - A string that uniquely identifies this resource
   * @param sid - Fetch by unique Application Sid
   */
  constructor(version: Twilio.Api.V2010, payload: object, accountSid: sid, sid: sid);

  _proxy?: ApplicationContext;
  /**
   * fetch a ApplicationInstance
   *
   * @function fetch
   * @memberof Twilio.Api.V2010.AccountContext.ApplicationInstance
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * remove a ApplicationInstance
   *
   * @function remove
   * @memberof Twilio.Api.V2010.AccountContext.ApplicationInstance
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: function);
  /**
   * Produce a plain JSON object version of the ApplicationInstance for serialization.
   * Removes any circular references in the object.
   *
   * @function toJSON
   * @memberof Twilio.Api.V2010.AccountContext.ApplicationInstance
   * @instance
   */
  toJSON();
  /**
   * update a ApplicationInstance
   *
   * @function update
   * @memberof Twilio.Api.V2010.AccountContext.ApplicationInstance
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle processed record
   */
  update(opts?: object, callback?: function);
}


declare class ApplicationContext {
  /**
   * @constructor Twilio.Api.V2010.AccountContext.ApplicationContext
   * @description Initialize the ApplicationContext
   *
   * @param version - Version of the resource
   * @param accountSid - The account_sid
   * @param sid - Fetch by unique Application Sid
   */
  constructor(version: Twilio.Api.V2010, accountSid: sid, sid: sid);

  /**
   * fetch a ApplicationInstance
   *
   * @function fetch
   * @memberof Twilio.Api.V2010.AccountContext.ApplicationContext
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * remove a ApplicationInstance
   *
   * @function remove
   * @memberof Twilio.Api.V2010.AccountContext.ApplicationContext
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: function);
  /**
   * update a ApplicationInstance
   *
   * @function update
   * @memberof Twilio.Api.V2010.AccountContext.ApplicationContext
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle processed record
   */
  update(opts?: object, callback?: function);
}

export { ApplicationContext, ApplicationInstance, ApplicationList, ApplicationListInstance, ApplicationPage, ApplicationPayload, ApplicationResource, ApplicationSolution }
