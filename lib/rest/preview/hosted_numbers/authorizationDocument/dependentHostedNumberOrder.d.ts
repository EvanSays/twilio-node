/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import HostedNumbers = require('../../HostedNumbers');
import Page = require('../../../../base/Page');
import Response = require('../../../../http/response');
import { SerializableClass } from '../../../../interfaces';

/**
 * @description Initialize the DependentHostedNumberOrderList
 * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
 *
 * @param version - Version of the resource
 * @param signingDocumentSid - LOA document sid.
 */
declare function DependentHostedNumberOrderList(version: HostedNumbers, signingDocumentSid: string): DependentHostedNumberOrderListInstance;

interface DependentHostedNumberOrderResource {
  account_sid: string;
  address_sid: string;
  call_delay: number;
  capabilities: string;
  cc_emails: string;
  date_created: Date;
  date_updated: Date;
  email: string;
  extension: string;
  failure_reason: string;
  friendly_name: string;
  incoming_phone_number_sid: string;
  phone_number: string;
  sid: string;
  signing_document_sid: string;
  status: DependentHostedNumberOrderStatus;
  unique_name: string;
  verification_attempts: number;
  verification_call_sids: string;
  verification_code: string;
  verification_document_sid: string;
  verification_type: DependentHostedNumberOrderVerificationType;
}

interface DependentHostedNumberOrderPayload extends DependentHostedNumberOrderResource, Page.TwilioResponsePayload {
}

interface DependentHostedNumberOrderSolution {
  signingDocumentSid?: string;
}

interface DependentHostedNumberOrderListInstance {
  /**
   * Streams DependentHostedNumberOrderInstance records from the API.
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
  each(opts?: DependentHostedNumberOrderListInstanceEachOptions, callback?: (item: DependentHostedNumberOrderInstance, done: (err?: Error) => void) => void): void;
  /**
   * Retrieve a single target page of DependentHostedNumberOrderInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: DependentHostedNumberOrderPage) => any): Promise<DependentHostedNumberOrderPage>;
  /**
   * Lists DependentHostedNumberOrderInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  list(opts?: DependentHostedNumberOrderListInstanceOptions, callback?: (error: Error | null, items: DependentHostedNumberOrderInstance[]) => any): Promise<DependentHostedNumberOrderInstance[]>;
  /**
   * Retrieve a single page of DependentHostedNumberOrderInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  page(opts?: DependentHostedNumberOrderListInstancePageOptions, callback?: (error: Error | null, items: DependentHostedNumberOrderPage) => any): Promise<DependentHostedNumberOrderPage>;
}

/**
 * Options to pass to each
 *
 * @property status - The Status of this HostedNumberOrder.
 * @property phoneNumber - An E164 formatted phone number.
 * @property incomingPhoneNumberSid - IncomingPhoneNumber sid.
 * @property friendlyName - A human readable description of this resource.
 * @property uniqueName - A unique, developer assigned name of this HostedNumberOrder.
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
interface DependentHostedNumberOrderListInstanceEachOptions {
  callback?: (item: DependentHostedNumberOrderInstance, done: (err?: Error) => void) => void;
  done?: Function;
  friendlyName?: string;
  incomingPhoneNumberSid?: string;
  limit?: number;
  pageSize?: number;
  phoneNumber?: string;
  status?: dependent_hosted_number_order.status;
  uniqueName?: string;
}

/**
 * Options to pass to list
 *
 * @property status - The Status of this HostedNumberOrder.
 * @property phoneNumber - An E164 formatted phone number.
 * @property incomingPhoneNumberSid - IncomingPhoneNumber sid.
 * @property friendlyName - A human readable description of this resource.
 * @property uniqueName - A unique, developer assigned name of this HostedNumberOrder.
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
interface DependentHostedNumberOrderListInstanceOptions {
  friendlyName?: string;
  incomingPhoneNumberSid?: string;
  limit?: number;
  pageSize?: number;
  phoneNumber?: string;
  status?: dependent_hosted_number_order.status;
  uniqueName?: string;
}

/**
 * Options to pass to page
 *
 * @property status - The Status of this HostedNumberOrder.
 * @property phoneNumber - An E164 formatted phone number.
 * @property incomingPhoneNumberSid - IncomingPhoneNumber sid.
 * @property friendlyName - A human readable description of this resource.
 * @property uniqueName - A unique, developer assigned name of this HostedNumberOrder.
 * @property pageToken - PageToken provided by the API
 * @property pageNumber - Page Number, this value is simply for client state
 * @property pageSize - Number of records to return, defaults to 50
 */
interface DependentHostedNumberOrderListInstancePageOptions {
  friendlyName?: string;
  incomingPhoneNumberSid?: string;
  pageNumber?: number;
  pageSize?: number;
  pageToken?: string;
  phoneNumber?: string;
  status?: dependent_hosted_number_order.status;
  uniqueName?: string;
}


declare class DependentHostedNumberOrderPage extends Page<HostedNumbers, DependentHostedNumberOrderPayload, DependentHostedNumberOrderResource, DependentHostedNumberOrderInstance> {
  /**
   * Initialize the DependentHostedNumberOrderPagePLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: HostedNumbers, response: Response<string>, solution: DependentHostedNumberOrderSolution);

  /**
   * Build an instance of DependentHostedNumberOrderInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: DependentHostedNumberOrderPayload): DependentHostedNumberOrderInstance;
}


declare class DependentHostedNumberOrderInstance extends SerializableClass {
  /**
   * Initialize the DependentHostedNumberOrderContextPLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
   *
   * @property sid - HostedNumberOrder sid.
   * @property accountSid - Account sid.
   * @property incomingPhoneNumberSid - IncomingPhoneNumber sid.
   * @property addressSid - Address sid.
   * @property signingDocumentSid - LOA document sid.
   * @property phoneNumber - An E164 formatted phone number.
   * @property capabilities - A mapping of phone number capabilities.
   * @property friendlyName - A human readable description of this resource.
   * @property uniqueName - A unique, developer assigned name of this HostedNumberOrder.
   * @property status - The Status of this HostedNumberOrder.
   * @property failureReason - Why a hosted_number_order reached status "action-required"
   * @property dateCreated - The date this HostedNumberOrder was created.
   * @property dateUpdated - The date this HostedNumberOrder was updated.
   * @property verificationAttempts - The number of attempts made to verify ownership of the phone number.
   * @property email - Email.
   * @property ccEmails - A list of emails.
   * @property verificationType - The method used for verifying ownership of the number to be hosted.
   * @property verificationDocumentSid - Verification Document Sid.
   * @property extension - Phone extension to use for ownership verification call.
   * @property callDelay - Seconds (0-30) to delay ownership verification call by.
   * @property verificationCode - The digits passed during the ownership verification call.
   * @property verificationCallSids - List of IDs for ownership verification calls.
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param signingDocumentSid - LOA document sid.
   */
  constructor(version: HostedNumbers, payload: DependentHostedNumberOrderPayload, signingDocumentSid: string);

  accountSid: string;
  addressSid: string;
  callDelay: number;
  capabilities: string;
  ccEmails: string;
  dateCreated: Date;
  dateUpdated: Date;
  email: string;
  extension: string;
  failureReason: string;
  friendlyName: string;
  incomingPhoneNumberSid: string;
  phoneNumber: string;
  sid: string;
  signingDocumentSid: string;
  status: dependent_hosted_number_order.status;
  /**
   * Produce a plain JSON object version of the DependentHostedNumberOrderInstance for serialization.
   * Removes any circular references in the object.
   */
  toJSON(): any;
  uniqueName: string;
  verificationAttempts: number;
  verificationCallSids: string;
  verificationCode: string;
  verificationDocumentSid: string;
  verificationType: dependent_hosted_number_order.verification_type;
}

export { DependentHostedNumberOrderInstance, DependentHostedNumberOrderList, DependentHostedNumberOrderListInstance, DependentHostedNumberOrderListInstanceEachOptions, DependentHostedNumberOrderListInstanceOptions, DependentHostedNumberOrderListInstancePageOptions, DependentHostedNumberOrderPage, DependentHostedNumberOrderPayload, DependentHostedNumberOrderResource, DependentHostedNumberOrderSolution }
