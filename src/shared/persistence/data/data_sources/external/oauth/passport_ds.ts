abstract class PassportDS implements IPassport {
  constructor(callBackURI:string) {
  }
  serializeUser(callback: any): void {
    throw new Error("Method serializeUser not implemented.");
  }
  deserializeUser(callback: any): void {
    throw new Error("Method deserializeUser not implemented.");
  }
  use(strategy: any): void {
    throw new Error("Method use not implemented.");
  }
}