package Com.TestCas;

import java.io.IOException;

import org.testng.annotations.AfterClass;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.BeforeTest;
import org.testng.annotations.Test;

import Com.Baseclass.library;
import Com.ReusableFunction.SeleniumUtilities;
import Com.pages.LoginPage;

public class LoginStep extends library {
	SeleniumUtilities SU;
	LoginPage lpage;
	@BeforeClass
	public void startup() {
	browserSetUp();
	logger.info("Launched the chrome Application");
	}
	
	
	@Test
	public void login() {
		LoginPage lpage=new LoginPage(driver);
		lpage.login(properties.getProperty("username"), properties.getProperty("password"));
		logger.info("Entered username and password");
		
	}
	@AfterClass
	public void close() throws IOException {
		SeleniumUtilities SU= new SeleniumUtilities(driver);
		SU.to_take_screenshot("src/test/resources/Screenshot/fb.png");
		tearDown();
		logger.info("Take screenshot and closing the browser");
		
	}

}
