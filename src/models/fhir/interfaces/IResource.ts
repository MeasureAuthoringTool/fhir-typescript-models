/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IElement,
  IMeta,
  IPrimitiveCode,
  IPrimitiveUri,
} from "../internal";

export interface IResource {
  id?: string;

  meta?: IMeta;

  implicitRules?: IPrimitiveUri;
  _implicitRules?: IElement;

  language?: IPrimitiveCode;
  _language?: IElement;

  resourceType?: string;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
