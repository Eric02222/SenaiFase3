/*
  Warnings:

  - You are about to drop the `pranchas` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `pranchas`;

-- CreateTable
CREATE TABLE `prancha` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `modelo` VARCHAR(191) NOT NULL,
    `tamanho` VARCHAR(191) NOT NULL,
    `largura` VARCHAR(191) NULL,
    `espessura` VARCHAR(191) NULL,
    `volume` DOUBLE NULL,
    `material` VARCHAR(191) NULL,
    `condicao` VARCHAR(191) NULL DEFAULT 'NOVA',
    `preco` DECIMAL(10, 2) NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
