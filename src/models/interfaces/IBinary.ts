/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IElement,
  IMimeType,
  IPrimitiveBase64Binary,
  IReference,
  IResource,
} from "../internal";

export interface IBinary extends IResource {
  contentType?: IMimeType;
  _contentType?: IElement;

  securityContext?: IReference;

  data?: IPrimitiveBase64Binary;
  _data?: IElement;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
