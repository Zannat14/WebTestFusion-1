class DropDown{

    get dropDownElement(){
        return $$('select[name="dropdown"]>option')
    }

    async countDropDownItems (){
        const count = await this.dropDownElement.length
        await expect(count).toEqual(6)
        console.log("Number of buttons =========", count)
    }

    async getSelectedOption(){
        const options = await this.dropDownElement
        let selectedText = ""
        for(let option of options){
            if(await option.isSelected()){
                selectedText = await option.getText()
                break
            }
        }
        return selectedText;
    }

    async selectOptionByIndex(){
        let select = await $('select[name="dropdown"]')
        await select.selectByIndex(4)
        browser.pause(3000)
    }
    async selectOptionByText(){
        let select = await $('select[name="dropdown"]')
        await select.selectByVisibleText("Drop Down Item 4")
        browser.pause(3000)
    }
    async selectOptionByAttribute(){
        let select = await $('select[name="dropdown"]')
        await select.selectByAttribute("value","dd2")
        browser.pause(3000)
    }
}

export default new DropDown();