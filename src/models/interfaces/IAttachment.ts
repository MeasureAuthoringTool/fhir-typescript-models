/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IElement,
  IMimeType,
  IPrimitiveBase64Binary,
  IPrimitiveCode,
  IPrimitiveDateTime,
  IPrimitiveString,
  IPrimitiveUnsignedInt,
  IPrimitiveUrl,
} from "../internal";

export interface IAttachment extends IElement {
  contentType?: IMimeType;
  _contentType?: IElement;

  language?: IPrimitiveCode;
  _language?: IElement;

  data?: IPrimitiveBase64Binary;
  _data?: IElement;

  url?: IPrimitiveUrl;
  _url?: IElement;

  size?: IPrimitiveUnsignedInt;
  _size?: IElement;

  hash?: IPrimitiveBase64Binary;
  _hash?: IElement;

  title?: IPrimitiveString;
  _title?: IElement;

  creation?: IPrimitiveDateTime;
  _creation?: IElement;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
