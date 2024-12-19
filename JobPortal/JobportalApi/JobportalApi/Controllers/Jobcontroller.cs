using JobportalApi.Data;
using JobportalApi.Model;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using static Microsoft.EntityFrameworkCore.DbLoggerCategory.Database;

namespace JobportalApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class Jobcontroller : ControllerBase
    {
        private readonly ApplicationDbContext _context;
        public Jobcontroller(ApplicationDbContext context)
        {
            _context = context;

        }

        [HttpGet("category/{categoryName}")]
        public async Task<ActionResult<List<Registeration>>> GetCompaniesByCategory(string categoryName)
        {
            var companies = await _context.registerations
                .Where(c => c.category == categoryName)
                .ToListAsync();

            if (companies == null || companies.Count == 0)
            {
                return NotFound();
            }

            return companies;
        }


        [HttpGet("employee")]//employee
        public async Task<ActionResult<IEnumerable<Registeremp>>> GetCompany()
        {
            return await _context.registeremps.ToListAsync();
        }

        [HttpGet("company")]//company
        public async Task<ActionResult<IEnumerable<Registeration>>> GetEmployee()
        {
            return await _context.registerations.ToListAsync();
        }


        [HttpPost("login")]
        public async Task<ActionResult<Signup>> signup(Signup signup)
         {
            // Find user by username
            var userlogin = await _context.signups.SingleOrDefaultAsync(u => u.username == signup.username);

            if (userlogin == null || signup.password != userlogin.password)
            {
                return Unauthorized("Invalid username or password.");
            }

            var role = "";

            if (userlogin.post == "Admin")
            {
                role = "Admin";
            }

            else if(userlogin.post == "Employee")
            {
                role = "Employee";
            }
            else 
            {
                role = "Comapny";
            }

            return Ok(new { message = "Login successful", role });
        }


        [HttpPost("register")]
        public async Task<ActionResult<Signup>> Register(Signup users)
        {
            if (_context.signups.Any(u => u.username == users.username))
            {
                return BadRequest("Username already exists.");
            }
            var user = new Signup
            {
                username = users.username,
                password = users.password,

                email = users.email,
                post = users.post,

            };
            _context.signups.Add(user);
            _context.SaveChanges();
            return Ok("Successfully registerd new employee");
        }


        [HttpPost("registerCompany")]
        public async Task<ActionResult<Registeration>> RegisterCompany(Registeration reg)
        {
            if (_context.registerations.Any(u => u.phoneno == reg.phoneno))
            {
                return BadRequest("Username already exists.");
            }
            var user = new Registeration
            {
                name = reg.name,
                category = reg.category,

                phoneno = reg.phoneno,
                website = reg.website,

            };
            _context.registerations.Add(user);
            _context.SaveChanges();
            return Ok("Successfully registerd new Company");
        }


        [HttpPost("registerEmployee")]
        public async Task<ActionResult<Registeremp>> RegisterEmployee(Registeremp emp)
        {
            if (_context.registeremps.Any(u => u.employeename == emp.employeename))
            {
                return BadRequest("Username already exists.");
            }
            var user = new Registeremp
            {
                employeename = emp.employeename,
                Address = emp.Address,
                email = emp.email,
                experiance = emp.experiance,
                currentjob = emp.currentjob,
                highestdegree = emp.highestdegree,
                expesal = emp.expesal,

            };
            _context.registeremps.Add(user);
            _context.SaveChanges();
            return Ok("Successfully registerd new employee");
        }


        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteProduct(int id)
        {
            var job = await _context.registerations.FindAsync(id);
            if (job == null)
            {
                return NotFound();
            }

            _context.registerations.Remove(job);
            await _context.SaveChangesAsync();

            return NoContent();
        }


        [HttpDelete("company/{id}")]
        public async Task<IActionResult> DeleteProductCompany(int id)
        {
            var job = await _context.registeremps.FindAsync(id);
            if (job == null)
            {
                return NotFound();
            }

            _context.registeremps.Remove(job);
            await _context.SaveChangesAsync();

            return NoContent();
        }


        [HttpPut("{id}")]
        public async Task<IActionResult> EditQuestion(int id, Registeration registeration)
        {
            if (id != registeration.id)
            {
                return BadRequest();
            }

            var existing = await _context.registerations.FindAsync(id);
            if (existing == null)
            {
                return NotFound();
            }

            existing.name = registeration.name;
            existing.phoneno = registeration.phoneno;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!_context.registerations.Any(e => e.id == id))
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


        // POST: api/Job/apply
        [HttpPost("apply")]
        public async Task<IActionResult> ApplyForJob([FromBody] Registeremp registeremp)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.registeremps.Add(registeremp);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetJobApplication), new { id = registeremp.id }, registeremp);
        }

        // GET: api/Job/apply/{id}
        [HttpGet("apply/{id}")]
        public async Task<ActionResult<Registeremp>> GetJobApplication(int id)
        {
            var jobApplication = await _context.registeremps.FindAsync(id);

            if (jobApplication == null)
            {
                return NotFound();
            }

            return jobApplication;
        }
    


}
}
