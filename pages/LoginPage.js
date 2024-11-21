class LoginPage{

    constructor(page){
        this.page = page;
        this.emailInput = page.getByLabel("Email *")
        this.passwordInput = page.getByLabel("Password *")
        this.loginButton = page.getByRole("button",{name:"LOGIN"});
        this.accountButton = page.getByLabel("account of current user");
        this.profileButton = page.getByRole('menuitem', { name: 'Profile' });
        this.logoutButton = page.getByRole('menuitem', { name: 'Logout' });
    }

    async loginPage(loginData){
        await this.emailInput.fill(loginData.email);
        await this.passwordInput.fill(loginData.password);
        await this.loginButton.click();
    }

    async logoutPage(){
        await this.accountButton.click();
        await this.logoutButton.click();
    }
}

export default LoginPage;