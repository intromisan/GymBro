using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;
using api.Data;
using api.DTOs;
using api.Interfaces;
using api.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace api.Controllers
{
  public class AccountController : BaseApiController
  {
    private readonly DataContext _context;
    private readonly ITokenService _tokenService;
    public AccountController(DataContext context, ITokenService tokenService)
    {
      _tokenService = tokenService;
      _context = context;
    }

    [HttpPost("register")] // POST: api/account/register
    public async Task<ActionResult<UserDto>> Register(RegisterDto registerDto)
    {

      if (await UserExists(registerDto.Email))
        return BadRequest("Email is taken");

      using var hmac = new HMACSHA512();

      var user = new User
      {
        Email = registerDto.Email,
        Name = registerDto.Name,
        PasswordHash = hmac.ComputeHash(Encoding.UTF8.GetBytes(registerDto.Password)),
        PasswordSalt = hmac.Key
      };

      _context.Users.Add(user);
      await _context.SaveChangesAsync();

      return new UserDto
      {
        Email = user.Email,
        Token = _tokenService.CreateToken(user)
      };
    }

    [HttpPost("login")]
    public async Task<ActionResult<UserDto>> Login(LoginDto loginDto)
    {
      var user = await _context.Users.SingleOrDefaultAsync(x => x.Email == loginDto.Email);

      if (user == null) return Unauthorized("Invalid email or password");

      using var hmac = new HMACSHA512(user.PasswordSalt);

      var computedHash = hmac.ComputeHash(Encoding.UTF8.GetBytes(loginDto.Password));

      for (int i = 0; i < computedHash.Length; i++)
      {
        if (computedHash[i] != user.PasswordHash[i])
          return Unauthorized("Invalid email or password");
      }

      return new UserDto
      {
        Email = user.Email,
        Token = _tokenService.CreateToken(user)
      };
    }

    private async Task<bool> UserExists(string email)
    {
      return await _context.Users.AnyAsync(x => x.Email == email.ToLower());
    }
  }
}