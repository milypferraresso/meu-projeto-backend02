/*
A palavra -chave "export" é usada para exportar a classe Player, 
permitindo que ela seja importada e utilizada em outros aquivos do projeto.
A palvra- chave "class" é usada para definir uma classe em TypeScript.
*/

export class Player {
    // ATRIBUTOS DA CLASSE PLAYER
    /*A palvra-chave "public" é usada para definir propriedades 
    publicas da classe, que podem ser acessadas de fora da classe.*/
    public name: string; // O nome do player  (texto)
    public health: number; // A saúde do player (número)
    public level: number; // O nível do player (número)


    // CONSTRUTOR DA CLASSE PLAYER
    /* O construtor é um método especial que é chamado quando
    uma nova instância da classe é criada*/
    constructor(name: string, health: number = 100, level: number = 1){
        /* A palavra-chave "this" é usada para se referir à instância atual
        da classe. Ou seja: "Pegue o atributo 'health' da classe Player e 
        atribua o valor de 'health' = 100 a ele".*/
        this.name  = name; // Incializa o nome do player
        this.health = health; // Incializa a saúde do player
        this.level = level; // Incializa o nível do player
    }
    // MÉTODOS DA CLASSE PLAYER
    /*Métodos são funções que pertecem a uma classe e podem ser 
    chamadas em instâncias dessa classe. */
    // método "attack" é usada para atacar outro player, reduzindo sua saúde.
    public attack(): string{
        // Calcula o dano com base no nível do player
        const damage = this.level *10;
        /* A palavra-chave "return" é usada para retornar um valor
        de uma função ou método.*/
        return `O player ${this.name} atacou e causou ${damage} de dano!`;
    }

    /* O método "takeDamage" é usada para receber dano de outro player,
    reduzindo a saúde do player*/
    public takeDamage(damage: number): string {
        // Reduz a saúde do player com base no dano recebido
        this.health -= damage;
        // Verifica se a saúde do player caiu para 0 ou menos
        if (this.health <= 0) {
            this.health = 0; // Garante que a saúde não seja negativa
            return `O player ${this.name} foi derrotado!`;
        }
        return `O player ${this.name} recebeu ${damage}
        de dano e agora tem ${this.health} de saúde.`;
    }
    

// Método usado para aumentar a vida do player
    // O "amount" representa a quantidade de vida que será adicionada
    public takeHeal(heal: number): string {
        // Adiciona a quantidade de vida ao player
            this.health += heal;
            if (this.health > 100) {
                this.health = 100; // Garante que a sua saúde não ultrapasse os 100 pontos
                return `O player ${this.name} está com a vida 100% restaurada!`;
            }
            return `O player ${this.name} se curou e agora e agora tem ${this.health} de saúde.`
    }
}