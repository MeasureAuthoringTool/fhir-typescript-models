/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  BackboneElement,
  CodeableConcept,
  DataRequirement,
  Duration,
  Expression,
  Extension,
  FhirChoice,
  FhirField,
  FhirList,
  GroupMeasure,
  IEvidenceVariableCharacteristic,
  Period,
  PrimitiveBoolean,
  PrimitiveCanonical,
  PrimitiveDateTime,
  PrimitiveString,
  Reference,
  Timing,
  TriggerDefinition,
  UsageContext,
  FhirType
} from "../internal";

@FhirType("EvidenceVariableCharacteristic", "BackboneElement")
export class EvidenceVariableCharacteristic extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "EvidenceVariable.Characteristic";

  static readonly primaryCodePath: string | null = null;

  @FhirField("PrimitiveString")
  public description?: PrimitiveString;

  @FhirChoice("Reference", "PrimitiveCanonical", "CodeableConcept", "Expression", "DataRequirement", "TriggerDefinition")
  public definition?: Reference | PrimitiveCanonical | CodeableConcept | Expression | DataRequirement | TriggerDefinition;

  @FhirList("UsageContext")
  public usageContext?: Array<UsageContext>;

  @FhirField("PrimitiveBoolean")
  public exclude?: PrimitiveBoolean;

  @FhirChoice("PrimitiveDateTime", "Period", "Duration", "Timing")
  public participantEffective?: PrimitiveDateTime | Period | Duration | Timing;

  @FhirField("Duration")
  public timeFromStart?: Duration;

  @FhirField("GroupMeasure")
  public groupMeasure?: GroupMeasure;

  public static parse(
    json: IEvidenceVariableCharacteristic,
    providedInstance: EvidenceVariableCharacteristic = new EvidenceVariableCharacteristic()
  ): EvidenceVariableCharacteristic {
    const newInstance: EvidenceVariableCharacteristic = BackboneElement.parse(json, providedInstance);
  
    if (json.description !== undefined) {
      newInstance.description = PrimitiveString.parsePrimitive(json.description, json._description);
    }
    if (json.definitionReference !== undefined) {
      newInstance.definition = Reference.parse(json.definitionReference);
    }
    if (json.definitionCanonical !== undefined) {
      newInstance.definition = PrimitiveCanonical.parsePrimitive(json.definitionCanonical, json._definitionCanonical);
    }
    if (json.definitionCodeableConcept !== undefined) {
      newInstance.definition = CodeableConcept.parse(json.definitionCodeableConcept);
    }
    if (json.definitionExpression !== undefined) {
      newInstance.definition = Expression.parse(json.definitionExpression);
    }
    if (json.definitionDataRequirement !== undefined) {
      newInstance.definition = DataRequirement.parse(json.definitionDataRequirement);
    }
    if (json.definitionTriggerDefinition !== undefined) {
      newInstance.definition = TriggerDefinition.parse(json.definitionTriggerDefinition);
    }
    if (json.usageContext !== undefined) {
      newInstance.usageContext = json.usageContext.map((x) => UsageContext.parse(x));
    }
    if (json.exclude !== undefined) {
      newInstance.exclude = PrimitiveBoolean.parsePrimitive(json.exclude, json._exclude);
    }
    if (json.participantEffectiveDateTime !== undefined) {
      newInstance.participantEffective = PrimitiveDateTime.parsePrimitive(json.participantEffectiveDateTime, json._participantEffectiveDateTime);
    }
    if (json.participantEffectivePeriod !== undefined) {
      newInstance.participantEffective = Period.parse(json.participantEffectivePeriod);
    }
    if (json.participantEffectiveDuration !== undefined) {
      newInstance.participantEffective = Duration.parse(json.participantEffectiveDuration);
    }
    if (json.participantEffectiveTiming !== undefined) {
      newInstance.participantEffective = Timing.parse(json.participantEffectiveTiming);
    }
    if (json.timeFromStart !== undefined) {
      newInstance.timeFromStart = Duration.parse(json.timeFromStart);
    }
    if (json.groupMeasure !== undefined) {
      newInstance.groupMeasure = GroupMeasure.parsePrimitive(json.groupMeasure, json._groupMeasure);
    }
    return newInstance;
  }

  public static isEvidenceVariableCharacteristic(input?: unknown): input is EvidenceVariableCharacteristic {
    const castInput = input as EvidenceVariableCharacteristic;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "EvidenceVariableCharacteristic";
  }

  public toJSON(): IEvidenceVariableCharacteristic {
    const result: IEvidenceVariableCharacteristic = super.toJSON();

    if (this.description) {
      result.description = this.description.value;
      result._description = Extension.serializePrimitiveExtension(this.description);
    }

    if (this.definition && Reference.isReference(this.definition)) {
      result.definitionReference = this.definition.toJSON();
    }

    if (this.definition && PrimitiveCanonical.isPrimitiveCanonical(this.definition)) {
      result.definitionCanonical = this.definition.value;
      result._definitionCanonical = Extension.serializePrimitiveExtension(this.definition);
    }

    if (this.definition && CodeableConcept.isCodeableConcept(this.definition)) {
      result.definitionCodeableConcept = this.definition.toJSON();
    }

    if (this.definition && Expression.isExpression(this.definition)) {
      result.definitionExpression = this.definition.toJSON();
    }

    if (this.definition && DataRequirement.isDataRequirement(this.definition)) {
      result.definitionDataRequirement = this.definition.toJSON();
    }

    if (this.definition && TriggerDefinition.isTriggerDefinition(this.definition)) {
      result.definitionTriggerDefinition = this.definition.toJSON();
    }

    if (this.usageContext) {
      result.usageContext = this.usageContext.map((x) => x.toJSON());
    }

    if (this.exclude) {
      result.exclude = this.exclude.value;
      result._exclude = Extension.serializePrimitiveExtension(this.exclude);
    }

    if (this.participantEffective && PrimitiveDateTime.isPrimitiveDateTime(this.participantEffective)) {
      result.participantEffectiveDateTime = this.participantEffective.value;
      result._participantEffectiveDateTime = Extension.serializePrimitiveExtension(this.participantEffective);
    }

    if (this.participantEffective && Period.isPeriod(this.participantEffective)) {
      result.participantEffectivePeriod = this.participantEffective.toJSON();
    }

    if (this.participantEffective && Duration.isDuration(this.participantEffective)) {
      result.participantEffectiveDuration = this.participantEffective.toJSON();
    }

    if (this.participantEffective && Timing.isTiming(this.participantEffective)) {
      result.participantEffectiveTiming = this.participantEffective.toJSON();
    }

    if (this.timeFromStart) {
      result.timeFromStart = this.timeFromStart.toJSON();
    }

    if (this.groupMeasure) {
      result.groupMeasure = this.groupMeasure.value;
      result._groupMeasure = Extension.serializePrimitiveExtension(this.groupMeasure);
    }

    return result;
  }

  public clone(): EvidenceVariableCharacteristic {
    return EvidenceVariableCharacteristic.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "EvidenceVariableCharacteristic";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
