import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);  

class UploadFile{
    
    get fileUploadElement () {
        return $('input[name="filename"]')
    }

    async fileUploadPath (){
        const filePath = path.join(__dirname, '../data/image.jpg')
        console.log('File path:', filePath);
        const remoteFilePath = await browser.uploadFile(filePath)
        console.log('Remote file path:', remoteFilePath)

        await (await this.fileUploadElement).setValue(filePath)
        // (await (this.fileUploadElement)).setValue("E:\\Assignments\\nature.jfif")
    }
}

export default new UploadFile();