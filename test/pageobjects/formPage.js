import { $ } from '@wdio/globals'
class FormPage {
    
    get inputUsername () {
        return $("input[name='username']");
    }

    get inputPassword () {
        return $("input[name='password']");
    }

    get commentText(){
        return $("textarea[name='comments']")
    }

    get uploadFile () {
        return $("input[name='filename']");
    }

    get submitBtn(){
        return $("input[value='submit']")
    }

    async goToFormPage(){
        browser.url('/styled/basic-html-form-test.html')
    }

    async enterInput (username, password, comment) {
        await this.inputUsername.setValue(username)
        await this.inputPassword.setValue(password)
        await this.commentText.setValue(comment)
        // await this.uploadFile.setValue(file)   
    }

    async submit(){
        (await this.submitBtn).scrollIntoView()
        await this.submitBtn.click()
    }

}

export default new FormPage();
