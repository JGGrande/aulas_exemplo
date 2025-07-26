import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
  vus: 50,
  duration: '60s',
};

export default function () {
  const url = 'https://aulas-exemplo.infra.bytework.app.br/';
  http.get(url, { timeout: '4s' });

  // sleep(1);
}
