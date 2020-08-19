import { Component, OnInit } from "@angular/core";
import { ToDoService } from "./to-do.service";
import { ToDo } from "./to-do.model";

@Component({
    selector: 'app-to-do',
    templateUrl: 'to-do.component.html',
    styleUrls: ['to-do.component.scss']
})
export class ToDoComponent implements OnInit {
    items: ToDo[] = [];
    constructor(private todoService: ToDoService) { }

    ngOnInit(): void {
        this.refreshList();
    }

    addItem(item: ToDo): void {
        this.todoService.addItem(item);
        this.refreshList();
    }

    refreshList(): ToDo[] {
        return this.items = this.todoService.getItems();
    }

    clearItems(): void {
        this.todoService.clearItems();
        this.refreshList();
    }

    updateItem(item: ToDo): void {
        this.todoService.updateItem(item);
        this.refreshList();
    }

    deleteItem(item: ToDo): void {
        this.todoService.deleteItem(item);
        this.refreshList();
    }
}


