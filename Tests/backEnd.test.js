const back = require("../BackEnd");
const db = require("../DataBase");

describe ('Login test',() =>{
    it('Should passed login',() =>{
        db.searchDataBase = jest.fn().mockReturnValue({id: 1, passw:"hola"}); 
        
        let check = back.login(1,"hola");
        expect(check).toEqual(true);
    });

    it('Should not passed login',() =>{
        db.searchDataBase = jest.fn().mockReturnValue({id: 1, passw:"hola"});       
        
        let check = back.login("1","hola");
        expect(check).toEqual(false);
    });
});

describe ('Register test',()=>{
    it('Should accept resgistration', () =>{
        db.searchDataBase = jest.fn().mockReturnValue([3,2]);   

        let people ={ id:1,name: "Diego", lastname:"Martinez",access:true,passw:"hola"}

        let check = back.register(people)
        expect(check).toEqual(true);
    });

    it('Should not accept resgistration because id already exist', () =>{
        db.searchDataBase = jest.fn().mockReturnValue([1,2]);   

        let people ={ id:1,passw:"hola"}

        let check = back.register(people)
        expect(check).toEqual(false);
    });

    it('Should not accept resgistration values of fields are not the correct type', () =>{
        db.searchDataBase = jest.fn().mockReturnValue([3,2]);   

        let people ={ id:"1",passw:"hola"}

        let check = back.register(people)
        expect(check).toEqual(false);
    });
});



describe ('Add employe',()=>{
    it('Should add the new employe to the database',()=>{
        let people ={ id:2,name: "Diego", lastname:"Martinez"}
               
        db.searchDataBase = jest.fn().mockReturnValue({id: 1, name: "Diego",lastname: "Martinez"});       
        
        let check = back.addEmploye(people);
        expect(check).toEqual(true);
    });

    it('Should not add the new employe to the database because of incorrect data types',()=>{
        let people ={ id:2,name: true, lastname:"Martinez"}
               
        db.searchDataBase = jest.fn().mockReturnValue({id: 1, name: "Diego",lastname: "Martinez"});       
        
        let check = back.addEmploye(people);
        expect(check).toEqual(false);
    });

    it('Should not add the new employe to the database because of incorrect data types',()=>{
        let people ={ id:1,name: "Diego", lastname:"Martinez"}
    
        db.searchDataBase = jest.fn().mockReturnValue({id: 1, name: "Diego",lastname: "Martinez"});       
        
        let check = back.addEmploye(people);
        expect(check).toEqual(false);
    });
});

describe ('Delete employe',()=>{
    it('Should remove the employe from the database',()=>{
                     
        db.searchDataBase = jest.fn().mockReturnValue({id: 1, name: "Diego",lastname: "Martinez"});       
        
        let check = back.deleteEmploye(1);
        expect(check).toEqual(true);
    });

    it('Should not remove the employe from the database',()=>{
                     
        db.searchDataBase = jest.fn().mockReturnValue({id: 1, name: "Diego",lastname: "Martinez"});       
        
        let check = back.deleteEmploye("Fernando");
        expect(check).toEqual(false);
    });

});

describe ('Search for an employe',()=>{
    it('Should find the employe in the database',()=>{
                     
        db.searchDataBase = jest.fn().mockReturnValue({id: 1, name: "Diego",lastname: "Martinez"});       
        
        let check = back.searchEmploye(1);
        expect(check).toContain('FOUND');
    });

    it('Should not find the employe in the database',()=>{
                     
        db.searchDataBase = jest.fn().mockReturnValue({id: 1, name: "Diego",lastname: "Martinez"});       
        
        let check = back.searchEmploye();
        expect(check).toContain('NOT FOUND');
    });
});