import { Component, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { ToDo } from '..';

@Component({
    selector: 'todo-list',
    templateUrl: './list.component.html'
})
export class ListComponent implements OnChanges {
    @Input() items: ToDo[] = [];
    @Output() itemUpdated = new EventEmitter<ToDo>();
    @Output() itemDeleted = new EventEmitter<ToDo>();

    ngOnChanges(changes: SimpleChanges): void {
        if (changes['items'] && changes['items'].currentValue) {
            this.items = changes['items'].currentValue;
        }
    }

    updateStatus(item: ToDo): void {
        this.itemUpdated.emit(item);
    }

    deleteItem(item: ToDo): void {
        this.itemDeleted.emit(item);
    }

    isItemDisabled(item: ToDo): boolean {
        return item && item.name?.trim() ? false : true;
    }
}
