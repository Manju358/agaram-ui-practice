class Users{
  
  constructor(name){
    console.log(name);
  }
  
  
  login(a,b){
    console.log(a+b);
    
  }
}

let obj1=new Users("manju");
obj.login(5,2);

example

class Users{
  constructor(email,password){
    this.email=email;
    this.pass=password;
  }
  login(){
    if(this.email=="manjurajkumar98@gmail.com"){
   console.log("login success");
    }
     let e=this.getEmail();
    console.log(e);
  }
 
  
 
  getEmail(){
    return this.email;
  }
  
}
let obj=new Users("manjurajkumar98@gmail.com",12345);
obj.login();
let email_address=obj.getEmail();
console.log(email_address); 


// inheritance

class Parent{
    constructor(p_name){
      this.p_name = p_name;
    }
    getName(){
        console.log(this.p_name);
    }
  }
  
  
  class Child extends Parent{
    constructor(c_name,p_name){
     
  super(p_name);
        
      this.c_name = c_name;
    }
    getchildName(){
      this.getName();
      console.log(this.c_name);
    }
  }
  let childobj = new Child("manju", "chitra");
  childobj.getchildName();
  