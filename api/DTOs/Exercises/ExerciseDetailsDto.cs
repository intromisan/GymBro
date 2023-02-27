namespace api.DTOs.Exercises
{
  public class ExerciseDetailsDto
  {
    public Guid Id { get; set; }
    public string Name { get; set; }
    public string Description { get; set; }
    public string ImageLink { get; set; }
    public string VideoLink { get; set; }
  }
}