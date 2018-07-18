/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../../base/Page');
import Response = require('../../../../../http/response');
import V2010 = require('../../../V2010');
import serialize = require('../../../../../base/serialize');
import { ListEachOptions, ListOptions, PageOptions } from '../../../../../interfaces';
import { SerializableClass } from '../../../../../interfaces';

/**
 * @description Initialize the TollFreeList
 *
 * @param version - Version of the resource
 * @param accountSid - The 34 character string that uniquely identifies your account.
 * @param countryCode - The ISO Country code to lookup phone numbers for.
 */
declare function TollFreeList(version: V2010, accountSid: string, countryCode: string): TollFreeListInstance;

interface TollFreeResource {
  address_requirements: string;
  beta: boolean;
  capabilities: string;
  friendly_name: string;
  iso_country: string;
  lata: string;
  latitude: number;
  locality: string;
  longitude: number;
  phone_number: string;
  postal_code: string;
  rate_center: string;
  region: string;
}

interface TollFreePayload extends TollFreeResource, Page.TwilioResponsePayload {
}

interface TollFreeSolution {
  accountSid?: string;
  countryCode?: string;
}

interface TollFreeListInstance {
  /**
   * @param sid - sid of instance
   */
  TollFreeListInstance(sid: string);
  /**
   * Streams TollFreeInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function each
   * @memberof Twilio.Api.V2010.AccountContext.AvailablePhoneNumberCountryContext.TollFreeList
   * @instance
   *
   * @param opts - ...
   * @param callback - Function to process each record
   */
  each(opts?: object, callback?: Function);
  /**
   * Retrieve a single target page of TollFreeInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function getPage
   * @memberof Twilio.Api.V2010.AccountContext.AvailablePhoneNumberCountryContext.TollFreeList
   * @instance
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: function);
  /**
   * @description Lists TollFreeInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function list
   * @memberof Twilio.Api.V2010.AccountContext.AvailablePhoneNumberCountryContext.TollFreeList
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle list of records
   */
  list(opts?: object, callback?: function);
  /**
   * Retrieve a single page of TollFreeInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function page
   * @memberof Twilio.Api.V2010.AccountContext.AvailablePhoneNumberCountryContext.TollFreeList
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle list of records
   */
  page(opts?: object, callback?: function);
}


declare class TollFreePage extends Page {
  /**
   * @constructor Twilio.Api.V2010.AccountContext.AvailablePhoneNumberCountryContext.TollFreePage
   * @augments Page
   * @description Initialize the TollFreePage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: Twilio.Api.V2010, response: Response<string>, solution: object);

  /**
   * Build an instance of TollFreeInstance
   *
   * @function getInstance
   * @memberof Twilio.Api.V2010.AccountContext.AvailablePhoneNumberCountryContext.TollFreePage
   * @instance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: object);
}


declare class TollFreeInstance {
  /**
   * @constructor Twilio.Api.V2010.AccountContext.AvailablePhoneNumberCountryContext.TollFreeInstance
   * @description Initialize the TollFreeContext
   *
   * @property friendlyName - A nicely-formatted version of the phone number.
   * @property phoneNumber - The phone number, in E.
   * @property lata - The LATA of this phone number.
   * @property locality - The locality/city of this phone number.
   * @property rateCenter - The rate center of this phone number.
   * @property latitude - The latitude coordinate of this phone number.
   * @property longitude - The longitude coordinate of this phone number.
   * @property region - The two-letter state or province abbreviation of this phone number.
   * @property postalCode - The postal code of this phone number.
   * @property isoCountry - The ISO country code of this phone number.
   * @property addressRequirements - This indicates whether the phone number requires you or your customer to have an Address registered with Twilio.
   * @property beta - Phone numbers new to the Twilio platform are marked as beta.
   * @property capabilities - This is a set of boolean properties that indicate whether a phone number can receive calls or messages.
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param accountSid - The 34 character string that uniquely identifies your account.
   * @param countryCode - The ISO Country code to lookup phone numbers for.
   */
  constructor(version: Twilio.Api.V2010, payload: object, accountSid: account_sid, countryCode: iso_country_code);

  /**
   * Produce a plain JSON object version of the TollFreeInstance for serialization.
   * Removes any circular references in the object.
   *
   * @function toJSON
   * @memberof Twilio.Api.V2010.AccountContext.AvailablePhoneNumberCountryContext.TollFreeInstance
   * @instance
   */
  toJSON();
}

export { TollFreeInstance, TollFreeList, TollFreeListInstance, TollFreePage, TollFreePayload, TollFreeResource, TollFreeSolution }
