using System.ComponentModel.DataAnnotations;
using api.DTOs.WorkoutExercises;

namespace api.DTOs.Workout
{
  public class WorkoutDetailsDto
  {
    public Guid Id { get; set; }
    public string Name { get; set; }
    public ICollection<WorkoutExerciseDetailsDto> Exercises { get; set; }
  }
}