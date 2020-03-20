import {Injectable} from '@angular/core';
import {CommunicationService} from './communication.service';
import {ApiService} from './api.service';

@Injectable()
export class ServiceApiService extends CommunicationService {
  constructor(protected apiService: ApiService) {
    super(apiService);
  }
}
