using api.DTOs.Exercises;
using api.Models;

namespace api.DTOs.WorkoutExercises
{
  public class WorkoutExerciseDetailsDto : EntityBase
  {
    public int Reps { get; set; }
    public int Sets { get; set; }
    public int Weight { get; set; }
    public int RestSeconds { get; set; }
    public DayOfWeek Weekday { get; set; }

    public ExerciseDetailsDto Exercise { get; set; }
  }
}