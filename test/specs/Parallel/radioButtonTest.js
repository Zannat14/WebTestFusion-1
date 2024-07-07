import FormPage from '../../pageobjects/formPage.js'
import RadioButton from '../../pageobjects/radioButton.js'

describe('Submit HTML Form', () => {
    it.only('should count the radio buttons and submit form with it', async () => {
        await FormPage.goToFormPage()
        await browser.pause(3000)

        await FormPage.enterInput('Zannat','cannnotreveal!', 'Test radio buttons')
        await browser.pause(3000)

        const numberOfRadioButtons = await RadioButton.getNumberOfRadioButtons()
        await expect(numberOfRadioButtons).toEqual(3)
        console.log("Number of buttons", numberOfRadioButtons)

        await RadioButton.clickRadioButton()
        await browser.pause(2000)

        await FormPage.submit()
        await browser.pause(2000)
    })
})