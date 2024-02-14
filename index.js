/**
 * Transforms keys in an object based on the provided key mappings.
 * @param {Object} obj - The input object to transform.
 * @param {Object.<string, string>} keyMappings - The key mappings object, where keys are the original keys and values are the new keys.
 * @returns {Object} - The transformed object.
 */

const transformKeysInObject = (obj, keyMappings) => {
  return Object.entries(obj).reduce((newObj, [key, value]) => {
    const updatedKey = keyMappings[key] ? keyMappings[key] : key;
    newObj[updatedKey] =
      value !== null && typeof value === 'object'
        ? Array.isArray(value)
          ? value.map((item) => transformKeysInObject(item, keyMappings))
          : transformKeysInObject(value, keyMappings)
        : value;
    return newObj;
  }, {});
};

module.exports = { transformKeysInObject };
