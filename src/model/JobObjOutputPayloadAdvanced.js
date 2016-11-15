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

  var ApiClient = require('../ApiClient');



  /**
   * The JobObjOutputPayloadAdvanced model module.
   * @module model/JobObjOutputPayloadAdvanced
   * @version 0.2.3
   */

   /**
    * Constructs a <code>JobObjOutputPayloadAdvanced</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/JobObjOutputPayloadAdvanced} obj Optional instance to populate.
    * @return {module:model/JobObjOutputPayloadAdvanced} The populated <code>JobObjOutputPayloadAdvanced</code> instance.
    */
  var constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
  
      if (data.hasOwnProperty('exportFileStructure')) {
        obj['exportFileStructure'] = ApiClient.convertToType(data['exportFileStructure'], 'String');
      }
      if (data.hasOwnProperty('modelGuid')) {
        obj['modelGuid'] = ApiClient.convertToType(data['modelGuid'], 'String');
      }
      if (data.hasOwnProperty('objectIds')) {
        obj['objectIds'] = ApiClient.convertToType(data['objectIds'], ['String']);
      }
    }
    return obj;
  };

  /**
   * Constructs a new <code>JobObjOutputPayloadAdvanced</code>.
   * Advanced options for &#x60;obj&#x60; type.
   * @alias module:model/JobObjOutputPayloadAdvanced
   * @class
   * @param {Object} theData The plain JavaScript object bearing properties of interest.
   * @param {module:model/JobObjOutputPayloadAdvanced} obj Optional instance to populate.
   */
  var exports = function(theData, obj) {
    var _this = this;





    return constructFromObject(theData, obj);
  };

  /**
   * Constructs a <code>JobObjOutputPayloadAdvanced</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/JobObjOutputPayloadAdvanced} obj Optional instance to populate.
   * @return {module:model/JobObjOutputPayloadAdvanced} The populated <code>JobObjOutputPayloadAdvanced</code> instance.
   */
  exports.constructFromObject = constructFromObject;

  /**
   * `single` (default): creates one OBJ file for all the input files (assembly file)  `multiple`: creates a separate OBJ file for each object 
   * @member {module:model/JobObjOutputPayloadAdvanced.ExportFileStructureEnum} exportFileStructure
   * @default 'single'
   */
  exports.prototype['exportFileStructure'] = 'single';
  /**
   * Required for geometry extractions. The model view ID (guid).
   * @member {String} modelGuid
   */
  exports.prototype['modelGuid'] = undefined;
  /**
   * Required for geometry extractions. List object ids to be translated. -1 will extract the entire model. 
   * @member {Array.<String>} objectIds
   */
  exports.prototype['objectIds'] = undefined;


  /**
   * Allowed values for the <code>exportFileStructure</code> property.
   * @enum {String}
   * @readonly
   */
  exports.ExportFileStructureEnum = {
    /**
     * value: "single"
     * @const
     */
    "single": "single",
    /**
     * value: "multiple"
     * @const
     */
    "multiple": "multiple"  };


  return exports;
}());


