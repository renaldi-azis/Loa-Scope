/* eslint-disable no-console */

import { register } from 'register-service-worker';
// Temp comment

if (process.env.NODE_ENV === 'production') {
  register(`${process.env.BASE_URL}service-worker.js`, {
    ready() {
