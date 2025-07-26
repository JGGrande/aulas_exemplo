exports.handler = async (event) => {
    const win = Math.floor(Math.random() * 80) === 0;
    const html = `
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
            button { margin-top: 1rem; padding: 0.5rem 1rem; border: none; border-radius: 4px; background: #28a745; color: #fff; cursor: pointer; }
            button:hover { background: #218838; }
        </style>
        </head>
        <body>
        <div class="card">
            <h1>${win ? 'Parabéns, você ganhou o prêmio!' : 'Não foi dessa vez. Continue tentando!'}</h1>
            <button onclick="window.location.href=window.location.href">Tentar Novamente</button>
        </div>
        </body>
        </html>
    `;

    return {
        statusCode: 200,
        headers: { 'Content-Type': 'text/html; charset=UTF-8' },
        body: html,
    };
};