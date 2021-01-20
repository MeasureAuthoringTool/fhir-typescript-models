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
  FhirChoice,
  FhirField,
  FhirList,
  HumanName,
  Identifier,
  IParametersParameter,
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
  Resource,
  SampledData,
  Signature,
  Timing,
  TriggerDefinition,
  UsageContext,
  FhirType
} from "../internal";

@FhirType("ParametersParameter", "BackboneElement")
export class ParametersParameter extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "Parameters.Parameter";

  static readonly primaryCodePath: string | null = null;

  @FhirField("PrimitiveString")
  public name?: PrimitiveString;

  @FhirChoice("PrimitiveBase64Binary", "PrimitiveBoolean", "PrimitiveCanonical", "PrimitiveCode", "PrimitiveDate", "PrimitiveDateTime", "PrimitiveDecimal", "PrimitiveId", "PrimitiveInstant", "PrimitiveInteger", "PrimitiveMarkdown", "PrimitiveOid", "PrimitivePositiveInt", "PrimitiveString", "PrimitiveTime", "PrimitiveUnsignedInt", "PrimitiveUri", "PrimitiveUrl", "PrimitiveUuid", "Address", "Age", "Annotation", "Attachment", "CodeableConcept", "Coding", "ContactPoint", "Count", "Distance", "Duration", "HumanName", "Identifier", "Money", "Period", "Quantity", "Range", "Ratio", "Reference", "SampledData", "Signature", "Timing", "ContactDetail", "Contributor", "DataRequirement", "Expression", "ParameterDefinition", "RelatedArtifact", "TriggerDefinition", "UsageContext", "Dosage", "Meta")
  public value?: PrimitiveBase64Binary | PrimitiveBoolean | PrimitiveCanonical | PrimitiveCode | PrimitiveDate | PrimitiveDateTime | PrimitiveDecimal | PrimitiveId | PrimitiveInstant | PrimitiveInteger | PrimitiveMarkdown | PrimitiveOid | PrimitivePositiveInt | PrimitiveString | PrimitiveTime | PrimitiveUnsignedInt | PrimitiveUri | PrimitiveUrl | PrimitiveUuid | Address | Age | Annotation | Attachment | CodeableConcept | Coding | ContactPoint | Count | Distance | Duration | HumanName | Identifier | Money | Period | Quantity | Range | Ratio | Reference | SampledData | Signature | Timing | ContactDetail | Contributor | DataRequirement | Expression | ParameterDefinition | RelatedArtifact | TriggerDefinition | UsageContext | Dosage | Meta;

  @FhirField("Resource")
  public resource?: Resource;

  @FhirList("ParametersParameter")
  public part?: Array<ParametersParameter>;

  public static parse(
    json: IParametersParameter,
    providedInstance: ParametersParameter = new ParametersParameter()
  ): ParametersParameter {
    const newInstance: ParametersParameter = BackboneElement.parse(json, providedInstance);
  
    if (json.name !== undefined) {
      newInstance.name = PrimitiveString.parsePrimitive(json.name, json._name);
    }
    if (json.valueBase64Binary !== undefined) {
      newInstance.value = PrimitiveBase64Binary.parsePrimitive(json.valueBase64Binary, json._valueBase64Binary);
    }
    if (json.valueBoolean !== undefined) {
      newInstance.value = PrimitiveBoolean.parsePrimitive(json.valueBoolean, json._valueBoolean);
    }
    if (json.valueCanonical !== undefined) {
      newInstance.value = PrimitiveCanonical.parsePrimitive(json.valueCanonical, json._valueCanonical);
    }
    if (json.valueCode !== undefined) {
      newInstance.value = PrimitiveCode.parsePrimitive(json.valueCode, json._valueCode);
    }
    if (json.valueDate !== undefined) {
      newInstance.value = PrimitiveDate.parsePrimitive(json.valueDate, json._valueDate);
    }
    if (json.valueDateTime !== undefined) {
      newInstance.value = PrimitiveDateTime.parsePrimitive(json.valueDateTime, json._valueDateTime);
    }
    if (json.valueDecimal !== undefined) {
      newInstance.value = PrimitiveDecimal.parsePrimitive(json.valueDecimal, json._valueDecimal);
    }
    if (json.valueId !== undefined) {
      newInstance.value = PrimitiveId.parsePrimitive(json.valueId, json._valueId);
    }
    if (json.valueInstant !== undefined) {
      newInstance.value = PrimitiveInstant.parsePrimitive(json.valueInstant, json._valueInstant);
    }
    if (json.valueInteger !== undefined) {
      newInstance.value = PrimitiveInteger.parsePrimitive(json.valueInteger, json._valueInteger);
    }
    if (json.valueMarkdown !== undefined) {
      newInstance.value = PrimitiveMarkdown.parsePrimitive(json.valueMarkdown, json._valueMarkdown);
    }
    if (json.valueOid !== undefined) {
      newInstance.value = PrimitiveOid.parsePrimitive(json.valueOid, json._valueOid);
    }
    if (json.valuePositiveInt !== undefined) {
      newInstance.value = PrimitivePositiveInt.parsePrimitive(json.valuePositiveInt, json._valuePositiveInt);
    }
    if (json.valueString !== undefined) {
      newInstance.value = PrimitiveString.parsePrimitive(json.valueString, json._valueString);
    }
    if (json.valueTime !== undefined) {
      newInstance.value = PrimitiveTime.parsePrimitive(json.valueTime, json._valueTime);
    }
    if (json.valueUnsignedInt !== undefined) {
      newInstance.value = PrimitiveUnsignedInt.parsePrimitive(json.valueUnsignedInt, json._valueUnsignedInt);
    }
    if (json.valueUri !== undefined) {
      newInstance.value = PrimitiveUri.parsePrimitive(json.valueUri, json._valueUri);
    }
    if (json.valueUrl !== undefined) {
      newInstance.value = PrimitiveUrl.parsePrimitive(json.valueUrl, json._valueUrl);
    }
    if (json.valueUuid !== undefined) {
      newInstance.value = PrimitiveUuid.parsePrimitive(json.valueUuid, json._valueUuid);
    }
    if (json.valueAddress !== undefined) {
      newInstance.value = Address.parse(json.valueAddress);
    }
    if (json.valueAge !== undefined) {
      newInstance.value = Age.parse(json.valueAge);
    }
    if (json.valueAnnotation !== undefined) {
      newInstance.value = Annotation.parse(json.valueAnnotation);
    }
    if (json.valueAttachment !== undefined) {
      newInstance.value = Attachment.parse(json.valueAttachment);
    }
    if (json.valueCodeableConcept !== undefined) {
      newInstance.value = CodeableConcept.parse(json.valueCodeableConcept);
    }
    if (json.valueCoding !== undefined) {
      newInstance.value = Coding.parse(json.valueCoding);
    }
    if (json.valueContactPoint !== undefined) {
      newInstance.value = ContactPoint.parse(json.valueContactPoint);
    }
    if (json.valueCount !== undefined) {
      newInstance.value = Count.parse(json.valueCount);
    }
    if (json.valueDistance !== undefined) {
      newInstance.value = Distance.parse(json.valueDistance);
    }
    if (json.valueDuration !== undefined) {
      newInstance.value = Duration.parse(json.valueDuration);
    }
    if (json.valueHumanName !== undefined) {
      newInstance.value = HumanName.parse(json.valueHumanName);
    }
    if (json.valueIdentifier !== undefined) {
      newInstance.value = Identifier.parse(json.valueIdentifier);
    }
    if (json.valueMoney !== undefined) {
      newInstance.value = Money.parse(json.valueMoney);
    }
    if (json.valuePeriod !== undefined) {
      newInstance.value = Period.parse(json.valuePeriod);
    }
    if (json.valueQuantity !== undefined) {
      newInstance.value = Quantity.parse(json.valueQuantity);
    }
    if (json.valueRange !== undefined) {
      newInstance.value = Range.parse(json.valueRange);
    }
    if (json.valueRatio !== undefined) {
      newInstance.value = Ratio.parse(json.valueRatio);
    }
    if (json.valueReference !== undefined) {
      newInstance.value = Reference.parse(json.valueReference);
    }
    if (json.valueSampledData !== undefined) {
      newInstance.value = SampledData.parse(json.valueSampledData);
    }
    if (json.valueSignature !== undefined) {
      newInstance.value = Signature.parse(json.valueSignature);
    }
    if (json.valueTiming !== undefined) {
      newInstance.value = Timing.parse(json.valueTiming);
    }
    if (json.valueContactDetail !== undefined) {
      newInstance.value = ContactDetail.parse(json.valueContactDetail);
    }
    if (json.valueContributor !== undefined) {
      newInstance.value = Contributor.parse(json.valueContributor);
    }
    if (json.valueDataRequirement !== undefined) {
      newInstance.value = DataRequirement.parse(json.valueDataRequirement);
    }
    if (json.valueExpression !== undefined) {
      newInstance.value = Expression.parse(json.valueExpression);
    }
    if (json.valueParameterDefinition !== undefined) {
      newInstance.value = ParameterDefinition.parse(json.valueParameterDefinition);
    }
    if (json.valueRelatedArtifact !== undefined) {
      newInstance.value = RelatedArtifact.parse(json.valueRelatedArtifact);
    }
    if (json.valueTriggerDefinition !== undefined) {
      newInstance.value = TriggerDefinition.parse(json.valueTriggerDefinition);
    }
    if (json.valueUsageContext !== undefined) {
      newInstance.value = UsageContext.parse(json.valueUsageContext);
    }
    if (json.valueDosage !== undefined) {
      newInstance.value = Dosage.parse(json.valueDosage);
    }
    if (json.valueMeta !== undefined) {
      newInstance.value = Meta.parse(json.valueMeta);
    }
    if (json.resource !== undefined) {
      newInstance.resource = Resource.parse(json.resource);
    }
    if (json.part !== undefined) {
      newInstance.part = json.part.map((x) => ParametersParameter.parse(x));
    }
    return newInstance;
  }

  public static isParametersParameter(input?: unknown): input is ParametersParameter {
    const castInput = input as ParametersParameter;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "ParametersParameter";
  }

  public toJSON(): IParametersParameter {
    const result: IParametersParameter = super.toJSON();

    if (this.name) {
      result.name = this.name.value;
      result._name = Extension.serializePrimitiveExtension(this.name);
    }

    if (this.value && PrimitiveBase64Binary.isPrimitiveBase64Binary(this.value)) {
      result.valueBase64Binary = this.value.value;
      result._valueBase64Binary = Extension.serializePrimitiveExtension(this.value);
    }

    if (this.value && PrimitiveBoolean.isPrimitiveBoolean(this.value)) {
      result.valueBoolean = this.value.value;
      result._valueBoolean = Extension.serializePrimitiveExtension(this.value);
    }

    if (this.value && PrimitiveCanonical.isPrimitiveCanonical(this.value)) {
      result.valueCanonical = this.value.value;
      result._valueCanonical = Extension.serializePrimitiveExtension(this.value);
    }

    if (this.value && PrimitiveCode.isPrimitiveCode(this.value)) {
      result.valueCode = this.value.value;
      result._valueCode = Extension.serializePrimitiveExtension(this.value);
    }

    if (this.value && PrimitiveDate.isPrimitiveDate(this.value)) {
      result.valueDate = this.value.value;
      result._valueDate = Extension.serializePrimitiveExtension(this.value);
    }

    if (this.value && PrimitiveDateTime.isPrimitiveDateTime(this.value)) {
      result.valueDateTime = this.value.value;
      result._valueDateTime = Extension.serializePrimitiveExtension(this.value);
    }

    if (this.value && PrimitiveDecimal.isPrimitiveDecimal(this.value)) {
      result.valueDecimal = this.value.value;
      result._valueDecimal = Extension.serializePrimitiveExtension(this.value);
    }

    if (this.value && PrimitiveId.isPrimitiveId(this.value)) {
      result.valueId = this.value.value;
      result._valueId = Extension.serializePrimitiveExtension(this.value);
    }

    if (this.value && PrimitiveInstant.isPrimitiveInstant(this.value)) {
      result.valueInstant = this.value.value;
      result._valueInstant = Extension.serializePrimitiveExtension(this.value);
    }

    if (this.value && PrimitiveInteger.isPrimitiveInteger(this.value)) {
      result.valueInteger = this.value.value;
      result._valueInteger = Extension.serializePrimitiveExtension(this.value);
    }

    if (this.value && PrimitiveMarkdown.isPrimitiveMarkdown(this.value)) {
      result.valueMarkdown = this.value.value;
      result._valueMarkdown = Extension.serializePrimitiveExtension(this.value);
    }

    if (this.value && PrimitiveOid.isPrimitiveOid(this.value)) {
      result.valueOid = this.value.value;
      result._valueOid = Extension.serializePrimitiveExtension(this.value);
    }

    if (this.value && PrimitivePositiveInt.isPrimitivePositiveInt(this.value)) {
      result.valuePositiveInt = this.value.value;
      result._valuePositiveInt = Extension.serializePrimitiveExtension(this.value);
    }

    if (this.value && PrimitiveString.isPrimitiveString(this.value)) {
      result.valueString = this.value.value;
      result._valueString = Extension.serializePrimitiveExtension(this.value);
    }

    if (this.value && PrimitiveTime.isPrimitiveTime(this.value)) {
      result.valueTime = this.value.value;
      result._valueTime = Extension.serializePrimitiveExtension(this.value);
    }

    if (this.value && PrimitiveUnsignedInt.isPrimitiveUnsignedInt(this.value)) {
      result.valueUnsignedInt = this.value.value;
      result._valueUnsignedInt = Extension.serializePrimitiveExtension(this.value);
    }

    if (this.value && PrimitiveUri.isPrimitiveUri(this.value)) {
      result.valueUri = this.value.value;
      result._valueUri = Extension.serializePrimitiveExtension(this.value);
    }

    if (this.value && PrimitiveUrl.isPrimitiveUrl(this.value)) {
      result.valueUrl = this.value.value;
      result._valueUrl = Extension.serializePrimitiveExtension(this.value);
    }

    if (this.value && PrimitiveUuid.isPrimitiveUuid(this.value)) {
      result.valueUuid = this.value.value;
      result._valueUuid = Extension.serializePrimitiveExtension(this.value);
    }

    if (this.value && Address.isAddress(this.value)) {
      result.valueAddress = this.value.toJSON();
    }

    if (this.value && Age.isAge(this.value)) {
      result.valueAge = this.value.toJSON();
    }

    if (this.value && Annotation.isAnnotation(this.value)) {
      result.valueAnnotation = this.value.toJSON();
    }

    if (this.value && Attachment.isAttachment(this.value)) {
      result.valueAttachment = this.value.toJSON();
    }

    if (this.value && CodeableConcept.isCodeableConcept(this.value)) {
      result.valueCodeableConcept = this.value.toJSON();
    }

    if (this.value && Coding.isCoding(this.value)) {
      result.valueCoding = this.value.toJSON();
    }

    if (this.value && ContactPoint.isContactPoint(this.value)) {
      result.valueContactPoint = this.value.toJSON();
    }

    if (this.value && Count.isCount(this.value)) {
      result.valueCount = this.value.toJSON();
    }

    if (this.value && Distance.isDistance(this.value)) {
      result.valueDistance = this.value.toJSON();
    }

    if (this.value && Duration.isDuration(this.value)) {
      result.valueDuration = this.value.toJSON();
    }

    if (this.value && HumanName.isHumanName(this.value)) {
      result.valueHumanName = this.value.toJSON();
    }

    if (this.value && Identifier.isIdentifier(this.value)) {
      result.valueIdentifier = this.value.toJSON();
    }

    if (this.value && Money.isMoney(this.value)) {
      result.valueMoney = this.value.toJSON();
    }

    if (this.value && Period.isPeriod(this.value)) {
      result.valuePeriod = this.value.toJSON();
    }

    if (this.value && Quantity.isQuantity(this.value)) {
      result.valueQuantity = this.value.toJSON();
    }

    if (this.value && Range.isRange(this.value)) {
      result.valueRange = this.value.toJSON();
    }

    if (this.value && Ratio.isRatio(this.value)) {
      result.valueRatio = this.value.toJSON();
    }

    if (this.value && Reference.isReference(this.value)) {
      result.valueReference = this.value.toJSON();
    }

    if (this.value && SampledData.isSampledData(this.value)) {
      result.valueSampledData = this.value.toJSON();
    }

    if (this.value && Signature.isSignature(this.value)) {
      result.valueSignature = this.value.toJSON();
    }

    if (this.value && Timing.isTiming(this.value)) {
      result.valueTiming = this.value.toJSON();
    }

    if (this.value && ContactDetail.isContactDetail(this.value)) {
      result.valueContactDetail = this.value.toJSON();
    }

    if (this.value && Contributor.isContributor(this.value)) {
      result.valueContributor = this.value.toJSON();
    }

    if (this.value && DataRequirement.isDataRequirement(this.value)) {
      result.valueDataRequirement = this.value.toJSON();
    }

    if (this.value && Expression.isExpression(this.value)) {
      result.valueExpression = this.value.toJSON();
    }

    if (this.value && ParameterDefinition.isParameterDefinition(this.value)) {
      result.valueParameterDefinition = this.value.toJSON();
    }

    if (this.value && RelatedArtifact.isRelatedArtifact(this.value)) {
      result.valueRelatedArtifact = this.value.toJSON();
    }

    if (this.value && TriggerDefinition.isTriggerDefinition(this.value)) {
      result.valueTriggerDefinition = this.value.toJSON();
    }

    if (this.value && UsageContext.isUsageContext(this.value)) {
      result.valueUsageContext = this.value.toJSON();
    }

    if (this.value && Dosage.isDosage(this.value)) {
      result.valueDosage = this.value.toJSON();
    }

    if (this.value && Meta.isMeta(this.value)) {
      result.valueMeta = this.value.toJSON();
    }

    if (this.resource) {
      result.resource = this.resource.toJSON();
    }

    if (this.part) {
      result.part = this.part.map((x) => x.toJSON());
    }

    return result;
  }

  public clone(): ParametersParameter {
    return ParametersParameter.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "ParametersParameter";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
