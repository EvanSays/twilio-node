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
 * @description Initialize the TriggerList
 *
 * @param version - Version of the resource
 * @param accountSid - A 34 character string that uniquely identifies this resource.
 */
declare function TriggerList(version: V2010, accountSid: string): TriggerListInstance;

interface TriggerResource {
  account_sid: string;
  api_version: string;
  callback_method: string;
  callback_url: string;
  current_value: string;
  date_created: Date;
  date_fired: Date;
  date_updated: Date;
  friendly_name: string;
  recurring: TriggerRecurring;
  sid: string;
  trigger_by: TriggerTriggerField;
  trigger_value: string;
  uri: string;
  usage_category: TriggerUsageCategory;
  usage_record_uri: string;
}

interface TriggerPayload extends TriggerResource, Page.TwilioResponsePayload {
}

interface TriggerSolution {
  accountSid?: string;
}

interface TriggerListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): TriggerContext;
  /**
   * create a TriggerInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  create(opts: TriggerListInstanceCreateOptions, callback?: (error: Error | null, items: TriggerListInstance) => any): Promise<TriggerInstance>;
  /**
   * Streams TriggerInstance records from the API.
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
  each(opts?: TriggerListInstanceEachOptions, callback?: (item: TriggerInstance, done: (err?: Error) => void) => void): void;
  /**
   * Constructs a trigger
   *
   * @param sid - Fetch by unique usage-trigger Sid
   */
  get(sid: string): TriggerContext;
  /**
   * Retrieve a single target page of TriggerInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: TriggerPage) => any): Promise<TriggerPage>;
  /**
   * Lists TriggerInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  list(opts?: TriggerListInstanceOptions, callback?: (error: Error | null, items: TriggerInstance[]) => any): Promise<TriggerInstance[]>;
  /**
   * Retrieve a single page of TriggerInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  page(opts?: TriggerListInstancePageOptions, callback?: (error: Error | null, items: TriggerPage) => any): Promise<TriggerPage>;
}

/**
 * Options to pass to update
 *
 * @property callbackMethod - HTTP method to use with callback_url
 * @property callbackUrl - URL Twilio will request when the trigger fires
 * @property friendlyName - A user-specified, human-readable name for the trigger.
 */
interface TriggerInstanceUpdateOptions {
  callbackMethod?: string;
  callbackUrl?: string;
  friendlyName?: string;
}

/**
 * Options to pass to update
 *
 * @property callbackMethod - HTTP method to use with callback_url
 * @property callbackUrl - URL Twilio will request when the trigger fires
 * @property friendlyName - A user-specified, human-readable name for the trigger.
 */
interface TriggerInstanceUpdateOptions {
  callbackMethod?: string;
  callbackUrl?: string;
  friendlyName?: string;
}

/**
 * Options to pass to create
 *
 * @property callbackUrl - URL Twilio will request when the trigger fires
 * @property triggerValue - the value at which the trigger will fire
 * @property usageCategory - The usage category the trigger watches
 * @property callbackMethod - HTTP method to use with callback_url
 * @property friendlyName - A user-specified, human-readable name for the trigger.
 * @property recurring - How this trigger recurs
 * @property triggerBy - The field in the UsageRecord that fires the trigger
 */
interface TriggerListInstanceCreateOptions {
  callbackMethod?: string;
  callbackUrl: string;
  friendlyName?: string;
  recurring?: trigger.recurring;
  triggerBy?: trigger.trigger_field;
  triggerValue: string;
  usageCategory: trigger.usage_category;
}

/**
 * Options to pass to each
 *
 * @property recurring - Filter by recurring
 * @property triggerBy - Filter by trigger by
 * @property usageCategory - Filter by Usage Category
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
interface TriggerListInstanceEachOptions {
  callback?: (item: TriggerInstance, done: (err?: Error) => void) => void;
  done?: Function;
  limit?: number;
  pageSize?: number;
  recurring?: trigger.recurring;
  triggerBy?: trigger.trigger_field;
  usageCategory?: trigger.usage_category;
}

/**
 * Options to pass to list
 *
 * @property recurring - Filter by recurring
 * @property triggerBy - Filter by trigger by
 * @property usageCategory - Filter by Usage Category
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
interface TriggerListInstanceOptions {
  limit?: number;
  pageSize?: number;
  recurring?: trigger.recurring;
  triggerBy?: trigger.trigger_field;
  usageCategory?: trigger.usage_category;
}

/**
 * Options to pass to page
 *
 * @property recurring - Filter by recurring
 * @property triggerBy - Filter by trigger by
 * @property usageCategory - Filter by Usage Category
 * @property pageToken - PageToken provided by the API
 * @property pageNumber - Page Number, this value is simply for client state
 * @property pageSize - Number of records to return, defaults to 50
 */
interface TriggerListInstancePageOptions {
  pageNumber?: number;
  pageSize?: number;
  pageToken?: string;
  recurring?: trigger.recurring;
  triggerBy?: trigger.trigger_field;
  usageCategory?: trigger.usage_category;
}


declare class TriggerPage extends Page<V2010, TriggerPayload, TriggerResource, TriggerInstance> {
  /**
   * Initialize the TriggerPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V2010, response: Response<string>, solution: TriggerSolution);

  /**
   * Build an instance of TriggerInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: TriggerPayload): TriggerInstance;
}


declare class TriggerInstance extends SerializableClass {
  /**
   * Initialize the TriggerContext
   *
   * @property accountSid - The account this trigger monitors.
   * @property apiVersion - The api_version
   * @property callbackMethod - HTTP method to use with callback_url
   * @property callbackUrl - URL Twilio will request when the trigger fires
   * @property currentValue - The current value of the field the trigger is watching.
   * @property dateCreated - The date this resource was created
   * @property dateFired - The date the trigger was last fired
   * @property dateUpdated - The date this resource was last updated
   * @property friendlyName - A user-specified, human-readable name for the trigger.
   * @property recurring - How this trigger recurs
   * @property sid - The trigger's unique Sid
   * @property triggerBy - The field in the UsageRecord that fires the trigger
   * @property triggerValue - the value at which the trigger will fire
   * @property uri - The URI for this resource
   * @property usageCategory - The usage category the trigger watches
   * @property usageRecordUri - The URI of the UsageRecord this trigger is watching
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param accountSid - A 34 character string that uniquely identifies this resource.
   * @param sid - Fetch by unique usage-trigger Sid
   */
  constructor(version: V2010, payload: TriggerPayload, accountSid: string, sid: string);

  private _proxy: TriggerContext;
  accountSid: string;
  apiVersion: string;
  callbackMethod: string;
  callbackUrl: string;
  currentValue: string;
  dateCreated: Date;
  dateFired: Date;
  dateUpdated: Date;
  /**
   * fetch a TriggerInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: TriggerInstance) => any): void;
  friendlyName: string;
  recurring: trigger.recurring;
  /**
   * remove a TriggerInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: TriggerInstance) => any): void;
  sid: string;
  /**
   * Produce a plain JSON object version of the TriggerInstance for serialization.
   * Removes any circular references in the object.
   */
  toJSON(): any;
  triggerBy: trigger.trigger_field;
  triggerValue: string;
  /**
   * update a TriggerInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts?: TriggerInstanceUpdateOptions, callback?: (error: Error | null, items: TriggerInstance) => any): void;
  uri: string;
  usageCategory: trigger.usage_category;
  usageRecordUri: string;
}


declare class TriggerContext {
  /**
   * Initialize the TriggerContext
   *
   * @param version - Version of the resource
   * @param accountSid - The account_sid
   * @param sid - Fetch by unique usage-trigger Sid
   */
  constructor(version: V2010, accountSid: string, sid: string);

  /**
   * fetch a TriggerInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: TriggerInstance) => any): void;
  /**
   * remove a TriggerInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: TriggerInstance) => any): void;
  /**
   * update a TriggerInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts?: TriggerInstanceUpdateOptions, callback?: (error: Error | null, items: TriggerInstance) => any): void;
}

export { TriggerContext, TriggerInstance, TriggerList, TriggerListInstance, TriggerListInstanceCreateOptions, TriggerListInstanceEachOptions, TriggerListInstanceOptions, TriggerListInstancePageOptions, TriggerPage, TriggerPayload, TriggerResource, TriggerSolution }
