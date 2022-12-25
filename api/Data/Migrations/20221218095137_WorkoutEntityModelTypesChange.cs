using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace api.Data.Migrations
{
  /// <inheritdoc />
  public partial class WorkoutEntityModelTypesChange : Migration
  {
    /// <inheritdoc />
    protected override void Up(MigrationBuilder migrationBuilder)
    {
      migrationBuilder.AlterColumn<int>(
          name: "Weight",
          table: "WorkoutExercises",
          type: "int",
          nullable: false,
          oldClrType: typeof(short),
          oldType: "smallint");

      migrationBuilder.AlterColumn<int>(
          name: "Sets",
          table: "WorkoutExercises",
          type: "int",
          nullable: false,
          oldClrType: typeof(byte),
          oldType: "tinyint");

      migrationBuilder.AlterColumn<int>(
          name: "RestSeconds",
          table: "WorkoutExercises",
          type: "int",
          nullable: false,
          oldClrType: typeof(short),
          oldType: "smallint");

      migrationBuilder.AlterColumn<int>(
          name: "Reps",
          table: "WorkoutExercises",
          type: "int",
          nullable: false,
          oldClrType: typeof(byte),
          oldType: "tinyint");
    }

    /// <inheritdoc />
    protected override void Down(MigrationBuilder migrationBuilder)
    {
      migrationBuilder.AddColumn<int>(
          name: "WeightInt",
          table: "WorkoutExercises",
          type: "int",
          nullable: false
      );
      migrationBuilder.DropColumn(
          name: "Weight",
          table: "WorkoutExercises"
      );
      migrationBuilder.RenameColumn(
          name: "WeightInt",
          table: "WorkoutExercises",
          newName: "Weight"
      );

      migrationBuilder.AddColumn<int>(
          name: "SetsInt",
          table: "WorkoutExercises",
          type: "int",
          nullable: false
      );
      migrationBuilder.DropColumn(
          name: "Sets",
          table: "WorkoutExercises"
      );
      migrationBuilder.RenameColumn(
          name: "SetsInt",
          table: "WorkoutExercises",
          newName: "Sets"
      );

      migrationBuilder.AddColumn<int>(
          name: "RestSecondsInt",
          table: "WorkoutExercises",
          type: "int",
          nullable: false
      );
      migrationBuilder.DropColumn(
          name: "RestSeconds",
          table: "WorkoutExercises"
      );
      migrationBuilder.RenameColumn(
          name: "RestSecondsInt",
          table: "WorkoutExercises",
          newName: "RestSeconds"
      );

      migrationBuilder.AddColumn<int>(
          name: "RepsInt",
          table: "WorkoutExercises",
          type: "int",
          nullable: false
      );
      migrationBuilder.DropColumn(
          name: "Reps",
          table: "WorkoutExercises"
      );
      migrationBuilder.RenameColumn(
          name: "RepsInt",
          table: "WorkoutExercises",
          newName: "Reps"
      );
    }
  }
}
