/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
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
  IElementDefinitionBase,
  IElementDefinitionBinding,
  IElementDefinitionConstraint,
  IElementDefinitionExample,
  IElementDefinitionMapping,
  IElementDefinitionSlicing,
  IElementDefinitionType,
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
  IPropertyRepresentation,
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

export interface IElementDefinition extends IBackboneElement {
  path?: IPrimitiveString;
  _path?: IElement;

  representation?: Array<IPropertyRepresentation>;
  _representation?: Array<IElement | null>;

  sliceName?: IPrimitiveString;
  _sliceName?: IElement;

  sliceIsConstraining?: IPrimitiveBoolean;
  _sliceIsConstraining?: IElement;

  label?: IPrimitiveString;
  _label?: IElement;

  code?: Array<ICoding>;

  slicing?: IElementDefinitionSlicing;

  short?: IPrimitiveString;
  _short?: IElement;

  definition?: IPrimitiveMarkdown;
  _definition?: IElement;

  comment?: IPrimitiveMarkdown;
  _comment?: IElement;

  requirements?: IPrimitiveMarkdown;
  _requirements?: IElement;

  alias?: Array<IPrimitiveString>;
  _alias?: Array<IElement | null>;

  min?: IPrimitiveUnsignedInt;
  _min?: IElement;

  max?: IPrimitiveString;
  _max?: IElement;

  base?: IElementDefinitionBase;

  contentReference?: IPrimitiveUri;
  _contentReference?: IElement;

  type?: Array<IElementDefinitionType>;

  defaultValueBase64Binary?: IPrimitiveBase64Binary;
  _defaultValueBase64Binary?: IElement;
  
  defaultValueBoolean?: IPrimitiveBoolean;
  _defaultValueBoolean?: IElement;
  
  defaultValueCanonical?: IPrimitiveCanonical;
  _defaultValueCanonical?: IElement;
  
  defaultValueCode?: IPrimitiveCode;
  _defaultValueCode?: IElement;
  
  defaultValueDate?: IPrimitiveDate;
  _defaultValueDate?: IElement;
  
  defaultValueDateTime?: IPrimitiveDateTime;
  _defaultValueDateTime?: IElement;
  
  defaultValueDecimal?: IPrimitiveDecimal;
  _defaultValueDecimal?: IElement;
  
  defaultValueId?: IPrimitiveId;
  _defaultValueId?: IElement;
  
  defaultValueInstant?: IPrimitiveInstant;
  _defaultValueInstant?: IElement;
  
  defaultValueInteger?: IPrimitiveInteger;
  _defaultValueInteger?: IElement;
  
  defaultValueMarkdown?: IPrimitiveMarkdown;
  _defaultValueMarkdown?: IElement;
  
  defaultValueOid?: IPrimitiveOid;
  _defaultValueOid?: IElement;
  
  defaultValuePositiveInt?: IPrimitivePositiveInt;
  _defaultValuePositiveInt?: IElement;
  
  defaultValueString?: IPrimitiveString;
  _defaultValueString?: IElement;
  
  defaultValueTime?: IPrimitiveTime;
  _defaultValueTime?: IElement;
  
  defaultValueUnsignedInt?: IPrimitiveUnsignedInt;
  _defaultValueUnsignedInt?: IElement;
  
  defaultValueUri?: IPrimitiveUri;
  _defaultValueUri?: IElement;
  
  defaultValueUrl?: IPrimitiveUrl;
  _defaultValueUrl?: IElement;
  
  defaultValueUuid?: IPrimitiveUuid;
  _defaultValueUuid?: IElement;
  
  defaultValueAddress?: IAddress;
  
  defaultValueAge?: IAge;
  
  defaultValueAnnotation?: IAnnotation;
  
  defaultValueAttachment?: IAttachment;
  
  defaultValueCodeableConcept?: ICodeableConcept;
  
  defaultValueCoding?: ICoding;
  
  defaultValueContactPoint?: IContactPoint;
  
  defaultValueCount?: ICount;
  
  defaultValueDistance?: IDistance;
  
  defaultValueDuration?: IDuration;
  
  defaultValueHumanName?: IHumanName;
  
  defaultValueIdentifier?: IIdentifier;
  
  defaultValueMoney?: IMoney;
  
  defaultValuePeriod?: IPeriod;
  
  defaultValueQuantity?: IQuantity;
  
  defaultValueRange?: IRange;
  
  defaultValueRatio?: IRatio;
  
  defaultValueReference?: IReference;
  
  defaultValueSampledData?: ISampledData;
  
  defaultValueSignature?: ISignature;
  
  defaultValueTiming?: ITiming;
  
  defaultValueContactDetail?: IContactDetail;
  
  defaultValueContributor?: IContributor;
  
  defaultValueDataRequirement?: IDataRequirement;
  
  defaultValueExpression?: IExpression;
  
  defaultValueParameterDefinition?: IParameterDefinition;
  
  defaultValueRelatedArtifact?: IRelatedArtifact;
  
  defaultValueTriggerDefinition?: ITriggerDefinition;
  
  defaultValueUsageContext?: IUsageContext;
  
  defaultValueDosage?: IDosage;
  
  defaultValueMeta?: IMeta;

  meaningWhenMissing?: IPrimitiveMarkdown;
  _meaningWhenMissing?: IElement;

  orderMeaning?: IPrimitiveString;
  _orderMeaning?: IElement;

  fixedBase64Binary?: IPrimitiveBase64Binary;
  _fixedBase64Binary?: IElement;
  
  fixedBoolean?: IPrimitiveBoolean;
  _fixedBoolean?: IElement;
  
  fixedCanonical?: IPrimitiveCanonical;
  _fixedCanonical?: IElement;
  
  fixedCode?: IPrimitiveCode;
  _fixedCode?: IElement;
  
  fixedDate?: IPrimitiveDate;
  _fixedDate?: IElement;
  
  fixedDateTime?: IPrimitiveDateTime;
  _fixedDateTime?: IElement;
  
  fixedDecimal?: IPrimitiveDecimal;
  _fixedDecimal?: IElement;
  
  fixedId?: IPrimitiveId;
  _fixedId?: IElement;
  
  fixedInstant?: IPrimitiveInstant;
  _fixedInstant?: IElement;
  
  fixedInteger?: IPrimitiveInteger;
  _fixedInteger?: IElement;
  
  fixedMarkdown?: IPrimitiveMarkdown;
  _fixedMarkdown?: IElement;
  
  fixedOid?: IPrimitiveOid;
  _fixedOid?: IElement;
  
  fixedPositiveInt?: IPrimitivePositiveInt;
  _fixedPositiveInt?: IElement;
  
  fixedString?: IPrimitiveString;
  _fixedString?: IElement;
  
  fixedTime?: IPrimitiveTime;
  _fixedTime?: IElement;
  
  fixedUnsignedInt?: IPrimitiveUnsignedInt;
  _fixedUnsignedInt?: IElement;
  
  fixedUri?: IPrimitiveUri;
  _fixedUri?: IElement;
  
  fixedUrl?: IPrimitiveUrl;
  _fixedUrl?: IElement;
  
  fixedUuid?: IPrimitiveUuid;
  _fixedUuid?: IElement;
  
  fixedAddress?: IAddress;
  
  fixedAge?: IAge;
  
  fixedAnnotation?: IAnnotation;
  
  fixedAttachment?: IAttachment;
  
  fixedCodeableConcept?: ICodeableConcept;
  
  fixedCoding?: ICoding;
  
  fixedContactPoint?: IContactPoint;
  
  fixedCount?: ICount;
  
  fixedDistance?: IDistance;
  
  fixedDuration?: IDuration;
  
  fixedHumanName?: IHumanName;
  
  fixedIdentifier?: IIdentifier;
  
  fixedMoney?: IMoney;
  
  fixedPeriod?: IPeriod;
  
  fixedQuantity?: IQuantity;
  
  fixedRange?: IRange;
  
  fixedRatio?: IRatio;
  
  fixedReference?: IReference;
  
  fixedSampledData?: ISampledData;
  
  fixedSignature?: ISignature;
  
  fixedTiming?: ITiming;
  
  fixedContactDetail?: IContactDetail;
  
  fixedContributor?: IContributor;
  
  fixedDataRequirement?: IDataRequirement;
  
  fixedExpression?: IExpression;
  
  fixedParameterDefinition?: IParameterDefinition;
  
  fixedRelatedArtifact?: IRelatedArtifact;
  
  fixedTriggerDefinition?: ITriggerDefinition;
  
  fixedUsageContext?: IUsageContext;
  
  fixedDosage?: IDosage;
  
  fixedMeta?: IMeta;

  patternBase64Binary?: IPrimitiveBase64Binary;
  _patternBase64Binary?: IElement;
  
  patternBoolean?: IPrimitiveBoolean;
  _patternBoolean?: IElement;
  
  patternCanonical?: IPrimitiveCanonical;
  _patternCanonical?: IElement;
  
  patternCode?: IPrimitiveCode;
  _patternCode?: IElement;
  
  patternDate?: IPrimitiveDate;
  _patternDate?: IElement;
  
  patternDateTime?: IPrimitiveDateTime;
  _patternDateTime?: IElement;
  
  patternDecimal?: IPrimitiveDecimal;
  _patternDecimal?: IElement;
  
  patternId?: IPrimitiveId;
  _patternId?: IElement;
  
  patternInstant?: IPrimitiveInstant;
  _patternInstant?: IElement;
  
  patternInteger?: IPrimitiveInteger;
  _patternInteger?: IElement;
  
  patternMarkdown?: IPrimitiveMarkdown;
  _patternMarkdown?: IElement;
  
  patternOid?: IPrimitiveOid;
  _patternOid?: IElement;
  
  patternPositiveInt?: IPrimitivePositiveInt;
  _patternPositiveInt?: IElement;
  
  patternString?: IPrimitiveString;
  _patternString?: IElement;
  
  patternTime?: IPrimitiveTime;
  _patternTime?: IElement;
  
  patternUnsignedInt?: IPrimitiveUnsignedInt;
  _patternUnsignedInt?: IElement;
  
  patternUri?: IPrimitiveUri;
  _patternUri?: IElement;
  
  patternUrl?: IPrimitiveUrl;
  _patternUrl?: IElement;
  
  patternUuid?: IPrimitiveUuid;
  _patternUuid?: IElement;
  
  patternAddress?: IAddress;
  
  patternAge?: IAge;
  
  patternAnnotation?: IAnnotation;
  
  patternAttachment?: IAttachment;
  
  patternCodeableConcept?: ICodeableConcept;
  
  patternCoding?: ICoding;
  
  patternContactPoint?: IContactPoint;
  
  patternCount?: ICount;
  
  patternDistance?: IDistance;
  
  patternDuration?: IDuration;
  
  patternHumanName?: IHumanName;
  
  patternIdentifier?: IIdentifier;
  
  patternMoney?: IMoney;
  
  patternPeriod?: IPeriod;
  
  patternQuantity?: IQuantity;
  
  patternRange?: IRange;
  
  patternRatio?: IRatio;
  
  patternReference?: IReference;
  
  patternSampledData?: ISampledData;
  
  patternSignature?: ISignature;
  
  patternTiming?: ITiming;
  
  patternContactDetail?: IContactDetail;
  
  patternContributor?: IContributor;
  
  patternDataRequirement?: IDataRequirement;
  
  patternExpression?: IExpression;
  
  patternParameterDefinition?: IParameterDefinition;
  
  patternRelatedArtifact?: IRelatedArtifact;
  
  patternTriggerDefinition?: ITriggerDefinition;
  
  patternUsageContext?: IUsageContext;
  
  patternDosage?: IDosage;
  
  patternMeta?: IMeta;

  example?: Array<IElementDefinitionExample>;

  minValueDate?: IPrimitiveDate;
  _minValueDate?: IElement;
  
  minValueDateTime?: IPrimitiveDateTime;
  _minValueDateTime?: IElement;
  
  minValueInstant?: IPrimitiveInstant;
  _minValueInstant?: IElement;
  
  minValueTime?: IPrimitiveTime;
  _minValueTime?: IElement;
  
  minValueDecimal?: IPrimitiveDecimal;
  _minValueDecimal?: IElement;
  
  minValueInteger?: IPrimitiveInteger;
  _minValueInteger?: IElement;
  
  minValuePositiveInt?: IPrimitivePositiveInt;
  _minValuePositiveInt?: IElement;
  
  minValueUnsignedInt?: IPrimitiveUnsignedInt;
  _minValueUnsignedInt?: IElement;
  
  minValueQuantity?: IQuantity;

  maxValueDate?: IPrimitiveDate;
  _maxValueDate?: IElement;
  
  maxValueDateTime?: IPrimitiveDateTime;
  _maxValueDateTime?: IElement;
  
  maxValueInstant?: IPrimitiveInstant;
  _maxValueInstant?: IElement;
  
  maxValueTime?: IPrimitiveTime;
  _maxValueTime?: IElement;
  
  maxValueDecimal?: IPrimitiveDecimal;
  _maxValueDecimal?: IElement;
  
  maxValueInteger?: IPrimitiveInteger;
  _maxValueInteger?: IElement;
  
  maxValuePositiveInt?: IPrimitivePositiveInt;
  _maxValuePositiveInt?: IElement;
  
  maxValueUnsignedInt?: IPrimitiveUnsignedInt;
  _maxValueUnsignedInt?: IElement;
  
  maxValueQuantity?: IQuantity;

  maxLength?: IPrimitiveInteger;
  _maxLength?: IElement;

  condition?: Array<IPrimitiveId>;
  _condition?: Array<IElement | null>;

  constraint?: Array<IElementDefinitionConstraint>;

  mustSupport?: IPrimitiveBoolean;
  _mustSupport?: IElement;

  isModifier?: IPrimitiveBoolean;
  _isModifier?: IElement;

  isModifierReason?: IPrimitiveString;
  _isModifierReason?: IElement;

  isSummary?: IPrimitiveBoolean;
  _isSummary?: IElement;

  binding?: IElementDefinitionBinding;

  mapping?: Array<IElementDefinitionMapping>;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
