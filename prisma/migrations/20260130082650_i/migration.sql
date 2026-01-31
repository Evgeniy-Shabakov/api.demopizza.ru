-- DropForeignKey
ALTER TABLE "employee_role" DROP CONSTRAINT "employee_role_employee_id_fkey";

-- DropForeignKey
ALTER TABLE "employee_role" DROP CONSTRAINT "employee_role_restaurant_id_fkey";

-- DropForeignKey
ALTER TABLE "employee_role" DROP CONSTRAINT "employee_role_role_id_fkey";

-- AddForeignKey
ALTER TABLE "employee_role" ADD CONSTRAINT "employee_role_employee_id_fkey" FOREIGN KEY ("employee_id") REFERENCES "employees"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "employee_role" ADD CONSTRAINT "employee_role_role_id_fkey" FOREIGN KEY ("role_id") REFERENCES "roles"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "employee_role" ADD CONSTRAINT "employee_role_restaurant_id_fkey" FOREIGN KEY ("restaurant_id") REFERENCES "restaurants"("id") ON DELETE CASCADE ON UPDATE CASCADE;
