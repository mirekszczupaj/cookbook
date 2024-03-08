import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthResolver } from './auth.resolver';
import { LocalStrategy } from './local.strategy';
import { PassportModule } from '@nestjs/passport';
import { UsersModule } from 'src/users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    PassportModule,
    UsersModule,
    ConfigModule.forRoot(),
    JwtModule.register({
    signOptions: {expiresIn: '60s'},
    secret: process.env.SECRET
  })],
  providers: [AuthService, AuthResolver, LocalStrategy, JwtStrategy, ConfigService]
})
export class AuthModule {}
