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
  IStructureMapSourceListMode,
  ITiming,
  ITriggerDefinition,
  IUsageContext,
} from "../internal";

export interface IStructureMapGroupRuleSource extends IBackboneElement {
  context?: IPrimitiveId;
  _context?: IElement;

  min?: IPrimitiveInteger;
  _min?: IElement;

  max?: IPrimitiveString;
  _max?: IElement;

  type?: IPrimitiveString;
  _type?: IElement;

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

  element?: IPrimitiveString;
  _element?: IElement;

  listMode?: IStructureMapSourceListMode;
  _listMode?: IElement;

  variable?: IPrimitiveId;
  _variable?: IElement;

  condition?: IPrimitiveString;
  _condition?: IElement;

  check?: IPrimitiveString;
  _check?: IElement;

  logMessage?: IPrimitiveString;
  _logMessage?: IElement;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
