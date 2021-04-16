import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ErrorNotFound } from "./component/404/error-component";
import { NavBarComponent } from "./component/nav-bar/nav-bar.component";

@NgModule({
    declarations: [
        NavBarComponent,
        ErrorNotFound
    ],
    imports: [
        RouterModule.forChild([
            {
                path: '**', component: ErrorNotFound 
            }
        ])  
    ],
    exports: [
        NavBarComponent
    ]
})
export class CoreModule {

}