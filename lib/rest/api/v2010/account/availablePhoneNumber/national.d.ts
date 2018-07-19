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
import { SerializableClass } from '../../../../../interfaces';

/**
 * @description Initialize the NationalList
 *
 * @param version - Version of the resource
 * @param accountSid - The 34 character string that uniquely identifies your account.
 * @param countryCode - The ISO Country code to lookup phone numbers for.
 */
declare function NationalList(version: V2010, accountSid: string, countryCode: string): NationalListInstance;

interface NationalResource {
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

interface NationalPayload extends NationalResource, Page.TwilioResponsePayload {
}

interface NationalSolution {
  accountSid?: string;
  countryCode?: string;
}

interface NationalListInstance {
  /**
   * Streams NationalInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Function to process each record
   */
  each(opts?: NationalListInstanceEachOptions, callback?: Function);
  /**
   * Retrieve a single target page of NationalInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: function);
  /**
   * @description Lists NationalInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  list(opts?: NationalListInstanceOptions, callback?: function);
  /**
   * Retrieve a single page of NationalInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  page(opts?: NationalListInstancePageOptions, callback?: function);
}

/**
 * Options to pass to each
 *
 * @property areaCode - The area_code
 * @property contains - The contains
 * @property smsEnabled - The sms_enabled
 * @property mmsEnabled - The mms_enabled
 * @property voiceEnabled - The voice_enabled
 * @property excludeAllAddressRequired - The exclude_all_address_required
 * @property excludeLocalAddressRequired - The exclude_local_address_required
 * @property excludeForeignAddressRequired - The exclude_foreign_address_required
 * @property beta - The beta
 * @property nearNumber - The near_number
 * @property nearLatLong - The near_lat_long
 * @property distance - The distance
 * @property inPostalCode - The in_postal_code
 * @property inRegion - The in_region
 * @property inRateCenter - The in_rate_center
 * @property inLata - The in_lata
 * @property inLocality - The in_locality
 * @property faxEnabled - The fax_enabled
 * @property limit -
 *                         Upper limit for the number of records to return.
 *                         each() guarantees never to return more than limit.
 *                         Default is no limit
 * @property pageSize -
 *                         Number of records to fetch per request,
 *                         when not set will use the default value of 50 records.
 *                         If no pageSize is defined but a limit is defined,
 *                         each() will attempt to read the limit with the most efficient
 *                         page size, i.e. min(limit, 1000)
 * @property callback -
 *                         Function to process each record. If this and a positional
 *                         callback are passed, this one will be used
 * @property done - Function to be called upon completion of streaming
 */
export interface NationalListInstanceEachOptions {
  areaCode?: number;
  beta?: boolean;
  callback?: Function;
  contains?: string;
  distance?: number;
  done?: Function;
  excludeAllAddressRequired?: boolean;
  excludeForeignAddressRequired?: boolean;
  excludeLocalAddressRequired?: boolean;
  faxEnabled?: boolean;
  inLata?: string;
  inLocality?: string;
  inPostalCode?: string;
  inRateCenter?: string;
  inRegion?: string;
  limit?: number;
  mmsEnabled?: boolean;
  nearLatLong?: string;
  nearNumber?: string;
  pageSize?: number;
  smsEnabled?: boolean;
  voiceEnabled?: boolean;
}

/**
 * Options to pass to list
 *
 * @property areaCode - The area_code
 * @property contains - The contains
 * @property smsEnabled - The sms_enabled
 * @property mmsEnabled - The mms_enabled
 * @property voiceEnabled - The voice_enabled
 * @property excludeAllAddressRequired - The exclude_all_address_required
 * @property excludeLocalAddressRequired - The exclude_local_address_required
 * @property excludeForeignAddressRequired - The exclude_foreign_address_required
 * @property beta - The beta
 * @property nearNumber - The near_number
 * @property nearLatLong - The near_lat_long
 * @property distance - The distance
 * @property inPostalCode - The in_postal_code
 * @property inRegion - The in_region
 * @property inRateCenter - The in_rate_center
 * @property inLata - The in_lata
 * @property inLocality - The in_locality
 * @property faxEnabled - The fax_enabled
 * @property limit -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 * @property pageSize -
 *                         Number of records to fetch per request,
 *                         when not set will use the default value of 50 records.
 *                         If no page_size is defined but a limit is defined,
 *                         list() will attempt to read the limit with the most
 *                         efficient page size, i.e. min(limit, 1000)
 */
export interface NationalListInstanceOptions {
  areaCode?: number;
  beta?: boolean;
  contains?: string;
  distance?: number;
  excludeAllAddressRequired?: boolean;
  excludeForeignAddressRequired?: boolean;
  excludeLocalAddressRequired?: boolean;
  faxEnabled?: boolean;
  inLata?: string;
  inLocality?: string;
  inPostalCode?: string;
  inRateCenter?: string;
  inRegion?: string;
  limit?: number;
  mmsEnabled?: boolean;
  nearLatLong?: string;
  nearNumber?: string;
  pageSize?: number;
  smsEnabled?: boolean;
  voiceEnabled?: boolean;
}

/**
 * Options to pass to page
 *
 * @property areaCode - The area_code
 * @property contains - The contains
 * @property smsEnabled - The sms_enabled
 * @property mmsEnabled - The mms_enabled
 * @property voiceEnabled - The voice_enabled
 * @property excludeAllAddressRequired - The exclude_all_address_required
 * @property excludeLocalAddressRequired - The exclude_local_address_required
 * @property excludeForeignAddressRequired - The exclude_foreign_address_required
 * @property beta - The beta
 * @property nearNumber - The near_number
 * @property nearLatLong - The near_lat_long
 * @property distance - The distance
 * @property inPostalCode - The in_postal_code
 * @property inRegion - The in_region
 * @property inRateCenter - The in_rate_center
 * @property inLata - The in_lata
 * @property inLocality - The in_locality
 * @property faxEnabled - The fax_enabled
 * @property pageToken - PageToken provided by the API
 * @property pageNumber - Page Number, this value is simply for client state
 * @property pageSize - Number of records to return, defaults to 50
 */
export interface NationalListInstancePageOptions {
  areaCode?: number;
  beta?: boolean;
  contains?: string;
  distance?: number;
  excludeAllAddressRequired?: boolean;
  excludeForeignAddressRequired?: boolean;
  excludeLocalAddressRequired?: boolean;
  faxEnabled?: boolean;
  inLata?: string;
  inLocality?: string;
  inPostalCode?: string;
  inRateCenter?: string;
  inRegion?: string;
  mmsEnabled?: boolean;
  nearLatLong?: string;
  nearNumber?: string;
  pageNumber?: number;
  pageSize?: number;
  pageToken?: string;
  smsEnabled?: boolean;
  voiceEnabled?: boolean;
}


declare class NationalPage extends Page {
  /**
   * @constructor Twilio.Api.V2010.AccountContext.AvailablePhoneNumberCountryContext.NationalPage
   * @augments Page
   * @description Initialize the NationalPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: Twilio.Api.V2010, response: Response<string>, solution: object);

  /**
   * Build an instance of NationalInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: object);
}


declare class NationalInstance {
  /**
   * @constructor Twilio.Api.V2010.AccountContext.AvailablePhoneNumberCountryContext.NationalInstance
   * @description Initialize the NationalContext
   *
   * @property friendlyName - The friendly_name
   * @property phoneNumber - The phone_number
   * @property lata - The lata
   * @property locality - The locality
   * @property rateCenter - The rate_center
   * @property latitude - The latitude
   * @property longitude - The longitude
   * @property region - The region
   * @property postalCode - The postal_code
   * @property isoCountry - The iso_country
   * @property addressRequirements - The address_requirements
   * @property beta - The beta
   * @property capabilities - The capabilities
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param accountSid - The 34 character string that uniquely identifies your account.
   * @param countryCode - The ISO Country code to lookup phone numbers for.
   */
  constructor(version: Twilio.Api.V2010, payload: object, accountSid: account_sid, countryCode: iso_country_code);

  /**
   * Produce a plain JSON object version of the NationalInstance for serialization.
   * Removes any circular references in the object.
   */
  toJSON();
}

export { NationalInstance, NationalList, NationalListInstance, NationalPage, NationalPayload, NationalResource, NationalSolution }
