# localforage

## nuxt-storage

    All API import

    import nuxtStorage from 'nuxt-storage';
    
    nuxtStorage.localStorage.setData('key', 'value');
    nuxtStorage.sessionStorage.setData('key', 'value');
    Partial import

    // # for local storage
    import { getData, setData } from 'nuxt-storage/local-storage';
    
    // # for session storage
    // import { getData, setData } from 'nuxt-storage/session-storage';
    
    setData('key', 'value')

    getData key (type: String) Empty String 
    setData key (type: String) Empty String 
    value (type: any) Empty String 
    expiry (type: Number) 5 
    expiryUnit (type: String) m s = second, m = minutes, h = hour, d = day
    clear

## @nuxtjs/localforage

    Get item
    let item = await this.$localForage.getItem(key)
    Set item
    await this.$localForage.setItem(key, value)
    Remove item
    await this.$localForage.removeItem(key)
    Clear
    await this.$localForage.clear
    Gets the length
    let length = await this.$localForage.length
    Get the name of a key based on its ID
    let k = await this.$localForage.key(keyIndex)
    Get the list of all keys
    let keys = await this.$localForage.keys()
    Force usage of a particular driver or drivers, if available
    this.$localForage.setDriver(localforage.LOCALSTORAGE)
    By default, localForage selects backend drivers for the datastore in this order:

    IndexedDB
    WebSQL
    localStorage
    If you would like to force usage of a particular driver you can use $setStorageDriver() with one or more of the following parameters.

    localforage.INDEXEDDB
    localforage.WEBSQL
    localforage.LOCALSTORAGE
    Advanced Usage
    You can register multiple instances, see below:

    // nuxt.config.js
    export default {
    buildModules: [
        '@nuxtjs/localforage'
    ],
    
    localforage: {
        instances: [{
        name: 'myApp',
        storeName: 'images'
        }, {
        name: 'myApp',
        storeName: 'fileSystem'
        }]
    }
    }
    
    // for images
    await this.$localforage.images.setItem(key, value)
    
    // for fileSystem
    await this.$localforage.fileSystem.setItem(key, value)
