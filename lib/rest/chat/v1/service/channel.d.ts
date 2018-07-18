/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../base/Page');
import Response = require('../../../../http/response');
import V1 = require('../../V1');
import serialize = require('../../../../base/serialize');
import { InviteList } from './channel/invite';
import { ListEachOptions, ListOptions, PageOptions } from '../../../../interfaces';
import { MemberList } from './channel/member';
import { MessageList } from './channel/message';
import { SerializableClass } from '../../../../interfaces';

/**
 * @description Initialize the ChannelList
 *
 * @param version - Version of the resource
 * @param serviceSid - The unique id of the [Service][service] this channel belongs to.
 */
declare function ChannelList(version: V1, serviceSid: string): ChannelListInstance;

interface ChannelResource {
  account_sid: string;
  attributes: string;
  created_by: string;
  date_created: Date;
  date_updated: Date;
  friendly_name: string;
  links: string;
  members_count: number;
  messages_count: number;
  service_sid: string;
  sid: string;
  type: ChannelChannelType;
  unique_name: string;
  url: string;
}

interface ChannelPayload extends ChannelResource, Page.TwilioResponsePayload {
}

interface ChannelSolution {
  serviceSid?: string;
}

interface ChannelListInstance {
  /**
   * @param sid - sid of instance
   */
  ChannelListInstance(sid: string);
  /**
   * create a ChannelInstance
   *
   * @function create
   * @memberof Twilio.Chat.V1.ServiceContext.ChannelList
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle processed record
   */
  create(opts?: object, callback?: function);
  /**
   * Streams ChannelInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function each
   * @memberof Twilio.Chat.V1.ServiceContext.ChannelList
   * @instance
   *
   * @param opts - ...
   * @param callback - Function to process each record
   */
  each(opts?: object, callback?: Function);
  /**
   * Constructs a channel
   *
   * @function get
   * @memberof Twilio.Chat.V1.ServiceContext.ChannelList
   * @instance
   *
   * @param sid - The sid
   */
  get(sid: string);
  /**
   * Retrieve a single target page of ChannelInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function getPage
   * @memberof Twilio.Chat.V1.ServiceContext.ChannelList
   * @instance
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: function);
  /**
   * @description Lists ChannelInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function list
   * @memberof Twilio.Chat.V1.ServiceContext.ChannelList
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle list of records
   */
  list(opts?: object, callback?: function);
  /**
   * Retrieve a single page of ChannelInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function page
   * @memberof Twilio.Chat.V1.ServiceContext.ChannelList
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
 * @property friendlyName - A human-readable name for the Channel.
 * @property uniqueName - A unique, addressable name for the Channel.
 * @property attributes - An optional metadata field you can use to store any data you wish.
 */
export interface UpdateOptions {
  attributes?: string;
  friendlyName?: string;
  uniqueName?: string;
}

/**
 * Options to pass to update
 *
 * @property friendlyName - A human-readable name for the Channel.
 * @property uniqueName - A unique, addressable name for the Channel.
 * @property attributes - An optional metadata field you can use to store any data you wish.
 */
export interface UpdateOptions {
  attributes?: string;
  friendlyName?: string;
  uniqueName?: string;
}


declare class ChannelPage extends Page {
  /**
   * @constructor Twilio.Chat.V1.ServiceContext.ChannelPage
   * @augments Page
   * @description Initialize the ChannelPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: Twilio.Chat.V1, response: Response<string>, solution: object);

  /**
   * Build an instance of ChannelInstance
   *
   * @function getInstance
   * @memberof Twilio.Chat.V1.ServiceContext.ChannelPage
   * @instance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: object);
}


declare class ChannelInstance {
  /**
   * @constructor Twilio.Chat.V1.ServiceContext.ChannelInstance
   * @description Initialize the ChannelContext
   *
   * @property sid - A 34 character string that uniquely identifies this resource.
   * @property accountSid - The unique id of the [Account][/console] responsible for this channel.
   * @property serviceSid - The unique id of the [Service][service] this channel belongs to.
   * @property friendlyName - The human-readable name of this channel.
   * @property uniqueName - The unique, addressable name of this channel.
   * @property attributes - An optional string metadata field you can use to store any data you wish.
   * @property type - The visibility of this channel - either public or private
   * @property dateCreated - The date that this resource was created.
   * @property dateUpdated - The date that this resource was last updated.
   * @property createdBy - Identity of the channel's creator.
   * @property membersCount - The members_count
   * @property messagesCount - The messages_count
   * @property url - An absolute URL for this channel.
   * @property links - Absolute URLs to access the [Members][members] and [Messages][messages] for this channel.
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param serviceSid - The unique id of the [Service][service] this channel belongs to.
   * @param sid - The sid
   */
  constructor(version: Twilio.Chat.V1, payload: object, serviceSid: sid, sid: sid_like);

  _proxy?: ChannelContext;
  /**
   * fetch a ChannelInstance
   *
   * @function fetch
   * @memberof Twilio.Chat.V1.ServiceContext.ChannelInstance
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * Access the invites
   *
   * @function invites
   * @memberof Twilio.Chat.V1.ServiceContext.ChannelInstance
   * @instance
   */
  invites();
  /**
   * Access the members
   *
   * @function members
   * @memberof Twilio.Chat.V1.ServiceContext.ChannelInstance
   * @instance
   */
  members();
  /**
   * Access the messages
   *
   * @function messages
   * @memberof Twilio.Chat.V1.ServiceContext.ChannelInstance
   * @instance
   */
  messages();
  /**
   * remove a ChannelInstance
   *
   * @function remove
   * @memberof Twilio.Chat.V1.ServiceContext.ChannelInstance
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: function);
  /**
   * Produce a plain JSON object version of the ChannelInstance for serialization.
   * Removes any circular references in the object.
   *
   * @function toJSON
   * @memberof Twilio.Chat.V1.ServiceContext.ChannelInstance
   * @instance
   */
  toJSON();
  /**
   * update a ChannelInstance
   *
   * @function update
   * @memberof Twilio.Chat.V1.ServiceContext.ChannelInstance
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle processed record
   */
  update(opts?: object, callback?: function);
}


declare class ChannelContext {
  /**
   * @constructor Twilio.Chat.V1.ServiceContext.ChannelContext
   * @description Initialize the ChannelContext
   *
   * @property members - members resource
   * @property messages - messages resource
   * @property invites - invites resource
   *
   * @param version - Version of the resource
   * @param serviceSid - The service_sid
   * @param sid - The sid
   */
  constructor(version: Twilio.Chat.V1, serviceSid: sid, sid: sid_like);

  /**
   * fetch a ChannelInstance
   *
   * @function fetch
   * @memberof Twilio.Chat.V1.ServiceContext.ChannelContext
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  invites?: Twilio.Chat.V1.ServiceContext.ChannelContext.InviteList;
  members?: Twilio.Chat.V1.ServiceContext.ChannelContext.MemberList;
  messages?: Twilio.Chat.V1.ServiceContext.ChannelContext.MessageList;
  /**
   * remove a ChannelInstance
   *
   * @function remove
   * @memberof Twilio.Chat.V1.ServiceContext.ChannelContext
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: function);
  /**
   * update a ChannelInstance
   *
   * @function update
   * @memberof Twilio.Chat.V1.ServiceContext.ChannelContext
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle processed record
   */
  update(opts?: object, callback?: function);
}

export { ChannelContext, ChannelInstance, ChannelList, ChannelListInstance, ChannelPage, ChannelPayload, ChannelResource, ChannelSolution }
