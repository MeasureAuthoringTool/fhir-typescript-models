/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  ICodeableConcept,
  IElement,
  IPrimitiveString,
  ISubstanceSourceMaterialOrganismAuthor,
  ISubstanceSourceMaterialOrganismHybrid,
  ISubstanceSourceMaterialOrganismOrganismGeneral,
} from "../internal";

export interface ISubstanceSourceMaterialOrganism extends IBackboneElement {
  family?: ICodeableConcept;

  genus?: ICodeableConcept;

  species?: ICodeableConcept;

  intraspecificType?: ICodeableConcept;

  intraspecificDescription?: IPrimitiveString;
  _intraspecificDescription?: IElement;

  author?: Array<ISubstanceSourceMaterialOrganismAuthor>;

  hybrid?: ISubstanceSourceMaterialOrganismHybrid;

  organismGeneral?: ISubstanceSourceMaterialOrganismOrganismGeneral;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
