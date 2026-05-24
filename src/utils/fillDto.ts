import { ClassConstructor, plainToInstance } from 'class-transformer';

export function fillDto<T, V>(dto: ClassConstructor<T>, object: V): T {
  return plainToInstance(dto, object);
}
