using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Data;
using api.DTOs;
using api.Models;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace api.Controllers
{
  [Authorize]
  public class UserController : BaseApiController
  {
    private readonly DataContext _context;
    private readonly IMapper _mapper;
    public UserController(DataContext context, IMapper mapper)
    {
      _mapper = mapper;
      _context = context;

    }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<MemberDto>>> GetUsers()
    {
      var users = await _context.Users.ToListAsync();

      return Ok(_mapper.Map<IEnumerable<MemberDto>>(users));
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<MemberDto>> GetUserByIdAsync(Guid id)
    {
      var user = await FindUserById(id);

      return _mapper.Map<MemberDto>(user);
    }

    private async Task<ActionResult<User>> FindUserById(Guid id)
    {
      var user = await _context.Users.FindAsync(id);

      if (user == null)
      {
        return NotFound("User does not exist");
      }

      return user;
    }

  }
}