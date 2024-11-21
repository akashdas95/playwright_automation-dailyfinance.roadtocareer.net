import {test} from '@playwright/test';
import LoginPage from '../pages/LoginPage';
import ProfileEdit from '../pages/profileEdit';
import {readFromJsonFile} from '../utils/utils';
import {faker} from '@faker-js/faker';

test("Profile Update", async ({page})=>{
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
    await loginPage.accountButton.click();
    await loginPage.profileButton.click();
    const profileEdit = new ProfileEdit(page);
    const profileData = {
        imageLink: "D:\\Java\\TestNG_Automation\\src\\test\\resources\\avater.JPG",
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        phoneNumber: "01478963255",
        address: faker.location.city(),
        gender: faker.person.gender()
    }
    await profileEdit.profileEditing(profileData);
    await loginPage.logoutPage();
})