/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Preview = require('../Preview');
import Version = require('../../base/Version');
import { ServiceList } from './sync/service';


declare class Sync extends Version {
  /**
   * Initialize the Sync version of Preview
   *
   * @property services - services resource
   *
   * @param domain - The twilio domain
   */
  constructor(domain: Preview);

  readonly services: ServiceList;
}

export = Sync;
