import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
    console.log("Iniciando o seeding...");

    // Criando algumas pranchas de exemplo
    const pranchas = [
        {
            modelo: "Fish Retro",
            tamanho: "5'8",
            largura: "20 1/2\"",
            espessura: "2 1/2\"",
            volume: 32.5,
            material: "PU",
            condicao: "NOVA",
            preco: 2500.00
        },
        {
            modelo: "Shortboard Performance",
            tamanho: "6'0",
            largura: "19\"",
            espessura: "2 3/8\"",
            volume: 29.0,
            material: "Epóxi",
            condicao: "USADA",
            preco: 1800.50
        },
        {
            modelo: "Longboard Classic",
            tamanho: "9'2",
            largura: "22\"",
            espessura: "3\"",
            volume: 72.0,
            material: "PU",
            condicao: "NOVA",
            preco: 4200.00
        }
    ];

    for (const prancha of pranchas) {
        await prisma.prancha.create({
            data: prancha,
        });
    }

    console.log("Seeding finalizado com sucesso!");
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });