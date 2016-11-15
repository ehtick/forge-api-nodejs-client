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
      JsonApiResource = require('./JsonApiResource'),
      StorageRelationships = require('./StorageRelationships');



  /**
   * The Storage model module.
   * @module model/Storage
   * @version 0.2.3
   */

   /**
    * Constructs a <code>Storage</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/Storage} obj Optional instance to populate.
    * @return {module:model/Storage} The populated <code>Storage</code> instance.
    */
  var constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
  
        JsonApiResource.constructFromObject(data, obj);
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
        obj['relationships'] = StorageRelationships.constructFromObject(data['relationships']);
      }
      if (data.hasOwnProperty('links')) {
        obj['links'] = JsonApiLinks.constructFromObject(data['links']);
      }
    }
    return obj;
  };

  /**
   * Constructs a new <code>Storage</code>.
   * @alias module:model/Storage
   * @class
   * @implements module:model/JsonApiResource
   * @param id {String} resource id
   * @param type {module:model/Storage.TypeEnum} 
   * @param {Object} theData The plain JavaScript object bearing properties of interest.
   * @param {module:model/Storage} obj Optional instance to populate.
   */
  var exports = function(id, type, theData, obj) {
    var _this = this;

    JsonApiResource.call(_this, id, type);
    _this['id'] = id;
    _this['type'] = type;





    return constructFromObject(theData, obj);
  };

  /**
   * Constructs a <code>Storage</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Storage} obj Optional instance to populate.
   * @return {module:model/Storage} The populated <code>Storage</code> instance.
   */
  exports.constructFromObject = constructFromObject;

  /**
   * resource id
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {module:model/Storage.TypeEnum} type
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
   * @member {module:model/StorageRelationships} relationships
   */
  exports.prototype['relationships'] = undefined;
  /**
   * @member {module:model/JsonApiLinks} links
   */
  exports.prototype['links'] = undefined;

  // Implement JsonApiResource interface:
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


  /**
   * Allowed values for the <code>type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.TypeEnum = {
    /**
     * value: "objects"
     * @const
     */
    "objects": "objects"  };


  return exports;
}());


