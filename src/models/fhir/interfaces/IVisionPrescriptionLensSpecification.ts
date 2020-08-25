/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IAnnotation,
  IBackboneElement,
  ICodeableConcept,
  IElement,
  IPrimitiveDecimal,
  IPrimitiveInteger,
  IPrimitiveString,
  ISimpleQuantity,
  IVisionEyes,
  IVisionPrescriptionLensSpecificationPrism,
} from "../internal";

export interface IVisionPrescriptionLensSpecification extends IBackboneElement {
  product?: ICodeableConcept;

  eye?: IVisionEyes;
  _eye?: IElement;

  sphere?: IPrimitiveDecimal;
  _sphere?: IElement;

  cylinder?: IPrimitiveDecimal;
  _cylinder?: IElement;

  axis?: IPrimitiveInteger;
  _axis?: IElement;

  prism?: Array<IVisionPrescriptionLensSpecificationPrism>;

  add?: IPrimitiveDecimal;
  _add?: IElement;

  power?: IPrimitiveDecimal;
  _power?: IElement;

  backCurve?: IPrimitiveDecimal;
  _backCurve?: IElement;

  diameter?: IPrimitiveDecimal;
  _diameter?: IElement;

  duration?: ISimpleQuantity;

  color?: IPrimitiveString;
  _color?: IElement;

  brand?: IPrimitiveString;
  _brand?: IElement;

  note?: Array<IAnnotation>;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
