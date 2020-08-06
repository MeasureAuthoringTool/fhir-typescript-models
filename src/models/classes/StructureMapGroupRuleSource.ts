/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  Address,
  Age,
  Annotation,
  Attachment,
  BackboneElement,
  CodeableConcept,
  Coding,
  ContactDetail,
  ContactPoint,
  Contributor,
  Count,
  DataRequirement,
  Distance,
  Dosage,
  Duration,
  Expression,
  Extension,
  HumanName,
  Identifier,
  IStructureMapGroupRuleSource,
  Meta,
  Money,
  ParameterDefinition,
  Period,
  PrimitiveBase64Binary,
  PrimitiveBoolean,
  PrimitiveCanonical,
  PrimitiveCode,
  PrimitiveDate,
  PrimitiveDateTime,
  PrimitiveDecimal,
  PrimitiveId,
  PrimitiveInstant,
  PrimitiveInteger,
  PrimitiveMarkdown,
  PrimitiveOid,
  PrimitivePositiveInt,
  PrimitiveString,
  PrimitiveTime,
  PrimitiveUnsignedInt,
  PrimitiveUri,
  PrimitiveUrl,
  PrimitiveUuid,
  Quantity,
  Range,
  Ratio,
  Reference,
  RelatedArtifact,
  SampledData,
  Signature,
  StructureMapSourceListMode,
  Timing,
  TriggerDefinition,
  UsageContext,
} from "../internal";

export class StructureMapGroupRuleSource extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "StructureMap.Group.Rule.Source";

  public context?: PrimitiveId;

  public min?: PrimitiveInteger;

  public max?: PrimitiveString;

  public type?: PrimitiveString;

  public defaultValue?: PrimitiveBase64Binary | PrimitiveBoolean | PrimitiveCanonical | PrimitiveCode | PrimitiveDate | PrimitiveDateTime | PrimitiveDecimal | PrimitiveId | PrimitiveInstant | PrimitiveInteger | PrimitiveMarkdown | PrimitiveOid | PrimitivePositiveInt | PrimitiveString | PrimitiveTime | PrimitiveUnsignedInt | PrimitiveUri | PrimitiveUrl | PrimitiveUuid | Address | Age | Annotation | Attachment | CodeableConcept | Coding | ContactPoint | Count | Distance | Duration | HumanName | Identifier | Money | Period | Quantity | Range | Ratio | Reference | SampledData | Signature | Timing | ContactDetail | Contributor | DataRequirement | Expression | ParameterDefinition | RelatedArtifact | TriggerDefinition | UsageContext | Dosage | Meta;

  public element?: PrimitiveString;

  public listMode?: StructureMapSourceListMode;

  public variable?: PrimitiveId;

  public condition?: PrimitiveString;

  public check?: PrimitiveString;

  public logMessage?: PrimitiveString;

  public static parse(
    json: IStructureMapGroupRuleSource,
    providedInstance: StructureMapGroupRuleSource = new StructureMapGroupRuleSource()
  ): StructureMapGroupRuleSource {
    const newInstance: StructureMapGroupRuleSource = BackboneElement.parse(json, providedInstance);
  
    if (json.context) {
      newInstance.context = PrimitiveId.parsePrimitive(json.context, json._context);
    }
    if (json.min) {
      newInstance.min = PrimitiveInteger.parsePrimitive(json.min, json._min);
    }
    if (json.max) {
      newInstance.max = PrimitiveString.parsePrimitive(json.max, json._max);
    }
    if (json.type) {
      newInstance.type = PrimitiveString.parsePrimitive(json.type, json._type);
    }
    if (json.defaultValueBase64Binary) {
      newInstance.defaultValue = PrimitiveBase64Binary.parsePrimitive(json.defaultValueBase64Binary, json._defaultValueBase64Binary);
    }
    if (json.defaultValueBoolean) {
      newInstance.defaultValue = PrimitiveBoolean.parsePrimitive(json.defaultValueBoolean, json._defaultValueBoolean);
    }
    if (json.defaultValueCanonical) {
      newInstance.defaultValue = PrimitiveCanonical.parsePrimitive(json.defaultValueCanonical, json._defaultValueCanonical);
    }
    if (json.defaultValueCode) {
      newInstance.defaultValue = PrimitiveCode.parsePrimitive(json.defaultValueCode, json._defaultValueCode);
    }
    if (json.defaultValueDate) {
      newInstance.defaultValue = PrimitiveDate.parsePrimitive(json.defaultValueDate, json._defaultValueDate);
    }
    if (json.defaultValueDateTime) {
      newInstance.defaultValue = PrimitiveDateTime.parsePrimitive(json.defaultValueDateTime, json._defaultValueDateTime);
    }
    if (json.defaultValueDecimal) {
      newInstance.defaultValue = PrimitiveDecimal.parsePrimitive(json.defaultValueDecimal, json._defaultValueDecimal);
    }
    if (json.defaultValueId) {
      newInstance.defaultValue = PrimitiveId.parsePrimitive(json.defaultValueId, json._defaultValueId);
    }
    if (json.defaultValueInstant) {
      newInstance.defaultValue = PrimitiveInstant.parsePrimitive(json.defaultValueInstant, json._defaultValueInstant);
    }
    if (json.defaultValueInteger) {
      newInstance.defaultValue = PrimitiveInteger.parsePrimitive(json.defaultValueInteger, json._defaultValueInteger);
    }
    if (json.defaultValueMarkdown) {
      newInstance.defaultValue = PrimitiveMarkdown.parsePrimitive(json.defaultValueMarkdown, json._defaultValueMarkdown);
    }
    if (json.defaultValueOid) {
      newInstance.defaultValue = PrimitiveOid.parsePrimitive(json.defaultValueOid, json._defaultValueOid);
    }
    if (json.defaultValuePositiveInt) {
      newInstance.defaultValue = PrimitivePositiveInt.parsePrimitive(json.defaultValuePositiveInt, json._defaultValuePositiveInt);
    }
    if (json.defaultValueString) {
      newInstance.defaultValue = PrimitiveString.parsePrimitive(json.defaultValueString, json._defaultValueString);
    }
    if (json.defaultValueTime) {
      newInstance.defaultValue = PrimitiveTime.parsePrimitive(json.defaultValueTime, json._defaultValueTime);
    }
    if (json.defaultValueUnsignedInt) {
      newInstance.defaultValue = PrimitiveUnsignedInt.parsePrimitive(json.defaultValueUnsignedInt, json._defaultValueUnsignedInt);
    }
    if (json.defaultValueUri) {
      newInstance.defaultValue = PrimitiveUri.parsePrimitive(json.defaultValueUri, json._defaultValueUri);
    }
    if (json.defaultValueUrl) {
      newInstance.defaultValue = PrimitiveUrl.parsePrimitive(json.defaultValueUrl, json._defaultValueUrl);
    }
    if (json.defaultValueUuid) {
      newInstance.defaultValue = PrimitiveUuid.parsePrimitive(json.defaultValueUuid, json._defaultValueUuid);
    }
    if (json.defaultValueAddress) {
      newInstance.defaultValue = Address.parse(json.defaultValueAddress);
    }
    if (json.defaultValueAge) {
      newInstance.defaultValue = Age.parse(json.defaultValueAge);
    }
    if (json.defaultValueAnnotation) {
      newInstance.defaultValue = Annotation.parse(json.defaultValueAnnotation);
    }
    if (json.defaultValueAttachment) {
      newInstance.defaultValue = Attachment.parse(json.defaultValueAttachment);
    }
    if (json.defaultValueCodeableConcept) {
      newInstance.defaultValue = CodeableConcept.parse(json.defaultValueCodeableConcept);
    }
    if (json.defaultValueCoding) {
      newInstance.defaultValue = Coding.parse(json.defaultValueCoding);
    }
    if (json.defaultValueContactPoint) {
      newInstance.defaultValue = ContactPoint.parse(json.defaultValueContactPoint);
    }
    if (json.defaultValueCount) {
      newInstance.defaultValue = Count.parse(json.defaultValueCount);
    }
    if (json.defaultValueDistance) {
      newInstance.defaultValue = Distance.parse(json.defaultValueDistance);
    }
    if (json.defaultValueDuration) {
      newInstance.defaultValue = Duration.parse(json.defaultValueDuration);
    }
    if (json.defaultValueHumanName) {
      newInstance.defaultValue = HumanName.parse(json.defaultValueHumanName);
    }
    if (json.defaultValueIdentifier) {
      newInstance.defaultValue = Identifier.parse(json.defaultValueIdentifier);
    }
    if (json.defaultValueMoney) {
      newInstance.defaultValue = Money.parse(json.defaultValueMoney);
    }
    if (json.defaultValuePeriod) {
      newInstance.defaultValue = Period.parse(json.defaultValuePeriod);
    }
    if (json.defaultValueQuantity) {
      newInstance.defaultValue = Quantity.parse(json.defaultValueQuantity);
    }
    if (json.defaultValueRange) {
      newInstance.defaultValue = Range.parse(json.defaultValueRange);
    }
    if (json.defaultValueRatio) {
      newInstance.defaultValue = Ratio.parse(json.defaultValueRatio);
    }
    if (json.defaultValueReference) {
      newInstance.defaultValue = Reference.parse(json.defaultValueReference);
    }
    if (json.defaultValueSampledData) {
      newInstance.defaultValue = SampledData.parse(json.defaultValueSampledData);
    }
    if (json.defaultValueSignature) {
      newInstance.defaultValue = Signature.parse(json.defaultValueSignature);
    }
    if (json.defaultValueTiming) {
      newInstance.defaultValue = Timing.parse(json.defaultValueTiming);
    }
    if (json.defaultValueContactDetail) {
      newInstance.defaultValue = ContactDetail.parse(json.defaultValueContactDetail);
    }
    if (json.defaultValueContributor) {
      newInstance.defaultValue = Contributor.parse(json.defaultValueContributor);
    }
    if (json.defaultValueDataRequirement) {
      newInstance.defaultValue = DataRequirement.parse(json.defaultValueDataRequirement);
    }
    if (json.defaultValueExpression) {
      newInstance.defaultValue = Expression.parse(json.defaultValueExpression);
    }
    if (json.defaultValueParameterDefinition) {
      newInstance.defaultValue = ParameterDefinition.parse(json.defaultValueParameterDefinition);
    }
    if (json.defaultValueRelatedArtifact) {
      newInstance.defaultValue = RelatedArtifact.parse(json.defaultValueRelatedArtifact);
    }
    if (json.defaultValueTriggerDefinition) {
      newInstance.defaultValue = TriggerDefinition.parse(json.defaultValueTriggerDefinition);
    }
    if (json.defaultValueUsageContext) {
      newInstance.defaultValue = UsageContext.parse(json.defaultValueUsageContext);
    }
    if (json.defaultValueDosage) {
      newInstance.defaultValue = Dosage.parse(json.defaultValueDosage);
    }
    if (json.defaultValueMeta) {
      newInstance.defaultValue = Meta.parse(json.defaultValueMeta);
    }
    if (json.element) {
      newInstance.element = PrimitiveString.parsePrimitive(json.element, json._element);
    }
    if (json.listMode) {
      newInstance.listMode = StructureMapSourceListMode.parsePrimitive(json.listMode, json._listMode);
    }
    if (json.variable) {
      newInstance.variable = PrimitiveId.parsePrimitive(json.variable, json._variable);
    }
    if (json.condition) {
      newInstance.condition = PrimitiveString.parsePrimitive(json.condition, json._condition);
    }
    if (json.check) {
      newInstance.check = PrimitiveString.parsePrimitive(json.check, json._check);
    }
    if (json.logMessage) {
      newInstance.logMessage = PrimitiveString.parsePrimitive(json.logMessage, json._logMessage);
    }
    return newInstance;
  }

  public static isStructureMapGroupRuleSource(input?: unknown): input is StructureMapGroupRuleSource {
    const castInput = input as StructureMapGroupRuleSource;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "StructureMapGroupRuleSource";
  }

  public toJSON(): IStructureMapGroupRuleSource {
    const result: IStructureMapGroupRuleSource = super.toJSON();

    if (this.context) {
      result.context = this.context.value;
      result._context = Extension.serializePrimitiveExtension(this.context);
    }

    if (this.min) {
      result.min = this.min.value;
      result._min = Extension.serializePrimitiveExtension(this.min);
    }

    if (this.max) {
      result.max = this.max.value;
      result._max = Extension.serializePrimitiveExtension(this.max);
    }

    if (this.type) {
      result.type = this.type.value;
      result._type = Extension.serializePrimitiveExtension(this.type);
    }

    if (this.defaultValue && PrimitiveBase64Binary.isPrimitiveBase64Binary(this.defaultValue)) {
      result.defaultValueBase64Binary = this.defaultValue.value;
      result._defaultValueBase64Binary = Extension.serializePrimitiveExtension(this.defaultValue);
    }

    if (this.defaultValue && PrimitiveBoolean.isPrimitiveBoolean(this.defaultValue)) {
      result.defaultValueBoolean = this.defaultValue.value;
      result._defaultValueBoolean = Extension.serializePrimitiveExtension(this.defaultValue);
    }

    if (this.defaultValue && PrimitiveCanonical.isPrimitiveCanonical(this.defaultValue)) {
      result.defaultValueCanonical = this.defaultValue.value;
      result._defaultValueCanonical = Extension.serializePrimitiveExtension(this.defaultValue);
    }

    if (this.defaultValue && PrimitiveCode.isPrimitiveCode(this.defaultValue)) {
      result.defaultValueCode = this.defaultValue.value;
      result._defaultValueCode = Extension.serializePrimitiveExtension(this.defaultValue);
    }

    if (this.defaultValue && PrimitiveDate.isPrimitiveDate(this.defaultValue)) {
      result.defaultValueDate = this.defaultValue.value;
      result._defaultValueDate = Extension.serializePrimitiveExtension(this.defaultValue);
    }

    if (this.defaultValue && PrimitiveDateTime.isPrimitiveDateTime(this.defaultValue)) {
      result.defaultValueDateTime = this.defaultValue.value;
      result._defaultValueDateTime = Extension.serializePrimitiveExtension(this.defaultValue);
    }

    if (this.defaultValue && PrimitiveDecimal.isPrimitiveDecimal(this.defaultValue)) {
      result.defaultValueDecimal = this.defaultValue.value;
      result._defaultValueDecimal = Extension.serializePrimitiveExtension(this.defaultValue);
    }

    if (this.defaultValue && PrimitiveId.isPrimitiveId(this.defaultValue)) {
      result.defaultValueId = this.defaultValue.value;
      result._defaultValueId = Extension.serializePrimitiveExtension(this.defaultValue);
    }

    if (this.defaultValue && PrimitiveInstant.isPrimitiveInstant(this.defaultValue)) {
      result.defaultValueInstant = this.defaultValue.value;
      result._defaultValueInstant = Extension.serializePrimitiveExtension(this.defaultValue);
    }

    if (this.defaultValue && PrimitiveInteger.isPrimitiveInteger(this.defaultValue)) {
      result.defaultValueInteger = this.defaultValue.value;
      result._defaultValueInteger = Extension.serializePrimitiveExtension(this.defaultValue);
    }

    if (this.defaultValue && PrimitiveMarkdown.isPrimitiveMarkdown(this.defaultValue)) {
      result.defaultValueMarkdown = this.defaultValue.value;
      result._defaultValueMarkdown = Extension.serializePrimitiveExtension(this.defaultValue);
    }

    if (this.defaultValue && PrimitiveOid.isPrimitiveOid(this.defaultValue)) {
      result.defaultValueOid = this.defaultValue.value;
      result._defaultValueOid = Extension.serializePrimitiveExtension(this.defaultValue);
    }

    if (this.defaultValue && PrimitivePositiveInt.isPrimitivePositiveInt(this.defaultValue)) {
      result.defaultValuePositiveInt = this.defaultValue.value;
      result._defaultValuePositiveInt = Extension.serializePrimitiveExtension(this.defaultValue);
    }

    if (this.defaultValue && PrimitiveString.isPrimitiveString(this.defaultValue)) {
      result.defaultValueString = this.defaultValue.value;
      result._defaultValueString = Extension.serializePrimitiveExtension(this.defaultValue);
    }

    if (this.defaultValue && PrimitiveTime.isPrimitiveTime(this.defaultValue)) {
      result.defaultValueTime = this.defaultValue.value;
      result._defaultValueTime = Extension.serializePrimitiveExtension(this.defaultValue);
    }

    if (this.defaultValue && PrimitiveUnsignedInt.isPrimitiveUnsignedInt(this.defaultValue)) {
      result.defaultValueUnsignedInt = this.defaultValue.value;
      result._defaultValueUnsignedInt = Extension.serializePrimitiveExtension(this.defaultValue);
    }

    if (this.defaultValue && PrimitiveUri.isPrimitiveUri(this.defaultValue)) {
      result.defaultValueUri = this.defaultValue.value;
      result._defaultValueUri = Extension.serializePrimitiveExtension(this.defaultValue);
    }

    if (this.defaultValue && PrimitiveUrl.isPrimitiveUrl(this.defaultValue)) {
      result.defaultValueUrl = this.defaultValue.value;
      result._defaultValueUrl = Extension.serializePrimitiveExtension(this.defaultValue);
    }

    if (this.defaultValue && PrimitiveUuid.isPrimitiveUuid(this.defaultValue)) {
      result.defaultValueUuid = this.defaultValue.value;
      result._defaultValueUuid = Extension.serializePrimitiveExtension(this.defaultValue);
    }

    if (this.defaultValue && Address.isAddress(this.defaultValue)) {
      result.defaultValueAddress = this.defaultValue.toJSON();
    }

    if (this.defaultValue && Age.isAge(this.defaultValue)) {
      result.defaultValueAge = this.defaultValue.toJSON();
    }

    if (this.defaultValue && Annotation.isAnnotation(this.defaultValue)) {
      result.defaultValueAnnotation = this.defaultValue.toJSON();
    }

    if (this.defaultValue && Attachment.isAttachment(this.defaultValue)) {
      result.defaultValueAttachment = this.defaultValue.toJSON();
    }

    if (this.defaultValue && CodeableConcept.isCodeableConcept(this.defaultValue)) {
      result.defaultValueCodeableConcept = this.defaultValue.toJSON();
    }

    if (this.defaultValue && Coding.isCoding(this.defaultValue)) {
      result.defaultValueCoding = this.defaultValue.toJSON();
    }

    if (this.defaultValue && ContactPoint.isContactPoint(this.defaultValue)) {
      result.defaultValueContactPoint = this.defaultValue.toJSON();
    }

    if (this.defaultValue && Count.isCount(this.defaultValue)) {
      result.defaultValueCount = this.defaultValue.toJSON();
    }

    if (this.defaultValue && Distance.isDistance(this.defaultValue)) {
      result.defaultValueDistance = this.defaultValue.toJSON();
    }

    if (this.defaultValue && Duration.isDuration(this.defaultValue)) {
      result.defaultValueDuration = this.defaultValue.toJSON();
    }

    if (this.defaultValue && HumanName.isHumanName(this.defaultValue)) {
      result.defaultValueHumanName = this.defaultValue.toJSON();
    }

    if (this.defaultValue && Identifier.isIdentifier(this.defaultValue)) {
      result.defaultValueIdentifier = this.defaultValue.toJSON();
    }

    if (this.defaultValue && Money.isMoney(this.defaultValue)) {
      result.defaultValueMoney = this.defaultValue.toJSON();
    }

    if (this.defaultValue && Period.isPeriod(this.defaultValue)) {
      result.defaultValuePeriod = this.defaultValue.toJSON();
    }

    if (this.defaultValue && Quantity.isQuantity(this.defaultValue)) {
      result.defaultValueQuantity = this.defaultValue.toJSON();
    }

    if (this.defaultValue && Range.isRange(this.defaultValue)) {
      result.defaultValueRange = this.defaultValue.toJSON();
    }

    if (this.defaultValue && Ratio.isRatio(this.defaultValue)) {
      result.defaultValueRatio = this.defaultValue.toJSON();
    }

    if (this.defaultValue && Reference.isReference(this.defaultValue)) {
      result.defaultValueReference = this.defaultValue.toJSON();
    }

    if (this.defaultValue && SampledData.isSampledData(this.defaultValue)) {
      result.defaultValueSampledData = this.defaultValue.toJSON();
    }

    if (this.defaultValue && Signature.isSignature(this.defaultValue)) {
      result.defaultValueSignature = this.defaultValue.toJSON();
    }

    if (this.defaultValue && Timing.isTiming(this.defaultValue)) {
      result.defaultValueTiming = this.defaultValue.toJSON();
    }

    if (this.defaultValue && ContactDetail.isContactDetail(this.defaultValue)) {
      result.defaultValueContactDetail = this.defaultValue.toJSON();
    }

    if (this.defaultValue && Contributor.isContributor(this.defaultValue)) {
      result.defaultValueContributor = this.defaultValue.toJSON();
    }

    if (this.defaultValue && DataRequirement.isDataRequirement(this.defaultValue)) {
      result.defaultValueDataRequirement = this.defaultValue.toJSON();
    }

    if (this.defaultValue && Expression.isExpression(this.defaultValue)) {
      result.defaultValueExpression = this.defaultValue.toJSON();
    }

    if (this.defaultValue && ParameterDefinition.isParameterDefinition(this.defaultValue)) {
      result.defaultValueParameterDefinition = this.defaultValue.toJSON();
    }

    if (this.defaultValue && RelatedArtifact.isRelatedArtifact(this.defaultValue)) {
      result.defaultValueRelatedArtifact = this.defaultValue.toJSON();
    }

    if (this.defaultValue && TriggerDefinition.isTriggerDefinition(this.defaultValue)) {
      result.defaultValueTriggerDefinition = this.defaultValue.toJSON();
    }

    if (this.defaultValue && UsageContext.isUsageContext(this.defaultValue)) {
      result.defaultValueUsageContext = this.defaultValue.toJSON();
    }

    if (this.defaultValue && Dosage.isDosage(this.defaultValue)) {
      result.defaultValueDosage = this.defaultValue.toJSON();
    }

    if (this.defaultValue && Meta.isMeta(this.defaultValue)) {
      result.defaultValueMeta = this.defaultValue.toJSON();
    }

    if (this.element) {
      result.element = this.element.value;
      result._element = Extension.serializePrimitiveExtension(this.element);
    }

    if (this.listMode) {
      result.listMode = this.listMode.value;
      result._listMode = Extension.serializePrimitiveExtension(this.listMode);
    }

    if (this.variable) {
      result.variable = this.variable.value;
      result._variable = Extension.serializePrimitiveExtension(this.variable);
    }

    if (this.condition) {
      result.condition = this.condition.value;
      result._condition = Extension.serializePrimitiveExtension(this.condition);
    }

    if (this.check) {
      result.check = this.check.value;
      result._check = Extension.serializePrimitiveExtension(this.check);
    }

    if (this.logMessage) {
      result.logMessage = this.logMessage.value;
      result._logMessage = Extension.serializePrimitiveExtension(this.logMessage);
    }

    return result;
  }
  
  public getTypeName(): string {
    return "StructureMapGroupRuleSource";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
