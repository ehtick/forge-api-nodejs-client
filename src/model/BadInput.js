/**
 * Forge SDK
 * The Forge Platform contains an expanding collection of web service components that can be used with Autodesk cloud-based products or your own technologies. Take advantage of Autodesk’s expertise in design and engineering.
 *
 * OpenAPI spec version: 0.1.0
 * Contact: forge.help@autodesk.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

module.exports = (function() {
  'use strict';

  var ApiClient = require('../ApiClient'),
      JsonApiError = require('./JsonApiError'),
      JsonApiErrorErrors = require('./JsonApiErrorErrors'),
      JsonApiVersionJsonapi = require('./JsonApiVersionJsonapi');



  /**
   * The BadInput model module.
   * @module model/BadInput
   * @version 0.2.3
   */

   /**
    * Constructs a <code>BadInput</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/BadInput} obj Optional instance to populate.
    * @return {module:model/BadInput} The populated <code>BadInput</code> instance.
    */
  var constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
  
        JsonApiError.constructFromObject(data, obj);
      if (data.hasOwnProperty('jsonapi')) {
        obj['jsonapi'] = JsonApiVersionJsonapi.constructFromObject(data['jsonapi']);
      }
      if (data.hasOwnProperty('errors')) {
        obj['errors'] = ApiClient.convertToType(data['errors'], [JsonApiErrorErrors]);
      }
    }
    return obj;
  };

  /**
   * Constructs a new <code>BadInput</code>.
   * @alias module:model/BadInput
   * @class
   * @implements module:model/JsonApiError
   * @param errors {Array.<module:model/JsonApiErrorErrors>} 
   * @param {Object} theData The plain JavaScript object bearing properties of interest.
   * @param {module:model/BadInput} obj Optional instance to populate.
   */
  var exports = function(errors, theData, obj) {
    var _this = this;

    JsonApiError.call(_this, errors);

    _this['errors'] = errors;

    return constructFromObject(theData, obj);
  };

  /**
   * Constructs a <code>BadInput</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BadInput} obj Optional instance to populate.
   * @return {module:model/BadInput} The populated <code>BadInput</code> instance.
   */
  exports.constructFromObject = constructFromObject;

  /**
   * @member {module:model/JsonApiVersionJsonapi} jsonapi
   */
  exports.prototype['jsonapi'] = undefined;
  /**
   * @member {Array.<module:model/JsonApiErrorErrors>} errors
   */
  exports.prototype['errors'] = undefined;

  // Implement JsonApiError interface:
  /**
   * @member {module:model/JsonApiVersionJsonapi} jsonapi
   */
exports.prototype['jsonapi'] = undefined;

  /**
   * @member {Array.<module:model/JsonApiErrorErrors>} errors
   */
exports.prototype['errors'] = undefined;



  return exports;
}());


