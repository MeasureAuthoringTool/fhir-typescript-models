/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  IDocumentRelationshipType,
  IElement,
  IIdentifier,
  IReference,
} from "../internal";

export interface ICompositionRelatesTo extends IBackboneElement {
  code?: IDocumentRelationshipType;
  _code?: IElement;

  targetIdentifier?: IIdentifier;
  
  targetReference?: IReference;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
