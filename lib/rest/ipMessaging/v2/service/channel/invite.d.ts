/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../../base/Page');
import Response = require('../../../../../http/response');
import V2 = require('../../../V2');
import serialize = require('../../../../../base/serialize');
import { ListEachOptions, ListOptions, PageOptions } from '../../../../../interfaces';
import { SerializableClass } from '../../../../../interfaces';

/**
 * @description Initialize the InviteList
 *
 * @param version - Version of the resource
 * @param serviceSid - The unique id of the Service this member belongs to.
 * @param channelSid - The unique id of the Channel for this member.
 */
declare function InviteList(version: V2, serviceSid: string, channelSid: string): InviteListInstance;

interface InviteResource {
  account_sid: string;
  channel_sid: string;
  created_by: string;
  date_created: Date;
  date_updated: Date;
  identity: string;
  role_sid: string;
  service_sid: string;
  sid: string;
  url: string;
}

interface InvitePayload extends InviteResource, Page.TwilioResponsePayload {
}

interface InviteSolution {
  channelSid?: string;
  serviceSid?: string;
}

interface InviteListInstance {
  /**
   * @param sid - sid of instance
   */
  InviteListInstance(sid: string);
  /**
   * create a InviteInstance
   *
   * @function create
   * @memberof Twilio.IpMessaging.V2.ServiceContext.ChannelContext.InviteList
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle processed record
   */
  create(opts: object, callback?: function);
  /**
   * Streams InviteInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function each
   * @memberof Twilio.IpMessaging.V2.ServiceContext.ChannelContext.InviteList
   * @instance
   *
   * @param opts - ...
   * @param callback - Function to process each record
   */
  each(opts?: object, callback?: Function);
  /**
   * Constructs a invite
   *
   * @function get
   * @memberof Twilio.IpMessaging.V2.ServiceContext.ChannelContext.InviteList
   * @instance
   *
   * @param sid - The sid
   */
  get(sid: string);
  /**
   * Retrieve a single target page of InviteInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function getPage
   * @memberof Twilio.IpMessaging.V2.ServiceContext.ChannelContext.InviteList
   * @instance
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: function);
  /**
   * @description Lists InviteInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function list
   * @memberof Twilio.IpMessaging.V2.ServiceContext.ChannelContext.InviteList
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle list of records
   */
  list(opts?: object, callback?: function);
  /**
   * Retrieve a single page of InviteInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function page
   * @memberof Twilio.IpMessaging.V2.ServiceContext.ChannelContext.InviteList
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle list of records
   */
  page(opts?: object, callback?: function);
}


declare class InvitePage extends Page {
  /**
   * @constructor Twilio.IpMessaging.V2.ServiceContext.ChannelContext.InvitePage
   * @augments Page
   * @description Initialize the InvitePage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: Twilio.IpMessaging.V2, response: Response<string>, solution: object);

  /**
   * Build an instance of InviteInstance
   *
   * @function getInstance
   * @memberof Twilio.IpMessaging.V2.ServiceContext.ChannelContext.InvitePage
   * @instance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: object);
}


declare class InviteInstance {
  /**
   * @constructor Twilio.IpMessaging.V2.ServiceContext.ChannelContext.InviteInstance
   * @description Initialize the InviteContext
   *
   * @property sid - A 34 character string that uniquely identifies this resource.
   * @property accountSid - The unique id of the Account responsible for this member.
   * @property channelSid - The unique id of the Channel for this member.
   * @property serviceSid - The unique id of the Service this member belongs to.
   * @property identity - A unique string identifier for this User in this Service.
   * @property dateCreated - The date that this resource was created.
   * @property dateUpdated - The date that this resource was last updated.
   * @property roleSid - The Role assigned to this member.
   * @property createdBy - The created_by
   * @property url - An absolute URL for this member.
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param serviceSid - The unique id of the Service this member belongs to.
   * @param channelSid - The unique id of the Channel for this member.
   * @param sid - The sid
   */
  constructor(version: Twilio.IpMessaging.V2, payload: object, serviceSid: sid, channelSid: sid, sid: sid);

  _proxy?: InviteContext;
  /**
   * fetch a InviteInstance
   *
   * @function fetch
   * @memberof Twilio.IpMessaging.V2.ServiceContext.ChannelContext.InviteInstance
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * remove a InviteInstance
   *
   * @function remove
   * @memberof Twilio.IpMessaging.V2.ServiceContext.ChannelContext.InviteInstance
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: function);
  /**
   * Produce a plain JSON object version of the InviteInstance for serialization.
   * Removes any circular references in the object.
   *
   * @function toJSON
   * @memberof Twilio.IpMessaging.V2.ServiceContext.ChannelContext.InviteInstance
   * @instance
   */
  toJSON();
}


declare class InviteContext {
  /**
   * @constructor Twilio.IpMessaging.V2.ServiceContext.ChannelContext.InviteContext
   * @description Initialize the InviteContext
   *
   * @param version - Version of the resource
   * @param serviceSid - The service_sid
   * @param channelSid - The channel_sid
   * @param sid - The sid
   */
  constructor(version: Twilio.IpMessaging.V2, serviceSid: sid, channelSid: sid_like, sid: sid);

  /**
   * fetch a InviteInstance
   *
   * @function fetch
   * @memberof Twilio.IpMessaging.V2.ServiceContext.ChannelContext.InviteContext
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * remove a InviteInstance
   *
   * @function remove
   * @memberof Twilio.IpMessaging.V2.ServiceContext.ChannelContext.InviteContext
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: function);
}

export { InviteContext, InviteInstance, InviteList, InviteListInstance, InvitePage, InvitePayload, InviteResource, InviteSolution }
