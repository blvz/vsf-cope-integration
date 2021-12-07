import { apiClientFactory } from '@vue-storefront/core';

import type { Setttings, Endpoints } from './types';

import { getProduct } from './api/getProduct';

const axios = require('axios');

function onCreate(settings: Setttings) {
  const client = axios.create({
    baseURL: settings.api.url
  });

  return {
    config: settings,
    client
  };
}

const { createApiClient } = apiClientFactory<Setttings, Endpoints>({
  onCreate,
  api: {
    getProduct
  }
});

export {
  createApiClient
};
