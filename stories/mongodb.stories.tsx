import React from 'react';
import '@kapeta/ui-web-components/styles/index.less';
import MongoDBEditorComponent from "../src/web/MongoDBEditorComponent";
import {Resource} from "@kapeta/schemas";
import {FormContainer} from "@kapeta/ui-web-components";

const RESOURCE_KIND = 'kapeta/resource-type-mongodb';

const MongoResource:Resource = {
  kind: RESOURCE_KIND,
  metadata: {
    name: 'MyMongoDB'
  },
  spec: {
    port: {
      type: 'mongodb'
    }
  }
};

export default {
  title: 'MongoDB'
};

export const Editor = () => {
  return <FormContainer initialValue={MongoResource}>
      <MongoDBEditorComponent />
  </FormContainer>
};
