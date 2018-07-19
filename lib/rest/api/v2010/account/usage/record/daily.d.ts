/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../../../base/Page');
import Response = require('../../../../../../http/response');
import V2010 = require('../../../../V2010');
import serialize = require('../../../../../../base/serialize');
import { SerializableClass } from '../../../../../../interfaces';

/**
 * @description Initialize the DailyList
 *
 * @param version - Version of the resource
 * @param accountSid - A 34 character string that uniquely identifies this resource.
 */
declare function DailyList(version: V2010, accountSid: string): DailyListInstance;

interface DailyResource {
  account_sid: string;
  api_version: string;
  category: DailyCategory;
  count: string;
  count_unit: string;
  description: string;
  end_date: Date;
  price: number;
  price_unit: string;
  start_date: Date;
  subresource_uris: string;
  uri: string;
  usage: string;
  usage_unit: string;
}

interface DailyPayload extends DailyResource, Page.TwilioResponsePayload {
}

interface DailySolution {
  accountSid?: string;
}

interface DailyListInstance {
  /**
   * Streams DailyInstance records from the API.
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
  each(opts?: DailyListInstanceEachOptions, callback?: Function);
  /**
   * Retrieve a single target page of DailyInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: function);
  /**
   * @description Lists DailyInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  list(opts?: DailyListInstanceOptions, callback?: function);
  /**
   * Retrieve a single page of DailyInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  page(opts?: DailyListInstancePageOptions, callback?: function);
}

/**
 * Options to pass to each
 *
 * @property category - Only include usage of this usage category.
 * @property startDate - Only include usage that has occurred on or after this date.
 * @property endDate - Only include usage that has occurred on or before this date.
 * @property includeSubaccounts - The include_subaccounts
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
export interface DailyListInstanceEachOptions {
  callback?: Function;
  category?: daily.category;
  done?: Function;
  endDate?: Date;
  includeSubaccounts?: boolean;
  limit?: number;
  pageSize?: number;
  startDate?: Date;
}

/**
 * Options to pass to list
 *
 * @property category - Only include usage of this usage category.
 * @property startDate - Only include usage that has occurred on or after this date.
 * @property endDate - Only include usage that has occurred on or before this date.
 * @property includeSubaccounts - The include_subaccounts
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
export interface DailyListInstanceOptions {
  category?: daily.category;
  endDate?: Date;
  includeSubaccounts?: boolean;
  limit?: number;
  pageSize?: number;
  startDate?: Date;
}

/**
 * Options to pass to page
 *
 * @property category - Only include usage of this usage category.
 * @property startDate - Only include usage that has occurred on or after this date.
 * @property endDate - Only include usage that has occurred on or before this date.
 * @property includeSubaccounts - The include_subaccounts
 * @property pageToken - PageToken provided by the API
 * @property pageNumber - Page Number, this value is simply for client state
 * @property pageSize - Number of records to return, defaults to 50
 */
export interface DailyListInstancePageOptions {
  category?: daily.category;
  endDate?: Date;
  includeSubaccounts?: boolean;
  pageNumber?: number;
  pageSize?: number;
  pageToken?: string;
  startDate?: Date;
}


declare class DailyPage extends Page {
  /**
   * @constructor Twilio.Api.V2010.AccountContext.UsageContext.RecordContext.DailyPage
   * @augments Page
   * @description Initialize the DailyPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: Twilio.Api.V2010, response: Response<string>, solution: object);

  /**
   * Build an instance of DailyInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: object);
}


declare class DailyInstance {
  /**
   * @constructor Twilio.Api.V2010.AccountContext.UsageContext.RecordContext.DailyInstance
   * @description Initialize the DailyContext
   *
   * @property accountSid - The Account that accrued the usage.
   * @property apiVersion - The api_version
   * @property category - The category of usage.
   * @property count - The number of usage events.
   * @property countUnit - The units in which Count is measured.
   * @property description - A human-readable description of the usage category.
   * @property endDate - The last date for which usage is included in this UsageRecord, formatted as YYYY-MM-DD.
   * @property price - The total price of the usage, in the currency associated with the account.
   * @property priceUnit - The currency in which Price is measured, in ISO 4127 format.
   * @property startDate - The first date for which usage is included in this UsageRecord, formatted as YYYY-MM-DD.
   * @property subresourceUris - Subresource Uris for this UsageRecord.
   * @property uri - The URI that returns only this UsageRecord, relative to https://api.
   * @property usage - The amount of billed usage.
   * @property usageUnit - The units in which Usage is measured.
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param accountSid - A 34 character string that uniquely identifies this resource.
   */
  constructor(version: Twilio.Api.V2010, payload: object, accountSid: sid);

  /**
   * Produce a plain JSON object version of the DailyInstance for serialization.
   * Removes any circular references in the object.
   */
  toJSON();
}

export { DailyInstance, DailyList, DailyListInstance, DailyPage, DailyPayload, DailyResource, DailySolution }
