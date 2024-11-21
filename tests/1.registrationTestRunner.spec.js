import {test} from "@playwright/test";
import Registration from "../pages/Registration";
import { writeJsonFile } from "../utils/utils";
import {faker} from "@faker-js/faker";

test("User registration", async ({page})=>{
    await page.goto("/");
    const reg = new Registration(page);

    const userData = {
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        email: faker.person.firstName()+"@gmail.com",
        password: "123456",
        phoneNumber: "01234567892",
        address: faker.location.city()
    }

    await reg.registration(userData);
    writeJsonFile(userData);   
})