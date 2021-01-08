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
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "To enter \"sakthi\" and \"123\".",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "click the submit button.",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "To test screenshot.",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "Close the browser.",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
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
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "To enter \"gerry\" and \"456\".",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "click the submit button.",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "To test screenshot.",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "Close the browser.",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
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
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "To enter \"geetha\" and \"789\".",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "click the submit button.",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "To test screenshot.",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "Close the browser.",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});