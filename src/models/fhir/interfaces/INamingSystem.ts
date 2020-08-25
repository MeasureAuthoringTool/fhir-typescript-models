/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  ICodeableConcept,
  IContactDetail,
  IDomainResource,
  IElement,
  INamingSystemType,
  INamingSystemUniqueId,
  IPrimitiveDateTime,
  IPrimitiveMarkdown,
  IPrimitiveString,
  IPublicationStatus,
  IUsageContext,
} from "../internal";

export interface INamingSystem extends IDomainResource {
  name?: IPrimitiveString;
  _name?: IElement;

  status?: IPublicationStatus;
  _status?: IElement;

  kind?: INamingSystemType;
  _kind?: IElement;

  date?: IPrimitiveDateTime;
  _date?: IElement;

  publisher?: IPrimitiveString;
  _publisher?: IElement;

  contact?: Array<IContactDetail>;

  responsible?: IPrimitiveString;
  _responsible?: IElement;

  type?: ICodeableConcept;

  description?: IPrimitiveMarkdown;
  _description?: IElement;

  useContext?: Array<IUsageContext>;

  jurisdiction?: Array<ICodeableConcept>;

  usage?: IPrimitiveString;
  _usage?: IElement;

  uniqueId?: Array<INamingSystemUniqueId>;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
