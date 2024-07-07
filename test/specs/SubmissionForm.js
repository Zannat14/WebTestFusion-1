import { expect } from '@wdio/globals'
import FormPage from '../pageobjects/formPage.js'
import CheckBox from '../pageobjects/checkBox.js'
import RadioButton from '../pageobjects/radioButton.js'
import UploadFile from '../pageobjects/fileUpload.js'
import DropDown from '../pageobjects/dropdown.js'
import MultipleItem from '../pageobjects/multipleValues.js'

describe('Submit HTML Form', () => {
    it('should upload a file and submit form with it', async () => {
        await FormPage.goToFormPage()
        await browser.pause(3000)
        
        await FormPage.enterInput('Zannat','cannnotreveal!', 'Upload file')
        await browser.pause(3000)

        await UploadFile.fileUploadPath();
        await browser.pause(3000)

        await FormPage.submit()
        await browser.pause(2000)
    })
    
    it('should submit the form with a checkbox', async () => {
        await FormPage.goToFormPage()
        await browser.pause(3000)
        await FormPage.enterInput('Zannat', 'cannnotreveal!', 'Test check box' )

        await CheckBox.unselectCheckbox(3)
        await browser.pause(3000)
        await CheckBox.selectCheckbox(1)
        await browser.pause(3000)
  
        const isChecked = await (await CheckBox.getCheckbox(1)).isSelected()
        console.log("The checkbox is selected:", isChecked)
        expect(isChecked).toBe(true)
        await browser.pause(3000)
       
        await FormPage.submit()
        await browser.pause(2000)

    })

    it('should count the radio buttons and submit form with it', async () => {
        await FormPage.goToFormPage()
        await browser.pause(3000)

        await FormPage.enterInput('Zannat','cannnotreveal!', 'Test radio buttons')
        await browser.pause(3000)

        // const numberOfRadioButtons = await RadioButton.getNumberOfRadioButtons()
        // await expect(numberOfRadioButtons).toEqual(3)
        // console.log("Number of buttons", numberOfRadioButtons)

        await RadioButton.clickRadioButton()
        await browser.pause(2000)

        await FormPage.submit()
        await browser.pause(2000)
    })

    it('should select multiple values and submit form with it', async () => {
        await FormPage.goToFormPage()
        await browser.pause(3000)
        
        await FormPage.enterInput('Zannat','cannnotreveal!', 'Select multiple values')
        await browser.pause(3000)

        await MultipleItem.countMultipleValues()

        const selectOptions = await MultipleItem.getSelectedOptions()
        expect(selectOptions).toContain("Selection Item 4")
        console.log("Selected Option", selectOptions)

        const valueToSelect = ["Selection Item 1", "Selection Item 2"]
        await MultipleItem.selectMultipleOptions(valueToSelect)
        console.log("Selected optins", await MultipleItem.getSelectedOptions())

        await FormPage.submit()
        await browser.pause(2000)
    })

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