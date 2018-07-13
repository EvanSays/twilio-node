/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../base/Page');
import V1 = require('../V1');
import { DataSessionList } from './sim/dataSession';
import { ListEachOptions, ListOptions, PageOptions } from '../../../interfaces';
import { SerializableClass } from '../../../interfaces';
import { UsageRecordList } from './sim/usageRecord';

/**
 * @description Initialize the SimList
 *
 * @param version - Version of the resource
 */
declare function SimList(version: V1): SimListInstance;

interface SimResource {
  account_sid: string;
  commands_callback_method: string;
  commands_callback_url: string;
  date_created: Date;
  date_updated: Date;
  e_id: string;
  friendly_name: string;
  iccid: string;
  ip_address: string;
  links: string;
  rate_plan_sid: string;
  sid: string;
  sms_fallback_method: string;
  sms_fallback_url: string;
  sms_method: string;
  sms_url: string;
  status: SimStatus;
  unique_name: string;
  url: string;
  voice_fallback_method: string;
  voice_fallback_url: string;
  voice_method: string;
  voice_url: string;
}

interface SimPayload extends SimResource, Page.TwilioResponsePayload {
}

interface SimListInstance {
  /* jshint ignore:start */
  /**
   * Streams SimInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function each
   * @memberof Twilio.Wireless.V1.SimList
   * @instance
   *
   * @param {object} [opts] - ...
   * @param {sim.status} [opts.status] - Only return Sims with this status.
   * @param {string} [opts.iccid] - Return Sims with this Iccid.
   * @param {string} [opts.ratePlan] - Only return Sims with this Rate Plan.
   * @param {string} [opts.eId] - The e_id
   * @param {string} [opts.simRegistrationCode] - The sim_registration_code
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
  SimListInstance.each = function each(opts, callback) {
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
   * Retrieve a single target page of SimInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function getPage
   * @memberof Twilio.Wireless.V1.SimList
   * @instance
   *
   * @param {string} [targetUrl] - API-generated URL for the requested results page
   * @param {function} [callback] - Callback to handle list of records
   *
   * @returns {Promise} Resolves to a list of records
   */
  /* jshint ignore:end */
  SimListInstance.getPage = function getPage(targetUrl, callback) {
    var deferred = Q.defer();

    var promise = this._version._domain.twilio.request({method: 'GET', uri: targetUrl});

    promise = promise.then(function(payload) {
      deferred.resolve(new SimPage(this._version, payload, this._solution));
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
   * @description Lists SimInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function list
   * @memberof Twilio.Wireless.V1.SimList
   * @instance
   *
   * @param {object} [opts] - ...
   * @param {sim.status} [opts.status] - Only return Sims with this status.
   * @param {string} [opts.iccid] - Return Sims with this Iccid.
   * @param {string} [opts.ratePlan] - Only return Sims with this Rate Plan.
   * @param {string} [opts.eId] - The e_id
   * @param {string} [opts.simRegistrationCode] - The sim_registration_code
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
  SimListInstance.list = function list(opts, callback) {
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
   * Retrieve a single page of SimInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function page
   * @memberof Twilio.Wireless.V1.SimList
   * @instance
   *
   * @param {object} [opts] - ...
   * @param {sim.status} [opts.status] - Only return Sims with this status.
   * @param {string} [opts.iccid] - Return Sims with this Iccid.
   * @param {string} [opts.ratePlan] - Only return Sims with this Rate Plan.
   * @param {string} [opts.eId] - The e_id
   * @param {string} [opts.simRegistrationCode] - The sim_registration_code
   * @param {string} [opts.pageToken] - PageToken provided by the API
   * @param {number} [opts.pageNumber] -
   *          Page Number, this value is simply for client state
   * @param {number} [opts.pageSize] - Number of records to return, defaults to 50
   * @param {function} [callback] - Callback to handle list of records
   *
   * @returns {Promise} Resolves to a list of records
   */
  /* jshint ignore:end */
  SimListInstance.page = function page(opts, callback) {
    if (_.isFunction(opts)) {
      callback = opts;
      opts = {};
    }
    opts = opts || {};

    var deferred = Q.defer();
    var data = values.of({
      'Status': _.get(opts, 'status'),
      'Iccid': _.get(opts, 'iccid'),
      'RatePlan': _.get(opts, 'ratePlan'),
      'EId': _.get(opts, 'eId'),
      'SimRegistrationCode': _.get(opts, 'simRegistrationCode'),
      'PageToken': opts.pageToken,
      'Page': opts.pageNumber,
      'PageSize': opts.pageSize
    });

    var promise = this._version.page({uri: this._uri, method: 'GET', params: data});

    promise = promise.then(function(payload) {
      deferred.resolve(new SimPage(this._version, payload, this._solution));
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
 * @property uniqueName - A user-provided string that uniquely identifies this resource as an alternative to the Sid.
 * @property callbackMethod - The HTTP method Twilio will use when making a request to the callback URL.
 * @property callbackUrl - Twilio will make a request to this URL when the Sim has finished updating.
 * @property friendlyName - A user-provided string that identifies this resource.
 * @property ratePlan - The Sid or UniqueName of the RatePlan that this Sim should use.
 * @property status - A string representing the status of the Sim.
 * @property commandsCallbackMethod - A string representing the HTTP method to use when making a request to CommandsCallbackUrl.
 * @property commandsCallbackUrl - The URL that will receive a webhook when this Sim originates a Command.
 * @property smsFallbackMethod - The HTTP method Twilio will use when requesting the sms_fallback_url.
 * @property smsFallbackUrl - The URL that Twilio will request if an error occurs retrieving or executing the TwiML requested by sms_url.
 * @property smsMethod - The HTTP method Twilio will use when requesting the above Url.
 * @property smsUrl - The URL Twilio will request when the SIM-connected device sends an SMS message that is not a Command.
 * @property voiceFallbackMethod - The HTTP method Twilio will use when requesting the voice_fallback_url.
 * @property voiceFallbackUrl - The URL that Twilio will request if an error occurs retrieving or executing the TwiML requested by voice_url.
 * @property voiceMethod - The HTTP method Twilio will use when requesting the above Url.
 * @property voiceUrl - The URL Twilio will request when the SIM-connected device makes a call.
 */
export interface UpdateOptions {
  callbackMethod?: string;
  callbackUrl?: string;
  commandsCallbackMethod?: string;
  commandsCallbackUrl?: string;
  friendlyName?: string;
  ratePlan?: string;
  smsFallbackMethod?: string;
  smsFallbackUrl?: string;
  smsMethod?: string;
  smsUrl?: string;
  status?: sim.status;
  uniqueName?: string;
  voiceFallbackMethod?: string;
  voiceFallbackUrl?: string;
  voiceMethod?: string;
  voiceUrl?: string;
}

/**
 * Options to pass to update
 *
 * @property uniqueName - A user-provided string that uniquely identifies this resource as an alternative to the Sid.
 * @property callbackMethod - The HTTP method Twilio will use when making a request to the callback URL.
 * @property callbackUrl - Twilio will make a request to this URL when the Sim has finished updating.
 * @property friendlyName - A user-provided string that identifies this resource.
 * @property ratePlan - The Sid or UniqueName of the RatePlan that this Sim should use.
 * @property status - A string representing the status of the Sim.
 * @property commandsCallbackMethod - A string representing the HTTP method to use when making a request to CommandsCallbackUrl.
 * @property commandsCallbackUrl - The URL that will receive a webhook when this Sim originates a Command.
 * @property smsFallbackMethod - The HTTP method Twilio will use when requesting the sms_fallback_url.
 * @property smsFallbackUrl - The URL that Twilio will request if an error occurs retrieving or executing the TwiML requested by sms_url.
 * @property smsMethod - The HTTP method Twilio will use when requesting the above Url.
 * @property smsUrl - The URL Twilio will request when the SIM-connected device sends an SMS message that is not a Command.
 * @property voiceFallbackMethod - The HTTP method Twilio will use when requesting the voice_fallback_url.
 * @property voiceFallbackUrl - The URL that Twilio will request if an error occurs retrieving or executing the TwiML requested by voice_url.
 * @property voiceMethod - The HTTP method Twilio will use when requesting the above Url.
 * @property voiceUrl - The URL Twilio will request when the SIM-connected device makes a call.
 */
export interface UpdateOptions {
  callbackMethod?: string;
  callbackUrl?: string;
  commandsCallbackMethod?: string;
  commandsCallbackUrl?: string;
  friendlyName?: string;
  ratePlan?: string;
  smsFallbackMethod?: string;
  smsFallbackUrl?: string;
  smsMethod?: string;
  smsUrl?: string;
  status?: sim.status;
  uniqueName?: string;
  voiceFallbackMethod?: string;
  voiceFallbackUrl?: string;
  voiceMethod?: string;
  voiceUrl?: string;
}


declare class SimPage extends Page {
  /**
   * @constructor Twilio.Wireless.V1.SimPage
   * @augments Page
   * @description Initialize the SimPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: Twilio.Wireless.V1, response: object, solution: object);

  /**
   * Build an instance of SimInstance
   *
   * @function getInstance
   * @memberof Twilio.Wireless.V1.SimPage
   * @instance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: object);
}


declare class SimInstance {
  /**
   * @constructor Twilio.Wireless.V1.SimInstance
   * @description Initialize the SimContext
   *
   * @property sid - A 34 character string that uniquely identifies this resource.
   * @property uniqueName - A user-provided string that uniquely identifies this resource as an alternative to the sid.
   * @property accountSid - The unique id of the Account that this Sim belongs to.
   * @property ratePlanSid - The unique ID of the Rate Plan configured for this Sim.
   * @property friendlyName - A user-provided string that identifies this resource.
   * @property iccid - The ICCID associated with the SIM.
   * @property eId - The e_id
   * @property status - A string representing the status of the Sim.
   * @property commandsCallbackUrl - The URL that will receive a webhook when this Sim originates a machine-to-machine Command.
   * @property commandsCallbackMethod - A string representing the HTTP method to use when making a request to commands_callback_url.
   * @property smsFallbackMethod - The HTTP method Twilio will use when requesting the sms_fallback_url.
   * @property smsFallbackUrl - The URL that Twilio will request if an error occurs retrieving or executing the TwiML requested by sms_url.
   * @property smsMethod - The HTTP method Twilio will use when requesting the above Url.
   * @property smsUrl - The URL Twilio will request when the SIM-connected device send an SMS that is not a Command.
   * @property voiceFallbackMethod - The HTTP method Twilio will use when requesting the voice_fallback_url.
   * @property voiceFallbackUrl - The URL that Twilio will request if an error occurs retrieving or executing the TwiML requested by voice_url.
   * @property voiceMethod - The HTTP method Twilio will use when requesting the above Url.
   * @property voiceUrl - The URL Twilio will request when the SIM-connected device makes a call.
   * @property dateCreated - The date that this resource was created, given as GMT in ISO 8601 format.
   * @property dateUpdated - The date that this resource was last updated, given as GMT in ISO 8601 format.
   * @property url - The URL for this resource.
   * @property links - Each Sim instance resource supports a few subresources, listed here for convenience.
   * @property ipAddress - The ip_address
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param sid - The sid
   */
  constructor(version: Twilio.Wireless.V1, payload: object, sid: sid_like);

  _proxy?: SimContext;
  /**
   * Access the dataSessions
   *
   * @function dataSessions
   * @memberof Twilio.Wireless.V1.SimInstance
   * @instance
   */
  dataSessions();
  /**
   * fetch a SimInstance
   *
   * @function fetch
   * @memberof Twilio.Wireless.V1.SimInstance
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * Produce a plain JSON object version of the SimInstance for serialization.
   * Removes any circular references in the object.
   *
   * @function toJSON
   * @memberof Twilio.Wireless.V1.SimInstance
   * @instance
   */
  toJSON();
  /**
   * update a SimInstance
   *
   * @function update
   * @memberof Twilio.Wireless.V1.SimInstance
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle processed record
   */
  update(opts?: object, callback?: function);
  /**
   * Access the usageRecords
   *
   * @function usageRecords
   * @memberof Twilio.Wireless.V1.SimInstance
   * @instance
   */
  usageRecords();
}


declare class SimContext {
  /**
   * @constructor Twilio.Wireless.V1.SimContext
   * @description Initialize the SimContext
   *
   * @property usageRecords - usageRecords resource
   * @property dataSessions - dataSessions resource
   *
   * @param version - Version of the resource
   * @param sid - The sid
   */
  constructor(version: Twilio.Wireless.V1, sid: sid_like);

  dataSessions?: Twilio.Wireless.V1.SimContext.DataSessionList;
  /**
   * fetch a SimInstance
   *
   * @function fetch
   * @memberof Twilio.Wireless.V1.SimContext
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * update a SimInstance
   *
   * @function update
   * @memberof Twilio.Wireless.V1.SimContext
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle processed record
   */
  update(opts?: object, callback?: function);
  usageRecords?: Twilio.Wireless.V1.SimContext.UsageRecordList;
}

export { SimContext, SimInstance, SimList, SimListInstance, SimPage, SimPayload, SimResource }
