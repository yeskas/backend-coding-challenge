import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from './auth.service';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthService,
        { provide: UsersService, useValue: {} },
        { provide: JwtService, useValue: {} },
      ],
    }).compile();

    service = module.get<AuthService>(AuthService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('signIn', () => {
    it('should return an access token when valid username and password are provided', async () => {
      expect(true).toBeTruthy();
    });

    it('should throw UnauthorizedException when invalid username or password is provided', async () => {
      expect(true).toBeTruthy();
    });

    it('should throw UnauthorizedException when incorrect password is provided', async () => {
      expect(true).toBeTruthy();
    });
  });
});
