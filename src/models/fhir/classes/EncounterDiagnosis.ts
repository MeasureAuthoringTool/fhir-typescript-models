/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  BackboneElement,
  CodeableConcept,
  Extension,
  FhirField,
  IEncounterDiagnosis,
  PrimitivePositiveInt,
  Reference,
  FhirType
} from "../internal";

@FhirType("EncounterDiagnosis", "BackboneElement")
export class EncounterDiagnosis extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "Encounter.Diagnosis";

  static readonly primaryCodePath: string | null = null;

  @FhirField("Reference")
  public condition?: Reference;

  @FhirField("CodeableConcept")
  public use?: CodeableConcept;

  @FhirField("PrimitivePositiveInt")
  public rank?: PrimitivePositiveInt;

  public static parse(
    json: IEncounterDiagnosis,
    providedInstance: EncounterDiagnosis = new EncounterDiagnosis()
  ): EncounterDiagnosis {
    const newInstance: EncounterDiagnosis = BackboneElement.parse(json, providedInstance);
  
    if (json.condition !== undefined) {
      newInstance.condition = Reference.parse(json.condition);
    }
    if (json.use !== undefined) {
      newInstance.use = CodeableConcept.parse(json.use);
    }
    if (json.rank !== undefined) {
      newInstance.rank = PrimitivePositiveInt.parsePrimitive(json.rank, json._rank);
    }
    return newInstance;
  }

  public static isEncounterDiagnosis(input?: unknown): input is EncounterDiagnosis {
    const castInput = input as EncounterDiagnosis;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "EncounterDiagnosis";
  }

  public toJSON(): IEncounterDiagnosis {
    const result: IEncounterDiagnosis = super.toJSON();

    if (this.condition) {
      result.condition = this.condition.toJSON();
    }

    if (this.use) {
      result.use = this.use.toJSON();
    }

    if (this.rank) {
      result.rank = this.rank.value;
      result._rank = Extension.serializePrimitiveExtension(this.rank);
    }

    return result;
  }

  public clone(): EncounterDiagnosis {
    return EncounterDiagnosis.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "EncounterDiagnosis";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
