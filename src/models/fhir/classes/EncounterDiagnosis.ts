/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  BackboneElement,
  CodeableConcept,
  Extension,
  IEncounterDiagnosis,
  PrimitivePositiveInt,
  Reference,
} from "../internal";

export class EncounterDiagnosis extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "Encounter.Diagnosis";

  public condition?: Reference;

  public use?: CodeableConcept;

  public rank?: PrimitivePositiveInt;

  public static parse(
    json: IEncounterDiagnosis,
    providedInstance: EncounterDiagnosis = new EncounterDiagnosis()
  ): EncounterDiagnosis {
    const newInstance: EncounterDiagnosis = BackboneElement.parse(json, providedInstance);
  
    if (json.condition) {
      newInstance.condition = Reference.parse(json.condition);
    }
    if (json.use) {
      newInstance.use = CodeableConcept.parse(json.use);
    }
    if (json.rank) {
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
  
  public getTypeName(): string {
    return "EncounterDiagnosis";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
