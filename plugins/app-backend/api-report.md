## API Report File for "@backstage/plugin-app-backend"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts
import { AuthService } from '@backstage/backend-plugin-api';
import { Config } from '@backstage/config';
import { ConfigSchema } from '@backstage/config-loader';
import express from 'express';
import { HttpAuthService } from '@backstage/backend-plugin-api';
import { LoggerService } from '@backstage/backend-plugin-api';
import { PluginDatabaseManager } from '@backstage/backend-common';

// @public (undocumented)
export function createRouter(options: RouterOptions): Promise<express.Router>;

// @public (undocumented)
export interface RouterOptions {
  appPackageName: string;
  // (undocumented)
  auth?: AuthService;
  // (undocumented)
  config: Config;
  database?: PluginDatabaseManager;
  disableConfigInjection?: boolean;
  // (undocumented)
  httpAuth?: HttpAuthService;
  // (undocumented)
  logger: LoggerService;
  schema?: ConfigSchema;
  staticFallbackHandler?: express.Handler;
}
```