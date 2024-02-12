# 🌟 JSON Key Formatter

## Description

This package allows you to replace the keys found in a JSON object with the provided values.

## Features

- Replaces keys in an object with the given values.
- Supports nested objects.
- Supports array values.

## Installation

```bash
npm install json-key-formatter
```

## Usage

```javascript
import transformKeysInObject from 'json-formatter';

const obj = {
  _id: 1,
  name: 'John Doe',
  age: 30,
  address: {
    street: '123 Main Street',
    city: 'Anytown',
    state: 'CA',
    zip: '12345',
  },
};

const keyMappings = {
  _id: 'id',
  name: 'fullName',
  'address.city': 'location',
};

const transformedObj = transformKeysInObject(obj, keyMappings);

console.log(transformedObj);
```

## Output

```javascript
{
  "id": 1,
  "fullName": "John Doe",
  "age": 30,
  "address": {
    "street": "123 Main Street",
    "location": "Anytown",
    "state": "CA",
    "zip": "12345"
  }
}
```

## Thanks!

Thanks for choosing to use this package! If you have any questions or feedback, please feel free to let me know. 🙏
