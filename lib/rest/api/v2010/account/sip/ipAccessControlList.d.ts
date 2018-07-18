/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../../base/Page');
import Response = require('../../../../../http/response');
import V2010 = require('../../../V2010');
import { IpAddressList } from './ipAccessControlList/ipAddress';
import { ListEachOptions, ListOptions, PageOptions } from '../../../../../interfaces';
import { SerializableClass } from '../../../../../interfaces';

/**
 * @description Initialize the IpAccessControlListList
 *
 * @param version - Version of the resource
 * @param accountSid - A 34 character string that uniquely identifies this resource.
 */
declare function IpAccessControlListList(version: V2010, accountSid: string): IpAccessControlListListInstance;

interface IpAccessControlListResource {
  account_sid: string;
  date_created: Date;
  date_updated: Date;
  friendly_name: string;
  sid: string;
  subresource_uris: string;
  uri: string;
}

interface IpAccessControlListPayload extends IpAccessControlListResource, Page.TwilioResponsePayload {
}

interface IpAccessControlListSolution {
  accountSid?: string;
}

interface IpAccessControlListListInstance {
  /**
   * @param sid - sid of instance
   */
  IpAccessControlListListInstance(sid: string);
  /**
   * create a IpAccessControlListInstance
   *
   * @function create
   * @memberof Twilio.Api.V2010.AccountContext.SipContext.IpAccessControlListList
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle processed record
   */
  create(opts: object, callback?: function);
  /**
   * Streams IpAccessControlListInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function each
   * @memberof Twilio.Api.V2010.AccountContext.SipContext.IpAccessControlListList
   * @instance
   *
   * @param opts - ...
   * @param callback - Function to process each record
   */
  each(opts?: object, callback?: Function);
  /**
   * Constructs a ip_access_control_list
   *
   * @function get
   * @memberof Twilio.Api.V2010.AccountContext.SipContext.IpAccessControlListList
   * @instance
   *
   * @param sid - Fetch by unique ip-access-control-list Sid
   */
  get(sid: string);
  /**
   * Retrieve a single target page of IpAccessControlListInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function getPage
   * @memberof Twilio.Api.V2010.AccountContext.SipContext.IpAccessControlListList
   * @instance
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: function);
  /**
   * @description Lists IpAccessControlListInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function list
   * @memberof Twilio.Api.V2010.AccountContext.SipContext.IpAccessControlListList
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle list of records
   */
  list(opts?: object, callback?: function);
  /**
   * Retrieve a single page of IpAccessControlListInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function page
   * @memberof Twilio.Api.V2010.AccountContext.SipContext.IpAccessControlListList
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
 * @property friendlyName - A human readable description of this resource
 */
export interface UpdateOptions {
  friendlyName: string;
}

/**
 * Options to pass to update
 *
 * @property friendlyName - A human readable description of this resource
 */
export interface UpdateOptions {
  friendlyName: string;
}


declare class IpAccessControlListPage extends Page {
  /**
   * @constructor Twilio.Api.V2010.AccountContext.SipContext.IpAccessControlListPage
   * @augments Page
   * @description Initialize the IpAccessControlListPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: Twilio.Api.V2010, response: Response<string>, solution: object);

  /**
   * Build an instance of IpAccessControlListInstance
   *
   * @function getInstance
   * @memberof Twilio.Api.V2010.AccountContext.SipContext.IpAccessControlListPage
   * @instance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: object);
}


declare class IpAccessControlListInstance {
  /**
   * @constructor Twilio.Api.V2010.AccountContext.SipContext.IpAccessControlListInstance
   * @description Initialize the IpAccessControlListContext
   *
   * @property sid - A string that uniquely identifies this resource
   * @property accountSid - The unique sid that identifies this account
   * @property friendlyName - A human readable description of this resource
   * @property dateCreated - The date this resource was created
   * @property dateUpdated - The date this resource was last updated
   * @property subresourceUris - The subresource_uris
   * @property uri - The URI for this resource
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param accountSid - A 34 character string that uniquely identifies this resource.
   * @param sid - Fetch by unique ip-access-control-list Sid
   */
  constructor(version: Twilio.Api.V2010, payload: object, accountSid: sid, sid: sid);

  _proxy?: IpAccessControlListContext;
  /**
   * fetch a IpAccessControlListInstance
   *
   * @function fetch
   * @memberof Twilio.Api.V2010.AccountContext.SipContext.IpAccessControlListInstance
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * Access the ipAddresses
   *
   * @function ipAddresses
   * @memberof Twilio.Api.V2010.AccountContext.SipContext.IpAccessControlListInstance
   * @instance
   */
  ipAddresses();
  /**
   * remove a IpAccessControlListInstance
   *
   * @function remove
   * @memberof Twilio.Api.V2010.AccountContext.SipContext.IpAccessControlListInstance
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: function);
  /**
   * Produce a plain JSON object version of the IpAccessControlListInstance for serialization.
   * Removes any circular references in the object.
   *
   * @function toJSON
   * @memberof Twilio.Api.V2010.AccountContext.SipContext.IpAccessControlListInstance
   * @instance
   */
  toJSON();
  /**
   * update a IpAccessControlListInstance
   *
   * @function update
   * @memberof Twilio.Api.V2010.AccountContext.SipContext.IpAccessControlListInstance
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle processed record
   */
  update(opts: object, callback?: function);
}


declare class IpAccessControlListContext {
  /**
   * @constructor Twilio.Api.V2010.AccountContext.SipContext.IpAccessControlListContext
   * @description Initialize the IpAccessControlListContext
   *
   * @property ipAddresses - ipAddresses resource
   *
   * @param version - Version of the resource
   * @param accountSid - The account_sid
   * @param sid - Fetch by unique ip-access-control-list Sid
   */
  constructor(version: Twilio.Api.V2010, accountSid: sid, sid: sid);

  /**
   * fetch a IpAccessControlListInstance
   *
   * @function fetch
   * @memberof Twilio.Api.V2010.AccountContext.SipContext.IpAccessControlListContext
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  ipAddresses?: Twilio.Api.V2010.AccountContext.SipContext.IpAccessControlListContext.IpAddressList;
  /**
   * remove a IpAccessControlListInstance
   *
   * @function remove
   * @memberof Twilio.Api.V2010.AccountContext.SipContext.IpAccessControlListContext
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: function);
  /**
   * update a IpAccessControlListInstance
   *
   * @function update
   * @memberof Twilio.Api.V2010.AccountContext.SipContext.IpAccessControlListContext
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle processed record
   */
  update(opts: object, callback?: function);
}

export { IpAccessControlListContext, IpAccessControlListInstance, IpAccessControlListList, IpAccessControlListListInstance, IpAccessControlListPage, IpAccessControlListPayload, IpAccessControlListResource, IpAccessControlListSolution }
