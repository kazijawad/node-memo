# node-memo

An in-memory cache module.

## Getting Started

```JavaScript
const NodeMemo = require('node-memo');

(async function () {
    const cache = new NodeMemo(NodeMemo.Second * 5);

    cache.set('key', 'value');
    console.log(cache.get('key')); // 'value'

    await NodeMemo.wait(NodeMemo.Second * 5);

    console.log(cache.get('key')); // null
})();
```

## API

### new NodeMemo(maxAge)

Create a cache.

| Param | Type | Description |
| --- | --- | --- |
| maxAge | `number` | The max age of the cache. |

### this.maxAge ⇒ `number`

Get the max age of the cache.

**Kind**: instance property of NodeMemo

### this.maxAge

Set the max age of the cache.

**Kind**: instance property of NodeMemo

| Param | Type | Description |
| --- | --- | --- |
| newAge | `number` | The new max age of the cache. |

### this.get(key) ⇒ `*`

Get the value for the specified key in the cache.

**Kind**: instance method of NodeMemo

| Param | Type | Description |
| --- | --- | --- |
| key | `*` | The key tied to the data in the cache. |

### this.set(key, value)

Set a key and value in the cache.

**Kind**: instance method of NodeMemo

| Param | Type | Description |
| --- | --- | --- |
| key | `*` | The key tied to the value in the cache. |
| value | `*` | The value tied to the key in the cache. |

### this.delete(key)

Delete an entry in the cache.

**Kind**: instance method of NodeMemo

| Param | Type | Description |
| --- | --- | --- |
| key | `*` | The key tied to the value in the cache. |

### this.has(key) ⇒ `boolean`

Check if a key-value pair exists in the cache.

**Kind**: instance method of NodeMemo

| Param | Type | Description |
| --- | --- | --- |
| key | `*` | The specified key in the cache. |

### this.keys() ⇒ `*[]`

Get the keys in the cache.

**Kind**: instance method of NodeMemo

### this.values() ⇒ `*[]`

Get the values in the cache.

**Kind**: instance method of NodeMemo

### this.entries() ⇒ `*[]`

Get the entries in the cache.

**Kind**: instance method of NodeMemo

### this.time(key) ⇒ `number`

Get the current time of a cached item.

**Kind**: instance method of NodeMemo

| Param | Type | Description |
| --- | --- | --- |
| key | `*` | The specified key in the cache. |

### this.clear()

Clear the cache.

**Kind**: instance method of NodeMemo

### NodeMemo.Second ⇒ `number`

Get 1 second in milliseconds.

**Kind**: static property of NodeMemo

### NodeMemo.Minute ⇒ `number`

Get 1 minute in milliseconds.

**Kind**: static property of NodeMemo

### NodeMemo.Hour ⇒ `number`

Get 1 hour in milliseconds.

**Kind**: static property of NodeMemo

### NodeMemo.Day ⇒ `number`

Get 1 day in milliseconds.

**Kind**: static property of NodeMemo

### NodeMemo.wait(ms) ⇒ `Promise`

Wait a set amount of time.

**Kind**: static property of NodeMemo

| Param | Type | Description |
| --- | --- | --- |
| ms | `number` | The amount of time to wait in milliseconds. |

## Author

[Kazi Jawad](https://github.com/kazijawad)
