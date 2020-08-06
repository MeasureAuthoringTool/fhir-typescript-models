/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  ICodeableConcept,
  IDuration,
  IElement,
  IPrimitiveString,
  IRange,
} from "../internal";

export interface ISpecimenDefinitionTypeTestedHandling extends IBackboneElement {
  temperatureQualifier?: ICodeableConcept;

  temperatureRange?: IRange;

  maxDuration?: IDuration;

  instruction?: IPrimitiveString;
  _instruction?: IElement;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
