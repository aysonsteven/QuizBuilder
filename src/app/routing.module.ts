import { NgModule } from '@angular/core';
import { RouterModule , Routes } from '@angular/router';

// import { AuthenticationComponent } from './authentication/authentication.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormComponent } from './form/form.component';
import { ListComponent } from './list/list.component';
import { QuestionDetailComponent } from './question-detail/question-detail.component';
const routes: Routes = [
    { path: 'Dashboard', component: DashboardComponent },
    { path: 'QuestionsList', component: ListComponent },
    { path: 'CreateQuestions', component: FormComponent },
    { path: 'detail/:idx', component: QuestionDetailComponent }
]

@NgModule({
    imports: [ RouterModule.forRoot( routes )],
    exports: [ RouterModule ]
})

export class RoutingModule {}