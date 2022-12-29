import MongoDBEditorComponent from './MongoDBEditorComponent';

import {
    ResourceConfig,
    ResourceMetadata,
    ResourceRole,
    ResourceType
} from '@blockware/ui-web-types';

const definition = require('../../blockware.yml');
const packageJson = require('../../package.json');

const config: ResourceConfig<ResourceMetadata> = {
    kind: definition.metadata.name,
    version: packageJson.version,
    title: definition.metadata.title,
    role: ResourceRole.CONSUMES,
    type: ResourceType.DATABASE,
    componentType: MongoDBEditorComponent
};

export default config;