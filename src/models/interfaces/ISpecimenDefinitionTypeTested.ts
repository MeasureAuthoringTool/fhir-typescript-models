/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  ICodeableConcept,
  IDuration,
  IElement,
  IPrimitiveBoolean,
  IPrimitiveString,
  ISpecimenContainedPreference,
  ISpecimenDefinitionTypeTestedContainer,
  ISpecimenDefinitionTypeTestedHandling,
} from "../internal";

export interface ISpecimenDefinitionTypeTested extends IBackboneElement {
  isDerived?: IPrimitiveBoolean;
  _isDerived?: IElement;

  type?: ICodeableConcept;

  preference?: ISpecimenContainedPreference;
  _preference?: IElement;

  container?: ISpecimenDefinitionTypeTestedContainer;

  requirement?: IPrimitiveString;
  _requirement?: IElement;

  retentionTime?: IDuration;

  rejectionCriterion?: Array<ICodeableConcept>;

  handling?: Array<ISpecimenDefinitionTypeTestedHandling>;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
