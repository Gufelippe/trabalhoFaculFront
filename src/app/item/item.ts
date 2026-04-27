import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Tarefa } from "../tarefa";

@Component({
  selector: 'app-item',
  standalone: false,
  templateUrl: './item.html',
  styleUrl: './item.css',
})
export class Item {
  emEdicao = false;

  @Input() tarefa: Tarefa = new Tarefa("", false);
  @Output() removeTarefa = new EventEmitter<void>();
  @Output() atualizaTarefa = new EventEmitter<Tarefa>();

  salvarEdicao(novoNome: string) {
    this.tarefa.descricao = novoNome;
    this.emEdicao = false;
    this.atualizaTarefa.emit(this.tarefa);
  }

  toggleStatus() {
    this.tarefa.statusRealizada = !this.tarefa.statusRealizada;
    this.atualizaTarefa.emit(this.tarefa);
  }
}
