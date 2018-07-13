/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../base/Page');
import V1 = require('../../V1');
import { ListEachOptions, ListOptions, PageOptions } from '../../../../interfaces';
import { ReservationList } from './worker/reservation';
import { SerializableClass } from '../../../../interfaces';
import { WorkerChannelList } from './worker/workerChannel';
import { WorkerStatisticsList } from './worker/workerStatistics';
import { WorkersCumulativeStatisticsList } from './worker/workersCumulativeStatistics';
import { WorkersRealTimeStatisticsList } from './worker/workersRealTimeStatistics';

/**
 * @description Initialize the WorkerList
 *
 * @param version - Version of the resource
 * @param workspaceSid - The ID of the Workflow this worker is associated with
 */
declare function WorkerList(version: V1, workspaceSid: string): WorkerListInstance;

interface WorkerResource {
  account_sid: string;
  activity_name: string;
  activity_sid: string;
  attributes: string;
  available: boolean;
  date_created: Date;
  date_status_changed: Date;
  date_updated: Date;
  friendly_name: string;
  links: string;
  sid: string;
  url: string;
  workspace_sid: string;
}

interface WorkerPayload extends WorkerResource, Page.TwilioResponsePayload {
}

interface WorkerListInstance {
  /* jshint ignore:start */
  /**
   * create a WorkerInstance
   *
   * @function create
   * @memberof Twilio.Taskrouter.V1.WorkspaceContext.WorkerList
   * @instance
   *
   * @param {object} opts - ...
   * @param {string} opts.friendlyName -
   *          String representing user-friendly name for the Worker.
   * @param {string} [opts.activitySid] -
   *          A valid Activity describing the worker's initial state.
   * @param {string} [opts.attributes] - JSON object describing this worker.
   * @param {function} [callback] - Callback to handle processed record
   *
   * @returns {Promise} Resolves to processed WorkerInstance
   */
  /* jshint ignore:end */
  WorkerListInstance.create = function create(opts, callback) {
    if (_.isUndefined(opts)) {
      throw new Error('Required parameter "opts" missing.');
    }
    if (_.isUndefined(opts.friendlyName)) {
      throw new Error('Required parameter "opts.friendlyName" missing.');
    }

    var deferred = Q.defer();
    var data = values.of({
      'FriendlyName': _.get(opts, 'friendlyName'),
      'ActivitySid': _.get(opts, 'activitySid'),
      'Attributes': _.get(opts, 'attributes')
    });

    var promise = this._version.create({uri: this._uri, method: 'POST', data: data});

    promise = promise.then(function(payload) {
      deferred.resolve(new WorkerInstance(
        this._version,
        payload,
        this._solution.workspaceSid,
        this._solution.sid
      ));
    }.bind(this));

    promise.catch(function(error) {
      deferred.reject(error);
    });

    if (_.isFunction(callback)) {
      deferred.promise.nodeify(callback);
    }

    return deferred.promise;
  };
  /* jshint ignore:start */
  /**
   * Streams WorkerInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function each
   * @memberof Twilio.Taskrouter.V1.WorkspaceContext.WorkerList
   * @instance
   *
   * @param {object} [opts] - ...
   * @param {string} [opts.activityName] -
   *          Filter by workers that are in a particular Activity by Friendly Name
   * @param {string} [opts.activitySid] -
   *          Filter by workers that are in a particular Activity by SID
   * @param {string} [opts.available] -
   *          Filter by workers that are available or unavailable.
   * @param {string} [opts.friendlyName] - Filter by a worker's friendly name
   * @param {string} [opts.targetWorkersExpression] -
   *          Filter by workers that would match an expression on a TaskQueue.
   * @param {string} [opts.taskQueueName] -
   *          Filter by workers that are eligible for a TaskQueue by Friendly Name
   * @param {string} [opts.taskQueueSid] -
   *          Filter by workers that are eligible for a TaskQueue by SID
   * @param {number} [opts.limit] -
   *         Upper limit for the number of records to return.
   *         each() guarantees never to return more than limit.
   *         Default is no limit
   * @param {number} [opts.pageSize] -
   *         Number of records to fetch per request,
   *         when not set will use the default value of 50 records.
   *         If no pageSize is defined but a limit is defined,
   *         each() will attempt to read the limit with the most efficient
   *         page size, i.e. min(limit, 1000)
   * @param {Function} [opts.callback] -
   *         Function to process each record. If this and a positional
   *         callback are passed, this one will be used
   * @param {Function} [opts.done] -
   *          Function to be called upon completion of streaming
   * @param {Function} [callback] - Function to process each record
   */
  /* jshint ignore:end */
  WorkerListInstance.each = function each(opts, callback) {
    if (_.isFunction(opts)) {
      callback = opts;
      opts = {};
    }
    opts = opts || {};
    if (opts.callback) {
      callback = opts.callback;
    }
    if (_.isUndefined(callback)) {
      throw new Error('Callback function must be provided');
    }

    var done = false;
    var currentPage = 1;
    var currentResource = 0;
    var limits = this._version.readLimits({
      limit: opts.limit,
      pageSize: opts.pageSize
    });

    function onComplete(error) {
      done = true;
      if (_.isFunction(opts.done)) {
        opts.done(error);
      }
    }

    function fetchNextPage(fn) {
      var promise = fn();
      if (_.isUndefined(promise)) {
        onComplete();
        return;
      }

      promise.then(function(page) {
        _.each(page.instances, function(instance) {
          if (done || (!_.isUndefined(opts.limit) && currentResource >= opts.limit)) {
            done = true;
            return false;
          }

          currentResource++;
          callback(instance, onComplete);
        });

        if ((limits.pageLimit && limits.pageLimit <= currentPage)) {
          onComplete();
        } else if (!done) {
          currentPage++;
          fetchNextPage(_.bind(page.nextPage, page));
        }
      });

      promise.catch(onComplete);
    }

    fetchNextPage(_.bind(this.page, this, _.merge(opts, limits)));
  };
  /* jshint ignore:start */
  /**
   * Retrieve a single target page of WorkerInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function getPage
   * @memberof Twilio.Taskrouter.V1.WorkspaceContext.WorkerList
   * @instance
   *
   * @param {string} [targetUrl] - API-generated URL for the requested results page
   * @param {function} [callback] - Callback to handle list of records
   *
   * @returns {Promise} Resolves to a list of records
   */
  /* jshint ignore:end */
  WorkerListInstance.getPage = function getPage(targetUrl, callback) {
    var deferred = Q.defer();

    var promise = this._version._domain.twilio.request({method: 'GET', uri: targetUrl});

    promise = promise.then(function(payload) {
      deferred.resolve(new WorkerPage(this._version, payload, this._solution));
    }.bind(this));

    promise.catch(function(error) {
      deferred.reject(error);
    });

    if (_.isFunction(callback)) {
      deferred.promise.nodeify(callback);
    }

    return deferred.promise;
  };
  /* jshint ignore:start */
  /**
   * @description Lists WorkerInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function list
   * @memberof Twilio.Taskrouter.V1.WorkspaceContext.WorkerList
   * @instance
   *
   * @param {object} [opts] - ...
   * @param {string} [opts.activityName] -
   *          Filter by workers that are in a particular Activity by Friendly Name
   * @param {string} [opts.activitySid] -
   *          Filter by workers that are in a particular Activity by SID
   * @param {string} [opts.available] -
   *          Filter by workers that are available or unavailable.
   * @param {string} [opts.friendlyName] - Filter by a worker's friendly name
   * @param {string} [opts.targetWorkersExpression] -
   *          Filter by workers that would match an expression on a TaskQueue.
   * @param {string} [opts.taskQueueName] -
   *          Filter by workers that are eligible for a TaskQueue by Friendly Name
   * @param {string} [opts.taskQueueSid] -
   *          Filter by workers that are eligible for a TaskQueue by SID
   * @param {number} [opts.limit] -
   *         Upper limit for the number of records to return.
   *         list() guarantees never to return more than limit.
   *         Default is no limit
   * @param {number} [opts.pageSize] -
   *         Number of records to fetch per request,
   *         when not set will use the default value of 50 records.
   *         If no page_size is defined but a limit is defined,
   *         list() will attempt to read the limit with the most
   *         efficient page size, i.e. min(limit, 1000)
   * @param {function} [callback] - Callback to handle list of records
   *
   * @returns {Promise} Resolves to a list of records
   */
  /* jshint ignore:end */
  WorkerListInstance.list = function list(opts, callback) {
    if (_.isFunction(opts)) {
      callback = opts;
      opts = {};
    }
    opts = opts || {};
    var deferred = Q.defer();
    var allResources = [];
    opts.callback = function(resource, done) {
      allResources.push(resource);

      if (!_.isUndefined(opts.limit) && allResources.length === opts.limit) {
        done();
      }
    };

    opts.done = function(error) {
      if (_.isUndefined(error)) {
        deferred.resolve(allResources);
      } else {
        deferred.reject(error);
      }
    };

    if (_.isFunction(callback)) {
      deferred.promise.nodeify(callback);
    }

    this.each(opts);
    return deferred.promise;
  };
  /* jshint ignore:start */
  /**
   * Retrieve a single page of WorkerInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function page
   * @memberof Twilio.Taskrouter.V1.WorkspaceContext.WorkerList
   * @instance
   *
   * @param {object} [opts] - ...
   * @param {string} [opts.activityName] -
   *          Filter by workers that are in a particular Activity by Friendly Name
   * @param {string} [opts.activitySid] -
   *          Filter by workers that are in a particular Activity by SID
   * @param {string} [opts.available] -
   *          Filter by workers that are available or unavailable.
   * @param {string} [opts.friendlyName] - Filter by a worker's friendly name
   * @param {string} [opts.targetWorkersExpression] -
   *          Filter by workers that would match an expression on a TaskQueue.
   * @param {string} [opts.taskQueueName] -
   *          Filter by workers that are eligible for a TaskQueue by Friendly Name
   * @param {string} [opts.taskQueueSid] -
   *          Filter by workers that are eligible for a TaskQueue by SID
   * @param {string} [opts.pageToken] - PageToken provided by the API
   * @param {number} [opts.pageNumber] -
   *          Page Number, this value is simply for client state
   * @param {number} [opts.pageSize] - Number of records to return, defaults to 50
   * @param {function} [callback] - Callback to handle list of records
   *
   * @returns {Promise} Resolves to a list of records
   */
  /* jshint ignore:end */
  WorkerListInstance.page = function page(opts, callback) {
    if (_.isFunction(opts)) {
      callback = opts;
      opts = {};
    }
    opts = opts || {};

    var deferred = Q.defer();
    var data = values.of({
      'ActivityName': _.get(opts, 'activityName'),
      'ActivitySid': _.get(opts, 'activitySid'),
      'Available': _.get(opts, 'available'),
      'FriendlyName': _.get(opts, 'friendlyName'),
      'TargetWorkersExpression': _.get(opts, 'targetWorkersExpression'),
      'TaskQueueName': _.get(opts, 'taskQueueName'),
      'TaskQueueSid': _.get(opts, 'taskQueueSid'),
      'PageToken': opts.pageToken,
      'Page': opts.pageNumber,
      'PageSize': opts.pageSize
    });

    var promise = this._version.page({uri: this._uri, method: 'GET', params: data});

    promise = promise.then(function(payload) {
      deferred.resolve(new WorkerPage(this._version, payload, this._solution));
    }.bind(this));

    promise.catch(function(error) {
      deferred.reject(error);
    });

    if (_.isFunction(callback)) {
      deferred.promise.nodeify(callback);
    }

    return deferred.promise;
  };
}

/**
 * Options to pass to update
 *
 * @property activitySid - The activity_sid
 * @property attributes - The attributes
 * @property friendlyName - The friendly_name
 */
export interface UpdateOptions {
  activitySid?: string;
  attributes?: string;
  friendlyName?: string;
}

/**
 * Options to pass to update
 *
 * @property activitySid - The activity_sid
 * @property attributes - The attributes
 * @property friendlyName - The friendly_name
 */
export interface UpdateOptions {
  activitySid?: string;
  attributes?: string;
  friendlyName?: string;
}


declare class WorkerPage extends Page {
  /**
   * @constructor Twilio.Taskrouter.V1.WorkspaceContext.WorkerPage
   * @augments Page
   * @description Initialize the WorkerPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: Twilio.Taskrouter.V1, response: object, solution: object);

  /**
   * Build an instance of WorkerInstance
   *
   * @function getInstance
   * @memberof Twilio.Taskrouter.V1.WorkspaceContext.WorkerPage
   * @instance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: object);
}


declare class WorkerInstance {
  /**
   * @constructor Twilio.Taskrouter.V1.WorkspaceContext.WorkerInstance
   * @description Initialize the WorkerContext
   *
   * @property accountSid - The ID of the account that owns this worker
   * @property activityName - Filter by workers that are in a particular Activity by Friendly Name
   * @property activitySid - Filter by workers that are in a particular Activity by SID
   * @property attributes - JSON object describing this worker.
   * @property available - Filter by workers that are available or unavailable.
   * @property dateCreated - DateTime this worker was created
   * @property dateStatusChanged - DateTime of the last change to the Worker's activity.
   * @property dateUpdated - DateTime of the last update
   * @property friendlyName - Filter by a worker's friendly name
   * @property sid - The unique ID of the worker
   * @property workspaceSid - The ID of the Workflow this worker is associated with
   * @property url - The url
   * @property links - The links
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param workspaceSid - The ID of the Workflow this worker is associated with
   * @param sid - The sid
   */
  constructor(version: Twilio.Taskrouter.V1, payload: object, workspaceSid: sid, sid: sid);

  _proxy?: WorkerContext;
  /**
   * Access the cumulativeStatistics
   *
   * @function cumulativeStatistics
   * @memberof Twilio.Taskrouter.V1.WorkspaceContext.WorkerInstance
   * @instance
   */
  cumulativeStatistics();
  /**
   * fetch a WorkerInstance
   *
   * @function fetch
   * @memberof Twilio.Taskrouter.V1.WorkspaceContext.WorkerInstance
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * Access the realTimeStatistics
   *
   * @function realTimeStatistics
   * @memberof Twilio.Taskrouter.V1.WorkspaceContext.WorkerInstance
   * @instance
   */
  realTimeStatistics();
  /**
   * remove a WorkerInstance
   *
   * @function remove
   * @memberof Twilio.Taskrouter.V1.WorkspaceContext.WorkerInstance
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: function);
  /**
   * Access the reservations
   *
   * @function reservations
   * @memberof Twilio.Taskrouter.V1.WorkspaceContext.WorkerInstance
   * @instance
   */
  reservations();
  /**
   * Access the statistics
   *
   * @function statistics
   * @memberof Twilio.Taskrouter.V1.WorkspaceContext.WorkerInstance
   * @instance
   */
  statistics();
  /**
   * Produce a plain JSON object version of the WorkerInstance for serialization.
   * Removes any circular references in the object.
   *
   * @function toJSON
   * @memberof Twilio.Taskrouter.V1.WorkspaceContext.WorkerInstance
   * @instance
   */
  toJSON();
  /**
   * update a WorkerInstance
   *
   * @function update
   * @memberof Twilio.Taskrouter.V1.WorkspaceContext.WorkerInstance
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle processed record
   */
  update(opts?: object, callback?: function);
  /**
   * Access the workerChannels
   *
   * @function workerChannels
   * @memberof Twilio.Taskrouter.V1.WorkspaceContext.WorkerInstance
   * @instance
   */
  workerChannels();
}


declare class WorkerContext {
  /**
   * @constructor Twilio.Taskrouter.V1.WorkspaceContext.WorkerContext
   * @description Initialize the WorkerContext
   *
   * @property realTimeStatistics - realTimeStatistics resource
   * @property cumulativeStatistics - cumulativeStatistics resource
   * @property statistics - statistics resource
   * @property reservations - reservations resource
   * @property workerChannels - workerChannels resource
   *
   * @param version - Version of the resource
   * @param workspaceSid - The workspace_sid
   * @param sid - The sid
   */
  constructor(version: Twilio.Taskrouter.V1, workspaceSid: sid, sid: sid);

  cumulativeStatistics?: Twilio.Taskrouter.V1.WorkspaceContext.WorkerContext.WorkersCumulativeStatisticsList;
  /**
   * fetch a WorkerInstance
   *
   * @function fetch
   * @memberof Twilio.Taskrouter.V1.WorkspaceContext.WorkerContext
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  realTimeStatistics?: Twilio.Taskrouter.V1.WorkspaceContext.WorkerContext.WorkersRealTimeStatisticsList;
  /**
   * remove a WorkerInstance
   *
   * @function remove
   * @memberof Twilio.Taskrouter.V1.WorkspaceContext.WorkerContext
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: function);
  reservations?: Twilio.Taskrouter.V1.WorkspaceContext.WorkerContext.ReservationList;
  statistics?: Twilio.Taskrouter.V1.WorkspaceContext.WorkerContext.WorkerStatisticsList;
  /**
   * update a WorkerInstance
   *
   * @function update
   * @memberof Twilio.Taskrouter.V1.WorkspaceContext.WorkerContext
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle processed record
   */
  update(opts?: object, callback?: function);
  workerChannels?: Twilio.Taskrouter.V1.WorkspaceContext.WorkerContext.WorkerChannelList;
}

export { WorkerContext, WorkerInstance, WorkerList, WorkerListInstance, WorkerPage, WorkerPayload, WorkerResource }
