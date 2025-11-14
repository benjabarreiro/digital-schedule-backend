import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}

  async generateToken(payload): Promise<string> {
    try {
      return this.jwtService.sign(payload);
    } catch (err) {
      console.log(err);
      throw new HttpException(
        'There was an error logging in the user',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  validateCredentials(userPassword, inputPassowrd) {
    return userPassword === inputPassowrd;
  }

  verifyToken(token: string) {
    try {
      return this.jwtService.verify(token, {
        secret: process.env.JWT_SECRET,
      });
    } catch (err) {
      throw new HttpException(
        'Unauthorized: Jwt expired',
        HttpStatus.UNAUTHORIZED,
      );
    }
  }

  getJwt(req: Request) {
    return req.headers['authorization']?.split(' ')[1] || '';
  }
}
