/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  BackboneElement,
  CodeableConcept,
  Duration,
  Extension,
  FhirField,
  FhirList,
  ISpecimenDefinitionTypeTested,
  PrimitiveBoolean,
  PrimitiveString,
  SpecimenContainedPreference,
  SpecimenDefinitionTypeTestedContainer,
  SpecimenDefinitionTypeTestedHandling,
  FhirType
} from "../internal";

@FhirType("SpecimenDefinitionTypeTested", "BackboneElement")
export class SpecimenDefinitionTypeTested extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "SpecimenDefinition.TypeTested";

  static readonly primaryCodePath: string | null = null;

  @FhirField("PrimitiveBoolean")
  public isDerived?: PrimitiveBoolean;

  @FhirField("CodeableConcept")
  public type?: CodeableConcept;

  @FhirField("SpecimenContainedPreference")
  public preference?: SpecimenContainedPreference;

  @FhirField("SpecimenDefinitionTypeTestedContainer")
  public container?: SpecimenDefinitionTypeTestedContainer;

  @FhirField("PrimitiveString")
  public requirement?: PrimitiveString;

  @FhirField("Duration")
  public retentionTime?: Duration;

  @FhirList("CodeableConcept")
  public rejectionCriterion?: Array<CodeableConcept>;

  @FhirList("SpecimenDefinitionTypeTestedHandling")
  public handling?: Array<SpecimenDefinitionTypeTestedHandling>;

  public static parse(
    json: ISpecimenDefinitionTypeTested,
    providedInstance: SpecimenDefinitionTypeTested = new SpecimenDefinitionTypeTested()
  ): SpecimenDefinitionTypeTested {
    const newInstance: SpecimenDefinitionTypeTested = BackboneElement.parse(json, providedInstance);
  
    if (json.isDerived !== undefined) {
      newInstance.isDerived = PrimitiveBoolean.parsePrimitive(json.isDerived, json._isDerived);
    }
    if (json.type !== undefined) {
      newInstance.type = CodeableConcept.parse(json.type);
    }
    if (json.preference !== undefined) {
      newInstance.preference = SpecimenContainedPreference.parsePrimitive(json.preference, json._preference);
    }
    if (json.container !== undefined) {
      newInstance.container = SpecimenDefinitionTypeTestedContainer.parse(json.container);
    }
    if (json.requirement !== undefined) {
      newInstance.requirement = PrimitiveString.parsePrimitive(json.requirement, json._requirement);
    }
    if (json.retentionTime !== undefined) {
      newInstance.retentionTime = Duration.parse(json.retentionTime);
    }
    if (json.rejectionCriterion !== undefined) {
      newInstance.rejectionCriterion = json.rejectionCriterion.map((x) => CodeableConcept.parse(x));
    }
    if (json.handling !== undefined) {
      newInstance.handling = json.handling.map((x) => SpecimenDefinitionTypeTestedHandling.parse(x));
    }
    return newInstance;
  }

  public static isSpecimenDefinitionTypeTested(input?: unknown): input is SpecimenDefinitionTypeTested {
    const castInput = input as SpecimenDefinitionTypeTested;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "SpecimenDefinitionTypeTested";
  }

  public toJSON(): ISpecimenDefinitionTypeTested {
    const result: ISpecimenDefinitionTypeTested = super.toJSON();

    if (this.isDerived) {
      result.isDerived = this.isDerived.value;
      result._isDerived = Extension.serializePrimitiveExtension(this.isDerived);
    }

    if (this.type) {
      result.type = this.type.toJSON();
    }

    if (this.preference) {
      result.preference = this.preference.value;
      result._preference = Extension.serializePrimitiveExtension(this.preference);
    }

    if (this.container) {
      result.container = this.container.toJSON();
    }

    if (this.requirement) {
      result.requirement = this.requirement.value;
      result._requirement = Extension.serializePrimitiveExtension(this.requirement);
    }

    if (this.retentionTime) {
      result.retentionTime = this.retentionTime.toJSON();
    }

    if (this.rejectionCriterion) {
      result.rejectionCriterion = this.rejectionCriterion.map((x) => x.toJSON());
    }

    if (this.handling) {
      result.handling = this.handling.map((x) => x.toJSON());
    }

    return result;
  }

  public clone(): SpecimenDefinitionTypeTested {
    return SpecimenDefinitionTypeTested.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "SpecimenDefinitionTypeTested";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
