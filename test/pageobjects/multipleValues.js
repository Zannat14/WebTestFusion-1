class MultipleItem{

    get multipleValuesElem(){
        return $$("//select[@name='multipleselect[]']/option")
    }

    async countMultipleValues(){
        const options = await this.multipleValuesElem.length
        console.log ("Items count", options)
        expect(options).toBe(4)
    }

    async getSelectedOptions(){
        const options = await this.multipleValuesElem
        let selectedText = []
        for(let option of options){
            if(await option.isSelected()){
                selectedText.push(await option.getText())
            }
        }
        return selectedText;    
    }

    async selectMultipleOptions(optionValues){
        const options = await this.multipleValuesElem
        for(let option of options){
            if(optionValues.includes(await option.getText())){
                await option.click();
            }
        }
    }
}

export default new MultipleItem();