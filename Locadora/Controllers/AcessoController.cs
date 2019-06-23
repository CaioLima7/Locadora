using System;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using Locadora.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;

namespace Locadora.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AcessoController : Controller
    {
        private UserManager<AppUsuario> _userManager;
        private SignInManager<AppUsuario> _singInManager;
        private readonly Conf _ConfApp;

        public AcessoController(UserManager<AppUsuario> userManager, SignInManager<AppUsuario> signInManager, IOptions<Conf> ConfApp)
        {
            _userManager = userManager;
            _singInManager = signInManager;
            _ConfApp = ConfApp.Value;
        }

        [HttpPost]
        [Route("Registrar")]
        //POST : /api/AppUsuario/Registrar
        public async Task<object> PostApplicationUser(UsuarioModel model)
        {
            model.Role = "Admin";
            var AppUsuario = new AppUsuario()
            {
                UserName = model.NomeUsuario,
                Email = model.Email,
                FullName = model.NomeCompleto
            };

            try
            {
                var result = await _userManager.CreateAsync(AppUsuario, model.Senha);
                await _userManager.AddToRoleAsync(AppUsuario, model.Role); //ROLE DEVE ESTAR PREENCHIDA
                return Ok(result);
            }
            catch (Exception ex)
            {

                throw ex;
            }
        }

        [HttpPost]
        [Route("Logar")]
        //POST : /api/AppUsuario/Logar
        public async Task<IActionResult> Login(LoginModel model)
        {
            var user = await _userManager.FindByNameAsync(model.NomeUsuario);
            if (user != null && await _userManager.CheckPasswordAsync(user, model.Senha))
            {
                //Get role assigned to the user
                var role = await _userManager.GetRolesAsync(user);
                IdentityOptions _options = new IdentityOptions();

                var tokenDescriptor = new SecurityTokenDescriptor
                {
                    Subject = new ClaimsIdentity(new Claim[]
                    {
                        new Claim("UserID",user.Id.ToString()),
                        new Claim(_options.ClaimsIdentity.RoleClaimType,role.FirstOrDefault())
                    }),
                    Expires = DateTime.UtcNow.AddDays(1),
                    SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_ConfApp.JWT_Secret)), SecurityAlgorithms.HmacSha256Signature)
                };
                var tokenHandler = new JwtSecurityTokenHandler();
                var securityToken = tokenHandler.CreateToken(tokenDescriptor);
                var token = tokenHandler.WriteToken(securityToken);
                return Ok(new { token });
            }
            else
                return BadRequest(new { message = "Nome ou senha incorretos." });
        }
    }
}
