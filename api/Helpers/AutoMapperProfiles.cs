
using api.DTOs;
using api.Models;
using AutoMapper;

namespace api.Helpers
{
  public class AutoMapperProfiles : Profile
  {
    public AutoMapperProfiles()
    {
      CreateMap<User, MemberDto>();

      CreateMap<ExerciseDto, Exercise>();
    }
  }
}