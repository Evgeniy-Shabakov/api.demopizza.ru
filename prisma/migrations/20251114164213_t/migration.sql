-- CreateTable
CREATE TABLE "public"."product_restaurant" (
    "id" SERIAL NOT NULL,
    "product_id" INTEGER NOT NULL,
    "restaurant_id" INTEGER NOT NULL,
    "is_in_stop_list" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "product_restaurant_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "product_restaurant_product_id_restaurant_id_key" ON "public"."product_restaurant"("product_id", "restaurant_id");

-- AddForeignKey
ALTER TABLE "public"."product_restaurant" ADD CONSTRAINT "product_restaurant_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "public"."products"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."product_restaurant" ADD CONSTRAINT "product_restaurant_restaurant_id_fkey" FOREIGN KEY ("restaurant_id") REFERENCES "public"."restaurants"("id") ON DELETE CASCADE ON UPDATE CASCADE;
