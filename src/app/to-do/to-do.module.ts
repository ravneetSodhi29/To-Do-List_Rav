import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AddComponent } from './add';
import { ListComponent } from './list';
import { ToDoComponent } from './to-do.component';
import { ToDoService } from './to-do.service';

@NgModule({
    imports: [CommonModule, FormsModule],
    declarations: [AddComponent, ListComponent, ToDoComponent],
    providers: [ToDoService],
    exports: [AddComponent, ListComponent, ToDoComponent]
})
export class ToDoModule {

}
