/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../base/Page');
import Sync = require('../../Sync');
import deserialize = require('../../../../base/deserialize');
import values = require('../../../../base/values');
import { SyncMapItemList } from './syncMap/syncMapItem';
import { SyncMapPermissionList } from './syncMap/syncMapPermission';

/**
 * @constructor Twilio.Preview.Sync.ServiceContext.SyncMapList
 * @description Initialize the SyncMapList
 * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
 *
 * @param version - Version of the resource
 * @param serviceSid - The service_sid
 */
declare function SyncMapList(version: Sync, serviceSid: string): SyncMapListInstance;


declare class SyncMapPage extends Page {
  /**
   * @constructor Twilio.Preview.Sync.ServiceContext.SyncMapPage
   * @augments Page
   * @description Initialize the SyncMapPage
   * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: Twilio.Preview.Sync, response: object, solution: object);

  /**
   * Build an instance of SyncMapInstance
   *
   * @function getInstance
   * @memberof Twilio.Preview.Sync.ServiceContext.SyncMapPage
   * @instance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: object);
}


declare class SyncMapInstance {
  /**
   * @constructor Twilio.Preview.Sync.ServiceContext.SyncMapInstance
   * @description Initialize the SyncMapContext
   * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
   *
   * @property sid - The sid
   * @property uniqueName - The unique_name
   * @property accountSid - The account_sid
   * @property serviceSid - The service_sid
   * @property url - The url
   * @property links - The links
   * @property revision - The revision
   * @property dateCreated - The date_created
   * @property dateUpdated - The date_updated
   * @property createdBy - The created_by
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param serviceSid - The service_sid
   * @param sid - The sid
   */
  constructor(version: Twilio.Preview.Sync, payload: object, serviceSid: sid, sid: sid_like);

  _proxy?: SyncMapContext;
  /**
   * fetch a SyncMapInstance
   *
   * @function fetch
   * @memberof Twilio.Preview.Sync.ServiceContext.SyncMapInstance
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * remove a SyncMapInstance
   *
   * @function remove
   * @memberof Twilio.Preview.Sync.ServiceContext.SyncMapInstance
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: function);
  /**
   * Access the syncMapItems
   *
   * @function syncMapItems
   * @memberof Twilio.Preview.Sync.ServiceContext.SyncMapInstance
   * @instance
   */
  syncMapItems();
  /**
   * Access the syncMapPermissions
   *
   * @function syncMapPermissions
   * @memberof Twilio.Preview.Sync.ServiceContext.SyncMapInstance
   * @instance
   */
  syncMapPermissions();
  /**
   * Produce a plain JSON object version of the SyncMapInstance for serialization.
   * Removes any circular references in the object.
   *
   * @function toJSON
   * @memberof Twilio.Preview.Sync.ServiceContext.SyncMapInstance
   * @instance
   */
  toJSON();
}


declare class SyncMapContext {
  /**
   * @constructor Twilio.Preview.Sync.ServiceContext.SyncMapContext
   * @description Initialize the SyncMapContext
   * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
   *
   * @property syncMapItems - syncMapItems resource
   * @property syncMapPermissions - syncMapPermissions resource
   *
   * @param version - Version of the resource
   * @param serviceSid - The service_sid
   * @param sid - The sid
   */
  constructor(version: Twilio.Preview.Sync, serviceSid: sid, sid: sid_like);

  /**
   * fetch a SyncMapInstance
   *
   * @function fetch
   * @memberof Twilio.Preview.Sync.ServiceContext.SyncMapContext
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * remove a SyncMapInstance
   *
   * @function remove
   * @memberof Twilio.Preview.Sync.ServiceContext.SyncMapContext
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: function);
  syncMapItems?: Twilio.Preview.Sync.ServiceContext.SyncMapContext.SyncMapItemList;
  syncMapPermissions?: Twilio.Preview.Sync.ServiceContext.SyncMapContext.SyncMapPermissionList;
}

export { SyncMapContext, SyncMapInstance, SyncMapList, SyncMapPage }