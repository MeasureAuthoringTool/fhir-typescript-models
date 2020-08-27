/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  ICodeableConcept,
  IContactDetail,
  IDomainResource,
  IElement,
  IIdentifier,
  IPrimitiveBoolean,
  IPrimitiveDateTime,
  IPrimitiveMarkdown,
  IPrimitiveString,
  IPrimitiveUri,
  IPublicationStatus,
  IReference,
  ITestScriptDestination,
  ITestScriptFixture,
  ITestScriptMetadata,
  ITestScriptOrigin,
  ITestScriptSetup,
  ITestScriptTeardown,
  ITestScriptTest,
  ITestScriptVariable,
  IUsageContext,
} from "../internal";

export interface ITestScript extends IDomainResource {
  url?: IPrimitiveUri;
  _url?: IElement;

  identifier?: IIdentifier;

  version?: IPrimitiveString;
  _version?: IElement;

  name?: IPrimitiveString;
  _name?: IElement;

  title?: IPrimitiveString;
  _title?: IElement;

  status?: IPublicationStatus;
  _status?: IElement;

  experimental?: IPrimitiveBoolean;
  _experimental?: IElement;

  date?: IPrimitiveDateTime;
  _date?: IElement;

  publisher?: IPrimitiveString;
  _publisher?: IElement;

  contact?: Array<IContactDetail>;

  description?: IPrimitiveMarkdown;
  _description?: IElement;

  useContext?: Array<IUsageContext>;

  jurisdiction?: Array<ICodeableConcept>;

  purpose?: IPrimitiveMarkdown;
  _purpose?: IElement;

  copyright?: IPrimitiveMarkdown;
  _copyright?: IElement;

  origin?: Array<ITestScriptOrigin>;

  destination?: Array<ITestScriptDestination>;

  metadata?: ITestScriptMetadata;

  fixture?: Array<ITestScriptFixture>;

  profile?: Array<IReference>;

  variable?: Array<ITestScriptVariable>;

  setup?: ITestScriptSetup;

  test?: Array<ITestScriptTest>;

  teardown?: ITestScriptTeardown;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
