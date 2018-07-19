/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../base/Page');
import Response = require('../../../http/response');
import V1 = require('../V1');
import { SerializableClass } from '../../../interfaces';

/**
 * @description Initialize the VoiceList
 *
 * @param version - Version of the resource
 */
declare function VoiceList(version: V1): VoiceListInstance;

interface VoiceResource {
  links: string;
  name: string;
  url: string;
}

interface VoicePayload extends VoiceResource, Page.TwilioResponsePayload {
}

interface VoiceSolution {
}

interface VoiceListInstance {
  countries?: object;
  numbers?: object;
}


declare class VoicePage extends Page {
  /**
   * @constructor Twilio.Pricing.V1.VoicePage
   * @augments Page
   * @description Initialize the VoicePage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: Twilio.Pricing.V1, response: Response<string>, solution: object);

  /**
   * Build an instance of VoiceInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: object);
}


declare class VoiceInstance {
  /**
   * @constructor Twilio.Pricing.V1.VoiceInstance
   * @description Initialize the VoiceContext
   *
   * @property name - The name
   * @property url - The url
   * @property links - The links
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   */
  constructor(version: Twilio.Pricing.V1, payload: object);

  /**
   * Produce a plain JSON object version of the VoiceInstance for serialization.
   * Removes any circular references in the object.
   */
  toJSON();
}

export { VoiceInstance, VoiceList, VoiceListInstance, VoicePage, VoicePayload, VoiceResource, VoiceSolution }
