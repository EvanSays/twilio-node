/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../base/Page');
import Response = require('../../../http/response');
import Wireless = require('../Wireless');
import { SerializableClass } from '../../../interfaces';

/**
 * @description Initialize the CommandList
 * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
 *
 * @param version - Version of the resource
 */
declare function CommandList(version: Wireless): CommandListInstance;

interface CommandResource {
  account_sid: string;
  command: string;
  command_mode: string;
  date_created: Date;
  date_updated: Date;
  device_sid: string;
  direction: string;
  sid: string;
  sim_sid: string;
  status: string;
  url: string;
}

interface CommandPayload extends CommandResource, Page.TwilioResponsePayload {
}

interface CommandSolution {
}

interface CommandListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): CommandContext;
  /**
   * create a CommandInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  create(opts: CommandListInstanceCreateOptions, callback?: function);
  /**
   * Streams CommandInstance records from the API.
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
  each(opts?: CommandListInstanceEachOptions, callback?: Function);
  /**
   * Constructs a command
   *
   * @param sid - The sid
   */
  get(sid: string);
  /**
   * Retrieve a single target page of CommandInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: function);
  /**
   * @description Lists CommandInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  list(opts?: CommandListInstanceOptions, callback?: function);
  /**
   * Retrieve a single page of CommandInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  page(opts?: CommandListInstancePageOptions, callback?: function);
}

/**
 * Options to pass to each
 *
 * @property device - The device
 * @property sim - The sim
 * @property status - The status
 * @property direction - The direction
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
export interface CommandListInstanceEachOptions {
  callback?: Function;
  device?: string;
  direction?: string;
  done?: Function;
  limit?: number;
  pageSize?: number;
  sim?: string;
  status?: string;
}

/**
 * Options to pass to list
 *
 * @property device - The device
 * @property sim - The sim
 * @property status - The status
 * @property direction - The direction
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
export interface CommandListInstanceOptions {
  device?: string;
  direction?: string;
  limit?: number;
  pageSize?: number;
  sim?: string;
  status?: string;
}

/**
 * Options to pass to page
 *
 * @property device - The device
 * @property sim - The sim
 * @property status - The status
 * @property direction - The direction
 * @property pageToken - PageToken provided by the API
 * @property pageNumber - Page Number, this value is simply for client state
 * @property pageSize - Number of records to return, defaults to 50
 */
export interface CommandListInstancePageOptions {
  device?: string;
  direction?: string;
  pageNumber?: number;
  pageSize?: number;
  pageToken?: string;
  sim?: string;
  status?: string;
}

/**
 * Options to pass to create
 *
 * @property command - The command
 * @property device - The device
 * @property sim - The sim
 * @property callbackMethod - The callback_method
 * @property callbackUrl - The callback_url
 * @property commandMode - The command_mode
 * @property includeSid - The include_sid
 */
export interface CommandListInstanceCreateOptions {
  callbackMethod?: string;
  callbackUrl?: string;
  command: string;
  commandMode?: string;
  device?: string;
  includeSid?: string;
  sim?: string;
}


declare class CommandPage extends Page {
  /**
   * @constructor Twilio.Preview.Wireless.CommandPage
   * @augments Page
   * @description Initialize the CommandPage
   * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: Twilio.Preview.Wireless, response: Response<string>, solution: object);

  /**
   * Build an instance of CommandInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: object);
}


declare class CommandInstance {
  /**
   * @constructor Twilio.Preview.Wireless.CommandInstance
   * @description Initialize the CommandContext
   * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
   *
   * @property sid - The sid
   * @property accountSid - The account_sid
   * @property deviceSid - The device_sid
   * @property simSid - The sim_sid
   * @property command - The command
   * @property commandMode - The command_mode
   * @property status - The status
   * @property direction - The direction
   * @property dateCreated - The date_created
   * @property dateUpdated - The date_updated
   * @property url - The url
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param sid - The sid
   */
  constructor(version: Twilio.Preview.Wireless, payload: object, sid: sid);

  _proxy?: CommandContext;
  /**
   * fetch a CommandInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * Produce a plain JSON object version of the CommandInstance for serialization.
   * Removes any circular references in the object.
   */
  toJSON();
}


declare class CommandContext {
  /**
   * @constructor Twilio.Preview.Wireless.CommandContext
   * @description Initialize the CommandContext
   * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
   *
   * @param version - Version of the resource
   * @param sid - The sid
   */
  constructor(version: Twilio.Preview.Wireless, sid: sid);

  /**
   * fetch a CommandInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
}

export { CommandContext, CommandInstance, CommandList, CommandListInstance, CommandPage, CommandPayload, CommandResource, CommandSolution }
