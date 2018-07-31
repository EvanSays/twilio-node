/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../../base/Page');
import Response = require('../../../../../http/response');
import V2010 = require('../../../V2010');
import { SerializableClass } from '../../../../../interfaces';

/**
 * @description Initialize the MemberList
 *
 * @param version - Version of the resource
 * @param accountSid - The account_sid
 * @param queueSid - A string that uniquely identifies this queue
 */
declare function MemberList(version: V2010, accountSid: string, queueSid: string): MemberListInstance;

interface MemberResource {
  call_sid: string;
  date_enqueued: Date;
  position: number;
  uri: string;
  wait_time: number;
}

interface MemberPayload extends MemberResource, Page.TwilioResponsePayload {
}

interface MemberSolution {
  accountSid?: string;
  queueSid?: string;
}

interface MemberListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): MemberContext;
  /**
   * Streams MemberInstance records from the API.
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
  each(opts?: MemberListInstanceEachOptions, callback?: (item: MemberInstance, done: (err?: Error) => void) => void): void;
  /**
   * Constructs a member
   *
   * @param callSid - The call_sid
   */
  get(callSid: string): MemberContext;
  /**
   * Retrieve a single target page of MemberInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: MemberPage) => any): Promise<MemberPage>;
  /**
   * Lists MemberInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  list(opts?: MemberListInstanceOptions, callback?: (error: Error | null, items: MemberInstance[]) => any): Promise<MemberInstance[]>;
  /**
   * Retrieve a single page of MemberInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  page(opts?: MemberListInstancePageOptions, callback?: (error: Error | null, items: MemberPage) => any): Promise<MemberPage>;
}

/**
 * Options to pass to update
 *
 * @property url - The url
 * @property method - The method
 */
interface MemberInstanceUpdateOptions {
  method: string;
  url: string;
}

/**
 * Options to pass to update
 *
 * @property url - The url
 * @property method - The method
 */
interface MemberInstanceUpdateOptions {
  method: string;
  url: string;
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
interface MemberListInstanceEachOptions {
  callback?: (item: MemberInstance, done: (err?: Error) => void) => void;
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
interface MemberListInstanceOptions {
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
interface MemberListInstancePageOptions {
  pageNumber?: number;
  pageSize?: number;
  pageToken?: string;
}


declare class MemberPage extends Page<V2010, MemberPayload, MemberResource, MemberInstance> {
  /**
   * Initialize the MemberPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V2010, response: Response<string>, solution: MemberSolution);

  /**
   * Build an instance of MemberInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: MemberPayload): MemberInstance;
}


declare class MemberInstance extends SerializableClass {
  /**
   * Initialize the MemberContext
   *
   * @property callSid - Unique string that identifies this resource
   * @property dateEnqueued - The date the member was enqueued
   * @property position - This member's current position in the queue.
   * @property uri - The uri
   * @property waitTime - The number of seconds the member has been in the queue.
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param accountSid - The account_sid
   * @param queueSid - A string that uniquely identifies this queue
   * @param callSid - The call_sid
   */
  constructor(version: V2010, payload: MemberPayload, accountSid: string, queueSid: string, callSid: string);

  private _proxy: MemberContext;
  callSid: string;
  dateEnqueued: Date;
  /**
   * fetch a MemberInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: MemberInstance) => any): void;
  position: number;
  /**
   * Produce a plain JSON object version of the MemberInstance for serialization.
   * Removes any circular references in the object.
   */
  toJSON(): any;
  /**
   * update a MemberInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts: MemberInstanceUpdateOptions, callback?: (error: Error | null, items: MemberInstance) => any): void;
  uri: string;
  waitTime: number;
}


declare class MemberContext {
  /**
   * Initialize the MemberContext
   *
   * @param version - Version of the resource
   * @param accountSid - The account_sid
   * @param queueSid - The Queue in which to find the members
   * @param callSid - The call_sid
   */
  constructor(version: V2010, accountSid: string, queueSid: string, callSid: string);

  /**
   * fetch a MemberInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: MemberInstance) => any): void;
  /**
   * update a MemberInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts: MemberInstanceUpdateOptions, callback?: (error: Error | null, items: MemberInstance) => any): void;
}

export { MemberContext, MemberInstance, MemberList, MemberListInstance, MemberListInstanceEachOptions, MemberListInstanceOptions, MemberListInstancePageOptions, MemberPage, MemberPayload, MemberResource, MemberSolution }
