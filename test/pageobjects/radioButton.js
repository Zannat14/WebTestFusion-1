import { $$ } from '@wdio/globals'

class RadioButton {

    get radioButtons () {
        return $$('input[name="radioval"]');
    }

    async getNumberOfRadioButtons () {
        return await (this.radioButtons).length;
    }

    async clickRadioButton() {
        await this.radioButtons.filter (async rb => {
            if (await rb.getValue() === "rd1"){
                await rb.click()
                // expect(await rb.isSelected()).toBe(true)
                expect(await rb.isSelected()).toBeChecked()
            }
        })
    }
}
export default new RadioButton();
