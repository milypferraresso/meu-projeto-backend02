// Importa a biblioteca Express e também o tipo Express
// O Express será utilizado para criar o servidor web
import express from "express";
import type { Express, Request, Response } from "express";

// importa a classe Player do arquivo Player.ts
/* Por que Player. ts deve ser importado com a extenção .js?
Acesse: https://notpad.org/aula1609
*/
import { Player } from "./models/Player.js"

// Cria uma aplicação Express
// A função express() devolve um objeto que representa o servidor da aplicação
const app: Express = express();

/*Middleware para permitir que o servidor aceite
requisições com corpo em formato JSON*/
app.use(express.json());

// Define a porta onde o servidor ficará disponível
// Neste caso, o servidor poderá ser acessado pela porta 8081
const PORT: number = 8081;

//Criar um novo player com nome "Kamily", 100 de vida e nível 1
const player = new Player("Kamily", 100, 1);
// Rota GET para obter informações sobre um player
/* Quando um usúario acesar a rota "/player" via GET, o servidor
irá retornar suas informações em formato JSON*/
app.get("/player", (req: Request, res: Response) => {
  res.json({
    message: "Informação do player",
    player: player,
  });
});


// Rota POST para atacar o player
/* Quando um usuario acessar a rota "/player/attack" via POST, o servidor
irá chamar o método attack() do player e retornar a mensagem resultante. */ 
app.post("/player/attack", (req: Request, res: Response) => {
  //Chamar o método attack() do player e armazenar a mensagem retornada
  const attackMessage = player.attack();
  res.json({
    message: attackMessage,
  });
});

//Rota POST para causar dano ao player
/* Quando um usuario acessar a rora "/player/damage" via POST, o servidor
irá chamar o método tackDamage() do player e retornar a mensagem resultante. */ 
app.post("/player/damage", (req: Request, res: Response) => {
  //Extrair o valor de dano do corpo da requisição
  const { damage } = req.body;
  // Chamar o método takeDamage() do player e armazenar a mensagem retornada
  const damageMessage = player.takeDamage(damage);
    res.json({
      //Retonar a mensagem de dano, a vida atual e o nível atual do player
      action: damageMessage,
      // Retonar a vida atual e o nível atual do player
      currentHealtch: player.health,
      // Retonar o nível atual do player
      currentLevel: player.level
    });
});

// Rota POST para aumentar a vida do player
app.post("/player/heal", (req: Request, res: Response) => {
    // Pega a quantidade de vida (amount) enviada pelo usuário
    const { heal } = req.body;
    // Chama o método heal() para aumentar a vida do player
    const healMessage = player.takeHeal(heal);
    // Retorna as informações em formato JSON
    res.json({
        message: healMessage,
        currentHealth: player.health,
        currentLevel: player.level
  });
});


// Inicializa o servidor utilizando a porta definida
// O método listen() faz o servidor começar a "escutar" requisições HTTP
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
  console.log("Rotas Disponiveis:");
  console.log(`GET http://localhost:${PORT}/player - Obter informações do player`);
  console.log(`POST http://localhost:${PORT}/player/attack - Atacar o player`);
  console.log(`POST http://localhost:${PORT}/player/damage - Causar dano ao player`);
    console.log(`POST http://localhost:${PORT}/player/heal - Recuperar vida do player`);
});
