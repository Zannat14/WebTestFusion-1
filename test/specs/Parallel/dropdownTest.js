import FormPage from '../../pageobjects/formPage.js'
import DropDown from '../../pageobjects/dropdown.js'

describe('Submit HTML Form', () => {
    it('should select dropdown and submit form with it', async () => {
    await FormPage.goToFormPage()
    await browser.pause(3000)
    
    await FormPage.enterInput('Zannat','cannnotreveal!', 'Select a dropdown option')
    await browser.pause(3000)
   
    await DropDown.countDropDownItems() //count number of options

    const selectOption = await DropDown.getSelectedOption() // Get selected dropdown
    expect(selectOption).toEqual("Drop Down Item 3")

    await DropDown.selectOptionByIndex() // Select a dropdown
    await DropDown.selectOptionByText()
    await DropDown.selectOptionByAttribute()

    await FormPage.submit()
    await browser.pause(2000)
    })
})