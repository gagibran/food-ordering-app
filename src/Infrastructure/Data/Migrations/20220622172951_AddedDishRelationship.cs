using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Infrastructure.Data.Migrations
{
    public partial class AddedDishRelationship : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<Guid>(
                name: "CheckoutCustomerId",
                table: "Dishes",
                type: "uuid",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Dishes_CheckoutCustomerId",
                table: "Dishes",
                column: "CheckoutCustomerId");

            migrationBuilder.AddForeignKey(
                name: "FK_Dishes_CheckoutCustomers_CheckoutCustomerId",
                table: "Dishes",
                column: "CheckoutCustomerId",
                principalTable: "CheckoutCustomers",
                principalColumn: "Id");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Dishes_CheckoutCustomers_CheckoutCustomerId",
                table: "Dishes");

            migrationBuilder.DropIndex(
                name: "IX_Dishes_CheckoutCustomerId",
                table: "Dishes");

            migrationBuilder.DropColumn(
                name: "CheckoutCustomerId",
                table: "Dishes");
        }
    }
}
