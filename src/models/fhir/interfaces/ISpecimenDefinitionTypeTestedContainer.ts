/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  ICodeableConcept,
  IElement,
  IPrimitiveString,
  ISimpleQuantity,
  ISpecimenDefinitionTypeTestedContainerAdditive,
} from "../internal";

export interface ISpecimenDefinitionTypeTestedContainer extends IBackboneElement {
  material?: ICodeableConcept;

  type?: ICodeableConcept;

  cap?: ICodeableConcept;

  description?: IPrimitiveString;
  _description?: IElement;

  capacity?: ISimpleQuantity;

  minimumVolumeQuantity?: ISimpleQuantity;
  
  minimumVolumeString?: IPrimitiveString;
  _minimumVolumeString?: IElement;

  additive?: Array<ISpecimenDefinitionTypeTestedContainerAdditive>;

  preparation?: IPrimitiveString;
  _preparation?: IElement;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
