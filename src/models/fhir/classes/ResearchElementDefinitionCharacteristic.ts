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
  IResearchElementDefinitionCharacteristic,
  Period,
  PrimitiveBoolean,
  PrimitiveCanonical,
  PrimitiveDateTime,
  PrimitiveString,
  Timing,
  UsageContext,
  FhirType
} from "../internal";

@FhirType("ResearchElementDefinitionCharacteristic", "BackboneElement")
export class ResearchElementDefinitionCharacteristic extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "ResearchElementDefinition.Characteristic";

  static readonly primaryCodePath: string | null = null;

  @FhirChoice("CodeableConcept", "PrimitiveCanonical", "Expression", "DataRequirement")
  public definition?: CodeableConcept | PrimitiveCanonical | Expression | DataRequirement;

  @FhirList("UsageContext")
  public usageContext?: Array<UsageContext>;

  @FhirField("PrimitiveBoolean")
  public exclude?: PrimitiveBoolean;

  @FhirField("CodeableConcept")
  public unitOfMeasure?: CodeableConcept;

  @FhirField("PrimitiveString")
  public studyEffectiveDescription?: PrimitiveString;

  @FhirChoice("PrimitiveDateTime", "Period", "Duration", "Timing")
  public studyEffective?: PrimitiveDateTime | Period | Duration | Timing;

  @FhirField("Duration")
  public studyEffectiveTimeFromStart?: Duration;

  @FhirField("GroupMeasure")
  public studyEffectiveGroupMeasure?: GroupMeasure;

  @FhirField("PrimitiveString")
  public participantEffectiveDescription?: PrimitiveString;

  @FhirChoice("PrimitiveDateTime", "Period", "Duration", "Timing")
  public participantEffective?: PrimitiveDateTime | Period | Duration | Timing;

  @FhirField("Duration")
  public participantEffectiveTimeFromStart?: Duration;

  @FhirField("GroupMeasure")
  public participantEffectiveGroupMeasure?: GroupMeasure;

  public static parse(
    json: IResearchElementDefinitionCharacteristic,
    providedInstance: ResearchElementDefinitionCharacteristic = new ResearchElementDefinitionCharacteristic()
  ): ResearchElementDefinitionCharacteristic {
    const newInstance: ResearchElementDefinitionCharacteristic = BackboneElement.parse(json, providedInstance);
  
    if (json.definitionCodeableConcept !== undefined) {
      newInstance.definition = CodeableConcept.parse(json.definitionCodeableConcept);
    }
    if (json.definitionCanonical !== undefined) {
      newInstance.definition = PrimitiveCanonical.parsePrimitive(json.definitionCanonical, json._definitionCanonical);
    }
    if (json.definitionExpression !== undefined) {
      newInstance.definition = Expression.parse(json.definitionExpression);
    }
    if (json.definitionDataRequirement !== undefined) {
      newInstance.definition = DataRequirement.parse(json.definitionDataRequirement);
    }
    if (json.usageContext !== undefined) {
      newInstance.usageContext = json.usageContext.map((x) => UsageContext.parse(x));
    }
    if (json.exclude !== undefined) {
      newInstance.exclude = PrimitiveBoolean.parsePrimitive(json.exclude, json._exclude);
    }
    if (json.unitOfMeasure !== undefined) {
      newInstance.unitOfMeasure = CodeableConcept.parse(json.unitOfMeasure);
    }
    if (json.studyEffectiveDescription !== undefined) {
      newInstance.studyEffectiveDescription = PrimitiveString.parsePrimitive(json.studyEffectiveDescription, json._studyEffectiveDescription);
    }
    if (json.studyEffectiveDateTime !== undefined) {
      newInstance.studyEffective = PrimitiveDateTime.parsePrimitive(json.studyEffectiveDateTime, json._studyEffectiveDateTime);
    }
    if (json.studyEffectivePeriod !== undefined) {
      newInstance.studyEffective = Period.parse(json.studyEffectivePeriod);
    }
    if (json.studyEffectiveDuration !== undefined) {
      newInstance.studyEffective = Duration.parse(json.studyEffectiveDuration);
    }
    if (json.studyEffectiveTiming !== undefined) {
      newInstance.studyEffective = Timing.parse(json.studyEffectiveTiming);
    }
    if (json.studyEffectiveTimeFromStart !== undefined) {
      newInstance.studyEffectiveTimeFromStart = Duration.parse(json.studyEffectiveTimeFromStart);
    }
    if (json.studyEffectiveGroupMeasure !== undefined) {
      newInstance.studyEffectiveGroupMeasure = GroupMeasure.parsePrimitive(json.studyEffectiveGroupMeasure, json._studyEffectiveGroupMeasure);
    }
    if (json.participantEffectiveDescription !== undefined) {
      newInstance.participantEffectiveDescription = PrimitiveString.parsePrimitive(json.participantEffectiveDescription, json._participantEffectiveDescription);
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
    if (json.participantEffectiveTimeFromStart !== undefined) {
      newInstance.participantEffectiveTimeFromStart = Duration.parse(json.participantEffectiveTimeFromStart);
    }
    if (json.participantEffectiveGroupMeasure !== undefined) {
      newInstance.participantEffectiveGroupMeasure = GroupMeasure.parsePrimitive(json.participantEffectiveGroupMeasure, json._participantEffectiveGroupMeasure);
    }
    return newInstance;
  }

  public static isResearchElementDefinitionCharacteristic(input?: unknown): input is ResearchElementDefinitionCharacteristic {
    const castInput = input as ResearchElementDefinitionCharacteristic;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "ResearchElementDefinitionCharacteristic";
  }

  public toJSON(): IResearchElementDefinitionCharacteristic {
    const result: IResearchElementDefinitionCharacteristic = super.toJSON();

    if (this.definition && CodeableConcept.isCodeableConcept(this.definition)) {
      result.definitionCodeableConcept = this.definition.toJSON();
    }

    if (this.definition && PrimitiveCanonical.isPrimitiveCanonical(this.definition)) {
      result.definitionCanonical = this.definition.value;
      result._definitionCanonical = Extension.serializePrimitiveExtension(this.definition);
    }

    if (this.definition && Expression.isExpression(this.definition)) {
      result.definitionExpression = this.definition.toJSON();
    }

    if (this.definition && DataRequirement.isDataRequirement(this.definition)) {
      result.definitionDataRequirement = this.definition.toJSON();
    }

    if (this.usageContext) {
      result.usageContext = this.usageContext.map((x) => x.toJSON());
    }

    if (this.exclude) {
      result.exclude = this.exclude.value;
      result._exclude = Extension.serializePrimitiveExtension(this.exclude);
    }

    if (this.unitOfMeasure) {
      result.unitOfMeasure = this.unitOfMeasure.toJSON();
    }

    if (this.studyEffectiveDescription) {
      result.studyEffectiveDescription = this.studyEffectiveDescription.value;
      result._studyEffectiveDescription = Extension.serializePrimitiveExtension(this.studyEffectiveDescription);
    }

    if (this.studyEffective && PrimitiveDateTime.isPrimitiveDateTime(this.studyEffective)) {
      result.studyEffectiveDateTime = this.studyEffective.value;
      result._studyEffectiveDateTime = Extension.serializePrimitiveExtension(this.studyEffective);
    }

    if (this.studyEffective && Period.isPeriod(this.studyEffective)) {
      result.studyEffectivePeriod = this.studyEffective.toJSON();
    }

    if (this.studyEffective && Duration.isDuration(this.studyEffective)) {
      result.studyEffectiveDuration = this.studyEffective.toJSON();
    }

    if (this.studyEffective && Timing.isTiming(this.studyEffective)) {
      result.studyEffectiveTiming = this.studyEffective.toJSON();
    }

    if (this.studyEffectiveTimeFromStart) {
      result.studyEffectiveTimeFromStart = this.studyEffectiveTimeFromStart.toJSON();
    }

    if (this.studyEffectiveGroupMeasure) {
      result.studyEffectiveGroupMeasure = this.studyEffectiveGroupMeasure.value;
      result._studyEffectiveGroupMeasure = Extension.serializePrimitiveExtension(this.studyEffectiveGroupMeasure);
    }

    if (this.participantEffectiveDescription) {
      result.participantEffectiveDescription = this.participantEffectiveDescription.value;
      result._participantEffectiveDescription = Extension.serializePrimitiveExtension(this.participantEffectiveDescription);
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

    if (this.participantEffectiveTimeFromStart) {
      result.participantEffectiveTimeFromStart = this.participantEffectiveTimeFromStart.toJSON();
    }

    if (this.participantEffectiveGroupMeasure) {
      result.participantEffectiveGroupMeasure = this.participantEffectiveGroupMeasure.value;
      result._participantEffectiveGroupMeasure = Extension.serializePrimitiveExtension(this.participantEffectiveGroupMeasure);
    }

    return result;
  }

  public clone(): ResearchElementDefinitionCharacteristic {
    return ResearchElementDefinitionCharacteristic.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "ResearchElementDefinitionCharacteristic";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
