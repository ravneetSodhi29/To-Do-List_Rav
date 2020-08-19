import { Component, EventEmitter, Output } from '@angular/core';
import { ToDo } from '../to-do.model';
import { ToDoService } from '../to-do.service';

@Component({
    selector: 'todo-add',
    templateUrl: './add.component.html'
})
export class AddComponent {
    item: ToDo = new ToDo();
    @Output() itemAdded = new EventEmitter<ToDo>();

    constructor(private todoService: ToDoService) {
        this.item.id = this.getItemId();
    }

    add(item: ToDo): void {
        this.itemAdded.emit(item);
        this.item = new ToDo();
        this.item.id = this.getItemId();
    }

    getItemId(): number {
        return this.todoService.getItemId();
    }

    isItemDisabled(item: ToDo): boolean {
        return item && item.name?.trim() ? false : true;
    }
}


