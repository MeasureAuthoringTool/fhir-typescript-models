/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  BackboneElement,
  CodeableConcept,
  Extension,
  Identifier,
  ISubstanceSpecificationMoiety,
  PrimitiveString,
  Quantity,
} from "../internal";

export class SubstanceSpecificationMoiety extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "SubstanceSpecification.Moiety";

  public role?: CodeableConcept;

  public identifier?: Identifier;

  public name?: PrimitiveString;

  public stereochemistry?: CodeableConcept;

  public opticalActivity?: CodeableConcept;

  public molecularFormula?: PrimitiveString;

  public amount?: Quantity | PrimitiveString;

  public static parse(
    json: ISubstanceSpecificationMoiety,
    providedInstance: SubstanceSpecificationMoiety = new SubstanceSpecificationMoiety()
  ): SubstanceSpecificationMoiety {
    const newInstance: SubstanceSpecificationMoiety = BackboneElement.parse(json, providedInstance);
  
    if (json.role !== undefined) {
      newInstance.role = CodeableConcept.parse(json.role);
    }
    if (json.identifier !== undefined) {
      newInstance.identifier = Identifier.parse(json.identifier);
    }
    if (json.name !== undefined) {
      newInstance.name = PrimitiveString.parsePrimitive(json.name, json._name);
    }
    if (json.stereochemistry !== undefined) {
      newInstance.stereochemistry = CodeableConcept.parse(json.stereochemistry);
    }
    if (json.opticalActivity !== undefined) {
      newInstance.opticalActivity = CodeableConcept.parse(json.opticalActivity);
    }
    if (json.molecularFormula !== undefined) {
      newInstance.molecularFormula = PrimitiveString.parsePrimitive(json.molecularFormula, json._molecularFormula);
    }
    if (json.amountQuantity !== undefined) {
      newInstance.amount = Quantity.parse(json.amountQuantity);
    }
    if (json.amountString !== undefined) {
      newInstance.amount = PrimitiveString.parsePrimitive(json.amountString, json._amountString);
    }
    return newInstance;
  }

  public static isSubstanceSpecificationMoiety(input?: unknown): input is SubstanceSpecificationMoiety {
    const castInput = input as SubstanceSpecificationMoiety;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "SubstanceSpecificationMoiety";
  }

  public toJSON(): ISubstanceSpecificationMoiety {
    const result: ISubstanceSpecificationMoiety = super.toJSON();

    if (this.role) {
      result.role = this.role.toJSON();
    }

    if (this.identifier) {
      result.identifier = this.identifier.toJSON();
    }

    if (this.name) {
      result.name = this.name.value;
      result._name = Extension.serializePrimitiveExtension(this.name);
    }

    if (this.stereochemistry) {
      result.stereochemistry = this.stereochemistry.toJSON();
    }

    if (this.opticalActivity) {
      result.opticalActivity = this.opticalActivity.toJSON();
    }

    if (this.molecularFormula) {
      result.molecularFormula = this.molecularFormula.value;
      result._molecularFormula = Extension.serializePrimitiveExtension(this.molecularFormula);
    }

    if (this.amount && Quantity.isQuantity(this.amount)) {
      result.amountQuantity = this.amount.toJSON();
    }

    if (this.amount && PrimitiveString.isPrimitiveString(this.amount)) {
      result.amountString = this.amount.value;
      result._amountString = Extension.serializePrimitiveExtension(this.amount);
    }

    return result;
  }

  public clone(): SubstanceSpecificationMoiety {
    return SubstanceSpecificationMoiety.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "SubstanceSpecificationMoiety";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
