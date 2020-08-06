/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  CodeableConcept,
  DomainResource,
  Extension,
  Identifier,
  IMedicinalProductIngredient,
  MedicinalProductIngredientSpecifiedSubstance,
  MedicinalProductIngredientSubstance,
  PrimitiveBoolean,
  Reference,
} from "../internal";

export class MedicinalProductIngredient extends DomainResource {
  static readonly baseType: string = "FHIR.DomainResource";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "MedicinalProductIngredient";

  public identifier?: Identifier;

  public role?: CodeableConcept;

  public allergenicIndicator?: PrimitiveBoolean;

  public manufacturer?: Array<Reference>;

  public specifiedSubstance?: Array<MedicinalProductIngredientSpecifiedSubstance>;

  public substance?: MedicinalProductIngredientSubstance;

  public static parse(
    json: IMedicinalProductIngredient,
    providedInstance: MedicinalProductIngredient = new MedicinalProductIngredient()
  ): MedicinalProductIngredient {
    const newInstance: MedicinalProductIngredient = DomainResource.parse(json, providedInstance);
  
    if (json.identifier) {
      newInstance.identifier = Identifier.parse(json.identifier);
    }
    if (json.role) {
      newInstance.role = CodeableConcept.parse(json.role);
    }
    if (json.allergenicIndicator) {
      newInstance.allergenicIndicator = PrimitiveBoolean.parsePrimitive(json.allergenicIndicator, json._allergenicIndicator);
    }
    if (json.manufacturer) {
      newInstance.manufacturer = json.manufacturer.map((x) => Reference.parse(x));
    }
    if (json.specifiedSubstance) {
      newInstance.specifiedSubstance = json.specifiedSubstance.map((x) => MedicinalProductIngredientSpecifiedSubstance.parse(x));
    }
    if (json.substance) {
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
  
  public getTypeName(): string {
    return "MedicinalProductIngredient";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
