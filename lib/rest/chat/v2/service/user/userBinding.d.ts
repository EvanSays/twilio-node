/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../../base/Page');
import V2 = require('../../../V2');
import serialize = require('../../../../../base/serialize');
import { ListEachOptions, ListOptions, PageOptions } from '../../../../../interfaces';
import { SerializableClass } from '../../../../../interfaces';

/**
 * @description Initialize the UserBindingList
 *
 * @param version - Version of the resource
 * @param serviceSid - The unique id of the Service this binding belongs to.
 * @param userSid - The unique id of the User for this binding.
 */
declare function UserBindingList(version: V2, serviceSid: string, userSid: string): UserBindingListInstance;

interface UserBindingResource {
  account_sid: string;
  binding_type: UserBindingBindingType;
  credential_sid: string;
  date_created: Date;
  date_updated: Date;
  endpoint: string;
  identity: string;
  message_types: string;
  service_sid: string;
  sid: string;
  url: string;
  user_sid: string;
}

interface UserBindingPayload extends UserBindingResource, Page.TwilioResponsePayload {
}

interface UserBindingListInstance {
  /* jshint ignore:start */
  /**
   * Streams UserBindingInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function each
   * @memberof Twilio.Chat.V2.ServiceContext.UserContext.UserBindingList
   * @instance
   *
   * @param {object} [opts] - ...
   * @param {user_binding.binding_type|list} [opts.bindingType] -
   *          The push technology used for the bindings returned.
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
  UserBindingListInstance.each = function each(opts, callback) {
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
   * Retrieve a single target page of UserBindingInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function getPage
   * @memberof Twilio.Chat.V2.ServiceContext.UserContext.UserBindingList
   * @instance
   *
   * @param {string} [targetUrl] - API-generated URL for the requested results page
   * @param {function} [callback] - Callback to handle list of records
   *
   * @returns {Promise} Resolves to a list of records
   */
  /* jshint ignore:end */
  UserBindingListInstance.getPage = function getPage(targetUrl, callback) {
    var deferred = Q.defer();

    var promise = this._version._domain.twilio.request({method: 'GET', uri: targetUrl});

    promise = promise.then(function(payload) {
      deferred.resolve(new UserBindingPage(this._version, payload, this._solution));
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
   * @description Lists UserBindingInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function list
   * @memberof Twilio.Chat.V2.ServiceContext.UserContext.UserBindingList
   * @instance
   *
   * @param {object} [opts] - ...
   * @param {user_binding.binding_type|list} [opts.bindingType] -
   *          The push technology used for the bindings returned.
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
  UserBindingListInstance.list = function list(opts, callback) {
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
   * Retrieve a single page of UserBindingInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function page
   * @memberof Twilio.Chat.V2.ServiceContext.UserContext.UserBindingList
   * @instance
   *
   * @param {object} [opts] - ...
   * @param {user_binding.binding_type|list} [opts.bindingType] -
   *          The push technology used for the bindings returned.
   * @param {string} [opts.pageToken] - PageToken provided by the API
   * @param {number} [opts.pageNumber] -
   *          Page Number, this value is simply for client state
   * @param {number} [opts.pageSize] - Number of records to return, defaults to 50
   * @param {function} [callback] - Callback to handle list of records
   *
   * @returns {Promise} Resolves to a list of records
   */
  /* jshint ignore:end */
  UserBindingListInstance.page = function page(opts, callback) {
    if (_.isFunction(opts)) {
      callback = opts;
      opts = {};
    }
    opts = opts || {};

    var deferred = Q.defer();
    var data = values.of({
      'BindingType': serialize.map(_.get(opts, 'bindingType'), function(e) { return e; }),
      'PageToken': opts.pageToken,
      'Page': opts.pageNumber,
      'PageSize': opts.pageSize
    });

    var promise = this._version.page({uri: this._uri, method: 'GET', params: data});

    promise = promise.then(function(payload) {
      deferred.resolve(new UserBindingPage(this._version, payload, this._solution));
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


declare class UserBindingPage extends Page {
  /**
   * @constructor Twilio.Chat.V2.ServiceContext.UserContext.UserBindingPage
   * @augments Page
   * @description Initialize the UserBindingPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: Twilio.Chat.V2, response: object, solution: object);

  /**
   * Build an instance of UserBindingInstance
   *
   * @function getInstance
   * @memberof Twilio.Chat.V2.ServiceContext.UserContext.UserBindingPage
   * @instance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: object);
}


declare class UserBindingInstance {
  /**
   * @constructor Twilio.Chat.V2.ServiceContext.UserContext.UserBindingInstance
   * @description Initialize the UserBindingContext
   *
   * @property sid - A 34 character string that uniquely identifies this resource.
   * @property accountSid - The unique id of the Account responsible for this binding.
   * @property serviceSid - The unique id of the Service this binding belongs to.
   * @property dateCreated - The date that this resource was created.
   * @property dateUpdated - The date that this resource was last updated.
   * @property endpoint - The unique endpoint identifier for this Binding.
   * @property identity - A unique string identifier for the Binding for this User in this Service.
   * @property userSid - The unique id of the User for this binding.
   * @property credentialSid - The unique id of the Credential for this binding.
   * @property bindingType - The push technology to use for this binding.
   * @property messageTypes - List of message types for this binding.
   * @property url - An absolute URL for this binding.
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param serviceSid - The unique id of the Service this binding belongs to.
   * @param userSid - The unique id of the User for this binding.
   * @param sid - The sid
   */
  constructor(version: Twilio.Chat.V2, payload: object, serviceSid: sid, userSid: sid, sid: sid);

  _proxy?: UserBindingContext;
  /**
   * fetch a UserBindingInstance
   *
   * @function fetch
   * @memberof Twilio.Chat.V2.ServiceContext.UserContext.UserBindingInstance
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * remove a UserBindingInstance
   *
   * @function remove
   * @memberof Twilio.Chat.V2.ServiceContext.UserContext.UserBindingInstance
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: function);
  /**
   * Produce a plain JSON object version of the UserBindingInstance for serialization.
   * Removes any circular references in the object.
   *
   * @function toJSON
   * @memberof Twilio.Chat.V2.ServiceContext.UserContext.UserBindingInstance
   * @instance
   */
  toJSON();
}


declare class UserBindingContext {
  /**
   * @constructor Twilio.Chat.V2.ServiceContext.UserContext.UserBindingContext
   * @description Initialize the UserBindingContext
   *
   * @param version - Version of the resource
   * @param serviceSid - The service_sid
   * @param userSid - The user_sid
   * @param sid - The sid
   */
  constructor(version: Twilio.Chat.V2, serviceSid: sid, userSid: sid_like, sid: sid);

  /**
   * fetch a UserBindingInstance
   *
   * @function fetch
   * @memberof Twilio.Chat.V2.ServiceContext.UserContext.UserBindingContext
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * remove a UserBindingInstance
   *
   * @function remove
   * @memberof Twilio.Chat.V2.ServiceContext.UserContext.UserBindingContext
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: function);
}

export { UserBindingContext, UserBindingInstance, UserBindingList, UserBindingListInstance, UserBindingPage, UserBindingPayload, UserBindingResource }
