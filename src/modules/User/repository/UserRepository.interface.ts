import { IRepository } from '@shared/interfaces/Repository';
import { IcreateUserDTO } from '../DTO/ICreateUserDTO';
import { IUpdateUserDTO } from '../DTO/IUpdateUserDTO';
import { User } from '../entity/User';

interface IUserRepository
  extends IRepository<User, IcreateUserDTO, IUpdateUserDTO> {
  changePassword(usu_Id: string, newPassword: string): Promise<User>;
  CountByAge(start: Date, end: Date): Promise<number>;
}

export { IUserRepository };
