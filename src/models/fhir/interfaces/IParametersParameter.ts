/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  AnyResource,
  IAddress,
  IAge,
  IAnnotation,
  IAttachment,
  IBackboneElement,
  ICodeableConcept,
  ICoding,
  IContactDetail,
  IContactPoint,
  IContributor,
  ICount,
  IDataRequirement,
  IDistance,
  IDosage,
  IDuration,
  IElement,
  IExpression,
  IHumanName,
  IIdentifier,
  IMeta,
  IMoney,
  IParameterDefinition,
  IPeriod,
  IPrimitiveBase64Binary,
  IPrimitiveBoolean,
  IPrimitiveCanonical,
  IPrimitiveCode,
  IPrimitiveDate,
  IPrimitiveDateTime,
  IPrimitiveDecimal,
  IPrimitiveId,
  IPrimitiveInstant,
  IPrimitiveInteger,
  IPrimitiveMarkdown,
  IPrimitiveOid,
  IPrimitivePositiveInt,
  IPrimitiveString,
  IPrimitiveTime,
  IPrimitiveUnsignedInt,
  IPrimitiveUri,
  IPrimitiveUrl,
  IPrimitiveUuid,
  IQuantity,
  IRange,
  IRatio,
  IReference,
  IRelatedArtifact,
  ISampledData,
  ISignature,
  ITiming,
  ITriggerDefinition,
  IUsageContext,
} from "../internal";

export interface IParametersParameter extends IBackboneElement {
  name?: IPrimitiveString;
  _name?: IElement;

  valueBase64Binary?: IPrimitiveBase64Binary;
  _valueBase64Binary?: IElement;
  
  valueBoolean?: IPrimitiveBoolean;
  _valueBoolean?: IElement;
  
  valueCanonical?: IPrimitiveCanonical;
  _valueCanonical?: IElement;
  
  valueCode?: IPrimitiveCode;
  _valueCode?: IElement;
  
  valueDate?: IPrimitiveDate;
  _valueDate?: IElement;
  
  valueDateTime?: IPrimitiveDateTime;
  _valueDateTime?: IElement;
  
  valueDecimal?: IPrimitiveDecimal;
  _valueDecimal?: IElement;
  
  valueId?: IPrimitiveId;
  _valueId?: IElement;
  
  valueInstant?: IPrimitiveInstant;
  _valueInstant?: IElement;
  
  valueInteger?: IPrimitiveInteger;
  _valueInteger?: IElement;
  
  valueMarkdown?: IPrimitiveMarkdown;
  _valueMarkdown?: IElement;
  
  valueOid?: IPrimitiveOid;
  _valueOid?: IElement;
  
  valuePositiveInt?: IPrimitivePositiveInt;
  _valuePositiveInt?: IElement;
  
  valueString?: IPrimitiveString;
  _valueString?: IElement;
  
  valueTime?: IPrimitiveTime;
  _valueTime?: IElement;
  
  valueUnsignedInt?: IPrimitiveUnsignedInt;
  _valueUnsignedInt?: IElement;
  
  valueUri?: IPrimitiveUri;
  _valueUri?: IElement;
  
  valueUrl?: IPrimitiveUrl;
  _valueUrl?: IElement;
  
  valueUuid?: IPrimitiveUuid;
  _valueUuid?: IElement;
  
  valueAddress?: IAddress;
  
  valueAge?: IAge;
  
  valueAnnotation?: IAnnotation;
  
  valueAttachment?: IAttachment;
  
  valueCodeableConcept?: ICodeableConcept;
  
  valueCoding?: ICoding;
  
  valueContactPoint?: IContactPoint;
  
  valueCount?: ICount;
  
  valueDistance?: IDistance;
  
  valueDuration?: IDuration;
  
  valueHumanName?: IHumanName;
  
  valueIdentifier?: IIdentifier;
  
  valueMoney?: IMoney;
  
  valuePeriod?: IPeriod;
  
  valueQuantity?: IQuantity;
  
  valueRange?: IRange;
  
  valueRatio?: IRatio;
  
  valueReference?: IReference;
  
  valueSampledData?: ISampledData;
  
  valueSignature?: ISignature;
  
  valueTiming?: ITiming;
  
  valueContactDetail?: IContactDetail;
  
  valueContributor?: IContributor;
  
  valueDataRequirement?: IDataRequirement;
  
  valueExpression?: IExpression;
  
  valueParameterDefinition?: IParameterDefinition;
  
  valueRelatedArtifact?: IRelatedArtifact;
  
  valueTriggerDefinition?: ITriggerDefinition;
  
  valueUsageContext?: IUsageContext;
  
  valueDosage?: IDosage;
  
  valueMeta?: IMeta;

  resource?: AnyResource;

  part?: Array<IParametersParameter>;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
