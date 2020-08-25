/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IAttachment,
  IBackboneElement,
  IElement,
  IPrimitiveString,
  IReference,
} from "../internal";

export interface ICommunicationPayload extends IBackboneElement {
  contentString?: IPrimitiveString;
  _contentString?: IElement;
  
  contentAttachment?: IAttachment;
  
  contentReference?: IReference;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
