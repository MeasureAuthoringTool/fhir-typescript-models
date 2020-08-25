/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  ICapabilityStatementRestInteraction,
  ICapabilityStatementRestResource,
  ICapabilityStatementRestResourceOperation,
  ICapabilityStatementRestResourceSearchParam,
  ICapabilityStatementRestSecurity,
  IElement,
  IPrimitiveCanonical,
  IPrimitiveMarkdown,
  IRestfulCapabilityMode,
} from "../internal";

export interface ICapabilityStatementRest extends IBackboneElement {
  mode?: IRestfulCapabilityMode;
  _mode?: IElement;

  documentation?: IPrimitiveMarkdown;
  _documentation?: IElement;

  security?: ICapabilityStatementRestSecurity;

  resource?: Array<ICapabilityStatementRestResource>;

  interaction?: Array<ICapabilityStatementRestInteraction>;

  searchParam?: Array<ICapabilityStatementRestResourceSearchParam>;

  operation?: Array<ICapabilityStatementRestResourceOperation>;

  compartment?: Array<IPrimitiveCanonical>;
  _compartment?: Array<IElement | null>;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
