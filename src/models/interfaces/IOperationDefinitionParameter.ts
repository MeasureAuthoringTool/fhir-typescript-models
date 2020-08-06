/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  IElement,
  IFHIRAllTypes,
  IOperationDefinitionParameterBinding,
  IOperationDefinitionParameterReferencedFrom,
  IOperationParameterUse,
  IPrimitiveCanonical,
  IPrimitiveCode,
  IPrimitiveInteger,
  IPrimitiveString,
  ISearchParamType,
} from "../internal";

export interface IOperationDefinitionParameter extends IBackboneElement {
  name?: IPrimitiveCode;
  _name?: IElement;

  use?: IOperationParameterUse;
  _use?: IElement;

  min?: IPrimitiveInteger;
  _min?: IElement;

  max?: IPrimitiveString;
  _max?: IElement;

  documentation?: IPrimitiveString;
  _documentation?: IElement;

  type?: IFHIRAllTypes;
  _type?: IElement;

  targetProfile?: Array<IPrimitiveCanonical>;
  _targetProfile?: Array<IElement | null>;

  searchType?: ISearchParamType;
  _searchType?: IElement;

  binding?: IOperationDefinitionParameterBinding;

  referencedFrom?: Array<IOperationDefinitionParameterReferencedFrom>;

  part?: Array<IOperationDefinitionParameter>;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
