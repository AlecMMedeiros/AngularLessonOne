import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IjEyMzQ1Njc4OTAiLCJwYXNzd29yZCI6IjEyMzQ1NiIsImlhdCI6MTUxNjIzOTAyMn0.-sBH2t1aLRRLp_rxWpKdNhkcbr-oMmwRlEsJh20-5LU"

  constructor() { }

  public isAuth(): boolean {
    return !!sessionStorage.getItem("access-token");
  }

  public login(email: string, password: string): boolean {
    if (email === "admin@admin.com" && password === "123456") {
      sessionStorage.setItem("access-token",this.accessToken)
      return true
    }
    return false;
  }

  public logout(){
    sessionStorage.clear();
  }
}
