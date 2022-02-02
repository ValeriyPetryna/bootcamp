import { NgModule } from '@angular/core';

import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatMenuModule } from '@angular/material/menu';
import { MatInputModule } from '@angular/material/input';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatBadgeModule } from '@angular/material/badge';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

const modules = [
  MatFormFieldModule,
  MatButtonModule,
  MatIconModule,
  MatProgressBarModule,
  MatSnackBarModule,
  MatSlideToggleModule,
  MatMenuModule,
  MatDialogModule,
  MatInputModule,
  MatChipsModule,
  MatSelectModule,
  MatAutocompleteModule,
  MatBadgeModule,
  MatTableModule,
  MatTabsModule,
  MatSortModule,
  MatPaginatorModule,
  MatCardModule,
  MatListModule
];

@NgModule({
  imports: modules,
  exports: modules,
})
export class MaterialModule {}
