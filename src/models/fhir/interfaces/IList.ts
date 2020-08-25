/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IAnnotation,
  ICodeableConcept,
  IDomainResource,
  IElement,
  IIdentifier,
  IListEntry,
  IListMode,
  IListStatus,
  IPrimitiveDateTime,
  IPrimitiveString,
  IReference,
} from "../internal";

export interface IList extends IDomainResource {
  identifier?: Array<IIdentifier>;

  status?: IListStatus;
  _status?: IElement;

  mode?: IListMode;
  _mode?: IElement;

  title?: IPrimitiveString;
  _title?: IElement;

  code?: ICodeableConcept;

  subject?: IReference;

  encounter?: IReference;

  date?: IPrimitiveDateTime;
  _date?: IElement;

  source?: IReference;

  orderedBy?: ICodeableConcept;

  note?: Array<IAnnotation>;

  entry?: Array<IListEntry>;

  emptyReason?: ICodeableConcept;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
