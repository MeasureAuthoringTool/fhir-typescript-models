/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  IIdentifier,
  IReference,
} from "../internal";

export interface IDocumentManifestRelated extends IBackboneElement {
  identifier?: IIdentifier;

  ref?: IReference;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
