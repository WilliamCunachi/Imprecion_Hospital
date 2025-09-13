using Backend.Models;
using Microsoft.EntityFrameworkCore;

namespace Backend.Data
{
    public class DatosDbContext: DbContext

    {
        public DatosDbContext(DbContextOptions db):base(db) { 
        
        }
        public DbSet<PasienteModel> Pasiente { get; set; }
    }
}
