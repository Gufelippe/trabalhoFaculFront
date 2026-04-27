import { Component, signal } from '@angular/core';
import { Tarefa } from "./tarefa";
import { TarefaService } from './tarefa.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('TODOapp');

  arrayDeTarefas: Tarefa[] = [];

  constructor(private tarefaService: TarefaService) {
    this.READ_tarefas();
  }

  CREATE_tarefa(descricaoNovaTarefa: string) {
    if (!descricaoNovaTarefa.trim()) return;

    this.tarefaService.create(descricaoNovaTarefa).subscribe({
      next: (tarefaCriada) => {
        this.arrayDeTarefas.unshift(tarefaCriada);
      },
      error: (err) => console.error('Erro ao criar tarefa:', err)
    });
  }

  READ_tarefas() {
    this.tarefaService.getAll().subscribe({
      next: (tarefas) => {
        this.arrayDeTarefas = tarefas;
      },
      error: (err) => console.error('Erro ao buscar tarefas:', err)
    });
  }

  DELETE_tarefa(tarefaAserRemovida: Tarefa) {
    if (!tarefaAserRemovida._id) return;

    this.tarefaService.delete(tarefaAserRemovida._id).subscribe({
      next: () => {
        this.arrayDeTarefas.splice(this.arrayDeTarefas.indexOf(tarefaAserRemovida), 1);
      },
      error: (err) => console.error('Erro ao remover tarefa:', err)
    });
  }

  UPDATE_tarefa(tarefa: Tarefa) {
    if (!tarefa._id) return;

    this.tarefaService.update(tarefa._id, {
      descricao: tarefa.descricao,
      statusRealizada: tarefa.statusRealizada
    }).subscribe({
      error: (err) => console.error('Erro ao atualizar tarefa:', err)
    });
  }
}
