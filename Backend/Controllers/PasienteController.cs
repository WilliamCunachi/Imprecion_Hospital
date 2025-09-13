using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Backend.Data;
using Backend.Models;

namespace Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PasienteController : ControllerBase
    {
        private readonly DatosDbContext _context;

        public PasienteController(DatosDbContext context)
        {
            _context = context;
        }

        // GET: api/Pasiente
        [HttpGet]
        public async Task<ActionResult<IEnumerable<PasienteModel>>> GetPasiente()
        {
            return await _context.Pasiente.ToListAsync();
        }

        // GET: api/Pasiente/5
        [HttpGet("{id}")]
        public async Task<ActionResult<PasienteModel>> GetPasienteModel(int id)
        {
            var pasienteModel = await _context.Pasiente.FindAsync(id);

            if (pasienteModel == null)
            {
                return NotFound();
            }

            return pasienteModel;
        }

        // PUT: api/Pasiente/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutPasienteModel(int id, PasienteModel pasienteModel)
        {
            if (id != pasienteModel.Id)
            {
                return BadRequest();
            }

            _context.Entry(pasienteModel).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PasienteModelExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Pasiente
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<PasienteModel>> PostPasienteModel(PasienteModel pasienteModel)
        {
            _context.Pasiente.Add(pasienteModel);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetPasienteModel", new { id = pasienteModel.Id }, pasienteModel);
        }

        // DELETE: api/Pasiente/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePasienteModel(int id)
        {
            var pasienteModel = await _context.Pasiente.FindAsync(id);
            if (pasienteModel == null)
            {
                return NotFound();
            }

            _context.Pasiente.Remove(pasienteModel);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool PasienteModelExists(int id)
        {
            return _context.Pasiente.Any(e => e.Id == id);
        }
    }
}
