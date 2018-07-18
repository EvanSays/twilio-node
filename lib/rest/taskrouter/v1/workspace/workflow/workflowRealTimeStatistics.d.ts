/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../../base/Page');
import Response = require('../../../../../http/response');
import V1 = require('../../../V1');
import { SerializableClass } from '../../../../../interfaces';

/**
 * @description Initialize the WorkflowRealTimeStatisticsList
 *
 * @param version - Version of the resource
 * @param workspaceSid - The workspace_sid
 * @param workflowSid - The workflow_sid
 */
declare function WorkflowRealTimeStatisticsList(version: V1, workspaceSid: string, workflowSid: string): WorkflowRealTimeStatisticsListInstance;

interface WorkflowRealTimeStatisticsResource {
  account_sid: string;
  longest_task_waiting_age: number;
  tasks_by_priority: string;
  tasks_by_status: string;
  total_tasks: number;
  url: string;
  workflow_sid: string;
  workspace_sid: string;
}

interface WorkflowRealTimeStatisticsPayload extends WorkflowRealTimeStatisticsResource, Page.TwilioResponsePayload {
}

interface WorkflowRealTimeStatisticsSolution {
  workflowSid?: string;
  workspaceSid?: string;
}

interface WorkflowRealTimeStatisticsListInstance {
  /**
   * @param sid - sid of instance
   */
  WorkflowRealTimeStatisticsListInstance(sid: string);
  /**
   * Constructs a workflow_real_time_statistics
   *
   * @function get
   * @memberof Twilio.Taskrouter.V1.WorkspaceContext.WorkflowContext.WorkflowRealTimeStatisticsList
   * @instance
   */
  get();
}

/**
 * Options to pass to fetch
 *
 * @property taskChannel - Filter real-time and cumulative statistics by TaskChannel.
 */
export interface FetchOptions {
  taskChannel?: string;
}

/**
 * Options to pass to fetch
 *
 * @property taskChannel - Filter real-time and cumulative statistics by TaskChannel.
 */
export interface FetchOptions {
  taskChannel?: string;
}


declare class WorkflowRealTimeStatisticsPage extends Page {
  /**
   * @constructor Twilio.Taskrouter.V1.WorkspaceContext.WorkflowContext.WorkflowRealTimeStatisticsPage
   * @augments Page
   * @description Initialize the WorkflowRealTimeStatisticsPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: Twilio.Taskrouter.V1, response: Response<string>, solution: object);

  /**
   * Build an instance of WorkflowRealTimeStatisticsInstance
   *
   * @function getInstance
   * @memberof Twilio.Taskrouter.V1.WorkspaceContext.WorkflowContext.WorkflowRealTimeStatisticsPage
   * @instance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: object);
}


declare class WorkflowRealTimeStatisticsInstance {
  /**
   * @constructor Twilio.Taskrouter.V1.WorkspaceContext.WorkflowContext.WorkflowRealTimeStatisticsInstance
   * @description Initialize the WorkflowRealTimeStatisticsContext
   *
   * @property accountSid - The account_sid
   * @property longestTaskWaitingAge - The age of the longest waiting Task
   * @property tasksByPriority - The tasks_by_priority
   * @property tasksByStatus - The Tasks broken down by status
   * @property totalTasks - The total number of Tasks
   * @property workflowSid - The workflow_sid
   * @property workspaceSid - The workspace_sid
   * @property url - The url
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param workspaceSid - The workspace_sid
   * @param workflowSid - The workflow_sid
   */
  constructor(version: Twilio.Taskrouter.V1, payload: object, workspaceSid: sid, workflowSid: sid);

  _proxy?: WorkflowRealTimeStatisticsContext;
  /**
   * fetch a WorkflowRealTimeStatisticsInstance
   *
   * @function fetch
   * @memberof Twilio.Taskrouter.V1.WorkspaceContext.WorkflowContext.WorkflowRealTimeStatisticsInstance
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle processed record
   */
  fetch(opts?: object, callback?: function);
  /**
   * Produce a plain JSON object version of the WorkflowRealTimeStatisticsInstance for serialization.
   * Removes any circular references in the object.
   *
   * @function toJSON
   * @memberof Twilio.Taskrouter.V1.WorkspaceContext.WorkflowContext.WorkflowRealTimeStatisticsInstance
   * @instance
   */
  toJSON();
}


declare class WorkflowRealTimeStatisticsContext {
  /**
   * @constructor Twilio.Taskrouter.V1.WorkspaceContext.WorkflowContext.WorkflowRealTimeStatisticsContext
   * @description Initialize the WorkflowRealTimeStatisticsContext
   *
   * @param version - Version of the resource
   * @param workspaceSid - The workspace_sid
   * @param workflowSid - The workflow_sid
   */
  constructor(version: Twilio.Taskrouter.V1, workspaceSid: sid, workflowSid: sid);

  /**
   * fetch a WorkflowRealTimeStatisticsInstance
   *
   * @function fetch
   * @memberof Twilio.Taskrouter.V1.WorkspaceContext.WorkflowContext.WorkflowRealTimeStatisticsContext
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle processed record
   */
  fetch(opts?: object, callback?: function);
}

export { WorkflowRealTimeStatisticsContext, WorkflowRealTimeStatisticsInstance, WorkflowRealTimeStatisticsList, WorkflowRealTimeStatisticsListInstance, WorkflowRealTimeStatisticsPage, WorkflowRealTimeStatisticsPayload, WorkflowRealTimeStatisticsResource, WorkflowRealTimeStatisticsSolution }
