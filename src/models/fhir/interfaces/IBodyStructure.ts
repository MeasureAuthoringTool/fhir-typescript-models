/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IAttachment,
  ICodeableConcept,
  IDomainResource,
  IElement,
  IIdentifier,
  IPrimitiveBoolean,
  IPrimitiveString,
  IReference,
} from "../internal";

export interface IBodyStructure extends IDomainResource {
  identifier?: Array<IIdentifier>;

  active?: IPrimitiveBoolean;
  _active?: IElement;

  morphology?: ICodeableConcept;

  location?: ICodeableConcept;

  locationQualifier?: Array<ICodeableConcept>;

  description?: IPrimitiveString;
  _description?: IElement;

  image?: Array<IAttachment>;

  patient?: IReference;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
