/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IActionRelationshipType,
  IBackboneElement,
  IDuration,
  IElement,
  IPrimitiveId,
  IRange,
} from "../internal";

export interface IPlanDefinitionActionRelatedAction extends IBackboneElement {
  actionId?: IPrimitiveId;
  _actionId?: IElement;

  relationship?: IActionRelationshipType;
  _relationship?: IElement;

  offsetDuration?: IDuration;
  
  offsetRange?: IRange;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
