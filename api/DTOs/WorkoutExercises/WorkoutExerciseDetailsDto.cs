using api.DTOs.Exercises;

namespace api.DTOs.WorkoutExercises
{
  public class WorkoutExerciseDetailsDto
  {
    public int Reps { get; set; }
    public int Sets { get; set; }
    public int Weight { get; set; }
    public int RestSeconds { get; set; }
    public DayOfWeek Weekday { get; set; }

    public ExerciseDetailsDto Exercise { get; set; }
  }
}