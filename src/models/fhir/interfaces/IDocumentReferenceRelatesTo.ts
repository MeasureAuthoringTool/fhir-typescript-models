/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  IDocumentRelationshipType,
  IElement,
  IReference,
} from "../internal";

export interface IDocumentReferenceRelatesTo extends IBackboneElement {
  code?: IDocumentRelationshipType;
  _code?: IElement;

  target?: IReference;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
