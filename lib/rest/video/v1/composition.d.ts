/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../base/Page');
import V1 = require('../V1');
import serialize = require('../../../base/serialize');
import { ListEachOptions, ListOptions, PageOptions } from '../../../interfaces';
import { SerializableClass } from '../../../interfaces';

/**
 * @description Initialize the CompositionList
 * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
 *
 * @param version - Version of the resource
 */
declare function CompositionList(version: V1): CompositionListInstance;

interface CompositionResource {
  account_sid: string;
  audio_sources: string;
  audio_sources_excluded: string;
  bitrate: number;
  date_completed: string;
  date_created: Date;
  date_deleted: string;
  duration: number;
  format: CompositionFormat;
  links: string;
  resolution: string;
  room_sid: string;
  sid: string;
  size: number;
  status: CompositionStatus;
  trim: boolean;
  url: string;
  video_layout: string;
}

interface CompositionPayload extends CompositionResource, Page.TwilioResponsePayload {
}

interface CompositionListInstance {
  /* jshint ignore:start */
  /**
   * create a CompositionInstance
   *
   * @function create
   * @memberof Twilio.Video.V1.CompositionList
   * @instance
   *
   * @param {object} [opts] - ...
   * @param {string} [opts.roomSid] - Twilio Room SID.
   * @param {string} [opts.videoLayout] - The JSON video layout description.
   * @param {string|list} [opts.audioSources] -
   *          A list of audio sources related to this Composition.
   * @param {string|list} [opts.audioSourcesExcluded] -
   *          A list of audio sources excluded related to this Composition.
   * @param {string} [opts.resolution] - Pixel resolution of the composed video.
   * @param {composition.format} [opts.format] -
   *          Container format of the Composition media file. Any of the following: `mp4`, `webm`.
   * @param {string} [opts.statusCallback] -
   *          A URL that Twilio sends asynchronous webhook requests to on every composition event.
   * @param {string} [opts.statusCallbackMethod] -
   *          HTTP method Twilio should use when requesting the above URL.
   * @param {boolean} [opts.trim] -
   *          Boolean flag for clipping intervals that have no media.
   * @param {function} [callback] - Callback to handle processed record
   *
   * @returns {Promise} Resolves to processed CompositionInstance
   */
  /* jshint ignore:end */
  CompositionListInstance.create = function create(opts, callback) {
    if (_.isFunction(opts)) {
      callback = opts;
      opts = {};
    }
    opts = opts || {};

    var deferred = Q.defer();
    var data = values.of({
      'RoomSid': _.get(opts, 'roomSid'),
      'VideoLayout': serialize.object(_.get(opts, 'videoLayout')),
      'AudioSources': serialize.map(_.get(opts, 'audioSources'), function(e) { return e; }),
      'AudioSourcesExcluded': serialize.map(_.get(opts, 'audioSourcesExcluded'), function(e) { return e; }),
      'Resolution': _.get(opts, 'resolution'),
      'Format': _.get(opts, 'format'),
      'StatusCallback': _.get(opts, 'statusCallback'),
      'StatusCallbackMethod': _.get(opts, 'statusCallbackMethod'),
      'Trim': serialize.bool(_.get(opts, 'trim'))
    });

    var promise = this._version.create({uri: this._uri, method: 'POST', data: data});

    promise = promise.then(function(payload) {
      deferred.resolve(new CompositionInstance(this._version, payload, this._solution.sid));
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
   * Streams CompositionInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function each
   * @memberof Twilio.Video.V1.CompositionList
   * @instance
   *
   * @param {object} [opts] - ...
   * @param {composition.status} [opts.status] -
   *          Only show Compositions with the given status.
   * @param {Date} [opts.dateCreatedAfter] -
   *          Only show Compositions that started on or after this ISO8601 date-time.
   * @param {Date} [opts.dateCreatedBefore] -
   *          Only show Compositions that started before this this ISO8601 date-time.
   * @param {string} [opts.roomSid] - Only show Compositions with the given Room SID.
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
  CompositionListInstance.each = function each(opts, callback) {
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
   * Retrieve a single target page of CompositionInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function getPage
   * @memberof Twilio.Video.V1.CompositionList
   * @instance
   *
   * @param {string} [targetUrl] - API-generated URL for the requested results page
   * @param {function} [callback] - Callback to handle list of records
   *
   * @returns {Promise} Resolves to a list of records
   */
  /* jshint ignore:end */
  CompositionListInstance.getPage = function getPage(targetUrl, callback) {
    var deferred = Q.defer();

    var promise = this._version._domain.twilio.request({method: 'GET', uri: targetUrl});

    promise = promise.then(function(payload) {
      deferred.resolve(new CompositionPage(this._version, payload, this._solution));
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
   * @description Lists CompositionInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function list
   * @memberof Twilio.Video.V1.CompositionList
   * @instance
   *
   * @param {object} [opts] - ...
   * @param {composition.status} [opts.status] -
   *          Only show Compositions with the given status.
   * @param {Date} [opts.dateCreatedAfter] -
   *          Only show Compositions that started on or after this ISO8601 date-time.
   * @param {Date} [opts.dateCreatedBefore] -
   *          Only show Compositions that started before this this ISO8601 date-time.
   * @param {string} [opts.roomSid] - Only show Compositions with the given Room SID.
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
  CompositionListInstance.list = function list(opts, callback) {
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
   * Retrieve a single page of CompositionInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function page
   * @memberof Twilio.Video.V1.CompositionList
   * @instance
   *
   * @param {object} [opts] - ...
   * @param {composition.status} [opts.status] -
   *          Only show Compositions with the given status.
   * @param {Date} [opts.dateCreatedAfter] -
   *          Only show Compositions that started on or after this ISO8601 date-time.
   * @param {Date} [opts.dateCreatedBefore] -
   *          Only show Compositions that started before this this ISO8601 date-time.
   * @param {string} [opts.roomSid] - Only show Compositions with the given Room SID.
   * @param {string} [opts.pageToken] - PageToken provided by the API
   * @param {number} [opts.pageNumber] -
   *          Page Number, this value is simply for client state
   * @param {number} [opts.pageSize] - Number of records to return, defaults to 50
   * @param {function} [callback] - Callback to handle list of records
   *
   * @returns {Promise} Resolves to a list of records
   */
  /* jshint ignore:end */
  CompositionListInstance.page = function page(opts, callback) {
    if (_.isFunction(opts)) {
      callback = opts;
      opts = {};
    }
    opts = opts || {};

    var deferred = Q.defer();
    var data = values.of({
      'Status': _.get(opts, 'status'),
      'DateCreatedAfter': serialize.iso8601DateTime(_.get(opts, 'dateCreatedAfter')),
      'DateCreatedBefore': serialize.iso8601DateTime(_.get(opts, 'dateCreatedBefore')),
      'RoomSid': _.get(opts, 'roomSid'),
      'PageToken': opts.pageToken,
      'Page': opts.pageNumber,
      'PageSize': opts.pageSize
    });

    var promise = this._version.page({uri: this._uri, method: 'GET', params: data});

    promise = promise.then(function(payload) {
      deferred.resolve(new CompositionPage(this._version, payload, this._solution));
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


declare class CompositionPage extends Page {
  /**
   * @constructor Twilio.Video.V1.CompositionPage
   * @augments Page
   * @description Initialize the CompositionPage
   * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: Twilio.Video.V1, response: object, solution: object);

  /**
   * Build an instance of CompositionInstance
   *
   * @function getInstance
   * @memberof Twilio.Video.V1.CompositionPage
   * @instance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: object);
}


declare class CompositionInstance {
  /**
   * @constructor Twilio.Video.V1.CompositionInstance
   * @description Initialize the CompositionContext
   * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
   *
   * @property accountSid - Twilio Account SID.
   * @property status - The status of the Composition.
   * @property dateCreated - Date when the Composition Resource was created.
   * @property dateCompleted - Date when the media processing task finished.
   * @property dateDeleted - Date when the Composition Resource generated media was deleted.
   * @property sid - A 34-character string that uniquely identifies this Composition.
   * @property roomSid - A 34-character string that uniquely identifies the source of this Composition.
   * @property audioSources - A list of audio sources related to this Composition.
   * @property audioSourcesExcluded - A list of audio sources excluded related to this Composition.
   * @property videoLayout - The JSON video layout description.
   * @property resolution - Pixel resolution of the composed video.
   * @property trim - Boolean flag for clipping intervals that have no media.
   * @property format - The file format for this Composition.
   * @property bitrate - The bitrate
   * @property size - Size of the Composed media file expressed in bytes.
   * @property duration - Duration of the Composed media in seconds.
   * @property url - The absolute URL for this resource.
   * @property links - JSON object with the URL where the media file can be fetched.
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param sid - The Composition Sid that uniquely identifies the Composition to fetch.
   */
  constructor(version: Twilio.Video.V1, payload: object, sid: sid);

  _proxy?: CompositionContext;
  /**
   * fetch a CompositionInstance
   *
   * @function fetch
   * @memberof Twilio.Video.V1.CompositionInstance
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * remove a CompositionInstance
   *
   * @function remove
   * @memberof Twilio.Video.V1.CompositionInstance
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: function);
  /**
   * Produce a plain JSON object version of the CompositionInstance for serialization.
   * Removes any circular references in the object.
   *
   * @function toJSON
   * @memberof Twilio.Video.V1.CompositionInstance
   * @instance
   */
  toJSON();
}


declare class CompositionContext {
  /**
   * @constructor Twilio.Video.V1.CompositionContext
   * @description Initialize the CompositionContext
   * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
   *
   * @param version - Version of the resource
   * @param sid - The Composition Sid that uniquely identifies the Composition to fetch.
   */
  constructor(version: Twilio.Video.V1, sid: sid);

  /**
   * fetch a CompositionInstance
   *
   * @function fetch
   * @memberof Twilio.Video.V1.CompositionContext
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * remove a CompositionInstance
   *
   * @function remove
   * @memberof Twilio.Video.V1.CompositionContext
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: function);
}

export { CompositionContext, CompositionInstance, CompositionList, CompositionListInstance, CompositionPage, CompositionPayload, CompositionResource }
