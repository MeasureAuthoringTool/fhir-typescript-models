/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  ICoding,
  IElement,
  IFHIRDefinedType,
  IMimeType,
  IPrimitiveBoolean,
  IPrimitiveId,
  IPrimitiveInteger,
  IPrimitiveString,
  ITestScriptRequestMethodCode,
  ITestScriptSetupActionOperationRequestHeader,
} from "../internal";

export interface ITestScriptSetupActionOperation extends IBackboneElement {
  type?: ICoding;

  resource?: IFHIRDefinedType;
  _resource?: IElement;

  label?: IPrimitiveString;
  _label?: IElement;

  description?: IPrimitiveString;
  _description?: IElement;

  accept?: IMimeType;
  _accept?: IElement;

  contentType?: IMimeType;
  _contentType?: IElement;

  destination?: IPrimitiveInteger;
  _destination?: IElement;

  encodeRequestUrl?: IPrimitiveBoolean;
  _encodeRequestUrl?: IElement;

  method?: ITestScriptRequestMethodCode;
  _method?: IElement;

  origin?: IPrimitiveInteger;
  _origin?: IElement;

  params?: IPrimitiveString;
  _params?: IElement;

  requestHeader?: Array<ITestScriptSetupActionOperationRequestHeader>;

  requestId?: IPrimitiveId;
  _requestId?: IElement;

  responseId?: IPrimitiveId;
  _responseId?: IElement;

  sourceId?: IPrimitiveId;
  _sourceId?: IElement;

  targetId?: IPrimitiveId;
  _targetId?: IElement;

  url?: IPrimitiveString;
  _url?: IElement;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
