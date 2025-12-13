-- AlterTable
ALTER TABLE "public"."cities" ALTER COLUMN "min_order_value_for_delivery_by_default" SET DATA TYPE DECIMAL(12,2),
ALTER COLUMN "delivery_price_by_default" SET DATA TYPE DECIMAL(12,2),
ALTER COLUMN "order_value_for_free_delivery_by_default" SET DATA TYPE DECIMAL(12,2);

-- AlterTable
ALTER TABLE "public"."delivery_zones" ALTER COLUMN "min_order_value_for_delivery" SET DATA TYPE DECIMAL(12,2),
ALTER COLUMN "delivery_price" SET DATA TYPE DECIMAL(12,2),
ALTER COLUMN "order_value_for_free_delivery" SET DATA TYPE DECIMAL(12,2);

-- CreateTable
CREATE TABLE "public"."products" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "category_id" INTEGER NOT NULL,
    "image_path" TEXT,
    "description_short" TEXT,
    "description_full" TEXT,
    "price_default" DECIMAL(12,2) NOT NULL,
    "position_in_category" INTEGER,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "composition" TEXT,
    "weight" INTEGER,
    "calories" INTEGER,
    "proteins" INTEGER,
    "fats" INTEGER,
    "carbohydrates" INTEGER,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "products_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "products_name_key" ON "public"."products"("name");

-- CreateIndex
CREATE INDEX "addresses_restaurantId_idx" ON "public"."addresses"("restaurantId");

-- AddForeignKey
ALTER TABLE "public"."products" ADD CONSTRAINT "products_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "public"."categories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
