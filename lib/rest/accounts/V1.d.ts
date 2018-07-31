/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Version = require('../../base/Version');
import { CredentialList } from './v1/credential';


declare class V1 extends Version {
  /**
   * Initialize the V1 version of Accounts
   *
   * @constructor Twilio.Accounts.V1
   *
   * @property credentials - credentials resource
   *
   * @param domain - The twilio domain
   */
  constructor(domain: Twilio.Accounts);

  credentials?: Twilio.Accounts.V1.CredentialList;
}

export = V1;
