/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Version = require('../../base/Version');
import { CredentialList } from './v2/credential';
import { ServiceList } from './v2/service';


declare class V2 extends Version {
  /**
   * Initialize the V2 version of Chat
   *
   * @constructor Twilio.Chat.V2
   *
   * @property credentials - credentials resource
   * @property services - services resource
   *
   * @param domain - The twilio domain
   */
  constructor(domain: Twilio.Chat);

  credentials?: Twilio.Chat.V2.CredentialList;
  services?: Twilio.Chat.V2.ServiceList;
}

export = V2;
