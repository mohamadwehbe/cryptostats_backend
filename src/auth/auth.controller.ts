import { Body, Controller, Get, Logger, Post, UploadedFile, UseGuards, UseInterceptors } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiBearerAuth, ApiConsumes, ApiTags } from '@nestjs/swagger';
import { diskStorage } from 'multer';
import { User } from 'src/entities/user.entity';
import { AuthService } from './auth.service';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { FileUploadDto } from './file-upload.dto';
import { GetUser } from './get-user.decorator';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {

  private logger = new Logger('AuthController');
  constructor(private authService: AuthService) { }

  @Post('/signup')
  signUp(@Body() authCredentialsDto: AuthCredentialsDto): Promise<void> {
    return this.authService.signUp(authCredentialsDto);
  }

  @Post('/signin')
  signIn(
    @Body() authCredentialsDto: AuthCredentialsDto,
  ): Promise<{ accessToken: string }> {
    return this.authService.signIn(authCredentialsDto);
  }

  @Get('/user-data')
  @UseGuards(AuthGuard())
  @ApiBearerAuth()
  getUserData(@GetUser() user: User) {
    this.logger.verbose(
      `User "${user.username}" retrieving his data.`,
    );
    return this.authService.getUserData(user);
  }

  @Post('upload-file')
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(FileInterceptor('File'))
  uploadFile(@UploadedFile() file: any, @Body() body: FileUploadDto) {
    return {
      file: file,
      body: body
    };
  }
}
