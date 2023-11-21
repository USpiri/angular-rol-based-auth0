export const environment = {
  auth0: {
    domain: 'your-app.domain',
    clientId: 'YourClientId123',
    authorizationParams: {
      audience: 'audience.param',
    },
    appUri: 'http://localhost:4200/*',
    errorPath: '/',
    httpInterceptor: {
      allowedList: ['http://localhost:4200/*'],
    },
  },
};
