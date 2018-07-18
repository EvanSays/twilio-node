/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../../base/Page');
import Response = require('../../../../../http/response');
import Understand = require('../../../Understand');
import { ListEachOptions, ListOptions, PageOptions } from '../../../../../interfaces';
import { SerializableClass } from '../../../../../interfaces';

/**
 * @description Initialize the FieldValueList
 * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
 *
 * @param version - Version of the resource
 * @param assistantSid - The unique ID of the Assistant.
 * @param fieldTypeSid - The unique ID of the Field Type associated with this Field Value.
 */
declare function FieldValueList(version: Understand, assistantSid: string, fieldTypeSid: string): FieldValueListInstance;

interface FieldValueResource {
  account_sid: string;
  assistant_sid: string;
  date_created: Date;
  date_updated: Date;
  field_type_sid: string;
  language: string;
  sid: string;
  synonym_of: string;
  url: string;
  value: string;
}

interface FieldValuePayload extends FieldValueResource, Page.TwilioResponsePayload {
}

interface FieldValueSolution {
  assistantSid?: string;
  fieldTypeSid?: string;
}

interface FieldValueListInstance {
  /**
   * @param sid - sid of instance
   */
  FieldValueListInstance(sid: string);
  /**
   * create a FieldValueInstance
   *
   * @function create
   * @memberof Twilio.Preview.Understand.AssistantContext.FieldTypeContext.FieldValueList
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle processed record
   */
  create(opts: object, callback?: function);
  /**
   * Streams FieldValueInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function each
   * @memberof Twilio.Preview.Understand.AssistantContext.FieldTypeContext.FieldValueList
   * @instance
   *
   * @param opts - ...
   * @param callback - Function to process each record
   */
  each(opts?: object, callback?: Function);
  /**
   * Constructs a field_value
   *
   * @function get
   * @memberof Twilio.Preview.Understand.AssistantContext.FieldTypeContext.FieldValueList
   * @instance
   *
   * @param sid - The sid
   */
  get(sid: string);
  /**
   * Retrieve a single target page of FieldValueInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function getPage
   * @memberof Twilio.Preview.Understand.AssistantContext.FieldTypeContext.FieldValueList
   * @instance
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: function);
  /**
   * @description Lists FieldValueInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function list
   * @memberof Twilio.Preview.Understand.AssistantContext.FieldTypeContext.FieldValueList
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle list of records
   */
  list(opts?: object, callback?: function);
  /**
   * Retrieve a single page of FieldValueInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function page
   * @memberof Twilio.Preview.Understand.AssistantContext.FieldTypeContext.FieldValueList
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle list of records
   */
  page(opts?: object, callback?: function);
}


declare class FieldValuePage extends Page {
  /**
   * @constructor Twilio.Preview.Understand.AssistantContext.FieldTypeContext.FieldValuePage
   * @augments Page
   * @description Initialize the FieldValuePage
   * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: Twilio.Preview.Understand, response: Response<string>, solution: object);

  /**
   * Build an instance of FieldValueInstance
   *
   * @function getInstance
   * @memberof Twilio.Preview.Understand.AssistantContext.FieldTypeContext.FieldValuePage
   * @instance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: object);
}


declare class FieldValueInstance {
  /**
   * @constructor Twilio.Preview.Understand.AssistantContext.FieldTypeContext.FieldValueInstance
   * @description Initialize the FieldValueContext
   * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
   *
   * @property accountSid - The unique ID of the Account that created this Field Value.
   * @property dateCreated - The date that this resource was created
   * @property dateUpdated - The date that this resource was last updated
   * @property fieldTypeSid - The unique ID of the Field Type associated with this Field Value.
   * @property language - An ISO language-country string of the value.
   * @property assistantSid - The unique ID of the Assistant.
   * @property sid - A 34 character string that uniquely identifies this resource.
   * @property value - The Field Value itself.
   * @property url - The url
   * @property synonymOf - A value that indicates this field value is a synonym of. Empty if the value is not a synonym.
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param assistantSid - The unique ID of the Assistant.
   * @param fieldTypeSid - The unique ID of the Field Type associated with this Field Value.
   * @param sid - The sid
   */
  constructor(version: Twilio.Preview.Understand, payload: object, assistantSid: sid, fieldTypeSid: sid, sid: sid_like);

  _proxy?: FieldValueContext;
  /**
   * fetch a FieldValueInstance
   *
   * @function fetch
   * @memberof Twilio.Preview.Understand.AssistantContext.FieldTypeContext.FieldValueInstance
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * remove a FieldValueInstance
   *
   * @function remove
   * @memberof Twilio.Preview.Understand.AssistantContext.FieldTypeContext.FieldValueInstance
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: function);
  /**
   * Produce a plain JSON object version of the FieldValueInstance for serialization.
   * Removes any circular references in the object.
   *
   * @function toJSON
   * @memberof Twilio.Preview.Understand.AssistantContext.FieldTypeContext.FieldValueInstance
   * @instance
   */
  toJSON();
}


declare class FieldValueContext {
  /**
   * @constructor Twilio.Preview.Understand.AssistantContext.FieldTypeContext.FieldValueContext
   * @description Initialize the FieldValueContext
   * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
   *
   * @param version - Version of the resource
   * @param assistantSid - The assistant_sid
   * @param fieldTypeSid - The field_type_sid
   * @param sid - The sid
   */
  constructor(version: Twilio.Preview.Understand, assistantSid: sid_like, fieldTypeSid: sid_like, sid: sid_like);

  /**
   * fetch a FieldValueInstance
   *
   * @function fetch
   * @memberof Twilio.Preview.Understand.AssistantContext.FieldTypeContext.FieldValueContext
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * remove a FieldValueInstance
   *
   * @function remove
   * @memberof Twilio.Preview.Understand.AssistantContext.FieldTypeContext.FieldValueContext
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: function);
}

export { FieldValueContext, FieldValueInstance, FieldValueList, FieldValueListInstance, FieldValuePage, FieldValuePayload, FieldValueResource, FieldValueSolution }
