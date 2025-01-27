import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { users } from './users.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url = `${environment.api}/users`;

  constructor(private http: HttpClient) {}

  // Método corrigido para criar usuários
  postUsers(user: users) {
    return this.http.post<users>(this.url, user);
  }

  // Método para obter usuários
  getUser() {
    return this.http.get<users[]>(this.url);
  }

  // Médoto atualizar dados 

  updateUser(user: users) {
    return this.http.put<users>(this.url, user)
  }
}
