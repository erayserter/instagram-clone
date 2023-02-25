export type registrationCredentials = {
  username: string;
  password: string;
  email: string;
  name: string;
};

export type loginCredentials = {
  username: string;
  password: string;
};

export type authenticationData = loginCredentials | registrationCredentials;
