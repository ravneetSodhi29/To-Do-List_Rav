import { Injectable } from "@angular/core";
import { ToDo } from "./to-do.model";

@Injectable()
export class ToDoService {
    todoItems: ToDo[] = [];

    addItem(item: ToDo): void {
        this.todoItems.push(item);
        this.refreshLocalStorage();
    }

    refreshLocalStorage(): void {
        if (localStorage.getItem('items')) {
            localStorage.removeItem('items');
        }
        localStorage.setItem('items', JSON.stringify(this.todoItems));
    }

    getItems(): ToDo[] {
        return JSON.parse(localStorage.getItem('items'));
    }

    clearItems(): void {
        localStorage.removeItem('items');
    }

    getItemId(): number {
        return this.todoItems.length;
    }

    deleteItem(item: ToDo): void {
        const index = this.todoItems.findIndex(element => element.id === item.id);
        if (index > -1) {
            this.todoItems.splice(index, 1);
            this.refreshLocalStorage();
        }
    }

    updateItem(item: ToDo): void {
        const index = this.todoItems.findIndex(element => element.id === item.id);
        if (index > -1) {
            this.todoItems[index].isCompleted = item.isCompleted;
            this.refreshLocalStorage();
        }
    }
}
