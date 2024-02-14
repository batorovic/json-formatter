const assert = require('assert');
const { transformKeysInObject } = require('./index.js');

const testEmptyObject = () => {
  try {
    const input = {};
    const keyMappings = {};
    const expectedOutput = {};

    assert.deepStrictEqual(
      transformKeysInObject(input, keyMappings),
      expectedOutput
    );
    console.log('Test passed: Empty object test.');
  } catch (error) {
    console.error('Test failed: Empty object test.', error);
  }
};

const testNestedObjects = () => {
  const input = {
    _id: '123',
    nested: { _id: '456', changeThis: 'original' },
    array: [{ _id: '789' }],
  };

  const keyMappings = { _id: 'id', changeThis: 'changed' };
  const expectedOutput = {
    id: '123',
    nested: { id: '456', changed: 'original' },
    array: [{ id: '789' }],
  };

  try {
    assert.deepStrictEqual(
      transformKeysInObject(input, keyMappings),
      expectedOutput
    );
    console.log('Test passed: Nested object keys are correctly transformed.');
  } catch (error) {
    console.error('Test failed:', error.message);
  }
};

testEmptyObject();
testNestedObjects();
