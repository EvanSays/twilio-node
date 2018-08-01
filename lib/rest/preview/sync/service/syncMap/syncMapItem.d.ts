/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../../base/Page');
import Response = require('../../../../../http/response');
import Sync = require('../../../Sync');
import serialize = require('../../../../../base/serialize');
import { SerializableClass } from '../../../../../interfaces';

/**
 * @description Initialize the SyncMapItemList
 * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
 *
 * @param version - Version of the resource
 * @param serviceSid - The service_sid
 * @param mapSid - The map_sid
 */
declare function SyncMapItemList(version: Sync, serviceSid: string, mapSid: string): SyncMapItemListInstance;

/**
 * Options to pass to update
 *
 * @property data - The data
 */
interface SyncMapItemInstanceUpdateOptions {
  data: string;
}

interface SyncMapItemListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): SyncMapItemContext;
  /**
   * create a SyncMapItemInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  create(opts: SyncMapItemListInstanceCreateOptions, callback?: (error: Error | null, items: SyncMapItemListInstance) => any): Promise<SyncMapItemInstance>;
  /**
   * Streams SyncMapItemInstance records from the API.
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
  each(opts?: SyncMapItemListInstanceEachOptions, callback?: (item: SyncMapItemInstance, done: (err?: Error) => void) => void): void;
  /**
   * Constructs a sync_map_item
   *
   * @param key - The key
   */
  get(key: string): SyncMapItemContext;
  /**
   * Retrieve a single target page of SyncMapItemInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: SyncMapItemPage) => any): Promise<SyncMapItemPage>;
  /**
   * Lists SyncMapItemInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  list(opts?: SyncMapItemListInstanceOptions, callback?: (error: Error | null, items: SyncMapItemInstance[]) => any): Promise<SyncMapItemInstance[]>;
  /**
   * Retrieve a single page of SyncMapItemInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  page(opts?: SyncMapItemListInstancePageOptions, callback?: (error: Error | null, items: SyncMapItemPage) => any): Promise<SyncMapItemPage>;
}

/**
 * Options to pass to create
 *
 * @property key - The key
 * @property data - The data
 */
interface SyncMapItemListInstanceCreateOptions {
  data: string;
  key: string;
}

/**
 * Options to pass to each
 *
 * @property order - The order
 * @property from - The from
 * @property bounds - The bounds
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
interface SyncMapItemListInstanceEachOptions {
  bounds?: sync_map_item.query_from_bound_type;
  callback?: (item: SyncMapItemInstance, done: (err?: Error) => void) => void;
  done?: Function;
  from?: string;
  limit?: number;
  order?: sync_map_item.query_result_order;
  pageSize?: number;
}

/**
 * Options to pass to list
 *
 * @property order - The order
 * @property from - The from
 * @property bounds - The bounds
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
interface SyncMapItemListInstanceOptions {
  bounds?: sync_map_item.query_from_bound_type;
  from?: string;
  limit?: number;
  order?: sync_map_item.query_result_order;
  pageSize?: number;
}

/**
 * Options to pass to page
 *
 * @property order - The order
 * @property from - The from
 * @property bounds - The bounds
 * @property pageToken - PageToken provided by the API
 * @property pageNumber - Page Number, this value is simply for client state
 * @property pageSize - Number of records to return, defaults to 50
 */
interface SyncMapItemListInstancePageOptions {
  bounds?: sync_map_item.query_from_bound_type;
  from?: string;
  order?: sync_map_item.query_result_order;
  pageNumber?: number;
  pageSize?: number;
  pageToken?: string;
}

interface SyncMapItemPayload extends SyncMapItemResource, Page.TwilioResponsePayload {
}

interface SyncMapItemResource {
  account_sid: string;
  created_by: string;
  data: string;
  date_created: Date;
  date_updated: Date;
  key: string;
  map_sid: string;
  revision: string;
  service_sid: string;
  url: string;
}

interface SyncMapItemSolution {
  mapSid?: string;
  serviceSid?: string;
}


declare class SyncMapItemPage extends Page<Sync, SyncMapItemPayload, SyncMapItemResource, SyncMapItemInstance> {
  /**
   * Initialize the SyncMapItemPagePLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: Sync, response: Response<string>, solution: SyncMapItemSolution);

  /**
   * Build an instance of SyncMapItemInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: SyncMapItemPayload): SyncMapItemInstance;
}


declare class SyncMapItemInstance extends SerializableClass {
  /**
   * Initialize the SyncMapItemContextPLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
   *
   * @property key - The key
   * @property accountSid - The account_sid
   * @property serviceSid - The service_sid
   * @property mapSid - The map_sid
   * @property url - The url
   * @property revision - The revision
   * @property data - The data
   * @property dateCreated - The date_created
   * @property dateUpdated - The date_updated
   * @property createdBy - The created_by
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param serviceSid - The service_sid
   * @param mapSid - The map_sid
   * @param key - The key
   */
  constructor(version: Sync, payload: SyncMapItemPayload, serviceSid: string, mapSid: string, key: string);

  private _proxy: SyncMapItemContext;
  accountSid: string;
  createdBy: string;
  data: string;
  dateCreated: Date;
  dateUpdated: Date;
  /**
   * fetch a SyncMapItemInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: SyncMapItemInstance) => any): void;
  key: string;
  mapSid: string;
  /**
   * remove a SyncMapItemInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: SyncMapItemInstance) => any): void;
  revision: string;
  serviceSid: string;
  /**
   * Produce a plain JSON object version of the SyncMapItemInstance for serialization.
   * Removes any circular references in the object.
   */
  toJSON(): any;
  /**
   * update a SyncMapItemInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts: SyncMapItemInstanceUpdateOptions, callback?: (error: Error | null, items: SyncMapItemInstance) => any): void;
  url: string;
}


declare class SyncMapItemContext {
  /**
   * Initialize the SyncMapItemContextPLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
   *
   * @param version - Version of the resource
   * @param serviceSid - The service_sid
   * @param mapSid - The map_sid
   * @param key - The key
   */
  constructor(version: Sync, serviceSid: string, mapSid: string, key: string);

  /**
   * fetch a SyncMapItemInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: SyncMapItemInstance) => any): void;
  /**
   * remove a SyncMapItemInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: SyncMapItemInstance) => any): void;
  /**
   * update a SyncMapItemInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts: SyncMapItemInstanceUpdateOptions, callback?: (error: Error | null, items: SyncMapItemInstance) => any): void;
}

export { SyncMapItemContext, SyncMapItemInstance, SyncMapItemList, SyncMapItemListInstance, SyncMapItemListInstanceCreateOptions, SyncMapItemListInstanceEachOptions, SyncMapItemListInstanceOptions, SyncMapItemListInstancePageOptions, SyncMapItemPage, SyncMapItemPayload, SyncMapItemResource, SyncMapItemSolution }
