/**
 * An in-memory cache module.
 */
class NodeMemo {
    #maxAge;
    #data;
    #times;

    /**
     * Get 1 second in milliseconds.
     * @return {number}
     */
    static get Second() {
        return 1000;
    }

    /**
     * Get 1 minute in milliseconds.
     * @return {number}
     */
    static get Minute() {
        return 1000 * 60;
    }

    /**
     * Get 1 hour in milliseconds.
     * @return {number}
     */
    static get Hour() {
        return NodeCache.Minute * 60;
    }

    /**
     * Get 1 day in milliseconds.
     * @return {number}
     */
    static get Day() {
        return NodeCache.Hour * 24;
    }

    /**
     * Wait a set amount of time.
     * @param {number} ms - The amount of time to wait in milliseconds;
     * @return {Promise}
     */
    static async wait(ms) {
        if (Number.isNaN(Number(ms))) {
            throw new Error('wait: Expected number input.');
        }
        return new Promise(function(resolve) {
            return setTimeout(resolve, ms);
        });
    }

    /**
     * Create a cache.
     * @param {number} maxAge - The max age of the cache.
     */
    constructor(maxAge) {
        this.#maxAge = maxAge || 1000 * 60 * 60; // 1 Hour Default
        this.#data = new Map();
        this.#times = new Map();
    }

    /**
     * Get the max age of the cache.
     * @return {number}
     */
    get maxAge() {
        return this.#maxAge;
    }

    /**
     * Set the max age of the cache.
     * @param {number} newAge - The new max age of the cache.
     */
    set maxAge(newAge) {
        if (Number.isNaN(Number(newAge))) {
            throw new Error('setMaxAge: Expected number input.');
        }
        this.#maxAge = newAge;
    }

    /**
     * Get the value for the specified key in the cache.
     * @param {*} key - The key tied to the data in the cache.
     * @return {?*}
     */
    get(key) {
        const datum = this.#data.get(key);
        const time = this.#times.get(key);
        return datum || null;
    }

    /**
     * Set a key and value in the cache.
     * @param {*} key - The key tied to the value in the cache.
     * @param {*} value - The value tied to the key in the cache.
     */
    set(key, value) {
        this.#data.set(key, value);
        this.#times.set(key, Date.now());
        setTimeout(() => this.delete(key), this.maxAge);
    }

    /**
     * Delete an entry in the cache.
     * @param {*} key - The key tied to the value in the cache.
     * @return {boolean}
     */
    delete(key) {
        if (this.has(key)) {
            this.#data.delete(key);
            this.#times.delete(key);
            return true;
        } else {
            return false;
        }
    }

    /**
     * Check if a key-value pair exists in the cache.
     * @param {*} key - The specified key in the cache.
     * @return {boolean}
     */
    has(key) {
        if (this.#data.has(key) && this.#times.has(key)) {
            return true;
        }
        return false;
    }

    /**
     * Get the keys in the cache.
     * @return {*[]}
     */
    keys() {
        const keys = [];
        for (const key of this.#data.keys()) {
            keys.push(key);
        }
        return keys;
    }

    /**
     * Get the values in the cache.
     * @return {*[]}
     */
    values() {
        const values = [];
        for (const value of this.#data.values()) {
            values.push(value);
        }
        return values;
    }

    /**
     * Get the entries in the cache.
     * @return {*[]}
     */
    entries() {
        const entries = [];
        for (const entry of this.#data.entries()) {
            entries.push(entry);
        }
        return entries;
    }

    /**
     * Get the current time of a cached item.
     * @param {*} key - The specified key in the cache.
     * @return {?number}
     */
    time(key) {
        const time = this.#times.get(key);
        return time ? Date.now() - time : null;
    }

    /**
     * Clear the cache.
     */
    clear() {
        this.#data.clear();
        this.#times.clear();
    }

    #expired(time) {
        return (Date.now() - time) > this.#maxAge;
    }
}

module.exports = NodeMemo;
