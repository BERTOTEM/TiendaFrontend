export  interface LoginI{
  username:string;
  password:string;
}

export interface UserI{
  username: string;
  password: string;
  enabled:string;
  roles: string[];
}
export  interface DecodedTokenI {
  exp:string;
  iat:string;
  role:[];
  sub:string;
}

