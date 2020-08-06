/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  IElement,
  IImplementationGuideManifestPage,
  IImplementationGuideManifestResource,
  IPrimitiveString,
  IPrimitiveUrl,
} from "../internal";

export interface IImplementationGuideManifest extends IBackboneElement {
  rendering?: IPrimitiveUrl;
  _rendering?: IElement;

  resource?: Array<IImplementationGuideManifestResource>;

  page?: Array<IImplementationGuideManifestPage>;

  image?: Array<IPrimitiveString>;
  _image?: Array<IElement | null>;

  other?: Array<IPrimitiveString>;
  _other?: Array<IElement | null>;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
