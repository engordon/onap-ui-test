export const template = `
<div (clickOutside)="closeListOptions()" class="sdc-dropdown" [attr.data-tests-id]="testId">
      <sdc-input class="sdc-dropdown__input js-sdc-dropdown--toggle-hook"
              [disabled]="disabled"
              [value]="this.filterValue"
              [required]="required"
              [size]="size"
              [label]="label"
              [isIconClickable]="true"
              [righIconName]="'caret1-down-o'"
              (click)="toggleDropdown($event)"
              (valueChange)="filterOptions(this.filterValue)"
              [placeHolder]="this.selectedOption?.label || this.selectedOption?.value || placeHolder">
      </sdc-input>
      <dropdown-results *ngIf="show" [options]="options" [isGroupDesign]="isGroupDesign" [selectedOption]="selectedOption" (onItemSelected)="selectOption($event)"></dropdown-results>
</div>
`;
