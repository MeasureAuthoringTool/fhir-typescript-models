/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  CodeableConcept,
  DomainResource,
  Extension,
  FhirField,
  FhirList,
  Identifier,
  IMedicinalProductIngredient,
  MedicinalProductIngredientSpecifiedSubstance,
  MedicinalProductIngredientSubstance,
  PrimitiveBoolean,
  Reference,
  FhirType
} from "../internal";

@FhirType("MedicinalProductIngredient", "DomainResource")
export class MedicinalProductIngredient extends DomainResource {
  static readonly baseType: string = "FHIR.DomainResource";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "MedicinalProductIngredient";

  static readonly primaryCodePath: string | null = null;

  @FhirField("Identifier")
  public identifier?: Identifier;

  @FhirField("CodeableConcept")
  public role?: CodeableConcept;

  @FhirField("PrimitiveBoolean")
  public allergenicIndicator?: PrimitiveBoolean;

  @FhirList("Reference")
  public manufacturer?: Array<Reference>;

  @FhirList("MedicinalProductIngredientSpecifiedSubstance")
  public specifiedSubstance?: Array<MedicinalProductIngredientSpecifiedSubstance>;

  @FhirField("MedicinalProductIngredientSubstance")
  public substance?: MedicinalProductIngredientSubstance;

  public static parse(
    json: IMedicinalProductIngredient,
    providedInstance: MedicinalProductIngredient = new MedicinalProductIngredient()
  ): MedicinalProductIngredient {
    const newInstance: MedicinalProductIngredient = DomainResource.parse(json, providedInstance);
  
    if (json.identifier !== undefined) {
      newInstance.identifier = Identifier.parse(json.identifier);
    }
    if (json.role !== undefined) {
      newInstance.role = CodeableConcept.parse(json.role);
    }
    if (json.allergenicIndicator !== undefined) {
      newInstance.allergenicIndicator = PrimitiveBoolean.parsePrimitive(json.allergenicIndicator, json._allergenicIndicator);
    }
    if (json.manufacturer !== undefined) {
      newInstance.manufacturer = json.manufacturer.map((x) => Reference.parse(x));
    }
    if (json.specifiedSubstance !== undefined) {
      newInstance.specifiedSubstance = json.specifiedSubstance.map((x) => MedicinalProductIngredientSpecifiedSubstance.parse(x));
    }
    if (json.substance !== undefined) {
      newInstance.substance = MedicinalProductIngredientSubstance.parse(json.substance);
    }
    return newInstance;
  }

  public static isMedicinalProductIngredient(input?: unknown): input is MedicinalProductIngredient {
    const castInput = input as MedicinalProductIngredient;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "MedicinalProductIngredient";
  }

  public toJSON(): IMedicinalProductIngredient {
    const result: IMedicinalProductIngredient = super.toJSON();

    if (this.identifier) {
      result.identifier = this.identifier.toJSON();
    }

    if (this.role) {
      result.role = this.role.toJSON();
    }

    if (this.allergenicIndicator) {
      result.allergenicIndicator = this.allergenicIndicator.value;
      result._allergenicIndicator = Extension.serializePrimitiveExtension(this.allergenicIndicator);
    }

    if (this.manufacturer) {
      result.manufacturer = this.manufacturer.map((x) => x.toJSON());
    }

    if (this.specifiedSubstance) {
      result.specifiedSubstance = this.specifiedSubstance.map((x) => x.toJSON());
    }

    if (this.substance) {
      result.substance = this.substance.toJSON();
    }

    return result;
  }

  public clone(): MedicinalProductIngredient {
    return MedicinalProductIngredient.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "MedicinalProductIngredient";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
