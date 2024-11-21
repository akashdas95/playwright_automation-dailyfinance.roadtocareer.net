import {test} from "@playwright/test";
import addCostPage from "../pages/addCostpage";
import LoginPage from "../pages/LoginPage";
import {readFromJsonFile} from '../utils/utils';

test("Add item", async ({page})=>{
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

    const addCost = new addCostPage(page);
    let itemData = {};
    itemData = {
        itemName:"book",
        incrementCount: "2",
        itemAmount:"100",
        itemRemarks:"this is for my sister"
    }
    await addCost.addItem(itemData);
    await loginPage.logoutPage();
})

test("Edit item", async ({page})=>{
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

    const addCost = new addCostPage(page);

    let itemData = {};
    itemData = {
        itemName:"pen",
        incrementCount: "4",
        itemAmount:"50",
        itemRemarks:"this is for my brother"
    }
    await addCost.editItem(itemData);
    await loginPage.logoutPage();
})

test("Delete Item", async ({page})=>{
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
    const addCost = new addCostPage(page);
    await addCost.deleteItem();
    await loginPage.logoutPage();
})