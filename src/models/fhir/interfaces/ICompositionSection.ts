/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  ICodeableConcept,
  IElement,
  INarrative,
  IPrimitiveString,
  IReference,
  ISectionMode,
} from "../internal";

export interface ICompositionSection extends IBackboneElement {
  title?: IPrimitiveString;
  _title?: IElement;

  code?: ICodeableConcept;

  author?: Array<IReference>;

  focus?: IReference;

  text?: INarrative;

  mode?: ISectionMode;
  _mode?: IElement;

  orderedBy?: ICodeableConcept;

  entry?: Array<IReference>;

  emptyReason?: ICodeableConcept;

  section?: Array<ICompositionSection>;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
