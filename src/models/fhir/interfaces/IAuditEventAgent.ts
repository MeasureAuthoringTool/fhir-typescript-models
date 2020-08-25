/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IAuditEventAgentNetwork,
  IBackboneElement,
  ICodeableConcept,
  ICoding,
  IElement,
  IPrimitiveBoolean,
  IPrimitiveString,
  IPrimitiveUri,
  IReference,
} from "../internal";

export interface IAuditEventAgent extends IBackboneElement {
  type?: ICodeableConcept;

  role?: Array<ICodeableConcept>;

  who?: IReference;

  altId?: IPrimitiveString;
  _altId?: IElement;

  name?: IPrimitiveString;
  _name?: IElement;

  requestor?: IPrimitiveBoolean;
  _requestor?: IElement;

  location?: IReference;

  policy?: Array<IPrimitiveUri>;
  _policy?: Array<IElement | null>;

  media?: ICoding;

  network?: IAuditEventAgentNetwork;

  purposeOfUse?: Array<ICodeableConcept>;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
