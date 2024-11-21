class ProfileEdit{

    constructor(page){
        this.page = page;
        this.editButton = page.getByRole("button", {name:"EDIT"});
        this.imageEditInput = page.locator('input[type="file"]');
        this.imageUploadButton = page.getByRole("button", {name:"UPLOAD IMAGE"});
        this.updateButton = page.getByRole("button", {name:"UPDATE"});

        this.firstNameInput = page.getByLabel("First Name")
        this.lastNameInput = page.getByLabel("last Name")
        this.phonenumberInput = page.getByLabel("Phone Number")
        this.addressInput = page.getByLabel("Address")
        this.genderInput = page.getByLabel("Gender")
    }

    async profileEditing(profileData){
        await this.page.on('dialog', async(dialog) => {
            console.log(`Dialog message: ${dialog.message()}`);
            await dialog.accept();
        });
        await this.editButton.click();
        await this.imageEditInput.setInputFiles(profileData.imageLink);
        await this.imageUploadButton.click();      
        await this.firstNameInput.fill(profileData.firstName);
        await this.lastNameInput.fill(profileData.lastName);
        await this.phonenumberInput.fill(profileData.phoneNumber);
        await this.addressInput.fill(profileData.address);
        await this.genderInput.fill(profileData.gender);
        await this.page.waitForTimeout(1000);
        await this.updateButton.click();
    }
}

export default ProfileEdit;