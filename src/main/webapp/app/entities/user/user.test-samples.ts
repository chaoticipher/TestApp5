import { IUser } from './user.model';

export const sampleWithRequiredData: IUser = {
  id: 11287,
  login: 'eODlt',
};

export const sampleWithPartialData: IUser = {
  id: 24569,
  login: 'ky8fa',
};

export const sampleWithFullData: IUser = {
  id: 6189,
  login: 'eJ@WX',
};
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
