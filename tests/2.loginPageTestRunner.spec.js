import {test} from "@playwright/test";
import LoginPage from "../pages/LoginPage";
import { readFromJsonFile } from "../utils/utils";

test("Admin login", async ({page})=>{
    await page.goto("/");
    
    const loginPage = new LoginPage(page);

    const loginData ={
        email: "admin@test.com",
        password: "admin123"
    }

    await loginPage.loginPage(loginData);
    await page.waitForTimeout(1000);
    await loginPage.logoutPage();
}) 

test("User login", async({page})=>{
    await page.goto("/");
    const loginPage = new LoginPage(page);
    const registeredUser = readFromJsonFile();
    let loginData = {};

    if(registeredUser){
        loginData = {
            email: registeredUser.email,
            password: registeredUser.password
        }
    }
    else{
        loginData = {
            email: "roseline.lowe@gmail.com",
            password: "1234"
        }
    }
    await loginPage.loginPage(loginData);
    await page.waitForTimeout(1000);
    await loginPage.logoutPage();
})

