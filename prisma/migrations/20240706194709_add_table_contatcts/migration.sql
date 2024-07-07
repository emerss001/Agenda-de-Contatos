-- CreateTable
CREATE TABLE "Contatct" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "surname" TEXT NOT NULL,
    "telephone" TEXT NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "Contatct_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Contatct_telephone_key" ON "Contatct"("telephone");

-- CreateIndex
CREATE UNIQUE INDEX "Contatct_email_key" ON "Contatct"("email");
