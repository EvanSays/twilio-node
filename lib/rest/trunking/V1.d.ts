/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Version = require('../../base/Version');
import { TrunkList } from './v1/trunk';


declare class V1 extends Version {
  /**
   * Initialize the V1 version of Trunking
   *
   * @constructor Twilio.Trunking.V1
   *
   * @property trunks - trunks resource
   *
   * @param domain - The twilio domain
   */
  constructor(domain: Twilio.Trunking);

  trunks?: Twilio.Trunking.V1.TrunkList;
}

export = V1;
