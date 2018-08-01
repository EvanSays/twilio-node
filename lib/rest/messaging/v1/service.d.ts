/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../base/Page');
import Response = require('../../../http/response');
import V1 = require('../V1');
import serialize = require('../../../base/serialize');
import { AlphaSenderList } from './service/alphaSender';
import { PhoneNumberList } from './service/phoneNumber';
import { SerializableClass } from '../../../interfaces';
import { ShortCodeList } from './service/shortCode';

/**
 * @description Initialize the ServiceList
 * PLEASE NOTE that this class contains beta products that are subject to change. Use them with caution.
 *
 * @param version - Version of the resource
 */
declare function ServiceList(version: V1): ServiceListInstance;

/**
 * Options to pass to update
 *
 * @property friendlyName - The friendly_name
 * @property inboundRequestUrl - The inbound_request_url
 * @property inboundMethod - The inbound_method
 * @property fallbackUrl - The fallback_url
 * @property fallbackMethod - The fallback_method
 * @property statusCallback - The status_callback
 * @property stickySender - The sticky_sender
 * @property mmsConverter - The mms_converter
 * @property smartEncoding - The smart_encoding
 * @property scanMessageContent - The scan_message_content
 * @property fallbackToLongCode - The fallback_to_long_code
 * @property areaCodeGeomatch - The area_code_geomatch
 * @property validityPeriod - The validity_period
 * @property synchronousValidation - The synchronous_validation
 */
interface ServiceInstanceUpdateOptions {
  areaCodeGeomatch?: boolean;
  fallbackMethod?: string;
  fallbackToLongCode?: boolean;
  fallbackUrl?: string;
  friendlyName?: string;
  inboundMethod?: string;
  inboundRequestUrl?: string;
  mmsConverter?: boolean;
  scanMessageContent?: service.scan_message_content;
  smartEncoding?: boolean;
  statusCallback?: string;
  stickySender?: boolean;
  synchronousValidation?: boolean;
  validityPeriod?: number;
}

interface ServiceListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): ServiceContext;
  /**
   * create a ServiceInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  create(opts: ServiceListInstanceCreateOptions, callback?: (error: Error | null, items: ServiceListInstance) => any): Promise<ServiceInstance>;
  /**
   * Streams ServiceInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Function to process each record
   */
  each(opts?: ServiceListInstanceEachOptions, callback?: (item: ServiceInstance, done: (err?: Error) => void) => void): void;
  /**
   * Constructs a service
   *
   * @param sid - The sid
   */
  get(sid: string): ServiceContext;
  /**
   * Retrieve a single target page of ServiceInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: ServicePage) => any): Promise<ServicePage>;
  /**
   * Lists ServiceInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  list(opts?: ServiceListInstanceOptions, callback?: (error: Error | null, items: ServiceInstance[]) => any): Promise<ServiceInstance[]>;
  /**
   * Retrieve a single page of ServiceInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  page(opts?: ServiceListInstancePageOptions, callback?: (error: Error | null, items: ServicePage) => any): Promise<ServicePage>;
}

/**
 * Options to pass to create
 *
 * @property friendlyName - A human readable descriptive text for this resource, up to 64 characters.
 * @property inboundRequestUrl - A webhook request is made to the Inbound Request URL when a message is received by any phone number or shortcode associated to your Messaging Service.
 * @property inboundMethod - The HTTP method used when making requests to the Inbound Request URL.
 * @property fallbackUrl - A request is made to the Fallback URL if an error occurs with retrieving or executing the TwiML from you Inbound Request URL.
 * @property fallbackMethod - The HTTP method used when requesting the Fallback URL.
 * @property statusCallback - A webhook request is made to the Status Callback to pass status updates about your messages.
 * @property stickySender - Configuration to enable or disable Sticky Sender on your Service Instance.
 * @property mmsConverter - Configuration to enable or disable MMS Converter on your Service Instance.
 * @property smartEncoding - Configuration to enable or disable Smart Encoding.
 * @property scanMessageContent - The scan_message_content
 * @property fallbackToLongCode - Configuration to enable or disable Fallback to Long Code.
 * @property areaCodeGeomatch - Configuration to enable or disable Area Code Geomatch.
 * @property validityPeriod - Configuration to set the validity period of all messages sent from your Service, in seconds.
 * @property synchronousValidation - The synchronous_validation
 */
interface ServiceListInstanceCreateOptions {
  areaCodeGeomatch?: boolean;
  fallbackMethod?: string;
  fallbackToLongCode?: boolean;
  fallbackUrl?: string;
  friendlyName: string;
  inboundMethod?: string;
  inboundRequestUrl?: string;
  mmsConverter?: boolean;
  scanMessageContent?: service.scan_message_content;
  smartEncoding?: boolean;
  statusCallback?: string;
  stickySender?: boolean;
  synchronousValidation?: boolean;
  validityPeriod?: number;
}

/**
 * Options to pass to each
 *
 * @property limit -
 *                         Upper limit for the number of records to return.
 *                         each() guarantees never to return more than limit.
 *                         Default is no limit
 * @property pageSize -
 *                         Number of records to fetch per request,
 *                         when not set will use the default value of 50 records.
 *                         If no pageSize is defined but a limit is defined,
 *                         each() will attempt to read the limit with the most efficient
 *                         page size, i.e. min(limit, 1000)
 * @property callback -
 *                         Function to process each record. If this and a positional
 *                         callback are passed, this one will be used
 * @property done - Function to be called upon completion of streaming
 */
interface ServiceListInstanceEachOptions {
  callback?: (item: ServiceInstance, done: (err?: Error) => void) => void;
  done?: Function;
  limit?: number;
  pageSize?: number;
}

/**
 * Options to pass to list
 *
 * @property limit -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 * @property pageSize -
 *                         Number of records to fetch per request,
 *                         when not set will use the default value of 50 records.
 *                         If no page_size is defined but a limit is defined,
 *                         list() will attempt to read the limit with the most
 *                         efficient page size, i.e. min(limit, 1000)
 */
interface ServiceListInstanceOptions {
  limit?: number;
  pageSize?: number;
}

/**
 * Options to pass to page
 *
 * @property pageToken - PageToken provided by the API
 * @property pageNumber - Page Number, this value is simply for client state
 * @property pageSize - Number of records to return, defaults to 50
 */
interface ServiceListInstancePageOptions {
  pageNumber?: number;
  pageSize?: number;
  pageToken?: string;
}

interface ServicePayload extends ServiceResource, Page.TwilioResponsePayload {
}

interface ServiceResource {
  account_sid: string;
  area_code_geomatch: boolean;
  date_created: Date;
  date_updated: Date;
  fallback_method: string;
  fallback_to_long_code: boolean;
  fallback_url: string;
  friendly_name: string;
  inbound_method: string;
  inbound_request_url: string;
  links: string;
  mms_converter: boolean;
  scan_message_content: ServiceScanMessageContent;
  sid: string;
  smart_encoding: boolean;
  status_callback: string;
  sticky_sender: boolean;
  synchronous_validation: boolean;
  url: string;
  validity_period: number;
}

interface ServiceSolution {
}


declare class ServicePage extends Page<V1, ServicePayload, ServiceResource, ServiceInstance> {
  /**
   * Initialize the ServicePagePLEASE NOTE that this class contains beta products that are subject to change. Use them with caution.
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V1, response: Response<string>, solution: ServiceSolution);

  /**
   * Build an instance of ServiceInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: ServicePayload): ServiceInstance;
}


declare class ServiceInstance extends SerializableClass {
  /**
   * Initialize the ServiceContextPLEASE NOTE that this class contains beta products that are subject to change. Use them with caution.
   *
   * @property sid - Unique 34 character ID of the Service.
   * @property accountSid - Unique 34 character ID of the Account that created this Service.
   * @property friendlyName - A human readable descriptive text for this resource, up to 64 characters.
   * @property dateCreated - The date that this resource was created.
   * @property dateUpdated - The date that this resource was last updated.
   * @property inboundRequestUrl - The URL Twilio will make a webhook request to when a message is received by any phone number or short code in your Service.
   * @property inboundMethod - The HTTP method Twilio will use when making requests to the Inbound Request URL.
   * @property fallbackUrl - The URL that Twilio will request if an error occurs when retrieving or executing the TwiML from your Inbound Request URL.
   * @property fallbackMethod - The HTTP method Twilio will use when making requests to the Fallback URL.
   * @property statusCallback - The URL Twilio will make a webhook request to when passing you status updates about the delivery of your messages.
   * @property stickySender - Configuration to enable or disable Sticky Sender on your Service instance.
   * @property mmsConverter - Configuration to enable or disable MMS Converter for messages sent through your Service instance.
   * @property smartEncoding - Configuration to enable or disable Smart Encoding for messages sent through your Service instance.
   * @property scanMessageContent - The scan_message_content
   * @property fallbackToLongCode - Configuration to enable or disable Fallback to Long Code for messages sent through your Service instance.
   * @property areaCodeGeomatch - Configuration to enable or disable Area Code Geomatch on your Service Instance.
   * @property synchronousValidation - The synchronous_validation
   * @property validityPeriod - The number of seconds all messages sent from your Service are valid for.
   * @property url - The url
   * @property links - The links
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param sid - The sid
   */
  constructor(version: V1, payload: ServicePayload, sid: string);

  private _proxy: ServiceContext;
  accountSid: string;
  /**
   * Access the alphaSenders
   */
  alphaSenders();
  areaCodeGeomatch: boolean;
  dateCreated: Date;
  dateUpdated: Date;
  fallbackMethod: string;
  fallbackToLongCode: boolean;
  fallbackUrl: string;
  /**
   * fetch a ServiceInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: ServiceInstance) => any): void;
  friendlyName: string;
  inboundMethod: string;
  inboundRequestUrl: string;
  links: string;
  mmsConverter: boolean;
  /**
   * Access the phoneNumbers
   */
  phoneNumbers();
  /**
   * remove a ServiceInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: ServiceInstance) => any): void;
  scanMessageContent: service.scan_message_content;
  /**
   * Access the shortCodes
   */
  shortCodes();
  sid: string;
  smartEncoding: boolean;
  statusCallback: string;
  stickySender: boolean;
  synchronousValidation: boolean;
  /**
   * Produce a plain JSON object version of the ServiceInstance for serialization.
   * Removes any circular references in the object.
   */
  toJSON(): any;
  /**
   * update a ServiceInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts?: ServiceInstanceUpdateOptions, callback?: (error: Error | null, items: ServiceInstance) => any): void;
  url: string;
  validityPeriod: number;
}


declare class ServiceContext {
  /**
   * Initialize the ServiceContextPLEASE NOTE that this class contains beta products that are subject to change. Use them with caution.
   *
   * @property phoneNumbers - phoneNumbers resource
   * @property shortCodes - shortCodes resource
   * @property alphaSenders - alphaSenders resource
   *
   * @param version - Version of the resource
   * @param sid - The sid
   */
  constructor(version: V1, sid: string);

  alphaSenders?: Twilio.Messaging.V1.ServiceContext.AlphaSenderList;
  /**
   * fetch a ServiceInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: ServiceInstance) => any): void;
  phoneNumbers?: Twilio.Messaging.V1.ServiceContext.PhoneNumberList;
  /**
   * remove a ServiceInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: ServiceInstance) => any): void;
  shortCodes?: Twilio.Messaging.V1.ServiceContext.ShortCodeList;
  /**
   * update a ServiceInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts?: ServiceInstanceUpdateOptions, callback?: (error: Error | null, items: ServiceInstance) => any): void;
}

export { ServiceContext, ServiceInstance, ServiceList, ServiceListInstance, ServiceListInstanceCreateOptions, ServiceListInstanceEachOptions, ServiceListInstanceOptions, ServiceListInstancePageOptions, ServicePage, ServicePayload, ServiceResource, ServiceSolution }
