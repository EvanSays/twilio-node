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
 * @description Initialize the SyncMapPermissionList
 * PLEASE NOTE that this class contains beta products that are subject to change. Use them with caution.
 *
 * @param version - Version of the resource
 * @param serviceSid - Sync Service Instance SID.
 * @param mapSid - Sync Map SID.
 */
declare function SyncMapPermissionList(version: V1, serviceSid: string, mapSid: string): SyncMapPermissionListInstance;

interface SyncMapPermissionResource {
  account_sid: string;
  identity: string;
  manage: boolean;
  map_sid: string;
  read: boolean;
  service_sid: string;
  url: string;
  write: boolean;
}

interface SyncMapPermissionPayload extends SyncMapPermissionResource, Page.TwilioResponsePayload {
}

interface SyncMapPermissionSolution {
  mapSid?: string;
  serviceSid?: string;
}

interface SyncMapPermissionListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): SyncMapPermissionContext;
  /**
   * Streams SyncMapPermissionInstance records from the API.
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
  each(opts?: SyncMapPermissionListInstanceEachOptions, callback?: Function);
  /**
   * Constructs a sync_map_permission
   *
   * @param identity - Identity of the user to whom the Sync Map Permission applies.
   */
  get(identity: string);
  /**
   * Retrieve a single target page of SyncMapPermissionInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: function);
  /**
   * @description Lists SyncMapPermissionInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  list(opts?: SyncMapPermissionListInstanceOptions, callback?: function);
  /**
   * Retrieve a single page of SyncMapPermissionInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  page(opts?: SyncMapPermissionListInstancePageOptions, callback?: function);
}

/**
 * Options to pass to update
 *
 * @property read - Read access.
 * @property write - Write access.
 * @property manage - Manage access.
 */
export interface SyncMapPermissionInstanceUpdateOptions {
  manage: boolean;
  read: boolean;
  write: boolean;
}

/**
 * Options to pass to update
 *
 * @property read - Read access.
 * @property write - Write access.
 * @property manage - Manage access.
 */
export interface SyncMapPermissionContextUpdateOptions {
  manage: boolean;
  read: boolean;
  write: boolean;
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
export interface SyncMapPermissionListInstanceEachOptions {
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
export interface SyncMapPermissionListInstanceOptions {
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
export interface SyncMapPermissionListInstancePageOptions {
  pageNumber?: number;
  pageSize?: number;
  pageToken?: string;
}


declare class SyncMapPermissionPage extends Page {
  /**
   * @constructor Twilio.Sync.V1.ServiceContext.SyncMapContext.SyncMapPermissionPage
   * @augments Page
   * @description Initialize the SyncMapPermissionPage
   * PLEASE NOTE that this class contains beta products that are subject to change. Use them with caution.
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: Twilio.Sync.V1, response: Response<string>, solution: object);

  /**
   * Build an instance of SyncMapPermissionInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: object);
}


declare class SyncMapPermissionInstance {
  /**
   * @constructor Twilio.Sync.V1.ServiceContext.SyncMapContext.SyncMapPermissionInstance
   * @description Initialize the SyncMapPermissionContext
   * PLEASE NOTE that this class contains beta products that are subject to change. Use them with caution.
   *
   * @property accountSid - Twilio Account SID.
   * @property serviceSid - Sync Service Instance SID.
   * @property mapSid - Sync Map SID.
   * @property identity - Identity of the user to whom the Sync Map Permission applies.
   * @property read - Read access.
   * @property write - Write access.
   * @property manage - Manage access.
   * @property url - URL of this Sync Map Permission.
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param serviceSid - Sync Service Instance SID.
   * @param mapSid - Sync Map SID.
   * @param identity - Identity of the user to whom the Sync Map Permission applies.
   */
  constructor(version: Twilio.Sync.V1, payload: object, serviceSid: sid, mapSid: sid, identity: string);

  _proxy?: SyncMapPermissionContext;
  /**
   * fetch a SyncMapPermissionInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * remove a SyncMapPermissionInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: function);
  /**
   * Produce a plain JSON object version of the SyncMapPermissionInstance for serialization.
   * Removes any circular references in the object.
   */
  toJSON();
  /**
   * update a SyncMapPermissionInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts: SyncMapPermissionInstanceUpdateOptions, callback?: function);
}


declare class SyncMapPermissionContext {
  /**
   * @constructor Twilio.Sync.V1.ServiceContext.SyncMapContext.SyncMapPermissionContext
   * @description Initialize the SyncMapPermissionContext
   * PLEASE NOTE that this class contains beta products that are subject to change. Use them with caution.
   *
   * @param version - Version of the resource
   * @param serviceSid - Sync Service Instance SID or unique name.
   * @param mapSid - Sync Map SID or unique name.
   * @param identity - Identity of the user to whom the Sync Map Permission applies.
   */
  constructor(version: Twilio.Sync.V1, serviceSid: sid_like, mapSid: sid_like, identity: string);

  /**
   * fetch a SyncMapPermissionInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * remove a SyncMapPermissionInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: function);
  /**
   * update a SyncMapPermissionInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts: SyncMapPermissionContextUpdateOptions, callback?: function);
}

export { SyncMapPermissionContext, SyncMapPermissionInstance, SyncMapPermissionList, SyncMapPermissionListInstance, SyncMapPermissionPage, SyncMapPermissionPayload, SyncMapPermissionResource, SyncMapPermissionSolution }
