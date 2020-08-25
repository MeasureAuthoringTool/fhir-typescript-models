/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  ICodeableConcept,
  IDomainResource,
  IElement,
  IIdentifier,
  IObservationDataType,
  IObservationDefinitionQualifiedInterval,
  IObservationDefinitionQuantitativeDetails,
  IPrimitiveBoolean,
  IPrimitiveString,
  IReference,
} from "../internal";

export interface IObservationDefinition extends IDomainResource {
  category?: Array<ICodeableConcept>;

  code?: ICodeableConcept;

  identifier?: Array<IIdentifier>;

  permittedDataType?: Array<IObservationDataType>;
  _permittedDataType?: Array<IElement | null>;

  multipleResultsAllowed?: IPrimitiveBoolean;
  _multipleResultsAllowed?: IElement;

  method?: ICodeableConcept;

  preferredReportName?: IPrimitiveString;
  _preferredReportName?: IElement;

  quantitativeDetails?: IObservationDefinitionQuantitativeDetails;

  qualifiedInterval?: Array<IObservationDefinitionQualifiedInterval>;

  validCodedValueSet?: IReference;

  normalCodedValueSet?: IReference;

  abnormalCodedValueSet?: IReference;

  criticalCodedValueSet?: IReference;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
