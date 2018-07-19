/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../base/Page');
import Response = require('../../../../http/response');
import V1 = require('../../V1');
import { SerializableClass } from '../../../../interfaces';

/**
 * @description Initialize the AwsList
 *
 * @param version - Version of the resource
 */
declare function AwsList(version: V1): AwsListInstance;

interface AwsResource {
  account_sid: string;
  date_created: Date;
  date_updated: Date;
  friendly_name: string;
  sid: string;
  url: string;
}

interface AwsPayload extends AwsResource, Page.TwilioResponsePayload {
}

interface AwsSolution {
}

interface AwsListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): AwsContext;
  /**
   * create a AwsInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  create(opts: AwsListInstanceCreateOptions, callback?: function);
  /**
   * Streams AwsInstance records from the API.
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
  each(opts?: AwsListInstanceEachOptions, callback?: Function);
  /**
   * Constructs a aws
   *
   * @param sid - The sid
   */
  get(sid: string);
  /**
   * Retrieve a single target page of AwsInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: function);
  /**
   * @description Lists AwsInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  list(opts?: AwsListInstanceOptions, callback?: function);
  /**
   * Retrieve a single page of AwsInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  page(opts?: AwsListInstancePageOptions, callback?: function);
}

/**
 * Options to pass to update
 *
 * @property friendlyName - The friendly_name
 */
export interface AwsInstanceUpdateOptions {
  friendlyName?: string;
}

/**
 * Options to pass to update
 *
 * @property friendlyName - The friendly_name
 */
export interface AwsContextUpdateOptions {
  friendlyName?: string;
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
export interface AwsListInstanceEachOptions {
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
export interface AwsListInstanceOptions {
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
export interface AwsListInstancePageOptions {
  pageNumber?: number;
  pageSize?: number;
  pageToken?: string;
}

/**
 * Options to pass to create
 *
 * @property credentials - The credentials
 * @property friendlyName - The friendly_name
 * @property accountSid - The account_sid
 */
export interface AwsListInstanceCreateOptions {
  accountSid?: string;
  credentials: string;
  friendlyName?: string;
}


declare class AwsPage extends Page {
  /**
   * @constructor Twilio.Accounts.V1.CredentialContext.AwsPage
   * @augments Page
   * @description Initialize the AwsPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: Twilio.Accounts.V1, response: Response<string>, solution: object);

  /**
   * Build an instance of AwsInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: object);
}


declare class AwsInstance {
  /**
   * @constructor Twilio.Accounts.V1.CredentialContext.AwsInstance
   * @description Initialize the AwsContext
   *
   * @property sid - The sid
   * @property accountSid - The account_sid
   * @property friendlyName - The friendly_name
   * @property dateCreated - The date_created
   * @property dateUpdated - The date_updated
   * @property url - The url
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param sid - The sid
   */
  constructor(version: Twilio.Accounts.V1, payload: object, sid: sid);

  _proxy?: AwsContext;
  /**
   * fetch a AwsInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * remove a AwsInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: function);
  /**
   * Produce a plain JSON object version of the AwsInstance for serialization.
   * Removes any circular references in the object.
   */
  toJSON();
  /**
   * update a AwsInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts?: AwsInstanceUpdateOptions, callback?: function);
}


declare class AwsContext {
  /**
   * @constructor Twilio.Accounts.V1.CredentialContext.AwsContext
   * @description Initialize the AwsContext
   *
   * @param version - Version of the resource
   * @param sid - The sid
   */
  constructor(version: Twilio.Accounts.V1, sid: sid);

  /**
   * fetch a AwsInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * remove a AwsInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: function);
  /**
   * update a AwsInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts?: AwsContextUpdateOptions, callback?: function);
}

export { AwsContext, AwsInstance, AwsList, AwsListInstance, AwsPage, AwsPayload, AwsResource, AwsSolution }
