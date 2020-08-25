/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  IElement,
  IPrimitiveDateTime,
  IPrimitiveString,
  IPrimitiveUri,
} from "../internal";

export interface IImmunizationEducation extends IBackboneElement {
  documentType?: IPrimitiveString;
  _documentType?: IElement;

  reference?: IPrimitiveUri;
  _reference?: IElement;

  publicationDate?: IPrimitiveDateTime;
  _publicationDate?: IElement;

  presentationDate?: IPrimitiveDateTime;
  _presentationDate?: IElement;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
