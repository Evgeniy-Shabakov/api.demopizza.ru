-- CreateTable
CREATE TABLE "public"."restaurant_schedules" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "monday_open_time" TEXT,
    "monday_close_time" TEXT,
    "monday_is_open" BOOLEAN NOT NULL DEFAULT true,
    "tuesday_open_time" TEXT,
    "tuesday_close_time" TEXT,
    "tuesday_is_open" BOOLEAN NOT NULL DEFAULT true,
    "wednesday_open_time" TEXT,
    "wednesday_close_time" TEXT,
    "wednesday_is_open" BOOLEAN NOT NULL DEFAULT true,
    "thursday_open_time" TEXT,
    "thursday_close_time" TEXT,
    "thursday_is_open" BOOLEAN NOT NULL DEFAULT true,
    "friday_open_time" TEXT,
    "friday_close_time" TEXT,
    "friday_is_open" BOOLEAN NOT NULL DEFAULT true,
    "saturday_open_time" TEXT,
    "saturday_close_time" TEXT,
    "saturday_is_open" BOOLEAN NOT NULL DEFAULT true,
    "sunday_open_time" TEXT,
    "sunday_close_time" TEXT,
    "sunday_is_open" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "restaurant_schedules_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "restaurant_schedules_title_key" ON "public"."restaurant_schedules"("title");
