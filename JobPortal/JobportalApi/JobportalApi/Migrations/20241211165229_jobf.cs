using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace JobportalApi.Migrations
{
    /// <inheritdoc />
    public partial class jobf : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "registerations",
                columns: table => new
                {
                    id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    category = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    phoneno = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    website = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_registerations", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "registeremps",
                columns: table => new
                {
                    id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    employeename = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Address = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    email = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    experiance = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    currentjob = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    highestdegree = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    expesal = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_registeremps", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "signups",
                columns: table => new
                {
                    userid = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    username = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    password = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    email = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    post = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_signups", x => x.userid);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "registerations");

            migrationBuilder.DropTable(
                name: "registeremps");

            migrationBuilder.DropTable(
                name: "signups");
        }
    }
}
