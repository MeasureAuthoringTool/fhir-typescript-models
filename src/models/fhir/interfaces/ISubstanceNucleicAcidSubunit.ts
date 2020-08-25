/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IAttachment,
  IBackboneElement,
  ICodeableConcept,
  IElement,
  IPrimitiveInteger,
  IPrimitiveString,
  ISubstanceNucleicAcidSubunitLinkage,
  ISubstanceNucleicAcidSubunitSugar,
} from "../internal";

export interface ISubstanceNucleicAcidSubunit extends IBackboneElement {
  subunit?: IPrimitiveInteger;
  _subunit?: IElement;

  sequence?: IPrimitiveString;
  _sequence?: IElement;

  length?: IPrimitiveInteger;
  _length?: IElement;

  sequenceAttachment?: IAttachment;

  fivePrime?: ICodeableConcept;

  threePrime?: ICodeableConcept;

  linkage?: Array<ISubstanceNucleicAcidSubunitLinkage>;

  sugar?: Array<ISubstanceNucleicAcidSubunitSugar>;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
