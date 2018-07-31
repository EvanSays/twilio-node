/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Version = require('../../base/Version');
import { FlowList } from './studio/flow';


declare class Studio extends Version {
  /**
   * Initialize the Studio version of Preview
   *
   * @constructor Twilio.Preview.Studio
   *
   * @property flows - flows resource
   *
   * @param domain - The twilio domain
   */
  constructor(domain: Twilio.Preview);

  flows?: Twilio.Preview.Studio.FlowList;
}

export = Studio;