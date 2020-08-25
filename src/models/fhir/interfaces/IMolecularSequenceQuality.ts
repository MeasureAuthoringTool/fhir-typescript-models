/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  ICodeableConcept,
  IElement,
  IMolecularSequenceQualityRoc,
  IPrimitiveDecimal,
  IPrimitiveInteger,
  IQualityType,
  IQuantity,
} from "../internal";

export interface IMolecularSequenceQuality extends IBackboneElement {
  type?: IQualityType;
  _type?: IElement;

  standardSequence?: ICodeableConcept;

  start?: IPrimitiveInteger;
  _start?: IElement;

  end?: IPrimitiveInteger;
  _end?: IElement;

  score?: IQuantity;

  method?: ICodeableConcept;

  truthTP?: IPrimitiveDecimal;
  _truthTP?: IElement;

  queryTP?: IPrimitiveDecimal;
  _queryTP?: IElement;

  truthFN?: IPrimitiveDecimal;
  _truthFN?: IElement;

  queryFP?: IPrimitiveDecimal;
  _queryFP?: IElement;

  gtFP?: IPrimitiveDecimal;
  _gtFP?: IElement;

  precision?: IPrimitiveDecimal;
  _precision?: IElement;

  recall?: IPrimitiveDecimal;
  _recall?: IElement;

  fScore?: IPrimitiveDecimal;
  _fScore?: IElement;

  roc?: IMolecularSequenceQualityRoc;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
