$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/Features/testcase.feature");
formatter.feature({
  "name": "To test the facebook application.",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "To test the login funtionality of facebook application.",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "To enter URL and navigate to application.",
  "keyword": "Given "
});
formatter.step({
  "name": "To enter \"\u003cUsername\u003e\" and \"\u003cPassword\u003e\".",
  "keyword": "When "
});
formatter.step({
  "name": "click the submit button.",
  "keyword": "Then "
});
formatter.step({
  "name": "To test screenshot.",
  "keyword": "And "
});
formatter.step({
  "name": "Close the browser.",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Username",
        "Password"
      ]
    },
    {
      "cells": [
        "sakthi",
        "123"
      ]
    },
    {
      "cells": [
        "gerry",
        "456"
      ]
    },
    {
      "cells": [
        "geetha",
        "789"
      ]
    }
  ]
});
formatter.scenario({
  "name": "To test the login funtionality of facebook application.",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "To enter URL and navigate to application.",
  "keyword": "Given "
});
formatter.match({
  "location": "Com.Step.LoginStepDef.to_enter_URL_and_navigate_to_application()"
});
formatter.result({
  "error_message": "org.openqa.selenium.WebDriverException: Timed out waiting for driver server to start.\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-DD3GB8N\u0027, ip: \u0027192.168.43.138\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_271\u0027\nDriver info: driver.version: ChromeDriver\r\n\tat org.openqa.selenium.remote.service.DriverService.waitUntilAvailable(DriverService.java:202)\r\n\tat org.openqa.selenium.remote.service.DriverService.start(DriverService.java:188)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:79)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:213)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:131)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:181)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:168)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:123)\r\n\tat Com.Baseclass.library.browserSetUp(library.java:52)\r\n\tat Com.Step.LoginStepDef.to_enter_URL_and_navigate_to_application(LoginStepDef.java:16)\r\n\tat ✽.To enter URL and navigate to application.(file:///C:/Users/Geetha%20Natarajan/git/HyBridFrameWork/HybridSeleniumCucumber1/src/test/resources/Features/testcase.feature:4)\r\nCaused by: org.openqa.selenium.net.UrlChecker$TimeoutException: Timed out waiting for [http://localhost:16034/status] to be available after 20033 ms\r\n\tat org.openqa.selenium.net.UrlChecker.waitUntilAvailable(UrlChecker.java:100)\r\n\tat org.openqa.selenium.remote.service.DriverService.waitUntilAvailable(DriverService.java:197)\r\n\tat org.openqa.selenium.remote.service.DriverService.start(DriverService.java:188)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:79)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:213)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:131)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:181)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:168)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:123)\r\n\tat Com.Baseclass.library.browserSetUp(library.java:52)\r\n\tat Com.Step.LoginStepDef.to_enter_URL_and_navigate_to_application(LoginStepDef.java:16)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat io.cucumber.java.Invoker.invoke(Invoker.java:27)\r\n\tat io.cucumber.java.JavaStepDefinition.execute(JavaStepDefinition.java:27)\r\n\tat io.cucumber.core.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:63)\r\n\tat io.cucumber.core.runner.TestStep.executeStep(TestStep.java:64)\r\n\tat io.cucumber.core.runner.TestStep.run(TestStep.java:49)\r\n\tat io.cucumber.core.runner.PickleStepTestStep.run(PickleStepTestStep.java:46)\r\n\tat io.cucumber.core.runner.TestCase.run(TestCase.java:51)\r\n\tat io.cucumber.core.runner.Runner.runPickle(Runner.java:67)\r\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:149)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:83)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:24)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:185)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:83)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat io.cucumber.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:219)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:89)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:41)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:541)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:763)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:463)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:209)\r\nCaused by: java.util.concurrent.TimeoutException\r\n\tat java.util.concurrent.FutureTask.get(FutureTask.java:205)\r\n\tat com.google.common.util.concurrent.SimpleTimeLimiter.callWithTimeout(SimpleTimeLimiter.java:156)\r\n\tat org.openqa.selenium.net.UrlChecker.waitUntilAvailable(UrlChecker.java:75)\r\n\t... 48 more\r\n",
  "status": "failed"
});
formatter.step({
  "name": "To enter \"sakthi\" and \"123\".",
  "keyword": "When "
});
formatter.match({
  "location": "Com.Step.LoginStepDef.to_enter_and(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "click the submit button.",
  "keyword": "Then "
});
formatter.match({
  "location": "Com.Step.LoginStepDef.click_the_submit_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "To test screenshot.",
  "keyword": "And "
});
formatter.match({
  "location": "Com.Step.LoginStepDef.to_test_screenshot()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Close the browser.",
  "keyword": "Then "
});
formatter.match({
  "location": "Com.Step.LoginStepDef.close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "To test the login funtionality of facebook application.",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "To enter URL and navigate to application.",
  "keyword": "Given "
});
formatter.match({
  "location": "Com.Step.LoginStepDef.to_enter_URL_and_navigate_to_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To enter \"gerry\" and \"456\".",
  "keyword": "When "
});
formatter.match({
  "location": "Com.Step.LoginStepDef.to_enter_and(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click the submit button.",
  "keyword": "Then "
});
formatter.match({
  "location": "Com.Step.LoginStepDef.click_the_submit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To test screenshot.",
  "keyword": "And "
});
formatter.match({
  "location": "Com.Step.LoginStepDef.to_test_screenshot()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Close the browser.",
  "keyword": "Then "
});
formatter.match({
  "location": "Com.Step.LoginStepDef.close_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To test the login funtionality of facebook application.",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "To enter URL and navigate to application.",
  "keyword": "Given "
});
formatter.match({
  "location": "Com.Step.LoginStepDef.to_enter_URL_and_navigate_to_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To enter \"geetha\" and \"789\".",
  "keyword": "When "
});
formatter.match({
  "location": "Com.Step.LoginStepDef.to_enter_and(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click the submit button.",
  "keyword": "Then "
});
formatter.match({
  "location": "Com.Step.LoginStepDef.click_the_submit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To test screenshot.",
  "keyword": "And "
});
formatter.match({
  "location": "Com.Step.LoginStepDef.to_test_screenshot()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Close the browser.",
  "keyword": "Then "
});
formatter.match({
  "location": "Com.Step.LoginStepDef.close_the_browser()"
});
formatter.result({
  "status": "passed"
});
});