/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IAssertionDirectionType,
  IAssertionOperatorType,
  IAssertionResponseTypes,
  IBackboneElement,
  IElement,
  IFHIRDefinedType,
  IMimeType,
  IPrimitiveBoolean,
  IPrimitiveId,
  IPrimitiveString,
  ITestScriptRequestMethodCode,
} from "../internal";

export interface ITestScriptSetupActionAssert extends IBackboneElement {
  label?: IPrimitiveString;
  _label?: IElement;

  description?: IPrimitiveString;
  _description?: IElement;

  direction?: IAssertionDirectionType;
  _direction?: IElement;

  compareToSourceId?: IPrimitiveString;
  _compareToSourceId?: IElement;

  compareToSourceExpression?: IPrimitiveString;
  _compareToSourceExpression?: IElement;

  compareToSourcePath?: IPrimitiveString;
  _compareToSourcePath?: IElement;

  contentType?: IMimeType;
  _contentType?: IElement;

  expression?: IPrimitiveString;
  _expression?: IElement;

  headerField?: IPrimitiveString;
  _headerField?: IElement;

  minimumId?: IPrimitiveString;
  _minimumId?: IElement;

  navigationLinks?: IPrimitiveBoolean;
  _navigationLinks?: IElement;

  operator?: IAssertionOperatorType;
  _operator?: IElement;

  path?: IPrimitiveString;
  _path?: IElement;

  requestMethod?: ITestScriptRequestMethodCode;
  _requestMethod?: IElement;

  requestURL?: IPrimitiveString;
  _requestURL?: IElement;

  resource?: IFHIRDefinedType;
  _resource?: IElement;

  response?: IAssertionResponseTypes;
  _response?: IElement;

  responseCode?: IPrimitiveString;
  _responseCode?: IElement;

  sourceId?: IPrimitiveId;
  _sourceId?: IElement;

  validateProfileId?: IPrimitiveId;
  _validateProfileId?: IElement;

  value?: IPrimitiveString;
  _value?: IElement;

  warningOnly?: IPrimitiveBoolean;
  _warningOnly?: IElement;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
