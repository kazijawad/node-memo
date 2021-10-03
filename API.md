<a name="MemoryCache"></a>

## MemoryCache

An in-memory cache module.

* [MemoryCache](#MemoryCache)
    * [new MemoryCache(maxAge)](#new_MemoryCache_new)
    * _instance_
        * [.maxAge](#MemoryCache+maxAge) ⇒ `number`
        * [.maxAge](#MemoryCache+maxAge)
        * [.get(key)](#MemoryCache+get) ⇒ `\*`
        * [.set(key, value)](#MemoryCache+set)
        * [.has(key)](#MemoryCache+has) ⇒ `boolean`
        * [.keys()](#MemoryCache+keys) ⇒ `Iterator`
        * [.values()](#MemoryCache+values) ⇒ `Iterator`
        * [.time(key)](#MemoryCache+time) ⇒ `number`
        * [.clear()](#MemoryCache+clear)
    * _static_
        * [.Second](#MemoryCache.Second) ⇒ `number`
        * [.Minute](#MemoryCache.Minute) ⇒ `number`
        * [.Hour](#MemoryCache.Hour) ⇒ `number`
        * [.Day](#MemoryCache.Day) ⇒ `number`

<a name="new_MemoryCache_new"></a>

### new MemoryCache(maxAge)

Create a cache.

| Param | Type | Description |
| --- | --- | --- |
| maxAge | `number` | The max age of the cache. |

<a name="MemoryCache+maxAge"></a>

### memoryCache.maxAge ⇒ `number`

Get the max age of the cache.

**Kind**: instance property of [`MemoryCache`](#MemoryCache)
<a name="MemoryCache+maxAge"></a>

### memoryCache.maxAge

Set the max age of the cache.

**Kind**: instance property of [`MemoryCache`](#MemoryCache)

| Param | Type | Description |
| --- | --- | --- |
| newAge | `number` | The new max age of the cache. |

<a name="MemoryCache+get"></a>

### memoryCache.get(key) ⇒ `\*`

Get the value for the specified key in the cache.

**Kind**: instance method of [`MemoryCache`](#MemoryCache)

| Param | Type | Description |
| --- | --- | --- |
| key | `\*` | The key tied to the data in the cache. |

<a name="MemoryCache+set"></a>

### memoryCache.set(key, value)

Set a key and value in the cache.

**Kind**: instance method of [`MemoryCache`](#MemoryCache)

| Param | Type | Description |
| --- | --- | --- |
| key | `\*` | The key tied to the value in the cache. |
| value | `\*` | The value tied to the key in the cache. |

<a name="MemoryCache+has"></a>

### memoryCache.has(key) ⇒ `boolean`

Check if a key-value pair exists in the cache.

**Kind**: instance method of [`MemoryCache`](#MemoryCache)

| Param | Type | Description |
| --- | --- | --- |
| key | `\*` | The specified key in the cache. |

<a name="MemoryCache+keys"></a>

### memoryCache.keys() ⇒ `Iterator`

Get the keys in the cache.

**Kind**: instance method of [`MemoryCache`](#MemoryCache)
<a name="MemoryCache+values"></a>

### memoryCache.values() ⇒ `Iterator`

Get the values in the cache.

**Kind**: instance method of [`MemoryCache`](#MemoryCache)
<a name="MemoryCache+time"></a>

### memoryCache.time(key) ⇒ `number`

Get the current time of a cached item.

**Kind**: instance method of [`MemoryCache`](#MemoryCache)

| Param | Type | Description |
| --- | --- | --- |
| key | `\*` | The specified key in the cache. |

<a name="MemoryCache+clear"></a>

### memoryCache.clear()

Clear the cache.

**Kind**: instance method of [`MemoryCache`](#MemoryCache)
<a name="MemoryCache.Second"></a>

### MemoryCache.Second ⇒ `number`

Get 1 second in milliseconds.

**Kind**: static property of [`MemoryCache`](#MemoryCache)
<a name="MemoryCache.Minute"></a>

### MemoryCache.Minute ⇒ `number`

Get 1 minute in milliseconds.

**Kind**: static property of [`MemoryCache`](#MemoryCache)
<a name="MemoryCache.Hour"></a>

### MemoryCache.Hour ⇒ `number`

Get 1 hour in milliseconds.

**Kind**: static property of [`MemoryCache`](#MemoryCache)
<a name="MemoryCache.Day"></a>

### MemoryCache.Day ⇒ `number`

Get 1 day in milliseconds.

**Kind**: static property of [`MemoryCache`](#MemoryCache)
