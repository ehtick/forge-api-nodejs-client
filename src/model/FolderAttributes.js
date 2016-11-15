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
      BaseAttributesExtensionObject = require('./BaseAttributesExtensionObject');



  /**
   * The FolderAttributes model module.
   * @module model/FolderAttributes
   * @version 0.2.3
   */

   /**
    * Constructs a <code>FolderAttributes</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/FolderAttributes} obj Optional instance to populate.
    * @return {module:model/FolderAttributes} The populated <code>FolderAttributes</code> instance.
    */
  var constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
  
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('displayName')) {
        obj['displayName'] = ApiClient.convertToType(data['displayName'], 'String');
      }
      if (data.hasOwnProperty('objectCount')) {
        obj['objectCount'] = ApiClient.convertToType(data['objectCount'], 'Integer');
      }
      if (data.hasOwnProperty('extension')) {
        obj['extension'] = BaseAttributesExtensionObject.constructFromObject(data['extension']);
      }
    }
    return obj;
  };

  /**
   * Constructs a new <code>FolderAttributes</code>.
   * @alias module:model/FolderAttributes
   * @class
   * @param name {String} filename used when synced to local disk
   * @param displayName {String} displayable name of the folder
   * @param objectCount {Integer} number of contained sub-folders and items
   * @param extension {module:model/BaseAttributesExtensionObject} 
   * @param {Object} theData The plain JavaScript object bearing properties of interest.
   * @param {module:model/FolderAttributes} obj Optional instance to populate.
   */
  var exports = function(name, displayName, objectCount, extension, theData, obj) {
    var _this = this;

    _this['name'] = name;
    _this['displayName'] = displayName;
    _this['objectCount'] = objectCount;
    _this['extension'] = extension;

    return constructFromObject(theData, obj);
  };

  /**
   * Constructs a <code>FolderAttributes</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/FolderAttributes} obj Optional instance to populate.
   * @return {module:model/FolderAttributes} The populated <code>FolderAttributes</code> instance.
   */
  exports.constructFromObject = constructFromObject;

  /**
   * filename used when synced to local disk
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * displayable name of the folder
   * @member {String} displayName
   */
  exports.prototype['displayName'] = undefined;
  /**
   * number of contained sub-folders and items
   * @member {Integer} objectCount
   */
  exports.prototype['objectCount'] = undefined;
  /**
   * @member {module:model/BaseAttributesExtensionObject} extension
   */
  exports.prototype['extension'] = undefined;



  return exports;
}());


