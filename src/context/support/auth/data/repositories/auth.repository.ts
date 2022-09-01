
import IOAuth from "../../../../../shared/persistence/data/data_sources/external/i_oauth";

class AuthRepository {
  private oauth: IOAuth;

  constructor(oauthProvider: IOAuth) { 
    this.oauth = oauthProvider;
  }

  async generateToken(code: any): Promise<string> {
    console.info("🔔 AuthRepository.generateToken::Code", code);
    return this.oauth.generateAccessToken(code);
  }

}

export { AuthRepository };

