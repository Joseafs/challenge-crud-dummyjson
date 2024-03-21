import { faker } from '@faker-js/faker';
import { HttpStatusCode } from 'axios';
import MockAdapter from 'axios-mock-adapter';

import { api } from '~/services/api';
import { AxiosErrorResponse } from '~/services/api/error/types';
import { apiRouteExample } from '~/services/products';

import { mockProductResponse } from './mock';

import { getProduct } from '.';

describe('getProduct', () => {
  test('should match data when get by id', async () => {
    const mock = new MockAdapter(api);
    const id = faker.number.int(100);

    const getRouteWithId = `${apiRouteExample}/${id}`;

    mock.onGet(getRouteWithId).reply(HttpStatusCode.Ok, mockProductResponse);

    const data = await getProduct(id);

    expect(data).toMatchObject(mockProductResponse);

    mock.restore();
  });

  test('should throw RequestError', async () => {
    const errorText = faker.lorem.paragraph();
    const id = faker.number.int(100);
    const getRouteWithId = `${apiRouteExample}/${id}`;

    const mock = new MockAdapter(api);
    mock.onGet(getRouteWithId).reply(HttpStatusCode.BadRequest, { error: errorText });

    try {
      await getProduct(id);
    } catch (e) {
      expect((e as AxiosErrorResponse).status).toStrictEqual(HttpStatusCode.BadRequest);
      expect((e as AxiosErrorResponse).data.error).toStrictEqual(errorText);
    }

    mock.restore();
  });
});
