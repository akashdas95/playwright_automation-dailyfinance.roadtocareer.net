class DashboardPage{

    constructor(page){
        this.page = page;
        this.searchUserInput = page.getByRole("textbox", {name:"Search by any field or date..."});
        this.viewButton = page.getByRole("button", {name:"VIEW"});
        this.deleteButton = page.getByRole("button", {name:"DELETE"});
    }

    async searchUser(userEmail){
        await this.searchUserInput.fill(userEmail);
    }

    async userDelete(){
        await this.page.on('dialog', async(dialog) => {
            console.log(`Dialog message: ${dialog.message()}`);
            await dialog.accept();
        });
        await this.viewButton.click();
        await this.deleteButton.click();
    }
}

export default DashboardPage;