/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Version = require('../../base/Version');
import { CredentialList } from './v1/credential';
import { ServiceList } from './v1/service';


declare class V1 extends Version {
  /**
   * Initialize the V1 version of IpMessaging
   *
   * @constructor Twilio.IpMessaging.V1
   *
   * @property credentials - credentials resource
   * @property services - services resource
   *
   * @param domain - The twilio domain
   */
  constructor(domain: Twilio.IpMessaging);

  credentials?: Twilio.IpMessaging.V1.CredentialList;
  services?: Twilio.IpMessaging.V1.ServiceList;
}

export = V1;