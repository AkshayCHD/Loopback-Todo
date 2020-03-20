import {TodoListApplication} from './application';
import {ApplicationConfig} from '@loopback/core';
import {LoggingBindings} from '@loopback/extension-logging';

export {TodoListApplication};

export async function main(options: ApplicationConfig = {}) {
  const app = new TodoListApplication(options);
  app.configure(LoggingBindings.COMPONENT).to({
    enableFluent: false, // default to true
    enableHttpAccessLog: true, // default to true
  });

  await app.boot();
  await app.start();
  const url = app.restServer.url;
  console.log(`Server is running at ${url}`);
  console.log(`Try ${url}/ping`);

  return app;
}
