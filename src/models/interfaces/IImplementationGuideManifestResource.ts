/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  IElement,
  IPrimitiveBoolean,
  IPrimitiveCanonical,
  IPrimitiveUrl,
  IReference,
} from "../internal";

export interface IImplementationGuideManifestResource extends IBackboneElement {
  reference?: IReference;

  exampleBoolean?: IPrimitiveBoolean;
  _exampleBoolean?: IElement;
  
  exampleCanonical?: IPrimitiveCanonical;
  _exampleCanonical?: IElement;

  relativePath?: IPrimitiveUrl;
  _relativePath?: IElement;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
