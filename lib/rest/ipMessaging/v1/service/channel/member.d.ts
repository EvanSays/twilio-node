/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../../base/Page');
import Response = require('../../../../../http/response');
import V1 = require('../../../V1');
import serialize = require('../../../../../base/serialize');
import { SerializableClass } from '../../../../../interfaces';

/**
 * @description Initialize the MemberList
 *
 * @param version - Version of the resource
 * @param serviceSid - The unique id of the Service this member belongs to.
 * @param channelSid - The unique id of the Channel for this member.
 */
declare function MemberList(version: V1, serviceSid: string, channelSid: string): MemberListInstance;

interface MemberResource {
  account_sid: string;
  channel_sid: string;
  date_created: Date;
  date_updated: Date;
  identity: string;
  last_consumed_message_index: number;
  last_consumption_timestamp: Date;
  role_sid: string;
  service_sid: string;
  sid: string;
  url: string;
}

interface MemberPayload extends MemberResource, Page.TwilioResponsePayload {
}

interface MemberSolution {
  channelSid?: string;
  serviceSid?: string;
}

interface MemberListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): MemberContext;
  /**
   * create a MemberInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  create(opts: MemberListInstanceCreateOptions, callback?: function);
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
  each(opts?: MemberListInstanceEachOptions, callback?: Function);
  /**
   * Constructs a member
   *
   * @param sid - The sid
   */
  get(sid: string);
  /**
   * Retrieve a single target page of MemberInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
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
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  list(opts?: MemberListInstanceOptions, callback?: function);
  /**
   * Retrieve a single page of MemberInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  page(opts?: MemberListInstancePageOptions, callback?: function);
}

/**
 * Options to pass to update
 *
 * @property roleSid - The Role assigned to this member.
 * @property lastConsumedMessageIndex - An Integer representing index of the last Message this Member has read within this Channel
 */
export interface MemberInstanceUpdateOptions {
  lastConsumedMessageIndex?: number;
  roleSid?: string;
}

/**
 * Options to pass to update
 *
 * @property roleSid - The Role assigned to this member.
 * @property lastConsumedMessageIndex - An Integer representing index of the last Message this Member has read within this Channel
 */
export interface MemberContextUpdateOptions {
  lastConsumedMessageIndex?: number;
  roleSid?: string;
}

/**
 * Options to pass to create
 *
 * @property identity - A unique string identifier for this User in this Service.
 * @property roleSid - The Role assigned to this member.
 */
export interface MemberListInstanceCreateOptions {
  identity: string;
  roleSid?: string;
}

/**
 * Options to pass to each
 *
 * @property identity - A unique string identifier for this User in this Service.
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
export interface MemberListInstanceEachOptions {
  callback?: Function;
  done?: Function;
  identity?: string|list;
  limit?: number;
  pageSize?: number;
}

/**
 * Options to pass to list
 *
 * @property identity - A unique string identifier for this User in this Service.
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
export interface MemberListInstanceOptions {
  identity?: string|list;
  limit?: number;
  pageSize?: number;
}

/**
 * Options to pass to page
 *
 * @property identity - A unique string identifier for this User in this Service.
 * @property pageToken - PageToken provided by the API
 * @property pageNumber - Page Number, this value is simply for client state
 * @property pageSize - Number of records to return, defaults to 50
 */
export interface MemberListInstancePageOptions {
  identity?: string|list;
  pageNumber?: number;
  pageSize?: number;
  pageToken?: string;
}


declare class MemberPage extends Page {
  /**
   * @constructor Twilio.IpMessaging.V1.ServiceContext.ChannelContext.MemberPage
   * @augments Page
   * @description Initialize the MemberPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: Twilio.IpMessaging.V1, response: Response<string>, solution: object);

  /**
   * Build an instance of MemberInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: object);
}


declare class MemberInstance {
  /**
   * @constructor Twilio.IpMessaging.V1.ServiceContext.ChannelContext.MemberInstance
   * @description Initialize the MemberContext
   *
   * @property sid - A 34 character string that uniquely identifies this resource.
   * @property accountSid - The unique id of the Account responsible for this member.
   * @property channelSid - The unique id of the Channel for this member.
   * @property serviceSid - The unique id of the Service this member belongs to.
   * @property identity - A unique string identifier for this User in this Service.
   * @property dateCreated - The date that this resource was created.
   * @property dateUpdated - The date that this resource was last updated.
   * @property roleSid - The Role assigned to this member.
   * @property lastConsumedMessageIndex - An Integer representing index of the last Message this Member has read within this Channel
   * @property lastConsumptionTimestamp - An ISO8601 based timestamp string representing the datetime of the last Message read event for this Member within this Channel
   * @property url - An absolute URL for this member.
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param serviceSid - The unique id of the Service this member belongs to.
   * @param channelSid - The unique id of the Channel for this member.
   * @param sid - The sid
   */
  constructor(version: Twilio.IpMessaging.V1, payload: object, serviceSid: sid, channelSid: sid, sid: sid);

  _proxy?: MemberContext;
  /**
   * fetch a MemberInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * remove a MemberInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: function);
  /**
   * Produce a plain JSON object version of the MemberInstance for serialization.
   * Removes any circular references in the object.
   */
  toJSON();
  /**
   * update a MemberInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts?: MemberInstanceUpdateOptions, callback?: function);
}


declare class MemberContext {
  /**
   * @constructor Twilio.IpMessaging.V1.ServiceContext.ChannelContext.MemberContext
   * @description Initialize the MemberContext
   *
   * @param version - Version of the resource
   * @param serviceSid - The service_sid
   * @param channelSid - The channel_sid
   * @param sid - The sid
   */
  constructor(version: Twilio.IpMessaging.V1, serviceSid: sid, channelSid: sid_like, sid: sid);

  /**
   * fetch a MemberInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * remove a MemberInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: function);
  /**
   * update a MemberInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts?: MemberContextUpdateOptions, callback?: function);
}

export { MemberContext, MemberInstance, MemberList, MemberListInstance, MemberPage, MemberPayload, MemberResource, MemberSolution }
