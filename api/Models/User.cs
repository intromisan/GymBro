using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace api.Models
{
  public class User : EntityBase
  {
    public string Email { get; set; }
    public string Name { get; set; }
    public byte[] PasswordHash { get; set; }
  }
}