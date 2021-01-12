class User {
    public id:string
   public username:string
   public email:string
   public roles:string
   public accessToken:string
   public tokenType:string
  
   constructor(id:string,username:string,email:string,roles:string,accessToken:string,tokenType:string){
    this.id = id;
    this.username = username;
    this.email = email;
    this.roles = roles;
    this.accessToken  = accessToken;
    this.tokenType =  tokenType;
  
    }
  }