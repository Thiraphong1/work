/*
  Warnings:

  - The primary key for the `users` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `Password` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `Role` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `Status` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `UserID` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `UserName` on the `users` table. All the data in the column will be lost.
  - You are about to drop the `customers` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `orderdetail` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `orders` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `payments` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `products` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[email]` on the table `users` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `user_id` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_name` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `Users_UNIQUE` ON `users`;

-- AlterTable
ALTER TABLE `users` DROP PRIMARY KEY,
    DROP COLUMN `Password`,
    DROP COLUMN `Role`,
    DROP COLUMN `Status`,
    DROP COLUMN `UserID`,
    DROP COLUMN `UserName`,
    ADD COLUMN `email` VARCHAR(100) NULL,
    ADD COLUMN `password` VARCHAR(255) NULL,
    ADD COLUMN `user_id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD COLUMN `user_name` VARCHAR(50) NOT NULL,
    ADD PRIMARY KEY (`user_id`);

-- DropTable
DROP TABLE `customers`;

-- DropTable
DROP TABLE `orderdetail`;

-- DropTable
DROP TABLE `orders`;

-- DropTable
DROP TABLE `payments`;

-- DropTable
DROP TABLE `products`;

-- CreateIndex
CREATE UNIQUE INDEX `users_email_key` ON `users`(`email`);
