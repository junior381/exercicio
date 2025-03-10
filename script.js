// Modelo de Smartphone
class Smartphone {
    constructor(id, modelo, marca, preco, estoque) {
        this.id = id;
        this.modelo = modelo;
        this.marca = marca;
        this.preco = preco;
        this.estoque = estoque;
    }

    // Método para verificar a disponibilidade do estoque
    verificarEstoque() {
        return this.estoque > 0;
    }

    // Método para reduzir o estoque após a venda
    realizarVenda(quantidade) {
        if (this.estoque >= quantidade) {
            this.estoque -= quantidade;
            return true;
        } else {
            return false;
        }
    }
}

// Sistema de Vendas de Smartphones
class SistemaVendas {
    constructor() {
        this.smartphones = [];
        this.totalVendas = 0;
    }

    // Adiciona um smartphone ao estoque
    adicionarSmartphone(smartphone) {
        this.smartphones.push(smartphone);
    }

    // Lista todos os smartphones disponíveis para venda
    listarSmartphones() {
        console.log("Smartphones Disponíveis:");
        this.smartphones.forEach(smartphone => {
            console.log(`ID: ${smartphone.id}, Modelo: ${smartphone.modelo}, Marca: ${smartphone.marca}, Preço: R$${smartphone.preco}, Estoque: ${smartphone.estoque}`);
        });
    }

    // Realiza a venda de um smartphone
    realizarVenda(idSmartphone, quantidade) {
        const smartphone = this.smartphones.find(s => s.id === idSmartphone);
        
        if (smartphone) {
            if (smartphone.realizarVenda(quantidade)) {
                this.totalVendas += smartphone.preco * quantidade;
                console.log(`Venda realizada com sucesso! Você comprou ${quantidade} unidades de ${smartphone.modelo}.`);
            } else {
                console.log(`Não há estoque suficiente para realizar a venda de ${quantidade} unidades.`);
            }
        } else {
            console.log("Smartphone não encontrado.");
        }
    }

    // Exibe o total de vendas
    exibirTotalVendas() {
        console.log(`Total de vendas: R$${this.totalVendas.toFixed(2)}`);
    }
}

// Criando alguns smartphones
const smartphone1 = new Smartphone(1, "Galaxy S23", "Samsung", 4999.99, 10);
const smartphone2 = new Smartphone(2, "iPhone 14", "Apple", 7999.99, 5);
const smartphone3 = new Smartphone(3, "Pixel 7", "Google", 3999.99, 8);

// Inicializando o sistema de vendas
const sistema = new SistemaVendas();

// Adicionando smartphones ao sistema
sistema.adicionarSmartphone(smartphone1);
sistema.adicionarSmartphone(smartphone2);
sistema.adicionarSmartphone(smartphone3);

// Listando os smartphones disponíveis
sistema.listarSmartphones();

// Realizando uma venda
sistema.realizarVenda(1, 3); // Comprando 3 unidades do Galaxy S23

// Exibindo o total de vendas
sistema.exibirTotalVendas();
