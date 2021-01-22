/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  CodeableConcept,
  DomainResource,
  Extension,
  FhirField,
  FhirList,
  FHIRSubstanceStatus,
  Identifier,
  ISubstance,
  PrimitiveString,
  SubstanceIngredient,
  SubstanceInstance,
  FhirType
} from "../internal";

@FhirType("Substance", "DomainResource")
export class Substance extends DomainResource {
  static readonly baseType: string = "FHIR.DomainResource";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "Substance";

  static readonly primaryCodePath: string | null = "code";

  @FhirList("Identifier")
  public identifier?: Array<Identifier>;

  @FhirField("FHIRSubstanceStatus")
  public status?: FHIRSubstanceStatus;

  @FhirList("CodeableConcept")
  public category?: Array<CodeableConcept>;

  @FhirField("CodeableConcept")
  public code?: CodeableConcept;

  @FhirField("PrimitiveString")
  public description?: PrimitiveString;

  @FhirList("SubstanceInstance")
  public instance?: Array<SubstanceInstance>;

  @FhirList("SubstanceIngredient")
  public ingredient?: Array<SubstanceIngredient>;

  get primaryCode(): CodeableConcept | undefined {
    return this?.code;
  }

  set primaryCode(primaryCode: CodeableConcept | undefined) {
    this.code = primaryCode;
  }

  public static parse(
    json: ISubstance,
    providedInstance: Substance = new Substance()
  ): Substance {
    const newInstance: Substance = DomainResource.parse(json, providedInstance);
  
    if (json.identifier !== undefined) {
      newInstance.identifier = json.identifier.map((x) => Identifier.parse(x));
    }
    if (json.status !== undefined) {
      newInstance.status = FHIRSubstanceStatus.parsePrimitive(json.status, json._status);
    }
    if (json.category !== undefined) {
      newInstance.category = json.category.map((x) => CodeableConcept.parse(x));
    }
    if (json.code !== undefined) {
      newInstance.code = CodeableConcept.parse(json.code);
    }
    if (json.description !== undefined) {
      newInstance.description = PrimitiveString.parsePrimitive(json.description, json._description);
    }
    if (json.instance !== undefined) {
      newInstance.instance = json.instance.map((x) => SubstanceInstance.parse(x));
    }
    if (json.ingredient !== undefined) {
      newInstance.ingredient = json.ingredient.map((x) => SubstanceIngredient.parse(x));
    }
    return newInstance;
  }

  public static isSubstance(input?: unknown): input is Substance {
    const castInput = input as Substance;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "Substance";
  }

  public toJSON(): ISubstance {
    const result: ISubstance = super.toJSON();

    if (this.identifier) {
      result.identifier = this.identifier.map((x) => x.toJSON());
    }

    if (this.status) {
      result.status = this.status.value;
      result._status = Extension.serializePrimitiveExtension(this.status);
    }

    if (this.category) {
      result.category = this.category.map((x) => x.toJSON());
    }

    if (this.code) {
      result.code = this.code.toJSON();
    }

    if (this.description) {
      result.description = this.description.value;
      result._description = Extension.serializePrimitiveExtension(this.description);
    }

    if (this.instance) {
      result.instance = this.instance.map((x) => x.toJSON());
    }

    if (this.ingredient) {
      result.ingredient = this.ingredient.map((x) => x.toJSON());
    }

    return result;
  }

  public clone(): Substance {
    return Substance.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "Substance";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
