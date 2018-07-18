/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../base/Page');
import Response = require('../../../../http/response');
import Understand = require('../../Understand');
import { FieldValueList } from './fieldType/fieldValue';
import { ListEachOptions, ListOptions, PageOptions } from '../../../../interfaces';
import { SerializableClass } from '../../../../interfaces';

/**
 * @description Initialize the FieldTypeList
 * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
 *
 * @param version - Version of the resource
 * @param assistantSid - The unique ID of the Assistant.
 */
declare function FieldTypeList(version: Understand, assistantSid: string): FieldTypeListInstance;

interface FieldTypeResource {
  account_sid: string;
  assistant_sid: string;
  date_created: Date;
  date_updated: Date;
  friendly_name: string;
  links: string;
  sid: string;
  unique_name: string;
  url: string;
}

interface FieldTypePayload extends FieldTypeResource, Page.TwilioResponsePayload {
}

interface FieldTypeSolution {
  assistantSid?: string;
}

interface FieldTypeListInstance {
  /**
   * @param sid - sid of instance
   */
  FieldTypeListInstance(sid: string);
  /**
   * create a FieldTypeInstance
   *
   * @function create
   * @memberof Twilio.Preview.Understand.AssistantContext.FieldTypeList
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle processed record
   */
  create(opts: object, callback?: function);
  /**
   * Streams FieldTypeInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function each
   * @memberof Twilio.Preview.Understand.AssistantContext.FieldTypeList
   * @instance
   *
   * @param opts - ...
   * @param callback - Function to process each record
   */
  each(opts?: object, callback?: Function);
  /**
   * Constructs a field_type
   *
   * @function get
   * @memberof Twilio.Preview.Understand.AssistantContext.FieldTypeList
   * @instance
   *
   * @param sid - The sid
   */
  get(sid: string);
  /**
   * Retrieve a single target page of FieldTypeInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function getPage
   * @memberof Twilio.Preview.Understand.AssistantContext.FieldTypeList
   * @instance
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: function);
  /**
   * @description Lists FieldTypeInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function list
   * @memberof Twilio.Preview.Understand.AssistantContext.FieldTypeList
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle list of records
   */
  list(opts?: object, callback?: function);
  /**
   * Retrieve a single page of FieldTypeInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function page
   * @memberof Twilio.Preview.Understand.AssistantContext.FieldTypeList
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
 * @property friendlyName - A user-provided string that identifies this resource. It is non-unique and can up to 255 characters long.
 * @property uniqueName - A user-provided string that uniquely identifies this resource as an alternative to the sid. Unique up to 64 characters long.
 */
export interface UpdateOptions {
  friendlyName?: string;
  uniqueName?: string;
}

/**
 * Options to pass to update
 *
 * @property friendlyName - A user-provided string that identifies this resource. It is non-unique and can up to 255 characters long.
 * @property uniqueName - A user-provided string that uniquely identifies this resource as an alternative to the sid. Unique up to 64 characters long.
 */
export interface UpdateOptions {
  friendlyName?: string;
  uniqueName?: string;
}


declare class FieldTypePage extends Page {
  /**
   * @constructor Twilio.Preview.Understand.AssistantContext.FieldTypePage
   * @augments Page
   * @description Initialize the FieldTypePage
   * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: Twilio.Preview.Understand, response: Response<string>, solution: object);

  /**
   * Build an instance of FieldTypeInstance
   *
   * @function getInstance
   * @memberof Twilio.Preview.Understand.AssistantContext.FieldTypePage
   * @instance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: object);
}


declare class FieldTypeInstance {
  /**
   * @constructor Twilio.Preview.Understand.AssistantContext.FieldTypeInstance
   * @description Initialize the FieldTypeContext
   * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
   *
   * @property accountSid - The unique ID of the Account that created this Field Type.
   * @property dateCreated - The date that this resource was created
   * @property dateUpdated - The date that this resource was last updated
   * @property friendlyName - A user-provided string that identifies this resource. It is non-unique and can up to 255 characters long.
   * @property links - The links
   * @property assistantSid - The unique ID of the Assistant.
   * @property sid - A 34 character string that uniquely identifies this resource.
   * @property uniqueName - A user-provided string that uniquely identifies this resource as an alternative to the sid. Unique up to 64 characters long.
   * @property url - The url
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param assistantSid - The unique ID of the Assistant.
   * @param sid - The sid
   */
  constructor(version: Twilio.Preview.Understand, payload: object, assistantSid: sid, sid: sid_like);

  _proxy?: FieldTypeContext;
  /**
   * fetch a FieldTypeInstance
   *
   * @function fetch
   * @memberof Twilio.Preview.Understand.AssistantContext.FieldTypeInstance
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * Access the fieldValues
   *
   * @function fieldValues
   * @memberof Twilio.Preview.Understand.AssistantContext.FieldTypeInstance
   * @instance
   */
  fieldValues();
  /**
   * remove a FieldTypeInstance
   *
   * @function remove
   * @memberof Twilio.Preview.Understand.AssistantContext.FieldTypeInstance
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: function);
  /**
   * Produce a plain JSON object version of the FieldTypeInstance for serialization.
   * Removes any circular references in the object.
   *
   * @function toJSON
   * @memberof Twilio.Preview.Understand.AssistantContext.FieldTypeInstance
   * @instance
   */
  toJSON();
  /**
   * update a FieldTypeInstance
   *
   * @function update
   * @memberof Twilio.Preview.Understand.AssistantContext.FieldTypeInstance
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle processed record
   */
  update(opts?: object, callback?: function);
}


declare class FieldTypeContext {
  /**
   * @constructor Twilio.Preview.Understand.AssistantContext.FieldTypeContext
   * @description Initialize the FieldTypeContext
   * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
   *
   * @property fieldValues - fieldValues resource
   *
   * @param version - Version of the resource
   * @param assistantSid - The assistant_sid
   * @param sid - The sid
   */
  constructor(version: Twilio.Preview.Understand, assistantSid: sid_like, sid: sid_like);

  /**
   * fetch a FieldTypeInstance
   *
   * @function fetch
   * @memberof Twilio.Preview.Understand.AssistantContext.FieldTypeContext
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  fieldValues?: Twilio.Preview.Understand.AssistantContext.FieldTypeContext.FieldValueList;
  /**
   * remove a FieldTypeInstance
   *
   * @function remove
   * @memberof Twilio.Preview.Understand.AssistantContext.FieldTypeContext
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: function);
  /**
   * update a FieldTypeInstance
   *
   * @function update
   * @memberof Twilio.Preview.Understand.AssistantContext.FieldTypeContext
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle processed record
   */
  update(opts?: object, callback?: function);
}

export { FieldTypeContext, FieldTypeInstance, FieldTypeList, FieldTypeListInstance, FieldTypePage, FieldTypePayload, FieldTypeResource, FieldTypeSolution }
