/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../base/Page');
import Response = require('../../../../http/response');
import V1 = require('../../V1');
import serialize = require('../../../../base/serialize');
import { ListEachOptions, ListOptions, PageOptions } from '../../../../interfaces';
import { SerializableClass } from '../../../../interfaces';

/**
 * @description Initialize the RoomRecordingList
 *
 * @param version - Version of the resource
 * @param roomSid - The room_sid
 */
declare function RoomRecordingList(version: V1, roomSid: string): RoomRecordingListInstance;

interface RoomRecordingResource {
  account_sid: string;
  codec: RoomRecordingCodec;
  container_format: RoomRecordingFormat;
  date_created: Date;
  duration: number;
  grouping_sids: string;
  links: string;
  room_sid: string;
  sid: string;
  size: number;
  source_sid: string;
  status: RoomRecordingStatus;
  track_name: string;
  type: RoomRecordingType;
  url: string;
}

interface RoomRecordingPayload extends RoomRecordingResource, Page.TwilioResponsePayload {
}

interface RoomRecordingSolution {
  roomSid?: string;
}

interface RoomRecordingListInstance {
  /**
   * @param sid - sid of instance
   */
  RoomRecordingListInstance(sid: string);
  /**
   * Streams RoomRecordingInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function each
   * @memberof Twilio.Video.V1.RoomContext.RoomRecordingList
   * @instance
   *
   * @param opts - ...
   * @param callback - Function to process each record
   */
  each(opts?: object, callback?: Function);
  /**
   * Constructs a room_recording
   *
   * @function get
   * @memberof Twilio.Video.V1.RoomContext.RoomRecordingList
   * @instance
   *
   * @param sid - The sid
   */
  get(sid: string);
  /**
   * Retrieve a single target page of RoomRecordingInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function getPage
   * @memberof Twilio.Video.V1.RoomContext.RoomRecordingList
   * @instance
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: function);
  /**
   * @description Lists RoomRecordingInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function list
   * @memberof Twilio.Video.V1.RoomContext.RoomRecordingList
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle list of records
   */
  list(opts?: object, callback?: function);
  /**
   * Retrieve a single page of RoomRecordingInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function page
   * @memberof Twilio.Video.V1.RoomContext.RoomRecordingList
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle list of records
   */
  page(opts?: object, callback?: function);
}


declare class RoomRecordingPage extends Page {
  /**
   * @constructor Twilio.Video.V1.RoomContext.RoomRecordingPage
   * @augments Page
   * @description Initialize the RoomRecordingPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: Twilio.Video.V1, response: Response<string>, solution: object);

  /**
   * Build an instance of RoomRecordingInstance
   *
   * @function getInstance
   * @memberof Twilio.Video.V1.RoomContext.RoomRecordingPage
   * @instance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: object);
}


declare class RoomRecordingInstance {
  /**
   * @constructor Twilio.Video.V1.RoomContext.RoomRecordingInstance
   * @description Initialize the RoomRecordingContext
   *
   * @property accountSid - The account_sid
   * @property status - The status
   * @property dateCreated - The date_created
   * @property sid - The sid
   * @property sourceSid - The source_sid
   * @property size - The size
   * @property url - The url
   * @property type - The type
   * @property duration - The duration
   * @property containerFormat - The container_format
   * @property codec - The codec
   * @property groupingSids - The grouping_sids
   * @property trackName - The track_name
   * @property roomSid - The room_sid
   * @property links - The links
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param roomSid - The room_sid
   * @param sid - The sid
   */
  constructor(version: Twilio.Video.V1, payload: object, roomSid: sid, sid: sid);

  _proxy?: RoomRecordingContext;
  /**
   * fetch a RoomRecordingInstance
   *
   * @function fetch
   * @memberof Twilio.Video.V1.RoomContext.RoomRecordingInstance
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * Produce a plain JSON object version of the RoomRecordingInstance for serialization.
   * Removes any circular references in the object.
   *
   * @function toJSON
   * @memberof Twilio.Video.V1.RoomContext.RoomRecordingInstance
   * @instance
   */
  toJSON();
}


declare class RoomRecordingContext {
  /**
   * @constructor Twilio.Video.V1.RoomContext.RoomRecordingContext
   * @description Initialize the RoomRecordingContext
   *
   * @param version - Version of the resource
   * @param roomSid - The room_sid
   * @param sid - The sid
   */
  constructor(version: Twilio.Video.V1, roomSid: sid, sid: sid);

  /**
   * fetch a RoomRecordingInstance
   *
   * @function fetch
   * @memberof Twilio.Video.V1.RoomContext.RoomRecordingContext
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
}

export { RoomRecordingContext, RoomRecordingInstance, RoomRecordingList, RoomRecordingListInstance, RoomRecordingPage, RoomRecordingPayload, RoomRecordingResource, RoomRecordingSolution }
