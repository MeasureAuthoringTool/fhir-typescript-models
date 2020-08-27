/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBundleEntry,
  IBundleLink,
  IBundleType,
  IElement,
  IIdentifier,
  IPrimitiveInstant,
  IPrimitiveUnsignedInt,
  IResource,
  ISignature,
} from "../internal";

export interface IBundle extends IResource {
  identifier?: IIdentifier;

  type?: IBundleType;
  _type?: IElement;

  timestamp?: IPrimitiveInstant;
  _timestamp?: IElement;

  total?: IPrimitiveUnsignedInt;
  _total?: IElement;

  link?: Array<IBundleLink>;

  entry?: Array<IBundleEntry>;

  signature?: ISignature;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
