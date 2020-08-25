/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IElement,
  IPrimitiveCanonical,
  IPrimitiveUri,
  IReferenceVersionRules,
} from "../internal";

export interface IElementDefinitionType extends IElement {
  code?: IPrimitiveUri;
  _code?: IElement;

  targetProfile?: Array<IPrimitiveCanonical>;
  _targetProfile?: Array<IElement | null>;

  versioning?: IReferenceVersionRules;
  _versioning?: IElement;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
