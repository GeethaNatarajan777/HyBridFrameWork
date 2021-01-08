package Com.pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import Com.Baseclass.library;

public class LoginPage extends library{
	WebDriver driver;
	@FindBy(id="email")
	WebElement username;
	@FindBy(id="pass")
	WebElement pwd;
	@FindBy(id="u_0_b")
	WebElement Loginbutton;
	
	public LoginPage(WebDriver driver) {
		this.driver=driver;
		PageFactory.initElements(driver, this);
		
		
}
	public void login(String Username,String Password) {
		username.sendKeys(Username);
		pwd.sendKeys(Password);
		Loginbutton.click();
		
	}
	
	
	
	

}

