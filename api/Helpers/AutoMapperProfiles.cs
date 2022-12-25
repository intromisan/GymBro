
using api.DTOs;
using api.DTOs.Exercises;
using api.DTOs.Workout;
using api.DTOs.WorkoutExercises;
using api.DTOs.Workouts;
using api.Models;
using AutoMapper;

namespace api.Helpers
{
  public class AutoMapperProfiles : Profile
  {
    public AutoMapperProfiles()
    {
      CreateMap<User, MemberDto>();

      CreateMap<CreateExerciseDto, Exercise>();
      CreateMap<Exercise, ExerciseDetailsDto>();

      CreateMap<Workout, WorkoutDetailsDto>()
        .ForMember(dest => dest.Exercises, opt => opt.MapFrom(src => src.Exercises));

      CreateMap<WorkoutExercise, WorkoutExerciseDetailsDto>()
        .ForMember(dest => dest.Exercise, opt => opt.MapFrom(src => src.Exercise));
      CreateMap<CreateWorkoutExerciseDto, WorkoutExercise>();

    }
  }
}