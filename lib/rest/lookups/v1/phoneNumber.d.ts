/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../base/Page');
import Response = require('../../../http/response');
import V1 = require('../V1');
import serialize = require('../../../base/serialize');
import { SerializableClass } from '../../../interfaces';

/**
 * @description Initialize the PhoneNumberList
 *
 * @param version - Version of the resource
 */
declare function PhoneNumberList(version: V1): PhoneNumberListInstance;

interface PhoneNumberResource {
  add_ons: string;
  caller_name: string;
  carrier: string;
  country_code: string;
  national_format: string;
  phone_number: string;
  url: string;
}

interface PhoneNumberPayload extends PhoneNumberResource, Page.TwilioResponsePayload {
}

interface PhoneNumberSolution {
}

interface PhoneNumberListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): PhoneNumberContext;
  /**
   * Constructs a phone_number
   *
   * @param phoneNumber - The phone_number
   */
  get(phoneNumber: string);
}

/**
 * Options to pass to fetch
 *
 * @property countryCode - Optional ISO country code of the phone number.
 * @property type - Indicates the type of information you would like returned with your request.
 * @property addOns - Indicates the particular Add-on you would like to use to get more information.
 * @property addOnsData - The add_ons_data
 */
export interface PhoneNumberInstanceFetchOptions {
  addOns?: string|list;
  addOnsData?: object;
  countryCode?: string;
  type?: string|list;
}

/**
 * Options to pass to fetch
 *
 * @property countryCode - Optional ISO country code of the phone number.
 * @property type - Indicates the type of information you would like returned with your request.
 * @property addOns - Indicates the particular Add-on you would like to use to get more information.
 * @property addOnsData - The add_ons_data
 */
export interface PhoneNumberContextFetchOptions {
  addOns?: string|list;
  addOnsData?: object;
  countryCode?: string;
  type?: string|list;
}


declare class PhoneNumberPage extends Page {
  /**
   * @constructor Twilio.Lookups.V1.PhoneNumberPage
   * @augments Page
   * @description Initialize the PhoneNumberPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: Twilio.Lookups.V1, response: Response<string>, solution: object);

  /**
   * Build an instance of PhoneNumberInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: object);
}


declare class PhoneNumberInstance {
  /**
   * @constructor Twilio.Lookups.V1.PhoneNumberInstance
   * @description Initialize the PhoneNumberContext
   *
   * @property callerName - String indicating the name of the owner of the phone number.
   * @property countryCode - The ISO country code for the phone number.
   * @property phoneNumber - The phone number, in E.
   * @property nationalFormat - The phone number, in national format.
   * @property carrier - The carrier
   * @property addOns - Results of any Add-ons you have specified using the AddOn parameter in the request, as a JSON dictionary.
   * @property url - The url
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param phoneNumber - The phone_number
   */
  constructor(version: Twilio.Lookups.V1, payload: object, phoneNumber: phone_number);

  _proxy?: PhoneNumberContext;
  /**
   * fetch a PhoneNumberInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  fetch(opts?: PhoneNumberInstanceFetchOptions, callback?: function);
  /**
   * Produce a plain JSON object version of the PhoneNumberInstance for serialization.
   * Removes any circular references in the object.
   */
  toJSON();
}


declare class PhoneNumberContext {
  /**
   * @constructor Twilio.Lookups.V1.PhoneNumberContext
   * @description Initialize the PhoneNumberContext
   *
   * @param version - Version of the resource
   * @param phoneNumber - The phone_number
   */
  constructor(version: Twilio.Lookups.V1, phoneNumber: phone_number);

  /**
   * fetch a PhoneNumberInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  fetch(opts?: PhoneNumberContextFetchOptions, callback?: function);
}

export { PhoneNumberContext, PhoneNumberInstance, PhoneNumberList, PhoneNumberListInstance, PhoneNumberPage, PhoneNumberPayload, PhoneNumberResource, PhoneNumberSolution }
