/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Version = require('../../base/Version');
import { ServiceList } from './acc_security/service';


declare class AccSecurity extends Version {
  /**
   * Initialize the AccSecurity version of Preview
   *
   * @constructor Twilio.Preview.AccSecurity
   *
   * @property services - services resource
   *
   * @param domain - The twilio domain
   */
  constructor(domain: Twilio.Preview);

  services?: Twilio.Preview.AccSecurity.ServiceList;
}

export = AccSecurity;