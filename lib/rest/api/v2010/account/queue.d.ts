/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../base/Page');
import Response = require('../../../../http/response');
import V2010 = require('../../V2010');
import { ListEachOptions, ListOptions, PageOptions } from '../../../../interfaces';
import { MemberList } from './queue/member';
import { SerializableClass } from '../../../../interfaces';

/**
 * @description Initialize the QueueList
 *
 * @param version - Version of the resource
 * @param accountSid - The account_sid
 */
declare function QueueList(version: V2010, accountSid: string): QueueListInstance;

interface QueueResource {
  account_sid: string;
  average_wait_time: number;
  current_size: number;
  date_created: Date;
  date_updated: Date;
  friendly_name: string;
  max_size: number;
  sid: string;
  uri: string;
}

interface QueuePayload extends QueueResource, Page.TwilioResponsePayload {
}

interface QueueSolution {
  accountSid?: string;
}

interface QueueListInstance {
  /**
   * @param sid - sid of instance
   */
  QueueListInstance(sid: string);
  /**
   * create a QueueInstance
   *
   * @function create
   * @memberof Twilio.Api.V2010.AccountContext.QueueList
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle processed record
   */
  create(opts: object, callback?: function);
  /**
   * Streams QueueInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function each
   * @memberof Twilio.Api.V2010.AccountContext.QueueList
   * @instance
   *
   * @param opts - ...
   * @param callback - Function to process each record
   */
  each(opts?: object, callback?: Function);
  /**
   * Constructs a queue
   *
   * @function get
   * @memberof Twilio.Api.V2010.AccountContext.QueueList
   * @instance
   *
   * @param sid - Fetch by unique queue Sid
   */
  get(sid: string);
  /**
   * Retrieve a single target page of QueueInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function getPage
   * @memberof Twilio.Api.V2010.AccountContext.QueueList
   * @instance
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: function);
  /**
   * @description Lists QueueInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function list
   * @memberof Twilio.Api.V2010.AccountContext.QueueList
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle list of records
   */
  list(opts?: object, callback?: function);
  /**
   * Retrieve a single page of QueueInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function page
   * @memberof Twilio.Api.V2010.AccountContext.QueueList
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
 * @property friendlyName - A human readable description of the queue
 * @property maxSize - The max number of members allowed in the queue
 */
export interface UpdateOptions {
  friendlyName?: string;
  maxSize?: number;
}

/**
 * Options to pass to update
 *
 * @property friendlyName - A human readable description of the queue
 * @property maxSize - The max number of members allowed in the queue
 */
export interface UpdateOptions {
  friendlyName?: string;
  maxSize?: number;
}


declare class QueuePage extends Page {
  /**
   * @constructor Twilio.Api.V2010.AccountContext.QueuePage
   * @augments Page
   * @description Initialize the QueuePage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: Twilio.Api.V2010, response: Response<string>, solution: object);

  /**
   * Build an instance of QueueInstance
   *
   * @function getInstance
   * @memberof Twilio.Api.V2010.AccountContext.QueuePage
   * @instance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: object);
}


declare class QueueInstance {
  /**
   * @constructor Twilio.Api.V2010.AccountContext.QueueInstance
   * @description Initialize the QueueContext
   *
   * @property accountSid - The account_sid
   * @property averageWaitTime - Average wait time of members in the queue
   * @property currentSize - The count of calls currently in the queue.
   * @property dateCreated - The date_created
   * @property dateUpdated - The date_updated
   * @property friendlyName - A user-provided string that identifies this queue.
   * @property maxSize - The max number of calls allowed in the queue
   * @property sid - A string that uniquely identifies this queue
   * @property uri - The uri
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param accountSid - The account_sid
   * @param sid - Fetch by unique queue Sid
   */
  constructor(version: Twilio.Api.V2010, payload: object, accountSid: sid, sid: sid);

  _proxy?: QueueContext;
  /**
   * fetch a QueueInstance
   *
   * @function fetch
   * @memberof Twilio.Api.V2010.AccountContext.QueueInstance
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * Access the members
   *
   * @function members
   * @memberof Twilio.Api.V2010.AccountContext.QueueInstance
   * @instance
   */
  members();
  /**
   * remove a QueueInstance
   *
   * @function remove
   * @memberof Twilio.Api.V2010.AccountContext.QueueInstance
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: function);
  /**
   * Produce a plain JSON object version of the QueueInstance for serialization.
   * Removes any circular references in the object.
   *
   * @function toJSON
   * @memberof Twilio.Api.V2010.AccountContext.QueueInstance
   * @instance
   */
  toJSON();
  /**
   * update a QueueInstance
   *
   * @function update
   * @memberof Twilio.Api.V2010.AccountContext.QueueInstance
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle processed record
   */
  update(opts?: object, callback?: function);
}


declare class QueueContext {
  /**
   * @constructor Twilio.Api.V2010.AccountContext.QueueContext
   * @description Initialize the QueueContext
   *
   * @property members - members resource
   *
   * @param version - Version of the resource
   * @param accountSid - The account_sid
   * @param sid - Fetch by unique queue Sid
   */
  constructor(version: Twilio.Api.V2010, accountSid: sid, sid: sid);

  /**
   * fetch a QueueInstance
   *
   * @function fetch
   * @memberof Twilio.Api.V2010.AccountContext.QueueContext
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  members?: Twilio.Api.V2010.AccountContext.QueueContext.MemberList;
  /**
   * remove a QueueInstance
   *
   * @function remove
   * @memberof Twilio.Api.V2010.AccountContext.QueueContext
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: function);
  /**
   * update a QueueInstance
   *
   * @function update
   * @memberof Twilio.Api.V2010.AccountContext.QueueContext
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle processed record
   */
  update(opts?: object, callback?: function);
}

export { QueueContext, QueueInstance, QueueList, QueueListInstance, QueuePage, QueuePayload, QueueResource, QueueSolution }
