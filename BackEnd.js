const data = require("./DataBase");
module.exports.login = function (username,passw) {
    if(typeof username == 'number'){
        let read = data.searchDataBase(username,passw);
        
        if(read.id == username && read.passw == passw){
            return true;
        }
        return false;
    }    
    return false;
}

module.exports.register = function (people){
    let checking = (typeof(people.id)=='number' 
    && typeof(people.name)=='string' 
    && (typeof(people.lastname)=='string')
    && (typeof(people.access)=='boolean')
    && (typeof(people.passw)=='string'));

    if(checking){
        let read = data.searchDataBase(people.id);
        if(!read.includes(people.id)){
            data.insertDataBase();
            return true;
        }  
        return false;
    }else{
        return false;
    }
}

module.exports.addEmploye = function (people) {
    if(people != null && people !='undefined'){
        let checking = (typeof(people.id)=='number' 
        && typeof(people.name)=='string' 
        && typeof(people.lastname)=='string');

        if(checking){
            let read = data.searchDataBase(people.id);
            if(people.id != read.id){
                data.insertDataBase();
                return true;
            }else{
                return false;
            }            
        }else{
            return false;
        }
    }
    return false;
}
module.exports.deleteEmploye = function (id) {
    if(id != null && id != 'undefined'){
        let read = data.searchDataBase(id);
        if(id == read.id){
            data.deleteDataBase(id);
            return true;
        }  
        return false;
    }
    return false;
    
}


module.exports.searchEmploye = function (id) {
    if(id != null && id != 'undefined'){
        let read = data.searchDataBase(id);
        if(read.id == id){        
            return "FOUND";
        }  
        return "NOT FOUND";
    }
    return "NOT FOUND";;
}


