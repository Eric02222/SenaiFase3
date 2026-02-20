CREATE DATABASE dourado_lanches;

CREATE TABLE `dourado_lanches`.`produto` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(45) NULL,
  `valor` DECIMAL(7,2) NULL,
  `descricao` VARCHAR(255) NULL,
  `ativo` INT NULL,
  PRIMARY KEY (`id`));


INSERT INTO `dourado_lanches`.`produto` (`nome`, `valor`, `descricao`, `ativo`) VALUES
('X-Burguer', 15.00, 'Pão, hambúrguer de carne 150g e queijo prato', 1),
('X-Salada', 18.00, 'Pão, hambúrguer, queijo prato, alface, tomate e maionese da casa', 1),
('X-Bacon', 22.50, 'Pão, hambúrguer, queijo prato, fatias de bacon crocante e maionese', 1),
('X-Tudo', 29.90, 'Pão, 2 hambúrgueres, queijo, bacon, ovo, calabresa, alface e tomate', 1),
('X-Frango', 19.00, 'Pão, filé de frango grelhado, queijo prato, alface e tomate', 1),
('Hot Dog Simples', 12.00, 'Pão de hot dog, 1 salsicha, molho, milho, batata palha e maionese', 1),
('Hot Dog Duplo', 16.50, 'Pão, 2 salsichas, molho, milho, ervilha, batata palha, catupiry', 1),
('Bauru', 14.00, 'Pão francês, presunto, queijo derretido, rodelas de tomate e orégano', 1),
('Misto Quente', 10.00, 'Pão de forma tostado, presunto e queijo mussarela', 1),
('Fritas Simples (P)', 15.00, 'Porção pequena de batatas fritas palito (300g)', 1),
('Fritas Especial (G)', 35.00, 'Porção grande de fritas com muito cheddar e bacon em cubos', 1),
('Calabresa Acebolada', 28.00, 'Porção de linguiça calabresa fatiada com cebola na chapa', 1),
('Anéis de Cebola', 20.00, 'Porção com 12 anéis de cebola empanados e fritos', 1),
('Coca-Cola Lata', 6.00, 'Refrigerante Coca-Cola 350ml', 1),
('Guaraná Lata', 6.00, 'Refrigerante Guaraná Antarctica 350ml', 1),
('Suco de Laranja', 9.00, 'Suco natural de laranja 500ml feito na hora', 1),
('Água sem Gás', 4.00, 'Garrafa de água mineral sem gás 500ml', 1),
('Água com Gás', 4.50, 'Garrafa de água mineral com gás 500ml', 1),
('Cerveja Long Neck', 12.00, 'Cerveja Heineken Long Neck 330ml', 1),
('Milkshake Morango', 16.00, 'Milkshake cremoso de morango com chantilly 500ml - FALTANDO INGREDIENTE', 0);