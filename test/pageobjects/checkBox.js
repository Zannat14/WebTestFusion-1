class CheckBox{

    async getCheckbox(index){
        return $(`#HTMLFormElements > table > tbody > tr:nth-child(5) > td > input[type='checkbox']:nth-of-type(${index})`);
    }

    async selectCheckbox(index){
        const checkbox = await this.getCheckbox(index)
        if(!await checkbox.isSelected()){
            await checkbox.click()
        }   
    }

    async unselectCheckbox(index){
        const checkbox = await this.getCheckbox(index)
        if(await checkbox.isSelected()){
            await checkbox.click()
        }   
    }
}

export default new CheckBox();