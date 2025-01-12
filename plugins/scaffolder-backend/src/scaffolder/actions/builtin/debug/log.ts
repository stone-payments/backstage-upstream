/*
 * Copyright 2021 The Backstage Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { readdir, stat } from 'fs-extra';
import { relative, join } from 'path';
import { createTemplateAction } from '@stone-payments/plugin-scaffolder-node';
import { examples } from './log.examples';

const id = 'debug:log';

/**
 * Writes a message into the log or lists all files in the workspace
 *
 * @remarks
 *
 * This task is useful for local development and testing of both the scaffolder
 * and scaffolder templates.
 *
 * @public
 */
export function createDebugLogAction() {
  return createTemplateAction<{ message?: string; listWorkspace?: boolean }>({
    id,
    description:
      'Writes a message into the log or lists all files in the workspace.',
    examples,
    schema: {
      input: {
        type: 'object',
        properties: {
          message: {
            title: 'Message to output.',
            type: 'string',
          },
          listWorkspace: {
            title: 'List all files in the workspace, if true.',
            type: 'boolean',
          },
          extra: {
            title: 'Extra info',
          },
        },
      },
    },
    supportsDryRun: true,
    async handler(ctx) {
      ctx.logger.info(JSON.stringify(ctx.input, null, 2));

      if (ctx.input?.message) {
        ctx.logger.info(ctx.input.message);
      }

      if (ctx.input?.listWorkspace) {
        const files = await recursiveReadDir(ctx.workspacePath);
        ctx.logger.info(
          `Workspace:\n${files
            .map(f => `  - ${relative(ctx.workspacePath, f)}`)
            .join('\n')}`,
        );
      }
    },
  });
}

export async function recursiveReadDir(dir: string): Promise<string[]> {
  const subdirs = await readdir(dir);
  const files = await Promise.all(
    subdirs.map(async subdir => {
      const res = join(dir, subdir);
      return (await stat(res)).isDirectory() ? recursiveReadDir(res) : [res];
    }),
  );
  return files.reduce((a, f) => a.concat(f), []);
}
