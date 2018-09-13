cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
  {
    "id": "cordova-plugin-device.device",
    "file": "plugins/cordova-plugin-device/www/device.js",
    "pluginId": "cordova-plugin-device",
    "clobbers": [
      "device"
    ]
  },
  {
    "id": "cordova-plugin-statusbar.statusbar",
    "file": "plugins/cordova-plugin-statusbar/www/statusbar.js",
    "pluginId": "cordova-plugin-statusbar",
    "clobbers": [
      "window.StatusBar"
    ]
  },
  {
    "id": "cordova-plugin-splashscreen.SplashScreen",
    "file": "plugins/cordova-plugin-splashscreen/www/splashscreen.js",
    "pluginId": "cordova-plugin-splashscreen",
    "clobbers": [
      "navigator.splashscreen"
    ]
  },
  {
    "id": "cordova-plugin-ionic-webview.IonicWebView",
    "file": "plugins/cordova-plugin-ionic-webview/src/www/util.js",
    "pluginId": "cordova-plugin-ionic-webview",
    "clobbers": [
      "Ionic.WebView"
    ]
  },
  {
    "id": "cordova-plugin-ionic-webview.ios-wkwebview-exec",
    "file": "plugins/cordova-plugin-ionic-webview/src/www/ios/ios-wkwebview-exec.js",
    "pluginId": "cordova-plugin-ionic-webview",
    "clobbers": [
      "cordova.exec"
    ]
  },
  {
    "id": "cordova-plugin-ionic-keyboard.keyboard",
    "file": "plugins/cordova-plugin-ionic-keyboard/www/ios/keyboard.js",
    "pluginId": "cordova-plugin-ionic-keyboard",
    "clobbers": [
      "window.Keyboard"
    ]
  },
  {
    "id": "phonegap-plugin-push.PushNotification",
    "file": "plugins/phonegap-plugin-push/www/push.js",
    "pluginId": "phonegap-plugin-push",
    "clobbers": [
      "PushNotification"
    ]
  },
  {
    "id": "cordova-plugin-wkwebview-engine.ios-wkwebview-exec",
    "file": "plugins/cordova-plugin-wkwebview-engine/src/www/ios/ios-wkwebview-exec.js",
    "pluginId": "cordova-plugin-wkwebview-engine",
    "clobbers": [
      "cordova.exec"
    ]
  },
  {
    "id": "cordova-plugin-wkwebview-engine.ios-wkwebview",
    "file": "plugins/cordova-plugin-wkwebview-engine/src/www/ios/ios-wkwebview.js",
    "pluginId": "cordova-plugin-wkwebview-engine",
    "clobbers": [
      "window.WkWebView"
    ]
  },
  {
    "id": "com.salesforce.plugin.oauth",
    "file": "plugins/com.salesforce/www/com.salesforce.plugin.oauth.js",
    "pluginId": "com.salesforce"
  },
  {
    "id": "com.salesforce.plugin.network",
    "file": "plugins/com.salesforce/www/com.salesforce.plugin.network.js",
    "pluginId": "com.salesforce"
  },
  {
    "id": "com.salesforce.plugin.sdkinfo",
    "file": "plugins/com.salesforce/www/com.salesforce.plugin.sdkinfo.js",
    "pluginId": "com.salesforce"
  },
  {
    "id": "com.salesforce.plugin.smartstore",
    "file": "plugins/com.salesforce/www/com.salesforce.plugin.smartstore.js",
    "pluginId": "com.salesforce",
    "clobbers": [
      "navigator.smartstore"
    ]
  },
  {
    "id": "com.salesforce.plugin.smartstore.client",
    "file": "plugins/com.salesforce/www/com.salesforce.plugin.smartstore.client.js",
    "pluginId": "com.salesforce",
    "clobbers": [
      "navigator.smartstoreClient"
    ]
  },
  {
    "id": "com.salesforce.plugin.sfaccountmanager",
    "file": "plugins/com.salesforce/www/com.salesforce.plugin.sfaccountmanager.js",
    "pluginId": "com.salesforce"
  },
  {
    "id": "com.salesforce.plugin.smartsync",
    "file": "plugins/com.salesforce/www/com.salesforce.plugin.smartsync.js",
    "pluginId": "com.salesforce"
  },
  {
    "id": "com.salesforce.util.bootstrap",
    "file": "plugins/com.salesforce/www/com.salesforce.util.bootstrap.js",
    "pluginId": "com.salesforce"
  },
  {
    "id": "com.salesforce.util.event",
    "file": "plugins/com.salesforce/www/com.salesforce.util.event.js",
    "pluginId": "com.salesforce"
  },
  {
    "id": "com.salesforce.util.exec",
    "file": "plugins/com.salesforce/www/com.salesforce.util.exec.js",
    "pluginId": "com.salesforce"
  },
  {
    "id": "com.salesforce.util.logger",
    "file": "plugins/com.salesforce/www/com.salesforce.util.logger.js",
    "pluginId": "com.salesforce"
  },
  {
    "id": "com.salesforce.util.promiser",
    "file": "plugins/com.salesforce/www/com.salesforce.util.promiser.js",
    "pluginId": "com.salesforce"
  },
  {
    "id": "com.salesforce.util.push",
    "file": "plugins/com.salesforce/www/com.salesforce.util.push.js",
    "pluginId": "com.salesforce"
  }
];
module.exports.metadata = 
// TOP OF METADATA
{
  "cordova-plugin-whitelist": "1.3.3",
  "cordova-plugin-device": "2.0.2",
  "cordova-plugin-statusbar": "2.4.2",
  "cordova-plugin-splashscreen": "5.0.2",
  "cordova-plugin-ionic-webview": "2.1.4",
  "cordova-plugin-ionic-keyboard": "2.1.2",
  "phonegap-plugin-push": "1.4.5",
  "cordova-plugin-wkwebview-engine": "1.1.5-dev",
  "com.salesforce": "6.1.0"
};
// BOTTOM OF METADATA
});