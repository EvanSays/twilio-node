/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../../base/Page');
import Response = require('../../../../../http/response');
import V2010 = require('../../../V2010');
import serialize = require('../../../../../base/serialize');
import { SerializableClass } from '../../../../../interfaces';

/**
 * @description Initialize the FeedbackList
 *
 * @param version - Version of the resource
 * @param accountSid - The account_sid
 * @param callSid - A 34-character string that uniquely identifies the Call resource.
 */
declare function FeedbackList(version: V2010, accountSid: string, callSid: string): FeedbackListInstance;

interface FeedbackResource {
  account_sid: string;
  date_created: Date;
  date_updated: Date;
  issues: FeedbackIssues;
  quality_score: number;
  sid: string;
}

interface FeedbackPayload extends FeedbackResource, Page.TwilioResponsePayload {
}

interface FeedbackSolution {
  accountSid?: string;
  callSid?: string;
}

interface FeedbackListInstance {
  /**
   * @param sid - sid of instance
   */
  FeedbackListInstance(sid: string);
  /**
   * Constructs a feedback
   *
   * @function get
   * @memberof Twilio.Api.V2010.AccountContext.CallContext.FeedbackList
   * @instance
   */
  get();
}

/**
 * Options to pass to create
 *
 * @property qualityScore - An integer from 1 to 5
 * @property issue - Issues experienced during the call
 */
export interface CreateOptions {
  issue?: feedback.issues|list;
  qualityScore: number;
}

/**
 * Options to pass to update
 *
 * @property qualityScore - An integer from 1 to 5
 * @property issue - Issues experienced during the call
 */
export interface UpdateOptions {
  issue?: feedback.issues|list;
  qualityScore: number;
}

/**
 * Options to pass to create
 *
 * @property qualityScore - An integer from 1 to 5
 * @property issue - Issues experienced during the call
 */
export interface CreateOptions {
  issue?: feedback.issues|list;
  qualityScore: number;
}

/**
 * Options to pass to update
 *
 * @property qualityScore - An integer from 1 to 5
 * @property issue - Issues experienced during the call
 */
export interface UpdateOptions {
  issue?: feedback.issues|list;
  qualityScore: number;
}


declare class FeedbackPage extends Page {
  /**
   * @constructor Twilio.Api.V2010.AccountContext.CallContext.FeedbackPage
   * @augments Page
   * @description Initialize the FeedbackPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: Twilio.Api.V2010, response: Response<string>, solution: object);

  /**
   * Build an instance of FeedbackInstance
   *
   * @function getInstance
   * @memberof Twilio.Api.V2010.AccountContext.CallContext.FeedbackPage
   * @instance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: object);
}


declare class FeedbackInstance {
  /**
   * @constructor Twilio.Api.V2010.AccountContext.CallContext.FeedbackInstance
   * @description Initialize the FeedbackContext
   *
   * @property accountSid - The account_sid
   * @property dateCreated - The date_created
   * @property dateUpdated - The date_updated
   * @property issues - The issues
   * @property qualityScore - 1 to 5 quality score
   * @property sid - The sid
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param accountSid - The account_sid
   * @param callSid - A 34-character string that uniquely identifies the Call resource.
   */
  constructor(version: Twilio.Api.V2010, payload: object, accountSid: sid, callSid: sid);

  _proxy?: FeedbackContext;
  /**
   * create a FeedbackInstance
   *
   * @function create
   * @memberof Twilio.Api.V2010.AccountContext.CallContext.FeedbackInstance
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle processed record
   */
  create(opts: object, callback?: function);
  /**
   * fetch a FeedbackInstance
   *
   * @function fetch
   * @memberof Twilio.Api.V2010.AccountContext.CallContext.FeedbackInstance
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * Produce a plain JSON object version of the FeedbackInstance for serialization.
   * Removes any circular references in the object.
   *
   * @function toJSON
   * @memberof Twilio.Api.V2010.AccountContext.CallContext.FeedbackInstance
   * @instance
   */
  toJSON();
  /**
   * update a FeedbackInstance
   *
   * @function update
   * @memberof Twilio.Api.V2010.AccountContext.CallContext.FeedbackInstance
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle processed record
   */
  update(opts: object, callback?: function);
}


declare class FeedbackContext {
  /**
   * @constructor Twilio.Api.V2010.AccountContext.CallContext.FeedbackContext
   * @description Initialize the FeedbackContext
   *
   * @param version - Version of the resource
   * @param accountSid - The account_sid
   * @param callSid - The call sid that uniquely identifies the call
   */
  constructor(version: Twilio.Api.V2010, accountSid: sid, callSid: sid);

  /**
   * create a FeedbackInstance
   *
   * @function create
   * @memberof Twilio.Api.V2010.AccountContext.CallContext.FeedbackContext
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle processed record
   */
  create(opts: object, callback?: function);
  /**
   * fetch a FeedbackInstance
   *
   * @function fetch
   * @memberof Twilio.Api.V2010.AccountContext.CallContext.FeedbackContext
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * update a FeedbackInstance
   *
   * @function update
   * @memberof Twilio.Api.V2010.AccountContext.CallContext.FeedbackContext
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle processed record
   */
  update(opts: object, callback?: function);
}

export { FeedbackContext, FeedbackInstance, FeedbackList, FeedbackListInstance, FeedbackPage, FeedbackPayload, FeedbackResource, FeedbackSolution }
