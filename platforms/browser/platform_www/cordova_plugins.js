cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/phonegap-plugin-push/www/push.js",
        "id": "phonegap-plugin-push.PushNotification",
        "pluginId": "phonegap-plugin-push",
        "clobbers": [
            "PushNotification"
        ]
    },
    {
        "file": "plugins/com.salesforce/www/com.salesforce.plugin.oauth.js",
        "id": "com.salesforce.plugin.oauth",
        "pluginId": "com.salesforce"
    },
    {
        "file": "plugins/com.salesforce/www/com.salesforce.plugin.network.js",
        "id": "com.salesforce.plugin.network",
        "pluginId": "com.salesforce"
    },
    {
        "file": "plugins/com.salesforce/www/com.salesforce.plugin.sdkinfo.js",
        "id": "com.salesforce.plugin.sdkinfo",
        "pluginId": "com.salesforce"
    },
    {
        "file": "plugins/com.salesforce/www/com.salesforce.plugin.smartstore.js",
        "id": "com.salesforce.plugin.smartstore",
        "pluginId": "com.salesforce",
        "clobbers": [
            "navigator.smartstore"
        ]
    },
    {
        "file": "plugins/com.salesforce/www/com.salesforce.plugin.smartstore.client.js",
        "id": "com.salesforce.plugin.smartstore.client",
        "pluginId": "com.salesforce",
        "clobbers": [
            "navigator.smartstoreClient"
        ]
    },
    {
        "file": "plugins/com.salesforce/www/com.salesforce.plugin.sfaccountmanager.js",
        "id": "com.salesforce.plugin.sfaccountmanager",
        "pluginId": "com.salesforce"
    },
    {
        "file": "plugins/com.salesforce/www/com.salesforce.plugin.smartsync.js",
        "id": "com.salesforce.plugin.smartsync",
        "pluginId": "com.salesforce"
    },
    {
        "file": "plugins/com.salesforce/www/com.salesforce.util.bootstrap.js",
        "id": "com.salesforce.util.bootstrap",
        "pluginId": "com.salesforce"
    },
    {
        "file": "plugins/com.salesforce/www/com.salesforce.util.event.js",
        "id": "com.salesforce.util.event",
        "pluginId": "com.salesforce"
    },
    {
        "file": "plugins/com.salesforce/www/com.salesforce.util.exec.js",
        "id": "com.salesforce.util.exec",
        "pluginId": "com.salesforce"
    },
    {
        "file": "plugins/com.salesforce/www/com.salesforce.util.logger.js",
        "id": "com.salesforce.util.logger",
        "pluginId": "com.salesforce"
    },
    {
        "file": "plugins/com.salesforce/www/com.salesforce.util.promiser.js",
        "id": "com.salesforce.util.promiser",
        "pluginId": "com.salesforce"
    },
    {
        "file": "plugins/com.salesforce/www/com.salesforce.util.push.js",
        "id": "com.salesforce.util.push",
        "pluginId": "com.salesforce"
    },
    {
        "file": "plugins/cordova-plugin-device/www/device.js",
        "id": "cordova-plugin-device.device",
        "pluginId": "cordova-plugin-device",
        "clobbers": [
            "device"
        ]
    },
    {
        "file": "plugins/cordova-plugin-device/src/browser/DeviceProxy.js",
        "id": "cordova-plugin-device.DeviceProxy",
        "pluginId": "cordova-plugin-device",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-ionic-webview/src/www/util.js",
        "id": "cordova-plugin-ionic-webview.IonicWebView",
        "pluginId": "cordova-plugin-ionic-webview",
        "clobbers": [
            "Ionic.WebView"
        ]
    },
    {
        "file": "plugins/cordova-plugin-splashscreen/www/splashscreen.js",
        "id": "cordova-plugin-splashscreen.SplashScreen",
        "pluginId": "cordova-plugin-splashscreen",
        "clobbers": [
            "navigator.splashscreen"
        ]
    },
    {
        "file": "plugins/cordova-plugin-splashscreen/src/browser/SplashScreenProxy.js",
        "id": "cordova-plugin-splashscreen.SplashScreenProxy",
        "pluginId": "cordova-plugin-splashscreen",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-statusbar/www/statusbar.js",
        "id": "cordova-plugin-statusbar.statusbar",
        "pluginId": "cordova-plugin-statusbar",
        "clobbers": [
            "window.StatusBar"
        ]
    },
    {
        "file": "plugins/cordova-plugin-statusbar/src/browser/StatusBarProxy.js",
        "id": "cordova-plugin-statusbar.StatusBarProxy",
        "pluginId": "cordova-plugin-statusbar",
        "runs": true
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.3.3",
    "phonegap-plugin-push": "1.4.5",
    "com.salesforce": "6.1.0",
    "cordova-plugin-device": "2.0.2",
    "cordova-plugin-ionic-keyboard": "2.1.2",
    "cordova-plugin-ionic-webview": "2.1.4",
    "cordova-plugin-splashscreen": "5.0.2",
    "cordova-plugin-statusbar": "2.4.2",
    "cordova-plugin-wkwebview-engine": "1.1.5-dev"
}
// BOTTOM OF METADATA
});