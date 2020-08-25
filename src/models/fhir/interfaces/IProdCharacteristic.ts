/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IAttachment,
  IBackboneElement,
  ICodeableConcept,
  IElement,
  IPrimitiveString,
  IQuantity,
} from "../internal";

export interface IProdCharacteristic extends IBackboneElement {
  height?: IQuantity;

  width?: IQuantity;

  depth?: IQuantity;

  weight?: IQuantity;

  nominalVolume?: IQuantity;

  externalDiameter?: IQuantity;

  shape?: IPrimitiveString;
  _shape?: IElement;

  color?: Array<IPrimitiveString>;
  _color?: Array<IElement | null>;

  imprint?: Array<IPrimitiveString>;
  _imprint?: Array<IElement | null>;

  image?: Array<IAttachment>;

  scoring?: ICodeableConcept;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
