
//login step Definition
package Com.Step;

import Com.Baseclass.library;
import Com.ReusableFunction.SeleniumUtilities;
import Com.pages.LoginPage;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class LoginStepDef extends library {
	SeleniumUtilities su;
	LoginPage lpage;
	@Given("To enter URL and navigate to application.")
	public void to_enter_URL_and_navigate_to_application() {
		browserSetUp();
		logger.info("Launched browser");
	  
	}

	@When("To enter {string} and {string}.")
	public void to_enter_and(String Username, String Password) {
		lpage=new LoginPage(driver);
		lpage.login(Username, Password);
		logger.info("enter username and password");
	   
	}

	@Then("click the submit button.")
	public void click_the_submit_button() {
		su = new SeleniumUtilities(driver);
		
	}

	@Then("To test screenshot.")
	public void to_test_screenshot() {
		su.to_take_screenshot("src/test/resources/Screenshot/facebook.png");
		logger.info("screenshot");
		
	}

	@Then("Close the browser.")
	public void close_the_browser() {
		tearDown();    
		logger.info("browserclose");
	}



}
