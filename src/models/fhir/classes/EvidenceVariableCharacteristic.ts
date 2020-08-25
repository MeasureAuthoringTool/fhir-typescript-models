/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  BackboneElement,
  CodeableConcept,
  DataRequirement,
  Duration,
  Expression,
  Extension,
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
} from "../internal";

export class EvidenceVariableCharacteristic extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "EvidenceVariable.Characteristic";

  public description?: PrimitiveString;

  public definition?: Reference | PrimitiveCanonical | CodeableConcept | Expression | DataRequirement | TriggerDefinition;

  public usageContext?: Array<UsageContext>;

  public exclude?: PrimitiveBoolean;

  public participantEffective?: PrimitiveDateTime | Period | Duration | Timing;

  public timeFromStart?: Duration;

  public groupMeasure?: GroupMeasure;

  public static parse(
    json: IEvidenceVariableCharacteristic,
    providedInstance: EvidenceVariableCharacteristic = new EvidenceVariableCharacteristic()
  ): EvidenceVariableCharacteristic {
    const newInstance: EvidenceVariableCharacteristic = BackboneElement.parse(json, providedInstance);
  
    if (json.description) {
      newInstance.description = PrimitiveString.parsePrimitive(json.description, json._description);
    }
    if (json.definitionReference) {
      newInstance.definition = Reference.parse(json.definitionReference);
    }
    if (json.definitionCanonical) {
      newInstance.definition = PrimitiveCanonical.parsePrimitive(json.definitionCanonical, json._definitionCanonical);
    }
    if (json.definitionCodeableConcept) {
      newInstance.definition = CodeableConcept.parse(json.definitionCodeableConcept);
    }
    if (json.definitionExpression) {
      newInstance.definition = Expression.parse(json.definitionExpression);
    }
    if (json.definitionDataRequirement) {
      newInstance.definition = DataRequirement.parse(json.definitionDataRequirement);
    }
    if (json.definitionTriggerDefinition) {
      newInstance.definition = TriggerDefinition.parse(json.definitionTriggerDefinition);
    }
    if (json.usageContext) {
      newInstance.usageContext = json.usageContext.map((x) => UsageContext.parse(x));
    }
    if (json.exclude) {
      newInstance.exclude = PrimitiveBoolean.parsePrimitive(json.exclude, json._exclude);
    }
    if (json.participantEffectiveDateTime) {
      newInstance.participantEffective = PrimitiveDateTime.parsePrimitive(json.participantEffectiveDateTime, json._participantEffectiveDateTime);
    }
    if (json.participantEffectivePeriod) {
      newInstance.participantEffective = Period.parse(json.participantEffectivePeriod);
    }
    if (json.participantEffectiveDuration) {
      newInstance.participantEffective = Duration.parse(json.participantEffectiveDuration);
    }
    if (json.participantEffectiveTiming) {
      newInstance.participantEffective = Timing.parse(json.participantEffectiveTiming);
    }
    if (json.timeFromStart) {
      newInstance.timeFromStart = Duration.parse(json.timeFromStart);
    }
    if (json.groupMeasure) {
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
  
  public getTypeName(): string {
    return "EvidenceVariableCharacteristic";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
