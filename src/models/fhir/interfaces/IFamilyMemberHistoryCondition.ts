/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IAge,
  IAnnotation,
  IBackboneElement,
  ICodeableConcept,
  IElement,
  IPeriod,
  IPrimitiveBoolean,
  IPrimitiveString,
  IRange,
} from "../internal";

export interface IFamilyMemberHistoryCondition extends IBackboneElement {
  code?: ICodeableConcept;

  outcome?: ICodeableConcept;

  contributedToDeath?: IPrimitiveBoolean;
  _contributedToDeath?: IElement;

  onsetAge?: IAge;
  
  onsetRange?: IRange;
  
  onsetPeriod?: IPeriod;
  
  onsetString?: IPrimitiveString;
  _onsetString?: IElement;

  note?: Array<IAnnotation>;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
