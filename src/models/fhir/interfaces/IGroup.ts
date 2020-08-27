/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  ICodeableConcept,
  IDomainResource,
  IElement,
  IGroupCharacteristic,
  IGroupMember,
  IGroupType,
  IIdentifier,
  IPrimitiveBoolean,
  IPrimitiveString,
  IPrimitiveUnsignedInt,
  IReference,
} from "../internal";

export interface IGroup extends IDomainResource {
  identifier?: Array<IIdentifier>;

  active?: IPrimitiveBoolean;
  _active?: IElement;

  type?: IGroupType;
  _type?: IElement;

  actual?: IPrimitiveBoolean;
  _actual?: IElement;

  code?: ICodeableConcept;

  name?: IPrimitiveString;
  _name?: IElement;

  quantity?: IPrimitiveUnsignedInt;
  _quantity?: IElement;

  managingEntity?: IReference;

  characteristic?: Array<IGroupCharacteristic>;

  member?: Array<IGroupMember>;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
