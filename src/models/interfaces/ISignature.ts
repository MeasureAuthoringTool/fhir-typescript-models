/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  ICoding,
  IElement,
  IMimeType,
  IPrimitiveBase64Binary,
  IPrimitiveInstant,
  IReference,
} from "../internal";

export interface ISignature extends IElement {
  type?: Array<ICoding>;

  when?: IPrimitiveInstant;
  _when?: IElement;

  who?: IReference;

  onBehalfOf?: IReference;

  targetFormat?: IMimeType;
  _targetFormat?: IElement;

  sigFormat?: IMimeType;
  _sigFormat?: IElement;

  data?: IPrimitiveBase64Binary;
  _data?: IElement;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
