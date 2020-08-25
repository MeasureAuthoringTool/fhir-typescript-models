/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  ICodeableConcept,
  IElement,
  IPrimitiveString,
} from "../internal";

export interface ISubstanceSourceMaterialOrganismHybrid extends IBackboneElement {
  maternalOrganismId?: IPrimitiveString;
  _maternalOrganismId?: IElement;

  maternalOrganismName?: IPrimitiveString;
  _maternalOrganismName?: IElement;

  paternalOrganismId?: IPrimitiveString;
  _paternalOrganismId?: IElement;

  paternalOrganismName?: IPrimitiveString;
  _paternalOrganismName?: IElement;

  hybridType?: ICodeableConcept;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
