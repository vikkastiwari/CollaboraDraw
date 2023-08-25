import { BlueBoardComponent } from './components/blue-board/blue-board.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GreenBoardComponent } from './components/green-board/green-board.component';

const routes: Routes = [
  {path:'blue', component:BlueBoardComponent},
  {path:'green', component:GreenBoardComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
