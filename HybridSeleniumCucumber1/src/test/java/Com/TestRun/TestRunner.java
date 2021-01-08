package Com.TestRun;

import org.junit.runner.RunWith;
import org.testng.annotations.AfterClass;

import com.vimalselvam.cucumber.listener.Reporter;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;


//import io.cucumber.testng.AbstractTestNGCucumberTests;
//import io.cucumber.testng.CucumberOptions;
@RunWith(Cucumber.class)
@CucumberOptions(


			dryRun = false, 
			features = "src/test/resources/Features/testcase.feature", 
			glue = {
					"com.Step" }, 
			monochrome = true, 
			plugin = { "pretty",
						"html:Reports/cucumber-html-report", 
						"json:Reports/cucumber-html-report/jsonreport.json",
						"rerun:target/cucumber-reports/rerun.txt",
						"com.aventstack.extentreports.cucumber.adapter.ExtentCucumberAdapter: ",
						"testng:target/testng-cucumber-reports/cuketestng.xml",
						}

	)
	//public class TestRunner extends AbstractTestNGCucumberTests{
	public class TestRunner {
	@AfterClass
	public static void Extentsreport()
	{
		Reporter.loadXMLConfig("src/test/resources/Reports/Extent-config.xml");
		Reporter.setSystemInfo("user", System.getProperty("user.name"));
		Reporter.setSystemInfo("os", System.getProperty("os.name"));
		Reporter.setTestRunnerOutput("Sample test runner output message");
	}
}