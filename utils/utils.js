const fs = require("fs");

const writeJsonFile = (data, filepath= "./userData.json")=>{
    let existingData = [];

    if(fs.existsSync(filepath)){
        existingData = JSON.parse(fs.readFileSync(filepath, "utf8"))
    }
    existingData.push(data);
    fs.writeFileSync(filepath, JSON.stringify(existingData, null, 2));
}

const readFromJsonFile = (filepath= "./userData.json")=>{
    if(!fs.existsSync(filepath)){
        console.log("file not found");
        return null;
    }
    const data = JSON.parse(fs.readFileSync(filepath, "utf8"));
    return data.length ? data[data.length-1]: null;

}
module.exports = {writeJsonFile,readFromJsonFile};