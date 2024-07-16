import { http, HttpResponse, RequestHandler } from "msw";
import { type SetupWorker, setupWorker } from "msw/browser";
import { TableResponse } from "../components/Table";
import { fakerRU as faker } from "@faker-js/faker";

export const tableMOck: TableResponse[] = [
  {
    id: crypto.randomUUID(),
    label: faker.company.name(),
    text: faker.hacker.phrase(),
  },
  {
    id: crypto.randomUUID(),
    label: faker.company.name(),
    text: faker.hacker.phrase(),
  },
  {
    id: crypto.randomUUID(),
    label: faker.company.name(),
    text: faker.hacker.phrase(),
  },
];

export const handlers: RequestHandler[] = [
  http.get(`*table*`, () => {
    return HttpResponse.json(tableMOck);
  }),
];

export const worker: SetupWorker = setupWorker();
