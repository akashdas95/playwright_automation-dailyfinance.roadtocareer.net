import {test} from '@playwright/test';
import LoginPage from '../pages/LoginPage';
import DashboardPage from '../pages/DashboardPage';

test("search and delete user in admin panel", async({page})=>{
    await page.goto("/");
    const loginPage = new LoginPage(page);
    const loginData = {
        email: "admin@test.com",
        password: "admin123"
    }
    loginPage.loginPage(loginData);
    const dashboardPage = new DashboardPage(page);
    const registeredUser = readFromJsonFile();
    const email =  registeredUser.email;
    await dashboardPage.searchUser(email);
    await dashboardPage.userDelete();
    await loginPage.logoutPage();
})