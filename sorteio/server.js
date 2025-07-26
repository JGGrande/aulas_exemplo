import 'dotenv/config';
import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

let currentRequests = 0;
const MAX_CONCURRENT = 25;

app.use((_, res, next) => {
    currentRequests++;
    console.info(`Número atual de usuários: ${currentRequests}`);

    if (currentRequests > MAX_CONCURRENT) {
        console.error(`Limite de ${MAX_CONCURRENT} usuários extrapolado!`);
        res.status(503).json({ error: 'Servidor sobrecarregado. Encerrando...' });

        return setTimeout(() => process.exit(1), 100);
    }

    res.on('close', () => {
        currentRequests--;
        console.info(`Número atual de usuários: ${currentRequests}`);
    });

    next();
});

function renderHtml(win) {
    const message = win
        ? 'Parabéns, você ganhou o prêmio!'
        : 'Não foi dessa vez. Continue tentando para ganhar o prêmio.';
    return `
    <!DOCTYPE html>
    <html lang="pt-BR">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Resultado do Prêmio</title>
      <style>
        body { font-family: Arial, sans-serif; text-align: center; padding: 2rem; background: #f0f0f0; }
        .card { background: #fff; padding: 2rem; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); display: inline-block; }
        h1 { color: #333; }
        button { margin-top: 1rem; padding: 0.5rem 1rem; border: none; border-radius: 4px; background: #007BFF; color: #fff; cursor: pointer; }
        button:hover { background: #0056b3; }
      </style>
    </head>
    <body>
      <div class="card">
        <h1>${message}</h1>
        <button onclick="window.location.href='/'">Tentar Novamente</button>
      </div>
    </body>
    </html>
  `;
}

app.get('/', async (req, res) => {
    await new Promise(resolve => setTimeout(resolve, 500));
    const win = Math.floor(Math.random() * 80) === 0;
    res.send(renderHtml(win));
});

app.get('/kill', (_, res) => {
    res.send('Encerrando o servidor...');
    setTimeout(() => process.exit(0), 100); // graceful shutdown
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
