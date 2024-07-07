class ResultPage {
    get resultUsername() { 
        return $('#_valueusername')
     }
    get resultPassword() { 
        return $('#_valuepassword')
     }
    get resultComments() { 
        return $('#_valuecomments')
    }

    async goToResultPage(){
        browser.url('/styled/the_form_processor.php')
    }
    async getUsername() {
        await this.resultUsername.waitForDisplayed({ timeout: 15000 });
        return await this.resultUsername.getText();
    }

    async getPassword() {
        await this.resultPassword.waitForDisplayed({ timeout: 15000 });
        return await this.resultPassword.getText();
    }

    async getComments() {
        await this.resultComments.waitForDisplayed({ timeout: 15000 });
        return await this.resultComments.getText();
    }
}

export default new ResultPage();