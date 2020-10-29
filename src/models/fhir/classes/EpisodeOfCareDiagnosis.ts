/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  BackboneElement,
  CodeableConcept,
  Extension,
  IEpisodeOfCareDiagnosis,
  PrimitivePositiveInt,
  Reference,
  FieldMetadata
} from "../internal";

export class EpisodeOfCareDiagnosis extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "EpisodeOfCare.Diagnosis";
  
  static readonly primaryCodePath: string | null = null;

  static get fieldInfo(): Array<FieldMetadata> {
    return [...BackboneElement.fieldInfo, {
      fieldName: "condition",
      fieldType: [Reference],
      isArray: false
    }, {
      fieldName: "role",
      fieldType: [CodeableConcept],
      isArray: false
    }, {
      fieldName: "rank",
      fieldType: [PrimitivePositiveInt],
      isArray: false
    }];
  }

  public condition?: Reference;

  public role?: CodeableConcept;

  public rank?: PrimitivePositiveInt;

  public static parse(
    json: IEpisodeOfCareDiagnosis,
    providedInstance: EpisodeOfCareDiagnosis = new EpisodeOfCareDiagnosis()
  ): EpisodeOfCareDiagnosis {
    const newInstance: EpisodeOfCareDiagnosis = BackboneElement.parse(json, providedInstance);
  
    if (json.condition !== undefined) {
      newInstance.condition = Reference.parse(json.condition);
    }
    if (json.role !== undefined) {
      newInstance.role = CodeableConcept.parse(json.role);
    }
    if (json.rank !== undefined) {
      newInstance.rank = PrimitivePositiveInt.parsePrimitive(json.rank, json._rank);
    }
    return newInstance;
  }

  public static isEpisodeOfCareDiagnosis(input?: unknown): input is EpisodeOfCareDiagnosis {
    const castInput = input as EpisodeOfCareDiagnosis;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "EpisodeOfCareDiagnosis";
  }

  public toJSON(): IEpisodeOfCareDiagnosis {
    const result: IEpisodeOfCareDiagnosis = super.toJSON();

    if (this.condition) {
      result.condition = this.condition.toJSON();
    }

    if (this.role) {
      result.role = this.role.toJSON();
    }

    if (this.rank) {
      result.rank = this.rank.value;
      result._rank = Extension.serializePrimitiveExtension(this.rank);
    }

    return result;
  }

  public clone(): EpisodeOfCareDiagnosis {
    return EpisodeOfCareDiagnosis.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "EpisodeOfCareDiagnosis";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
