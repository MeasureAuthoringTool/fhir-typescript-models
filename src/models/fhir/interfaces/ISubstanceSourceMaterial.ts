/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  ICodeableConcept,
  IDomainResource,
  IElement,
  IIdentifier,
  IPrimitiveString,
  ISubstanceSourceMaterialFractionDescription,
  ISubstanceSourceMaterialOrganism,
  ISubstanceSourceMaterialPartDescription,
} from "../internal";

export interface ISubstanceSourceMaterial extends IDomainResource {
  sourceMaterialClass?: ICodeableConcept;

  sourceMaterialType?: ICodeableConcept;

  sourceMaterialState?: ICodeableConcept;

  organismId?: IIdentifier;

  organismName?: IPrimitiveString;
  _organismName?: IElement;

  parentSubstanceId?: Array<IIdentifier>;

  parentSubstanceName?: Array<IPrimitiveString>;
  _parentSubstanceName?: Array<IElement | null>;

  countryOfOrigin?: Array<ICodeableConcept>;

  geographicalLocation?: Array<IPrimitiveString>;
  _geographicalLocation?: Array<IElement | null>;

  developmentStage?: ICodeableConcept;

  fractionDescription?: Array<ISubstanceSourceMaterialFractionDescription>;

  organism?: ISubstanceSourceMaterialOrganism;

  partDescription?: Array<ISubstanceSourceMaterialPartDescription>;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
