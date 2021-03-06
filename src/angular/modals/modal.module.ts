import { NgModule } from "@angular/core";
import { ModalComponent } from "./modal.component";
import { ModalService } from "./modal.service";
import { CommonModule } from "@angular/common";
import { ButtonsModule } from "../buttons/buttons.module";
import { CreateDynamicComponentService } from "../utils/create-dynamic-component.service";
import { ModalButtonComponent } from "./modal-button.component";
import { ModalCloseButtonComponent } from "./modal-close-button.component";
import { SvgIconModule } from "../svg-icon/svg-icon.module";
import { FormElementsModule } from "../form-elements/form-elements.module";
import {CommonDirectiveModule} from "../utils/common-directive.module";

@NgModule({
    declarations: [
        ModalComponent,
        ModalButtonComponent,
        ModalCloseButtonComponent
    ],
    imports: [
        CommonModule,
        ButtonsModule,
        CommonDirectiveModule,
        SvgIconModule,
        FormElementsModule
    ],
    entryComponents: [
        ModalComponent,
        ModalCloseButtonComponent
    ],
    exports: [ModalButtonComponent],
    providers: [CreateDynamicComponentService, ModalService]
})
export class ModalModule {

}
