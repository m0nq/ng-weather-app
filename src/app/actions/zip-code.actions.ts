import { Action } from '@ngrx/store';

export enum ZipCodeActionTypes {
  AddZipCode = '[ZipCode] Add ZipCode',
  RemoveZipCode = '[ZipCode] Remove ZipCode'
}

export class AddZipCode implements Action {
  readonly type = ZipCodeActionTypes.AddZipCode;

  constructor(public zipCode: String) {}
}

export class RemoveZipCode implements Action {
  readonly type = ZipCodeActionTypes.RemoveZipCode;

  constructor(public zipCode: String) {}
}

export type ZipCodeActions = AddZipCode | RemoveZipCode;
