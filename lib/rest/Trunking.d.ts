/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Domain = require('../base/Domain');
import TwilioClient = require('./Twilio');
import V1 = require('./trunking/V1');
import { TrunkListInstance } from './trunking/v1/trunk';


/**
 * Initialize trunking domain
 */
declare class Trunking extends Domain {
  /**
   * Initialize trunking domain
   *
   * @param twilio - The twilio client
   */
  constructor(twilio: TwilioClient);

  /**
   * Trunk resource
   */
  readonly trunks: TrunkListInstance;
  readonly v1: V1;
}

export = Trunking;