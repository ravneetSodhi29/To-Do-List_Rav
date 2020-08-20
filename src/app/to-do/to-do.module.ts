import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AddComponent } from './add';
import { ListComponent } from './list';
import { ToDoComponent } from './to-do.component';
import { ToDoService } from './to-do.service';

import {MatButtonModule} from '@angular/material/button';

@NgModule({
    imports: [CommonModule, FormsModule, MatButtonModule],
    declarations: [AddComponent, ListComponent, ToDoComponent],
    providers: [ToDoService],
    exports: [AddComponent, ListComponent, ToDoComponent]
})
export class ToDoModule {

}
