import { Action } from '@ngrx/store';

export enum CurrentConditionsActionTypes {
  CurrentConditionsLoaded = '[CurrentConditions] CurrentConditions Loaded',
  CurrentConditionsLoadFailed = '[CurrentConditions] CurrentConditions Load Failed'
}

export class CurrentConditionsLoaded implements Action {
  readonly type = CurrentConditionsActionTypes.CurrentConditionsLoaded;

  constructor(public zipCode: String, public conditions: any) {}
}

export class CurrentConditionsLoadFailed implements Action {
  readonly type = CurrentConditionsActionTypes.CurrentConditionsLoadFailed;

  constructor(public zipCode: String, public error: any) {}
}

export type CurrentConditionsActions = CurrentConditionsLoaded | CurrentConditionsLoadFailed;
