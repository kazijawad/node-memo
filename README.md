# node-memo

An in-memory cache module.

## API

* [new MemoryCache(maxAge)](#new_MemoryCache_new)
* _instance_
    * [this.maxAge](#MemoryCache+maxAge) ⇒ `number`
    * [this.maxAge](#MemoryCache+maxAge)
    * [this.get(key)](#MemoryCache+get) ⇒ `*`
    * [this.set(key, value)](#MemoryCache+set)
    * [this.has(key)](#MemoryCache+has) ⇒ `boolean`
    * [this.keys()](#MemoryCache+keys) ⇒ `Iterator`
    * [this.values()](#MemoryCache+values) ⇒ `Iterator`
    * [this.time(key)](#MemoryCache+time) ⇒ `number`
    * [this.clear()](#MemoryCache+clear)
* _static_
    * [MemoryCache.Second](#MemoryCache.Second) ⇒ `number`
    * [MemoryCache.Minute](#MemoryCache.Minute) ⇒ `number`
    * [MemoryCache.Hour](#MemoryCache.Hour) ⇒ `number`
    * [MemoryCache.Day](#MemoryCache.Day) ⇒ `number`

<a name="new_MemoryCache_new"></a>

### new MemoryCache(maxAge)

Create a cache.

| Param | Type | Description |
| --- | --- | --- |
| maxAge | `number` | The max age of the cache. |

<a name="MemoryCache+maxAge"></a>

### this.maxAge ⇒ `number`

Get the max age of the cache.

**Kind**: instance property of [`MemoryCache`](#MemoryCache)
<a name="MemoryCache+maxAge"></a>

### this.maxAge

Set the max age of the cache.

**Kind**: instance property of [`MemoryCache`](#MemoryCache)

| Param | Type | Description |
| --- | --- | --- |
| newAge | `number` | The new max age of the cache. |

<a name="MemoryCache+get"></a>

### this.get(key) ⇒ `*`

Get the value for the specified key in the cache.

**Kind**: instance method of [`MemoryCache`](#MemoryCache)

| Param | Type | Description |
| --- | --- | --- |
| key | `*` | The key tied to the data in the cache. |

<a name="MemoryCache+set"></a>

### this.set(key, value)

Set a key and value in the cache.

**Kind**: instance method of [`MemoryCache`](#MemoryCache)

| Param | Type | Description |
| --- | --- | --- |
| key | `*` | The key tied to the value in the cache. |
| value | `*` | The value tied to the key in the cache. |

<a name="MemoryCache+has"></a>

### this.has(key) ⇒ `boolean`

Check if a key-value pair exists in the cache.

**Kind**: instance method of [`MemoryCache`](#MemoryCache)

| Param | Type | Description |
| --- | --- | --- |
| key | `*` | The specified key in the cache. |

<a name="MemoryCache+keys"></a>

### this.keys() ⇒ `Iterator`

Get the keys in the cache.

**Kind**: instance method of [`MemoryCache`](#MemoryCache)
<a name="MemoryCache+values"></a>

### this.values() ⇒ `Iterator`

Get the values in the cache.

**Kind**: instance method of [`MemoryCache`](#MemoryCache)
<a name="MemoryCache+time"></a>

### this.time(key) ⇒ `number`

Get the current time of a cached item.

**Kind**: instance method of [`MemoryCache`](#MemoryCache)

| Param | Type | Description |
| --- | --- | --- |
| key | `*` | The specified key in the cache. |

<a name="MemoryCache+clear"></a>

### this.clear()

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

## Author

[Kazi Jawad](https://github.com/kazijawad)
