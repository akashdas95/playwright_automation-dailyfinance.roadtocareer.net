class addCostPage {

    constructor(page) {
        this.page = page;
        this.addCostButton = page.getByRole("button", { name: "Add Cost" });
        this.itemNameInput = page.getByRole("textbox", { name: "Item Name" });
        this.itemIncButton = page.getByRole("button", { name: "+" });
        this.itemAmountInput = page.getByRole("spinbutton", { name: "Amount" });
        this.remarksInput = page.getByRole("textbox", { name: "Remarks" });
        this.itemAddButton = page.getByRole("button", { name: "Submit" });
        this.viewButton = page.getByRole("button", { name: "View" });
        this.deleteButton = page.getByRole("button", { name: "Delete" });
        this.editButton = page.getByRole("button", { name: "Edit" });
        this.updateButton = page.getByRole("button", { name: "Update" });
        this.backButton = page.getByRole("button", { name: "Back" });
        this.quantityInput = page.getByLabel("Quantity")
    }

    async addItem(itemData) {
        await this.addCostButton.click();
        await this.itemNameInput.fill(itemData.itemName);
        const incButton = parseInt(itemData.incrementCount);
        for (let i = 0; i < incButton; i++) {
            await this.itemIncButton.click();
        }
        await this.itemAmountInput.fill(itemData.itemAmount);
        await this.remarksInput.fill(itemData.itemRemarks);
        await this.itemAddButton.click();
    }

    async editItem(itemData){
        await this.viewButton.nth(0).click();
        await this.editButton.click();
        await this.itemNameInput.fill("");
        await this.itemNameInput.fill(itemData.itemName);
        await this.quantityInput.fill("");
        await this.quantityInput.fill(itemData.incrementCount);
        await this.itemAmountInput.fill("");
        await this.itemAmountInput.fill(itemData.itemAmount);
        await this.remarksInput.fill("");
        await this.remarksInput.fill(itemData.itemRemarks);
        await this.updateButton.click();
        await this.backButton.click();
    }

    async deleteItem() {
        await this.viewButton.nth(0).click();
        this.page.once('dialog', (dialog) => {
            dialog.accept();
        });
        await this.deleteButton.click();
    }
}

export default addCostPage;