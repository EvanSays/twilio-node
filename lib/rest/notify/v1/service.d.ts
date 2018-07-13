/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../base/Page');
import V1 = require('../V1');
import serialize = require('../../../base/serialize');
import { BindingList } from './service/binding';
import { ListEachOptions, ListOptions, PageOptions } from '../../../interfaces';
import { NotificationList } from './service/notification';
import { SegmentList } from './service/segment';
import { SerializableClass } from '../../../interfaces';
import { UserList } from './service/user';

/**
 * @description Initialize the ServiceList
 * PLEASE NOTE that this class contains beta products that are subject to change. Use them with caution.
 *
 * @param version - Version of the resource
 */
declare function ServiceList(version: V1): ServiceListInstance;

interface ServiceResource {
  account_sid: string;
  alexa_skill_id: string;
  apn_credential_sid: string;
  date_created: Date;
  date_updated: Date;
  default_alexa_notification_protocol_version: string;
  default_apn_notification_protocol_version: string;
  default_fcm_notification_protocol_version: string;
  default_gcm_notification_protocol_version: string;
  facebook_messenger_page_id: string;
  fcm_credential_sid: string;
  friendly_name: string;
  gcm_credential_sid: string;
  links: string;
  log_enabled: boolean;
  messaging_service_sid: string;
  sid: string;
  url: string;
}

interface ServicePayload extends ServiceResource, Page.TwilioResponsePayload {
}

interface ServiceListInstance {
  /* jshint ignore:start */
  /**
   * create a ServiceInstance
   *
   * @function create
   * @memberof Twilio.Notify.V1.ServiceList
   * @instance
   *
   * @param {object} [opts] - ...
   * @param {string} [opts.friendlyName] -
   *          Human-readable name for this service instance
   * @param {string} [opts.apnCredentialSid] -
   *          The SID of the Credential to be used for APN Bindings.
   * @param {string} [opts.gcmCredentialSid] -
   *          The SID of the Credential to be used for GCM Bindings.
   * @param {string} [opts.messagingServiceSid] -
   *          The SID of the Messaging Service to be used for SMS Bindings.
   * @param {string} [opts.facebookMessengerPageId] -
   *          The Page ID to be used to send for Facebook Messenger Bindings.
   * @param {string} [opts.defaultApnNotificationProtocolVersion] -
   *          The version of the protocol to be used for sending APNS notifications.
   * @param {string} [opts.defaultGcmNotificationProtocolVersion] -
   *          The version of the protocol to be used for sending GCM notifications.
   * @param {string} [opts.fcmCredentialSid] -
   *          The SID of the Credential to be used for FCM Bindings.
   * @param {string} [opts.defaultFcmNotificationProtocolVersion] -
   *          The version of the protocol to be used for sending FCM notifications.
   * @param {boolean} [opts.logEnabled] - The log_enabled
   * @param {string} [opts.alexaSkillId] - The alexa_skill_id
   * @param {string} [opts.defaultAlexaNotificationProtocolVersion] -
   *          The default_alexa_notification_protocol_version
   * @param {function} [callback] - Callback to handle processed record
   *
   * @returns {Promise} Resolves to processed ServiceInstance
   */
  /* jshint ignore:end */
  ServiceListInstance.create = function create(opts, callback) {
    if (_.isFunction(opts)) {
      callback = opts;
      opts = {};
    }
    opts = opts || {};

    var deferred = Q.defer();
    var data = values.of({
      'FriendlyName': _.get(opts, 'friendlyName'),
      'ApnCredentialSid': _.get(opts, 'apnCredentialSid'),
      'GcmCredentialSid': _.get(opts, 'gcmCredentialSid'),
      'MessagingServiceSid': _.get(opts, 'messagingServiceSid'),
      'FacebookMessengerPageId': _.get(opts, 'facebookMessengerPageId'),
      'DefaultApnNotificationProtocolVersion': _.get(opts, 'defaultApnNotificationProtocolVersion'),
      'DefaultGcmNotificationProtocolVersion': _.get(opts, 'defaultGcmNotificationProtocolVersion'),
      'FcmCredentialSid': _.get(opts, 'fcmCredentialSid'),
      'DefaultFcmNotificationProtocolVersion': _.get(opts, 'defaultFcmNotificationProtocolVersion'),
      'LogEnabled': serialize.bool(_.get(opts, 'logEnabled')),
      'AlexaSkillId': _.get(opts, 'alexaSkillId'),
      'DefaultAlexaNotificationProtocolVersion': _.get(opts, 'defaultAlexaNotificationProtocolVersion')
    });

    var promise = this._version.create({uri: this._uri, method: 'POST', data: data});

    promise = promise.then(function(payload) {
      deferred.resolve(new ServiceInstance(this._version, payload, this._solution.sid));
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
   * Streams ServiceInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function each
   * @memberof Twilio.Notify.V1.ServiceList
   * @instance
   *
   * @param {object} [opts] - ...
   * @param {string} [opts.friendlyName] - Filter services by FriendlyName
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
  ServiceListInstance.each = function each(opts, callback) {
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
   * Retrieve a single target page of ServiceInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function getPage
   * @memberof Twilio.Notify.V1.ServiceList
   * @instance
   *
   * @param {string} [targetUrl] - API-generated URL for the requested results page
   * @param {function} [callback] - Callback to handle list of records
   *
   * @returns {Promise} Resolves to a list of records
   */
  /* jshint ignore:end */
  ServiceListInstance.getPage = function getPage(targetUrl, callback) {
    var deferred = Q.defer();

    var promise = this._version._domain.twilio.request({method: 'GET', uri: targetUrl});

    promise = promise.then(function(payload) {
      deferred.resolve(new ServicePage(this._version, payload, this._solution));
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
   * @description Lists ServiceInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function list
   * @memberof Twilio.Notify.V1.ServiceList
   * @instance
   *
   * @param {object} [opts] - ...
   * @param {string} [opts.friendlyName] - Filter services by FriendlyName
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
  ServiceListInstance.list = function list(opts, callback) {
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
   * Retrieve a single page of ServiceInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function page
   * @memberof Twilio.Notify.V1.ServiceList
   * @instance
   *
   * @param {object} [opts] - ...
   * @param {string} [opts.friendlyName] - Filter services by FriendlyName
   * @param {string} [opts.pageToken] - PageToken provided by the API
   * @param {number} [opts.pageNumber] -
   *          Page Number, this value is simply for client state
   * @param {number} [opts.pageSize] - Number of records to return, defaults to 50
   * @param {function} [callback] - Callback to handle list of records
   *
   * @returns {Promise} Resolves to a list of records
   */
  /* jshint ignore:end */
  ServiceListInstance.page = function page(opts, callback) {
    if (_.isFunction(opts)) {
      callback = opts;
      opts = {};
    }
    opts = opts || {};

    var deferred = Q.defer();
    var data = values.of({
      'FriendlyName': _.get(opts, 'friendlyName'),
      'PageToken': opts.pageToken,
      'Page': opts.pageNumber,
      'PageSize': opts.pageSize
    });

    var promise = this._version.page({uri: this._uri, method: 'GET', params: data});

    promise = promise.then(function(payload) {
      deferred.resolve(new ServicePage(this._version, payload, this._solution));
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
 * @property friendlyName - Human-readable name for this service instance
 * @property apnCredentialSid - The SID of the default Credential to be used for APN Bindings
 * @property gcmCredentialSid - The SID of the default Credential to be used for GCM Bindings
 * @property messagingServiceSid - The SID of the Messaging Service to be used for SMS Bindings.
 * @property facebookMessengerPageId - The Page ID to be used to send for Facebook Messenger Bindings.
 * @property defaultApnNotificationProtocolVersion - The version of the protocol to be used for sending APNS notifications.
 * @property defaultGcmNotificationProtocolVersion - The version of the protocol to be used for sending GCM notifications.
 * @property fcmCredentialSid - The SID of the default Credential to be used for FCM Bindings
 * @property defaultFcmNotificationProtocolVersion - The version of the protocol to be used for sending FCM notifications.
 * @property logEnabled - The log_enabled
 * @property alexaSkillId - The alexa_skill_id
 * @property defaultAlexaNotificationProtocolVersion - The default_alexa_notification_protocol_version
 */
export interface UpdateOptions {
  alexaSkillId?: string;
  apnCredentialSid?: string;
  defaultAlexaNotificationProtocolVersion?: string;
  defaultApnNotificationProtocolVersion?: string;
  defaultFcmNotificationProtocolVersion?: string;
  defaultGcmNotificationProtocolVersion?: string;
  facebookMessengerPageId?: string;
  fcmCredentialSid?: string;
  friendlyName?: string;
  gcmCredentialSid?: string;
  logEnabled?: boolean;
  messagingServiceSid?: string;
}

/**
 * Options to pass to update
 *
 * @property friendlyName - Human-readable name for this service instance
 * @property apnCredentialSid - The SID of the default Credential to be used for APN Bindings
 * @property gcmCredentialSid - The SID of the default Credential to be used for GCM Bindings
 * @property messagingServiceSid - The SID of the Messaging Service to be used for SMS Bindings.
 * @property facebookMessengerPageId - The Page ID to be used to send for Facebook Messenger Bindings.
 * @property defaultApnNotificationProtocolVersion - The version of the protocol to be used for sending APNS notifications.
 * @property defaultGcmNotificationProtocolVersion - The version of the protocol to be used for sending GCM notifications.
 * @property fcmCredentialSid - The SID of the default Credential to be used for FCM Bindings
 * @property defaultFcmNotificationProtocolVersion - The version of the protocol to be used for sending FCM notifications.
 * @property logEnabled - The log_enabled
 * @property alexaSkillId - The alexa_skill_id
 * @property defaultAlexaNotificationProtocolVersion - The default_alexa_notification_protocol_version
 */
export interface UpdateOptions {
  alexaSkillId?: string;
  apnCredentialSid?: string;
  defaultAlexaNotificationProtocolVersion?: string;
  defaultApnNotificationProtocolVersion?: string;
  defaultFcmNotificationProtocolVersion?: string;
  defaultGcmNotificationProtocolVersion?: string;
  facebookMessengerPageId?: string;
  fcmCredentialSid?: string;
  friendlyName?: string;
  gcmCredentialSid?: string;
  logEnabled?: boolean;
  messagingServiceSid?: string;
}


declare class ServicePage extends Page {
  /**
   * @constructor Twilio.Notify.V1.ServicePage
   * @augments Page
   * @description Initialize the ServicePage
   * PLEASE NOTE that this class contains beta products that are subject to change. Use them with caution.
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: Twilio.Notify.V1, response: object, solution: object);

  /**
   * Build an instance of ServiceInstance
   *
   * @function getInstance
   * @memberof Twilio.Notify.V1.ServicePage
   * @instance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: object);
}


declare class ServiceInstance {
  /**
   * @constructor Twilio.Notify.V1.ServiceInstance
   * @description Initialize the ServiceContext
   * PLEASE NOTE that this class contains beta products that are subject to change. Use them with caution.
   *
   * @property sid - The sid
   * @property accountSid - The account_sid
   * @property friendlyName - Human-readable name for this service instance
   * @property dateCreated - The date_created
   * @property dateUpdated - The date_updated
   * @property apnCredentialSid - The SID of the Credential to be used for APN Bindings.
   * @property gcmCredentialSid - The SID of the Credential to be used for GCM Bindings.
   * @property fcmCredentialSid - The SID of the Credential to be used for FCM Bindings.
   * @property messagingServiceSid - The SID of the Messaging Service to be used for SMS Bindings.
   * @property facebookMessengerPageId - The Page ID to be used to send for Facebook Messenger Bindings.
   * @property defaultApnNotificationProtocolVersion - The version of the protocol to be used for sending APNS notifications.
   * @property defaultGcmNotificationProtocolVersion - The version of the protocol to be used for sending GCM notifications.
   * @property defaultFcmNotificationProtocolVersion - The version of the protocol to be used for sending FCM notifications.
   * @property logEnabled - The log_enabled
   * @property url - The url
   * @property links - The links
   * @property alexaSkillId - The alexa_skill_id
   * @property defaultAlexaNotificationProtocolVersion - The default_alexa_notification_protocol_version
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param sid - The sid
   */
  constructor(version: Twilio.Notify.V1, payload: object, sid: sid);

  _proxy?: ServiceContext;
  /**
   * Access the bindings
   *
   * @function bindings
   * @memberof Twilio.Notify.V1.ServiceInstance
   * @instance
   */
  bindings();
  /**
   * fetch a ServiceInstance
   *
   * @function fetch
   * @memberof Twilio.Notify.V1.ServiceInstance
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * Access the notifications
   *
   * @function notifications
   * @memberof Twilio.Notify.V1.ServiceInstance
   * @instance
   */
  notifications();
  /**
   * remove a ServiceInstance
   *
   * @function remove
   * @memberof Twilio.Notify.V1.ServiceInstance
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: function);
  /**
   * Access the segments
   *
   * @function segments
   * @memberof Twilio.Notify.V1.ServiceInstance
   * @instance
   */
  segments();
  /**
   * Produce a plain JSON object version of the ServiceInstance for serialization.
   * Removes any circular references in the object.
   *
   * @function toJSON
   * @memberof Twilio.Notify.V1.ServiceInstance
   * @instance
   */
  toJSON();
  /**
   * update a ServiceInstance
   *
   * @function update
   * @memberof Twilio.Notify.V1.ServiceInstance
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle processed record
   */
  update(opts?: object, callback?: function);
  /**
   * Access the users
   *
   * @function users
   * @memberof Twilio.Notify.V1.ServiceInstance
   * @instance
   */
  users();
}


declare class ServiceContext {
  /**
   * @constructor Twilio.Notify.V1.ServiceContext
   * @description Initialize the ServiceContext
   * PLEASE NOTE that this class contains beta products that are subject to change. Use them with caution.
   *
   * @property bindings - bindings resource
   * @property notifications - notifications resource
   * @property users - users resource
   * @property segments - segments resource
   *
   * @param version - Version of the resource
   * @param sid - The sid
   */
  constructor(version: Twilio.Notify.V1, sid: sid);

  bindings?: Twilio.Notify.V1.ServiceContext.BindingList;
  /**
   * fetch a ServiceInstance
   *
   * @function fetch
   * @memberof Twilio.Notify.V1.ServiceContext
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  notifications?: Twilio.Notify.V1.ServiceContext.NotificationList;
  /**
   * remove a ServiceInstance
   *
   * @function remove
   * @memberof Twilio.Notify.V1.ServiceContext
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: function);
  segments?: Twilio.Notify.V1.ServiceContext.SegmentList;
  /**
   * update a ServiceInstance
   *
   * @function update
   * @memberof Twilio.Notify.V1.ServiceContext
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle processed record
   */
  update(opts?: object, callback?: function);
  users?: Twilio.Notify.V1.ServiceContext.UserList;
}

export { ServiceContext, ServiceInstance, ServiceList, ServiceListInstance, ServicePage, ServicePayload, ServiceResource }
