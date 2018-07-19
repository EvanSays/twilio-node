/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../base/Page');
import Response = require('../../../../http/response');
import Sync = require('../../Sync');
import serialize = require('../../../../base/serialize');
import { DocumentPermissionList } from './document/documentPermission';
import { SerializableClass } from '../../../../interfaces';

/**
 * @description Initialize the DocumentList
 * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
 *
 * @param version - Version of the resource
 * @param serviceSid - The service_sid
 */
declare function DocumentList(version: Sync, serviceSid: string): DocumentListInstance;

interface DocumentResource {
  account_sid: string;
  created_by: string;
  data: string;
  date_created: Date;
  date_updated: Date;
  links: string;
  revision: string;
  service_sid: string;
  sid: string;
  unique_name: string;
  url: string;
}

interface DocumentPayload extends DocumentResource, Page.TwilioResponsePayload {
}

interface DocumentSolution {
  serviceSid?: string;
}

interface DocumentListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): DocumentContext;
  /**
   * create a DocumentInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  create(opts?: DocumentListInstanceCreateOptions, callback?: function);
  /**
   * Streams DocumentInstance records from the API.
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
  each(opts?: DocumentListInstanceEachOptions, callback?: Function);
  /**
   * Constructs a document
   *
   * @param sid - The sid
   */
  get(sid: string);
  /**
   * Retrieve a single target page of DocumentInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: function);
  /**
   * @description Lists DocumentInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  list(opts?: DocumentListInstanceOptions, callback?: function);
  /**
   * Retrieve a single page of DocumentInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  page(opts?: DocumentListInstancePageOptions, callback?: function);
}

/**
 * Options to pass to update
 *
 * @property data - The data
 */
export interface DocumentInstanceUpdateOptions {
  data: string;
}

/**
 * Options to pass to update
 *
 * @property data - The data
 */
export interface DocumentContextUpdateOptions {
  data: string;
}

/**
 * Options to pass to create
 *
 * @property uniqueName - The unique_name
 * @property data - The data
 */
export interface DocumentListInstanceCreateOptions {
  data?: string;
  uniqueName?: string;
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
export interface DocumentListInstanceEachOptions {
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
export interface DocumentListInstanceOptions {
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
export interface DocumentListInstancePageOptions {
  pageNumber?: number;
  pageSize?: number;
  pageToken?: string;
}


declare class DocumentPage extends Page {
  /**
   * @constructor Twilio.Preview.Sync.ServiceContext.DocumentPage
   * @augments Page
   * @description Initialize the DocumentPage
   * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: Twilio.Preview.Sync, response: Response<string>, solution: object);

  /**
   * Build an instance of DocumentInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: object);
}


declare class DocumentInstance {
  /**
   * @constructor Twilio.Preview.Sync.ServiceContext.DocumentInstance
   * @description Initialize the DocumentContext
   * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
   *
   * @property sid - The sid
   * @property uniqueName - The unique_name
   * @property accountSid - The account_sid
   * @property serviceSid - The service_sid
   * @property url - The url
   * @property links - The links
   * @property revision - The revision
   * @property data - The data
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

  _proxy?: DocumentContext;
  /**
   * Access the documentPermissions
   */
  documentPermissions();
  /**
   * fetch a DocumentInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * remove a DocumentInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: function);
  /**
   * Produce a plain JSON object version of the DocumentInstance for serialization.
   * Removes any circular references in the object.
   */
  toJSON();
  /**
   * update a DocumentInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts: DocumentInstanceUpdateOptions, callback?: function);
}


declare class DocumentContext {
  /**
   * @constructor Twilio.Preview.Sync.ServiceContext.DocumentContext
   * @description Initialize the DocumentContext
   * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
   *
   * @property documentPermissions - documentPermissions resource
   *
   * @param version - Version of the resource
   * @param serviceSid - The service_sid
   * @param sid - The sid
   */
  constructor(version: Twilio.Preview.Sync, serviceSid: sid, sid: sid_like);

  documentPermissions?: Twilio.Preview.Sync.ServiceContext.DocumentContext.DocumentPermissionList;
  /**
   * fetch a DocumentInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * remove a DocumentInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: function);
  /**
   * update a DocumentInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts: DocumentContextUpdateOptions, callback?: function);
}

export { DocumentContext, DocumentInstance, DocumentList, DocumentListInstance, DocumentPage, DocumentPayload, DocumentResource, DocumentSolution }
