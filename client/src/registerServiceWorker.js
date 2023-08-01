/* eslint-disable no-console */

import { register } from 'register-service-worker';

  register(`${process.env.BASE_URL}service-worker.js`, {
    ready() {
      console.log(
