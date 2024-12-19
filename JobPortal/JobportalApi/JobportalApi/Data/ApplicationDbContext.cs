using JobportalApi.Model;
using Microsoft.EntityFrameworkCore;

namespace JobportalApi.Data
{
    public class ApplicationDbContext:DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {

        }
        public DbSet<Signup> signups { get; set; }
        public DbSet<Registeration> registerations { get; set; }
        public DbSet<Registeremp> registeremps { get; set; }

    }
}
