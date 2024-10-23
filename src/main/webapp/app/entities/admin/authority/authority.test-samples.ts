import { IAuthority, NewAuthority } from './authority.model';

export const sampleWithRequiredData: IAuthority = {
  name: 'aee9d48c-a413-4238-b65a-70cf4d23ad3b',
};

export const sampleWithPartialData: IAuthority = {
  name: '09ae02a6-75e1-4f20-9ac2-bdf6b6b3184b',
};

export const sampleWithFullData: IAuthority = {
  name: '57db94f4-2cf5-4bb0-8511-a7d46372aa14',
};

export const sampleWithNewData: NewAuthority = {
  name: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
