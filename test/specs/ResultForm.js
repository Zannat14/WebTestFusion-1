import ResultPage from '../pageobjects/resultPage.js'
import FormPage from '../pageobjects/formPage.js'

describe('Submit HTML Form', () => {
    it('should enter valid inputs and submit form with it', async () => {
        await FormPage.goToFormPage()
        await browser.pause(3000)
        
        await FormPage.enterInput('Zannat','cannnotreveal!', 'This is a test')
        await browser.pause(3000)

        await FormPage.submit()
        await browser.pause(2000)
    })


    it('should submit a form', async () => {
        const username = await ResultPage.getUsername()
        const password = await ResultPage.getPassword()
        const comments = await ResultPage.getComments()
        
        expect(username).toEqual('Zannat')
        expect(password).toEqual('cannnotreveal!')
        expect(comments).toHaveText('This is a test')
    })
})