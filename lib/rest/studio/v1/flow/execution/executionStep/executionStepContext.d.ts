/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../../../base/Page');
import Response = require('../../../../../../http/response');
import V1 = require('../../../../V1');
import { SerializableClass } from '../../../../../../interfaces';

/**
 * @description Initialize the ExecutionStepContextList
 * PLEASE NOTE that this class contains beta products that are subject to change. Use them with caution.
 *
 * @param version - Version of the resource
 * @param flowSid - Flow Sid.
 * @param executionSid - Execution Sid.
 * @param stepSid - Step Sid.
 */
declare function ExecutionStepContextList(version: V1, flowSid: string, executionSid: string, stepSid: string): ExecutionStepContextListInstance;

interface ExecutionStepContextListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): ExecutionStepContextContext;
  /**
   * Constructs a execution_step_context
   */
  get(): ExecutionStepContextContext;
}

interface ExecutionStepContextPayload extends ExecutionStepContextResource, Page.TwilioResponsePayload {
}

interface ExecutionStepContextResource {
  account_sid: string;
  context: string;
  execution_sid: string;
  flow_sid: string;
  step_sid: string;
  url: string;
}

interface ExecutionStepContextSolution {
  executionSid?: string;
  flowSid?: string;
  stepSid?: string;
}


declare class ExecutionStepContextPage extends Page<V1, ExecutionStepContextPayload, ExecutionStepContextResource, ExecutionStepContextInstance> {
  /**
   * Initialize the ExecutionStepContextPagePLEASE NOTE that this class contains beta products that are subject to change. Use them with caution.
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V1, response: Response<string>, solution: ExecutionStepContextSolution);

  /**
   * Build an instance of ExecutionStepContextInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: ExecutionStepContextPayload): ExecutionStepContextInstance;
}


declare class ExecutionStepContextInstance extends SerializableClass {
  /**
   * Initialize the ExecutionStepContextContextPLEASE NOTE that this class contains beta products that are subject to change. Use them with caution.
   *
   * @property accountSid - Account Sid.
   * @property context - Flow state.
   * @property executionSid - Execution Sid.
   * @property flowSid - Flow Sid.
   * @property stepSid - Step Sid.
   * @property url - The URL of this resource.
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param flowSid - Flow Sid.
   * @param executionSid - Execution Sid.
   * @param stepSid - Step Sid.
   */
  constructor(version: V1, payload: ExecutionStepContextPayload, flowSid: string, executionSid: string, stepSid: string);

  private _proxy: ExecutionStepContextContext;
  accountSid: string;
  context: string;
  executionSid: string;
  /**
   * fetch a ExecutionStepContextInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: ExecutionStepContextInstance) => any): void;
  flowSid: string;
  stepSid: string;
  /**
   * Produce a plain JSON object version of the ExecutionStepContextInstance for serialization.
   * Removes any circular references in the object.
   */
  toJSON(): any;
  url: string;
}


declare class ExecutionStepContextContext {
  /**
   * Initialize the ExecutionStepContextContextPLEASE NOTE that this class contains beta products that are subject to change. Use them with caution.
   *
   * @param version - Version of the resource
   * @param flowSid - Flow Sid.
   * @param executionSid - Execution Sid.
   * @param stepSid - Step Sid.
   */
  constructor(version: V1, flowSid: string, executionSid: string, stepSid: string);

  /**
   * fetch a ExecutionStepContextInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: ExecutionStepContextInstance) => any): void;
}

export { ExecutionStepContextContext, ExecutionStepContextInstance, ExecutionStepContextList, ExecutionStepContextListInstance, ExecutionStepContextPage, ExecutionStepContextPayload, ExecutionStepContextResource, ExecutionStepContextSolution }
