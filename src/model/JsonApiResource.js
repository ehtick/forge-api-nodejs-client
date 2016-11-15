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
      JsonApiAttributes = require('./JsonApiAttributes'),
      JsonApiLinks = require('./JsonApiLinks'),
      JsonApiMeta = require('./JsonApiMeta'),
      JsonApiRelationships = require('./JsonApiRelationships'),
      JsonApiTypeId = require('./JsonApiTypeId');



  /**
   * The JsonApiResource model module.
   * @module model/JsonApiResource
   * @version 0.2.3
   */

   /**
    * Constructs a <code>JsonApiResource</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/JsonApiResource} obj Optional instance to populate.
    * @return {module:model/JsonApiResource} The populated <code>JsonApiResource</code> instance.
    */
  var constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
  
        JsonApiTypeId.constructFromObject(data, obj);
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('attributes')) {
        obj['attributes'] = JsonApiAttributes.constructFromObject(data['attributes']);
      }
      if (data.hasOwnProperty('meta')) {
        obj['meta'] = JsonApiMeta.constructFromObject(data['meta']);
      }
      if (data.hasOwnProperty('relationships')) {
        obj['relationships'] = JsonApiRelationships.constructFromObject(data['relationships']);
      }
      if (data.hasOwnProperty('links')) {
        obj['links'] = JsonApiLinks.constructFromObject(data['links']);
      }
    }
    return obj;
  };

  /**
   * Constructs a new <code>JsonApiResource</code>.
   * @alias module:model/JsonApiResource
   * @class
   * @implements module:model/JsonApiTypeId
   * @param id {String} resource id
   * @param type {String} resource type
   * @param {Object} theData The plain JavaScript object bearing properties of interest.
   * @param {module:model/JsonApiResource} obj Optional instance to populate.
   */
  var exports = function(id, type, theData, obj) {
    var _this = this;

    JsonApiTypeId.call(_this, id, type);
    _this['id'] = id;
    _this['type'] = type;





    return constructFromObject(theData, obj);
  };

  /**
   * Constructs a <code>JsonApiResource</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/JsonApiResource} obj Optional instance to populate.
   * @return {module:model/JsonApiResource} The populated <code>JsonApiResource</code> instance.
   */
  exports.constructFromObject = constructFromObject;

  /**
   * resource id
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * resource type
   * @member {String} type
   */
  exports.prototype['type'] = undefined;
  /**
   * @member {module:model/JsonApiAttributes} attributes
   */
  exports.prototype['attributes'] = undefined;
  /**
   * @member {module:model/JsonApiMeta} meta
   */
  exports.prototype['meta'] = undefined;
  /**
   * @member {module:model/JsonApiRelationships} relationships
   */
  exports.prototype['relationships'] = undefined;
  /**
   * @member {module:model/JsonApiLinks} links
   */
  exports.prototype['links'] = undefined;

  // Implement JsonApiTypeId interface:
  /**
   * resource id
   * @member {String} id
   */
exports.prototype['id'] = undefined;

  /**
   * resource type
   * @member {String} type
   */
exports.prototype['type'] = undefined;



  return exports;
}());


