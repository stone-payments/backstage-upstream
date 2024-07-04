/*
 * Copyright 2023 The Backstage Authors
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
import { TemplateExample } from '@stone-payments/plugin-scaffolder-node';
import yaml from 'yaml';

export const examples: TemplateExample[] = [
  {
    description: 'Push changes to gitlab repository with minimal changes',
    example: yaml.stringify({
      steps: [
        {
          id: 'pushChanges',
          action: 'gitlab:repo:push',
          name: 'Push changes to gitlab repository',
          input: {
            repoUrl: 'gitlab.com?repo=repo&owner=owner',
            commitMessage: 'Initial Commit',
            branchName: 'feature-branch',
          },
        },
      ],
    }),
  },
  {
    description:
      'Push changes to gitlab repository with a specific source and target path',
    example: yaml.stringify({
      steps: [
        {
          id: 'pushChanges',
          action: 'gitlab:repo:push',
          name: 'Push changes to gitlab repository',
          input: {
            repoUrl: 'gitlab.com?repo=repo&owner=owner',
            commitMessage: 'Initial Commit',
            branchName: 'feature-branch',
            sourcePath: 'src',
            targetPath: 'dest',
          },
        },
      ],
    }),
  },
  {
    description:
      'Push changes to gitlab repository with a specific commit action',
    example: yaml.stringify({
      steps: [
        {
          id: 'pushChanges',
          action: 'gitlab:repo:push',
          name: 'Push changes to gitlab repository',
          input: {
            repoUrl: 'gitlab.com?repo=repo&owner=owner',
            commitMessage: 'Initial Commit',
            branchName: 'feature-branch',
            commitAction: 'update',
          },
        },
      ],
    }),
  },
];
