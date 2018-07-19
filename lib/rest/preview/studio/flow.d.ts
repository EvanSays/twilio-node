/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../base/Page');
import Response = require('../../../http/response');
import Studio = require('../Studio');
import { EngagementList } from './flow/engagement';
import { SerializableClass } from '../../../interfaces';

/**
 * @description Initialize the FlowList
 * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
 *
 * @param version - Version of the resource
 */
declare function FlowList(version: Studio): FlowListInstance;

interface FlowResource {
  account_sid: string;
  date_created: Date;
  date_updated: Date;
  debug: boolean;
  friendly_name: string;
  links: string;
  sid: string;
  status: FlowStatus;
  url: string;
  version: number;
}

interface FlowPayload extends FlowResource, Page.TwilioResponsePayload {
}

interface FlowSolution {
}

interface FlowListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): FlowContext;
  /**
   * Streams FlowInstance records from the API.
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
  each(opts?: FlowListInstanceEachOptions, callback?: Function);
  /**
   * Constructs a flow
   *
   * @param sid - The sid
   */
  get(sid: string);
  /**
   * Retrieve a single target page of FlowInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: function);
  /**
   * @description Lists FlowInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  list(opts?: FlowListInstanceOptions, callback?: function);
  /**
   * Retrieve a single page of FlowInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  page(opts?: FlowListInstancePageOptions, callback?: function);
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
export interface FlowListInstanceEachOptions {
  callback?: Function;
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
export interface FlowListInstanceOptions {
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
export interface FlowListInstancePageOptions {
  pageNumber?: number;
  pageSize?: number;
  pageToken?: string;
}


declare class FlowPage extends Page {
  /**
   * @constructor Twilio.Preview.Studio.FlowPage
   * @augments Page
   * @description Initialize the FlowPage
   * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: Twilio.Preview.Studio, response: Response<string>, solution: object);

  /**
   * Build an instance of FlowInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: object);
}


declare class FlowInstance {
  /**
   * @constructor Twilio.Preview.Studio.FlowInstance
   * @description Initialize the FlowContext
   * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
   *
   * @property sid - A string that uniquely identifies this Flow.
   * @property accountSid - Account Sid.
   * @property friendlyName - A human readable description of this resource.
   * @property status - The Status of this Flow
   * @property debug - Toggle extra logging.
   * @property version - The latest version number of this Flow's definition.
   * @property dateCreated - The date this Flow was created
   * @property dateUpdated - The date this Flow was updated
   * @property url - The URL of this resource.
   * @property links - Nested resource URLs.
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param sid - The sid
   */
  constructor(version: Twilio.Preview.Studio, payload: object, sid: sid);

  _proxy?: FlowContext;
  /**
   * Access the engagements
   */
  engagements();
  /**
   * fetch a FlowInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * remove a FlowInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: function);
  /**
   * Produce a plain JSON object version of the FlowInstance for serialization.
   * Removes any circular references in the object.
   */
  toJSON();
}


declare class FlowContext {
  /**
   * @constructor Twilio.Preview.Studio.FlowContext
   * @description Initialize the FlowContext
   * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
   *
   * @property engagements - engagements resource
   *
   * @param version - Version of the resource
   * @param sid - The sid
   */
  constructor(version: Twilio.Preview.Studio, sid: sid);

  engagements?: Twilio.Preview.Studio.FlowContext.EngagementList;
  /**
   * fetch a FlowInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * remove a FlowInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: function);
}

export { FlowContext, FlowInstance, FlowList, FlowListInstance, FlowPage, FlowPayload, FlowResource, FlowSolution }
