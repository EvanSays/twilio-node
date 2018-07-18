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
import { ListEachOptions, ListOptions, PageOptions } from '../../../../../interfaces';
import { SerializableClass } from '../../../../../interfaces';

/**
 * @description Initialize the SyncListPermissionList
 * PLEASE NOTE that this class contains beta products that are subject to change. Use them with caution.
 *
 * @param version - Version of the resource
 * @param serviceSid - Sync Service Instance SID.
 * @param listSid - Sync List SID.
 */
declare function SyncListPermissionList(version: V1, serviceSid: string, listSid: string): SyncListPermissionListInstance;

interface SyncListPermissionResource {
  account_sid: string;
  identity: string;
  list_sid: string;
  manage: boolean;
  read: boolean;
  service_sid: string;
  url: string;
  write: boolean;
}

interface SyncListPermissionPayload extends SyncListPermissionResource, Page.TwilioResponsePayload {
}

interface SyncListPermissionSolution {
  listSid?: string;
  serviceSid?: string;
}

interface SyncListPermissionListInstance {
  /**
   * @param sid - sid of instance
   */
  SyncListPermissionListInstance(sid: string);
  /**
   * Streams SyncListPermissionInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function each
   * @memberof Twilio.Sync.V1.ServiceContext.SyncListContext.SyncListPermissionList
   * @instance
   *
   * @param opts - ...
   * @param callback - Function to process each record
   */
  each(opts?: object, callback?: Function);
  /**
   * Constructs a sync_list_permission
   *
   * @function get
   * @memberof Twilio.Sync.V1.ServiceContext.SyncListContext.SyncListPermissionList
   * @instance
   *
   * @param identity - Identity of the user to whom the Sync List Permission applies.
   */
  get(identity: string);
  /**
   * Retrieve a single target page of SyncListPermissionInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function getPage
   * @memberof Twilio.Sync.V1.ServiceContext.SyncListContext.SyncListPermissionList
   * @instance
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: function);
  /**
   * @description Lists SyncListPermissionInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function list
   * @memberof Twilio.Sync.V1.ServiceContext.SyncListContext.SyncListPermissionList
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle list of records
   */
  list(opts?: object, callback?: function);
  /**
   * Retrieve a single page of SyncListPermissionInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function page
   * @memberof Twilio.Sync.V1.ServiceContext.SyncListContext.SyncListPermissionList
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
 * @property read - Read access.
 * @property write - Write access.
 * @property manage - Manage access.
 */
export interface UpdateOptions {
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
export interface UpdateOptions {
  manage: boolean;
  read: boolean;
  write: boolean;
}


declare class SyncListPermissionPage extends Page {
  /**
   * @constructor Twilio.Sync.V1.ServiceContext.SyncListContext.SyncListPermissionPage
   * @augments Page
   * @description Initialize the SyncListPermissionPage
   * PLEASE NOTE that this class contains beta products that are subject to change. Use them with caution.
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: Twilio.Sync.V1, response: Response<string>, solution: object);

  /**
   * Build an instance of SyncListPermissionInstance
   *
   * @function getInstance
   * @memberof Twilio.Sync.V1.ServiceContext.SyncListContext.SyncListPermissionPage
   * @instance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: object);
}


declare class SyncListPermissionInstance {
  /**
   * @constructor Twilio.Sync.V1.ServiceContext.SyncListContext.SyncListPermissionInstance
   * @description Initialize the SyncListPermissionContext
   * PLEASE NOTE that this class contains beta products that are subject to change. Use them with caution.
   *
   * @property accountSid - Twilio Account SID.
   * @property serviceSid - Sync Service Instance SID.
   * @property listSid - Sync List SID.
   * @property identity - Identity of the user to whom the Sync List Permission applies.
   * @property read - Read access.
   * @property write - Write access.
   * @property manage - Manage access.
   * @property url - URL of this Sync List Permission.
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param serviceSid - Sync Service Instance SID.
   * @param listSid - Sync List SID.
   * @param identity - Identity of the user to whom the Sync List Permission applies.
   */
  constructor(version: Twilio.Sync.V1, payload: object, serviceSid: sid, listSid: sid, identity: string);

  _proxy?: SyncListPermissionContext;
  /**
   * fetch a SyncListPermissionInstance
   *
   * @function fetch
   * @memberof Twilio.Sync.V1.ServiceContext.SyncListContext.SyncListPermissionInstance
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * remove a SyncListPermissionInstance
   *
   * @function remove
   * @memberof Twilio.Sync.V1.ServiceContext.SyncListContext.SyncListPermissionInstance
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: function);
  /**
   * Produce a plain JSON object version of the SyncListPermissionInstance for serialization.
   * Removes any circular references in the object.
   *
   * @function toJSON
   * @memberof Twilio.Sync.V1.ServiceContext.SyncListContext.SyncListPermissionInstance
   * @instance
   */
  toJSON();
  /**
   * update a SyncListPermissionInstance
   *
   * @function update
   * @memberof Twilio.Sync.V1.ServiceContext.SyncListContext.SyncListPermissionInstance
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle processed record
   */
  update(opts: object, callback?: function);
}


declare class SyncListPermissionContext {
  /**
   * @constructor Twilio.Sync.V1.ServiceContext.SyncListContext.SyncListPermissionContext
   * @description Initialize the SyncListPermissionContext
   * PLEASE NOTE that this class contains beta products that are subject to change. Use them with caution.
   *
   * @param version - Version of the resource
   * @param serviceSid - Sync Service Instance SID or unique name.
   * @param listSid - Sync List SID or unique name.
   * @param identity - Identity of the user to whom the Sync List Permission applies.
   */
  constructor(version: Twilio.Sync.V1, serviceSid: sid_like, listSid: sid_like, identity: string);

  /**
   * fetch a SyncListPermissionInstance
   *
   * @function fetch
   * @memberof Twilio.Sync.V1.ServiceContext.SyncListContext.SyncListPermissionContext
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * remove a SyncListPermissionInstance
   *
   * @function remove
   * @memberof Twilio.Sync.V1.ServiceContext.SyncListContext.SyncListPermissionContext
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: function);
  /**
   * update a SyncListPermissionInstance
   *
   * @function update
   * @memberof Twilio.Sync.V1.ServiceContext.SyncListContext.SyncListPermissionContext
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle processed record
   */
  update(opts: object, callback?: function);
}

export { SyncListPermissionContext, SyncListPermissionInstance, SyncListPermissionList, SyncListPermissionListInstance, SyncListPermissionPage, SyncListPermissionPayload, SyncListPermissionResource, SyncListPermissionSolution }
