import path from "path";
import fs from "fs";

class FileOperations {

    writeContentOnDotENVfile(username: string, password: string) {
        try {
            const filePath = path.join(process.cwd(), '.env');


            if (!fs.existsSync(filePath)) {
                console.log('.env file does not exist. Creating...');
                fs.writeFileSync(filePath, 'USERNAME=\nPASSWORD=\n', 'utf-8');
            }


            const envContent = fs.readFileSync(filePath, 'utf-8');
            console.log('.env file content:', envContent);


            const updatedContent = envContent
                .replace(/USERNAME\s*=.*/, `USERNAME=${username}`)
                .replace(/PASSWORD\s*=.*/, `PASSWORD=${password}`);


            fs.writeFileSync(filePath, updatedContent, 'utf-8');
            console.log('.env file updated successfully!');
        } catch (err) {
            console.error('Error handling .env file');
        }
    }


}
export default new FileOperations;