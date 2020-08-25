/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  IElement,
  IPrimitiveBoolean,
  IPrimitiveMarkdown,
  ITerminologyCapabilitiesExpansionParameter,
} from "../internal";

export interface ITerminologyCapabilitiesExpansion extends IBackboneElement {
  hierarchical?: IPrimitiveBoolean;
  _hierarchical?: IElement;

  paging?: IPrimitiveBoolean;
  _paging?: IElement;

  incomplete?: IPrimitiveBoolean;
  _incomplete?: IElement;

  parameter?: Array<ITerminologyCapabilitiesExpansionParameter>;

  textFilter?: IPrimitiveMarkdown;
  _textFilter?: IElement;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
