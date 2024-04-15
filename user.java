package web_auto;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

public class Mynta {

	public static void main(String[] args)throws Exception {
		
		System.setProperty("webdriver.chrome.driver","C:\\Users\\nithin\\Desktop\\chromedriver-win64\\chromedriver-win64\\chromedriver.exe");
		WebDriver driver=new ChromeDriver();
		//WebDriver webDriver;
        
		driver.navigate().to("http://localhost:3000/");
		//driver.wait(10);
		driver.manage().window().maximize();
		//driver.findElement(By.linkText("Login")).click();
		//driver.findElement(By.linkText("Sign in")).click();
		 //driver.wait(10);
		driver.findElement(By.id("email")).click();
		driver.findElement(By.id("email")).sendKeys("user@gmail.com");
		driver.findElement(By.xpath("//input[@id='password']")).click();
		driver.findElement(By.xpath("//input[@id='password']")).sendKeys("111");
		driver.findElement(By.id("submit-btn")).click();

		
		
        //driver.findElement(By.xpath("//div[@class='VfPpkd-RLmnJb']")).click();
       //Thread.sleep(30);
      
        //driver.close();
	}

}