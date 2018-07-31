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
import { SerializableClass } from '../../../../interfaces';

/**
 * @description Initialize the EventList
 *
 * @param version - Version of the resource
 * @param workspaceSid - The unique ID of the Workspace
 */
declare function EventList(version: V1, workspaceSid: string): EventListInstance;

interface EventResource {
  account_sid: string;
  actor_sid: string;
  actor_type: string;
  actor_url: string;
  description: string;
  event_data: string;
  event_date: Date;
  event_type: string;
  resource_sid: string;
  resource_type: string;
  resource_url: string;
  sid: string;
  source: string;
  source_ip_address: string;
  url: string;
}

interface EventPayload extends EventResource, Page.TwilioResponsePayload {
}

interface EventSolution {
  workspaceSid?: string;
}

interface EventListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): EventContext;
  /**
   * Streams EventInstance records from the API.
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
  each(opts?: EventListInstanceEachOptions, callback?: (item: EventInstance, done: (err?: Error) => void) => void): void;
  /**
   * Constructs a event
   *
   * @param sid - The sid
   */
  get(sid: string): EventContext;
  /**
   * Retrieve a single target page of EventInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: EventPage) => any): Promise<EventPage>;
  /**
   * Lists EventInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  list(opts?: EventListInstanceOptions, callback?: (error: Error | null, items: EventInstance[]) => any): Promise<EventInstance[]>;
  /**
   * Retrieve a single page of EventInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  page(opts?: EventListInstancePageOptions, callback?: (error: Error | null, items: EventPage) => any): Promise<EventPage>;
}

/**
 * Options to pass to each
 *
 * @property endDate - Filter events by an end date.
 * @property eventType - Filter events by those of a certain event type
 * @property minutes - Filter events by up to 'x' minutes in the past.
 * @property reservationSid - Filter events by those pertaining to a particular reservation
 * @property startDate - Filter events by a start date.
 * @property taskQueueSid - Filter events by those pertaining to a particular queue
 * @property taskSid - Filter events by those pertaining to a particular task
 * @property workerSid - Filter events by those pertaining to a particular worker
 * @property workflowSid - The workflow_sid
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
interface EventListInstanceEachOptions {
  callback?: (item: EventInstance, done: (err?: Error) => void) => void;
  done?: Function;
  endDate?: Date;
  eventType?: string;
  limit?: number;
  minutes?: number;
  pageSize?: number;
  reservationSid?: string;
  startDate?: Date;
  taskQueueSid?: string;
  taskSid?: string;
  workerSid?: string;
  workflowSid?: string;
}

/**
 * Options to pass to list
 *
 * @property endDate - Filter events by an end date.
 * @property eventType - Filter events by those of a certain event type
 * @property minutes - Filter events by up to 'x' minutes in the past.
 * @property reservationSid - Filter events by those pertaining to a particular reservation
 * @property startDate - Filter events by a start date.
 * @property taskQueueSid - Filter events by those pertaining to a particular queue
 * @property taskSid - Filter events by those pertaining to a particular task
 * @property workerSid - Filter events by those pertaining to a particular worker
 * @property workflowSid - The workflow_sid
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
interface EventListInstanceOptions {
  endDate?: Date;
  eventType?: string;
  limit?: number;
  minutes?: number;
  pageSize?: number;
  reservationSid?: string;
  startDate?: Date;
  taskQueueSid?: string;
  taskSid?: string;
  workerSid?: string;
  workflowSid?: string;
}

/**
 * Options to pass to page
 *
 * @property endDate - Filter events by an end date.
 * @property eventType - Filter events by those of a certain event type
 * @property minutes - Filter events by up to 'x' minutes in the past.
 * @property reservationSid - Filter events by those pertaining to a particular reservation
 * @property startDate - Filter events by a start date.
 * @property taskQueueSid - Filter events by those pertaining to a particular queue
 * @property taskSid - Filter events by those pertaining to a particular task
 * @property workerSid - Filter events by those pertaining to a particular worker
 * @property workflowSid - The workflow_sid
 * @property pageToken - PageToken provided by the API
 * @property pageNumber - Page Number, this value is simply for client state
 * @property pageSize - Number of records to return, defaults to 50
 */
interface EventListInstancePageOptions {
  endDate?: Date;
  eventType?: string;
  minutes?: number;
  pageNumber?: number;
  pageSize?: number;
  pageToken?: string;
  reservationSid?: string;
  startDate?: Date;
  taskQueueSid?: string;
  taskSid?: string;
  workerSid?: string;
  workflowSid?: string;
}


declare class EventPage extends Page<V1, EventPayload, EventResource, EventInstance> {
  /**
   * Initialize the EventPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V1, response: Response<string>, solution: EventSolution);

  /**
   * Build an instance of EventInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: EventPayload): EventInstance;
}


declare class EventInstance extends SerializableClass {
  /**
   * Initialize the EventContext
   *
   * @property accountSid - The account owning this event
   * @property actorSid - The actor_sid
   * @property actorType - The actor_type
   * @property actorUrl - The actor_url
   * @property description - A description of the event
   * @property eventData - Data about this specific event.
   * @property eventDate - The time this event was sent
   * @property eventType - An identifier for this event
   * @property resourceSid - The sid of the object this event is most relevant to
   * @property resourceType - The type of object this event is most relevant to
   * @property resourceUrl - The resource_url
   * @property sid - The sid
   * @property source - The source
   * @property sourceIpAddress - The source_ip_address
   * @property url - The url
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param workspaceSid - The unique ID of the Workspace
   * @param sid - The sid
   */
  constructor(version: V1, payload: EventPayload, workspaceSid: string, sid: string);

  private _proxy: EventContext;
  accountSid: string;
  actorSid: string;
  actorType: string;
  actorUrl: string;
  description: string;
  eventData: string;
  eventDate: Date;
  eventType: string;
  /**
   * fetch a EventInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: EventInstance) => any): void;
  resourceSid: string;
  resourceType: string;
  resourceUrl: string;
  sid: string;
  source: string;
  sourceIpAddress: string;
  /**
   * Produce a plain JSON object version of the EventInstance for serialization.
   * Removes any circular references in the object.
   */
  toJSON(): any;
  url: string;
}


declare class EventContext {
  /**
   * Initialize the EventContext
   *
   * @param version - Version of the resource
   * @param workspaceSid - The workspace_sid
   * @param sid - The sid
   */
  constructor(version: V1, workspaceSid: string, sid: string);

  /**
   * fetch a EventInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: EventInstance) => any): void;
}

export { EventContext, EventInstance, EventList, EventListInstance, EventListInstanceEachOptions, EventListInstanceOptions, EventListInstancePageOptions, EventPage, EventPayload, EventResource, EventSolution }
