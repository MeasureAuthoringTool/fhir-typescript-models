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
  ElementDefinitionBase,
  ElementDefinitionBinding,
  ElementDefinitionConstraint,
  ElementDefinitionExample,
  ElementDefinitionMapping,
  ElementDefinitionSlicing,
  ElementDefinitionType,
  Expression,
  Extension,
  FhirChoice,
  FhirField,
  FhirList,
  HumanName,
  Identifier,
  IElementDefinition,
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
  PropertyRepresentation,
  Quantity,
  Range,
  Ratio,
  Reference,
  RelatedArtifact,
  SampledData,
  Signature,
  Timing,
  TriggerDefinition,
  UsageContext,
  FhirType
} from "../internal";

@FhirType("ElementDefinition", "BackboneElement")
export class ElementDefinition extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "ElementDefinition";

  static readonly primaryCodePath: string | null = null;

  @FhirField("PrimitiveString")
  public path?: PrimitiveString;

  @FhirList("PropertyRepresentation")
  public representation?: Array<PropertyRepresentation>;

  @FhirField("PrimitiveString")
  public sliceName?: PrimitiveString;

  @FhirField("PrimitiveBoolean")
  public sliceIsConstraining?: PrimitiveBoolean;

  @FhirField("PrimitiveString")
  public label?: PrimitiveString;

  @FhirList("Coding")
  public code?: Array<Coding>;

  @FhirField("ElementDefinitionSlicing")
  public slicing?: ElementDefinitionSlicing;

  @FhirField("PrimitiveString")
  public short?: PrimitiveString;

  @FhirField("PrimitiveMarkdown")
  public definition?: PrimitiveMarkdown;

  @FhirField("PrimitiveMarkdown")
  public comment?: PrimitiveMarkdown;

  @FhirField("PrimitiveMarkdown")
  public requirements?: PrimitiveMarkdown;

  @FhirList("PrimitiveString")
  public alias?: Array<PrimitiveString>;

  @FhirField("PrimitiveUnsignedInt")
  public min?: PrimitiveUnsignedInt;

  @FhirField("PrimitiveString")
  public max?: PrimitiveString;

  @FhirField("ElementDefinitionBase")
  public base?: ElementDefinitionBase;

  @FhirField("PrimitiveUri")
  public contentReference?: PrimitiveUri;

  @FhirList("ElementDefinitionType")
  public type?: Array<ElementDefinitionType>;

  @FhirChoice("PrimitiveBase64Binary", "PrimitiveBoolean", "PrimitiveCanonical", "PrimitiveCode", "PrimitiveDate", "PrimitiveDateTime", "PrimitiveDecimal", "PrimitiveId", "PrimitiveInstant", "PrimitiveInteger", "PrimitiveMarkdown", "PrimitiveOid", "PrimitivePositiveInt", "PrimitiveString", "PrimitiveTime", "PrimitiveUnsignedInt", "PrimitiveUri", "PrimitiveUrl", "PrimitiveUuid", "Address", "Age", "Annotation", "Attachment", "CodeableConcept", "Coding", "ContactPoint", "Count", "Distance", "Duration", "HumanName", "Identifier", "Money", "Period", "Quantity", "Range", "Ratio", "Reference", "SampledData", "Signature", "Timing", "ContactDetail", "Contributor", "DataRequirement", "Expression", "ParameterDefinition", "RelatedArtifact", "TriggerDefinition", "UsageContext", "Dosage", "Meta")
  public defaultValue?: PrimitiveBase64Binary | PrimitiveBoolean | PrimitiveCanonical | PrimitiveCode | PrimitiveDate | PrimitiveDateTime | PrimitiveDecimal | PrimitiveId | PrimitiveInstant | PrimitiveInteger | PrimitiveMarkdown | PrimitiveOid | PrimitivePositiveInt | PrimitiveString | PrimitiveTime | PrimitiveUnsignedInt | PrimitiveUri | PrimitiveUrl | PrimitiveUuid | Address | Age | Annotation | Attachment | CodeableConcept | Coding | ContactPoint | Count | Distance | Duration | HumanName | Identifier | Money | Period | Quantity | Range | Ratio | Reference | SampledData | Signature | Timing | ContactDetail | Contributor | DataRequirement | Expression | ParameterDefinition | RelatedArtifact | TriggerDefinition | UsageContext | Dosage | Meta;

  @FhirField("PrimitiveMarkdown")
  public meaningWhenMissing?: PrimitiveMarkdown;

  @FhirField("PrimitiveString")
  public orderMeaning?: PrimitiveString;

  @FhirChoice("PrimitiveBase64Binary", "PrimitiveBoolean", "PrimitiveCanonical", "PrimitiveCode", "PrimitiveDate", "PrimitiveDateTime", "PrimitiveDecimal", "PrimitiveId", "PrimitiveInstant", "PrimitiveInteger", "PrimitiveMarkdown", "PrimitiveOid", "PrimitivePositiveInt", "PrimitiveString", "PrimitiveTime", "PrimitiveUnsignedInt", "PrimitiveUri", "PrimitiveUrl", "PrimitiveUuid", "Address", "Age", "Annotation", "Attachment", "CodeableConcept", "Coding", "ContactPoint", "Count", "Distance", "Duration", "HumanName", "Identifier", "Money", "Period", "Quantity", "Range", "Ratio", "Reference", "SampledData", "Signature", "Timing", "ContactDetail", "Contributor", "DataRequirement", "Expression", "ParameterDefinition", "RelatedArtifact", "TriggerDefinition", "UsageContext", "Dosage", "Meta")
  public fixed?: PrimitiveBase64Binary | PrimitiveBoolean | PrimitiveCanonical | PrimitiveCode | PrimitiveDate | PrimitiveDateTime | PrimitiveDecimal | PrimitiveId | PrimitiveInstant | PrimitiveInteger | PrimitiveMarkdown | PrimitiveOid | PrimitivePositiveInt | PrimitiveString | PrimitiveTime | PrimitiveUnsignedInt | PrimitiveUri | PrimitiveUrl | PrimitiveUuid | Address | Age | Annotation | Attachment | CodeableConcept | Coding | ContactPoint | Count | Distance | Duration | HumanName | Identifier | Money | Period | Quantity | Range | Ratio | Reference | SampledData | Signature | Timing | ContactDetail | Contributor | DataRequirement | Expression | ParameterDefinition | RelatedArtifact | TriggerDefinition | UsageContext | Dosage | Meta;

  @FhirChoice("PrimitiveBase64Binary", "PrimitiveBoolean", "PrimitiveCanonical", "PrimitiveCode", "PrimitiveDate", "PrimitiveDateTime", "PrimitiveDecimal", "PrimitiveId", "PrimitiveInstant", "PrimitiveInteger", "PrimitiveMarkdown", "PrimitiveOid", "PrimitivePositiveInt", "PrimitiveString", "PrimitiveTime", "PrimitiveUnsignedInt", "PrimitiveUri", "PrimitiveUrl", "PrimitiveUuid", "Address", "Age", "Annotation", "Attachment", "CodeableConcept", "Coding", "ContactPoint", "Count", "Distance", "Duration", "HumanName", "Identifier", "Money", "Period", "Quantity", "Range", "Ratio", "Reference", "SampledData", "Signature", "Timing", "ContactDetail", "Contributor", "DataRequirement", "Expression", "ParameterDefinition", "RelatedArtifact", "TriggerDefinition", "UsageContext", "Dosage", "Meta")
  public pattern?: PrimitiveBase64Binary | PrimitiveBoolean | PrimitiveCanonical | PrimitiveCode | PrimitiveDate | PrimitiveDateTime | PrimitiveDecimal | PrimitiveId | PrimitiveInstant | PrimitiveInteger | PrimitiveMarkdown | PrimitiveOid | PrimitivePositiveInt | PrimitiveString | PrimitiveTime | PrimitiveUnsignedInt | PrimitiveUri | PrimitiveUrl | PrimitiveUuid | Address | Age | Annotation | Attachment | CodeableConcept | Coding | ContactPoint | Count | Distance | Duration | HumanName | Identifier | Money | Period | Quantity | Range | Ratio | Reference | SampledData | Signature | Timing | ContactDetail | Contributor | DataRequirement | Expression | ParameterDefinition | RelatedArtifact | TriggerDefinition | UsageContext | Dosage | Meta;

  @FhirList("ElementDefinitionExample")
  public example?: Array<ElementDefinitionExample>;

  @FhirChoice("PrimitiveDate", "PrimitiveDateTime", "PrimitiveInstant", "PrimitiveTime", "PrimitiveDecimal", "PrimitiveInteger", "PrimitivePositiveInt", "PrimitiveUnsignedInt", "Quantity")
  public minValue?: PrimitiveDate | PrimitiveDateTime | PrimitiveInstant | PrimitiveTime | PrimitiveDecimal | PrimitiveInteger | PrimitivePositiveInt | PrimitiveUnsignedInt | Quantity;

  @FhirChoice("PrimitiveDate", "PrimitiveDateTime", "PrimitiveInstant", "PrimitiveTime", "PrimitiveDecimal", "PrimitiveInteger", "PrimitivePositiveInt", "PrimitiveUnsignedInt", "Quantity")
  public maxValue?: PrimitiveDate | PrimitiveDateTime | PrimitiveInstant | PrimitiveTime | PrimitiveDecimal | PrimitiveInteger | PrimitivePositiveInt | PrimitiveUnsignedInt | Quantity;

  @FhirField("PrimitiveInteger")
  public maxLength?: PrimitiveInteger;

  @FhirList("PrimitiveId")
  public condition?: Array<PrimitiveId>;

  @FhirList("ElementDefinitionConstraint")
  public constraint?: Array<ElementDefinitionConstraint>;

  @FhirField("PrimitiveBoolean")
  public mustSupport?: PrimitiveBoolean;

  @FhirField("PrimitiveBoolean")
  public isModifier?: PrimitiveBoolean;

  @FhirField("PrimitiveString")
  public isModifierReason?: PrimitiveString;

  @FhirField("PrimitiveBoolean")
  public isSummary?: PrimitiveBoolean;

  @FhirField("ElementDefinitionBinding")
  public binding?: ElementDefinitionBinding;

  @FhirList("ElementDefinitionMapping")
  public mapping?: Array<ElementDefinitionMapping>;

  public static parse(
    json: IElementDefinition,
    providedInstance: ElementDefinition = new ElementDefinition()
  ): ElementDefinition {
    const newInstance: ElementDefinition = BackboneElement.parse(json, providedInstance);
  
    if (json.path !== undefined) {
      newInstance.path = PrimitiveString.parsePrimitive(json.path, json._path);
    }
    if (json.representation !== undefined) {
      newInstance.representation = json.representation.map((x, i) => PropertyRepresentation.parsePrimitive(x, json._representation?.[i]));
    }
    if (json.sliceName !== undefined) {
      newInstance.sliceName = PrimitiveString.parsePrimitive(json.sliceName, json._sliceName);
    }
    if (json.sliceIsConstraining !== undefined) {
      newInstance.sliceIsConstraining = PrimitiveBoolean.parsePrimitive(json.sliceIsConstraining, json._sliceIsConstraining);
    }
    if (json.label !== undefined) {
      newInstance.label = PrimitiveString.parsePrimitive(json.label, json._label);
    }
    if (json.code !== undefined) {
      newInstance.code = json.code.map((x) => Coding.parse(x));
    }
    if (json.slicing !== undefined) {
      newInstance.slicing = ElementDefinitionSlicing.parse(json.slicing);
    }
    if (json.short !== undefined) {
      newInstance.short = PrimitiveString.parsePrimitive(json.short, json._short);
    }
    if (json.definition !== undefined) {
      newInstance.definition = PrimitiveMarkdown.parsePrimitive(json.definition, json._definition);
    }
    if (json.comment !== undefined) {
      newInstance.comment = PrimitiveMarkdown.parsePrimitive(json.comment, json._comment);
    }
    if (json.requirements !== undefined) {
      newInstance.requirements = PrimitiveMarkdown.parsePrimitive(json.requirements, json._requirements);
    }
    if (json.alias !== undefined) {
      newInstance.alias = json.alias.map((x, i) => PrimitiveString.parsePrimitive(x, json._alias?.[i]));
    }
    if (json.min !== undefined) {
      newInstance.min = PrimitiveUnsignedInt.parsePrimitive(json.min, json._min);
    }
    if (json.max !== undefined) {
      newInstance.max = PrimitiveString.parsePrimitive(json.max, json._max);
    }
    if (json.base !== undefined) {
      newInstance.base = ElementDefinitionBase.parse(json.base);
    }
    if (json.contentReference !== undefined) {
      newInstance.contentReference = PrimitiveUri.parsePrimitive(json.contentReference, json._contentReference);
    }
    if (json.type !== undefined) {
      newInstance.type = json.type.map((x) => ElementDefinitionType.parse(x));
    }
    if (json.defaultValueBase64Binary !== undefined) {
      newInstance.defaultValue = PrimitiveBase64Binary.parsePrimitive(json.defaultValueBase64Binary, json._defaultValueBase64Binary);
    }
    if (json.defaultValueBoolean !== undefined) {
      newInstance.defaultValue = PrimitiveBoolean.parsePrimitive(json.defaultValueBoolean, json._defaultValueBoolean);
    }
    if (json.defaultValueCanonical !== undefined) {
      newInstance.defaultValue = PrimitiveCanonical.parsePrimitive(json.defaultValueCanonical, json._defaultValueCanonical);
    }
    if (json.defaultValueCode !== undefined) {
      newInstance.defaultValue = PrimitiveCode.parsePrimitive(json.defaultValueCode, json._defaultValueCode);
    }
    if (json.defaultValueDate !== undefined) {
      newInstance.defaultValue = PrimitiveDate.parsePrimitive(json.defaultValueDate, json._defaultValueDate);
    }
    if (json.defaultValueDateTime !== undefined) {
      newInstance.defaultValue = PrimitiveDateTime.parsePrimitive(json.defaultValueDateTime, json._defaultValueDateTime);
    }
    if (json.defaultValueDecimal !== undefined) {
      newInstance.defaultValue = PrimitiveDecimal.parsePrimitive(json.defaultValueDecimal, json._defaultValueDecimal);
    }
    if (json.defaultValueId !== undefined) {
      newInstance.defaultValue = PrimitiveId.parsePrimitive(json.defaultValueId, json._defaultValueId);
    }
    if (json.defaultValueInstant !== undefined) {
      newInstance.defaultValue = PrimitiveInstant.parsePrimitive(json.defaultValueInstant, json._defaultValueInstant);
    }
    if (json.defaultValueInteger !== undefined) {
      newInstance.defaultValue = PrimitiveInteger.parsePrimitive(json.defaultValueInteger, json._defaultValueInteger);
    }
    if (json.defaultValueMarkdown !== undefined) {
      newInstance.defaultValue = PrimitiveMarkdown.parsePrimitive(json.defaultValueMarkdown, json._defaultValueMarkdown);
    }
    if (json.defaultValueOid !== undefined) {
      newInstance.defaultValue = PrimitiveOid.parsePrimitive(json.defaultValueOid, json._defaultValueOid);
    }
    if (json.defaultValuePositiveInt !== undefined) {
      newInstance.defaultValue = PrimitivePositiveInt.parsePrimitive(json.defaultValuePositiveInt, json._defaultValuePositiveInt);
    }
    if (json.defaultValueString !== undefined) {
      newInstance.defaultValue = PrimitiveString.parsePrimitive(json.defaultValueString, json._defaultValueString);
    }
    if (json.defaultValueTime !== undefined) {
      newInstance.defaultValue = PrimitiveTime.parsePrimitive(json.defaultValueTime, json._defaultValueTime);
    }
    if (json.defaultValueUnsignedInt !== undefined) {
      newInstance.defaultValue = PrimitiveUnsignedInt.parsePrimitive(json.defaultValueUnsignedInt, json._defaultValueUnsignedInt);
    }
    if (json.defaultValueUri !== undefined) {
      newInstance.defaultValue = PrimitiveUri.parsePrimitive(json.defaultValueUri, json._defaultValueUri);
    }
    if (json.defaultValueUrl !== undefined) {
      newInstance.defaultValue = PrimitiveUrl.parsePrimitive(json.defaultValueUrl, json._defaultValueUrl);
    }
    if (json.defaultValueUuid !== undefined) {
      newInstance.defaultValue = PrimitiveUuid.parsePrimitive(json.defaultValueUuid, json._defaultValueUuid);
    }
    if (json.defaultValueAddress !== undefined) {
      newInstance.defaultValue = Address.parse(json.defaultValueAddress);
    }
    if (json.defaultValueAge !== undefined) {
      newInstance.defaultValue = Age.parse(json.defaultValueAge);
    }
    if (json.defaultValueAnnotation !== undefined) {
      newInstance.defaultValue = Annotation.parse(json.defaultValueAnnotation);
    }
    if (json.defaultValueAttachment !== undefined) {
      newInstance.defaultValue = Attachment.parse(json.defaultValueAttachment);
    }
    if (json.defaultValueCodeableConcept !== undefined) {
      newInstance.defaultValue = CodeableConcept.parse(json.defaultValueCodeableConcept);
    }
    if (json.defaultValueCoding !== undefined) {
      newInstance.defaultValue = Coding.parse(json.defaultValueCoding);
    }
    if (json.defaultValueContactPoint !== undefined) {
      newInstance.defaultValue = ContactPoint.parse(json.defaultValueContactPoint);
    }
    if (json.defaultValueCount !== undefined) {
      newInstance.defaultValue = Count.parse(json.defaultValueCount);
    }
    if (json.defaultValueDistance !== undefined) {
      newInstance.defaultValue = Distance.parse(json.defaultValueDistance);
    }
    if (json.defaultValueDuration !== undefined) {
      newInstance.defaultValue = Duration.parse(json.defaultValueDuration);
    }
    if (json.defaultValueHumanName !== undefined) {
      newInstance.defaultValue = HumanName.parse(json.defaultValueHumanName);
    }
    if (json.defaultValueIdentifier !== undefined) {
      newInstance.defaultValue = Identifier.parse(json.defaultValueIdentifier);
    }
    if (json.defaultValueMoney !== undefined) {
      newInstance.defaultValue = Money.parse(json.defaultValueMoney);
    }
    if (json.defaultValuePeriod !== undefined) {
      newInstance.defaultValue = Period.parse(json.defaultValuePeriod);
    }
    if (json.defaultValueQuantity !== undefined) {
      newInstance.defaultValue = Quantity.parse(json.defaultValueQuantity);
    }
    if (json.defaultValueRange !== undefined) {
      newInstance.defaultValue = Range.parse(json.defaultValueRange);
    }
    if (json.defaultValueRatio !== undefined) {
      newInstance.defaultValue = Ratio.parse(json.defaultValueRatio);
    }
    if (json.defaultValueReference !== undefined) {
      newInstance.defaultValue = Reference.parse(json.defaultValueReference);
    }
    if (json.defaultValueSampledData !== undefined) {
      newInstance.defaultValue = SampledData.parse(json.defaultValueSampledData);
    }
    if (json.defaultValueSignature !== undefined) {
      newInstance.defaultValue = Signature.parse(json.defaultValueSignature);
    }
    if (json.defaultValueTiming !== undefined) {
      newInstance.defaultValue = Timing.parse(json.defaultValueTiming);
    }
    if (json.defaultValueContactDetail !== undefined) {
      newInstance.defaultValue = ContactDetail.parse(json.defaultValueContactDetail);
    }
    if (json.defaultValueContributor !== undefined) {
      newInstance.defaultValue = Contributor.parse(json.defaultValueContributor);
    }
    if (json.defaultValueDataRequirement !== undefined) {
      newInstance.defaultValue = DataRequirement.parse(json.defaultValueDataRequirement);
    }
    if (json.defaultValueExpression !== undefined) {
      newInstance.defaultValue = Expression.parse(json.defaultValueExpression);
    }
    if (json.defaultValueParameterDefinition !== undefined) {
      newInstance.defaultValue = ParameterDefinition.parse(json.defaultValueParameterDefinition);
    }
    if (json.defaultValueRelatedArtifact !== undefined) {
      newInstance.defaultValue = RelatedArtifact.parse(json.defaultValueRelatedArtifact);
    }
    if (json.defaultValueTriggerDefinition !== undefined) {
      newInstance.defaultValue = TriggerDefinition.parse(json.defaultValueTriggerDefinition);
    }
    if (json.defaultValueUsageContext !== undefined) {
      newInstance.defaultValue = UsageContext.parse(json.defaultValueUsageContext);
    }
    if (json.defaultValueDosage !== undefined) {
      newInstance.defaultValue = Dosage.parse(json.defaultValueDosage);
    }
    if (json.defaultValueMeta !== undefined) {
      newInstance.defaultValue = Meta.parse(json.defaultValueMeta);
    }
    if (json.meaningWhenMissing !== undefined) {
      newInstance.meaningWhenMissing = PrimitiveMarkdown.parsePrimitive(json.meaningWhenMissing, json._meaningWhenMissing);
    }
    if (json.orderMeaning !== undefined) {
      newInstance.orderMeaning = PrimitiveString.parsePrimitive(json.orderMeaning, json._orderMeaning);
    }
    if (json.fixedBase64Binary !== undefined) {
      newInstance.fixed = PrimitiveBase64Binary.parsePrimitive(json.fixedBase64Binary, json._fixedBase64Binary);
    }
    if (json.fixedBoolean !== undefined) {
      newInstance.fixed = PrimitiveBoolean.parsePrimitive(json.fixedBoolean, json._fixedBoolean);
    }
    if (json.fixedCanonical !== undefined) {
      newInstance.fixed = PrimitiveCanonical.parsePrimitive(json.fixedCanonical, json._fixedCanonical);
    }
    if (json.fixedCode !== undefined) {
      newInstance.fixed = PrimitiveCode.parsePrimitive(json.fixedCode, json._fixedCode);
    }
    if (json.fixedDate !== undefined) {
      newInstance.fixed = PrimitiveDate.parsePrimitive(json.fixedDate, json._fixedDate);
    }
    if (json.fixedDateTime !== undefined) {
      newInstance.fixed = PrimitiveDateTime.parsePrimitive(json.fixedDateTime, json._fixedDateTime);
    }
    if (json.fixedDecimal !== undefined) {
      newInstance.fixed = PrimitiveDecimal.parsePrimitive(json.fixedDecimal, json._fixedDecimal);
    }
    if (json.fixedId !== undefined) {
      newInstance.fixed = PrimitiveId.parsePrimitive(json.fixedId, json._fixedId);
    }
    if (json.fixedInstant !== undefined) {
      newInstance.fixed = PrimitiveInstant.parsePrimitive(json.fixedInstant, json._fixedInstant);
    }
    if (json.fixedInteger !== undefined) {
      newInstance.fixed = PrimitiveInteger.parsePrimitive(json.fixedInteger, json._fixedInteger);
    }
    if (json.fixedMarkdown !== undefined) {
      newInstance.fixed = PrimitiveMarkdown.parsePrimitive(json.fixedMarkdown, json._fixedMarkdown);
    }
    if (json.fixedOid !== undefined) {
      newInstance.fixed = PrimitiveOid.parsePrimitive(json.fixedOid, json._fixedOid);
    }
    if (json.fixedPositiveInt !== undefined) {
      newInstance.fixed = PrimitivePositiveInt.parsePrimitive(json.fixedPositiveInt, json._fixedPositiveInt);
    }
    if (json.fixedString !== undefined) {
      newInstance.fixed = PrimitiveString.parsePrimitive(json.fixedString, json._fixedString);
    }
    if (json.fixedTime !== undefined) {
      newInstance.fixed = PrimitiveTime.parsePrimitive(json.fixedTime, json._fixedTime);
    }
    if (json.fixedUnsignedInt !== undefined) {
      newInstance.fixed = PrimitiveUnsignedInt.parsePrimitive(json.fixedUnsignedInt, json._fixedUnsignedInt);
    }
    if (json.fixedUri !== undefined) {
      newInstance.fixed = PrimitiveUri.parsePrimitive(json.fixedUri, json._fixedUri);
    }
    if (json.fixedUrl !== undefined) {
      newInstance.fixed = PrimitiveUrl.parsePrimitive(json.fixedUrl, json._fixedUrl);
    }
    if (json.fixedUuid !== undefined) {
      newInstance.fixed = PrimitiveUuid.parsePrimitive(json.fixedUuid, json._fixedUuid);
    }
    if (json.fixedAddress !== undefined) {
      newInstance.fixed = Address.parse(json.fixedAddress);
    }
    if (json.fixedAge !== undefined) {
      newInstance.fixed = Age.parse(json.fixedAge);
    }
    if (json.fixedAnnotation !== undefined) {
      newInstance.fixed = Annotation.parse(json.fixedAnnotation);
    }
    if (json.fixedAttachment !== undefined) {
      newInstance.fixed = Attachment.parse(json.fixedAttachment);
    }
    if (json.fixedCodeableConcept !== undefined) {
      newInstance.fixed = CodeableConcept.parse(json.fixedCodeableConcept);
    }
    if (json.fixedCoding !== undefined) {
      newInstance.fixed = Coding.parse(json.fixedCoding);
    }
    if (json.fixedContactPoint !== undefined) {
      newInstance.fixed = ContactPoint.parse(json.fixedContactPoint);
    }
    if (json.fixedCount !== undefined) {
      newInstance.fixed = Count.parse(json.fixedCount);
    }
    if (json.fixedDistance !== undefined) {
      newInstance.fixed = Distance.parse(json.fixedDistance);
    }
    if (json.fixedDuration !== undefined) {
      newInstance.fixed = Duration.parse(json.fixedDuration);
    }
    if (json.fixedHumanName !== undefined) {
      newInstance.fixed = HumanName.parse(json.fixedHumanName);
    }
    if (json.fixedIdentifier !== undefined) {
      newInstance.fixed = Identifier.parse(json.fixedIdentifier);
    }
    if (json.fixedMoney !== undefined) {
      newInstance.fixed = Money.parse(json.fixedMoney);
    }
    if (json.fixedPeriod !== undefined) {
      newInstance.fixed = Period.parse(json.fixedPeriod);
    }
    if (json.fixedQuantity !== undefined) {
      newInstance.fixed = Quantity.parse(json.fixedQuantity);
    }
    if (json.fixedRange !== undefined) {
      newInstance.fixed = Range.parse(json.fixedRange);
    }
    if (json.fixedRatio !== undefined) {
      newInstance.fixed = Ratio.parse(json.fixedRatio);
    }
    if (json.fixedReference !== undefined) {
      newInstance.fixed = Reference.parse(json.fixedReference);
    }
    if (json.fixedSampledData !== undefined) {
      newInstance.fixed = SampledData.parse(json.fixedSampledData);
    }
    if (json.fixedSignature !== undefined) {
      newInstance.fixed = Signature.parse(json.fixedSignature);
    }
    if (json.fixedTiming !== undefined) {
      newInstance.fixed = Timing.parse(json.fixedTiming);
    }
    if (json.fixedContactDetail !== undefined) {
      newInstance.fixed = ContactDetail.parse(json.fixedContactDetail);
    }
    if (json.fixedContributor !== undefined) {
      newInstance.fixed = Contributor.parse(json.fixedContributor);
    }
    if (json.fixedDataRequirement !== undefined) {
      newInstance.fixed = DataRequirement.parse(json.fixedDataRequirement);
    }
    if (json.fixedExpression !== undefined) {
      newInstance.fixed = Expression.parse(json.fixedExpression);
    }
    if (json.fixedParameterDefinition !== undefined) {
      newInstance.fixed = ParameterDefinition.parse(json.fixedParameterDefinition);
    }
    if (json.fixedRelatedArtifact !== undefined) {
      newInstance.fixed = RelatedArtifact.parse(json.fixedRelatedArtifact);
    }
    if (json.fixedTriggerDefinition !== undefined) {
      newInstance.fixed = TriggerDefinition.parse(json.fixedTriggerDefinition);
    }
    if (json.fixedUsageContext !== undefined) {
      newInstance.fixed = UsageContext.parse(json.fixedUsageContext);
    }
    if (json.fixedDosage !== undefined) {
      newInstance.fixed = Dosage.parse(json.fixedDosage);
    }
    if (json.fixedMeta !== undefined) {
      newInstance.fixed = Meta.parse(json.fixedMeta);
    }
    if (json.patternBase64Binary !== undefined) {
      newInstance.pattern = PrimitiveBase64Binary.parsePrimitive(json.patternBase64Binary, json._patternBase64Binary);
    }
    if (json.patternBoolean !== undefined) {
      newInstance.pattern = PrimitiveBoolean.parsePrimitive(json.patternBoolean, json._patternBoolean);
    }
    if (json.patternCanonical !== undefined) {
      newInstance.pattern = PrimitiveCanonical.parsePrimitive(json.patternCanonical, json._patternCanonical);
    }
    if (json.patternCode !== undefined) {
      newInstance.pattern = PrimitiveCode.parsePrimitive(json.patternCode, json._patternCode);
    }
    if (json.patternDate !== undefined) {
      newInstance.pattern = PrimitiveDate.parsePrimitive(json.patternDate, json._patternDate);
    }
    if (json.patternDateTime !== undefined) {
      newInstance.pattern = PrimitiveDateTime.parsePrimitive(json.patternDateTime, json._patternDateTime);
    }
    if (json.patternDecimal !== undefined) {
      newInstance.pattern = PrimitiveDecimal.parsePrimitive(json.patternDecimal, json._patternDecimal);
    }
    if (json.patternId !== undefined) {
      newInstance.pattern = PrimitiveId.parsePrimitive(json.patternId, json._patternId);
    }
    if (json.patternInstant !== undefined) {
      newInstance.pattern = PrimitiveInstant.parsePrimitive(json.patternInstant, json._patternInstant);
    }
    if (json.patternInteger !== undefined) {
      newInstance.pattern = PrimitiveInteger.parsePrimitive(json.patternInteger, json._patternInteger);
    }
    if (json.patternMarkdown !== undefined) {
      newInstance.pattern = PrimitiveMarkdown.parsePrimitive(json.patternMarkdown, json._patternMarkdown);
    }
    if (json.patternOid !== undefined) {
      newInstance.pattern = PrimitiveOid.parsePrimitive(json.patternOid, json._patternOid);
    }
    if (json.patternPositiveInt !== undefined) {
      newInstance.pattern = PrimitivePositiveInt.parsePrimitive(json.patternPositiveInt, json._patternPositiveInt);
    }
    if (json.patternString !== undefined) {
      newInstance.pattern = PrimitiveString.parsePrimitive(json.patternString, json._patternString);
    }
    if (json.patternTime !== undefined) {
      newInstance.pattern = PrimitiveTime.parsePrimitive(json.patternTime, json._patternTime);
    }
    if (json.patternUnsignedInt !== undefined) {
      newInstance.pattern = PrimitiveUnsignedInt.parsePrimitive(json.patternUnsignedInt, json._patternUnsignedInt);
    }
    if (json.patternUri !== undefined) {
      newInstance.pattern = PrimitiveUri.parsePrimitive(json.patternUri, json._patternUri);
    }
    if (json.patternUrl !== undefined) {
      newInstance.pattern = PrimitiveUrl.parsePrimitive(json.patternUrl, json._patternUrl);
    }
    if (json.patternUuid !== undefined) {
      newInstance.pattern = PrimitiveUuid.parsePrimitive(json.patternUuid, json._patternUuid);
    }
    if (json.patternAddress !== undefined) {
      newInstance.pattern = Address.parse(json.patternAddress);
    }
    if (json.patternAge !== undefined) {
      newInstance.pattern = Age.parse(json.patternAge);
    }
    if (json.patternAnnotation !== undefined) {
      newInstance.pattern = Annotation.parse(json.patternAnnotation);
    }
    if (json.patternAttachment !== undefined) {
      newInstance.pattern = Attachment.parse(json.patternAttachment);
    }
    if (json.patternCodeableConcept !== undefined) {
      newInstance.pattern = CodeableConcept.parse(json.patternCodeableConcept);
    }
    if (json.patternCoding !== undefined) {
      newInstance.pattern = Coding.parse(json.patternCoding);
    }
    if (json.patternContactPoint !== undefined) {
      newInstance.pattern = ContactPoint.parse(json.patternContactPoint);
    }
    if (json.patternCount !== undefined) {
      newInstance.pattern = Count.parse(json.patternCount);
    }
    if (json.patternDistance !== undefined) {
      newInstance.pattern = Distance.parse(json.patternDistance);
    }
    if (json.patternDuration !== undefined) {
      newInstance.pattern = Duration.parse(json.patternDuration);
    }
    if (json.patternHumanName !== undefined) {
      newInstance.pattern = HumanName.parse(json.patternHumanName);
    }
    if (json.patternIdentifier !== undefined) {
      newInstance.pattern = Identifier.parse(json.patternIdentifier);
    }
    if (json.patternMoney !== undefined) {
      newInstance.pattern = Money.parse(json.patternMoney);
    }
    if (json.patternPeriod !== undefined) {
      newInstance.pattern = Period.parse(json.patternPeriod);
    }
    if (json.patternQuantity !== undefined) {
      newInstance.pattern = Quantity.parse(json.patternQuantity);
    }
    if (json.patternRange !== undefined) {
      newInstance.pattern = Range.parse(json.patternRange);
    }
    if (json.patternRatio !== undefined) {
      newInstance.pattern = Ratio.parse(json.patternRatio);
    }
    if (json.patternReference !== undefined) {
      newInstance.pattern = Reference.parse(json.patternReference);
    }
    if (json.patternSampledData !== undefined) {
      newInstance.pattern = SampledData.parse(json.patternSampledData);
    }
    if (json.patternSignature !== undefined) {
      newInstance.pattern = Signature.parse(json.patternSignature);
    }
    if (json.patternTiming !== undefined) {
      newInstance.pattern = Timing.parse(json.patternTiming);
    }
    if (json.patternContactDetail !== undefined) {
      newInstance.pattern = ContactDetail.parse(json.patternContactDetail);
    }
    if (json.patternContributor !== undefined) {
      newInstance.pattern = Contributor.parse(json.patternContributor);
    }
    if (json.patternDataRequirement !== undefined) {
      newInstance.pattern = DataRequirement.parse(json.patternDataRequirement);
    }
    if (json.patternExpression !== undefined) {
      newInstance.pattern = Expression.parse(json.patternExpression);
    }
    if (json.patternParameterDefinition !== undefined) {
      newInstance.pattern = ParameterDefinition.parse(json.patternParameterDefinition);
    }
    if (json.patternRelatedArtifact !== undefined) {
      newInstance.pattern = RelatedArtifact.parse(json.patternRelatedArtifact);
    }
    if (json.patternTriggerDefinition !== undefined) {
      newInstance.pattern = TriggerDefinition.parse(json.patternTriggerDefinition);
    }
    if (json.patternUsageContext !== undefined) {
      newInstance.pattern = UsageContext.parse(json.patternUsageContext);
    }
    if (json.patternDosage !== undefined) {
      newInstance.pattern = Dosage.parse(json.patternDosage);
    }
    if (json.patternMeta !== undefined) {
      newInstance.pattern = Meta.parse(json.patternMeta);
    }
    if (json.example !== undefined) {
      newInstance.example = json.example.map((x) => ElementDefinitionExample.parse(x));
    }
    if (json.minValueDate !== undefined) {
      newInstance.minValue = PrimitiveDate.parsePrimitive(json.minValueDate, json._minValueDate);
    }
    if (json.minValueDateTime !== undefined) {
      newInstance.minValue = PrimitiveDateTime.parsePrimitive(json.minValueDateTime, json._minValueDateTime);
    }
    if (json.minValueInstant !== undefined) {
      newInstance.minValue = PrimitiveInstant.parsePrimitive(json.minValueInstant, json._minValueInstant);
    }
    if (json.minValueTime !== undefined) {
      newInstance.minValue = PrimitiveTime.parsePrimitive(json.minValueTime, json._minValueTime);
    }
    if (json.minValueDecimal !== undefined) {
      newInstance.minValue = PrimitiveDecimal.parsePrimitive(json.minValueDecimal, json._minValueDecimal);
    }
    if (json.minValueInteger !== undefined) {
      newInstance.minValue = PrimitiveInteger.parsePrimitive(json.minValueInteger, json._minValueInteger);
    }
    if (json.minValuePositiveInt !== undefined) {
      newInstance.minValue = PrimitivePositiveInt.parsePrimitive(json.minValuePositiveInt, json._minValuePositiveInt);
    }
    if (json.minValueUnsignedInt !== undefined) {
      newInstance.minValue = PrimitiveUnsignedInt.parsePrimitive(json.minValueUnsignedInt, json._minValueUnsignedInt);
    }
    if (json.minValueQuantity !== undefined) {
      newInstance.minValue = Quantity.parse(json.minValueQuantity);
    }
    if (json.maxValueDate !== undefined) {
      newInstance.maxValue = PrimitiveDate.parsePrimitive(json.maxValueDate, json._maxValueDate);
    }
    if (json.maxValueDateTime !== undefined) {
      newInstance.maxValue = PrimitiveDateTime.parsePrimitive(json.maxValueDateTime, json._maxValueDateTime);
    }
    if (json.maxValueInstant !== undefined) {
      newInstance.maxValue = PrimitiveInstant.parsePrimitive(json.maxValueInstant, json._maxValueInstant);
    }
    if (json.maxValueTime !== undefined) {
      newInstance.maxValue = PrimitiveTime.parsePrimitive(json.maxValueTime, json._maxValueTime);
    }
    if (json.maxValueDecimal !== undefined) {
      newInstance.maxValue = PrimitiveDecimal.parsePrimitive(json.maxValueDecimal, json._maxValueDecimal);
    }
    if (json.maxValueInteger !== undefined) {
      newInstance.maxValue = PrimitiveInteger.parsePrimitive(json.maxValueInteger, json._maxValueInteger);
    }
    if (json.maxValuePositiveInt !== undefined) {
      newInstance.maxValue = PrimitivePositiveInt.parsePrimitive(json.maxValuePositiveInt, json._maxValuePositiveInt);
    }
    if (json.maxValueUnsignedInt !== undefined) {
      newInstance.maxValue = PrimitiveUnsignedInt.parsePrimitive(json.maxValueUnsignedInt, json._maxValueUnsignedInt);
    }
    if (json.maxValueQuantity !== undefined) {
      newInstance.maxValue = Quantity.parse(json.maxValueQuantity);
    }
    if (json.maxLength !== undefined) {
      newInstance.maxLength = PrimitiveInteger.parsePrimitive(json.maxLength, json._maxLength);
    }
    if (json.condition !== undefined) {
      newInstance.condition = json.condition.map((x, i) => PrimitiveId.parsePrimitive(x, json._condition?.[i]));
    }
    if (json.constraint !== undefined) {
      newInstance.constraint = json.constraint.map((x) => ElementDefinitionConstraint.parse(x));
    }
    if (json.mustSupport !== undefined) {
      newInstance.mustSupport = PrimitiveBoolean.parsePrimitive(json.mustSupport, json._mustSupport);
    }
    if (json.isModifier !== undefined) {
      newInstance.isModifier = PrimitiveBoolean.parsePrimitive(json.isModifier, json._isModifier);
    }
    if (json.isModifierReason !== undefined) {
      newInstance.isModifierReason = PrimitiveString.parsePrimitive(json.isModifierReason, json._isModifierReason);
    }
    if (json.isSummary !== undefined) {
      newInstance.isSummary = PrimitiveBoolean.parsePrimitive(json.isSummary, json._isSummary);
    }
    if (json.binding !== undefined) {
      newInstance.binding = ElementDefinitionBinding.parse(json.binding);
    }
    if (json.mapping !== undefined) {
      newInstance.mapping = json.mapping.map((x) => ElementDefinitionMapping.parse(x));
    }
    return newInstance;
  }

  public static isElementDefinition(input?: unknown): input is ElementDefinition {
    const castInput = input as ElementDefinition;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "ElementDefinition";
  }

  public toJSON(): IElementDefinition {
    const result: IElementDefinition = super.toJSON();

    if (this.path) {
      result.path = this.path.value;
      result._path = Extension.serializePrimitiveExtension(this.path);
    }

    if (this.representation) {
      result.representation = this.representation.filter(x => !!x).map(x => x.value) as typeof result.representation;
      result._representation = Extension.serializePrimitiveExtensionArray(this.representation);
    }

    if (this.sliceName) {
      result.sliceName = this.sliceName.value;
      result._sliceName = Extension.serializePrimitiveExtension(this.sliceName);
    }

    if (this.sliceIsConstraining) {
      result.sliceIsConstraining = this.sliceIsConstraining.value;
      result._sliceIsConstraining = Extension.serializePrimitiveExtension(this.sliceIsConstraining);
    }

    if (this.label) {
      result.label = this.label.value;
      result._label = Extension.serializePrimitiveExtension(this.label);
    }

    if (this.code) {
      result.code = this.code.map((x) => x.toJSON());
    }

    if (this.slicing) {
      result.slicing = this.slicing.toJSON();
    }

    if (this.short) {
      result.short = this.short.value;
      result._short = Extension.serializePrimitiveExtension(this.short);
    }

    if (this.definition) {
      result.definition = this.definition.value;
      result._definition = Extension.serializePrimitiveExtension(this.definition);
    }

    if (this.comment) {
      result.comment = this.comment.value;
      result._comment = Extension.serializePrimitiveExtension(this.comment);
    }

    if (this.requirements) {
      result.requirements = this.requirements.value;
      result._requirements = Extension.serializePrimitiveExtension(this.requirements);
    }

    if (this.alias) {
      result.alias = this.alias.filter(x => !!x).map(x => x.value) as typeof result.alias;
      result._alias = Extension.serializePrimitiveExtensionArray(this.alias);
    }

    if (this.min) {
      result.min = this.min.value;
      result._min = Extension.serializePrimitiveExtension(this.min);
    }

    if (this.max) {
      result.max = this.max.value;
      result._max = Extension.serializePrimitiveExtension(this.max);
    }

    if (this.base) {
      result.base = this.base.toJSON();
    }

    if (this.contentReference) {
      result.contentReference = this.contentReference.value;
      result._contentReference = Extension.serializePrimitiveExtension(this.contentReference);
    }

    if (this.type) {
      result.type = this.type.map((x) => x.toJSON());
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

    if (this.meaningWhenMissing) {
      result.meaningWhenMissing = this.meaningWhenMissing.value;
      result._meaningWhenMissing = Extension.serializePrimitiveExtension(this.meaningWhenMissing);
    }

    if (this.orderMeaning) {
      result.orderMeaning = this.orderMeaning.value;
      result._orderMeaning = Extension.serializePrimitiveExtension(this.orderMeaning);
    }

    if (this.fixed && PrimitiveBase64Binary.isPrimitiveBase64Binary(this.fixed)) {
      result.fixedBase64Binary = this.fixed.value;
      result._fixedBase64Binary = Extension.serializePrimitiveExtension(this.fixed);
    }

    if (this.fixed && PrimitiveBoolean.isPrimitiveBoolean(this.fixed)) {
      result.fixedBoolean = this.fixed.value;
      result._fixedBoolean = Extension.serializePrimitiveExtension(this.fixed);
    }

    if (this.fixed && PrimitiveCanonical.isPrimitiveCanonical(this.fixed)) {
      result.fixedCanonical = this.fixed.value;
      result._fixedCanonical = Extension.serializePrimitiveExtension(this.fixed);
    }

    if (this.fixed && PrimitiveCode.isPrimitiveCode(this.fixed)) {
      result.fixedCode = this.fixed.value;
      result._fixedCode = Extension.serializePrimitiveExtension(this.fixed);
    }

    if (this.fixed && PrimitiveDate.isPrimitiveDate(this.fixed)) {
      result.fixedDate = this.fixed.value;
      result._fixedDate = Extension.serializePrimitiveExtension(this.fixed);
    }

    if (this.fixed && PrimitiveDateTime.isPrimitiveDateTime(this.fixed)) {
      result.fixedDateTime = this.fixed.value;
      result._fixedDateTime = Extension.serializePrimitiveExtension(this.fixed);
    }

    if (this.fixed && PrimitiveDecimal.isPrimitiveDecimal(this.fixed)) {
      result.fixedDecimal = this.fixed.value;
      result._fixedDecimal = Extension.serializePrimitiveExtension(this.fixed);
    }

    if (this.fixed && PrimitiveId.isPrimitiveId(this.fixed)) {
      result.fixedId = this.fixed.value;
      result._fixedId = Extension.serializePrimitiveExtension(this.fixed);
    }

    if (this.fixed && PrimitiveInstant.isPrimitiveInstant(this.fixed)) {
      result.fixedInstant = this.fixed.value;
      result._fixedInstant = Extension.serializePrimitiveExtension(this.fixed);
    }

    if (this.fixed && PrimitiveInteger.isPrimitiveInteger(this.fixed)) {
      result.fixedInteger = this.fixed.value;
      result._fixedInteger = Extension.serializePrimitiveExtension(this.fixed);
    }

    if (this.fixed && PrimitiveMarkdown.isPrimitiveMarkdown(this.fixed)) {
      result.fixedMarkdown = this.fixed.value;
      result._fixedMarkdown = Extension.serializePrimitiveExtension(this.fixed);
    }

    if (this.fixed && PrimitiveOid.isPrimitiveOid(this.fixed)) {
      result.fixedOid = this.fixed.value;
      result._fixedOid = Extension.serializePrimitiveExtension(this.fixed);
    }

    if (this.fixed && PrimitivePositiveInt.isPrimitivePositiveInt(this.fixed)) {
      result.fixedPositiveInt = this.fixed.value;
      result._fixedPositiveInt = Extension.serializePrimitiveExtension(this.fixed);
    }

    if (this.fixed && PrimitiveString.isPrimitiveString(this.fixed)) {
      result.fixedString = this.fixed.value;
      result._fixedString = Extension.serializePrimitiveExtension(this.fixed);
    }

    if (this.fixed && PrimitiveTime.isPrimitiveTime(this.fixed)) {
      result.fixedTime = this.fixed.value;
      result._fixedTime = Extension.serializePrimitiveExtension(this.fixed);
    }

    if (this.fixed && PrimitiveUnsignedInt.isPrimitiveUnsignedInt(this.fixed)) {
      result.fixedUnsignedInt = this.fixed.value;
      result._fixedUnsignedInt = Extension.serializePrimitiveExtension(this.fixed);
    }

    if (this.fixed && PrimitiveUri.isPrimitiveUri(this.fixed)) {
      result.fixedUri = this.fixed.value;
      result._fixedUri = Extension.serializePrimitiveExtension(this.fixed);
    }

    if (this.fixed && PrimitiveUrl.isPrimitiveUrl(this.fixed)) {
      result.fixedUrl = this.fixed.value;
      result._fixedUrl = Extension.serializePrimitiveExtension(this.fixed);
    }

    if (this.fixed && PrimitiveUuid.isPrimitiveUuid(this.fixed)) {
      result.fixedUuid = this.fixed.value;
      result._fixedUuid = Extension.serializePrimitiveExtension(this.fixed);
    }

    if (this.fixed && Address.isAddress(this.fixed)) {
      result.fixedAddress = this.fixed.toJSON();
    }

    if (this.fixed && Age.isAge(this.fixed)) {
      result.fixedAge = this.fixed.toJSON();
    }

    if (this.fixed && Annotation.isAnnotation(this.fixed)) {
      result.fixedAnnotation = this.fixed.toJSON();
    }

    if (this.fixed && Attachment.isAttachment(this.fixed)) {
      result.fixedAttachment = this.fixed.toJSON();
    }

    if (this.fixed && CodeableConcept.isCodeableConcept(this.fixed)) {
      result.fixedCodeableConcept = this.fixed.toJSON();
    }

    if (this.fixed && Coding.isCoding(this.fixed)) {
      result.fixedCoding = this.fixed.toJSON();
    }

    if (this.fixed && ContactPoint.isContactPoint(this.fixed)) {
      result.fixedContactPoint = this.fixed.toJSON();
    }

    if (this.fixed && Count.isCount(this.fixed)) {
      result.fixedCount = this.fixed.toJSON();
    }

    if (this.fixed && Distance.isDistance(this.fixed)) {
      result.fixedDistance = this.fixed.toJSON();
    }

    if (this.fixed && Duration.isDuration(this.fixed)) {
      result.fixedDuration = this.fixed.toJSON();
    }

    if (this.fixed && HumanName.isHumanName(this.fixed)) {
      result.fixedHumanName = this.fixed.toJSON();
    }

    if (this.fixed && Identifier.isIdentifier(this.fixed)) {
      result.fixedIdentifier = this.fixed.toJSON();
    }

    if (this.fixed && Money.isMoney(this.fixed)) {
      result.fixedMoney = this.fixed.toJSON();
    }

    if (this.fixed && Period.isPeriod(this.fixed)) {
      result.fixedPeriod = this.fixed.toJSON();
    }

    if (this.fixed && Quantity.isQuantity(this.fixed)) {
      result.fixedQuantity = this.fixed.toJSON();
    }

    if (this.fixed && Range.isRange(this.fixed)) {
      result.fixedRange = this.fixed.toJSON();
    }

    if (this.fixed && Ratio.isRatio(this.fixed)) {
      result.fixedRatio = this.fixed.toJSON();
    }

    if (this.fixed && Reference.isReference(this.fixed)) {
      result.fixedReference = this.fixed.toJSON();
    }

    if (this.fixed && SampledData.isSampledData(this.fixed)) {
      result.fixedSampledData = this.fixed.toJSON();
    }

    if (this.fixed && Signature.isSignature(this.fixed)) {
      result.fixedSignature = this.fixed.toJSON();
    }

    if (this.fixed && Timing.isTiming(this.fixed)) {
      result.fixedTiming = this.fixed.toJSON();
    }

    if (this.fixed && ContactDetail.isContactDetail(this.fixed)) {
      result.fixedContactDetail = this.fixed.toJSON();
    }

    if (this.fixed && Contributor.isContributor(this.fixed)) {
      result.fixedContributor = this.fixed.toJSON();
    }

    if (this.fixed && DataRequirement.isDataRequirement(this.fixed)) {
      result.fixedDataRequirement = this.fixed.toJSON();
    }

    if (this.fixed && Expression.isExpression(this.fixed)) {
      result.fixedExpression = this.fixed.toJSON();
    }

    if (this.fixed && ParameterDefinition.isParameterDefinition(this.fixed)) {
      result.fixedParameterDefinition = this.fixed.toJSON();
    }

    if (this.fixed && RelatedArtifact.isRelatedArtifact(this.fixed)) {
      result.fixedRelatedArtifact = this.fixed.toJSON();
    }

    if (this.fixed && TriggerDefinition.isTriggerDefinition(this.fixed)) {
      result.fixedTriggerDefinition = this.fixed.toJSON();
    }

    if (this.fixed && UsageContext.isUsageContext(this.fixed)) {
      result.fixedUsageContext = this.fixed.toJSON();
    }

    if (this.fixed && Dosage.isDosage(this.fixed)) {
      result.fixedDosage = this.fixed.toJSON();
    }

    if (this.fixed && Meta.isMeta(this.fixed)) {
      result.fixedMeta = this.fixed.toJSON();
    }

    if (this.pattern && PrimitiveBase64Binary.isPrimitiveBase64Binary(this.pattern)) {
      result.patternBase64Binary = this.pattern.value;
      result._patternBase64Binary = Extension.serializePrimitiveExtension(this.pattern);
    }

    if (this.pattern && PrimitiveBoolean.isPrimitiveBoolean(this.pattern)) {
      result.patternBoolean = this.pattern.value;
      result._patternBoolean = Extension.serializePrimitiveExtension(this.pattern);
    }

    if (this.pattern && PrimitiveCanonical.isPrimitiveCanonical(this.pattern)) {
      result.patternCanonical = this.pattern.value;
      result._patternCanonical = Extension.serializePrimitiveExtension(this.pattern);
    }

    if (this.pattern && PrimitiveCode.isPrimitiveCode(this.pattern)) {
      result.patternCode = this.pattern.value;
      result._patternCode = Extension.serializePrimitiveExtension(this.pattern);
    }

    if (this.pattern && PrimitiveDate.isPrimitiveDate(this.pattern)) {
      result.patternDate = this.pattern.value;
      result._patternDate = Extension.serializePrimitiveExtension(this.pattern);
    }

    if (this.pattern && PrimitiveDateTime.isPrimitiveDateTime(this.pattern)) {
      result.patternDateTime = this.pattern.value;
      result._patternDateTime = Extension.serializePrimitiveExtension(this.pattern);
    }

    if (this.pattern && PrimitiveDecimal.isPrimitiveDecimal(this.pattern)) {
      result.patternDecimal = this.pattern.value;
      result._patternDecimal = Extension.serializePrimitiveExtension(this.pattern);
    }

    if (this.pattern && PrimitiveId.isPrimitiveId(this.pattern)) {
      result.patternId = this.pattern.value;
      result._patternId = Extension.serializePrimitiveExtension(this.pattern);
    }

    if (this.pattern && PrimitiveInstant.isPrimitiveInstant(this.pattern)) {
      result.patternInstant = this.pattern.value;
      result._patternInstant = Extension.serializePrimitiveExtension(this.pattern);
    }

    if (this.pattern && PrimitiveInteger.isPrimitiveInteger(this.pattern)) {
      result.patternInteger = this.pattern.value;
      result._patternInteger = Extension.serializePrimitiveExtension(this.pattern);
    }

    if (this.pattern && PrimitiveMarkdown.isPrimitiveMarkdown(this.pattern)) {
      result.patternMarkdown = this.pattern.value;
      result._patternMarkdown = Extension.serializePrimitiveExtension(this.pattern);
    }

    if (this.pattern && PrimitiveOid.isPrimitiveOid(this.pattern)) {
      result.patternOid = this.pattern.value;
      result._patternOid = Extension.serializePrimitiveExtension(this.pattern);
    }

    if (this.pattern && PrimitivePositiveInt.isPrimitivePositiveInt(this.pattern)) {
      result.patternPositiveInt = this.pattern.value;
      result._patternPositiveInt = Extension.serializePrimitiveExtension(this.pattern);
    }

    if (this.pattern && PrimitiveString.isPrimitiveString(this.pattern)) {
      result.patternString = this.pattern.value;
      result._patternString = Extension.serializePrimitiveExtension(this.pattern);
    }

    if (this.pattern && PrimitiveTime.isPrimitiveTime(this.pattern)) {
      result.patternTime = this.pattern.value;
      result._patternTime = Extension.serializePrimitiveExtension(this.pattern);
    }

    if (this.pattern && PrimitiveUnsignedInt.isPrimitiveUnsignedInt(this.pattern)) {
      result.patternUnsignedInt = this.pattern.value;
      result._patternUnsignedInt = Extension.serializePrimitiveExtension(this.pattern);
    }

    if (this.pattern && PrimitiveUri.isPrimitiveUri(this.pattern)) {
      result.patternUri = this.pattern.value;
      result._patternUri = Extension.serializePrimitiveExtension(this.pattern);
    }

    if (this.pattern && PrimitiveUrl.isPrimitiveUrl(this.pattern)) {
      result.patternUrl = this.pattern.value;
      result._patternUrl = Extension.serializePrimitiveExtension(this.pattern);
    }

    if (this.pattern && PrimitiveUuid.isPrimitiveUuid(this.pattern)) {
      result.patternUuid = this.pattern.value;
      result._patternUuid = Extension.serializePrimitiveExtension(this.pattern);
    }

    if (this.pattern && Address.isAddress(this.pattern)) {
      result.patternAddress = this.pattern.toJSON();
    }

    if (this.pattern && Age.isAge(this.pattern)) {
      result.patternAge = this.pattern.toJSON();
    }

    if (this.pattern && Annotation.isAnnotation(this.pattern)) {
      result.patternAnnotation = this.pattern.toJSON();
    }

    if (this.pattern && Attachment.isAttachment(this.pattern)) {
      result.patternAttachment = this.pattern.toJSON();
    }

    if (this.pattern && CodeableConcept.isCodeableConcept(this.pattern)) {
      result.patternCodeableConcept = this.pattern.toJSON();
    }

    if (this.pattern && Coding.isCoding(this.pattern)) {
      result.patternCoding = this.pattern.toJSON();
    }

    if (this.pattern && ContactPoint.isContactPoint(this.pattern)) {
      result.patternContactPoint = this.pattern.toJSON();
    }

    if (this.pattern && Count.isCount(this.pattern)) {
      result.patternCount = this.pattern.toJSON();
    }

    if (this.pattern && Distance.isDistance(this.pattern)) {
      result.patternDistance = this.pattern.toJSON();
    }

    if (this.pattern && Duration.isDuration(this.pattern)) {
      result.patternDuration = this.pattern.toJSON();
    }

    if (this.pattern && HumanName.isHumanName(this.pattern)) {
      result.patternHumanName = this.pattern.toJSON();
    }

    if (this.pattern && Identifier.isIdentifier(this.pattern)) {
      result.patternIdentifier = this.pattern.toJSON();
    }

    if (this.pattern && Money.isMoney(this.pattern)) {
      result.patternMoney = this.pattern.toJSON();
    }

    if (this.pattern && Period.isPeriod(this.pattern)) {
      result.patternPeriod = this.pattern.toJSON();
    }

    if (this.pattern && Quantity.isQuantity(this.pattern)) {
      result.patternQuantity = this.pattern.toJSON();
    }

    if (this.pattern && Range.isRange(this.pattern)) {
      result.patternRange = this.pattern.toJSON();
    }

    if (this.pattern && Ratio.isRatio(this.pattern)) {
      result.patternRatio = this.pattern.toJSON();
    }

    if (this.pattern && Reference.isReference(this.pattern)) {
      result.patternReference = this.pattern.toJSON();
    }

    if (this.pattern && SampledData.isSampledData(this.pattern)) {
      result.patternSampledData = this.pattern.toJSON();
    }

    if (this.pattern && Signature.isSignature(this.pattern)) {
      result.patternSignature = this.pattern.toJSON();
    }

    if (this.pattern && Timing.isTiming(this.pattern)) {
      result.patternTiming = this.pattern.toJSON();
    }

    if (this.pattern && ContactDetail.isContactDetail(this.pattern)) {
      result.patternContactDetail = this.pattern.toJSON();
    }

    if (this.pattern && Contributor.isContributor(this.pattern)) {
      result.patternContributor = this.pattern.toJSON();
    }

    if (this.pattern && DataRequirement.isDataRequirement(this.pattern)) {
      result.patternDataRequirement = this.pattern.toJSON();
    }

    if (this.pattern && Expression.isExpression(this.pattern)) {
      result.patternExpression = this.pattern.toJSON();
    }

    if (this.pattern && ParameterDefinition.isParameterDefinition(this.pattern)) {
      result.patternParameterDefinition = this.pattern.toJSON();
    }

    if (this.pattern && RelatedArtifact.isRelatedArtifact(this.pattern)) {
      result.patternRelatedArtifact = this.pattern.toJSON();
    }

    if (this.pattern && TriggerDefinition.isTriggerDefinition(this.pattern)) {
      result.patternTriggerDefinition = this.pattern.toJSON();
    }

    if (this.pattern && UsageContext.isUsageContext(this.pattern)) {
      result.patternUsageContext = this.pattern.toJSON();
    }

    if (this.pattern && Dosage.isDosage(this.pattern)) {
      result.patternDosage = this.pattern.toJSON();
    }

    if (this.pattern && Meta.isMeta(this.pattern)) {
      result.patternMeta = this.pattern.toJSON();
    }

    if (this.example) {
      result.example = this.example.map((x) => x.toJSON());
    }

    if (this.minValue && PrimitiveDate.isPrimitiveDate(this.minValue)) {
      result.minValueDate = this.minValue.value;
      result._minValueDate = Extension.serializePrimitiveExtension(this.minValue);
    }

    if (this.minValue && PrimitiveDateTime.isPrimitiveDateTime(this.minValue)) {
      result.minValueDateTime = this.minValue.value;
      result._minValueDateTime = Extension.serializePrimitiveExtension(this.minValue);
    }

    if (this.minValue && PrimitiveInstant.isPrimitiveInstant(this.minValue)) {
      result.minValueInstant = this.minValue.value;
      result._minValueInstant = Extension.serializePrimitiveExtension(this.minValue);
    }

    if (this.minValue && PrimitiveTime.isPrimitiveTime(this.minValue)) {
      result.minValueTime = this.minValue.value;
      result._minValueTime = Extension.serializePrimitiveExtension(this.minValue);
    }

    if (this.minValue && PrimitiveDecimal.isPrimitiveDecimal(this.minValue)) {
      result.minValueDecimal = this.minValue.value;
      result._minValueDecimal = Extension.serializePrimitiveExtension(this.minValue);
    }

    if (this.minValue && PrimitiveInteger.isPrimitiveInteger(this.minValue)) {
      result.minValueInteger = this.minValue.value;
      result._minValueInteger = Extension.serializePrimitiveExtension(this.minValue);
    }

    if (this.minValue && PrimitivePositiveInt.isPrimitivePositiveInt(this.minValue)) {
      result.minValuePositiveInt = this.minValue.value;
      result._minValuePositiveInt = Extension.serializePrimitiveExtension(this.minValue);
    }

    if (this.minValue && PrimitiveUnsignedInt.isPrimitiveUnsignedInt(this.minValue)) {
      result.minValueUnsignedInt = this.minValue.value;
      result._minValueUnsignedInt = Extension.serializePrimitiveExtension(this.minValue);
    }

    if (this.minValue && Quantity.isQuantity(this.minValue)) {
      result.minValueQuantity = this.minValue.toJSON();
    }

    if (this.maxValue && PrimitiveDate.isPrimitiveDate(this.maxValue)) {
      result.maxValueDate = this.maxValue.value;
      result._maxValueDate = Extension.serializePrimitiveExtension(this.maxValue);
    }

    if (this.maxValue && PrimitiveDateTime.isPrimitiveDateTime(this.maxValue)) {
      result.maxValueDateTime = this.maxValue.value;
      result._maxValueDateTime = Extension.serializePrimitiveExtension(this.maxValue);
    }

    if (this.maxValue && PrimitiveInstant.isPrimitiveInstant(this.maxValue)) {
      result.maxValueInstant = this.maxValue.value;
      result._maxValueInstant = Extension.serializePrimitiveExtension(this.maxValue);
    }

    if (this.maxValue && PrimitiveTime.isPrimitiveTime(this.maxValue)) {
      result.maxValueTime = this.maxValue.value;
      result._maxValueTime = Extension.serializePrimitiveExtension(this.maxValue);
    }

    if (this.maxValue && PrimitiveDecimal.isPrimitiveDecimal(this.maxValue)) {
      result.maxValueDecimal = this.maxValue.value;
      result._maxValueDecimal = Extension.serializePrimitiveExtension(this.maxValue);
    }

    if (this.maxValue && PrimitiveInteger.isPrimitiveInteger(this.maxValue)) {
      result.maxValueInteger = this.maxValue.value;
      result._maxValueInteger = Extension.serializePrimitiveExtension(this.maxValue);
    }

    if (this.maxValue && PrimitivePositiveInt.isPrimitivePositiveInt(this.maxValue)) {
      result.maxValuePositiveInt = this.maxValue.value;
      result._maxValuePositiveInt = Extension.serializePrimitiveExtension(this.maxValue);
    }

    if (this.maxValue && PrimitiveUnsignedInt.isPrimitiveUnsignedInt(this.maxValue)) {
      result.maxValueUnsignedInt = this.maxValue.value;
      result._maxValueUnsignedInt = Extension.serializePrimitiveExtension(this.maxValue);
    }

    if (this.maxValue && Quantity.isQuantity(this.maxValue)) {
      result.maxValueQuantity = this.maxValue.toJSON();
    }

    if (this.maxLength) {
      result.maxLength = this.maxLength.value;
      result._maxLength = Extension.serializePrimitiveExtension(this.maxLength);
    }

    if (this.condition) {
      result.condition = this.condition.filter(x => !!x).map(x => x.value) as typeof result.condition;
      result._condition = Extension.serializePrimitiveExtensionArray(this.condition);
    }

    if (this.constraint) {
      result.constraint = this.constraint.map((x) => x.toJSON());
    }

    if (this.mustSupport) {
      result.mustSupport = this.mustSupport.value;
      result._mustSupport = Extension.serializePrimitiveExtension(this.mustSupport);
    }

    if (this.isModifier) {
      result.isModifier = this.isModifier.value;
      result._isModifier = Extension.serializePrimitiveExtension(this.isModifier);
    }

    if (this.isModifierReason) {
      result.isModifierReason = this.isModifierReason.value;
      result._isModifierReason = Extension.serializePrimitiveExtension(this.isModifierReason);
    }

    if (this.isSummary) {
      result.isSummary = this.isSummary.value;
      result._isSummary = Extension.serializePrimitiveExtension(this.isSummary);
    }

    if (this.binding) {
      result.binding = this.binding.toJSON();
    }

    if (this.mapping) {
      result.mapping = this.mapping.map((x) => x.toJSON());
    }

    return result;
  }

  public clone(): ElementDefinition {
    return ElementDefinition.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "ElementDefinition";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
