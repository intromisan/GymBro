using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace api.DTOs.WorkoutExercises
{
  public class CreateWorkoutExerciseDto
  {
    [Required(ErrorMessage = "ExerciseId is required")]
    public Guid ExerciseId { get; set; }
    [Required(ErrorMessage = "Number of reps is required")]
    public int Reps { get; set; }
    [Required(ErrorMessage = "Number of sets is required")]
    public int Sets { get; set; }
    [Required(ErrorMessage = "Weight is required")]
    public int Weight { get; set; }
    public int RestSeconds { get; set; } = 120;
    public DayOfWeek Weekday { get; set; }
    [Required(ErrorMessage = "WorkoutId is required")]
    public Guid WorkoutId { get; set; }
  }
}