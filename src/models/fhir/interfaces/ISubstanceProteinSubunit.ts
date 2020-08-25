/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IAttachment,
  IBackboneElement,
  IElement,
  IIdentifier,
  IPrimitiveInteger,
  IPrimitiveString,
} from "../internal";

export interface ISubstanceProteinSubunit extends IBackboneElement {
  subunit?: IPrimitiveInteger;
  _subunit?: IElement;

  sequence?: IPrimitiveString;
  _sequence?: IElement;

  length?: IPrimitiveInteger;
  _length?: IElement;

  sequenceAttachment?: IAttachment;

  nTerminalModificationId?: IIdentifier;

  nTerminalModification?: IPrimitiveString;
  _nTerminalModification?: IElement;

  cTerminalModificationId?: IIdentifier;

  cTerminalModification?: IPrimitiveString;
  _cTerminalModification?: IElement;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
