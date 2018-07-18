/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../../base/Page');
import Proxy = require('../../../Proxy');
import Response = require('../../../../../http/response');
import { ListEachOptions, ListOptions, PageOptions } from '../../../../../interfaces';
import { SerializableClass } from '../../../../../interfaces';

/**
 * @description Initialize the InteractionList
 * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
 *
 * @param version - Version of the resource
 * @param serviceSid - Service Sid.
 * @param sessionSid - Session Sid.
 */
declare function InteractionList(version: Proxy, serviceSid: string, sessionSid: string): InteractionListInstance;

interface InteractionResource {
  account_sid: string;
  data: string;
  date_created: Date;
  date_updated: Date;
  inbound_participant_sid: string;
  inbound_resource_sid: string;
  inbound_resource_status: InteractionResourceStatus;
  inbound_resource_type: string;
  inbound_resource_url: string;
  outbound_participant_sid: string;
  outbound_resource_sid: string;
  outbound_resource_status: InteractionResourceStatus;
  outbound_resource_type: string;
  outbound_resource_url: string;
  service_sid: string;
  session_sid: string;
  sid: string;
  status: InteractionStatus;
  url: string;
}

interface InteractionPayload extends InteractionResource, Page.TwilioResponsePayload {
}

interface InteractionSolution {
  serviceSid?: string;
  sessionSid?: string;
}

interface InteractionListInstance {
  /**
   * @param sid - sid of instance
   */
  InteractionListInstance(sid: string);
  /**
   * Streams InteractionInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function each
   * @memberof Twilio.Preview.Proxy.ServiceContext.SessionContext.InteractionList
   * @instance
   *
   * @param opts - ...
   * @param callback - Function to process each record
   */
  each(opts?: object, callback?: Function);
  /**
   * Constructs a interaction
   *
   * @function get
   * @memberof Twilio.Preview.Proxy.ServiceContext.SessionContext.InteractionList
   * @instance
   *
   * @param sid - A string that uniquely identifies this Interaction.
   */
  get(sid: string);
  /**
   * Retrieve a single target page of InteractionInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function getPage
   * @memberof Twilio.Preview.Proxy.ServiceContext.SessionContext.InteractionList
   * @instance
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: function);
  /**
   * @description Lists InteractionInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function list
   * @memberof Twilio.Preview.Proxy.ServiceContext.SessionContext.InteractionList
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle list of records
   */
  list(opts?: object, callback?: function);
  /**
   * Retrieve a single page of InteractionInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function page
   * @memberof Twilio.Preview.Proxy.ServiceContext.SessionContext.InteractionList
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle list of records
   */
  page(opts?: object, callback?: function);
}


declare class InteractionPage extends Page {
  /**
   * @constructor Twilio.Preview.Proxy.ServiceContext.SessionContext.InteractionPage
   * @augments Page
   * @description Initialize the InteractionPage
   * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: Twilio.Preview.Proxy, response: Response<string>, solution: object);

  /**
   * Build an instance of InteractionInstance
   *
   * @function getInstance
   * @memberof Twilio.Preview.Proxy.ServiceContext.SessionContext.InteractionPage
   * @instance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: object);
}


declare class InteractionInstance {
  /**
   * @constructor Twilio.Preview.Proxy.ServiceContext.SessionContext.InteractionInstance
   * @description Initialize the InteractionContext
   * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
   *
   * @property sid - A string that uniquely identifies this Interaction.
   * @property sessionSid - Session Sid.
   * @property serviceSid - Service Sid.
   * @property accountSid - Account Sid.
   * @property data - What happened in this Interaction.
   * @property status - The Status of this Interaction
   * @property inboundParticipantSid - The inbound_participant_sid
   * @property inboundResourceSid - The SID of the inbound resource.
   * @property inboundResourceStatus - The Inbound Resource Status of this Interaction
   * @property inboundResourceType - The Twilio object type of the inbound resource.
   * @property inboundResourceUrl - The URL of the inbound resource.
   * @property outboundParticipantSid - The outbound_participant_sid
   * @property outboundResourceSid - The SID of the outbound resource.
   * @property outboundResourceStatus - The Outbound Resource Status of this Interaction
   * @property outboundResourceType - The Twilio object type of the outbound resource.
   * @property outboundResourceUrl - The URL of the outbound resource.
   * @property dateCreated - The date this Interaction was created
   * @property dateUpdated - The date this Interaction was updated
   * @property url - The URL of this Interaction.
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param serviceSid - Service Sid.
   * @param sessionSid - Session Sid.
   * @param sid - A string that uniquely identifies this Interaction.
   */
  constructor(version: Twilio.Preview.Proxy, payload: object, serviceSid: sid, sessionSid: sid, sid: sid);

  _proxy?: InteractionContext;
  /**
   * fetch a InteractionInstance
   *
   * @function fetch
   * @memberof Twilio.Preview.Proxy.ServiceContext.SessionContext.InteractionInstance
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * Produce a plain JSON object version of the InteractionInstance for serialization.
   * Removes any circular references in the object.
   *
   * @function toJSON
   * @memberof Twilio.Preview.Proxy.ServiceContext.SessionContext.InteractionInstance
   * @instance
   */
  toJSON();
}


declare class InteractionContext {
  /**
   * @constructor Twilio.Preview.Proxy.ServiceContext.SessionContext.InteractionContext
   * @description Initialize the InteractionContext
   * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
   *
   * @param version - Version of the resource
   * @param serviceSid - Service Sid.
   * @param sessionSid - Session Sid.
   * @param sid - A string that uniquely identifies this Interaction.
   */
  constructor(version: Twilio.Preview.Proxy, serviceSid: sid, sessionSid: sid, sid: sid);

  /**
   * fetch a InteractionInstance
   *
   * @function fetch
   * @memberof Twilio.Preview.Proxy.ServiceContext.SessionContext.InteractionContext
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
}

export { InteractionContext, InteractionInstance, InteractionList, InteractionListInstance, InteractionPage, InteractionPayload, InteractionResource, InteractionSolution }
