/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../../base/Page');
import Response = require('../../../../../http/response');
import V2010 = require('../../../V2010');
import { ListEachOptions, ListOptions, PageOptions } from '../../../../../interfaces';
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
  MemberListInstance(sid: string);
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
   * @function each
   * @memberof Twilio.Api.V2010.AccountContext.QueueContext.MemberList
   * @instance
   *
   * @param opts - ...
   * @param callback - Function to process each record
   */
  each(opts?: object, callback?: Function);
  /**
   * Constructs a member
   *
   * @function get
   * @memberof Twilio.Api.V2010.AccountContext.QueueContext.MemberList
   * @instance
   *
   * @param callSid - The call_sid
   */
  get(callSid: string);
  /**
   * Retrieve a single target page of MemberInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function getPage
   * @memberof Twilio.Api.V2010.AccountContext.QueueContext.MemberList
   * @instance
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: function);
  /**
   * @description Lists MemberInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function list
   * @memberof Twilio.Api.V2010.AccountContext.QueueContext.MemberList
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle list of records
   */
  list(opts?: object, callback?: function);
  /**
   * Retrieve a single page of MemberInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function page
   * @memberof Twilio.Api.V2010.AccountContext.QueueContext.MemberList
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
 * @property url - The url
 * @property method - The method
 */
export interface UpdateOptions {
  method: string;
  url: string;
}

/**
 * Options to pass to update
 *
 * @property url - The url
 * @property method - The method
 */
export interface UpdateOptions {
  method: string;
  url: string;
}


declare class MemberPage extends Page {
  /**
   * @constructor Twilio.Api.V2010.AccountContext.QueueContext.MemberPage
   * @augments Page
   * @description Initialize the MemberPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: Twilio.Api.V2010, response: Response<string>, solution: object);

  /**
   * Build an instance of MemberInstance
   *
   * @function getInstance
   * @memberof Twilio.Api.V2010.AccountContext.QueueContext.MemberPage
   * @instance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: object);
}


declare class MemberInstance {
  /**
   * @constructor Twilio.Api.V2010.AccountContext.QueueContext.MemberInstance
   * @description Initialize the MemberContext
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
  constructor(version: Twilio.Api.V2010, payload: object, accountSid: sid, queueSid: sid, callSid: sid);

  _proxy?: MemberContext;
  /**
   * fetch a MemberInstance
   *
   * @function fetch
   * @memberof Twilio.Api.V2010.AccountContext.QueueContext.MemberInstance
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * Produce a plain JSON object version of the MemberInstance for serialization.
   * Removes any circular references in the object.
   *
   * @function toJSON
   * @memberof Twilio.Api.V2010.AccountContext.QueueContext.MemberInstance
   * @instance
   */
  toJSON();
  /**
   * update a MemberInstance
   *
   * @function update
   * @memberof Twilio.Api.V2010.AccountContext.QueueContext.MemberInstance
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle processed record
   */
  update(opts: object, callback?: function);
}


declare class MemberContext {
  /**
   * @constructor Twilio.Api.V2010.AccountContext.QueueContext.MemberContext
   * @description Initialize the MemberContext
   *
   * @param version - Version of the resource
   * @param accountSid - The account_sid
   * @param queueSid - The Queue in which to find the members
   * @param callSid - The call_sid
   */
  constructor(version: Twilio.Api.V2010, accountSid: sid, queueSid: sid, callSid: sid);

  /**
   * fetch a MemberInstance
   *
   * @function fetch
   * @memberof Twilio.Api.V2010.AccountContext.QueueContext.MemberContext
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * update a MemberInstance
   *
   * @function update
   * @memberof Twilio.Api.V2010.AccountContext.QueueContext.MemberContext
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle processed record
   */
  update(opts: object, callback?: function);
}

export { MemberContext, MemberInstance, MemberList, MemberListInstance, MemberPage, MemberPayload, MemberResource, MemberSolution }
