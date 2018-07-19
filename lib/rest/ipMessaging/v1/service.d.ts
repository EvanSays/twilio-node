/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../base/Page');
import Response = require('../../../http/response');
import V1 = require('../V1');
import serialize = require('../../../base/serialize');
import { ChannelList } from './service/channel';
import { RoleList } from './service/role';
import { SerializableClass } from '../../../interfaces';
import { UserList } from './service/user';

/**
 * @description Initialize the ServiceList
 *
 * @param version - Version of the resource
 */
declare function ServiceList(version: V1): ServiceListInstance;

interface ServiceResource {
  account_sid: string;
  consumption_report_interval: number;
  date_created: Date;
  date_updated: Date;
  default_channel_creator_role_sid: string;
  default_channel_role_sid: string;
  default_service_role_sid: string;
  friendly_name: string;
  limits: string;
  links: string;
  notifications: string;
  post_webhook_url: string;
  pre_webhook_url: string;
  reachability_enabled: boolean;
  read_status_enabled: boolean;
  sid: string;
  typing_indicator_timeout: number;
  url: string;
  webhook_filters: string;
  webhook_method: string;
  webhooks: string;
}

interface ServicePayload extends ServiceResource, Page.TwilioResponsePayload {
}

interface ServiceSolution {
}

interface ServiceListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): ServiceContext;
  /**
   * create a ServiceInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  create(opts: ServiceListInstanceCreateOptions, callback?: function);
  /**
   * Streams ServiceInstance records from the API.
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
  each(opts?: ServiceListInstanceEachOptions, callback?: Function);
  /**
   * Constructs a service
   *
   * @param sid - The sid
   */
  get(sid: string);
  /**
   * Retrieve a single target page of ServiceInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: function);
  /**
   * @description Lists ServiceInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  list(opts?: ServiceListInstanceOptions, callback?: function);
  /**
   * Retrieve a single page of ServiceInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  page(opts?: ServiceListInstancePageOptions, callback?: function);
}

/**
 * Options to pass to update
 *
 * @property friendlyName - Human-readable name for this service instance
 * @property defaultServiceRoleSid - The default_service_role_sid
 * @property defaultChannelRoleSid - Channel role assigned on channel join
 * @property defaultChannelCreatorRoleSid - Channel role assigned to creator of channel when joining for first time
 * @property readStatusEnabled - true if the member read status feature is enabled, false if not.
 * @property reachabilityEnabled - true if the reachability feature should be enabled.
 * @property typingIndicatorTimeout - ISO 8601 duration indicating the timeout after "started typing" event when client should assume that user is not typing anymore even if no "ended typing" message received
 * @property consumptionReportInterval - ISO 8601 duration indicating the interval between consumption reports sent from client endpoints.
 * @property notifications.newMessage.enabled - The notifications.new_message.enabled
 * @property notifications.newMessage.template - The notifications.new_message.template
 * @property notifications.addedToChannel.enabled - The notifications.added_to_channel.enabled
 * @property notifications.addedToChannel.template - The notifications.added_to_channel.template
 * @property notifications.removedFromChannel.enabled - The notifications.removed_from_channel.enabled
 * @property notifications.removedFromChannel.template - The notifications.removed_from_channel.template
 * @property notifications.invitedToChannel.enabled - The notifications.invited_to_channel.enabled
 * @property notifications.invitedToChannel.template - The notifications.invited_to_channel.template
 * @property preWebhookUrl - The webhook URL for PRE-Event webhooks.
 * @property postWebhookUrl - The webhook URL for POST-Event webhooks.
 * @property webhookMethod - The webhook request format to use.
 * @property webhookFilters - The list of WebHook events that are enabled for this Service instance.
 * @property webhooks.onMessageSend.url - The webhooks.on_message_send.url
 * @property webhooks.onMessageSend.method - The webhooks.on_message_send.method
 * @property webhooks.onMessageSend.format - The webhooks.on_message_send.format
 * @property webhooks.onMessageUpdate.url - The webhooks.on_message_update.url
 * @property webhooks.onMessageUpdate.method - The webhooks.on_message_update.method
 * @property webhooks.onMessageUpdate.format - The webhooks.on_message_update.format
 * @property webhooks.onMessageRemove.url - The webhooks.on_message_remove.url
 * @property webhooks.onMessageRemove.method - The webhooks.on_message_remove.method
 * @property webhooks.onMessageRemove.format - The webhooks.on_message_remove.format
 * @property webhooks.onChannelAdd.url - The webhooks.on_channel_add.url
 * @property webhooks.onChannelAdd.method - The webhooks.on_channel_add.method
 * @property webhooks.onChannelAdd.format - The webhooks.on_channel_add.format
 * @property webhooks.onChannelDestroy.url - The webhooks.on_channel_destroy.url
 * @property webhooks.onChannelDestroy.method - The webhooks.on_channel_destroy.method
 * @property webhooks.onChannelDestroy.format - The webhooks.on_channel_destroy.format
 * @property webhooks.onChannelUpdate.url - The webhooks.on_channel_update.url
 * @property webhooks.onChannelUpdate.method - The webhooks.on_channel_update.method
 * @property webhooks.onChannelUpdate.format - The webhooks.on_channel_update.format
 * @property webhooks.onMemberAdd.url - The webhooks.on_member_add.url
 * @property webhooks.onMemberAdd.method - The webhooks.on_member_add.method
 * @property webhooks.onMemberAdd.format - The webhooks.on_member_add.format
 * @property webhooks.onMemberRemove.url - The webhooks.on_member_remove.url
 * @property webhooks.onMemberRemove.method - The webhooks.on_member_remove.method
 * @property webhooks.onMemberRemove.format - The webhooks.on_member_remove.format
 * @property webhooks.onMessageSent.url - The webhooks.on_message_sent.url
 * @property webhooks.onMessageSent.method - The webhooks.on_message_sent.method
 * @property webhooks.onMessageSent.format - The webhooks.on_message_sent.format
 * @property webhooks.onMessageUpdated.url - The webhooks.on_message_updated.url
 * @property webhooks.onMessageUpdated.method - The webhooks.on_message_updated.method
 * @property webhooks.onMessageUpdated.format - The webhooks.on_message_updated.format
 * @property webhooks.onMessageRemoved.url - The webhooks.on_message_removed.url
 * @property webhooks.onMessageRemoved.method - The webhooks.on_message_removed.method
 * @property webhooks.onMessageRemoved.format - The webhooks.on_message_removed.format
 * @property webhooks.onChannelAdded.url - The webhooks.on_channel_added.url
 * @property webhooks.onChannelAdded.method - The webhooks.on_channel_added.method
 * @property webhooks.onChannelAdded.format - The webhooks.on_channel_added.format
 * @property webhooks.onChannelDestroyed.url - The webhooks.on_channel_destroyed.url
 * @property webhooks.onChannelDestroyed.method - The webhooks.on_channel_destroyed.method
 * @property webhooks.onChannelDestroyed.format - The webhooks.on_channel_destroyed.format
 * @property webhooks.onChannelUpdated.url - The webhooks.on_channel_updated.url
 * @property webhooks.onChannelUpdated.method - The webhooks.on_channel_updated.method
 * @property webhooks.onChannelUpdated.format - The webhooks.on_channel_updated.format
 * @property webhooks.onMemberAdded.url - The webhooks.on_member_added.url
 * @property webhooks.onMemberAdded.method - The webhooks.on_member_added.method
 * @property webhooks.onMemberAdded.format - The webhooks.on_member_added.format
 * @property webhooks.onMemberRemoved.url - The webhooks.on_member_removed.url
 * @property webhooks.onMemberRemoved.method - The webhooks.on_member_removed.method
 * @property webhooks.onMemberRemoved.format - The webhooks.on_member_removed.format
 * @property limits.channelMembers - The limits.channel_members
 * @property limits.userChannels - The limits.user_channels
 */
export interface ServiceInstanceUpdateOptions {
  consumptionReportInterval?: number;
  defaultChannelCreatorRoleSid?: string;
  defaultChannelRoleSid?: string;
  defaultServiceRoleSid?: string;
  friendlyName?: string;
  limits.channelMembers?: number;
  limits.userChannels?: number;
  notifications.addedToChannel.enabled?: boolean;
  notifications.addedToChannel.template?: string;
  notifications.invitedToChannel.enabled?: boolean;
  notifications.invitedToChannel.template?: string;
  notifications.newMessage.enabled?: boolean;
  notifications.newMessage.template?: string;
  notifications.removedFromChannel.enabled?: boolean;
  notifications.removedFromChannel.template?: string;
  postWebhookUrl?: string;
  preWebhookUrl?: string;
  reachabilityEnabled?: boolean;
  readStatusEnabled?: boolean;
  typingIndicatorTimeout?: number;
  webhookFilters?: string|list;
  webhookMethod?: string;
  webhooks.onChannelAdd.format?: string;
  webhooks.onChannelAdd.method?: string;
  webhooks.onChannelAdd.url?: string;
  webhooks.onChannelAdded.format?: string;
  webhooks.onChannelAdded.method?: string;
  webhooks.onChannelAdded.url?: string;
  webhooks.onChannelDestroy.format?: string;
  webhooks.onChannelDestroy.method?: string;
  webhooks.onChannelDestroy.url?: string;
  webhooks.onChannelDestroyed.format?: string;
  webhooks.onChannelDestroyed.method?: string;
  webhooks.onChannelDestroyed.url?: string;
  webhooks.onChannelUpdate.format?: string;
  webhooks.onChannelUpdate.method?: string;
  webhooks.onChannelUpdate.url?: string;
  webhooks.onChannelUpdated.format?: string;
  webhooks.onChannelUpdated.method?: string;
  webhooks.onChannelUpdated.url?: string;
  webhooks.onMemberAdd.format?: string;
  webhooks.onMemberAdd.method?: string;
  webhooks.onMemberAdd.url?: string;
  webhooks.onMemberAdded.format?: string;
  webhooks.onMemberAdded.method?: string;
  webhooks.onMemberAdded.url?: string;
  webhooks.onMemberRemove.format?: string;
  webhooks.onMemberRemove.method?: string;
  webhooks.onMemberRemove.url?: string;
  webhooks.onMemberRemoved.format?: string;
  webhooks.onMemberRemoved.method?: string;
  webhooks.onMemberRemoved.url?: string;
  webhooks.onMessageRemove.format?: string;
  webhooks.onMessageRemove.method?: string;
  webhooks.onMessageRemove.url?: string;
  webhooks.onMessageRemoved.format?: string;
  webhooks.onMessageRemoved.method?: string;
  webhooks.onMessageRemoved.url?: string;
  webhooks.onMessageSend.format?: string;
  webhooks.onMessageSend.method?: string;
  webhooks.onMessageSend.url?: string;
  webhooks.onMessageSent.format?: string;
  webhooks.onMessageSent.method?: string;
  webhooks.onMessageSent.url?: string;
  webhooks.onMessageUpdate.format?: string;
  webhooks.onMessageUpdate.method?: string;
  webhooks.onMessageUpdate.url?: string;
  webhooks.onMessageUpdated.format?: string;
  webhooks.onMessageUpdated.method?: string;
  webhooks.onMessageUpdated.url?: string;
}

/**
 * Options to pass to update
 *
 * @property friendlyName - Human-readable name for this service instance
 * @property defaultServiceRoleSid - The default_service_role_sid
 * @property defaultChannelRoleSid - Channel role assigned on channel join
 * @property defaultChannelCreatorRoleSid - Channel role assigned to creator of channel when joining for first time
 * @property readStatusEnabled - true if the member read status feature is enabled, false if not.
 * @property reachabilityEnabled - true if the reachability feature should be enabled.
 * @property typingIndicatorTimeout - ISO 8601 duration indicating the timeout after "started typing" event when client should assume that user is not typing anymore even if no "ended typing" message received
 * @property consumptionReportInterval - ISO 8601 duration indicating the interval between consumption reports sent from client endpoints.
 * @property notifications.newMessage.enabled - The notifications.new_message.enabled
 * @property notifications.newMessage.template - The notifications.new_message.template
 * @property notifications.addedToChannel.enabled - The notifications.added_to_channel.enabled
 * @property notifications.addedToChannel.template - The notifications.added_to_channel.template
 * @property notifications.removedFromChannel.enabled - The notifications.removed_from_channel.enabled
 * @property notifications.removedFromChannel.template - The notifications.removed_from_channel.template
 * @property notifications.invitedToChannel.enabled - The notifications.invited_to_channel.enabled
 * @property notifications.invitedToChannel.template - The notifications.invited_to_channel.template
 * @property preWebhookUrl - The webhook URL for PRE-Event webhooks.
 * @property postWebhookUrl - The webhook URL for POST-Event webhooks.
 * @property webhookMethod - The webhook request format to use.
 * @property webhookFilters - The list of WebHook events that are enabled for this Service instance.
 * @property webhooks.onMessageSend.url - The webhooks.on_message_send.url
 * @property webhooks.onMessageSend.method - The webhooks.on_message_send.method
 * @property webhooks.onMessageSend.format - The webhooks.on_message_send.format
 * @property webhooks.onMessageUpdate.url - The webhooks.on_message_update.url
 * @property webhooks.onMessageUpdate.method - The webhooks.on_message_update.method
 * @property webhooks.onMessageUpdate.format - The webhooks.on_message_update.format
 * @property webhooks.onMessageRemove.url - The webhooks.on_message_remove.url
 * @property webhooks.onMessageRemove.method - The webhooks.on_message_remove.method
 * @property webhooks.onMessageRemove.format - The webhooks.on_message_remove.format
 * @property webhooks.onChannelAdd.url - The webhooks.on_channel_add.url
 * @property webhooks.onChannelAdd.method - The webhooks.on_channel_add.method
 * @property webhooks.onChannelAdd.format - The webhooks.on_channel_add.format
 * @property webhooks.onChannelDestroy.url - The webhooks.on_channel_destroy.url
 * @property webhooks.onChannelDestroy.method - The webhooks.on_channel_destroy.method
 * @property webhooks.onChannelDestroy.format - The webhooks.on_channel_destroy.format
 * @property webhooks.onChannelUpdate.url - The webhooks.on_channel_update.url
 * @property webhooks.onChannelUpdate.method - The webhooks.on_channel_update.method
 * @property webhooks.onChannelUpdate.format - The webhooks.on_channel_update.format
 * @property webhooks.onMemberAdd.url - The webhooks.on_member_add.url
 * @property webhooks.onMemberAdd.method - The webhooks.on_member_add.method
 * @property webhooks.onMemberAdd.format - The webhooks.on_member_add.format
 * @property webhooks.onMemberRemove.url - The webhooks.on_member_remove.url
 * @property webhooks.onMemberRemove.method - The webhooks.on_member_remove.method
 * @property webhooks.onMemberRemove.format - The webhooks.on_member_remove.format
 * @property webhooks.onMessageSent.url - The webhooks.on_message_sent.url
 * @property webhooks.onMessageSent.method - The webhooks.on_message_sent.method
 * @property webhooks.onMessageSent.format - The webhooks.on_message_sent.format
 * @property webhooks.onMessageUpdated.url - The webhooks.on_message_updated.url
 * @property webhooks.onMessageUpdated.method - The webhooks.on_message_updated.method
 * @property webhooks.onMessageUpdated.format - The webhooks.on_message_updated.format
 * @property webhooks.onMessageRemoved.url - The webhooks.on_message_removed.url
 * @property webhooks.onMessageRemoved.method - The webhooks.on_message_removed.method
 * @property webhooks.onMessageRemoved.format - The webhooks.on_message_removed.format
 * @property webhooks.onChannelAdded.url - The webhooks.on_channel_added.url
 * @property webhooks.onChannelAdded.method - The webhooks.on_channel_added.method
 * @property webhooks.onChannelAdded.format - The webhooks.on_channel_added.format
 * @property webhooks.onChannelDestroyed.url - The webhooks.on_channel_destroyed.url
 * @property webhooks.onChannelDestroyed.method - The webhooks.on_channel_destroyed.method
 * @property webhooks.onChannelDestroyed.format - The webhooks.on_channel_destroyed.format
 * @property webhooks.onChannelUpdated.url - The webhooks.on_channel_updated.url
 * @property webhooks.onChannelUpdated.method - The webhooks.on_channel_updated.method
 * @property webhooks.onChannelUpdated.format - The webhooks.on_channel_updated.format
 * @property webhooks.onMemberAdded.url - The webhooks.on_member_added.url
 * @property webhooks.onMemberAdded.method - The webhooks.on_member_added.method
 * @property webhooks.onMemberAdded.format - The webhooks.on_member_added.format
 * @property webhooks.onMemberRemoved.url - The webhooks.on_member_removed.url
 * @property webhooks.onMemberRemoved.method - The webhooks.on_member_removed.method
 * @property webhooks.onMemberRemoved.format - The webhooks.on_member_removed.format
 * @property limits.channelMembers - The limits.channel_members
 * @property limits.userChannels - The limits.user_channels
 */
export interface ServiceContextUpdateOptions {
  consumptionReportInterval?: number;
  defaultChannelCreatorRoleSid?: string;
  defaultChannelRoleSid?: string;
  defaultServiceRoleSid?: string;
  friendlyName?: string;
  limits.channelMembers?: number;
  limits.userChannels?: number;
  notifications.addedToChannel.enabled?: boolean;
  notifications.addedToChannel.template?: string;
  notifications.invitedToChannel.enabled?: boolean;
  notifications.invitedToChannel.template?: string;
  notifications.newMessage.enabled?: boolean;
  notifications.newMessage.template?: string;
  notifications.removedFromChannel.enabled?: boolean;
  notifications.removedFromChannel.template?: string;
  postWebhookUrl?: string;
  preWebhookUrl?: string;
  reachabilityEnabled?: boolean;
  readStatusEnabled?: boolean;
  typingIndicatorTimeout?: number;
  webhookFilters?: string|list;
  webhookMethod?: string;
  webhooks.onChannelAdd.format?: string;
  webhooks.onChannelAdd.method?: string;
  webhooks.onChannelAdd.url?: string;
  webhooks.onChannelAdded.format?: string;
  webhooks.onChannelAdded.method?: string;
  webhooks.onChannelAdded.url?: string;
  webhooks.onChannelDestroy.format?: string;
  webhooks.onChannelDestroy.method?: string;
  webhooks.onChannelDestroy.url?: string;
  webhooks.onChannelDestroyed.format?: string;
  webhooks.onChannelDestroyed.method?: string;
  webhooks.onChannelDestroyed.url?: string;
  webhooks.onChannelUpdate.format?: string;
  webhooks.onChannelUpdate.method?: string;
  webhooks.onChannelUpdate.url?: string;
  webhooks.onChannelUpdated.format?: string;
  webhooks.onChannelUpdated.method?: string;
  webhooks.onChannelUpdated.url?: string;
  webhooks.onMemberAdd.format?: string;
  webhooks.onMemberAdd.method?: string;
  webhooks.onMemberAdd.url?: string;
  webhooks.onMemberAdded.format?: string;
  webhooks.onMemberAdded.method?: string;
  webhooks.onMemberAdded.url?: string;
  webhooks.onMemberRemove.format?: string;
  webhooks.onMemberRemove.method?: string;
  webhooks.onMemberRemove.url?: string;
  webhooks.onMemberRemoved.format?: string;
  webhooks.onMemberRemoved.method?: string;
  webhooks.onMemberRemoved.url?: string;
  webhooks.onMessageRemove.format?: string;
  webhooks.onMessageRemove.method?: string;
  webhooks.onMessageRemove.url?: string;
  webhooks.onMessageRemoved.format?: string;
  webhooks.onMessageRemoved.method?: string;
  webhooks.onMessageRemoved.url?: string;
  webhooks.onMessageSend.format?: string;
  webhooks.onMessageSend.method?: string;
  webhooks.onMessageSend.url?: string;
  webhooks.onMessageSent.format?: string;
  webhooks.onMessageSent.method?: string;
  webhooks.onMessageSent.url?: string;
  webhooks.onMessageUpdate.format?: string;
  webhooks.onMessageUpdate.method?: string;
  webhooks.onMessageUpdate.url?: string;
  webhooks.onMessageUpdated.format?: string;
  webhooks.onMessageUpdated.method?: string;
  webhooks.onMessageUpdated.url?: string;
}

/**
 * Options to pass to create
 *
 * @property friendlyName - Human-readable name for this service instance
 */
export interface ServiceListInstanceCreateOptions {
  friendlyName: string;
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
export interface ServiceListInstanceEachOptions {
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
export interface ServiceListInstanceOptions {
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
export interface ServiceListInstancePageOptions {
  pageNumber?: number;
  pageSize?: number;
  pageToken?: string;
}


declare class ServicePage extends Page {
  /**
   * @constructor Twilio.IpMessaging.V1.ServicePage
   * @augments Page
   * @description Initialize the ServicePage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: Twilio.IpMessaging.V1, response: Response<string>, solution: object);

  /**
   * Build an instance of ServiceInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: object);
}


declare class ServiceInstance {
  /**
   * @constructor Twilio.IpMessaging.V1.ServiceInstance
   * @description Initialize the ServiceContext
   *
   * @property sid - A 34 character string that uniquely identifies this resource.
   * @property accountSid - The unique id of the Account responsible for this service.
   * @property friendlyName - The human-readable name of this service.
   * @property dateCreated - The date that this resource was created
   * @property dateUpdated - The date that this resource was last updated
   * @property defaultServiceRoleSid - The service role assigned to users when they are added to the service.
   * @property defaultChannelRoleSid - The channel role assigned to users when they are added to a channel.
   * @property defaultChannelCreatorRoleSid - The channel role assigned to a channel creator when joining a new channel.
   * @property readStatusEnabled - Enable the Message Constumption Horizon feature.
   * @property reachabilityEnabled - Indicates whether the  the Reachability feature is enabled for this Service instance.
   * @property typingIndicatorTimeout - The amount of time after a "started typing" event when clients should assume that user is no longer typing, even if no "ended typing" message was received.
   * @property consumptionReportInterval - The interval between consumption reports submission batches from client endpoints.
   * @property limits - The limits
   * @property webhooks - The webhooks
   * @property preWebhookUrl - The webhook URL for PRE-Event webhooks.
   * @property postWebhookUrl - The webhook URL for POST-Event webhooks.
   * @property webhookMethod - The webhook request format to use.
   * @property webhookFilters - The list of WebHook events that are enabled for this Service instance.
   * @property notifications - Notification configuration for the Service instance.
   * @property url - An absolute URL for this service.
   * @property links - URLs to access the Channels, Roles, and Users for this service.
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param sid - The sid
   */
  constructor(version: Twilio.IpMessaging.V1, payload: object, sid: sid);

  _proxy?: ServiceContext;
  /**
   * Access the channels
   */
  channels();
  /**
   * fetch a ServiceInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * remove a ServiceInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: function);
  /**
   * Access the roles
   */
  roles();
  /**
   * Produce a plain JSON object version of the ServiceInstance for serialization.
   * Removes any circular references in the object.
   */
  toJSON();
  /**
   * update a ServiceInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts?: ServiceInstanceUpdateOptions, callback?: function);
  /**
   * Access the users
   */
  users();
}


declare class ServiceContext {
  /**
   * @constructor Twilio.IpMessaging.V1.ServiceContext
   * @description Initialize the ServiceContext
   *
   * @property channels - channels resource
   * @property roles - roles resource
   * @property users - users resource
   *
   * @param version - Version of the resource
   * @param sid - The sid
   */
  constructor(version: Twilio.IpMessaging.V1, sid: sid);

  channels?: Twilio.IpMessaging.V1.ServiceContext.ChannelList;
  /**
   * fetch a ServiceInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * remove a ServiceInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: function);
  roles?: Twilio.IpMessaging.V1.ServiceContext.RoleList;
  /**
   * update a ServiceInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts?: ServiceContextUpdateOptions, callback?: function);
  users?: Twilio.IpMessaging.V1.ServiceContext.UserList;
}

export { ServiceContext, ServiceInstance, ServiceList, ServiceListInstance, ServicePage, ServicePayload, ServiceResource, ServiceSolution }
