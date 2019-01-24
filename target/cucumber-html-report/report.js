$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Bank.feature");
formatter.feature({
  "line": 2,
  "name": "Feature to test Bank\u0027s functionality",
  "description": "",
  "id": "feature-to-test-bank\u0027s-functionality",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@bank"
    }
  ]
});
formatter.scenarioOutline({
  "line": 23,
  "name": "To create customer \u003cID\u003e",
  "description": "",
  "id": "feature-to-test-bank\u0027s-functionality;to-create-customer-\u003cid\u003e",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 22,
      "name": "@smoke"
    },
    {
      "line": 22,
      "name": "@customer"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "I read data from excel \u003cID\u003e",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "url is loaded",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I login",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "I should see on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "I create new customer",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "I should get customerId",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "I logout",
  "keyword": "And "
});
formatter.examples({
  "line": 32,
  "name": "",
  "description": "",
  "id": "feature-to-test-bank\u0027s-functionality;to-create-customer-\u003cid\u003e;",
  "rows": [
    {
      "cells": [
        "ID"
      ],
      "line": 33,
      "id": "feature-to-test-bank\u0027s-functionality;to-create-customer-\u003cid\u003e;;1"
    },
    {
      "cells": [
        "1"
      ],
      "line": 34,
      "id": "feature-to-test-bank\u0027s-functionality;to-create-customer-\u003cid\u003e;;2"
    },
    {
      "cells": [
        "2"
      ],
      "line": 35,
      "id": "feature-to-test-bank\u0027s-functionality;to-create-customer-\u003cid\u003e;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 195820,
  "status": "passed"
});
formatter.scenario({
  "line": 34,
  "name": "To create customer 1",
  "description": "",
  "id": "feature-to-test-bank\u0027s-functionality;to-create-customer-\u003cid\u003e;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 22,
      "name": "@smoke"
    },
    {
      "line": 22,
      "name": "@customer"
    },
    {
      "line": 1,
      "name": "@bank"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "I read data from excel 1",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "url is loaded",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I login",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "I should see on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "I create new customer",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "I should get customerId",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "I logout",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 23
    }
  ],
  "location": "BankStepDefinition.read_data_from_excel(String)"
});
formatter.result({
  "duration": 934446621,
  "status": "passed"
});
formatter.match({
  "location": "BankStepDefinition.url_is_loaded()"
});
formatter.result({
  "duration": 8052063542,
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: cannot determine loading status\nfrom unknown error: cannot determine loading status\nfrom disconnected: unable to send message to renderer\n  (Session info: chrome\u003d71.0.3578.98)\n  (Driver info: chromedriver\u003d2.38.552522 (437e6fbedfa8762dec75e2c5b3ddb86763dc9dcb),platform\u003dWindows NT 6.1.7601 SP1 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 3.09 seconds\nBuild info: version: \u00272.46.0\u0027, revision: \u002761506a4624b13675f24581e453592342b7485d71\u0027, time: \u00272015-06-04 10:22:50\u0027\nSystem info: host: \u0027IN-MU-LT-J27150\u0027, ip: \u002710.236.21.21\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_181\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.38.552522 (437e6fbedfa8762dec75e2c5b3ddb86763dc9dcb), userDataDir\u003dC:\\Users\\survep\\AppData\\Local\\Temp\\scoped_dir5552_28764}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d71.0.3578.98, platform\u003dXP, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dfalse, acceptInsecureCerts\u003dfalse, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d}]\nSession ID: 92a4ed6bdfadcba5d7e43436879b1f7c\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:204)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:156)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:605)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:306)\r\n\tat stepDefinition.BankStepDefinition.url_is_loaded(BankStepDefinition.java:47)\r\n\tat ✽.And url is loaded(Bank.feature:25)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "BankStepDefinition.i_login()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "BankStepDefinition.i_should_see_on_home_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "BankStepDefinition.i_create_new_customer()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "BankStepDefinition.i_should_get_customerID()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "BankStepDefinition.i_logout()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1835140326,
  "status": "passed"
});
formatter.before({
  "duration": 44336,
  "status": "passed"
});
formatter.scenario({
  "line": 35,
  "name": "To create customer 2",
  "description": "",
  "id": "feature-to-test-bank\u0027s-functionality;to-create-customer-\u003cid\u003e;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 22,
      "name": "@smoke"
    },
    {
      "line": 22,
      "name": "@customer"
    },
    {
      "line": 1,
      "name": "@bank"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "I read data from excel 2",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "url is loaded",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I login",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "I should see on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "I create new customer",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "I should get customerId",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "I logout",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 23
    }
  ],
  "location": "BankStepDefinition.read_data_from_excel(String)"
});
formatter.result({
  "duration": 103594224,
  "status": "passed"
});
formatter.match({
  "location": "BankStepDefinition.url_is_loaded()"
});
formatter.result({
  "duration": 7968718852,
  "status": "passed"
});
formatter.match({
  "location": "BankStepDefinition.i_login()"
});
formatter.result({
  "duration": 5087482778,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d71.0.3578.98)\n  (Driver info: chromedriver\u003d2.38.552522 (437e6fbedfa8762dec75e2c5b3ddb86763dc9dcb),platform\u003dWindows NT 6.1.7601 SP1 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 7 milliseconds\nBuild info: version: \u00272.46.0\u0027, revision: \u002761506a4624b13675f24581e453592342b7485d71\u0027, time: \u00272015-06-04 10:22:50\u0027\nSystem info: host: \u0027IN-MU-LT-J27150\u0027, ip: \u002710.236.21.21\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_181\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.38.552522 (437e6fbedfa8762dec75e2c5b3ddb86763dc9dcb), userDataDir\u003dC:\\Users\\survep\\AppData\\Local\\Temp\\scoped_dir13096_1698}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d71.0.3578.98, platform\u003dXP, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dfalse, acceptInsecureCerts\u003dfalse, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d}]\nSession ID: f5afad76acd8bba18ee46938b0efbe75\n*** Element info: {Using\u003dxpath, value\u003d//input[@name\u003d\u0027uid\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:204)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:156)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:605)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:358)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:455)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:358)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:350)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy20.toString(Unknown Source)\r\n\tat java.lang.String.valueOf(String.java:2994)\r\n\tat java.lang.StringBuilder.append(StringBuilder.java:131)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$10.toString(ExpectedConditions.java:293)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:224)\r\n\tat utils.WebDriverWrapper.waitForElementToVisible(WebDriverWrapper.java:20)\r\n\tat pages.LoginPage.login(LoginPage.java:48)\r\n\tat stepDefinition.BankStepDefinition.i_login(BankStepDefinition.java:60)\r\n\tat ✽.When I login(Bank.feature:26)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "BankStepDefinition.i_should_see_on_home_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "BankStepDefinition.i_create_new_customer()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "BankStepDefinition.i_should_get_customerID()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "BankStepDefinition.i_logout()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1646876237,
  "status": "passed"
});
});