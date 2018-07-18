/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../base/Page');
import Response = require('../../../../http/response');
import V2010 = require('../../V2010');
import serialize = require('../../../../base/serialize');
import { FeedbackList } from './message/feedback';
import { ListEachOptions, ListOptions, PageOptions } from '../../../../interfaces';
import { MediaList } from './message/media';
import { SerializableClass } from '../../../../interfaces';

/**
 * @description Initialize the MessageList
 *
 * @param version - Version of the resource
 * @param accountSid - The unique sid that identifies this account
 */
declare function MessageList(version: V2010, accountSid: string): MessageListInstance;

interface MessageResource {
  account_sid: string;
  api_version: string;
  body: string;
  date_created: Date;
  date_sent: Date;
  date_updated: Date;
  direction: MessageDirection;
  error_code: number;
  error_message: string;
  from: string;
  messaging_service_sid: string;
  num_media: string;
  num_segments: string;
  price: number;
  price_unit: string;
  sid: string;
  status: MessageStatus;
  subresource_uris: string;
  to: string;
  uri: string;
}

interface MessagePayload extends MessageResource, Page.TwilioResponsePayload {
}

interface MessageSolution {
  accountSid?: string;
}

interface MessageListInstance {
  /**
   * @param sid - sid of instance
   */
  MessageListInstance(sid: string);
  /**
   * create a MessageInstance
   *
   * @function create
   * @memberof Twilio.Api.V2010.AccountContext.MessageList
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle processed record
   */
  create(opts: object, callback?: function);
  /**
   * Streams MessageInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function each
   * @memberof Twilio.Api.V2010.AccountContext.MessageList
   * @instance
   *
   * @param opts - ...
   * @param callback - Function to process each record
   */
  each(opts?: object, callback?: Function);
  /**
   * Constructs a message
   *
   * @function get
   * @memberof Twilio.Api.V2010.AccountContext.MessageList
   * @instance
   *
   * @param sid - Fetch by unique message Sid
   */
  get(sid: string);
  /**
   * Retrieve a single target page of MessageInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function getPage
   * @memberof Twilio.Api.V2010.AccountContext.MessageList
   * @instance
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: function);
  /**
   * @description Lists MessageInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function list
   * @memberof Twilio.Api.V2010.AccountContext.MessageList
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle list of records
   */
  list(opts?: object, callback?: function);
  /**
   * Retrieve a single page of MessageInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function page
   * @memberof Twilio.Api.V2010.AccountContext.MessageList
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
 * @property body - The text of the message you want to send, limited to 1600 characters.
 */
export interface UpdateOptions {
  body: string;
}

/**
 * Options to pass to update
 *
 * @property body - The text of the message you want to send, limited to 1600 characters.
 */
export interface UpdateOptions {
  body: string;
}


declare class MessagePage extends Page {
  /**
   * @constructor Twilio.Api.V2010.AccountContext.MessagePage
   * @augments Page
   * @description Initialize the MessagePage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: Twilio.Api.V2010, response: Response<string>, solution: object);

  /**
   * Build an instance of MessageInstance
   *
   * @function getInstance
   * @memberof Twilio.Api.V2010.AccountContext.MessagePage
   * @instance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: object);
}


declare class MessageInstance {
  /**
   * @constructor Twilio.Api.V2010.AccountContext.MessageInstance
   * @description Initialize the MessageContext
   *
   * @property accountSid - The unique sid that identifies this account
   * @property apiVersion - The version of the Twilio API used to process the message.
   * @property body - The text body of the message. Up to 1600 characters long.
   * @property dateCreated - The date this resource was created
   * @property dateUpdated - The date this resource was last updated
   * @property dateSent - The date the message was sent
   * @property direction - The direction of the message
   * @property errorCode - The error code associated with the message
   * @property errorMessage - Human readable description of the ErrorCode
   * @property from - The phone number that initiated the message
   * @property messagingServiceSid - The unique id of the Messaging Service used with the message.
   * @property numMedia - Number of media files associated with the message
   * @property numSegments - Indicates number of messages used to delivery the body
   * @property price - The amount billed for the message
   * @property priceUnit - The currency in which Price is measured
   * @property sid - A string that uniquely identifies this message
   * @property status - The status of this message
   * @property subresourceUris - The URI for any subresources
   * @property to - The phone number that received the message
   * @property uri - The URI for this resource
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param accountSid - The unique sid that identifies this account
   * @param sid - Fetch by unique message Sid
   */
  constructor(version: Twilio.Api.V2010, payload: object, accountSid: sid, sid: sid);

  _proxy?: MessageContext;
  /**
   * Access the feedback
   *
   * @function feedback
   * @memberof Twilio.Api.V2010.AccountContext.MessageInstance
   * @instance
   */
  feedback();
  /**
   * fetch a MessageInstance
   *
   * @function fetch
   * @memberof Twilio.Api.V2010.AccountContext.MessageInstance
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * Access the media
   *
   * @function media
   * @memberof Twilio.Api.V2010.AccountContext.MessageInstance
   * @instance
   */
  media();
  /**
   * remove a MessageInstance
   *
   * @function remove
   * @memberof Twilio.Api.V2010.AccountContext.MessageInstance
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: function);
  /**
   * Produce a plain JSON object version of the MessageInstance for serialization.
   * Removes any circular references in the object.
   *
   * @function toJSON
   * @memberof Twilio.Api.V2010.AccountContext.MessageInstance
   * @instance
   */
  toJSON();
  /**
   * update a MessageInstance
   *
   * @function update
   * @memberof Twilio.Api.V2010.AccountContext.MessageInstance
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle processed record
   */
  update(opts: object, callback?: function);
}


declare class MessageContext {
  /**
   * @constructor Twilio.Api.V2010.AccountContext.MessageContext
   * @description Initialize the MessageContext
   *
   * @property media - media resource
   * @property feedback - feedback resource
   *
   * @param version - Version of the resource
   * @param accountSid - The account_sid
   * @param sid - Fetch by unique message Sid
   */
  constructor(version: Twilio.Api.V2010, accountSid: sid, sid: sid);

  feedback?: Twilio.Api.V2010.AccountContext.MessageContext.FeedbackList;
  /**
   * fetch a MessageInstance
   *
   * @function fetch
   * @memberof Twilio.Api.V2010.AccountContext.MessageContext
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  media?: Twilio.Api.V2010.AccountContext.MessageContext.MediaList;
  /**
   * remove a MessageInstance
   *
   * @function remove
   * @memberof Twilio.Api.V2010.AccountContext.MessageContext
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: function);
  /**
   * update a MessageInstance
   *
   * @function update
   * @memberof Twilio.Api.V2010.AccountContext.MessageContext
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle processed record
   */
  update(opts: object, callback?: function);
}

export { MessageContext, MessageInstance, MessageList, MessageListInstance, MessagePage, MessagePayload, MessageResource, MessageSolution }
