/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  ICapabilityStatementRestResourceInteraction,
  ICapabilityStatementRestResourceOperation,
  ICapabilityStatementRestResourceSearchParam,
  IConditionalDeleteStatus,
  IConditionalReadStatus,
  IElement,
  IPrimitiveBoolean,
  IPrimitiveCanonical,
  IPrimitiveMarkdown,
  IPrimitiveString,
  IReferenceHandlingPolicy,
  IResourceType,
  IResourceVersionPolicy,
} from "../internal";

export interface ICapabilityStatementRestResource extends IBackboneElement {
  type?: IResourceType;
  _type?: IElement;

  profile?: IPrimitiveCanonical;
  _profile?: IElement;

  supportedProfile?: Array<IPrimitiveCanonical>;
  _supportedProfile?: Array<IElement | null>;

  documentation?: IPrimitiveMarkdown;
  _documentation?: IElement;

  interaction?: Array<ICapabilityStatementRestResourceInteraction>;

  versioning?: IResourceVersionPolicy;
  _versioning?: IElement;

  readHistory?: IPrimitiveBoolean;
  _readHistory?: IElement;

  updateCreate?: IPrimitiveBoolean;
  _updateCreate?: IElement;

  conditionalCreate?: IPrimitiveBoolean;
  _conditionalCreate?: IElement;

  conditionalRead?: IConditionalReadStatus;
  _conditionalRead?: IElement;

  conditionalUpdate?: IPrimitiveBoolean;
  _conditionalUpdate?: IElement;

  conditionalDelete?: IConditionalDeleteStatus;
  _conditionalDelete?: IElement;

  referencePolicy?: Array<IReferenceHandlingPolicy>;
  _referencePolicy?: Array<IElement | null>;

  searchInclude?: Array<IPrimitiveString>;
  _searchInclude?: Array<IElement | null>;

  searchRevInclude?: Array<IPrimitiveString>;
  _searchRevInclude?: Array<IElement | null>;

  searchParam?: Array<ICapabilityStatementRestResourceSearchParam>;

  operation?: Array<ICapabilityStatementRestResourceOperation>;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
