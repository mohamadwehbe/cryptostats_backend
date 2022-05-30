import { ApiProperty } from '@nestjs/swagger';
import { Length, Matches, MaxLength, MinLength } from 'class-validator';

export class AuthCredentialsDto {
  @ApiProperty({ required: true })
  @Length(3, 64, { message: 'Username must be less than 64 char' })
  username: string;
  @ApiProperty({ required: true })
  @MinLength(8, { message: 'Password must be more than 8 char' })
  @MaxLength(20, { message: 'Password must be less than 20 char' })
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'Password is too weak',
  })
  password: string;
}
