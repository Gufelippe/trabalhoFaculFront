import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tarefa } from './tarefa';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {

  // Troque pela URL do seu backend no Railway/Render após o deploy
  private apiUrl = 'https://web-production-463d0.up.railway.app/api';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Tarefa[]> {
    return this.http.get<Tarefa[]>(`${this.apiUrl}/getAll`);
  }

  create(descricao: string): Observable<Tarefa> {
    return this.http.post<Tarefa>(`${this.apiUrl}/post`, {
      descricao,
      statusRealizada: false
    });
  }

  delete(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/delete/${id}`);
  }

  update(id: string, dados: Partial<Tarefa>): Observable<Tarefa> {
    return this.http.patch<Tarefa>(`${this.apiUrl}/update/${id}`, dados);
  }
}
