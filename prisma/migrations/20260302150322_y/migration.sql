-- CreateTable
CREATE TABLE "companies" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "brand_name" VARCHAR(255) NOT NULL,
    "tagline" VARCHAR(255),
    "logo_path" VARCHAR(1000),
    "favicon_path" VARCHAR(1000),
    "phone_for_orders" VARCHAR(30),
    "about_us" TEXT,
    "contacts" TEXT,

    CONSTRAINT "companies_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "companies_name_key" ON "companies"("name");
