interface IPassport{  
  serializeUser(callback: any):void;
  deserializeUser(callback: any): void;
  use(strategy: any): void;

}