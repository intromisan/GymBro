using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace api.DTOs.Workouts
{
  public class CreateWorkoutDto
  {
    [Required(ErrorMessage = "Name is required")]
    public string Name { get; set; }
  }
}