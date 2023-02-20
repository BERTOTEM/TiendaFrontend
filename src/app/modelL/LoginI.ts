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
