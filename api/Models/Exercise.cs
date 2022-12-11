using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace api.Models
{
  public class Exercise : EntityBase
  {
    public string Name { get; set; }
    public string Description { get; set; }
    public string ImageLink { get; set; }
    public string VideoLink { get; set; }
  }
}