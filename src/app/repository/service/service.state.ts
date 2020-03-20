import { Action, Selector, State, StateContext, Store } from '@ngxs/store';

@State
export class ServiceState {
  constructor(private projectApiService: ApiService, private store: Store) {
  }
}
